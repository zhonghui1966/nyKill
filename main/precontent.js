import { lib, game, ui, get, ai, _status } from '../../../noname.js';
import { characters } from "../character/index.js";
import { card as nyCard } from "../card/nyCard.js";
import zhonghuiFunction from './zhonghuiFunction.js';
export async function precontent(config, originalPack) {
	//后续谋奕添加ai，（遥遥无期
	/*lib.skill._test = {
		trigger: {
			player: "recoverBefore",
		},
		filter() {
			console.log(this.trigger);
		},
	}
	lib.skill._test2 = {
		trigger: {
			player: "useCard",
		},
		forced: true,
		marktext: get.translation("none"),
		filter:(event) => event.respondTo?.length,
		content() {
			console.log(trigger.respondTo[1]);
		},
	}*/
	if (!config.enable) return;
	//自定义函数，见main/zhonghuiFunction.js
	lib.zhonghuiFunction ??= {};
	window.zhonghuiFunction ??= {};
	for (let item in zhonghuiFunction) {
		lib.zhonghuiFunction[item] = zhonghuiFunction[item];
		window.zhonghuiFunction[item] = zhonghuiFunction[item];
	}
	//生成前缀的html
	lib.namePrefix.set("魏", {
	    getSpan: () => {
			//AI跑的
	        return `<span style="color:#1a75ff;display:inline-block;transform:translateY(-1px);text-shadow:0 0 2px rgba(26, 117, 255, 0.5);padding:0 2px;border-radius:2px;background:rgba(26, 117, 255, 0.1);">魏</span>`;
	    },
	});
	lib.namePrefix.set("吴", {
	    getSpan: () => {
			//AI跑的
	        return `<span style="color:#0a8f46;display:inline-block;transform:translateY(-1px);text-shadow:0 0 2px rgba(10, 143, 70, 0.5);padding:0 2px;border-radius:2px;background:rgba(10, 143, 70, 0.1);">吴</span>`;
	    },
	});
	lib.namePrefix.set("怒焰", {
	    getSpan: () => {
			//AI跑的
	        return `<span style="color:#f00;display:inline-block;transform:translateY(-1px);text-shadow:0 0 2px rgba(255,0,0,0.5);">怒</span>`;
	    },
	});
	lib.namePrefix.set("神射", {
		getSpan(prefix, name) {
			return `<span style="color:#faecd1;display:inline-block;transform:translateY(-1px);text-shadow:0 0 2px #faecd1;padding:0 2px;border-radius:2px;background:rgba(10, 143, 70, 0.1);">神射</span>`;
		},
	});
	lib.namePrefix.set("天刃", {
		getSpan(prefix, name) {
			return `<span style="color:#faecd1;display:inline-block;transform:translateY(-1px);text-shadow:0 0 2px #faecd1;padding:0 2px;border-radius:2px;background:rgba(10, 143, 70, 0.1);">天刃</span>`;
		},
	});
	lib.namePrefix.set("初版", {
		getSpan(prefix, name) {
			return `${get.prefixSpan("旧", name)}`;
		},
	});
	lib.namePrefix.set("二版", {
		getSpan(prefix, name) {
			return `${get.prefixSpan("旧", name)}`;
		},
	});
	
	//加入武将包和牌堆
	const importCharacter = async () => {
		for (let packName in characters) {
			const pack = characters[packName];
			await game.import("character", function () {
				return pack;
			});
		}
	};
	const importCard = async () => {
		await game.import("card", function () {
			return nyCard;
		});
	};
	await Promise.all([importCharacter(), importCard()])
		.catch(err => {
			console.error("Failed to import extension 『怒焰武将』: ", err);
			alert("Error:『怒焰武将』扩展导入失败");
		});
	
	//函数定义
	//涉及到改本体一定一定要加扩展前缀！！！既是为了可读性也是为了防止扩展冲突
	let players = lib.element.player,
		contents = lib.element.content,
		events = lib.element.event;
	/**
	 * 检测玩家怒气是否为全场最小
	 * @param { boolean } [isOnly] - 是否为唯一最小
	 * @returns { boolean }
	 */
	players.ny_isMinNuQi = function(isOnly) {
		let min = Infinity,
			nuqi = this.ny_nuqi ?? 0;
		game.players.forEach(current => {
			let num = current.ny_nuqi ?? 0;
			if (min > num && current != this) min = num;
		});
		if (min >= nuqi) {
			if (min == nuqi && isOnly) return false;
			return true;
		} else return false;
	}
	/**
	 * 检测玩家怒气是否为全场最高
	 * @param { boolean } [isOnly] - 是否为唯一最小
	 * @returns { boolean }
	 */
	players.ny_isMaxNuQi = function(isOnly) {
		let max = 0,
			nuqi = this.ny_nuqi ?? 0;
		game.players.forEach(current => {
			let num = current.ny_nuqi ?? 0;
			if (num > max && current != this) max = num;
		});
		if (nuqi >= max) {
			if (nuqi == max && isOnly) return false;
			return true;
		} else return false;
	}
	/**
	 * 初始化玩家怒气
	 * @param { number } [num] 初始怒气上限
	 * @param { string } ["notrigger"] 不触发技能时机 
	 * @returns { GameEventPromise }
	 */
	players.ny_initNuQi = function() {
		const name = "ny_initNuQi";
		let next = game.createEvent(name);
		for (let item of arguments) {
			if (item == "notrigger") next.notrigger = true;
			else if (typeof item == "number") next.num = item;
		}
		next.num ??= 0;
		next.player = this;
		next.setContent(name);
		return next;
	}
	contents.ny_initNuQi = async function(event, trigger, player) {
		if (!event.notrigger) {
			await event.trigger(event.name + "Before");
			await event.trigger(event.name + "Begin");
		}
		player.ny_initNuQiNum ??= 0;
		player.ny_initNuQiMax ??= 0;
		player.ny_initNuQiMax += event.num;
		player.ny_nuqi ??= 0;
		player.ny_nuqiMax ??= 0;
		const string = event.notrigger ? "notrigger" : "trigger";
		if (player.ny_initNuQiMax > 0) await player.ny_gainNuQiMax(player.ny_initNuQiMax, "init", string);
		if (player.ny_initNuQiNum > 0) await player.ny_addNuQi(player.ny_initNuQiNum, "init", string);
		if (!event.notrigger) {
			await event.trigger(event.name);
			await event.trigger(event.name + "End");
			await event.trigger(event.name + "After");
		}
	}
	/**
	 * 令玩家增加怒气
	 * @param { number } [num = 1] 增加的怒气值
	 * @param { string } [type = "skill"] 增加怒气类型，有skill, damage, init, card
	 * @param { string|Array } [log] 游戏显示内容
	 * @param { Player } [source = this] 增加怒气来源玩家
	 * @param { string } ["notrigger"] 不触发技能时机
	 * @returns { GameEventPromise }
	 */
	players.ny_addNuQi = function() {
		if (typeof this.ny_nuqi == "undefined") return;
		if (typeof this.ny_nuqiMax == "undefined") return;
		const name = "ny_addNuQi";
		let next = game.createEvent(name);
		for (let item of arguments) {
			if (["damage", "skill", "init", "card"].includes(item)) next.type = item;
			else if (typeof item == "number") next.num = item;
			else if (get.itemtype(item) == "player") next.source = item;
			else if (item == "notrigger") next.notrigger = true;
			else if (typeof item == "string" && !["trigger", "nosource"].includes(item)) next.log = item;
			else if (Array.isArray(item)) next.log = item;
			
		}
		next.num ??= 1;
		next.type ??= "skill";
		next.source ??= this;
		next.player = this;
		next.setContent(name);
		return next;
	}
	contents.ny_addNuQi = async function(event, trigger, player) {
		if (!event.notrigger) {
			await event.trigger(event.name + "Before");
			await event.trigger(event.name + "Begin");
		}
		//受伤不获得怒气的标记列表
		const noDamageList = ["_ny_jinGong_tianfa", "_ny_zhanFa_longzhenghudou", "_ny_zhuanShu_bazhen_天覆阵"];
		if (event.type == "damage") {
			for (let item of noDamageList) {
				if (player.hasMark(item)) {
					await event.trigger(event.name + "Cancelled");
					return;
				}
			}
		}
		player.ny_nuqi += event.num;
		player.markSkill("_ny_getNuqi");
		if (!event.notrigger) {
			await event.trigger(event.name);
			await event.trigger("ny_changeNuQi");
		}
		event.overNum = 0;
		if (player.ny_nuqi > player.ny_nuqiMax) {
			event.overNum = player.ny_nuqi - player.ny_nuqiMax;
			player.ny_nuqi = player.ny_nuqiMax;
		}
		event.logNum = Math.max(event.num - event.overNum, 0);
		if (event.logNum > 0 && event.type !== "init") {
			if (!event.log) {
				event.log = [];
				if (event.source) event.log.push(event.source, "令");
				event.log.push(player, "获得了" + get.cnNumber(event.logNum) + "点怒气");
			}
			if (Array.isArray(event.log)) game.log(...event.log);
			else game.log(event.log);
		} 
		if (!event.notrigger) {
			await event.trigger(event.name + "End");
			await event.trigger(event.name + "After");
		}
	}
	/**
	 * 令玩家失去怒气
	 * @param { number } [num = 1] 失去的怒气值
	 * @param { string } [type = "skill"] 失去怒气类型，有skill, damage, init, card
	 * @param { string|Array } [log] 游戏显示内容
	 * @param { Player } [source = this] 失去怒气来源玩家
	 * @param { string } ["notrigger"] 不触发技能时机
	 * @returns { GameEventPromise }
	 */
	players.ny_loseNuQi = function() {
		if (typeof this.ny_nuqi == "undefined") return;
		if (typeof this.ny_nuqiMax == "undefined") return;
		const name = "ny_loseNuQi";
		let next = game.createEvent(name);
		for (let item of arguments) {
			if (["damage", "skill", "init", "card"].includes(item)) next.type = item;
			else if (typeof item == "number") next.num = item;
			else if (get.itemtype(item) == "player") next.source = item;
			else if (item == "notrigger") next.notrigger = true;
			else if (typeof item == "string" && !["trigger", "nosource"].includes(item)) next.log = item;
			else if (Array.isArray(item)) next.log = item;
		}
		next.num ??= 1;
		next.type ??= "skill";
		next.source ??= this;
		next.player = this;
		next.setContent(name);
		return next;
	}
	contents.ny_loseNuQi = async function(event, trigger, player) {
		if (!event.notrigger) {
			await event.trigger(event.name + "Before");
			await event.trigger(event.name + "Begin");
		}
		player.ny_nuqi -= event.num;
		if (!event.notrigger) {
			await event.trigger(event.name);
			await event.trigger("ny_changeNuQi");
		}
		event.overNum = 0;
		if (player.ny_nuqi < 0) {
			event.overNum = 0 - player.ny_nuqi;
			player.ny_nuqi = 0;
		}
		event.logNum = Math.max(event.num - event.overNum, 0);
		if (event.logNum > 0 && event.type !== "init") {
			if (!event.log) {
				event.log = [];
				if (event.source) event.log.push(event.source, "令");
				event.log.push(player, "减少了" + get.cnNumber(event.logNum) + "点怒气");
			}
			if (Array.isArray(event.log)) game.log(...event.log);
			else game.log(event.log);
		} 
		if (!event.notrigger) {
			await event.trigger(event.name + "End");
			await event.trigger(event.name + "After");
		}
	}
	/**
	 * 令玩家增加怒气上限
	 * @param { number } [num = 1] 增加的怒气上限值
	 * @param { string } [type = "skill"] 增加怒气上限类型，有skill, damage, init, card
	 * @param { string|Array } [log] 游戏显示内容
	 * @param { Player } [source = this] 增加怒气上限来源玩家
	 * @param { string } ["notrigger"] 不触发技能时机
	 * @returns { GameEventPromise }
	 */
	players.ny_gainNuQiMax = function() {
		const name = "ny_gainNuQiMax";
		let next = game.createEvent(name);
		for (let item of arguments) {
			if (["damage", "skill", "init", "card"].includes(item)) next.type = item;
			else if (typeof item == "number") next.num = item;
			else if (get.itemtype(item) == "player") next.source = item;
			else if (item == "notrigger") next.notrigger = true;
			else if (typeof item == "string" && !["trigger", "nosource"].includes(item)) next.log = item;
			else if (Array.isArray(item)) next.log = item;
		}
		next.num ??= 1;
		next.type ??= "skill";
		next.source ??= this;
		next.player = this;
		next.setContent(name);
		return next;
	}
	contents.ny_gainNuQiMax = async function(event, trigger, player) {
		if (!event.notrigger) await event.trigger(event.name + "Before");
		const string = event.notrigger ? "notrigger" : "trigger";
		if (typeof player.ny_nuqiMax == "undefined") await player.ny_initNuQi(string);
		if (!event.notrigger) await event.trigger(event.name + "Begin");
		player.ny_nuqiMax += event.num;
		player.markSkill("_ny_getNuqi");
		if (!event.notrigger) await event.trigger(event.name);
		if (event.type !== "init") {
			if (!event.log) {
				event.log = [];
				if (event.source) event.log.push(event.source, "令");
				event.log.push(player, "获得了" + get.cnNumber(event.num) + "点怒气上限");
			}
			if (Array.isArray(event.log)) game.log(...event.log);
			else game.log(event.log);
		}
		if (!event.notrigger) {
			await event.trigger(event.name + "End");
			await event.trigger(event.name + "After");
		}
	}
	/**
	 * 令玩家减少怒气上限
	 * @param { number } [num = 1] 增加的怒气上限值
	 * @param { string } [type = "skill"] 增加怒气上限类型，有skill, damage, init, card
	 * @param { string|Array } [log] 游戏显示内容
	 * @param { Player } [source = this] 增加怒气上限来源玩家
	 * @param { string } ["notrigger"] 不触发技能时机
	 * @returns { GameEventPromise }
	 */
	players.ny_loseNuQiMax = function() {
		if (typeof this.ny_nuqi == "undefined") return;
		if (typeof this.ny_nuqiMax == "undefined") return;
		const name = "ny_loseNuQiMax";
		let next = game.createEvent(name);
		for (let item of arguments) {
			if (["damage", "skill", "init", "card"].includes(item)) next.type = item;
			else if (typeof item == "number") next.num = item;
			else if (get.itemtype(item) == "player") next.source = item;
			else if (item == "notrigger") next.notrigger = true;
			else if (typeof item == "string" && !["trigger", "nosource"].includes(item)) next.log = item;
			else if (Array.isArray(item)) next.log = item;
		}
		if (!next.num) next.num = 1;
		if (!next.type) next.type = "skill";
		if (!next.source) next.source = this;
		next.player = this;
		next.setContent(name);
		return next;
	}
	contents.ny_loseNuQiMax = async function(event, trigger, player) {
		if (!event.notrigger) {
			await event.trigger(event.name + "Before");
			await event.trigger(event.name + "Begin");
		}
		const string = event.notrigger ? "notrigger" : "trigger",
			source = event.source || "nosource";
		if (event.num > player.ny_nuqiMax) event.num = player.ny_nuqiMax;
		player.ny_nuqiMax -= event.num;
		if (player.ny_nuqiMax == 0) {
			player.unmarkSkill("_ny_getNuqi");
		}
		if (player.ny_nuqi > player.ny_nuqiMax) await player.ny_loseNuQi(string, source, player.ny_nuqi - player.ny_nuqiMax, event.type);
		if (!event.notrigger) await event.trigger(event.name);
		if (event.type !== "init") {
			if (!event.log) {
				event.log = [];
				if (event.source) event.log.push(event.source, "令");
				event.log.push(player, "减少了" + get.cnNumber(event.num) + "点怒气上限");
			}
			if (Array.isArray(event.log)) game.log(...event.log);
			else game.log(event.log);
		}
		if (!event.notrigger) {
			await event.trigger(event.name + "End");
			await event.trigger(event.name + "After");
		}
	}
	/**
	 * 检测玩家是否能发动某个符石
	 * @param { string } [name] 符石ID
	 * @param { string } ["mod"] 无视符石次数限制
	 * @returns { boolean }
	 */
	players.ny_filterStone = function() {
		if (!lib.skill._ny_getFuShi) return false;
		if (this.ny_fushiId?.length == 0 || !this.ny_fushiId) return false;
		const name = arguments[0],
			mod = arguments.length > 1 ? true : false;
		if (name.includes("zhuanShu")) {
			if (this.ny_disabledStones?.includes("zhuanShu")) return false;
			if (!this.ny_zhuanShuFuShiId?.some(id => id == name)) return false;
			let id = this.ny_zhuanShuFuShiId.find(id => id == name);
			id = this.ny_zhuanShuFuShiId.indexOf(id);
			return this.ny_fushiTime?.[4+id] > 0 || mod;
		} else {
			let type;
			const standardList = ["jinGong", "fangYu", "moPai", "nuQi", "zhanFa"];
			for (let item of standardList) {
				if (name.includes(item)) type = item;
			}
			if (!type) return false;
			if (this.ny_disabledStones?.includes(type)) return false;
			let idNum = lib.skill._ny_getFuShi.obj[type]?.indexOf(name) + 1,
				typeNum = standardList.indexOf(type);
			if (!idNum) return false;
			if (type == "zhanFa" || mod) return this.ny_fushiId?.[4] == idNum;
			return this.ny_fushiId?.[typeNum] == idNum && this.ny_fushiTime?.[typeNum] > 0;
		}
	}
	/**
	 * 令玩家发动某个符石（扣除使用次数）
	 * @param { string } [name] 符石ID
	 * @param { string } ["notrigger"] 不触发技能时机
	 * @returns { GameEventPromise }
	 */
	players.ny_logStone = function() {
		const evtName = "ny_logStone";
		let next = game.createEvent(evtName);
		for (let item of arguments) {
			if (item == "notrigger") next.notrigger = true;
			else if (typeof item == "string" && item.startsWith("_ny_")) next.name = item;
		}
		const standardList = ["jinGong", "fangYu", "moPai", "nuQi", "zhuanShu"];
		for (let item of standardList) {
			if (next.name.includes(item)) next.type = item;
		}
		if (!next.type) return;
		next.player = this;
		next.setContent(evtName);
	}
	contents.ny_logStone = async function(event, trigger, player) {
		if (!event.notrigger) {
			await event.trigger(event.name + "Before");
			await event.trigger(event.name + "Begin");
		}
		if (event.type == "zhuanShu") {
			let id = player.ny_zhuanShuFuShiId.find(id => id == event.name);
			id = player.ny_zhuanShuFuShiId.indexOf(id);
			if (id == -1) return;
			player.ny_fushiTime[4+id]--;
		} else {
			const standardList = ["jinGong", "fangYu", "moPai", "nuQi"];
			let id = standardList.indexOf(event.type);
			player.ny_fushiTime[id]--;
		}
		if (!event.notrigger) {
			await event.trigger(event.name);
			await event.trigger(event.name + "End");
			await event.trigger(event.name + "After");
		}
	}
	/**
	 * 令玩家失效一个类型的符石
	 * @param { string } [type] 要失效的符石类型，若填"all"则所有符石失效
	 * @param { object|string } [expire = { global: "phaseEnd" }] 失效的时机
	 * @param { Player } [source] 失效来源
	 * @param { Function } [filter] 取消失效时机时的判断
	 * @param { string } ["notrigger"] 不触发技能时机
	 * @returns { GameEventPromise }
	 */
	players.ny_disableStone = function() {
		const evtName = "ny_disableStone";
		let next = game.createEvent(evtName);
		const standardList = ["jinGong", "fangYu", "moPai", "nuQi", "zhanFa", "zhuanShu", "all"];
		for (let item of arguments) {
			if (item == "notrigger") next.notrigger = true;
			else if (get.itemtype(item) == "player") next.source = item;
			else if (typeof item == "string" && standardList.includes(item)) next.type = item;
			else if (typeof item == "string") next.expire = { global: item };
			else if (typeof item == "object") next.expire = item;
			else if (typeof item == "function") next.filter = item;
		}
		next.expire ??= { global: "phaseEnd" };
		if (!next.type) return;
		next.player = this;
		next.setContent(evtName);
	}
	contents.ny_disableStone = async function(event, trigger, player) {
		if (!event.notrigger) {
			await event.trigger(event.name + "Before");
			await event.trigger(event.name + "Begin");
		}
		const standardList = ["jinGong", "fangYu", "moPai", "nuQi", "zhanFa", "zhuanShu"];
		player.ny_disabledStones ??= [];
		if (event.type == "all") player.ny_disabledStones = standardList;
		else player.ny_disabledStones.add(event.type);
		player.markSkill("ny_noneFuShi");
		game.log(event.source ? event.source : "" , event.source ? "令" : "", player, "的", event.type == "all" ? "所有" : get.translation(event.type), "符石失效了");
		//取消失效见全局技能_ny_undisableStone
		player.ny_undisableStoneExpire ??= {};
		player.ny_undisableStoneExpire[event.type] ??= [];
		let temp = get.copy(event.expire);
		if (event.filter) temp.filter = event.filter || (() => true);
		player.ny_undisableStoneExpire[event.type].push(temp);
		game.broadcastAll((expire) => {
			for (let item in expire) {
				lib.skill._ny_undisableStone.trigger[item] ??= [];
				lib.skill._ny_undisableStone.trigger[item].add(expire[item]);
			}
			game.addGlobalSkill("_ny_undisableStone");
		}, event.expire);
		if (!event.notrigger) {
			await event.trigger(event.name);
			await event.trigger(event.name + "End");
			await event.trigger(event.name + "After");
		}
	}
	/**
	 * 令玩家摧毁一些手牌
	 * @param { CCards } 要被摧毁的牌
	 * @param { string } ["notrigger"] 不触发技能时机
	 * @returns { GameEventPromise }
	 */
	players.ny_cuihuiCards = function() {
		const name = "ny_cuihuiCards";
		let notrigger = false,
			cards = [];
		for (let item of arguments) {
			if (item == "notrigger") notrigger = true;
			else if (get.itemtype(item) == "card") cards = [item];
			else if (get.itemtype(item) == "cards") cards = item;
		}
		if (cards.length == 0) return;
		let next = game.createEvent(name);
		next.notrigger = notrigger;
		next.player = this;
		next.cards = cards;
		next.setContent(name);
	}
	contents.ny_cuihuiCards = async function(event, trigger, player) {
		if (!event.notrigger) await event.trigger(event.name + "Before");
		let func = [];
		for (let i of player.getSkills(null, false, false)) {
			if (lib.skill[i]?.unCuihuiAble) func.add(lib.skill[i].unCuihuiAble);
		}
		if (func.length) {
			for (let f of func) {
				//f内部return false代表不能被摧毁
				event.cards = event.cards.filter(card => f(card));
			}
		}
		if (!event.notrigger) await event.trigger(event.name + "Begin");
		if (event.cards.length) await player.addGaintag(event.cards, "_ny_cuihui");
		if (!event.notrigger) {
			await event.trigger(event.name);
			await event.trigger(event.name + "End");
			await event.trigger(event.name + "After");
		}
	}
	/**
	 * 获取事件的基本数值（使用牌相关）
	 * @param { Player } [target] 目标对象
	 * @returns { number }
	 */
	events.ny_getBaseNum = function(target) {
		let evt;
		if (!this.name.includes("useCard")) evt = this.getParent("useCard", false);
		else evt = this;
		if (!evt) return;
		let num = 0;
		if (get.name(evt.card) == "tiesuo") return 2;
		if (get.name(evt.card) == "wugu") return game.countPlayer() + evt.card.storage?.extraCardsNum;
		if (get.name(evt.card) == "jlsgqs_mei" && target?.hp > 1) num = 1;
		num += (evt.baseDamage ?? 1) + (evt.customArgs?.default?.extraDamage ?? 0) + (evt.customArgs?.[target?.playerid]?.extraDamage ?? 0) + (evt.extraDamage ?? 0);
		return num;
	}
	/**
	 * 获取事件的数值（使用牌相关）
	 * @param { Player } [target] 目标对象
	 * @returns { number }
	 */
	events.ny_getNum = function(target) {
		let evt;
		if (!this.name.includes("useCard")) evt = this.getParent("useCard", false);
		else evt = this;
		if (!evt) return;
		const skill = lib.skill._useCardBaseChange;
		let num = evt.ny_getBaseNum(target);
		if (evt.card.storage._useCardQianghua == true && !skill.qianghuaMap.noneList.includes(get.name(evt.card))) {
			num += skill.qianghuaMap[get.name(evt.card)] || 1;
		}
		if (evt.card.ny_addNum) num += evt.card.ny_addNum;
		if (evt.card.ny_timeNum) num *= evt.card.ny_timeNum;
		return num;
	}
	/**
	 * 修改事件的数值（使用牌相关）
	 * @param { string } [type = "add"] 数值修改方式"add"或"time"
	 * @param { number } [num = 1] 修改的数值
	 * @returns { GameEventPromise }
	 */
	events.ny_changeNum = function() {
		if (!this.card) return;
		let type = "add",
			num = 1;
		for (let item of arguments) {
			if (typeof item == "string") type = item;
			else if (typeof item == "number") num = item;
		}
		const str = "ny_" + type + "Num";
		this.card[str] ??= 0;
		this.card[str] += num;
		return this;
	}
	//生成概念解释 纯💩山
	//数字代表层数
	lib.arenaReady.push(() => {
		zhonghuiFunction.initTipMap = function(num) {
			if (num == "all") num = Infinity;
			if (num >= 1) {
				zhonghuiFunction.tipMap[1] = {
					"天嗔石": `你的初始${zhonghuiFunction.poptip("怒气上限", null, null, true)}+1`,
					"怒气": `怒焰武将开局拥有0点怒气值和2点${zhonghuiFunction.poptip("怒气上限", null, null, true)}<br>每受到1点伤害后便获得1点怒气<br>怒焰武将在使用强化牌列表内的牌时可以选择消耗1点怒气${zhonghuiFunction.poptip("强化牌", null, null, true, "强化你使用的牌")}`,
				};
			}
			if (num >= 2) {
				zhonghuiFunction.tipMap[2] = {
					"天怒石": `你的初始${zhonghuiFunction.poptip("怒气", null, null, true)}+1`,
				};
			}
		}
		zhonghuiFunction.tipMap = [null, null, null];
		zhonghuiFunction.tipMap[0] = {
			"天焰石": "你的初始体力值和体力上限+1",
			"怒气上限": "怒焰武将默认拥有2点怒气上限，怒气值增加后，若怒气值超过怒气上限，则将怒气值修改为怒气上限",
			"强化牌": `强化后的牌效果+1<br>特殊强化：<br>I.【铁索连环】强化后额外指定一个目标<br>Ⅱ.【怒发冲冠】/【釜底抽薪】强化后数值+2<br>Ⅲ.【闪】强化后摸一张牌<br>Ⅳ.【无懈可击】强化后获得目标锦囊牌<br>V.【乐不思蜀】强化后目标额外跳过摸牌阶段`,
			"摧毁": "被摧毁的牌无法被使用，打出或用于拼点直至进入弃牌堆",
			"演奏调式": "",
		}
		if (lib.skill._ny_yanzoudiaoshi?.list) {
			let str = "";
			for (let i of ["gongdiao", "shangdiao", "jiaodiao", "zhidiao", "yudiao"]) {
				str += `<br>〖${get.translation("nuyan" + i)}〗：${get.translation("nuyan" + i + "_info")}`;
			}
			str = str.slice(2);
			zhonghuiFunction.tipMap[0]["演奏调式"] = str;
		}
		if (lib.skill._useCardQianghua?.list) {
			let list = lib.skill._useCardQianghua.list.map(i => get.translation(i)).join("、");
			if (list.length) {
				zhonghuiFunction.tipMap[0]["强化牌"] += "<br>强化牌列表：<br>" + list;
			}
		}
		if (lib.poptip) {
			for (let num in zhonghuiFunction.tipMap) {
				num = Number(num);
				zhonghuiFunction.initTipMap(num);
				let map = zhonghuiFunction.tipMap[num];
				for (let item in map) {
					lib.poptip.add({
						id: item,
						name: item,
						info: map[item],
						type: "rule",
					});
				}
			}
		} else {
			zhonghuiFunction.initTipMap("all");
		}
	});
}