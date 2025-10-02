import { lib, game, ui, get, ai, _status } from '../../../noname.js';
import { characters } from "../character/index.js";
import { card as nyCard } from "../card/nyCard.js";
export async function precontent(config, originalPack) {
	//后续怒发冲冠ai优化
	//后续谋奕添加ai，（遥遥无期
	/*lib.skill._test = {
		trigger: {
			player: "discard",
		},
		forced: true,
		filter: function(event, player) {
			return true;
		},
		async content(event, trigger, player) {
			console.log(trigger.getParent())
			console.log(event);
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
	//自定义函数
	const zhonghuiFunction = {
		showRepo(ext) {
			if (ext == "怒焰武将") this.openLink("https://github.com/zhonghui1966/nyKill");
		},
		openLink(url) {
			if (window.cordova) {
				if (cordova.InAppBrowser) {
					return cordova.InAppBrowser.open(url, "_system");
				}
				return;
			}
			if (window.require) {
				return require("electron").shell.openExternal(url);
			}
			return window.open(url);
		},
		randomTwoListAndChoose(list1, list2, num) {//AI跑的
			// 合并两个数组的索引信息
			let indices = [];
			for (let i = 0; i < list1.length; i++) {
			    indices.push({ source: 'list1', index: i });
			}
			for (let i = 0; i < list2.length; i++) {
			    indices.push({ source: 'list2', index: i });
			}
			// 如果num超过总元素数，则调整num为总元素数
			num = Math.min(num, indices.length);
			indices.randomSort();
			// 从洗牌后的数组中取前num个元素
			const selectedIndices = indices.slice(0, num);
			// 根据来源划分选中的元素
			const result = {
			    list1: [],
			    list2: []
			};
			selectedIndices.forEach(({ source, index }) => {
			    if (source === 'list1') {
			        result.list1.push(list1[index]);
			    } else {
			        result.list2.push(list2[index]);
			    }
			});
			return result;
		},
		//第一次得知我用的方法居然是从牌堆顶开始检索而不是随机检索时，我是震惊的（
		randomPile(Pile) {
			let pileList = [],
				copyPile = {};
			//这里in和of都不能用，别问我怎么知道的
			for (let i = 0;i < Pile.length;i ++) pileList.push(Pile[i]);
			pileList = zhonghuiFunction.randomList(pileList);
			for (let i in pileList) {
				copyPile[i] = pileList[i];
			}
			return copyPile;
		},
		helpStr(html) {
			if (html.hth_more == undefined) {
				let str = "",
					listStr = "";
				if (lib.skill._useCardQianghua?.list) {
					for (let i of lib.skill._useCardQianghua.list) {
						if (get.translation(i)) listStr += "【" + get.translation(i) + "】、"
					}
					if (listStr) listStr = listStr.slice(0, -1);
				}
				if (lib.skill?._ny_getFuShi?.obj) {
					let helpObj = {};
					for (let i in lib.skill._ny_getFuShi.obj) {
						for (let j of lib.skill._ny_getFuShi.obj[i]) {
							if (!helpObj[i]) helpObj[i] = '<br><b>' + get.translation(i) + "符石技能：</b>";
							helpObj[i] += `<br><b style="color: green" onclick="zhonghuiFunction.fushiStr(this,'` + j + `')">▶` + get.translation(j) + "</b>";
						}
					}
					for (let i in helpObj) {
						str += helpObj[i];
						str += "<br>";
					}
					str = "<hr><li>怒焰符石技能一览（点击查看详情）：<br>" + '<br><b style:"color: #F7BA0B">注：每种符石每局限获得一个</b><br>' + str;
				}
				let qq = `<hr>
				<li>扩展可加群号（QQ）
				<br>新将包扩展群：<b>682507990</b>
				<br>怒焰武将扩展群：<b>877603179</b>
				<br>极略扩展群：<b>702142668</b>
				<br><li>欢迎大家进群支持怒焰武将
				<br><img style=width:238px src="${lib.assetURL}extension/怒焰武将/image/qq.jpg">
				<br>github仓库：<a href="https://github.com/zhonghui1966/nyKill">点击此处进入</a>
				`;
				var more = ui.create.div('.hth_more',
				`<li>当前版本：魔改版1.0.8版本
				<br><b style="color: red">更新内容：</b>
				<br>新武将：曹纯，界周瑜
				<br>同步怒焰三国杀，新增符石--势如破竹
				<br>为怒焰三国杀卡牌增加强化效果
				<br>优化部分代码
				<br>修复一些已知问题：
				<br>1.修复界马超不显示名字的问题
				<br>2.修复曹叡专属符石〖青龙石〗效果是回复1点体力而非回复至1点体力的问题
				<br><b style="color: red">魔改版1.0.7版本更新内容：</b>
				<br>新武将：幻蔡文姬
				<br>为怒气，符石等机制技能适配对局内的换将
				<br>为专属符石机制适配双将模式
				<br>为界马超添加旧版标签（怒焰更新后削弱界马超）
				<br>优化部分代码
				<br>修复一些已知问题：
				<br>1.修复荀攸带”界“标签的错误
				<br>2.修复摧毁牌机制可能报错的问题
				<br>3.修复”你登场时“时机的问题
				<br>4.修复界徐晃〖断粮〗发动报错的问题
				<br>5.修复界郭嘉〖奇佐〗可以使用装备区的牌印卡的问题
				<br>6.修复蔡贞姬弃牌阶段内可以弃置不计入手牌上限的牌、〖天音〗可以使用装备区的牌印卡、〖涤魂滤心〗不失去怒气的问题
				<br><b style="color: red">魔改版1.0.6版本更新内容：</b>
				<br>新增武将：蔡贞姬
				<br>从该版本起版本更新将会有更详细的介绍
				<br>修复一些已知问题：
				<br>1.修复界郭嘉〖奇佐〗不能印卡时仍然出现按钮的问题
				<br>2.修复曹髦登场时无法发动〖决进讨逆〗的问题
				<br>增加演奏调式机制，摧毁牌机制半重做，增加自动分包，删去一些多余的代码，帮助界面增加更多概念解释
				<br><b style="color: red">魔改版1.0.5版本更新内容：</b>
				<br>新增武将：左慈
				<br>曹叡同步怒焰三国杀更新
				<br>修复一些已知问题
				<br><b style="color: red">魔改版1.0.4版本更新内容：</b>
				<br>新增武将：诸葛瑾，初版王元姬
				<br>修复一些已知问题
				<br><b style="color: red">魔改版1.0.3版本更新内容：</b>
				<br>新增武将：界马超，初版羊徽瑜
				<br>修复一些已知问题（包括五谷丰登的问题）
				<br>增加隐匿机制
				<br>初步同步本体pr概念解释的功能
				<br><b style="color: red">魔改版1.0.2版本更新内容：</b>
				<br>新增武将：李儒，曹髦
				<br>修复一些已知问题
				<br>怒焰吕玲绮适配新版本怒焰三国杀，增加怒焰吕玲绮版本设置选项
				<br><li><b style="color: red">1.01版本更新内容：</b>
				<br>新增武将：界曹节
				<br>修复一些已知问题
				<br>增加武将传说皮肤机制（在扩展选项处调整，重启后生效）
				<br><li><b style="color: red">1.0版本更新内容：</b>
				<br>符石机制重做，增加怒气，强化牌等机制
				<br>还原所有怒焰三国杀的符石和战法
				<br>增加神孙坚，重做所有武将
				<br>增加怒焰牌堆，目前仅包含两个版本的【水淹七军】，【怒发冲冠】和【釜底抽薪】
				<br>
				<hr>
				<li>概念解释：
				<br>摧毁牌：
				<br>被摧毁的牌无法被使用或打出或用于拼点直至进入弃牌堆
				<br>演奏调式：
				<br>〖宫调〗：锁定技，你使用基本牌（除【闪】外）的效果+1
				<br>〖商调〗：锁定技，你使用单体普通锦囊牌（除【无懈可击】外）的效果+1
				<br>〖角调〗：锁定技，你成为其他角色使用牌的目标时，你随机获得其1张手牌
				<br>〖徵调〗：锁定技，当你受到不是牌造成的致命伤害时，防止之
				<br>〖羽调〗：锁定技，锁定技，当你失去大于1点的体力时，将数值改为1点
				<br>怒焰星级：
				<br>在扩展设置中可以设置，包括0到6星
				<br><b onclick="setTimeout(() => ui.click.extensionTab('怒焰武将'), 850)">点击前往设置</b>
				<br>1星和3星时额外获得星级技能
				<br>每有1星便可在游戏开始时选择携带等量的传世符石
				<br>I.天怒石：初始怒气+1，至多携带3个
				<br>Ⅱ.天嗔石：初始怒气上限+1，至多携带2个
				<br>Ⅲ.天焰石：初始体力值和体力上限+1，至多携带1个
				<br>
				<hr>
				<li>怒焰机制：
				<br>怒焰武将专属特殊效果
				<br>注：扩展<b style="color:blue">钟会包</b>可关闭机制仅适用于怒焰武将的限制
				<br>1.摸牌阶段摸牌数+1
				<br>2.怒气机制：
				<br>怒焰武将开局拥有0点怒气值，默认怒气上限为2点，每受到1点伤害后便获得1点怒气
				<br>3.强化牌机制：
				<br>怒焰武将在使用强化牌列表内的牌时可以选择强化此牌，强化后的牌效果+1
				<br>特殊强化：
				<br>I.【铁索连环】强化后额外指定一个目标
				<br>Ⅱ.【怒发冲冠】/【釜底抽薪】强化后数值+2
				<br>Ⅲ.【闪】强化后摸一张牌
				<br>Ⅳ.【无懈可击】强化后获得目标锦囊牌
				<br>V.【乐不思蜀】强化后目标额外跳过摸牌阶段
				<br>强化牌列表：
				` + listStr + `
				<br>4.符石机制：
				<br>怒焰武将在开始游戏时选择获得<b style="color:#FF4500">进攻</b>，<b style="color:#1E90FF">防御</b>，<b style="color:#9370DB">摸牌</b>，<b style="color:#FF8C00">怒气</b>，<b style="color:#2E8B57">战法</b>符石各一个
				<br>同时部分怒焰武将开局可以获得专属符石
				<br>每个符石限发动6次，<b style="color:#2E8B57">战法</b>不限次数
				<br>5.羁绊技能机制：
				<br>每个怒焰武将有各自的羁绊技能，可以令符石的触发次数增加
				` + str + qq
				//后续专属符石写进去
				);
				//#FF4500 #1E90FF #9370DB #FF8C00 #2E8B57
				html.hth_more = more;
			}
			if (html.hth_more_mode === undefined) {
				html.hth_more_mode = true;
				html.parentNode.insertBefore(html.hth_more, html.nextSibling);
				html.innerHTML = '<div class="hth_menu" onclick="zhonghuiFunction.helpStr(this)">▼帮助内容</div>';
			}
			else {
				html.parentNode.removeChild(html.hth_more);
				delete html.hth_more_mode;
				html.innerHTML = '<div class="hth_menu" onclick="zhonghuiFunction.helpStr(this)">▶帮助内容</div>';
			}
		},
		fushiStr(html, skill) {
			if (html.innerHTML[0] == "▶") html.innerHTML = "▼" + get.translation(skill) + '<br><b style="color: white;font-weight: normal">' + get.translation(skill + "_info") + "</b>";
			else html.innerHTML = "▶" + get.translation(skill);
		},
		get noprDescription () {
			if (!zhonghuiFunction.tipMap) return;
			let result = {};
			for (let map in zhonghuiFunction.tipMap) {
				for (let item in map) {
					result[item] = map[item];
				}
			}
			return result;
		},
		poptip(name, explain, style, noprExplain, showName) {
			if (!style) style = "color: unset";
			if (lib.poptip) {
				if (explain) {
					lib.poptip.add({
						id: name,
						name: name,
						info: explain,
						type: "rule",
					});
				}
				if (!explain) explain = lib.poptip.getInfo(name);
				if (showName) {
					lib.poptip.add({
						id: name,
						name: showName,
						info: explain,
						type: "rule",
					});
				}
				return `<b style="${style}">${get.poptip(name)}</b>`;
			}
			else {
				if (noprExplain) return `<b style="${style}">${name}</b>`;
				if (!explain) explain = zhonghuiFunction.noprDescription[name];
				return `<b style="${style}">${name}</b>：${explain}`;
			}
		},
	}
	lib.zhonghuiFunction ??= {};
	window.zhonghuiFunction ??= {};
	for (let item in zhonghuiFunction) {
		lib.zhonghuiFunction[item] = zhonghuiFunction[item];
		window.zhonghuiFunction[item] = zhonghuiFunction[item];
	}
	//生成前缀的html 纯💩山
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
	lib.namePrefix.set("怒焰神射", {
		getSpan(prefix, name) {
			return `${get.prefixSpan("怒焰", name)}${get.prefixSpan("神射", name)}`;
		},
	});
	lib.namePrefix.set("怒焰天刃", {
		getSpan(prefix, name) {
			return `${get.prefixSpan("怒焰", name)}${get.prefixSpan("天刃", name)}`;
		},
	});
	let old = ["初版", "二版"];
	let prefix = ["界", "谋", "幻", "神", "起", "魏", "吴"];
	for (let i of prefix) {
		lib.namePrefix.set("怒焰" + i, {
			getSpan(prefix, name) {
				return `${get.prefixSpan("怒焰", name)}${get.prefixSpan(i, name)}`;
			},
		});
	}
	for (let i of old) {
		lib.namePrefix.set("怒焰" + i, {
			getSpan(prefix, name) {
				return `${get.prefixSpan("怒焰", name)}${get.prefixSpan("旧", name)}`;
			},
		});
		for (let j of prefix) {
			lib.namePrefix.set("怒焰" + i + j, {
				getSpan(prefix, name) {
					return `${get.prefixSpan("怒焰", name)}${get.prefixSpan("旧", name)}${get.prefixSpan(j, name)}`;
				},
			});
		}
	}
	
	//单向联机❌ 加入武将包√
	for (let packName in characters) {
		const pack = characters[packName];
		let name = pack.name;
		await game.import("character", function () {
			return pack;
		});
		lib.arenaReady.push(() => {
			lib.connectCharacterPack.add(name);
		});
		if (!_status.postReconnect[`${name}_pack`]) {
			_status.postReconnect[`${name}_pack`] = [
				function (pack, name) {
					lib.translate[`${name}_character_config`] = pack[name];
					lib.characterPack[name] = pack;
					lib.config[`extension_${name}_characters_enable`] = true;
					lib.connectCharacterPack.add(name);
					lib.config.characters.add(name);
				},
				lib.characterPack[name],
				name,
			];
		}
		if (!_status.postReconnect[`${name}_translate`]) {
			_status.postReconnect[`${name}_translate`] = [
				function (translates, name) {
					lib.translate[`${name}_character_config`] = translates[name];
					for (let key in translates) {
						lib.translate[key] = translates[key];
					}
				},
				pack.translate,
				name,
			];
		}
	}
	if (!_status.postReconnect.nyKill_namePrefix) {
		_status.postReconnect.nyKill_namePrefix = [
			function () {
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
				lib.namePrefix.set("怒焰神射", {
					getSpan(prefix, name) {
						return `${get.prefixSpan("怒焰", name)}${get.prefixSpan("神射", name)}`;
					},
				});
				lib.namePrefix.set("怒焰天刃", {
					getSpan(prefix, name) {
						return `${get.prefixSpan("怒焰", name)}${get.prefixSpan("天刃", name)}`;
					},
				});
				let old = ["初版", "二版"];
				let prefix = ["界", "谋", "幻", "神", "起", "魏", "吴"];
				for (let i of prefix) {
					lib.namePrefix.set("怒焰" + i, {
						getSpan(prefix, name) {
							return `${get.prefixSpan("怒焰", name)}${get.prefixSpan(i, name)}`;
						},
					});
				}
				for (let i of old) {
					lib.namePrefix.set("怒焰" + i, {
						getSpan(prefix, name) {
							return `${get.prefixSpan("怒焰", name)}${get.prefixSpan("旧", name)}`;
						},
					});
					for (let j of prefix) {
						lib.namePrefix.set("怒焰" + i + j, {
							getSpan(prefix, name) {
								return `${get.prefixSpan("怒焰", name)}${get.prefixSpan("旧", name)}${get.prefixSpan(j, name)}`;
							},
						});
					}
				}
			},
			[],
		];
	}
	
	//加入牌堆
	let name = nyCard.name;
	await game.import("card", function () {
		return nyCard;
	});
	lib.arenaReady.push(() => {
		lib.connectCardPack.add(name);
	});
	if (!_status.postReconnect[`${name}_pack`]) {
		_status.postReconnect[`${name}_pack`] = [
			function (pack, name) {
				lib.translate[`${name}_card_config`] = pack[name];
				lib.cardPack[name] = pack;
				lib.config[`extension_${name}_cards_enable`] = true;
				lib.connectCardPack.add(name);
				//lib.config.all.cards.add(name);
				lib.config.cards.add(name);
			},
			lib.cardPack[name],
		];
	}
	if (!_status.postReconnect[`${name}_translate`]) {
		_status.postReconnect[`${name}_translate`] = [
			function (translates, name) {
				lib.translate[`${name}_card_config`] = translates[name];
				for (let key in translates) lib.translate[key] = translates[key];
			},
			nyCard.translate,
			name,
		];
	}
	
	//涉及到改本体一定一定要加扩展前缀！！！既是为了可读性也是为了防止扩展冲突
	let players = lib.element.player,
		contents = lib.element.content;
	/**
	 * 检测玩家怒气是否为全场最小
	 * @returns { boolean } isOnly - 是否为唯一最小
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
	 * @returns { boolean } isOnly - 是否为唯一最高
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
	 * 初始化玩家怒气 参："notrigger" - 不触发技能时机 num(初始怒气上限)
	 * @returns { GameEventPromise } 
	 */
	players.ny_initNuQi = function() {
		const name = "ny_initNuQi";
		let next = game.createEvent(name);
		for (let item of arguments) {
			if (item == "notrigger") next.notrigger = true;
			else if (typeof item == "number") next.num = item;
		}
		if (!next.num) next.num = 0;
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
	 * 令玩家增加怒气 参：[type, log, source, num, notrigger]
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
			else if (typeof item == "string" && !["trigger", "nosource"].includes(item)) next.log = item;
			else if (item == "notrigger") next.notrigger = true;
		}
		if (!next.num) next.num = 1;
		if (!next.type) next.type = "skill";
		if (!next.source) next.source = this;
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
			event.overNum = player.ny_nuqiMax - player.ny_nuqi;
			player.ny_nuqi = player.ny_nuqiMax;
		}
		event.logNum = Math.max(event.num - event.overNum, 0);
		if (event.logNum > 0 && event.type !== "init") {
			if (!event.log) {
				event.log = "";
				if (event.source) event.log += get.translation(event.source) + "令";
				event.log += get.translation(player) + "获得了" + get.cnNumber(event.logNum) + "点怒气";
			}
			game.log(event.log);
		} 
		if (!event.notrigger) {
			await event.trigger(event.name + "End");
			await event.trigger(event.name + "After");
		}
	}
	/**
	 * 令玩家失去怒气 参：[type, log, source, num, notrigger]
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
			else if (typeof item == "string" && !["trigger", "nosource"].includes(item)) next.log = item;
			else if (item == "notrigger") next.notrigger = true;
		}
		if (!next.num) next.num = 1;
		if (!next.type) next.type = "skill";
		if (!next.source) next.source = this;
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
				event.log = "";
				if (event.source) event.log += get.translation(event.source) + "令";
				event.log += get.translation(player) + "减少了" + get.cnNumber(event.logNum) + "点怒气";
			}
			game.log(event.log);
		} 
		if (!event.notrigger) {
			await event.trigger(event.name + "End");
			await event.trigger(event.name + "After");
		}
	}
	/**
	 * 令玩家增加怒气上限 参：[type, log, source, num, notrigger]
	 * @returns { GameEventPromise }
	 */
	players.ny_gainNuQiMax = function() {
		const name = "ny_gainNuQiMax";
		let next = game.createEvent(name);
		for (let item of arguments) {
			if (["damage", "skill", "init", "card"].includes(item)) next.type = item;
			else if (typeof item == "number") next.num = item;
			else if (get.itemtype(item) == "player") next.source = item;
			else if (typeof item == "string" && !["trigger", "nosource"].includes(item)) next.log = item;
			else if (item == "notrigger") next.notrigger = true;
		}
		if (!next.num) next.num = 1;
		if (!next.type) next.type = "skill";
		if (!next.source) next.source = this;
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
				event.log = "";
				if (event.source) event.log += get.translation(event.source) + "令";
				event.log += get.translation(player) + "获得了" + get.cnNumber(event.num) + "点怒气上限";
			}
			game.log(event.log);
		}
		if (!event.notrigger) {
			await event.trigger(event.name + "End");
			await event.trigger(event.name + "After");
		}
	}
	/**
	 * 令玩家减少怒气上限 参：[type, log, source, num, notrigger]
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
			else if (typeof item == "string" && !["trigger", "nosource"].includes(item)) next.log = item;
			else if (item == "notrigger") next.notrigger = true;
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
				event.log = "";
				if (event.source) event.log += get.translation(event.source) + "令";
				event.log += get.translation(player) + "减少了" + get.cnNumber(event.num) + "点怒气上限";
			}
			game.log(event.log);
		}
		if (!event.notrigger) {
			await event.trigger(event.name + "End");
			await event.trigger(event.name + "After");
		}
	}
	/**
	 * 检测玩家是否能发动某个符石 传专属符石ID
	 * @returns { boolean } 
	 */
	players.ny_filterStone = function(name) {
		if (!lib.skill._ny_getFuShi) return false;
		if (this.ny_fushiId?.length == 0 || !this.ny_fushiId) return false;
		if (name.includes("zhuanShu")) {
			if (!this.ny_zhuanShuFuShiId?.some(id => id == name)) return false;
			let id = this.ny_zhuanShuFuShiId.find(id => id == name);
			id = this.ny_zhuanShuFuShiId.indexOf(id);
			return this.ny_fushiTime?.[4+id] > 0;
		} else {
			let type;
			const standardList = ["jinGong", "fangYu", "moPai", "nuQi", "zhanFa"];
			for (let item of standardList) {
				if (name.includes(item)) type = item;
			}
			if (!type) return false;
			let idNum = lib.skill._ny_getFuShi.obj[type]?.indexOf(name) + 1,
				typeNum = standardList.indexOf(type);
			if (!idNum) return false;
			if (type == "zhanFa") return this.ny_fushiId?.[4] == idNum;
			return this.ny_fushiId?.[typeNum] == idNum && this.ny_fushiTime?.[typeNum] > 0;
		}
	}
	/**
	 * 令玩家发动某个符石（扣除使用次数） 传专属符石ID notrigger
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
	 * 令玩家摧毁一些手牌 传参cards, "notrigger"
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
	//函数定义
	lib.arenaReady.push(() => {
		/*
		if (player.ny_nuqi >= player.ny_nuqiMax) {
			let filterSkill = "nuyan_shouxi";
			const ownedSkills = player.getSkills(null, false, true).filter(skill => {
				return skill == filterSkill;
			});
			let b = ownedSkills.length !== 0 && !player.isTempBanned(filterSkill) && !(player.shixiaoedSkills && player.shixiaoedSkills.includes(filterSkill));
			while (b && player.ny_nuqi >= player.ny_nuqiMax) {
				await lib.skill.nuyan_shouxi.skillEffect(player);
			}
			if (player.ny_fushiId && player.ny_fushiId[2] == 9 && player.ny_fushiTime[2] > 0 && player.ny_nuqi > player.ny_nuqiMax) {
				let num = player.ny_nuqi - player.ny_nuqiMax;
				if (player.ny_fushiTime[2] >= num2) {
					player.ny_fushiTime[2] -= num2;
					await player.draw(2 * num2);
				} else {
					player.ny_fushiTime[2] = 0;
					await player.draw(2 * player.ny_fushiTime[2]);
				}
			}
			if (!b) player.ny_nuqi = player.ny_nuqiMax;
		}
		//摸牌符石id8 袭扰
		let list = game.players.filter(i => i != player && i.ny_fushiId && i.ny_fushiId[2] == 8 && i.ny_fushiTime[2] > 0);
		if (list.length) {
			for (let i of list) {
				i.ny_fushiTime[2] --;
				await i.draw(num);
			}
		}
		//摸牌符石id5 诱敌
		if (player.ny_fushiId && player.ny_fushiId[2] == 5 && player.ny_fushiTime[2] > 0) {
			if (player.ny_fushiTime[2] >= num) {
				player.ny_fushiTime[2] -= num;
				await player.draw(2 * num);
			} else {
				player.ny_fushiTime[2] = 0;
				await player.draw(2 * player.ny_fushiTime[2]);
			}
			//怒焰谋诸葛亮
			//--
			//摸牌符石id10 虎啸
			let list = game.players.filter(i => i != player && i.ny_fushiId && i.ny_fushiId[2] == 10 && i.ny_fushiTime[2] > 0);
			if (list.length) {
				for (let i of list) {
					i.ny_fushiTime[2] --;
					await i.draw(num);
				}
			}
			//摸牌符石id5 诱敌
			if (player.ny_fushiId && player.ny_fushiId[2] == 5 && player.ny_fushiTime[2] > 0) {
				if (player.ny_fushiTime[2] >= num) {
					player.ny_fushiTime[2] -= num;
					await player.draw(2 * num);
				} else {
					player.ny_fushiTime[2] = 0;
					await player.draw(2 * player.ny_fushiTime[2]);
				}
			}
			//怒气符石id9 振奋
			if (player.ny_fushiId && player.ny_fushiId[3] == 9 && player.ny_nuqi <= 1 && player.ny_fushiTime[3] > 0) {
				player.ny_fushiTime[2] --;
				await lib.skill._ny_getNuqi.ny_addNuQi(player,2);
			}
		}*/
		
		//专属符石
		lib.skill._ny_zhuanShu_Firstqinglongshi = {//初版青龙石dying id1
			trigger:{
				global:"dying",
			},
			popup:false,
			frequent: false,
			filter: function(event,player) {
				if (!event.player.ny_nuqi) return false;
				let id = player.ny_zhuanShuFuShiId?.find(id => id == "_ny_zhuanShu_Firstqinglongshi");
				if (id) {
					event.zhuanShuFuShiId1 = player.ny_zhuanShuFuShiId.indexOf(id);
					return player.ny_fushiTime[4+event.zhuanShuFuShiId1] > 0;
				} else return false;
			},
			async content(event,trigger,player) {
				player.ny_fushiTime[4+trigger.zhuanShuFuShiId1]--;
				let num = trigger.player.ny_nuqi;
				trigger.player.recoverTo(num);
				if (trigger.player != player) await player.damage(num, "nosource");
				await trigger.player.ny_loseNuQi(player, num);
			},
			priority: 1145,
		}
		lib.skill._ny_zhuanShu_qinglongshi = {//青龙石dying id2
			trigger:{
				global:"dying",
			},
			popup:false,
			frequent: false,
			filter: function(event,player) {
				let id = player.ny_zhuanShuFuShiId?.find(id => id == "_ny_zhuanShu_qinglongshi");
				if (id) {
					event.zhuanShuFuShiId2 = player.ny_zhuanShuFuShiId.indexOf(id);
					return player.ny_fushiTime[4+event.zhuanShuFuShiId2] > 0;
				} else return false;
			},
			async content(event,trigger,player) {
				player.ny_fushiTime[4+trigger.zhuanShuFuShiId2]--;
				trigger.player.recoverTo(1);
				if (trigger.player != player) await player.damage("nosource");
			},
			priority: 1145,
		}
		lib.skill._ny_zhuanShu_bianhua = {//彼岸花judge id1
			trigger:{
				global:"judge",
			},
			popup:false,
			frequent: true,
			filter: function(event,player) {
				if (!player.countCards("h")) return false;
				if (event.player != player) return false;
				if (event.skill != "nuyan_chouce") return false;
				let id = player.ny_zhuanShuFuShiId?.find(id => id == "_ny_zhuanShu_bianhua");
				if (id) {
					event.zhuanShuFuShiId1 = player.ny_zhuanShuFuShiId.indexOf(id);
					return player.ny_fushiTime[4+event.zhuanShuFuShiId1] > 0;
				} else return false;
			},
			content: function(){
				'step 0'
				player.chooseCard('你的〖筹策〗判定为' + get.translation(trigger.player.judging[0]) + '，是否发动专属符石〖彼岸花〗，打出一张手牌代替之？', 'h', function (card) {
				        var player = _status.event.player;
				        var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
				        if (mod2 != 'unchanged') return mod2;
				        var mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
				        if (mod != 'unchanged') return mod;
				        return true;
				    }).set('ai', function (card) {
				        var trigger = _status.event.getTrigger();
				        var player = _status.event.player;
				        var judging = _status.event.judging;
				        var result = trigger.judge(card) - trigger.judge(judging);
				        var attitude = get.attitude(player, trigger.player);
				        if (attitude == 0) {
				            if (player.isDamaged() && get.suit(card, player) == 'heart') return 10;
				            if (get.suit(card, player) == 'club') return 8;
				            return 0;
				        }
				        if (attitude > 0) {
				            if (result == 0) {
				                if (player.isDamaged() && get.suit(card, player) == 'heart') return 10;
				                if (get.suit(card, player) == 'club') return 8;
				                return 0;
				            }
				            return result - get.value(card) / 2;
				        }
				        else {
				            if (result == 0) {
				                if (player.isDamaged() && get.suit(card) == 'heart') return 10;
				                if (get.suit(card) == 'club') return 8;
				                return 0;
				            }
				            return -result - get.value(card) / 2;
				        }
				    }).set('judging', trigger.player.judging[0]);
				'step 1'
				if (result.bool) {
					player.ny_fushiTime[4+trigger.zhuanShuFuShiId1]--;
				    player.respond(result.cards, '_ny_zhuanShu_bianhua', 'highlight', 'noOrdering');
				} else event.finish();
				'step 2'
				if (result.bool) {
				    if (trigger.player.judging[0].clone) {
				        trigger.player.judging[0].clone.classList.remove('thrownhighlight');
				        game.broadcast(function (card) {
				            if (card.clone) {
				                card.clone.classList.remove('thrownhighlight');
				            }
				        }, trigger.player.judging[0]);
				        game.addVideo('deletenode', player, get.cardsInfo([trigger.player.judging[0].clone]));
				    }
				    game.cardsDiscard(trigger.player.judging[0]);
				    trigger.player.judging[0] = result.cards[0];
				    trigger.orderingCards.addArray(result.cards);
				    game.log(trigger.player, '的判定牌改为', result.cards[0]);
				    game.delay(2);
				    event.card = result.cards[0];
				}
				else event.finish();
			},
			priority: 1145,
		}
		lib.skill._ny_zhuanShu_wushaungzhanji = {//无双战戟phaseDraw id1
			trigger:{
				player:"phaseDrawBegin",
			},
			popup:false,
			forced: true,
			locked: true,
			filter: function(event,player) {
				let id = player.ny_zhuanShuFuShiId?.find(id => id == "_ny_zhuanShu_wushaungzhanji");
				if (id) {
					event.zhuanShuFuShiId1 = player.ny_zhuanShuFuShiId.indexOf(id);
					return player.ny_fushiTime[4+event.zhuanShuFuShiId1] > 0;
				} else return false;
			},
			async content(event,trigger,player) {
				player.ny_fushiTime[4+trigger.zhuanShuFuShiId1]--;
				trigger.num += 2;
			},
			priority: 1145,
		}
		lib.skill._ny_zhuanShu_Firstyinyueqiang = {//银月枪 失去牌id1
			trigger: {
			    player: "loseAfter",
			    global: ["equipAfter","addJudgeAfter","gainAfter","loseAsyncAfter","addToExpansionAfter"],
			},
			popup:false,
			frequent: true,
			filter: function(event, player) {
				if (player == _status.currentPhase) return false;
				let id = player.ny_zhuanShuFuShiId?.find(id => id == "_ny_zhuanShu_Firstyinyueqiang");
				if (id) {
					event.zhuanShuFuShiId1 = player.ny_zhuanShuFuShiId.indexOf(id);
					return player.ny_fushiTime[4+event.zhuanShuFuShiId1] > 0 && event.getl(player)?.cards2?.some(card => card.name != "sha");
				} else return false;
			},
			async content(event,trigger,player) {
				for (let i of trigger.getl(player).cards2) {
					if (i.name == "sha") continue;
					if (player.ny_fushiTime[4+trigger.zhuanShuFuShiId1] == 0) break;
					let result = await player.chooseUseTarget("###是否发动专属符石〖银月枪〗？###视为使用一张【杀】", { name: "sha" }).forResult();
					if (result.bool) player.ny_fushiTime[4+trigger.zhuanShuFuShiId1]--;
				}
			},
			priority: 1145,
		}
		lib.skill._ny_zhuanShu_wanminshu = {//万民书
			mod:{
				cardUsable:function (card, player, num) {
					if (card.name == "sha" && player.storage._ny_zhuanShu_wanminshu) return num + player.storage._ny_zhuanShu_wanminshu;
				},
			},
			marktext: "万",
			intro:{
				name:"万民书",
				content:"你使用【杀】的次数+#",
			},
		}
		lib.skill._ny_zhuanShu_Firstfenghuashan = {//初版风华扇 damage id1
			trigger:{
				player:"damageEnd",
			},
			popup:false,
			frequent: true,
			filter: function(event, player) {
				let id = player.ny_zhuanShuFuShiId?.find(id => id == "_ny_zhuanShu_Firstfenghuashan");
				if (id) {
					event.zhuanShuFuShiId1 = player.ny_zhuanShuFuShiId.indexOf(id);
					return player.ny_fushiTime[4+event.zhuanShuFuShiId1] > 0 && event.source;
				} else return false;
			},
			async content(event, trigger, player) {
				let result = await player.chooseCard("he",[1,3])
					.set("prompt", get.prompt("_ny_zhuanShu_Firstfenghuashan"))
					.set("prompt2", "弃置至多三张牌并令" + get.translation(trigger.source) + "失去等量点体力")
					.forResult();
				if (result.bool) {
					player.ny_fushiTime[4+trigger.zhuanShuFuShiId1]--;
					await player.modedDiscard(result.cards);
					await trigger.source.loseHp(result.cards.length);
				}
			},
			priority: 1145,
		}
		lib.skill._ny_zhuanShu_fenghuashan = {//风华扇 changeHp id1
			trigger: {
				player:"changeHp",
			},
			popup:false,
			frequent: true,
			filter: function(event, player) {
				let id = player.ny_zhuanShuFuShiId?.find(id => id == "_ny_zhuanShu_fenghuashan");
				if (id) {
					event.zhuanShuFuShiId1 = player.ny_zhuanShuFuShiId.indexOf(id);
					return player.ny_fushiTime[4+event.zhuanShuFuShiId1] > 0 && event.num < 0;
				} else return false;
			},
			async content(event, trigger, player) {
				let result = await player.chooseCardTarget({
					position: "he",
					selectCard: [1,2],
					selectTarget: 1,
					filterTarget: function(card, player, target) {
						return target != player;
					},
					ai1: function(card) {
						return 15 - get.value(card);
					},
					ai2: function(target) {
						var player = _status.event.player;
						return -1 * get.attitude(player, target);
					},
					prompt: get.prompt("_ny_zhuanShu_fenghuashan"),
					"prompt2":"弃置至多两张牌并令一名其他角色失去等量点体力",
				}).forResult();
				if (result.bool) {
					player.ny_fushiTime[4+trigger.zhuanShuFuShiId1]--;
					await player.modedDiscard(result.cards);
					await result.targets[0]?.loseHp(result.cards.length);
				}
			},
			priority: 1145,
		}
		lib.skill._ny_zhuanShu_liaoyuan = {//燎原•神 useCardToPlayered id1
			mod: {
				attackRange:function (player, num) {
					if (player.ny_zhuanShuFuShiId?.some(id => id == "_ny_zhuanShu_liaoyuan")) {
						num += 3;
						if (num < 4) num = 4;
						return num;
					}
				},
			},
			trigger: {
				player: "useCardToPlayered",
			},
			popup:false,
			forced: true,
			filter: function(event, player) {
				let id = player.ny_zhuanShuFuShiId?.find(id => id == "_ny_zhuanShu_liaoyuan");
				if (id) {
					event.zhuanShuFuShiId1 = player.ny_zhuanShuFuShiId.indexOf(id);
					return player.ny_fushiTime[4+event.zhuanShuFuShiId1] > 0 && event.targets?.length && get.color(event.card) == "red" && get.tag(event.card, "damage");
				} else return false;
			},
			async content(event, trigger, player) {
				player.ny_fushiTime[4+trigger.zhuanShuFuShiId1]--;
				let num = trigger.targets.length + 1;
				await player.draw(num);
				await player.ny_addNuQi(num);
			},
			priority: 1145,
		}
		lib.skill._ny_zhuanShu_Firstchixue = {//初版赤血•神 damage id114
			mod: {
				attackRange:function (player, num) {
					if (player.ny_zhuanShuFuShiId?.some(id => id == "_ny_zhuanShu_Firstchixue")) {
						num += 1;
						if (num < 2) num = 2;
						return num;
					}
				},
			},
			trigger: {
				source: "damageEnd",
				player: "damageEnd",
			},
			popup:false,
			frequent: true,
			filter: function(event, player) {
				let id = player.ny_zhuanShuFuShiId?.find(id => id == "_ny_zhuanShu_Firstchixue");
				if (id) {
					event.zhuanShuFuShiId114 = player.ny_zhuanShuFuShiId.indexOf(id);
					return player.ny_fushiTime[4+event.zhuanShuFuShiId114] > 0 && event.num > 0;
				} else return false;
			},
			async content(event, trigger, player) {
				let result = await player.chooseTarget(1)
					.set("filterTarget", lib.filter.all)
					.set("prompt", get.prompt("_ny_zhuanShu_Firstchixue"))
					.set("prompt2", get.prompt2("_ny_zhuanShu_Firstchixue"))
					.set("ai", target => {
						const player = _status.event.player;
						let num = get.attitude(player, target);
						if (num > 0 || player == target) return target.getDamagedHp();
						if (num < 0) return target.hp;
					})
					.forResult();
				if (result.bool) {
					player.ny_fushiTime[4+trigger.zhuanShuFuShiId114]--;
					let target = result.targets[0];
					let num = Math.min(trigger.num, 2);
					let next = await player.chooseBool("是否对" + get.translation(target) + "造成" + get.cnNumber(num) + "点伤害<br>或取消并令其回复" + get.cnNumber(num) + "点体力？")
						.set("ai", () => -1 * get.attitude(_status.event.player, target))
						.forResult();
					if (next.bool) await target.damage(num, player);
					else await target.recover(num);
				}
			},
			priority: 1145,
		}
		lib.skill._ny_zhuanShu_chixue = {//赤血•神 damage changeHp id113
			mod: {
				attackRange:function (player, num) {
					if (player.ny_zhuanShuFuShiId?.some(id => id == "_ny_zhuanShu_chixue")) {
						num += 1;
						if (num < 2) num = 2;
						return num;
					}
				},
			},
			trigger: {
				source: "damageEnd",
				player: "changeHp",
			},
			popup:false,
			frequent: true,
			filter: function(event, player, triggername) {
				if (triggername == "changeHp" && event.num > 0) return false;
				else if (event.num <= 0) return false;
				let id = player.ny_zhuanShuFuShiId?.find(id => id == "_ny_zhuanShu_chixue");
				if (id) {
					event.zhuanShuFuShiId113 = player.ny_zhuanShuFuShiId.indexOf(id);
					return player.ny_fushiTime[4+event.zhuanShuFuShiId113] > 0;
				} else return false;
			},
			async content(event, trigger, player) {
				let result = await player.chooseTarget(1)
					.set("filterTarget", lib.filter.all)
					.set("prompt", get.prompt("_ny_zhuanShu_chixue"))
					.set("prompt2", get.prompt2("_ny_zhuanShu_chixue"))
					.set("ai", target => {
						const player = _status.event.player;
						let num = get.attitude(player, target);
						if (num > 0 || player == target) return target.getDamagedHp();
						if (num < 0) return target.hp;
					})
					.forResult();
				if (result.bool) {
					player.ny_fushiTime[4+trigger.zhuanShuFuShiId113]--;
					let target = result.targets[0];
					let num = Math.min(trigger.num, 2);
					let next = await player.chooseBool("是否令" + get.translation(target) + "失去" + get.cnNumber(num) + "点体力<br>或取消并令其回复" + get.cnNumber(num) + "点体力？")
						.set("ai", () => -1 * get.attitude(_status.event.player, target))
						.forResult();
					if (next.bool) await target.loseHp(num);
					else await target.recover(num);
				}
			},
			priority: 1145,
		}
		lib.skill._ny_zhuanShu_yongan = {//永安 phaseChange id1
			trigger: {
				global: "phaseChange",
			},
			popup:false,
			frequent: false,
			"prompt2": function(event, player) {
				const phaseName = event.phaseList[event.num].replace(/\|.+/, '');
				return "将" + get.translation(event.player) + "的" + get.translation(phaseName) + "改为摸牌阶段";
			},
			filter: function(event, player, triggername) {
				if (player == event.player) return false;
				if (event.phaseList[event.num].startsWith("phaseDraw")) return false;
				let num = player.ny_nuqi ?? 0;
				let num2 = event.player.getHistory("skipped")?.length ?? 0;
				let id = player.ny_zhuanShuFuShiId?.find(id => id == "_ny_zhuanShu_yongan");
				if (id) {
					event.zhuanShuFuShiId1 = player.ny_zhuanShuFuShiId.indexOf(id);
					return player.ny_fushiTime[4+event.zhuanShuFuShiId1] > 0 && num == (event.num - num2);
				} else return false;
			},
			content() {
				const phaseName = trigger.phaseList[trigger.num].replace(/\|.+/, '');
				player.ny_fushiTime[4+trigger.zhuanShuFuShiId1]--;
				trigger.phaseList[trigger.num] = "phaseDraw|nuyan_jirenguixiang";
				game.log(trigger.player, phaseName, '改为了', '摸牌阶段');
				game.delayx();
			},
			priority: 1145,
		}
		lib.skill._ny_zhuanShu_polu = {//破虏 useCardToPlayered id2
			trigger: {
				player: "useCardToPlayered",
			},
			popup:false,
			forced: true,
			filter: function(event, player, triggername) {
				if (event.targets?.length > 1) return false;
				if (event.card.name != "juedou") return false;
				let id = player.ny_zhuanShuFuShiId?.find(id => id == "_ny_zhuanShu_polu");
				if (id) {
					event.zhuanShuFuShiId2 = player.ny_zhuanShuFuShiId.indexOf(id);
					return player.ny_fushiTime[4+event.zhuanShuFuShiId2] > 0;
				} else return false;
			},
			async content(event, trigger, player) {
				player.ny_fushiTime[4+trigger.zhuanShuFuShiId2]--;
				trigger.card.storage ??= {};
				let result = await player.chooseBool("是否令此【决斗】无视防具且无法被响应<br>若选择否，则此【决斗】无视防御符石且造成的伤害视为体力流失")
					.set("ai", () => true).forResult();
				if (result.bool) {
					await trigger.getParent().directHit.addArray(game.players);
					trigger.card.storage._ny_zhuanShu_polu1 = true;
				} else {
					trigger.card.storage._ny_zhuanShu_polu2 = true;
					lib.skill._ny_noneFangYuFushi.init(trigger.target, "useCardAfter", (evt) => evt?.card?.storage?._ny_zhuanShu_polu2);
				}
			},
			ai: {
			    unequip: true,
			    skillTagFilter: function(player, tag, arg) {
			        if (arg?.card?.name == 'juedou' && arg?.card?.storage?._ny_zhuanShu_polu1) return true;
					return false;
			    },
			},
			subSkill: {
				effect: {
					trigger: {
						global: "damageBefore",
					},
					priority: 1145,
					popup: true,
					forced: true,
					filter: function(event, player) {
						return event?.card?.name == "juedou" && event.card?.storage?._ny_zhuanShu_polu2
					},
					async content(event, trigger, player) {
						trigger.cancel();
						trigger.player.loseHp(trigger.num);
					},
				},
			},
			priority: 1145,
		}
		lib.skill._ny_zhuanShu_jianbi = {//坚壁
			trigger: {
				global: "phaseEnd",
			},
			popup:false,
			frequent: true,
			filter: function(event, player, triggername) {
				if (player == event.player) return false;
				if (player.isMinHp(true)) return false;
				let id = player.ny_zhuanShuFuShiId?.find(id => id == "_ny_zhuanShu_jianbi");
				if (id) {
					event.zhuanShuFuShiId1 = player.ny_zhuanShuFuShiId.indexOf(id);
					return player.ny_fushiTime[4+event.zhuanShuFuShiId1] > 0;
				} else return false;
			},
			async content(event, trigger, player) {
				let choiceList = ["令" + get.translation(trigger.player) + "减少一点体力上限", "令你增加一点体力上限并回复一点体力"];
				let choices = ["选项一", "选项二", "cancel2"];
				let result = await player.chooseControl()
					.set("controls", choices)
					.set("choiceList", choiceList)
					.set("target", trigger.player)
					.set("ai", () => {
						let player = _status.event.player;
						if (player.hp == 1 || get.attitude(player, _status.event.target)) return "选项二";
						else return "选项一";
					})
					.forResult();
				if (result.control == "cancel2") return;
				player.ny_fushiTime[4+trigger.zhuanShuFuShiId2]--;
				if (result.control == "选项一") await trigger.player.loseMaxHp();
				else {
					await player.gainMaxHp();
					await player.recover();
				}
			},
			priority: 1145,
		}
		lib.skill._ny_zhuanShu_Firstgudingdao = {//初版古锭刀•神
			mod: {
				attackRange:function (player, num) {
					if (player.ny_zhuanShuFuShiId?.some(id => id == "_ny_zhuanShu_Firstgudingdao")) {
						num += 4;
						if (num < 5) num = 5;
						return num;
					}
				},
			},
			trigger: {
				player: "useCard",
			},
			popup:false,
			forced: true,
			filter: function(event, player, triggername) {
				if (!event.targets?.length) return false;
				if (event.card.name != "sha") return false;
				let id = player.ny_zhuanShuFuShiId?.find(id => id == "_ny_zhuanShu_Firstgudingdao");
				if (id) {
					event.zhuanShuFuShiId1 = player.ny_zhuanShuFuShiId.indexOf(id);
					return player.ny_fushiTime[4+event.zhuanShuFuShiId1] > 0;
				} else return false;
			},
			async content(event, trigger, player) {
				player.ny_fushiTime[4+trigger.zhuanShuFuShiId1]--;
				for (let i of trigger.targets) {
					trigger.card.storage._ny_zhuanShu_Firstgudingdao ??= 0;
					trigger.card.storage._ny_zhuanShu_Firstgudingdao++;
					lib.skill._ny_noneFangYuFushi.init(i, "useCardAfter", (evt) => evt?.card?.storage?._ny_zhuanShu_Firstgudingdao);
				}
				await trigger.directHit.addArray(game.players);
			},
			priority: 1145,
			subSkill: {
				effect:{
					trigger: {
						player: "damageBegin1",
					},
					filter: function(event, player) {
						return event?.card?.storage?._ny_zhuanShu_Firstgudingdao && !player.countCards("h");
					},
					content: function() {
						trigger.num += trigger.card.storage._ny_zhuanShu_Firstgudingdao;
					},
					popup:false,
					forced: true,
					priority: 1145,
				},
			},
		}
		lib.skill._ny_zhuanShu_gudingdao = {//古锭刀•神
			mod: {
				attackRange:function (player, num) {
					if (player.ny_zhuanShuFuShiId?.some(id => id == "_ny_zhuanShu_gudingdao")) {
						num += 4;
						if (num < 5) num = 5;
						return num;
					}
				},
			},
			trigger: {
				player: "useCard",
			},
			popup:false,
			forced: true,
			filter: function(event, player, triggername) {
				if (!event.targets?.length) return false;
				if (!get.tag(event.card, "damage")) return false;
				let id = player.ny_zhuanShuFuShiId?.find(id => id == "_ny_zhuanShu_gudingdao");
				if (id) {
					event.zhuanShuFuShiId2 = player.ny_zhuanShuFuShiId.indexOf(id);
					return player.ny_fushiTime[4+event.zhuanShuFuShiId2] > 0;
				} else return false;
			},
			async content(event, trigger, player) {
				player.ny_fushiTime[4+trigger.zhuanShuFuShiId2]--;
				for (let i of trigger.targets) {
					trigger.card.storage._ny_zhuanShu_gudingdao ??= 0;
					trigger.card.storage._ny_zhuanShu_gudingdao++;
					lib.skill._ny_noneFangYuFushi.init(i, "useCardAfter", (evt) => evt?.card?.storage?._ny_zhuanShu_gudingdao);
				}
				await trigger.directHit.addArray(game.players);
			},
			priority: 1145,
			subSkill: {
				effect:{
					trigger: {
						player: "damageBegin1",
					},
					filter: function(event, player) {
						return event?.card?.storage?._ny_zhuanShu_gudingdao && !player.countCards("h");
					},
					content: function() {
						trigger.num += trigger.card.storage._ny_zhuanShu_gudingdao;
					},
					popup:false,
					forced: true,
					priority: 1145,
				},
			},
		}
		lib.skill._ny_zhuanShu_zhuisi = {//追思 phaseBegin id1
			trigger: {
				global: "phaseBegin",
			},
			forced: true,
			popup: false,
			priority: 1145,
			filter: function(event, player) {
				let id = player.ny_zhuanShuFuShiId?.find(id => id == "_ny_zhuanShu_zhuisi");
				if (id) {
					event.zhuanShuFuShiId1 = player.ny_zhuanShuFuShiId.indexOf(id);
					return player.ny_fushiTime[4+event.zhuanShuFuShiId1] > 0;
				} else return false;
			},
			async content(event, trigger, player) {
				let list;
				//获取所有女性角色
				if (lib.character) {
					list = [];
					for (let i in lib.character) {
					    if (lib.character[i][0] == "female") {
					        list.push(i);
					    }
					}
				} else if (_status.characterlist) {
				    list = [];
				    for (let i = 0; i < _status.characterlist.length; i++) {
				        const name = _status.characterlist[i];
				        if (lib.character[name][0] == "female") {
				            list.push(name);
				        }
				    }
				} else if (_status.connectMode) {
				    list = get.charactersOL(function (i) {
				        return lib.character[i][0] == "female";
				    });
				} else {
				    list = get.gainableCharacters(function (info) {
				        return info[0] == "female";
				    });
				}
				//后续增加只选怒焰选项
				const players = game.players.concat(game.dead);
				for (let i = 0; i < players.length; i++) {
				    list.remove(players[i].name);
				    list.remove(players[i].name1);
				    list.remove(players[i].name2);
				}
				list = list.randomGets(3);
				const skills = [];
				for (const i of list) {
				    skills.addArray(
				        (lib.character[i][3] || []).filter(function (skill) {
				            const info = get.info(skill);
				            return info && !info.nuyan_jiBan;
				        })
				    );
				}
				if (!list.length || !skills.length) {
				    return;
				}
				await Promise.all(event.next);
				event.videoId = lib.status.videoId++;
				if (player.isUnderControl()) {
				    game.swapPlayerAuto(player);
				}
				const chooseCharacterSkills = function (player, list, skills, force = false, num, ai = { bool: false }) {
				    const { promise, resolve } = Promise.withResolvers();
				    const event = _status.event;
				    //初始化result
				    event._result ??= {};
				    event._result.skills = [];
				    event.selectedSkills ??= event._result.skills;
				    //创建对话框
				    let dialog = ui.create.dialog(`请选择获得至多${get.cnNumber(num)}个技能`, [list, "character"], "hidden");
				    event.dialog = dialog;
				    //创建确定按钮
				    event.control_ok = ui.create.control("ok", link => {
				        _status.imchoosing = false;
				        event.dialog.close();
				        event.control_ok?.close();
				        event.control_cancel?.close();
				        event._result = {
				            bool: true,
				            skills: event.selectedSkills,
				        };
				        resolve(event._result);
				        game.resume();
				    });
				    //event.control_ok.classList.add("disabled");
				    //如果是非强制的，才创建取消按钮
				    if (!force) {
				        event.control_cancel = ui.create.control("cancel", link => {
				            _status.imchoosing = false;
				            event.dialog.close();
				            event.control_ok?.close();
				            event.control_cancel?.close();
				            event._result = {
				                bool: false,
				            };
				            resolve(event._result);
				            game.resume();
				        });
				    }
				    event.switchToAuto = function () {
				        _status.imchoosing = false;
				        event.dialog?.close();
				        event.control_ok?.close();
				        event.control_cancel?.close();
				        event._result = ai;
				        resolve(event._result);
				        game.resume();
				    };
				    //创建用于选择的技能按钮（tdnodes样式）
				    const table = document.createElement("div");
				    table.classList.add("add-setting");
				    table.style.margin = "0";
				    table.style.width = "100%";
				    table.style.position = "relative";
				    for (let i = 0; i < skills.length; i++) {
				        const td = ui.create.div(".shadowed.reduce_radius.pointerdiv.tdnode");
				        td.link = skills[i];
				        table.appendChild(td);
				        td.innerHTML = "<span>" + get.translation(skills[i]) + "</span>";
				        //给按钮添加监听
				        td.addEventListener(lib.config.touchscreen ? "touchend" : "click", function () {
				            if (_status.dragged) {
				                return;
				            }
				            if (_status.justdragged) {
				                return;
				            }
				            _status.tempNoButton = true;
				            setTimeout(function () {
				                _status.tempNoButton = false;
				            }, 500);
				            const link = this.link;
				            if (!this.classList.contains("bluebg")) {
				                //限制选择数量
				                if (event.selectedSkills.length >= num) {
				                    return;
				                }
				                event.selectedSkills.add(link);
				                this.classList.add("bluebg");
				            } else {
				                this.classList.remove("bluebg");
				                event.selectedSkills.remove(link);
				            }
				            //event.control_ok.classList[event.selectedSkills.length >= 0 ? "remove" : "add"]("disabled");
				        });
				    }
				    dialog.content.appendChild(table);
				    dialog.add("　　");
				    dialog.open();
						
				    //点亮所有按钮（包括角色的）
				    for (let i = 0; i < event.dialog.buttons.length; i++) {
				        event.dialog.buttons[i].classList.add("selectable");
				    }
				    game.pause();
				    _status.imchoosing = true;
				    return promise;
				};
				const ai = function () {
				    return { bool: true, skills: skills.slice().sort((a, b) => get.skillRank(b, "inout") - get.skillRank(a, "inout")).slice(0, 1) };
				};
				let next;
				if (event.isMine()) {
				    next = chooseCharacterSkills(player, list, skills, true, 1, ai());
				} else if (player.isOnline()) {
				    let { promise, resolve } = Promise.withResolvers();
				    player.send(chooseCharacterSkills, player, list, skills, true, 1, ai());
				    player.wait(result => {
				        if (result == "ai") {
				            result = ai();
				        }
				        resolve(result);
				    });
				    next = promise;
				} else {
				    next = Promise.resolve(ai());
				}
				const result = await next;
				if (result?.skills?.length) {
					player.ny_fushiTime[4+trigger.zhuanShuFuShiId1]--;
				    await player.addTempSkill(result.skills[0]);
				}
				game.broadcastAll(function (list) {
				    game.expandSkills(list);
				    for (const i of list) {
				        var info = lib.skill[i];
				        if (!info) {
				            continue;
				        }
				        if (!info.audioname2) {
				            info.audioname2 = {};
				        }
				    }
				}, result.skills);
			},
		}
		lib.skill._ny_zhuanShu_luoying = {//落英 dying id3
			mod: {
				aiValue: function (player, card, num) {
					if (get.name(card) != "jiu" && get.color(card) != "black") return;
					var cards = player.getCards("hs", function (card) {
						return get.name(card) == "jiu" || get.color(card) == "black";
					});
					cards.sort(function (a, b) {
						return (get.name(b) == "jiu" ? 1 : 2) - (get.name(a) == "jiu" ? 1 : 2);
					});
					var geti = function () {
						if (cards.includes(card)) {
							return cards.indexOf(card);
						}
						return cards.length;
					};
					if (get.name(card) == "jiu") return Math.min(num, [6, 4, 3][Math.min(geti(), 2)]) * 0.6;
					return Math.max(num, [6, 4, 3][Math.min(geti(), 2)]);
				},
				aiUseful: function () {
					return lib.skill.rekanpo.mod.aiValue.apply(this, arguments);
				},
			},
			popup:false,
			position: "he",
			enable: ["chooseToUse"],
			filter: function(event,player,triggername){
			    if (!player.ny_fushiId) return false;
				if (!player.isDying()) return false;
			    let id = player.ny_zhuanShuFuShiId?.find(id => id == "_ny_zhuanShu_luoying");
			    if (id) {
			    	id = player.ny_zhuanShuFuShiId.indexOf(id);
			    	return player.ny_fushiTime[4+id] > 0;
			    } else return false;
			},
			filterCard: function (card) {
				return get.color(card) == "black";
			},
			viewAsFilter: function (player) {
				if (!player.ny_fushiId) return false;
				if (!player.isDying()) return false;
				let id = player.ny_zhuanShuFuShiId?.find(id => id == "_ny_zhuanShu_luoying");
				if (id) {
					id = player.ny_zhuanShuFuShiId.indexOf(id);
					return player.ny_fushiTime[4+id] > 0 && player.countCards("he", { color: "black" }) > 0;
				} else return false;
			},
			viewAs: {
				name: "jiu",
			},
			prompt: "将一张黑色牌当【酒】使用",
			precontent: function() {
				player.storage._ny_zhuanShu_luoying ??= 0;
				player.storage._ny_zhuanShu_luoying++
				player.when({ global: "phaseEnd" })
					.then(() => delete player.storage._ny_zhuanShu_luoying);
				//我的理解是只有印卡扣次数
				let id = player.ny_zhuanShuFuShiId?.find(id => id == "_ny_zhuanShu_luoying");
				id = player.ny_zhuanShuFuShiId.indexOf(id);
				player.ny_fushiTime[4+id]--;
			},
			check: function (card) {
				return 114514 - get.value(card);
			},
			subSkill: {
				effect: {
					popup: false,
					forced: true,
					trigger: {
						player: "dyingAfter",
					},
					filter: function(event, player) {
						let id = player.ny_zhuanShuFuShiId?.find(id => id == "_ny_zhuanShu_luoying");
						if (id) {
							id = player.ny_zhuanShuFuShiId.indexOf(id);
							return player.ny_fushiTime[4+id] > 0;
						} else return false;
					},
					async cost(event, trigger, player) {
						event.result = await player.chooseBool()
							.set("prompt", get.prompt("_ny_zhuanShu_luoying"))
							.set("prompt2", "对" + get.translation(_status.currentPhase) + "造成" + get.cnNumber((player.storage._ny_zhuanShu_luoying ?? 0) + 2) + "点伤害")
							.set("ai", () => get.attitude(_status.event.player, _status.currentPhase))
							.forResult();
					},
					content() {
						player.storage._ny_zhuanShu_luoying ??= 0;
						player.storage._ny_zhuanShu_luoying++
						player.when({ global: "phaseEnd" })
							.then(() => delete player.storage._ny_zhuanShu_luoying);
						let num = player.storage._ny_zhuanShu_luoying + 1;
						_status.currentPhase.damage(num, player);
					},
					priority: 1145,
				},
			},
		}
		lib.skill._ny_zhuanShu_fengqiqin = {//凤栖琴
			popup:false,
			frequent: false,
			priority: 1145,
			trigger: {
				player: "changeHp",
			},
			filter(event, player) {
				if (!player.ny_zhuanShuFuShiId?.some(id => id == "_ny_zhuanShu_fengqiqin")) return false;
				let id = player.ny_zhuanShuFuShiId.find(id => id == "_ny_zhuanShu_fengqiqin");
				id = player.ny_zhuanShuFuShiId.indexOf(id);
				return player.ny_fushiTime[4 + id] > 0 && event.num < 0;
			},
			getIndex:(event) => Math.abs(event.num),
			async content(event, trigger, player) {
				let card = get.cardPile2(function (card) {
				    return get.number(card) <= 6;
				}, "random");
				if (!card) card = get.cardPile(function (card) {
				    return get.number(card) <= 6;
				}, "discardPile", "random");
				if (card) {
					let id = player.ny_zhuanShuFuShiId.find(id => id == event.name);
					id = player.ny_zhuanShuFuShiId.indexOf(id);
					player.ny_fushiTime[4 + id]--;
					await player.gain(card, "gain2");
					await player.recover(Math.ceil(get.number(card) / 2));
				}
			},
		}
		lib.skill._ny_zhuanShu_keqingdi = {//柯琴笛
			popup: false,
			priority: 1145,
			trigger: {
				global: ["gameStart", "loseHpBegin"],
				player: ["enterGame", "changeCharacterAfter", "phaseZhunbeiBegin"],
			},
			filter(event, player, name) {
				if (get.itemtype(player) != "player") return false;
				if (!player.ny_zhuanShuFuShiId?.some(id => id == "_ny_zhuanShu_keqingdi")) return false;
				let id = player.ny_zhuanShuFuShiId.find(id => id == "_ny_zhuanShu_keqingdi");
				id = player.ny_zhuanShuFuShiId.indexOf(id);
				if (player.ny_fushiTime[4 + id] <= 0) return false;
				if (name == "loseHpBegin") return player.storage.nuyan_jiaowei_used;
				else if (player.storage.nuyan_jiaowei_used) return false;
				return game.hasPlayer(current => !current.hasSkill("nuyan_wangyou"));
			},
			async cost(event, trigger, player) {
				if (player.storage.nuyan_jiaowei_used) event.result = await player.chooseBool()
					.set("prompt", get.translation(trigger.player) + "即将失去" + get.cnNumber(trigger.num) + "点体力，是否防止之并令其获得〖忘机〗？")
					.set("prompt2", "〖忘机〗：" + get.translation("nuyan_wangji_info"))
					.set("target", trigger.player)
					.set("ai", () => {
						const { player, target } = _status.event;
						const att = get.attitude(player, target);
						if (target.hasSkill("nuyan_wangji")) return att;
						let value = 0,
							skillValue = 0;
						target.getCards("e").forEach(i => value += get.value(i));
						target.getSkills(null, false, false).forEach(sk => {
							if (!lib.skill[sk].charlotte && !lib.skill[sk].persevereSkill && !lib.skill[sk].juexingji && !lib.skill[sk].dutySkill) skillValue += get.skillRank(sk);
						})
						skillValue *= 10;
						if (att < 0 && skillValue > value) return 114514;
						else if (att > 0 && skillValue < 5) return target.getCards("j").some(c => c.name == "lebu");
						return 0;
					})
					.forResult();
				else event.result = await player.chooseTarget(false)
					.set("prompt", get.prompt(event.name.slice(0, -5)))
					.set("prompt2", get.prompt2(event.name.slice(0, -5)))
					.set("filterTarget", (card, player, target) => !target.hasSkill("nuyan_wangyou"))
					.set("ai", (target) => {
						let att = get.attitude(_status.event.player, target);
						let value = 0;
						target.getCards("e").forEach(i => value += get.value(i));
						if (att < 0) return value - (target.hp * 66);
						if (att > 0) return (target.hp * 6) - value;
						if (target.hp <= 1 && att > 0) return 114514
						return -114514;
					})
					.forResult();
			},
			async content(event, trigger, player) {
				let id = player.ny_zhuanShuFuShiId.find(id => id == event.name);
				id = player.ny_zhuanShuFuShiId.indexOf(id);
				player.ny_fushiTime[4 + id]--;
				if (player.storage.nuyan_jiaowei_used) {
					trigger.cancel();
					trigger.player.addTempSkill("nuyan_wangji", { player: "phaseEnd" });
					return;
				}
				event.targets[0].addTempSkill("nuyan_wangyou", { player: "phaseBegin" });
			},
		}
		lib.skill._ny_zhuanShu_hanshuang = {//寒霜
			popup: false,
			priority: 1145,
			trigger: {
				global: "phaseUseBegin",
			},
			filter(event, player) {
				if (!player.ny_zhuanShuFuShiId?.some(id => id == "_ny_zhuanShu_hanshuang")) return false;
				let id = player.ny_zhuanShuFuShiId.find(id => id == "_ny_zhuanShu_hanshuang");
				id = player.ny_zhuanShuFuShiId.indexOf(id);
				if (player.ny_fushiTime[4 + id] <= 0) return false;
				return player.countDiscardableCards(player, "he", { type: "equip" }) && event.player != player;
			},
			forced: true,
			async content(event, trigger, player) {
				let result = await player.chooseToDiscard(false, "he")
					.set("target", trigger.player)
					.set("filterCard", (card) => get.type(card) == "equip")
					.set("ai", (card) => {
						const { player, target } = get.event();
						let att = get.attitude(player, target);
						if (att > 0) return -114514;
						else return target.countCards("h") - get.value(card);
					})
					.set("prompt", get.prompt(event.name))
					.set("prompt2", get.prompt2(event.name))
					.forResult();
				if (!result.bool) return;
				let id = player.ny_zhuanShuFuShiId.find(id => id == event.name);
				id = player.ny_zhuanShuFuShiId.indexOf(id);
				player.ny_fushiTime[4 + id]--;
				let color = get.color(result.cards[0]);
				trigger.player.markAuto(event.name + "_effect", color);
				trigger.player.markSkill(event.name + "_effect");
				trigger.player.when({ player: "phaseUseEnd" })
					.then(() => {
						delete player.storage["_ny_zhuanShu_hanshuang"];
						player.unmarkSkill("_ny_zhuanShu_hanshuang");
					});
			},
			subSkill: {
				effect: {
					sub: true,
					sourceSkill: "_ny_zhuanShu_hanshuang",
					marktext: "寒",
					intro: {
						name: "寒霜",
						markcount:(storage) => storage?.length,
						content(storage) {
							if (!storage?.length) return;
							let str = "";
							for (let i of storage) {
								str += get.translation(i) + "、";
							}
							str = str.slice(0, -1);
							return "直至本阶段结束，你无法使用或打出" + str + "的牌";
						},
					},
					popup: false,
					mod: {
						cardEnabled2(card, player) {
							if (player.getStorage("_ny_zhuanShu_hanshuang_effect").includes(get.color(card))) return false;
						},
					},
				},
			},
		}
		lib.skill._ny_zhuanShu_yingzhi = {//鹰鸷
			popup: false,
			priority: 1145,
			getSeat(player) {
				let players = game.players.slice().sortBySeat(_status.roundStart).slice(0, 1).addArray(game.players.slice().sortBySeat(_status.roundStart));
				players = players.filter(item => players.indexOf(player) > players.indexOf(item));
				return players;
			},
			trigger: {
				player: "turnOverBegin",
			},
			filter(event, player) {
				let skill = "_ny_zhuanShu_yingzhi";
				if (!player.ny_zhuanShuFuShiId?.some(id => id == skill)) return false;
				let id = player.ny_zhuanShuFuShiId.find(id => id == skill);
				id = player.ny_zhuanShuFuShiId.indexOf(id);
				if (player.ny_fushiTime[4 + id] <= 0) return false;
				return game.hasPlayer(current => (current.hp > player.hp) || (get.info(skill).getSeat(player).includes(current)));
			},
			async cost(event, trigger, player) {
				const skill = event.name.slice(0, -5);
				let result = await player.chooseTarget(false)
					.set("prompt", get.prompt(skill))
					.set("prompt2", get.prompt2(skill))
					.set("filterTarget", (card, player, target) => {
						return target.hp > player.hp || get.info("_ny_zhuanShu_yingzhi").getSeat(player).includes(target);
					})
					.set("ai", (target) => {
						const { player } = get.event();
						const att = get.attitude(player, target);
						if (att > 0) return 114514;
						else {
							let storage1 = target.ny_fushiId?.slice();
							let storage2 = target.ny_zhuanShuFuShiId?.slice();
							if (!(storage1?.length > 0) && !(storage2?.length > 0) && !target.isTurnedOver()) return 114514 - game.players.slice().sortBySeat().indexOf(target);
						}
						return -114514;
					})
					.forResult();
				if (!result.bool) event.result = { bool: false };
				event.result = {
					bool: result.bool,
					cost_data: result.targets[0],
				};
			},
			async content(event, trigger, player) {
				const target = event.cost_data;
				let storage1 = target.ny_fushiId?.slice();
				let storage2 = target.ny_zhuanShuFuShiId?.slice();
				if (!(storage1?.length > 0) && !(storage2?.length > 0)) {
					await target.turnOver();
					return;
				}
				let choiceList = ["你翻面", "你所有技能符石失效直至你回合结束"];
				let choices = ["选项一", "选项二"];
				let result = await target.chooseControl()
					.set("controls", choices)
					.set("choiceList", choiceList)
					.set("ai", () => {
						return _status.event.player.isTurnedOver() ? "选项一" : "选项二";
					})
					.forResultControl();
				if (result == "选项一") await target.turnOver();
				else lib.skill._ny_noneFuShi.init(target, { player: "phaseEnd" });
			},
		}
		lib.skill._ny_zhuanShu_Firstsizhao = {//起袁绍-初版思召
			popup: false,
			priority: 1145,
			forced: true,
			marktext: "思",
			intro: {
				name: "初版思召",
				content(storage) {
					return "已记录花色：" + get.translation(storage);
				},
			},
			trigger: {
				player: "useCardAfter",
			},
			filter(event, player) {
				if (!player.ny_filterStone("_ny_zhuanShu_Firstsizhao")) return false;
				return event.card?.name == "sha" && !player.storage._ny_zhuanShu_Firstsizhao?.includes(get.suit(event.card)) && player.isPhaseUsing() && !["unsure", "none"].includes(get.suit(event.card));
			},
			async content(event, trigger, player) {
				await player.ny_logStone("_ny_zhuanShu_Firstsizhao");
				player.markAuto(event.name, get.suit(trigger.card));
				player.when({ player: "phaseEnd" })
					.then(() => delete player.storage._ny_zhuanShu_Firstsizhao);
			},
		}
		lib.skill._ny_zhuanShu_sizhao = {//起袁绍-思召
			popup: false,
			priority: 1145,
			forced: true,
			trigger: {
				player: "useCardAfter",
			},
			marktext: "思",
			intro: {
				name: "思召",
				content(storage) {
					return "已记录花色：" + get.translation(storage);
				},
			},
			filter(event, player) {
				if (!player.ny_filterStone("_ny_zhuanShu_sizhao")) return false;
				return event.card?.name == "sha" && !player.storage._ny_zhuanShu_sizhao?.includes(get.suit(event.card)) && player.isPhaseUsing() && !["unsure", "none"].includes(get.suit(event.card));
			},
			async content(event, trigger, player) {
				await player.ny_logStone("_ny_zhuanShu_sizhao");
				player.markAuto(event.name, get.suit(trigger.card));
				player.when({ player: "phaseEnd" })
					.then(() => delete player.storage._ny_zhuanShu_sizhao);
			},
		}
		lib.skill._ny_zhuanShu_longlin = {//周处 龙鳞
			popup: false,
			priority: 1145,
			forced: true,
			trigger: {
				player: "compare",
				target: "compare",
			},
			filter(event, player) {
				if (!player.ny_filterStone("_ny_zhuanShu_longlin")) return false;
				if (event.player == player) return !event.iwhile && event.target?.isDamaged();
				else return event.player?.isDamaged();
			},
			async content(event, trigger, player) {
				await player.ny_logStone("_ny_zhuanShu_longlin");
				await player.draw();
				const target = trigger.player == player ? trigger.target : trigger.player;
				const num = target.maxHp - target.hp;
				game.log(target, "拼点牌点数减", num);
				if (trigger.target == player) trigger.num1 -= num;
				else trigger.num2 -= num;
			},
		}
		lib.skill._ny_zhuanShu_bazhen = {//谋诸葛亮--八阵
			popup: false,
			priority: 1145,
			trigger: {
				global: "phaseBegin",
			},
			filter(event, player) {
				return player.ny_filterStone("_ny_zhuanShu_bazhen");
			},
			async cost(event, trigger, player) {
				let result = await player.chooseTarget(false)
					.set("prompt", get.prompt(event.name.slice(0, -5)))
					.set("prompt2", "令一名角色获得一项“阵法”效果直至本回合结束")
					.set("ai", () => Math.random() * 114514)
					.forResult();
				if (result.bool) {
					event.result = {
						bool: true,
						cost_data: result.targets[0],
					};
				} else event.result = { bool: false };
			},
			async content(event, trigger, player) {
				const target = event.cost_data;
				let obj = lib.skill._ny_zhuanShu_bazhen.subSkill;
				let choices = Object.keys(obj);
				choices.add("cancel2");
				let choiceList = choices.map(item => "【" + item +"】：<div>" + obj[item]?.info + "</div>").slice(0, -1);
				let result = await player.chooseControl(false)
					.set("controls", choices)
					.set("goods", choices.filter(i => i.good))
					.set("choiceList", choiceList)
					.set("target", target)
					.set("ai", () => {
						const { controls, goods, target, player } = get.event();
						let bads = controls.slice().removeArray(goods);
						if (get.attitude(player, target) > 0) return goods[Math.floor(Math.random() * goods.length)];
						return bads[Math.floor(Math.random() * bads.length)];
					})
					.forResultControl();
				if (result == "cancel2") return;
				await player.ny_logStone("_ny_zhuanShu_bazhen");
				//后续适配多人拥有八阵的情况
				game.broadcastAll((del) => delete lib.skill._ny_zhuanShu_bazhen.subSkill[del], result);
				target.addTempSkill(event.name + "_" + result);
			},
			subSkill: {
				"天覆阵": {
					sub: true,
					sourceSkill: "_ny_zhuanShu_bazhen",
					charlotte: true,
					forced: true,
					priority: 1145,
					info: "令其怒气上限-1，然后其本回合受到伤害后无法获得怒气",
					marktext: "覆",
					intro: {
						nocount: true,
						name: "天覆阵",
						content: "你本回合受到伤害后无法获得怒气",
					},
					init2(player, skill) {
						player.addMark(skill);
						let next = game.createEvent(skill + "_init");
						next.player = player;
						next.setContent("emptyEvent");
					},
					onremove: true,
					filter(event, player) {
						return player.hasMark(this.sourceSkill + "_" + this.intro.name);
					},
					trigger: {
						player: "_ny_zhuanShu_bazhen_天覆阵_init",
					},
					async content(event, trigger, player) {
						await player.ny_loseNuQiMax();
					},
				},
				"地载阵": {
					sub: true,
					sourceSkill: "_ny_zhuanShu_bazhen",
					charlotte: true,
					forced: true,
					priority: 1145,
					info: "令其体力上限+1，然后其本回合受到伤害时，数值-1",
					good: true,
					marktext: "载",
					intro: {
						nocount: true,
						name: "地载阵",
						content: "你本回合受到伤害时数值-1",
					},
					init2(player, skill) {
						player.addMark(skill);
						player.gainMaxHp();
					},
					onremove: true,
					filter(event, player) {
						return player.hasMark(this.sourceSkill + "_" + this.intro.name);
					},
					trigger: {
						player: "damageBegin3",
					},
					async content(event, trigger, player) {
						trigger.num--;
					},
				},
				"风扬阵": {
					sub: true,
					sourceSkill: "_ny_zhuanShu_bazhen",
					charlotte: true,
					forced: true,
					priority: 1145,
					info: "令其失去2点怒气，然后其本回合怒气变化1点后，随机摧毁1张手牌",
					marktext: "扬",
					intro: {
						nocount: true,
						name: "风扬阵",
						content: "你本回合怒气变化1点后，随机摧毁一张手牌",
					},
					init2(player, skill) {
						player.addMark(skill);
						let next = game.createEvent(skill + "_init");
						next.player = player;
						next.setContent("emptyEvent");
					},
					onremove: true,
					filter(event, player) {
						return player.hasMark(this.sourceSkill + "_" + this.intro.name);
					},
					trigger: {
						player: ["_ny_zhuanShu_bazhen_风扬阵_init", "ny_changeNuQi"]
					},
					async content(event, trigger, player) {
						if (event.triggername.endsWith("init")) await player.ny_loseNuQi(2);
						else await player.ny_cuihuiCards(player.getCards("h").randomGet());
					},
				},
				"云垂阵": {
					sub: true,
					sourceSkill: "_ny_zhuanShu_bazhen",
					charlotte: true,
					forced: true,
					priority: 1145,
					info: "令其回复1点体力，然后其本回合体力变化后，摸1张牌",
					good: true,
					marktext: "载",
					intro: {
						nocount: true,
						name: "云垂阵",
						content: "你本回合体力变化后，摸1张牌",
					},
					init2(player, skill) {
						player.addMark(skill);
						player.recover();
					},
					onremove: true,
					filter(event, player) {
						return player.hasMark(this.sourceSkill + "_" + this.intro.name);
					},
					trigger: {
						player: "changeHp",
					},
					async content(event, trigger, player) {
						await player.draw();
					},
				},
				"龙飞阵": {
					sub: true,
					sourceSkill: "_ny_zhuanShu_bazhen",
					charlotte: true,
					forced: true,
					priority: 1145,
					info: "令其摸2张牌，然后其本回合使用强化【杀】不计入限制次数",
					good: true,
					marktext: "龙",
					intro: {
						nocount: true,
						name: "龙飞阵",
						content: "你本回合使用强化【杀】不计入限制次数",
					},
					init2(player, skill) {
						player.addMark(skill);
						player.draw(2);
					},
					trigger: {
						player: "useCard1",
					},
					onremove: true,
					filter(event, player) {
						if (!event.card.name == "sha") return false;
						if (!event.card.storage?._useCardQianghua) return false;
						return player.hasMark(this.sourceSkill + "_" + this.intro.name);
					},
					async content(event, trigger, player) {
						trigger.addCount = false;
						if (player.stat[player.stat.length - 1].card.sha > 0) {
						    player.stat[player.stat.length - 1].card.sha--;
						}
						game.log(event.card, '不计入次数限制');
					},
				},
				"虎翼阵": {
					sub: true,
					sourceSkill: "_ny_zhuanShu_bazhen",
					charlotte: true,
					forced: true,
					priority: 1145,
					info: "令其摸2张牌，然后其本回合使用伤害牌造成伤害时，数值+1",
					good: true,
					marktext: "虎",
					intro: {
						nocount: true,
						name: "虎翼阵",
						content: "你本回合使用伤害牌造成伤害时，数值+1",
					},
					init2(player, skill) {
						player.addMark(skill);
						player.draw(2);
					},
					trigger: {
						source: "damageBegin1",
					},
					onremove: true,
					filter(event, player) {
						if (!event.card) return false;
						if (!get.tag(event.card, "damage")) return false;
						return player.hasMark(this.sourceSkill + "_" + this.intro.name);
					},
					async content(event, trigger, player) {
						trigger.num ++;
					},
				},
				"鸟翔阵": {
					sub: true,
					sourceSkill: "_ny_zhuanShu_bazhen",
					charlotte: true,
					forced: true,
					priority: 1145,
					info: "对其造成1点伤害，然后其本回合受到大于2点的伤害时，数值+1",
					marktext: "鸟",
					intro: {
						nocount: true,
						name: "鸟翔阵",
						content: "你本回合受到大于2点的伤害时，数值+1",
					},
					init2(player, skill) {
						player.addMark(skill);
						const source = _status.event.getParent()?.player;
						if (source) player.damage(source);
					},
					trigger: {
						player: "damageBegin1",
					},
					onremove: true,
					filter(event, player) {
						if (!event.num > 2) return false;
						return player.hasMark(this.sourceSkill + "_" + this.intro.name);
					},
					async content(event, trigger, player) {
						trigger.num ++;
					},
				},
				"蛇蟠阵": {
					sub: true,
					sourceSkill: "_ny_zhuanShu_bazhen",
					charlotte: true,
					forced: true,
					priority: 1145,
					info: "令其失去1点体力且其本回合失去体力时，数值+1",
					marktext: "蛇",
					intro: {
						nocount: true,
						name: "蛇蟠阵",
						content: "你本回合失去体力时，数值+1",
					},
					init2(player, skill) {
						player.addMark(skill);
						player.loseHp();
					},
					onremove: true,
					filter(event, player) {
						return player.hasMark(this.sourceSkill + "_" + this.intro.name);
					},
					trigger: {
						player: "loseHpBegin",
					},
					async content(event, trigger, player) {
						trigger.num ++;
					},
				},
			},
		}
		lib.skill._ny_zhuanShu_huangjin = {
			popup: false,
			priority: 1145,
			audio: "huangtian",
			trigger: {
				global: "damageBegin4",
			},
			filter(event, player) {
				if (!player.ny_filterStone("_ny_zhuanShu_huangjin")) return false;
				return event.num >= event.player.hp && player.countDiscardableCards("h") >= 2;
			},
			async cost(event, trigger, player) {
				let result = await player.chooseToDiscard(false, 2, "h", "chooseonly")
					.set("prompt", get.prompt(event.name.slice(0, -5)))
					.set("prompt2", get.prompt2(event.name.slice(0, -5)))
					.forResult();
				event.result = {
					bool: result.bool,
					cost_data: result.cards?.slice(),
				}
			},
			async content(event, trigger, player) {
				const cards = event.cost_data;
				await player.discard(cards);
				await player.ny_logStone("_ny_zhuanShu_huangjin");
				trigger.cancel();
				if (player !== trigger.player) await trigger.player.draw(2);
			},
		}
	});
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
		let str = "";
		for (let i of ["gongdiao", "shangdiao", "jiaodiao", "zhidiao", "yudiao"]) {
			str += `<br>〖${get.translation("nuyan" + i)}〗：${get.translation("nuyan" + i + "_info")}`;
		}
		str = str.slice(2);
		zhonghuiFunction.tipMap[0]["演奏调式"] = str;
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