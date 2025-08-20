import { lib, game, ui, get, ai, _status } from '../../../noname.js';
import { characters } from "../character/index.js";
import { card as nyCard } from "../card/nyCard.js";
export async function precontent(config, originalPack) {
	/*lib.skill._test = {
		trigger: {
			player: "damage",
		},
		forced: true,
		filter: function(event, player) {
			return true;
		},
		async content(event, trigger, player) {
			trigger.filterStop = () => {
				console.log(trigger);
				if (trigger.source && trigger.source.isDead()) {
					delete trigger.source;
				}
				var num = trigger.original_num;
				for (var i of trigger.change_history) {
					num += i;
				}
				if (num < 2) num = 2;
				if (num != trigger.num) {
					trigger.change_history.push(trigger.num - num);
				}
				console.log(trigger);
			}
		},
	}
	lib.skill._test2 = {
		trigger: {
			player: "useCard",
		},
		forced: true,
		marktext: get.translation("none"),
		content() {
			lib.skill._test2.marktext = get.translation(get.suit(trigger.card));
			player.markSkill("_test2")
		}
	}*/
	//game.me.tempBanSkill(game.me.getSkills(null, false, false), {global: "phaseEnd"}, false)
	
	if (!config.enable) {
		return;
	}
	/*
	if (config.debug) {
		window.__configCharactersBackup = lib.config.characters;
		lib.config.characters = ["jlsg_sk", "jlsg_sr", "jlsg_soul", "jlsg_sy"];
	}
	*/
	//自定义函数
	if (!zhonghuiFunction) var zhonghuiFunction = {
		//下列是抄的极略的
		showRepo(ext) {
			/*var mirrorURL = lib.extensionPack[ext] && lib.extensionPack[ext].mirrorURL;
			if (!mirrorURL) return;*/
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
		//下列是AI跑的
		randomList :function (list) {
			if (list.length == 1) return list;
			const result = [...list];
			for (let i = result.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[result[i], result[j]] = [result[j], result[i]];
			}
			return result;
		},
		randomTwoListAndChoose: function (list1,list2,num) {
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
			indices = zhonghuiFunction.randomList(indices);
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
		randomPile: function(Pile) {
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
		helpStr: function(html) {
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
				`<li>当前版本：魔改版1.0.7版本
				<br><b style="color: red">更新内容：</b>
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
		fushiStr: function(html, skill) {
			if (html.innerHTML[0] == "▶") html.innerHTML = "▼" + get.translation(skill) + '<br><b style="color: white;font-weight: normal">' + get.translation(skill + "_info") + "</b>";
			else html.innerHTML = "▶" + get.translation(skill);
		},
		get noprDescription () {
			if (!zhonghuiFunction.tipMap1) return;
			let tipMap = zhonghuiFunction.tipMap1;
			if (zhonghuiFunction.tipMap2) tipMap.addArray(zhonghuiFunction.tipMap2);
			if (zhonghuiFunction.tipMap3) tipMap.addArray(zhonghuiFunction.tipMap3);
			let result = {};
			for (let list of tipMap) {
				result[list[0]] = list[1];
			}
			return result;
		},
		poptipLink(name, explain, style, noprExplain) {
			if (!style) style = "color: unset";
			if (typeof game.addPoptip == "function") return get.poptipLink(name, explain, style);
			else {
				if (noprExplain) return `<b style="${style}">${name}</b>`;
				if (!explain) explain = zhonghuiFunction.noprDescription[name];
				return `<b style="${style}">${name}</b>：${explain}`;
			}
		},
	}
	lib.zhonghuiFunction = zhonghuiFunction;
	window.zhonghuiFunction = zhonghuiFunction;
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
	
	//全局技能
	lib.arenaReady.push(() => {
		//机制类技能
		//怒焰星级开局选石头
		lib.skill._ny_chooseStone = {
			trigger: {
				global: "gameStart",
				player: ["enterGame", "changeCharacterAfter"],
			},
			filter: function(event, player) {
				if (get.itemtype(player) != "player") return false;
				if (player.storage._hasNuYanStones) return false;
				if ((lib.config?.extension_怒焰武将_nuyan_star ?? 0) < 1) return false;
				if (lib.config.extension_钟会包_loseBuffLimit) return true;
				return get.nameList(player).some(name => name.startsWith("nuyan_"));
			},
			async content(event, trigger, player) {
				let list = ["天怒石", "天嗔石", "天焰石"],
					styleStr = {
						"天怒石": "color: red;",
						"天嗔石": "color: yellow;",
						"天焰石": "color: green;",
					},
					endStr = `</div><b style="font-weight: normal !important;background: inherit !important;">`;
				list = list.map(i => {
					return `<div class="text center"><img src=\"extension/怒焰武将/image/stone/${i}.jpg\" alt='${i}' title='${i}' width='30px' height='30px' style='border-radius:100%;'>${i}`
				});
				list = list.map(i => {
					let str = i.slice(-3);
					return i.slice(0, -3) + `${zhonghuiFunction.poptipLink(str, null, styleStr[str])}` + endStr;
				});
				let result = await player.chooseButton([1, 3], false)
					.set("createDialog", ["怒焰星级符石镶嵌",
						list[0],
						[[["clear1", "天怒石数量：</b>"],["tiannu1","一"],["tiannu2","二"],["tiannu3", "三"]],"tdnodes"],
						list[1],
						[[["clear2", "天嗔石数量：</b>"],["tianchen1","一"],["tianchen2","二"]],"tdnodes"],
						list[2],
						[[["clear3", "天焰石数量：</b>"],["tianyan1","一"]],"tdnodes"],
					])
					.set("filterButton", button => {
						const link = button.link;
						if (ui.selected.buttons?.length) {
							let num = 0,
								star = lib.config.extension_怒焰武将_nuyan_star,
								hasChosen = ["clear"];
							for (let i of ui.selected.buttons) {
								num += Number(i.link.slice(-1));
								hasChosen.push(i.link.slice(0, -1));
							}
							return link.slice(-1) <= (star - num) && hasChosen.every(i => !link.startsWith(i));
						}
						if (lib.config.extension_怒焰武将_nuyan_rule3 == "false") return link.startsWith("tianyan");
						if (lib.config.extension_怒焰武将_nuyan_rule3 == "onlyMe" && game.me != player) return link.startsWith("tianyan");
						return !link.startsWith("clear");
					})
					//后续钟会包增加无镶嵌限制
					.set("ai", button => {
						//逻辑混乱（
						let link = button.link,
							star = lib.config.extension_怒焰武将_nuyan_star - 1;
						if (link.startsWith("clear")) return -1;
						if (link.startsWith("tianyan")) return 9 + link.slice(-1);
						if (get.nameList(player)?.some(n => n == "nuyan_jie_caojie")) {
							if (link.startsWith("tiannu")) return link.slice(-1);
							return -1;
						}
						star = Math.floor(star / 2);
						if (link == "tianchen" + star) return 8;
						else if (link == "tainnu" + (star + 1)) return 6;
						else if (link == "tainnu" + star) return 5;
						return link.slice(-1);
					})
					.forResult();
				if (result.links?.length) {
					let addNuqi;
					for (let i of result.links) {
						let num = Number(i.slice(-1));
						if (i.startsWith("tiannu") && !player.storage._noInitNuQi) addNuqi = num;
						if (i.startsWith("tianchen")) await lib.skill._ny_getNuqi.gainNuQiMax(player, num);
						if (i.startsWith("tianyan")) {
							player.maxHp += num;
							player.hp += num;
							player.update();
						}
					}
					if (addNuqi) await lib.skill._ny_getNuqi.addNuQi(player, addNuqi);
					player.storage._hasNuYanStones = true;
				}
			},
			forced: true,
			popup: false,
			priority: 1145141919810,
		}
		//++摸牌阶段摸牌数
		lib.skill._ny_buff = {
			trigger: {
				player: "phaseDrawBegin",
			},
			filter: function(event, player) {
				if (lib.config.extension_怒焰武将_nuyan_rule3 == "false") return false;
				else if (lib.config.extension_怒焰武将_nuyan_rule3 == "onlyMe" && game.me != player) return false;
				//推销一下自己扩展
				if (lib.config.extension_钟会包_loseBuffLimit) return true;
				return get.nameList(player).some(name => name.startsWith("nuyan_"));
			},
			forced: true,
			popup: false,
			firstDo: true,
			content() {
				trigger.num++;
			},
			priority: 1145141919810,
		}
		//怒气
		lib.skill._ny_getNuqi = {
		    localMark: function (player,name) {
		        if (_status.video) return;
		        var info;
		        if (player.marks[name]) {
		            player.updateMarks();
		        }
		        if (lib.skill[name]) {
		            info = lib.skill[name].intro;
		        }
		        if (!info) {
		            return;
		        }
		        if (player.marks[name]) {
		            player.marks[name].info = info;
		        } else {
		            player.marks[name] = player.mark(name, info);
		        }
		        player.updateMarks();
		    },
		    marktext: "🔥",
			initNuQi: async function(player) {
				player.storage._ny_nuqi ??= 0;
				player.storage._ny_nuqiMax ??= 2;
				lib.skill._ny_getNuqi.localMark(player,"_ny_getNuqi");
				game.addVideo("markSkill", player, ["_ny_getNuqi"]);
			},
			addNuQi : async function(player,num) {
				if (typeof num == "number" && num <= 0) return;
				if (!num) num = 1;
				if ((!player.storage._ny_nuqi) && player.storage._ny_nuqi !== 0) return;
				if ((!player.storage._ny_nuqiMax) && player.storage._ny_nuqiMax !== 0) return;
				player.storage._ny_nuqi += num;
				if (player.storage._ny_nuqi >= player.storage._ny_nuqiMax) {
					let filterSkill = "nuyan_shouxi";
					const ownedSkills = player.getSkills(null, false, true).filter(skill => {
						return skill == filterSkill;
					});
					let b = ownedSkills.length !== 0 && !player.isTempBanned(filterSkill) && !(player.shixiaoedSkills && player.shixiaoedSkills.includes(filterSkill));
					while (b && player.storage._ny_nuqi >= player.storage._ny_nuqiMax) {
						await lib.skill.nuyan_shouxi.skillEffect(player);
					}
					if (player.storage._ny_fushiId && player.storage._ny_fushiId[2] == 9 && player.storage._ny_fushiTime[2] > 0 && player.storage._ny_nuqi > player.storage._ny_nuqiMax) {
						let num = player.storage._ny_nuqi - player.storage._ny_nuqiMax;
						if (player.storage._ny_fushiTime[2] >= num2) {
							player.storage._ny_fushiTime[2] -= num2;
							await player.draw(2 * num2);
						} else {
							player.storage._ny_fushiTime[2] = 0;
							await player.draw(2 * player.storage._ny_fushiTime[2]);
						}
					}
					if (!b) player.storage._ny_nuqi = player.storage._ny_nuqiMax;
				}
				//摸牌符石id8 袭扰
				let list = game.players.filter(i => i != player && i.storage._ny_fushiId && i.storage._ny_fushiId[2] == 8 && i.storage._ny_fushiTime[2] > 0);
				if (list.length) {
					for (let i of list) {
						i.storage._ny_fushiTime[2] --;
						await i.draw(num);
					}
				}
				//摸牌符石id5 诱敌
				if (player.storage._ny_fushiId && player.storage._ny_fushiId[2] == 5 && player.storage._ny_fushiTime[2] > 0) {
					if (player.storage._ny_fushiTime[2] >= num) {
						player.storage._ny_fushiTime[2] -= num;
						await player.draw(2 * num);
					} else {
						player.storage._ny_fushiTime[2] = 0;
						await player.draw(2 * player.storage._ny_fushiTime[2]);
					}
				}
			},
			loseNuQi : async function(player,num) {
				if (typeof num == "number" && num <= 0) return;
				if (!num) num = 1;
				if ((!player.storage._ny_nuqi) && player.storage._ny_nuqi !== 0) return;
				if ((!player.storage._ny_nuqiMax) && player.storage._ny_nuqiMax !== 0) return;
				if (player.storage._ny_nuqi < num) num = player.storage._ny_nuqi;
				player.storage._ny_nuqi -= num;
				//摸牌符石id10 虎啸
				let list = game.players.filter(i => i != player && i.storage._ny_fushiId && i.storage._ny_fushiId[2] == 10 && i.storage._ny_fushiTime[2] > 0);
				if (list.length) {
					for (let i of list) {
						i.storage._ny_fushiTime[2] --;
						await i.draw(num);
					}
				}
				//摸牌符石id5 诱敌
				if (player.storage._ny_fushiId && player.storage._ny_fushiId[2] == 5 && player.storage._ny_fushiTime[2] > 0) {
					if (player.storage._ny_fushiTime[2] >= num) {
						player.storage._ny_fushiTime[2] -= num;
						await player.draw(2 * num);
					} else {
						player.storage._ny_fushiTime[2] = 0;
						await player.draw(2 * player.storage._ny_fushiTime[2]);
					}
				}
				//怒气符石id9 振奋
				if (player.storage._ny_fushiId && player.storage._ny_fushiId[3] == 9 && player.storage._ny_nuqi <= 1 && player.storage._ny_fushiTime[3] > 0) {
					player.storage._ny_fushiTime[2] --;
					await lib.skill._ny_getNuqi.addNuQi(player,2);
				}
			},
			//怒气上限至多为6
			gainNuQiMax: async function(player, num) {
				if (typeof num == "number" && num <= 0) return;
				if (!num) num = 1;
				if (!player.storage._ny_nuqiMax) {
					player.storage._nu_nuqi = 0;
					player.storage._ny_nuqiMax = num;
					lib.skill._ny_getNuqi.localMark(player,"_ny_getNuqi");
					game.addVideo("markSkill", player, ["_ny_getNuqi"]);
				} else player.storage._ny_nuqiMax += num;
				player.storage._ny_nuqiMax = Math.min(player.storage._ny_nuqiMax, 6);
			},
			loseNuQiMax: async function(player, num) {
				if (typeof num == "number" && num <= 0) return;
				if (!num) num = 1;
				if ((!player.storage._ny_nuqi) && player.storage._ny_nuqi !== 0) return;
				if ((!player.storage._ny_nuqiMax) && player.storage._ny_nuqiMax !== 0) return;
				if (num >= player.storage._ny_nuqiMax) {
					delete player.storage._ny_nuqiMax;
					delete player.storage._ny_nuqi;
					player.unmarkSkill("_ny_getNuqi");
					player.updateMarks();
				} else {
					player.storage._ny_nuqiMax -= num;
					if (player.storage._ny_nuqi > player.storage._ny_nuqiMax) {
						num = player.storage._ny_nuqi - player.storage._ny_nuqiMax;
						await lib.skill._ny_getNuqi.loseNuQi(player, num);
					}
				}
			},
		    forced: true,
			popup:false,
			firstDo: true,
		    intro: {
		        name: zhonghuiFunction.poptipLink("怒气", null, null, true),
		        content: function (storage, player) {
		            return "当前怒气值：" + player.storage._ny_nuqi + "/" + player.storage._ny_nuqiMax;
		        },
		    },
		    trigger: {
		        player: ["enterGame", "changeCharacterAfter", "damageEnd"],
		        global: "gameStart",
		    },
		    filter: function (event, player, name) {
				if (get.itemtype(player) != "player") return false;
				let bool = typeof player.storage._ny_nuqiMax == "undefined";
				if (name == "damageEnd" && !bool) return (player.storage._ny_nuqi ?? 0) < (player.storage._ny_nuqiMax ?? 1);
				if (!bool) return false;
				if (lib.config.extension_怒焰武将_nuyan_rule2 == "false") return false;
				else if (lib.config.extension_怒焰武将_nuyan_rule2 == "onlyMe" && game.me != player) return false;
				//推销一下自己扩展
				if (lib.config.extension_钟会包_loseBuffLimit) return true;
				return get.nameList(player).some(name => name.startsWith("nuyan_"));
		    },
		    async content(event,trigger,player) {
		        if (trigger.name == "damage") {
					//受伤不获得怒气的标记写在此处
					if (player.hasMark('_ny_jinGong_tianfa')) return;
					if (player.hasMark("_ny_zhanFa_longzhenghudou")) return;
					await lib.skill._ny_getNuqi.addNuQi(player, trigger.num);
				} else {
					await lib.skill._ny_getNuqi.initNuQi(player);
				}
		    },
		    priority: 1145141919810,
		}
		
		//符石
		lib.skill._ny_getFuShi = {
			//player.storage._ny_fushiId = [进攻符石id，防御符石id，摸牌符石id，怒气符石id，战法id]
			//如没有则id为0
			//player.storage._ny_fushiTime = [];同上+专属次数
			//专属符石id为player.storage._ny_zhuanShuFuShiId，为数组形式，包含玩家所有已拥有的专属符石的技能名
			trigger: {
				player: ["enterGame", "changeCharacterAfter"],
			    global: "gameStart",
			},
			marktext: "🪨",
			intro: {
			    name: "符石(点击查看详细技能)",
			    mark(dialog, storage, player) {
					if (!player.storage._ny_fushiId) return;
			    	const addNewRow = lib.element.dialog.addNewRow.bind(dialog);
			    	if (get.is.phoneLayout()) dialog.classList.add("fullheight");
			    	dialog.css({ width: "20%" });
			    	let itemContainerCss = {
						height: "20px" ,
					};
					let str = [],
						timeStr = "",
						name;
					if (player.storage._ny_fushiId[4] && player.storage._ny_fushiId[4] > 0) {
						name = lib.skill._ny_getFuShi.obj["zhanFa"][(player.storage._ny_fushiId[4]-1)];
						name = zhonghuiFunction.poptipLink(get.translation(name), get.translation(name + "_info"), get.info("_ny_getFuShi").color["zhanFa"], true);
						str = [
							{ item: `战法名称`, ratio: .6, itemContainerCss },
							{ item: name, ratio: .8, itemContainerCss },
						];
						addNewRow(...str);
					}
					str = [
						{ item: "符石名称", ratio: .6, itemContainerCss },
						{ item: "剩余触发次数", ratio: .8, itemContainerCss },
					];
					addNewRow(...str);
					let hasData;
					let keys = Object.keys(lib.skill._ny_getFuShi.obj);
			    	for (let i = 0; i < 4; i++) {
						if (player.storage._ny_fushiId[i] && player.storage._ny_fushiId[i] > 0) {
							timeStr = String(player.storage._ny_fushiTime[i]);
							if (timeStr == "Infinity") timeStr = "无限";
							name = lib.skill._ny_getFuShi.obj[keys[i]][(player.storage._ny_fushiId[i]-1)];
							name = zhonghuiFunction.poptipLink(get.translation(name), get.translation(name + "_info"), get.info("_ny_getFuShi").color[keys[i]], true);
							str = [
								{ item: name, ratio: .6, itemContainerCss },
								{ item: timeStr, ratio: .8, itemContainerCss },
							];
							addNewRow(...str);
							hasData = true;
						}
					}
					if (player.storage._ny_zhuanShuFuShiId) {
						for (let i in player.storage._ny_zhuanShuFuShiId) {
							timeStr = String(player.storage._ny_fushiTime[Number(i)+4]);
							if (timeStr == "Infinity") timeStr = "无限";
							name = player.storage._ny_zhuanShuFuShiId[i];
							name = zhonghuiFunction.poptipLink(get.translation(name), get.translation(name + "_info"), get.info("_ny_getFuShi").color["zhuanShu"], true);
							str = [
								{ item: name, ratio: .6, itemContainerCss },
								{ item: timeStr, ratio: .8, itemContainerCss },
							];
							addNewRow(...str);
						}
						hasData = true;
					}
					if (!hasData) {
						str = [
							{ item: "暂无", ratio: .6, itemContainerCss },
							{ item: "暂无", ratio: .8, itemContainerCss },
						];
						addNewRow(...str);
					}
				},
			},
			forced: true,
			popup:false,
			color: {
				"jinGong": `color:#FF4500`,
				"fangYu": `color:#1E90FF`,
				"moPai": `color:#9370DB`,
				"nuQi": `color:#FF8C00`,
				"zhanFa": `color:#2E8B57`,
				"zhuanShu": `color:#FF00FF`,
			},
			obj: {
				"jinGong":["_ny_jinGong_duopo","_ny_jinGong_jinghong","_ny_jinGong_zhenshe","_ny_jinGong_yuwei","_ny_jinGong_fulian","_ny_jinGong_youlong","_ny_jinGong_gongjian","_ny_jinGong_shenmou","_ny_jinGong_lingjian","_ny_jinGong_qianggong","_ny_jinGong_tianfa","_ny_jinGong_fenyong"],
				"fangYu":["_ny_fangYu_yuanbing","_ny_fangYu_dunzhen","_ny_fangYu_xiongbing","_ny_fangYu_lingzhen","_ny_fangYu_Firstlingzhen","_ny_fangYu_yingyong","_ny_fangYu_shenyou","_ny_fangYu_miaosuan","_ny_fangYu_Firstmiaosuan","_ny_fangYu_qingling","_ny_fangYu_sishou","_ny_fangYu_tiejia","_ny_fangYu_jianren"],
				"moPai":["_ny_moPai_shengji","_ny_moPai_cangfeng","_ny_moPai_junzhen","_ny_moPai_zhangu","_ny_moPai_youdi","_ny_moPai_xuncha","_ny_moPai_wuku","_ny_moPai_xirao","_ny_moPai_baoneng","_ny_moPai_huxiao","_ny_moPai_yuling","_ny_moPai_qingshen"],
				"nuQi":["_ny_nuQi_xingchi","_ny_nuQi_qimou","_ny_nuQi_shayi","_ny_nuQi_fenfa","_ny_nuQi_wuling","_ny_nuQi_tongchou","_ny_nuQi_Firsttongchou","_ny_nuQi_guimou","_ny_nuQi_zhenfen","_ny_nuQi_aibing","_ny_nuQi_jingbing","_ny_nuQi_lingyuan","_ny_nuQi_gujun"],
				"zhanFa":["_ny_zhanFa_lvedigongcheng","_ny_zhanFa_xushidaifa","_ny_zhanFa_anzhongtuxi","_ny_zhanFa_Firstpozhencuijian","_ny_zhanFa_feiyangbahu","_ny_zhanFa_leitingnuhou","_ny_zhanFa_gexuqipao","_ny_zhanFa_dandadudou","_ny_zhanFa_cuichengbazhai","_ny_zhanFa_longzhenghudou","_ny_zhanFa_yanxingjunfa","_ny_zhanFa_libingmoma","_ny_zhanFa_yetandiying","_ny_zhanFa_bixujishi","_ny_zhanFa_bainiaochaofeng","_ny_zhanFa_yihuajiemu","_ny_zhanFa_zhengzhengrishang","_ny_zhanFa_Firsttongqiangtiebi","_ny_zhanFa_sheguoyouzui","_ny_zhanFa_yixinghuandou","_ny_zhanFa_shehunduopo","_ny_zhanFa_jiuhanzhanyong","_ny_zhanFa_gubenguiyuan","_ny_zhanFa_pozhencuijian","_ny_zhanFa_zhulianbihe"],
			},
			filter: function (event, player) {
				if (get.itemtype(player) != "player") return false;
				if (typeof player.storage._ny_fushiId !== "undefined") return false;
				if (lib.config.extension_怒焰武将_nuyan_rule1 == "false") return false;
				else if (lib.config.extension_怒焰武将_nuyan_rule1 == "onlyMe" && game.me != player) return false;
				//推销一下自己扩展
				if (lib.config.extension_钟会包_loseBuffLimit) return true;
				return get.nameList(player).some(name => name.startsWith("nuyan_"));
			},
			async content(event,trigger,player) {
				player.storage._ny_fushiId ??= [];
				if (lib.config.extension_怒焰武将_InfinityFuShi == "global" || (lib.config.extension_怒焰武将_InfinityFuShi == "onlyMe" && game.me == player)) player.storage._ny_fushiTime ??= [Infinity, Infinity, Infinity, Infinity];
				else player.storage._ny_fushiTime ??= [6,6,6,6];
				for (let k in lib.skill._ny_getFuShi.obj) {
					let list = lib.skill._ny_getFuShi.obj[k],
						lists = [];
					list.forEach(i => {
					    if (lib.translate[i + "_info"]) {
					        var translation = get.translation(i);
					        var litm = ('〖' + translation + "〗<div>" + lib.translate[i + "_info"] + "</div>");
					        lists.push(litm);
					    }
					})
					let str = `<b style="${get.info("_ny_getFuShi").color[k]}">${get.translation(k)}</b>`;
					let next = await player.chooseButton(["请选择一项"+ str +"符石获得", [lists.map((item, i) => { return [i, item]; }), "textbutton"]])
						.set("selectButton", 1)
						.set("ai", button => Math.floor(Math.random() * 114514))
						.forResultLinks();
					if (next) {
						var res = Number(next) + 1;
					} else {
						var res = 0;
					}
					player.storage._ny_fushiId.push(res);
				}
				if (player.storage._ny_fushiId.some(num => num > 0)) {
					lib.skill._ny_getNuqi.localMark(player,"_ny_getFuShi");
					game.addVideo("markSkill", player, ["_ny_getFuShi"]);
				}
			},
			priority: 1919810,
		}
		lib.skill._ny_getZhuanShuFuShi = {
			trigger:{
				global:"gameStart",
				player: ["enterGame", "changeCharacterAfter"],
			},
			forced: true,
			popup:false,
			/*专属符石由于fushiTime的传递问题，设置了每个时机各有一个id
			其实这是个💩山，我会改，但我意识到的时候已经十几个专属符石了，懒得改了，后续（
			id汇总
			初版青龙石dying id1
			青龙石dying id2
			彼岸花judge id1
			无双战戟phaseDraw id1
			银月枪 失去牌id1
			初版风华扇 damage id1
			风华扇 changeHp id1
			燎原•神 useCardToPlayered id1
			初版赤血•神 damage id114
			赤血•神 damage changeHp id113
			永安 phaseChange id1
			破虏 useCardToPlayered id2
			坚壁 phaseEnd id1
			古锭刀•神 useCard id1
			初版古锭刀•神 useCard id2
			追思 phaseBegin id1
			落英 dying id3
			从凤栖琴开始，再也不用这种狗屎写法了
			*/
			obj:{
				//属性一定要加数组，这个不是trigger，没写非数组适配
				"nuyan_caorui":["_ny_zhuanShu_Firstqinglongshi","_ny_zhuanShu_qinglongshi"],
				"nuyan_xizhicai":["_ny_zhuanShu_bianhua"],
				"nuyan_lvlingqi":["_ny_zhuanShu_wushaungzhanji"],
				"nuyan_zhaoxiang":["_ny_zhuanShu_Firstyinyueqiang"],
				"nuyan_First_luotong":["_ny_zhuanShu_wanminshu"],
				"nuyan_First_mifuren":["_ny_zhuanShu_Firstfenghuashan","_ny_zhuanShu_fenghuashan"],
				"nuyan_shenFirst_huangzhong":["_ny_zhuanShu_liaoyuan","_ny_zhuanShu_Firstchixue","_ny_zhuanShu_chixue"],
				"nuyan_wuxian":["_ny_zhuanShu_yongan"],
				"nuyan_wei_wenyang":["_ny_zhuanShu_polu"],
				"nuyan_zhuran": ["_ny_zhuanShu_jianbi"],
				"nuyan_shenFirst_sunjian":["_ny_zhuanShu_Firstgudingdao","_ny_zhuanShu_gudingdao"],
				"nuyan_liru": ["_ny_zhuanShu_dujiu"],
				"nuyan_caomao": ["_ny_zhuanShu_longyuan"],
				"nuyan_First_yanghuiyu": ["_ny_zhuanShu_zhuisi"],
				"nuyan_zhugejin": ["_ny_zhuanShu_kongqueling"],
				"nuyan_First_wangyuanji": ["_ny_zhuanShu_luoying"],
				"nuyan_zuoci": ["_ny_zhuanShu_shendaoling"],
				"nuyan_caizhenji": ["_ny_zhuanShu_fengqiqin"],
				"nuyan_huan_caiwenji": ["_ny_zhuanShu_keqingdi"],
			},
			filter: function (event, player) {
				if (get.itemtype(player) != "player") return false;
				if (!player.storage._ny_fushiId) return false;
				return get.nameList(player).some(name => (name in get.info("_ny_getZhuanShuFuShi").obj) && !(name in player.getStorage("_hasNuyanZhuanshuFushiChoosed")));
			},
			async content(event,trigger,player) {
				for (let name of get.nameList(player)) {
					if (name in player.getStorage("_hasNuyanZhuanshuFushiChoosed")) continue;
					let list = lib.skill._ny_getZhuanShuFuShi.obj[name],
						lists = [];
					list.forEach(i => {
					    if (lib.translate[i + "_info"]) {
					        var translation = get.translation(i);
					        var litm = ('〖' + translation + "〗<div>" + lib.translate[i + "_info"] + "</div>");
					        lists.push(litm);
					    }
					})
					let next = await player.chooseButton([`请选择一项${get.translation(name)}的<b style="${get.info("_ny_getFuShi").color["zhuanShu"]}">专属</b>符石获得`, [lists.map((item, i) => { return [i, item]; }), "textbutton"]])
						.set("selectButton", [1, Infinity])
						.set("ai", button => 114514)
						.forResultLinks();
					if (next) {
						player.storage._ny_zhuanShuFuShiId ??= [];
						for (let i in next.sort()) {
							player.storage._ny_zhuanShuFuShiId.push(lib.skill._ny_getZhuanShuFuShi.obj[name][i]);
							if (lib.config.extension_怒焰武将_InfinityFuShi == "global" || (lib.config.extension_怒焰武将_InfinityFuShi == "onlyMe" && game.me == player)) player.storage._ny_fushiTime.push(Infinity);
							else player.storage._ny_fushiTime.push(6);
						}
						//如果仅有专属符石，刷新出符石标记界面
						if (!player.storage._ny_fushiId.some(num => num > 0)) {
							lib.skill._ny_getNuqi.localMark(player,"_ny_getFuShi");
							game.addVideo("markSkill", player, ["_ny_getFuShi"]);
						}
					}
				}
				player.markAuto("_hasNuyanZhuanshuFushiChoosed", get.nameList(player));
			},
			priority: 191981,
		}
		//使用牌效果增加
		lib.skill._useCardBaseChange = {
			//后续同步本体PR
			huogongContent: function () {
				"step 0";
				if (target.countCards("h") == 0) {
					event.finish();
					return;
				} else if (target.countCards("h") == 1) event._result = { cards: target.getCards("h") };
				else
					target.chooseCard(true).ai = function (card) {
						if (_status.event.getRand() < 0.5) return Math.random();
						return get.value(card);
					};
				"step 1";
				target.showCards(result.cards).setContent(function () {});
				event.dialog = ui.create.dialog(get.translation(target) + "展示的手牌", result.cards);
				event.videoId = lib.status.videoId++;
				
				game.broadcast("createDialog", event.videoId, get.translation(target) + "展示的手牌", result.cards);
				game.addVideo("cardDialog", null, [get.translation(target) + "展示的手牌", get.cardsInfo(result.cards), event.videoId]);
				event.card2 = result.cards[0];
				game.log(target, "展示了", event.card2);
				game.addCardKnower(result.cards, "everyone");
				event._result = {};
				player
					.chooseToDiscard({ suit: get.suit(event.card2) }, function (card) {
						var evt = _status.event.getParent();
						if (get.damageEffect(evt.target, evt.player, evt.player, "fire") > 0) {
							return 6.2 + Math.min(4, evt.player.hp) - get.value(card, evt.player);
						}
						return -1;
					})
					.set("prompt", false);
				game.delay(2);
				"step 2";
				if (result.bool) {
					let num = 1;
					if (card.storage._useCardQianghua && card.storage._useCardQianghua == true) num ++;
					if (card.storage._useCardBaseChange && card.storage._useCardBaseChange > 0) num += card.storage._useCardBaseChange;
					target.damage(num,"fire");
				} else {
					target.addTempSkill("huogong2");
				}
				event.dialog.close();
				game.addVideo("cardDialog", null, event.videoId);
				game.broadcast("closeDialog", event.videoId);
			},
			juedouContent: function () {
				"step 0";
				if (event.turn == undefined) event.turn = target;
				if (typeof event.baseDamage != "number") event.baseDamage = 1;
				if (typeof event.extraDamage != "number") {
					event.extraDamage = 0;
				}
				if (!event.shaReq) event.shaReq = {};
				if (typeof event.shaReq[player.playerid] != "number") event.shaReq[player.playerid] = 1;
				if (typeof event.shaReq[target.playerid] != "number") event.shaReq[target.playerid] = 1;
				event.playerCards = [];
				event.targetCards = [];
				"step 1";
				event.trigger("juedou");
				event.shaRequired = event.shaReq[event.turn.playerid];
				"step 2";
				if (event.directHit) {
					event._result = { bool: false };
				} else {
					var next = event.turn.chooseToRespond({ name: "sha" });
					if (event.shaRequired > 1) next.set("prompt2", "共需打出" + event.shaRequired + "张杀");
					next.set("ai", function (card) {
						let event = _status.event,
							player = event.splayer,
							target = event.starget;
						if (player.hasSkillTag("notricksource") || target.hasSkillTag("notrick")) return 0;
						if (event.shaRequired > 1 && player.countCards("h", "sha") < event.shaRequired) return 0;
						if (event.player === target) {
							if (_status.event.tdamage >= 0 || player.hasSkill("naman")) return -1;
							if (get.attitude(target, player) <= 0 || (event.player.hp <= 1 && _status.event.tdamage < _status.event.pdamage)) {
								return get.order(card);
							}
							return -1;
						} else {
							if (_status.event.pdamage >= 0 || target.hasSkill("naman")) return -1;
							if (get.attitude(player, target) <= 0 || (event.player.hp <= 1 && _status.event.tdamage > _status.event.pdamage)) {
								return get.order(card);
							}
							return -1;
						}
					});
					next.set("splayer", player);
					next.set("starget", target);
					next.set("pdamage", get.damageEffect(player, target, event.turn));
					next.set("tdamage", get.damageEffect(target, player, event.turn));
					next.set("shaRequired", event.shaRequired);
					next.autochoose = lib.filter.autoRespondSha;
					if (event.turn == target) {
						next.source = player;
					} else {
						next.source = target;
					}
				}
				"step 3";
				if (result.bool) {
					event.shaRequired--;
					if (event.turn == target) {
						if (result.cards) event.targetCards.addArray(result.cards);
						if (event.shaRequired > 0) event.goto(2);
						else {
							event.turn = player;
							event.goto(1);
						}
					} else {
						if (result.cards) event.playerCards.addArray(result.cards);
						if (event.shaRequired > 0) event.goto(2);
						else {
							event.turn = target;
							event.goto(1);
						}
					}
				} else {
					if (event.turn == target) {
						let num = 1;
						if (card.storage._useCardQianghua && card.storage._useCardQianghua == true) num ++;
						if (card.storage._useCardBaseChange && card.storage._useCardBaseChange > 0) num += card.storage._useCardBaseChange;
						target.damage(num);
					} else {
						let num = 1;
						if (card.storage._useCardQianghua && card.storage._useCardQianghua == true) num ++;
						if (card.storage._useCardBaseChange && card.storage._useCardBaseChange > 0) num += card.storage._useCardBaseChange;
						player.damage(num,target);
					}
				}
				event._result = {};
			},
			nanmanContent: function () {
				"step 0";
				if (typeof event.shaRequired != "number" || !event.shaRequired || event.shaRequired < 0) event.shaRequired = 1;
				if (card.storage._useCardBaseChange && card.storage._useCardBaseChange > 0) event.shaRequired += card.storage._useCardBaseChange; 
				if (typeof event.baseDamage != "number") event.baseDamage = 1;
				if (card.storage._useCardQianghua && card.storage._useCardQianghua == true) event.baseDamage ++;
				if (card.storage._useCardBaseChange && card.storage._useCardBaseChange > 0) event.baseDamage += card.storage._useCardBaseChange;
				"step 1";
				if (event.directHit) event._result = { bool: false };
				else {
					var next = target.chooseToRespond({ name: "sha" });
					if (event.shaRequired > 1) {
						next.set("prompt2", "共需打出" + event.shaRequired + "张杀");
					}
					next.set("ai", function (card) {
						var evt = _status.event.getParent();
						if (get.damageEffect(evt.target, evt.player, evt.target) >= 0) return 0;
						if (evt.player.hasSkillTag("notricksource")) return 0;
						if (evt.target.hasSkillTag("notrick")) return 0;
						return get.order(card);
					});
					next.set("respondTo", [player, card]);
					next.autochoose = lib.filter.autoRespondSha;
				}
				"step 2";
				if (result.bool == false) {
					target.damage(event.baseDamage);
				} else {
					event.shaRequired--;
					if (event.shaRequired > 0) event.goto(1);
				}
			},
			wanjianContent: function () {
				"step 0";
				if (typeof event.shaRequired != "number" || !event.shaRequired || event.shaRequired < 0) event.shaRequired = 1;
				if (card.storage._useCardBaseChange && card.storage._useCardBaseChange > 0) event.shaRequired += card.storage._useCardBaseChange; 
				if (typeof event.baseDamage != "number") event.baseDamage = 1;
				if (card.storage._useCardQianghua && card.storage._useCardQianghua == true) event.baseDamage ++;
				if (card.storage._useCardBaseChange && card.storage._useCardBaseChange > 0) event.baseDamage += card.storage._useCardBaseChange;
				"step 1";
				if (event.directHit) event._result = { bool: false };
				else {
					var next = target.chooseToRespond({ name: "shan" });
					if (event.shanRequired > 1) {
						next.set("prompt2", "共需打出" + event.shanRequired + "张闪");
					}
					next.set("ai", function (card) {
						var evt = _status.event.getParent();
						if (get.damageEffect(evt.target, evt.player, evt.target) >= 0) return 0;
						if (evt.player.hasSkillTag("notricksource")) return 0;
						if (evt.target.hasSkillTag("notrick")) return 0;
						if (evt.target.hasSkillTag("noShan")) {
							return -1;
						}
						return get.order(card);
					});
					next.set("respondTo", [player, card]);
					next.autochoose = lib.filter.autoRespondShan;
				}
				"step 2";
				if (result.bool == false) {
					target.damage(event.baseDamage);
				} else {
					event.shanRequired--;
					if (event.shanRequired > 0) event.goto(1);
				}
			},
			guoheContent: function () {
				"step 0";
				if (get.is.single()) {
					let bool1 = target.countDiscardableCards(player, "h"),
						bool2 = target.countDiscardableCards(player, "e");
					if (bool1 && bool2)
						player
							.chooseControl("手牌区", "装备区")
							.set("ai", function () {
								return Math.random() < 0.5 ? 1 : 0;
							})
							.set("prompt", "弃置" + get.translation(target) + "装备区的一张牌，或观看其手牌并弃置其中的两张牌。");
					else event._result = { control: bool1 ? "手牌区" : "装备区" };
				} else event._result = { control: "所有区域" };
				"step 1";
				let pos,
					vis = "visible";
				if (result.control == "手牌区") pos = "h";
				else if (result.control == "装备区") pos = "e";
				else {
					pos = "hej";
					vis = undefined;
				}
				if (target.countDiscardableCards(player, pos)) {
					let num = 1;
					if (card.storage._useCardQianghua && card.storage._useCardQianghua == true) num ++;
					if (card.storage._useCardBaseChange && card.storage._useCardBaseChange > 0) num += card.storage._useCardBaseChange;
					player.discardPlayerCard(pos, target, num, true, vis).set("target", target).set("complexSelect", false).set("ai", lib.card.guohe.ai.button);
				}
			},
			shunshouContent: function () {
				let pos = get.is.single() ? "he" : "hej";
				let num = 1;
				if (card.storage._useCardQianghua && card.storage._useCardQianghua == true) num ++;
				if (card.storage._useCardBaseChange && card.storage._useCardBaseChange > 0) num += card.storage._useCardBaseChange;
				if (target.countGainableCards(player, pos)) player.gainPlayerCard(pos, target, num, true).set("target", target).set("complexSelect", false).set("ai", lib.card.shunshou.ai.button);
			},
			wuzhongContent: function () {
				let num = 2;
				if (card.storage._useCardQianghua && card.storage._useCardQianghua == true) num ++;
				if (card.storage._useCardBaseChange && card.storage._useCardBaseChange > 0) num += card.storage._useCardBaseChange;
				target.draw(num);
			},
			taoyuanContent: async function (event, trigger, player) {
				let num = 1;
				if (card.storage._useCardBaseChange && card.storage._useCardBaseChange > 0) num += card.storage._useCardBaseChange;
				if (card.storage._useCardQianghua && card.storage._useCardQianghua == true) {
					target.recover(num);
					await lib.skill._ny_getNuqi.addNuQi(target,num);
				} else target.recover(num);
				
			},
			jlsgqs_meiContent: function() {
				"step 0";
				if (card.storage._useCardBaseChange && card.storage._useCardBaseChange > 0) event.num = card.storage._useCardBaseChange;
				else event.num = 0;
				if (target.hp > 1) target.draw(2+event.num);
				else {
				    target.recover(1+event.num);
				}
				"step 1";
				if (target.hp > 0 && event.getParent(2).type == "dying") target.draw(1+event.num);
			},
			cardList: ["huogong","juedou","nanman","wanjian","guohe","shunshou","wuzhong","taoyuan","jlsgqs_mei"],
			trigger: {
				//感谢狗哥
				get player() {
					return lib.skill._useCardBaseChange.cardList.map(t => `${t}Begin`);
				},
			},
			forced: true,
			popup: false,
			filter:function(event,player){
				let card = event.card;
				if ((!card.storage._useCardQianghua || !card.storage._useCardQianghua == true) && (!card.storage._useCardBaseChange || !card.storage._useCardBaseChange > 0)) return false;
				for (let i of lib.skill._useCardBaseChange.cardList) {
					if (i == card.name) return true;
				}
				return false;
			},
			content: function () {
			    trigger.setContent(lib.skill._useCardBaseChange[trigger.name+"Content"]);
			},
			priority: 1145141919810,
		}
		//强化牌
		lib.skill._useCardQianghua = {
		    trigger: {player:"useCard0"},
			//后续铁索增加效果，后续闪电
			list: ["sha", "shan", "tao", "jiu", "huogong", "juedou", "nanman", "wanjian", "guohe", "shunshou", "wuzhong", "taoyuan", "wuxie", "lebu", "tiesuo", "wugu"],
			popup:false,
		    filter: function (event,player) {
				if (lib.config.extension_怒焰武将_nuyan_rule4 == "false") return false;
				else if (lib.config.extension_怒焰武将_nuyan_rule4 == "onlyMe" && game.me != player) return false;
				if (!event.card) return false;
				if (event.card.storage._useCardQianghua != undefined) return false;
		        if (get.type(event.card) == "equip") return false;
		        if ((player.storage._ny_nuqi ?? 0) < 1) return false;
				for (let i of get.info("_useCardQianghua").list) {
					if (i == event.card.name && i !== "wugu") return true;
				}
		        return false;
		    },
		    async content(event,trigger,player) {
		        await lib.skill._ny_getNuqi.loseNuQi(player,1);
		        trigger.card.storage._useCardQianghua = true;
		    },
			check(event, player) {
				return get.value(event.card) - 5;
			},
			priority: 1145141919810,
			subSkill:{
				basic: {//基本效果
					trigger: {
					    player: "useCard1",
					},
				    forced: true,
				    popup: false,
				    filter: function (event, player) {
						var card = event.card;
						if (!card.storage._useCardQianghua == true) return false;
				        return get.type2(card, false) === "basic";
				    },
				    async content(event, trigger, player) {
				        trigger.baseDamage++;
						if (trigger.card.name === 'shan') await player.draw();
				    },
				    priority: 114,
				},
				draw: {//无懈
					trigger:{
						player: "useCard1",
					},
					filter: function (event, player) {
						var card = event.card;
						if (!card.storage._useCardQianghua == true) return false;
						return card.name === 'wuxie';
					},
					forced: true,
					popup: false,
					content: function () {
						let card = trigger.card;
						player.when({ global: 'eventNeutralized' })
							.then(() => {
								if (game.hasGlobalHistory('everything', evt => {
									if (evt._neutralized || evt.responded && (!evt.result || !evt.result.bool)) {
										if (evt.getParent().card == trigger.card) return true;
									}
									return false;
								})) {
									var cards = trigger.cards.filterInD('od');
									if (cards) player.gain(cards, 'gain2');
								}
							});
					},
					priority: 114,
				},
				tiesuo:{//铁索
					trigger:{
						player: "useCard2",
					},
					filter: function (event, player) {
						//if (!player.getStorage('_useCardQianghua').includes(card)) return false;
						if (!event.card.storage._useCardQianghua == true) return false;
						if (event.card.name != "tiesuo") return false;
						var info = get.info(event.card);
						if (info.allowMultiple == false) return false;
						if (event.targets && !info.multitarget) {
							if (
								game.hasPlayer(current => {
									return !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, player, current);
								})
							)
								return true;
						}
						return false;
					},
					forced: true,
					popup: false,
					content: function () {
						"step 0";
						player
							.chooseTarget( "为" + get.translation(trigger.card) + "额外指定一个目标", (card, player, target) => {
								return !_status.event.sourcex.includes(target) && lib.filter.targetEnabled2(_status.event.card, player, target);
							})
							.set("sourcex", trigger.targets)
							.set("ai", function (target) {
								var player = _status.event.player;
								return get.effect(target, _status.event.card, player, player);
							})
							.set("card", trigger.card);
						"step 1";
						if (result.bool) {
							if (!event.isMine() && !event.isOnline()) game.delayex();
						} else event.finish();
						"step 2";
						if (result.bool) {
							var targets = result.targets;
							trigger.targets.addArray(targets);
							game.log(targets, "也成为了", trigger.card, "的目标");
						}
					},
					sub: true,
					sourceSkill: "_useCardQianghua",
					priority: 1,
				},
				lebu_effect:{//乐不思蜀
					trigger:{
						global:"judgeEnd",
					},
					filter: function (event, player) {
						if (!event.player) return false;
						if (event.player != player) return false;
						const symbols = Object.getOwnPropertySymbols(_status.event?.getParent()?.card ?? {});
					    return _status.event?.getParent()?.card?.name == "lebu" && _status.event?.getParent()?.card?.[symbols?.[0]]?.storage?._useCardQianghua == true && !event.result.bool;
					},
					forced: true,
					popup: false,
					content: function() {
						trigger.player.skip("phaseDraw");
					},
				},
			},
		};
		//摧毁牌
		lib.skill._ny_cuihui = {
			forced:true,
			popup:false,
			cuihuiCards: async function(player, cards) {
				if (get.itemtype(cards) == "card") {
					cards = [cards];
				}
				let func = [];
				for (let i of player.getSkills(null, false, false)) {
					if (lib.skill[i]?.unCuihuiAble) {
						func.add(lib.skill[i].unCuihuiAble);
					}
				}
				if (func.length) {
					for (let f of func) {
						//f内部return false代表不能被摧毁
						cards = cards.filter(card => f(card));
					}
				}
				await player.addGaintag(cards, "_ny_cuihui");
			},
			mod: {
			    cardEnabled2(card) {
			        if (get.itemtype(card) == "card" && card.hasGaintag("_ny_cuihui")) return false;
			    },
			},
			trigger:{
				player: "chooseToCompareBefore",
				target: "chooseToCompareBefore",
			},
			filter: function(event, player) {
				let cards = player.getCards('h');
				return cards.some(i => i.hasGaintag("_ny_cuihui"));
			},
			content:function(){
				let cards = player.getCards('h');
				if (!cards.some(i => !i.hasGaintag(event.name))) trigger.cancel();
				else trigger.filterCard = function(card) {
					return !card.hasGaintag(event.name);
				};
			},
			priority: 1145141919810,
			//game.me.addGaintag(game.me.getCards("h"),"_ny_cuihui")
			//game.me.getCards("h").gaintag.remove('_ny_cuihui')
		}
		//防御符石无效
		lib.skill._ny_noneFangYuFushi = {
			marktext:"封",
			intro: {
				nocount:true,
				name:"你的防御符石失效",
			    content: "",
			},
		}
		//隐匿
		lib.skill._ny_yinni = {
			marktext:"隐",
			intro: {
				nocount:true,
				name: "隐匿",
			    content: "隐匿状态下，当你翻面时，你翻至正面且你无法成为其他角色使用【杀】或单体普通锦囊牌的目标<br>当你造成/受到伤害时，你令此伤害翻面/防止之并解除隐匿状态",
			},
			init(player) {
				player.addMark("_ny_yinni");
				player.turnOver(false);
			},
			forced: true,
			popup: false,
			mod: {
			    targetEnabled: function(card, player, target, now) {
			        if (target.hasMark("_ny_yinni") && target != player) {
			            if (card.name == 'sha') return false;
						let info = get.info(card);
						if (info?.type == "trick" && info?.selectTarget && info?.selectTarget == 1) return false;
			        }
			    },
			},
			trigger: {
				player: ["turnOverBegin", "damageBegin4"],
				source: "damageBegin1",
			},
			filter: function(event, player, triggername) {
				if (triggername !== "damageBegin1") return player.hasMark("_ny_yinni");
				else return event.source.hasMark("_ny_yinni");
			},
			async content(event, trigger, player) {
				if (event.triggername == "turnOverBegin") {
					await player.turnOver(false);
					return;
				}
				else if (event.triggername == "damageBegin4") trigger.cancel();
				else trigger.num *= 2;
				player.clearMark("_ny_yinni");
				player.unmarkSkill("_ny_yinni");
				player.updateMarks();
			},
		}
		//演奏调式
		lib.skill._ny_yanzoudiaoshi = {
			marktext: "调",
			nameFunc: (player) => get.translation("_ny_yanzoudiaoshi_" + player.storage._ny_yanzoudiaoshi),
			intro: {
				content: (storage, player) => "当前演奏调式：" + `<br>〖${get.translation("_ny_yanzoudiaoshi_" + player.storage._ny_yanzoudiaoshi)}〗：<br>${get.translation("_ny_yanzoudiaoshi_" + player.storage._ny_yanzoudiaoshi + "_info")}`,
			},
			list: ["gongdiao", "shangdiao", "jiaodiao", "zhidiao", "yudiao"],
			init: async function(player) {
				let list = this.list;
				let choices = list.map(i => get.translation("_ny_yanzoudiaoshi_" + i));
				let choiceList = list.map(i => `〖${get.translation("_ny_yanzoudiaoshi_" + i)}〗：<div>${get.translation("_ny_yanzoudiaoshi_" + i + "_info")}</div>`);
				let str = player.storage._ny_yanzoudiaoshi ? "<br>当前演奏调式：" + `〖${get.translation("_ny_yanzoudiaoshi_" + player.storage._ny_yanzoudiaoshi)}〗：${get.translation("_ny_yanzoudiaoshi_" + player.storage._ny_yanzoudiaoshi + "_info")}` : "";
				let result = await player.chooseControl()
					.set("prompt", "请选择一个演奏调式获得之(覆盖当前演奏调式)" + str)
					.set("controls", choices)
					.set("choiceList", choiceList)
					.set("ai", () => {
						const { controls } = get.event();
						return controls[Math.floor(Math.random() * controls.length)];
					})
					.forResult();
				result = list[choices.indexOf(result.control)];
				player.storage._ny_yanzoudiaoshi = result;
				game.broadcastAll((skill, func) => {
					skill.intro.name = func;
				}, this, this.nameFunc(player));
				player.markSkill("_ny_yanzoudiaoshi", this.intro);
				player.updateMarks();
			},
			subSkill: {
				gongdiao: {
					sub: true,
					sourceSkill: "_ny_yanzoudiaoshi",
					direct: true,
					trigger: {
						player: "useCard",
					},
					priority: 1145141919,
					filter: function(event, player) {
						return get.type(event.card) == "basic" && event.card.name !== "shan";
					},
					async content(event, trigger, player) {
						if (!event.name.endsWith(player.storage._ny_yanzoudiaoshi)) return;
						if (["jlsgqs_mei"].includes(trigger.card.name)) {
							trigger.card.storage._useCardBaseChange ??= 0;
							trigger.card.storage._useCardBaseChange ++;
						} else trigger.baseDamage ++;
					},
				},
				shangdiao: {
					sub: true,
					sourceSkill: "_ny_yanzoudiaoshi",
					direct: true,
					trigger: {
						player: "useCard",
					},
					priority: 1145141919,
					filter: function(event, player) {
						const info = get.info(event.card);
						if (!info || info.type != "trick" || info.notarget || (info.selectTarget && info.selectTarget != 1)) return false;
						return true;
					},
					async content(event, trigger, player) {
						if (!event.name.endsWith(player.storage._ny_yanzoudiaoshi)) return;
						trigger.card.storage._useCardBaseChange ??= 0;
						trigger.card.storage._useCardBaseChange ++;
					},
				},
				jiaodiao: {
					sub: true,
					sourceSkill: "_ny_yanzoudiaoshi",
					direct: true,
					trigger: {
						target: "useCardToTarget",
					},
					priority: 1145141919,
					filter: function(event, player) {
						return event.player !== player && event.player.countCards("h");
					},
					async content(event, trigger, player) {
						if (!event.name.endsWith(player.storage._ny_yanzoudiaoshi)) return;
						await player.randomGain(trigger.player, "h");
					},
				},
				zhidiao: {
					sub: true,
					sourceSkill: "_ny_yanzoudiaoshi",
					direct: true,
					trigger: {
						player: "damageBegin4",
					},
					priority: 1145141919,
					filter: function(event, player) {
						return !event.card && event.num >= player.hp;
					},
					async content(event, trigger, player) {
						if (!event.name.endsWith(player.storage._ny_yanzoudiaoshi)) return;
						trigger.cancel();
					},
				},
				yudiao: {
					sub: true,
					sourceSkill: "_ny_yanzoudiaoshi",
					direct: true,
					trigger: {
						player: "loseHpBegin",
					},
					priority: -1145141919,
					filter: function(event, player) {
						return event.num > 1;
					},
					async content(event, trigger, player) {
						if (!event.name.endsWith(player.storage._ny_yanzoudiaoshi)) return;
						trigger.num = 1;
					},
				},
			},
		}
		
		//固定技能
		lib.skill.ny_podan = {
			mark: true,
			marktext:"禁",
			intro: {
				nocount:true,
				name:"当你不因【酒】回复体力时，取消之",
			    content: "",
			},
			trigger: {
			    player: "recoverBefore",
			},
			filter: function (event, player) {
				if (event.card && event.card.name == 'jiu') return false;
				return true;
			},
			forced: true,
			firstDo: true,
			content() {
			    trigger.cancel();
			},
			ai: {
			    effect: {
			        target(card, player, target) {
			            if (get.tag(card, "recover") && card.name != 'jiu') return "zeroplayertarget";
			        },
			    },
			},
			priority: 0,
		}
		
		//符石技能
		//进攻
		lib.skill._ny_jinGong_duopo = {//id1
		    trigger: {
		        source: ["damageSource"],
		    },
		    forced: true,
		    popup:false,
		    filter: function(event,player,triggername){
				if (!player.storage._ny_fushiId) return false;
				if (player.storage._ny_fushiId[0] !== 1 || player.storage._ny_fushiTime[0] <= 0) return false;
		        return true;
		    },
		    content: function(){
				player.storage._ny_fushiTime[0] --;
		        player.recover(1);
		    },
		    priority: 114,
		}
		lib.skill._ny_jinGong_jinghong = {//id2
			trigger: {
			    source: "damageBegin1",
			},
			forced: true,
			popup:false,
			filter: function(event,player,triggername){
				if (!player.storage._ny_fushiId) return false;
				if (player.storage._ny_fushiId[0] !== 2 || player.storage._ny_fushiTime[0] <= 0) return false;
				if (!event.card || event.card.name != "sha") return false;
			    return event.card.storage._useCardQianghua !== true;
			},
			content: function () {
				player.storage._ny_fushiTime[0] --;
			    trigger.num++;
			},
			priority: 114,
		}
		lib.skill._ny_jinGong_zhenshe = {//id3
			trigger: {
			    player: "useCardToPlayer",
			},
			forced: true,
			popup:false,
			filter: function(event, player) {
				if (!player.storage._ny_fushiId) return false;
				if (player.storage._ny_fushiId[0] !== 3 || player.storage._ny_fushiTime[0] <= 0) return false;
			    if (event.targets.length !== 1) return false;
			    return get.tag(event.card, "damage") >= 0.5;
			},
			async content(event, trigger, player) {
				player.storage._ny_fushiTime[0] --;
				await lib.skill._ny_getNuqi.loseNuQi(trigger.target,3);
			},
			priority: 114,
		}
		lib.skill._ny_jinGong_yuwei = {//id4
			trigger: {
		        global: "cardsDiscardAfter",
		    },
			forced: true,
			popup:false,
			filter(event, player) {
				if (!player.storage._ny_fushiId) return false;
				if (player.storage._ny_fushiId[0] !== 4 || player.storage._ny_fushiTime[0] <= 0) return false;
			    const evt = event.getParent();
			    if (evt.name != "orderingDiscard") return false;
			    const evtx = evt.relatedEvent || evt.getParent();
			    return player.hasHistory("useCard", evtxx => {
					if (!evtxx.card.isCard) return false;
					const info = get.info(evtxx.card);
			        if (!info || info.type != "trick") return false;
			        return evtx.getParent() == (evtxx.relatedEvent || evtxx.getParent());
			    });
			},
			content: function() {
				let cards = _status.event.getTrigger().cards;
				if (cards.length !== 1) return;
				cards = cards[0];
				if (!cards.storage._ny_jinGong_yuwei) {
					player.storage._ny_fushiTime[0] --;
					cards.storage._ny_jinGong_yuwei = true;
					player.gain(cards, 'gain2').gaintag.add("_ny_jinGong_yuwei");
				}else{
					cards.storage._ny_jinGong_yuwei = false;
				}
			},
			priority: 114,
		}
		lib.skill._ny_jinGong_fulian = {//id5
			trigger: {
			    source: "damageBegin1",
			},
			forced: true,
			popup:false,
			filter: function(event,player,triggername){
				if (!player.storage._ny_fushiId) return false;
				if (player.storage._ny_fushiId[0] !== 5 || player.storage._ny_fushiTime[0] <= 0) return false;
				if (!event.card || get.type(event.card) !== "trick") return false;
			    return true;
			},
			content: function () {
				player.storage._ny_fushiTime[0] --;
			    trigger.num++;
			},
			priority: 114,
		}
		lib.skill._ny_jinGong_youlong = {//id6
			trigger: {
			    source: "damageBegin1",
			},
			forced: true,
			popup:false,
			filter: function(event,player,triggername){
				if (!player.storage._ny_fushiId) return false;
				if (player.storage._ny_fushiId[0] !== 6 || player.storage._ny_fushiTime[0] <= 0) return false;
				if (!event.card || event.card.name != "sha") return false;
			    return event.card.storage._useCardQianghua == true;
			},
			content: function () {
				player.storage._ny_fushiTime[0] --;
			    trigger.num++;
			},
			priority: 114,
		}
		lib.skill._ny_jinGong_gongjian = {//id7
			trigger: {
			    player: "shaMiss",
			},
			filter: function(event,player,triggername) {
				if (!player.storage._ny_fushiId) return false;
				if (player.storage._ny_fushiId[0] !== 7 || player.storage._ny_fushiTime[0] <= 0) return false;
			    return true;
			},
			check: function(event, player) {
			    return get.attitude(player, event.target) < 0;
			},
			logTarget: "target",
			async content(event, trigger, player) {
				player.storage._ny_fushiTime[0] --;
			    await trigger.target.loseHp();
			},
			priority: 114,
		}
		lib.skill._ny_jinGong_shenmou = {//id8
			trigger: {
			    player: "useCard",
			},
			forced: true,
			popup:false,
			filter: function(event,player,triggername){
				if (!player.storage._ny_fushiId) return false;
				if (player.storage._ny_fushiId[0] !== 8 || player.storage._ny_fushiTime[0] <= 0) return false;
				const info = get.info(event.card);
				if (!info || info.type != "trick" || info.notarget || (info.selectTarget && info.selectTarget != 1)) return false;
				return true;
			},
			async content (event,trigger,player) {
				var { result } = await player.chooseBool("进攻符石〖深谋〗：是否令此牌无法被响应？").set("ai",() => true);
				if (result.bool) {
					player.storage._ny_fushiTime[0] --;
					await trigger.directHit.addArray(game.players);
				}
			},
			priority: 114,
		}
		lib.skill._ny_jinGong_lingjian = {//id9
			trigger: {
			    player: "useCardToPlayered",
			},
			forced: true,
			popup:false,
			filter: function (event, player) {
				if (!player.storage._ny_fushiId) return false;
				if (player.storage._ny_fushiId[0] !== 9 || player.storage._ny_fushiTime[0] <= 0) return false;
				if (event.card.name !== "sha") return false;
				let cards  = event.target.getCards("he");
				for (let i of cards) {
				    let type = get.type2(i);
				    if (type == "equip") return true;
				}
			},
			content: function(){
				player.storage._ny_fushiTime[0] --;
				let card = trigger.target.getCards("he").filter(function (card) {
		            return get.type(card) == "equip";
		        }).randomGet();
				player.gain(card,"gain2");
			},
			priority: 114,
		}
		lib.skill._ny_jinGong_qianggong = {//id10
			trigger: {
			    player: "useCardToPlayered",
			},
			forced: true,
			popup:false,
			filter: function (event, player) {
				if (!player.storage._ny_fushiId) return false;
				if (player.storage._ny_fushiId[0] !== 10 || player.storage._ny_fushiTime[0] <= 0) return false;
				if (event.card.name !== "sha") return false;
				if ((!event.target.storage._ny_nuqi) && event.target.storage._ny_nuqi !== 0) return false;
				return true;
			},
			async content (event, trigger, player) {
				player.storage._ny_fushiTime[0] --;
				await lib.skill._ny_getNuqi.loseNuQi(trigger.target,2);
			},
			priority: 114,
		}
		lib.skill._ny_jinGong_tianfa = {//id11
			trigger: {
			    source: "damageBefore",
			},
			marktext:'罚',
			intro:{
				nocount:true,
				name:'天罚',
				content:'此次伤害结算内，你无法因受到伤害而获得' + zhonghuiFunction.poptipLink("怒气", null, null, true),
			},
			forced: true,
			popup:false,
			filter: function (event, player) {
				if (!player.storage._ny_fushiId) return false;
				if (player.storage._ny_fushiId[0] !== 11 || player.storage._ny_fushiTime[0] <= 0) return false;
				if ((!event.player.storage._ny_nuqi) && event.player.storage._ny_nuqi !== 0) return false;
				if ((!event.player.storage._ny_nuqiMax) && event.player.storage._ny_nuqiMax !== 0) return false;
			    return player != event.player;
			},
			content: function () {
				player.storage._ny_fushiTime[0] --;
			    trigger.player.addMark('_ny_jinGong_tianfa');
				player.when({ source: "damageAfter" })
					.then(() => {
						trigger.player.removeMark('_ny_jinGong_tianfa');
						trigger.player.unmarkSkill('_ny_jinGong_tianfa');
						trigger.player.updateMarks();
					});
			},
			priority: 114,
		}
		lib.skill._ny_jinGong_fenyong = {//id12
			trigger: {
			    player: "useCard1",
			},
			forced: true,
			popup: false,
			filter:function (event,player) {
				if (!player.storage._ny_fushiId) return false;
				if (player.storage._ny_fushiId[0] !== 12 || player.storage._ny_fushiTime[0] <= 0) return false;
				if (!player.isDamaged()) return false;
				return get.type2(event.card, false) === "basic";
			},
			content:function(){
				player.storage._ny_fushiTime[0] --;
				trigger.baseDamage++;
				if (trigger.card.name == "jlsgqs_mei") {
					if (!trigger.card.storage._useCardBaseChange) trigger.card.storage._useCardBaseChange = 1;
					else trigger.card.storage._useCardBaseChange++;
				}
			},
			priority: 114,
		}
		//防御
		lib.skill._ny_fangYu_yuanbing = {//id1
			trigger: {
			    player: ["damageEnd","loseHpAfter"],
			},
			forced: true,
			popup:false,
		    filter: function(event,player,triggername){
		        if (!player.storage._ny_fushiId) return false;
		        if (player.storage._ny_fushiId[1] !== 1 || player.storage._ny_fushiTime[1] <= 0) return false;
				if (player.countMark("_ny_noneFangYuFushi")) return false;
		        return true;
		    },
		    content: function(){
				player.storage._ny_fushiTime[1] --;
		        player.recover(1);
		    },
		    priority: 114,
		}
		lib.skill._ny_fangYu_dunzhen = {//id2
			mod: {
				aiValue: function (player, card, num) {
					if (get.name(card) != "wuxie" && get.type(card) != "equip") return;
					var cards = player.getCards("hs", function (card) {
						return get.name(card) == "wuxie" || get.type(card) == "equip";
					});
					cards.sort(function (a, b) {
						return (get.name(b) == "wuxie" ? 1 : 2) - (get.name(a) == "wuxie" ? 1 : 2);
					});
					var geti = function () {
						if (cards.includes(card)) {
							return cards.indexOf(card);
						}
						return cards.length;
					};
					if (get.name(card) == "wuxie") return Math.min(num, [6, 4, 3][Math.min(geti(), 2)]) * 0.6;
					return Math.max(num, [6, 4, 3][Math.min(geti(), 2)]);
				},
				aiUseful: function () {
					return lib.skill.rekanpo.mod.aiValue.apply(this, arguments);
				},
			},
			popup:false,
			position: "he",
			enable: "chooseToUse",
			filterCard: function (card) {
				return get.type(card) == "equip";
			},
			viewAsFilter: function (player) {
				if (!player.storage._ny_fushiId) return false;
				if (player.storage._ny_fushiId[1] !== 2 || player.storage._ny_fushiTime[1] <= 0) return false;
				if (player.countMark("_ny_noneFangYuFushi")) return false;
				return player.countCards("he", { type: "equip" }) > 0;
			},
			viewAs: {
				name: "wuxie",
			},
			prompt: "将一张装备牌当无懈可击使用",
			precontent: function() {
				player.storage._ny_fushiTime[1] --;
			},
			check: function (card) {
				return 8 - get.value(card);
			},
		}
		lib.skill._ny_fangYu_xiongbing = {//id3
			trigger: {
			    player: "damageEnd",
			},
			forced: true,
			popup:false,
			filter: function(event,player,triggername){
			    if (!player.storage._ny_fushiId) return false;
			    if (player.storage._ny_fushiId[1] !== 3 || player.storage._ny_fushiTime[1] <= 0) return false;
				if (player.countMark("_ny_noneFangYuFushi")) return false;
			    if (event.source == undefined || event.source == player) return false;
				return event.source.countCards('he') > 0;
			},
			content:function(){
				player.storage._ny_fushiTime[1] --;
				let num =trigger.num * 2;
				trigger.source.randomDiscard(num);
				let card = trigger.target.getCards("e").randomGet();
				if (card) {
					trigger.source.$give(card, player, false);
					player.equip(card);
				}
			},
			priority: 114,
		}
		lib.skill._ny_fangYu_lingzhen = {//id4
			mod: {
				aiValue: function (player, card, num) {
					if (get.name(card) != "shan" && get.type(card) != "equip") return;
					var cards = player.getCards("hs", function (card) {
						return get.name(card) == "shan" || get.type(card) == "equip";
					});
					cards.sort(function (a, b) {
						return (get.name(b) == "shan" ? 1 : 2) - (get.name(a) == "shan" ? 1 : 2);
					});
					var geti = function () {
						if (cards.includes(card)) {
							return cards.indexOf(card);
						}
						return cards.length;
					};
					if (get.name(card) == "shan") return Math.min(num, [6, 4, 3][Math.min(geti(), 2)]) * 0.6;
					return Math.max(num, [6, 4, 3][Math.min(geti(), 2)]);
				},
				aiUseful: function () {
					return lib.skill.rekanpo.mod.aiValue.apply(this, arguments);
				},
			},
			popup:false,
			position: "he",
			enable: ["chooseToRespond","chooseToUse"],
			filterCard: function (card) {
				return get.type(card) == "equip";
			},
			viewAsFilter: function (player) {
				if (!player.storage._ny_fushiId) return false;
				if (player.storage._ny_fushiId[1] !== 4 || player.storage._ny_fushiTime[1] <= 0) return false;
				if (player.countMark("_ny_noneFangYuFushi")) return false;
				return player.countCards("he", { type: "equip" }) > 0;
			},
			viewAs: {
				name: "shan",
				storage: {
					_useCardQianghua: true,
				},
			},
			prompt: "将一张装备牌当强化【闪】使用或打出",
			precontent: function() {
				player.storage._ny_fushiTime[1] --;
			},
			check: function (card) {
				return 8 - get.value(card);
			},
		}
		lib.skill._ny_fangYu_Firstlingzhen = {//id5
			mod: {
				aiValue: function (player, card, num) {
					if (get.name(card) != "shan" && get.type(card) != "equip") return;
					var cards = player.getCards("hs", function (card) {
						return get.name(card) == "shan" || get.type(card) == "equip";
					});
					cards.sort(function (a, b) {
						return (get.name(b) == "shan" ? 1 : 2) - (get.name(a) == "shan" ? 1 : 2);
					});
					var geti = function () {
						if (cards.includes(card)) {
							return cards.indexOf(card);
						}
						return cards.length;
					};
					if (get.name(card) == "shan") return Math.min(num, [6, 4, 3][Math.min(geti(), 2)]) * 0.6;
					return Math.max(num, [6, 4, 3][Math.min(geti(), 2)]);
				},
				aiUseful: function () {
					return lib.skill.rekanpo.mod.aiValue.apply(this, arguments);
				},
			},
			popup:false,
			position: "he",
			enable: ["chooseToRespond","chooseToUse"],
			filterCard: function (card) {
				return get.type(card) == "equip";
			},
			viewAsFilter: function (player) {
				if (!player.storage._ny_fushiId) return false;
				if (player.storage._ny_fushiId[1] !== 5 || player.storage._ny_fushiTime[1] <= 0) return false;
				if (player.countMark("_ny_noneFangYuFushi")) return false;
				return player.countCards("he", { type: "equip" }) > 0;
			},
			viewAs: {
				name: "shan",
				storage: {
					_ny_fangYu_Firstlingjian: true,
				},
			},
			prompt: "将一张装备牌当【闪】使用或打出",
			precontent: function() {
				player.storage._ny_fushiTime[1] --;
			},
			check: function (card) {
				return 8 - get.value(card);
			},
			subSkill:{
				effect:{
					trigger: {player:"useCard1"},
					forced: true,
					popup:false,
					filter: function (event,player) {
						if (!event.card) return false;
						if (event.card.storage._ny_fangYu_Firstlingjian != true) return false;
						if ((!player.storage._ny_nuqi) && player.storage._ny_nuqi !== 0) return false;
						if ((!player.storage._ny_nuqiMax) && player.storage._ny_nuqiMax !== 0) return false;
					    return event.card.storage._useCardQianghua != true && player.storage._ny_nuqi !== player.storage._ny_nuqiMax;
					},
					async content(event, trigger, player){
						await lib.skill._ny_getNuqi.addNuQi(player,1);
					},
					priority: 114,
				},
			},
		}
		lib.skill._ny_fangYu_yingyong = {//id6
			mod: {
				aiValue: function (player, card, num) {
					if (get.name(card) != "jiu" && get.type(card) != "equip") return;
					var cards = player.getCards("hs", function (card) {
						return get.name(card) == "jiu" || get.type(card) == "equip";
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
			enable: ["chooseToRespond","chooseToUse"],
			filterCard: function (card) {
				return get.type(card) == "equip";
			},
			viewAsFilter: function (player) {
				if (!player.storage._ny_fushiId) return false;
				if (!player.isDying()) return false;
				if (player.storage._ny_fushiId[1] !== 6 || player.storage._ny_fushiTime[1] <= 0) return false;
				if (player.countMark("_ny_noneFangYuFushi")) return false;
				return player.countCards("he", { type: "equip" }) > 0;
			},
			viewAs: {
				name: "jiu",
			},
			prompt: "将一张装备牌当【酒】使用或打出",
			precontent: function() {
				player.storage._ny_fushiTime[1] --;
			},
			check: function (card) {
				return 8 - get.value(card);
			},
		}
		lib.skill._ny_fangYu_shenyou = {//id7
			trigger: {
				player: ["damageBegin4","loseHpBefore"],
			},
			forced: true,
			popup:false,
			filter: function(event,player,triggername){
			    if (!player.storage._ny_fushiId) return false;
			    if (player.storage._ny_fushiId[1] !== 7 || player.storage._ny_fushiTime[1] <= 0) return false;
				if (player.countMark("_ny_noneFangYuFushi")) return false;
				if (event.name == "loseHp") return true;
			    return get.type(event.card, "trick") == "trick";
			},
			content: function () {
				player.storage._ny_fushiTime[1] --;
				trigger.cancel();
			},
			priority: 114,
		}
		lib.skill._ny_fangYu_miaosuan = {//id8
			trigger: {
			    target: "useCardToTarget",
			},
			filter: function(event,player,triggername){
			    if (!player.storage._ny_fushiId) return false;
			    if (player.storage._ny_fushiId[1] !== 8 || player.storage._ny_fushiTime[1] <= 0) return false;
				if (player.countMark("_ny_noneFangYuFushi")) return false;
				let info = get.info(event.card);
				if (!info || info.type != "trick" || info.notarget || (info.selectTarget && info.selectTarget != 1)) return false;
				if (player.storage.isMiaosuanIng == true) return false;
				return true;
			},
			forced: true,
			popup:false,
			async content(event,trigger,player) {
				let { result } = await player.chooseBool("余威：是否于"+get.translation(trigger.card)+"结算过程中可视为使用【无懈可击】(不限次数)").set("ai",() => true);
				if (result.bool) {
					player.storage._ny_fushiTime[1] --;
					let card = trigger.card;
					card.storage.isMiaosuanIng = true;
					player.storage.isMiaosuanIng = true;
				}
			},
			priority: 114,
			subSkill:{
				effect:{
					forced: true,
					popup: false,
					enable: "chooseToUse",
					prompt: "妙计：你可以视为使用一张【无懈可击】(不限次数)",
					viewAs:{
						name: "wuxie",
						suit: "none",
						number: null,
						isCard: true,
					},
					filter:function(event,player){
						return player.storage.isFirstMiaosuanIng && player.storage.isMiaosuanIng == true;
					},
					viewAsFilter:function(player){
						return player.storage.isFirstMiaosuanIng && player.storage.isMiaosuanIng == true;
					},
					filterCard:() => false,
					selectCard:-1,
				},
				restore:{
					forced: true,
					popup: false,
					trigger: {
						global: "useCardAfter",
					},
					filter:function(event,player) {
						return event.card.storage && (event.card.storage.isMiaosuanIng == true);
					},
					content:function(){
						let card = trigger.card;
						card.storage.isMiaosuanIng = false;
						game.players.forEach(current => {
							current.storage.isMiaosuanIng = false;
						});
					},
					priority: 114,
				},
			},
		}
		lib.skill._ny_fangYu_Firstmiaosuan = {//id9
			trigger: {
			    target: "useCardToTarget",
			},
			filter: function(event,player,triggername){
			    if (!player.storage._ny_fushiId) return false;
			    if (player.storage._ny_fushiId[1] !== 9 || player.storage._ny_fushiTime[1] <= 0) return false;
				if (player.countMark("_ny_noneFangYuFushi")) return false;
				let info = get.info(event.card);
				if (!info || info.type != "trick" || info.notarget || (info.selectTarget && info.selectTarget != 1)) return false;
				if (player.storage.isFirstMiaosuanIng == true) return false;
				return player.storage._ny_nuQi > 0;
			},
			forced: true,
			popup:false,
			async content(event,trigger,player) {
				let { result } = await player.chooseBool("余威：是否于"+get.translation(trigger.card)+"结算过程中可消耗1点" + zhonghuiFunction.poptipLink("怒气", null, null, true) + "视为使用强化【无懈可击】(不限次数)").set("ai", () => true);
				if (result.bool) {
					player.storage._ny_fushiTime[1] --;
					let card = trigger.card;
					card.storage.isFirstMiaosuanIng = true;
					player.storage.isFirstMiaosuanIng = true;
				}
			},
			priority: 114,
			subSkill:{
				effect:{
					forced: true,
					popup: false,
					enable: "chooseToUse",
					prompt: "妙计：你可以消耗1点" + zhonghuiFunction.poptipLink("怒气", null, null, true) + "并视为使用一张强化【无懈可击】(不限次数)",
					viewAs:{
						name: "wuxie",
						suit: "none",
						number: null,
						isCard: true,
						storage:{_useCardQianghua:true},
					},
					filter:function(event,player){
						return player.storage.isFirstMiaosuanIng && player.storage.isFirstMiaosuanIng == true && player.storage._ny_nuqi && player.storage._ny_nuqi > 0;
					},
					viewAsFilter:function(player){
						return player.storage.isFirstMiaosuanIng && player.storage.isFirstMiaosuanIng == true && player.storage._ny_nuqi && player.storage._ny_nuqi > 0;
					},
					async precontent(event, trigger, player) {
						await lib.skill._ny_getNuqi.loseNuQi(player,1);
					},
					filterCard:() => false,
					selectCard:-1,
				},
				restore:{
					forced: true,
					popup: false,
					trigger: {
						global: "useCardAfter",
					},
					filter:function(event,player) {
						return event.card.storage && (event.card.storage.isFirstMiaosuanIng == true);
					},
					content:function(){
						let card = trigger.card;
						card.storage.isFirstMiaosuanIng = false;
						game.players.forEach(current => {
							current.storage.isFirstMiaosuanIng = false;
						});
					},
					priority: 114,
				},
			},
		}
		lib.skill._ny_fangYu_qingling = {//id10
			trigger: {
				player: ["loseHpBefore"],
			},
			forced: true,
			popup:false,
			filter: function(event,player,triggername){
			    if (!player.storage._ny_fushiId) return false;
			    if (player.storage._ny_fushiId[1] !== 10 || player.storage._ny_fushiTime[1] <= 0) return false;
				if (player.countMark("_ny_noneFangYuFushi")) return false;
				if (event.name == "loseHp") return true;
			    return event.num > 1;
			},
			content: function () {
				trigger.num --;
				player.storage._ny_fushiTime[1] --;
			},
			priority: 114,
		}
		lib.skill._ny_fangYu_sishou = {//id11
			mod: {
			    maxHandcard: function (player, num) {
					if (!player.storage._ny_fushiId) return;
					if (player.storage._ny_fushiId[1] !== 11 || player.storage._ny_fushiTime[1] <= 0) return;
					if (player.countMark("_ny_noneFangYuFushi")) return;
			        return num + 6 + (player.maxHp - player.hp);
			    },
			},
		}
		lib.skill._ny_fangYu_tiejia = {//id12
			trigger: {
				player: ["damageBegin3"],
			},
			forced: true,
			popup:false,
			filter: function(event,player,triggername){
			    if (!player.storage._ny_fushiId) return false;
			    if (player.storage._ny_fushiId[1] !== 12 || player.storage._ny_fushiTime[1] <= 0) return false;
				if (player.countMark("_ny_noneFangYuFushi")) return false;
			    return event.num > 1;
			},
			content: function () {
				trigger.num --;
				player.storage._ny_fushiTime[1] --;
			},
			priority: 114,
		}
		lib.skill._ny_fangYu_jianren = {//id13
			trigger: {
				player: ["damageEnd"],
			},
			forced: true,
			popup:false,
			filter: function(event,player,triggername){
			    if (!player.storage._ny_fushiId) return false;
			    if (player.storage._ny_fushiId[1] !== 13 || player.storage._ny_fushiTime[1] <= 0) return false;
				if (player.countMark("_ny_noneFangYuFushi")) return false;
			    return player.isMinHp();
			},
			content: function () {
				player.recover();
				player.storage._ny_fushiTime[1] --;
			},
			priority: 114,
		}
		//摸牌
		lib.skill._ny_moPai_shengji = {//id1
			trigger: {
			    player: ["changeHp"],
			},
			forced: true,
			popup:false,
			filter: function(event,player,triggername){
			    if (!player.storage._ny_fushiId) return false;
			    if (player.storage._ny_fushiId[2] !== 1 || player.storage._ny_fushiTime[2] <= 0) return false;
			    return true;
			},
			content: function(){
				let num = Math.min(Math.abs(trigger.num), 5);
				if (num > 0) {
					player.storage._ny_fushiTime[2] --;
					player.draw(num);
				}
			},
			priority: 114,
		}
		lib.skill._ny_moPai_cangfeng = {//id2
			trigger: {
			    global: "phaseEnd",
			},
			forced: true,
			popup:false,
			filter: function(event,player,triggername){
			    if (!player.storage._ny_fushiId) return false;
			    if (player.storage._ny_fushiId[2] !== 2 || player.storage._ny_fushiTime[2] <= 0) return false;
			    return player.countCards('h');
			},
			content: function(){
				player.storage._ny_fushiTime[2] --;
			    player.draw(player.getCards('h').map(card => get.type2(card, player)).unique().length);
			},
			priority: 114,
		}
		lib.skill._ny_moPai_junzhen = {//id3
			trigger: {
			    player: "phaseDrawBegin",
			},
			forced: true,
			popup:false,
			filter: function(event,player,triggername){
			    if (!player.storage._ny_fushiId) return false;
			    if (player.storage._ny_fushiId[2] !== 3 || player.storage._ny_fushiTime[2] <= 0) return false;
			    return true;
			},
			content: function(){
				player.storage._ny_fushiTime[2] --;
				trigger.num += game.players.length;
			},
			priority: 114,
		}
		lib.skill._ny_moPai_zhangu = {//id4
			trigger: {
			    player: "useCardToPlayer",
			},
			forced: true,
			popup:false,
			filter: function(event, player) {
				if (!player.storage._ny_fushiId) return false;
				if (player.storage._ny_fushiId[2] !== 4 || player.storage._ny_fushiTime[2] <= 0) return false;
			    return get.tag(event.card, "damage") >= 0.5;
			},
			content: function(){
				player.storage._ny_fushiTime[2] --;
				if (trigger.targets.length > 1) player.draw(2);
				else player.draw();
			},
			priority: 114,
		}
		//id5:诱敌，写在怒气获得与失去里面了
		lib.skill._ny_moPai_xuncha = {//id6
			trigger: {
			    player: "loseAfter",
			    global: ["equipAfter","addJudgeAfter","gainAfter","loseAsyncAfter","addToExpansionAfter"],
			},
			forced: true,
			popup:false,
			filter: function(event, player) {
				if (!player.storage._ny_fushiId) return false;
				if (player.storage._ny_fushiId[2] !== 6 || player.storage._ny_fushiTime[2] <= 0) return false;
				if (name == "gainBegin") return true;
				var evt = event.getl(player);
				if (!evt || !evt.hs || !evt.hs.length) return false;
				return true;
			},
			async content(event,trigger,player) {
				let cards = trigger.getl(player).hs;
				for (let i of cards) {
				    if (player.storage._ny_fushiTime[2] > 0) {
						if (player.isMinHandcard()) {
							player.storage._ny_fushiTime[2] --;
							await player.draw(2);
						} else break;
					} else break;
				}
			},
			priority: 114,
		}
		lib.skill._ny_moPai_wuku = {//id7
			trigger: {
			        global: ["loseAfter","gainAfter","equipAfter","addJudgeAfter","loseAsyncAfter","addToExpansionAfter","cardsDiscardAfter"],
			},
			forced: true,
			popup:false,
			filter: function(event, player) {
				if (!player.storage._ny_fushiId) return false;
				if (player.storage._ny_fushiId[2] !== 7 || player.storage._ny_fushiTime[2] <= 0) return false;
				var cards = event.getd().filterInD('d').filter(c => get.position(c, true) == "d" && get.type(c, null, false) == "equip");
				if (!cards.length) return false;
				return game.hasPlayer2(i => i !== player && event.getd(i, "cards2").length);
			},
			content:function(){
				let cards = trigger.getd().filter(function (card) {
					if (get.position(card, true) == "d" && get.type(card, null, false) == "equip") return true;
				});
				if (cards.length) {
					player.storage._ny_fushiTime[2] --;
					player.gain(cards, "gain2");
					player.draw(2);
				}
			},
			priority: 114,
		}
		//id8:袭扰，写怒气获得那里了
		//id9:爆能，写怒气获得那里了
		//id10:虎啸，写怒气失去那里了
		lib.skill._ny_moPai_yuling = {//id11
			trigger: {
			    player: "phaseEnd",
			},
			forced: true,
			popup:false,
			filter: function(event, player) {
				if (!player.storage._ny_fushiId) return false;
				if (player.storage._ny_fushiId[2] !== 11 || player.storage._ny_fushiTime[2] <= 0) return false;
				return player.isDamaged();
			},
			content:function(){
				player.storage._ny_fushiTime[2] --;
				player.draw(2);
			},
			priority: 114,
		}
		lib.skill._ny_moPai_qingshen = {//id12
			trigger: {
			    player: "phaseDrawBegin",
			},
			forced: true,
			popup:false,
			filter: function(event,player,triggername){
			    if (!player.storage._ny_fushiId) return false;
			    if (player.storage._ny_fushiId[2] !== 12 || player.storage._ny_fushiTime[2] <= 0) return false;
			    return player.storage._ny_nuqi < player.storage._ny_nuqiMax;
			},
			content: function(){
				player.storage._ny_fushiTime[2] --;
				trigger.num += 2;
			},
			priority: 114,
		}
		//怒气
		lib.skill._ny_nuQi_xingchi = {//id1
			trigger:{
				target: "useCardToTargeted",
			},
			forced: true,
			popup:false,
			filter: function(event,player,name){
			    if (!player.storage._ny_fushiId) return false;
			    if (player.storage._ny_fushiId[3] !== 1 || player.storage._ny_fushiTime[3] <= 0) return false;
				if (player.storage._ny_nuqi === player.storage._ny_nuqiMax) return false;
				if (event.player == player) return false;
				if (get.type(event.card) == "trick" && event.targets.length == 1) return true;
			    return get.type(event.card) == "basic" && player.storage._ny_nuqi !== player.storage._ny_nuqiMax;
			},
			content: async function(event, trigger, player) {
				player.storage._ny_fushiTime[3] --;
				await lib.skill._ny_getNuqi.addNuQi(player,2);
			},
			priority: 114,
		}
		lib.skill._ny_nuQi_qimou = {//id2
			trigger: {
			    player: ["useCard"],
			},
			forced: true,
			popup:false,
			filter: function(event,player,name){
			    if (!player.storage._ny_fushiId) return false;
			    if (player.storage._ny_fushiId[3] !== 2 || player.storage._ny_fushiTime[3] <= 0) return false;
				if (player == _status.currentPhase) return false;
				return event.card.name == 'wuxie' && player.storage._ny_nuqi !== player.storage._ny_nuqiMax;
			},
			content: async function(event, trigger, player) {
				player.storage._ny_fushiTime[3] --;
				await lib.skill._ny_getNuqi.addNuQi(player,2);
				var card = _status.currentPhase.getCards('he').randomGet();
				if (card) {
					await _status.currentPhase.modedDiscard(card, player);
		        }
			},
			priority: 114,
		}
		lib.skill._ny_nuQi_shayi = {//id3
			trigger: {
			    player: "useCardToPlayered",
			},
			forced: true,
			popup:false,
			filter: function(event,player,name){
			    if (!player.storage._ny_fushiId) return false;
			    if (player.storage._ny_fushiId[3] !== 3 || player.storage._ny_fushiTime[3] <= 0) return false;
				return event.card.name == 'sha' && event.targets.length && player.storage._ny_nuqi !== player.storage._ny_nuqiMax;
			},
			content: async function(event, trigger, player) {
				player.storage._ny_fushiTime[3] --;
				if (trigger.target.isMinHp(true)) await lib.skill._ny_getNuqi.addNuQi(player,2);
				else await lib.skill._ny_getNuqi.addNuQi(player,1);
			},
			priority: 114,
		}
		lib.skill._ny_nuQi_fenfa = {//id4
			trigger: {
			    player: "changeHp",
			},
			forced: true,
			popup:false,
			filter: function(event,player,name){
			    if (!player.storage._ny_fushiId) return false;
			    if (player.storage._ny_fushiId[3] !== 4 || player.storage._ny_fushiTime[3] <= 0) return false;
				if (event.num > 0) return false;
				if (player.getHp() <= 4 && !player.isHealthy()) return true;
				return player.storage._ny_nuqi !== player.storage._ny_nuqiMax;
			},
			content: async function(event, trigger, player) {
				player.storage._ny_fushiTime[3] --;
				await lib.skill._ny_getNuqi.addNuQi(player,1);
				if (player.getHp() <= 4) await player.recover();
			},
			priority: 114,
		}
		lib.skill._ny_nuQi_wuling = {//id5
			//这一段是离开装备区
			trigger: {
				player: "loseAfter",
				global: ["equipAfter","addJudgeAfter","gainAfter","loseAsyncAfter","addToExpansionAfter"],
			},
			forced: true,
			popup:false,
			getIndex(event, player) {
				if (!player.storage._ny_fushiId) return false;
				if (player.storage._ny_fushiId[3] !== 5 || player.storage._ny_fushiTime[3] <= 0) return false;
			    const evt = event.getl(player);
			    if (player.storage._ny_nuqi !== player.storage._ny_nuqiMax && evt && evt.player === player && evt.es && evt.es.length) {
					player.storage._ny_fushiTime[3] --;
					return evt.es.filter(c => get.type(c) == "equip").length;
				}
			    return false;
			},
			content: async function(event, trigger, player) {
				await lib.skill._ny_getNuqi.addNuQi(player,2);
			},
			priority: 114,
			subSkill:{
				//进入装备区
				add:{
					trigger: {
					    player: "equipAfter",
					},
					forced: true,
					popup:false,
					filter: function(event,player){
					    if (!player.storage._ny_fushiId) return false;
					    if (player.storage._ny_fushiId[3] !== 5 || player.storage._ny_fushiTime[3] <= 0) return false;
						return player.storage._ny_nuqi !== player.storage._ny_nuqiMax && event.cards.some(c => get.type(c) == "equip");
					},
					content: async function(event, trigger, player) {
						player.storage._ny_fushiTime[3] --;
						await lib.skill._ny_getNuqi.addNuQi(player,2);
					},
					priority: 114,
				},
			},
		}
		lib.skill._ny_nuQi_tongchou = {//id6
			trigger: {
			    global: ["damageEnd","loseHpAfter"],
			},
			forced: true,
			popup:false,
			filter: function(event,player,triggername){
			    if (!player.storage._ny_fushiId) return false;
			    if (player.storage._ny_fushiId[3] !== 6 || player.storage._ny_fushiTime[3] <= 0) return false;
			    return true;
			},
			async content(event,trigger,player){
				let { result } = await player.chooseBool("是否发动〖同仇〗：获得1点" + zhonghuiFunction.poptipLink("怒气", null, null, true) + "并摸一张牌").set("ai", () => true);
				if (result.bool) {
					player.storage._ny_fushiTime[3] --;
					await lib.skill._ny_getNuqi.addNuQi(player,1);
					await player.draw();
				}
			},
			priority: 114,
		}
		lib.skill._ny_nuQi_Firsttongchou = {//id7
			trigger: {
			    global: "changeHp",
			},
			forced: true,
			popup:false,
			filter: function(event,player,triggername){
			    if (!player.storage._ny_fushiId) return false;
			    if (player.storage._ny_fushiId[3] !== 7 || player.storage._ny_fushiTime[3] <= 0) return false;
			    return event.player.getHp() <= 4;
			},
			async content(event,trigger,player){
				let { result } = await player.chooseBool("是否发动〖同仇〗：获得1点" + zhonghuiFunction.poptipLink("怒气", null, null, true) + "并摸一张牌").set("ai", () => true);
				if (result.bool) {
					player.storage._ny_fushiTime[3] --;
					await lib.skill._ny_getNuqi.addNuQi(player,1);
					await player.draw();
				}
			},
			priority: 114,
		}
		lib.skill._ny_nuQi_guimou = {//id8
			trigger: {
			    player: "useCardToPlayered",
			},
			forced: true,
			popup:false,
			filter: function(event,player,name){
			    if (!player.storage._ny_fushiId) return false;
			    if (player.storage._ny_fushiId[3] !== 8 || player.storage._ny_fushiTime[3] <= 0) return false;
				return (get.type(event.card) == 'trick' || get.type(event.card) == 'delay') && event.targets.length && player.storage._ny_nuqi !== player.storage._ny_nuqiMax;
			},
			content: async function(event, trigger, player) {
				player.storage._ny_fushiTime[3] --;
				if (trigger.targets.length > 1) await lib.skill._ny_getNuqi.addNuQi(player,2);
				else await lib.skill._ny_getNuqi.addNuQi(player,1);
			},
			priority: 114,
		}
		//id9 振奋写在失去怒气里面了
		lib.skill._ny_nuQi_aibing = {//id10
			trigger: {
			    player: "phaseBegin",
			},
			forced: true,
			popup:false,
			filter: function(event,player,name){
			    if (!player.storage._ny_fushiId) return false;
			    if (player.storage._ny_fushiId[3] !== 10 || player.storage._ny_fushiTime[3] <= 0) return false;
				return player.isDamaged() && player.storage._ny_nuqi !== player.storage._ny_nuqiMax;
			},
			content: async function(event, trigger, player) {
				player.storage._ny_fushiTime[3] --;
				await lib.skill._ny_getNuqi.addNuQi(player,player.maxHp - player.hp);
			},
			priority: 114,
		}
		lib.skill._ny_nuQi_jingbing = {//id11
			trigger: {
			    player: "phaseEnd",
			},
			forced: true,
			popup:false,
			filter: function(event,player,name){
			    if (!player.storage._ny_fushiId) return false;
			    if (player.storage._ny_fushiId[3] !== 11 || player.storage._ny_fushiTime[3] <= 0) return false;
				return player.countCards('e') > 0 && player.storage._ny_nuqi !== player.storage._ny_nuqiMax;
			},
			content: async function(event, trigger, player) {
				player.storage._ny_fushiTime[3] --;
				await lib.skill._ny_getNuqi.addNuQi(player,2);
			},
			priority: 114,
		}
		lib.skill._ny_nuQi_lingyuan = {//id12
			trigger: {
			    player: "phaseBegin",
			},
			forced: true,
			popup:false,
			filter: function(event,player,name){
			    if (!player.storage._ny_fushiId) return false;
			    if (player.storage._ny_fushiId[3] !== 12 || player.storage._ny_fushiTime[3] <= 0) return false;
				return player.storage._ny_nuQi < 2 && player.storage._ny_nuqi !== player.storage._ny_nuqiMax;
			},
			content: async function(event, trigger, player) {
				player.storage._ny_fushiTime[3] --;
				await lib.skill._ny_getNuqi.addNuQi(player,2);
			},
			priority: 114,
		}
		lib.skill._ny_nuQi_gujun = {//id13
			trigger: {
			    player: "phaseEnd",
			},
			forced: true,
			popup:false,
			filter: function(event,player,name){
			    if (!player.storage._ny_fushiId) return false;
			    if (player.storage._ny_fushiId[3] !== 13 || player.storage._ny_fushiTime[3] <= 0) return false;
				return player.storage._discardNum && player.storage._discardNum > 0 && player.storage._ny_nuqi !== player.storage._ny_nuqiMax;
			},
			content: async function(event, trigger, player) {
				player.storage._ny_fushiTime[3] --;
				await lib.skill._ny_getNuqi.addNuQi(player,player.storage._discardNum);
			},
			priority: 114,
			subSkill:{
				num:{
					//记录弃牌阶段弃牌数
					trigger: {
					    player: "phaseDiscardAfter",
					},
					forced: true,
					popup:false,
					filter: function(event,player,name){
					    if (!player.storage._ny_fushiId) return false;
					    if (player.storage._ny_fushiId[3] !== 13 || player.storage._ny_fushiTime[3] <= 0) return false;
						if ((!player.storage._discardNum) && player.storage._discardNum !== 0) player.storage._discardNum = 0;
						return true;
					},
					content: function() {
						let cntC = 0;
						player.getHistory('lose', function (evt) {
						  if (evt && evt.type == 'discard' && evt.getParent('phaseDiscard') == trigger && evt.hs) {
						    cntC += evt.hs.length;
						  }
						});
						player.storage._discardNum = cntC;
						player.when({ player: "phaseEnd" })
						  .then(() => player.storage._discardNum = 0);
					},
					priority: 1145141919810,
				}
			}
		}
		//战法
		lib.skill._ny_zhanFa_lvedigongcheng = {//id1
		    trigger: {
		        player: ["phaseBegin"],
		    },
			popup:false,
			frequent: true,
		    filter: function (event, player, triggername) {
				if (!player.storage._ny_fushiId) return false;
				if (player.storage._ny_fushiId[4] !== 1) return false;
		        return true;
		    },
		    content: function () {
		        "step 0"
		        player.chooseTarget(1)
		            .set("filterTarget", function (card, player, target) { return player != target })
		            .set("prompt", get.prompt("_ny_zhanFa_lvedigongcheng"))
		            .set("prompt2", get.prompt2("_ny_zhanFa_lvedigongcheng"))
					.set("ai", target => -1 * get.attitude(_status.event.player, target));
		        "step 1"
				if (result.bool) {
					const num = [1, 2, 3].randomGet();
					let target = result.targets[0];
					target.damage(num,player);
					var x = 1 + player.getAttackRange();
					var y = target.countCards("h");
					player.randomGain(x, target);
					for (let i = 0; i < x - y; i++) {
					    target.damage(player);
					}
				}
		    },
		    priority: 1145,
		}
		lib.skill._ny_zhanFa_xushidaifa = {//id2
		    trigger: {
		        player: ["phaseEnd"],
		    },
			filter: function (event, player, triggername) {
				if (!player.storage._ny_fushiId) return false;
				if (player.storage._ny_fushiId[4] !== 2) return false;
			    return true;
			},
		    popup:false,
		    frequent: true,
		    content: function(){
				if(player.getHistory("sourceDamage").reduce((acc,cur)=>acc+cur.num,0) <= 4){
				    trigger.getParent("phase",void 0,true).phaseList.splice(trigger.getParent("phase",void 0,true).num,0,"phaseUse|_ny_zhanFa_xushidaifa")
				}
		        trigger.getParent("phase",void 0,true).phaseList.splice(trigger.getParent("phase",void 0,true).num,0,"phaseDraw|_ny_zhanFa_xushidaifa");
		    },
		    priority: 1145,
		}
		lib.skill._ny_zhanFa_anzhongtuxi = {//id3
			trigger: {
			    global: "phaseZhunbeiBegin",
			},
			filter: function (event, player, triggername) {
				if (!player.storage._ny_fushiId) return false;
				if (player.storage._ny_fushiId[4] !== 3) return false;
			    return event.player !== player;
			},
			popup:false,
			frequent: false,
			async content (event,trigger,player) {
				await trigger.player.randomDiscard(2);
				await lib.skill._ny_getNuqi.loseNuQi(trigger.player,1);
			},
		}
		lib.skill._ny_zhanFa_Firstpozhencuijian = {//id4
			trigger: {
			    player: "useCard",
			},
			popup:false,
			frequent: false,
			filter: function(event,player,triggername){
				if (!player.storage._ny_fushiId) return false;
				if (player.storage._ny_fushiId[4] !== 4) return false;
				const info = get.info(event.card);
				if (!info || info.type != "trick" || info.notarget || (info.selectTarget && info.selectTarget != 1)) return false;
				return true;
			},
			async content (event,trigger,player) {
				if (!trigger.card.storage._useCardBaseChange) trigger.card.storage._useCardBaseChange = 0;
				trigger.card.storage._useCardBaseChange += 2;
				trigger.card.storage._ny_zhanFa_Firstpozhencuijian = true;
				await trigger.directHit.addArray(game.players);
			},
			subSkill:{
				effect:{
					trigger: {
					    player: "useCardAfter",
					},
					usable:1,
					popup:false,
					frequent: true,
					filter: function(event,player,triggername){
						if (!player.storage._ny_fushiId) return false;
						if (player.storage._ny_fushiId[4] !== 4) return false;
						if (_status.currentPhase != player) return false;
						return event.card.storage && event.card.storage._ny_zhanFa_Firstpozhencuijian == true;
					},
					async content (event,trigger,player) {
						if (!trigger.targets.length) return;
						const { result } = await player.chooseBool("是否对"+get.translation(trigger.targets)+"发动〖破阵摧坚〗：<br>"+get.translation("_ny_zhanFa_Firstpozhencuijian_info")).set("ai", () => true);
						if (!result.bool) return;
						let num = 0;
						for (let i of trigger.targets) {
							let handCards = i.getCards("h");
							if (handCards.length > 0) {
								let suits = [];
								for (let j of handCards) {
								    suits.add(get.suit(j));
								}
								let suitDiscard = suits[Math.floor(Math.random() * suits.length)];
								let cards = handCards.filter(card => get.suit(card) == suitDiscard);
								await i.modedDiscard(cards);
								num += i.countCards('h');
							}
						}
						if (num > player.countCards('h')) {
							for (let i of trigger.targets) {
								let handCards = i.getCards("h");
								if (handCards.length > 0) {
									let suits = [];
									for (let j of handCards) {
									    suits.add(get.suit(j));
									}
									let suitDiscard = suits[Math.floor(Math.random() * suits.length)];
									let cards = handCards.filter(card => get.suit(card) == suitDiscard);
									await i.modedDiscard(cards);
								}
							}
						}
						trigger.card.storage._ny_zhanFa_Firstpozhencuijian = false;
					},
					priority: 1145,
				},
			},
			priority: 1145,
		}
		lib.skill._ny_zhanFa_feiyangbahu = {//id5
			mod: {
			    cardUsable(card, player, num) {
			        if (card.name == "sha") return num + player.countMark('_ny_zhanFa_feiyangbahu');
			    },
			},
			marktext:"飞",
			intro:{
				name:"飞扬跋扈",
				content:"你使用【杀】的次数+#",
			},
			trigger: {
			    player: ["phaseJudgeBegin","phaseUseBegin"],
			},
			popup:false,
			frequent: true,
			filter: function(event,player,triggername){
				if (!player.storage._ny_fushiId) return false;
				if (player.storage._ny_fushiId[4] !== 5) return false;
				if (event.name =='phaseJudge') return player.countCards("j");
				else return true;
			},
			content:function(){
				if (trigger.name == 'phaseJudge') {
					let card = player.getCards('j').randomGet();
					player.modedDiscard(card);
				} else {
					player.draw(2);
					player.addMark('_ny_zhanFa_feiyangbahu',1);
					player.when({ player: "phaseUseEnd" })
					  .then(() => player.removeMark('_ny_zhanFa_feiyangbahu',1));
				}
			},
			priority: 1145,
		}
		lib.skill._ny_zhanFa_leitingnuhou = {//id6
			trigger: {
			    player: ["phaseZhunbeiBegin"],
			},
			popup:false,
			frequent: true,
			filter: function(event,player,triggername){
				if (!player.storage._ny_fushiId) return false;
				if (player.storage._ny_fushiId[4] !== 6) return false;
				return true;
			},
			async content(event,trigger,player) {
				let { result } = await player.chooseTarget(1)
		            .set("filterTarget", function (card,player, target) {
						if (player == target) return false;
						if (!target.hasSkill('ny_podan')) return true;
						let cards  = target.getCards("he");
						for (let i of cards) {
						    let type = get.type2(i);
						    if (type == "equip") return true;
						}
					})
		            .set("prompt", get.prompt("_ny_zhanFa_leitingnuhou"))
		            .set("prompt2", get.prompt2("_ny_zhanFa_leitingnuhou"))
					.set("ai", target => function (target) {
						let num = -1 * get.attitude(_status.event.player, target);
						if (!target.hasSkill('ny_podan')) num * 2;
						if (num > 0) num += target.countCards("e");
						return num;
					});
				if (result.bool) {
					let target = result.targets[0];
					let cards = target.getCards("he").filter(function (card) {
					    return get.type(card) == "equip";
					});
					if (cards.length !== 1) {
						let card = cards.randomGet();
						cards = [cards.filter(c => c != card).randomGet()]
						cards.add(card);
					}
					target.modedDiscard(cards);
					target.addSkill('ny_podan');
					target.when({ player:"phaseEnd" })
						.then(() => player.removeSkill('ny_podan'));
				}
			},
			priority: 1145,
		}
		lib.skill._ny_zhanFa_gexuqipao = {//id7
			trigger: {
			    player: "dying",
			},
			popup:false,
			frequent: true,
			filter: function(event,player,triggername){
				if (!player.storage._ny_fushiId) return false;
				if (player.storage._ny_fushiId[4] !== 7) return false;
				return _status.currentPhase != player;
			},
			async content(event,trigger,player) {
				player.draw(3);
				if (player.storage._ny_zhanFa_gexuqipao != true) {
					let { result } = await player.chooseToDiscard()
						.set("position", "he")
						.set("selectCard", 1)
						.set("filterCard", function (card) {
							return get.suit(card) == 'heart';
						})
						.set("prompt", get.prompt("_ny_zhanFa_leitingnuhou"))
						.set("prompt2", "是否弃置一张♥牌并令本回合其他角色对你使用的黑色伤害牌无效")
						.set("ai", (card) => {
							if (card.name == 'tao') return -1;
							return 6 - get.value(card);
						});
					if (result.bool) {
						player.storage._ny_zhanFa_gexuqipao = true;
						player.when({ global:"roundEnd" })
							.then(() => player.storage._ny_zhanFa_gexuqipao = false);
						player.storage._ny_zhanFa_gexuqipao_effect = true;
						player.when({ global: "phaseEnd" })
							.then(() => player.storage._ny_zhanFa_gexuqipao_effect = false);
					}
				}
			},
			priority: 1145,
			subSkill:{
				effect:{
					trigger: {
					    target: "useCardToTarget",
					},
					popup:false,
					forced: true,
					firstDo: true,
					filter: function(event,player,triggername){
						if (!player.storage._ny_fushiId) return false;
						if (player.storage._ny_fushiId[4] !== 7) return false;
						if (player.storage._ny_zhanFa_gexuqipao_effect != true) return false;
						if (get.color(event.card) != "black") return false;
						if (!get.tag(event.card, "damage")) return false;
						return event.player != player;
					},
					content:function() {
						trigger.excluded.add(player);
					},
					priority: 1145,
				},
			},
		}
		lib.skill._ny_zhanFa_dandadudou = {//id8
			trigger:{
				player:"phaseBegin",
			},
			popup:false,
			frequent: true,
			filter: function(event,player,triggername){
				if (!player.storage._ny_fushiId) return false;
				if (player.storage._ny_fushiId[4] !== 8) return false;
				return true;
			},
			content:function (){
				player.draw(2);
				if (game.players.length <= 2) {
					player.addMark('_ny_zhanFa_dandadudou_effect');
					player.when({ player:"phaseEnd" })
						.then(() => player.removeMark('_ny_zhanFa_dandadudou_effect'));
				}
			},
			priority: 1145,
			subSkill:{
				effect:{
					marktext:"单",
					intro: {
						nocount:true,
						name:"单打独斗",
					    content: "所有角色造成或受到的伤害+1",
					},
					popup:false,
					forced: true,
					firstDo: true,
					trigger: {
					    global: ["damageBegin3","damageBegin1"],
					},
					filter: function(event,player,triggername){
						if (!player.storage._ny_fushiId) return false;
						if (player.storage._ny_fushiId[4] !== 8) return false;
						return player.hasMark('_ny_zhanFa_dandadudou_effect');
					},
					content:function (){
						trigger.num ++;
					},
				},
			},
		}
		lib.skill._ny_zhanFa_cuichengbazhai = {//id9
			trigger: {
			    player: "useCardToPlayered",
			},
			popup:false,
			frequent: false,
			filter: function(event,player,triggername){
				if (!player.storage._ny_fushiId) return false;
				if (player.storage._ny_fushiId[4] !== 9) return false;
				return event.card.name == "sha";
			},
			async content(event,trigger,player) {
				trigger.getParent().baseDamage++;
				await trigger.getParent().directHit.addArray(game.players);
				if (trigger.target.storage._ny_zhanFa_cuichengbazhai !== true) {
					trigger.target.storage._ny_zhanFa_cuichengbazhai = true;
					trigger.target.when({global:'phaseEnd'})
						.then(() => player.storage._ny_zhanFa_cuichengbazhai = false);
					let cards = trigger.target.getCards("h");
					if (cards.length > 0 && trigger.getParent().baseDamage > 0) {
						if (cards.length > trigger.getParent().baseDamage * 2) cards = cards.randomGets(trigger.getParent().baseDamage * 2);
						await lib.skill._ny_cuihui.cuihuiCards(trigger.target, cards);
					}
				}
			},
			priority: 1145,
		}
		lib.skill._ny_zhanFa_longzhenghudou = {//id10
			mod: {
			    cardEnabled2(card,player) {
			        if (player.hasMark("_ny_zhanFa_longzhenghudou")) return false;
			    },
			},
			marktext:'罚',
			intro:{
				nocount:true,
				name:'龙争虎斗',
				content:'你无法使用或打出牌或因受到伤害而获得' + zhonghuiFunction.poptipLink("怒气", null, null, true) + '直至你的回合结束',
			},
			trigger: {
			    player: "compare",
			    target: "compare",
			},
			popup:false,
			frequent: false,
			filter: function(event, player) {
				if (!player.storage._ny_fushiId) return false;
				if (player.storage._ny_fushiId[4] !== 10) return false;
			    if (event.player == player) {
			        return !event.iwhile;
			    } else {
			        return true;
			    }
			},
			content: function() {
			    game.log(player, "拼点牌点数视为", "#yK");
			    if (player == trigger.player && get.type(trigger.card1) == "equip") {
			        trigger.num1 = 13;
					player.storage._ny_zhanFa_longzhenghudou_target = trigger.target;
			    } else if (player != trigger.player && get.type(trigger.card1) == "equip") {
			        trigger.num2 = 13;
					player.storage._ny_zhanFa_longzhenghudou_target = trigger.player;
			    }
				player.when({player:"chooseToCompareAfter"})
					.then(() => {
						player.chooseBool("是否令"+get.translation(player.storage._ny_zhanFa_longzhenghudou_target)+"无法使用或打出牌且受伤不获得" + zhonghuiFunction.poptipLink("怒气", null, null, true) + "直至其回合结束")
							.set("ai",() => {
								const player = _status.event.player;
								return -1 * get.attitude(player, player.storage._ny_zhanFa_longzhenghudou_target)
							});
					})
					.then(() => {
						if (result.bool) {
							let tar = player.storage._ny_zhanFa_longzhenghudou_target;
							tar.addMark("_ny_zhanFa_longzhenghudou");
							tar.when({player:'phaseEnd'})
								.then(() => {
									player.removeMark("_ny_zhanFa_longzhenghudou")
									player.unmarkSkill('_ny_zhanFa_longzhenghudou');
									player.updateMarks();
								});
						}
					});
			},
			priority: 1145,
		}
		lib.skill._ny_zhanFa_yanxingjunfa = {//id11
			marktext:"刑",
			intro:{
				name:'严刑峻法',
				content:'你下次受到的伤害+$',
			},
			trigger: {
			    source: "dying",
			},
			popup:false,
			frequent: true,
			filter: function(event, player) {
				if (!player.storage._ny_fushiId) return false;
				if (player.storage._ny_fushiId[4] !== 11) return false;
			    return true;
			},
			async content (event,trigger,player) {
				await lib.skill._ny_getNuqi.addNuQi(player,1);
				let { result } = await player.chooseBool("是否令"+get.translation(trigger.player)+"选择一项：1.翻面；2.失去1点" + zhonghuiFunction.poptipLink("怒气", null, null, true) + "且下次受到伤害+1")
					.set("target", trigger.player)
					.set("ai",() => {
						return -1 * get.attitude(_status.event.player,_status.event.target);
					});
				if (result.bool) {
					const choiceList = ["翻面","失去1点" + zhonghuiFunction.poptipLink("怒气", null, null, true) + "且下次受到伤害+1"];
					const choices = ["选项一","选项二"];
					if (!trigger.player.storage._ny_nuqi) {
						choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + "</span>";
						choices.remove(choices[1]);
					}
					let { result } = await trigger.player.chooseControl()
						.set("controls",choices)
						.set("choiceList",choiceList)
						.set("ai",() => _status.event.player.storage._ny_nuqi > 0 ? "选项二" : "选项一")
						.set("prompt","〖龙争虎斗〗：请选择以下一项执行");
					if (result.control == "选项一") {
						await trigger.player.turnOver();
					} else if (result.control == "选项二") {
						await lib.skill._ny_getNuqi.loseNuQi(trigger.player,1);
						trigger.player.addMark("_ny_zhanFa_yanxingjunfa");
						trigger.player.when({player:"damageBegin3"})
							.then(() => {
								trigger.num ++;
								player.removeMark("_ny_zhanFa_yanxingjunfa",1);
								if (!player.hasMark("_ny_zhanFa_yanxingjunfa")) {
									player.unmarkSkill('_ny_zhanFa_yanxingjunfa');
									player.updateMarks();
								}
							});
					}
				}
			},
			priority: 1145,
		}
		lib.skill._ny_zhanFa_libingmoma = {//id12
			marktext:"马",
			intro:{
				name:'厉兵秣马',
				content:'其他角色计算与你的距离+$直至本轮结束',
			},
			mod: {
			    globalTo(from, to, current) {
			        if (to.hasMark("_ny_zhanFa_libingmoma")) {
			            return current + to.countMark("_ny_zhanFa_libingmoma");
			        }
			    }, 
			},
			trigger:{
				global:"roundStart",
			},
			popup:false,
			frequent: true,
			filter: function(event, player) {
				if (!player.storage._ny_fushiId) return false;
				if (player.storage._ny_fushiId[4] !== 12) return false;
			    return true;
			},
			async content(event,trigger,player) {
				let list = [],
				    shown = [],
					num = game.countPlayer() - 1;
				if (num <= 0) return;
				let piles = ["cardPile", "discardPile"];
				for (let pile of piles) {
					//zhonghuiFunction定义在了precontent.js里面，要抄记得把定义也抄过去
					let p = zhonghuiFunction.randomPile(ui[pile].childNodes);
				    for (let i = 0; i < ui[pile].childNodes.length; i++) {
				        let card = p[i];
				        let type = get.type(card);
				        if (!list.includes(card) && type == "equip") {
				            list.push(card);
				            if (pile == "discardPile") shown.push(card);
				            if (list.length >= num) break;
				        }
				    }
				    if (list.length >= num) break;
				}
				if (list.length) {
				    var next = await player.gain(list)
						.set("shown_cards",shown)
						.set("animate", function (event) {
						    var player = event.player,
						        cards = event.cards,
						        shown = event.shown_cards;
						    if (shown.length < num) {
						        num = num - shown.length;
						        player.$draw(num);
						        game.log(player, "从牌堆获得了", get.cnNumber(num), "张装备牌");
						    }
						    if (shown.length > 0) {
						        player.$gain2(shown, false);
						        game.log(player, "从弃牌堆获得了", shown);
						    }
						    return 500;
						});
				}
				player.addMark("_ny_zhanFa_libingmoma",num);
				player.when({global:"roundEnd"})
					.then(() => {
						player.removeMark("_ny_zhanFa_libingmoma",Infinity);
						player.unmarkSkill('_ny_zhanFa_yanxingjunfa');
						player.updateMarks();
					});
			},
			priority: 1145,
		}
		lib.skill._ny_zhanFa_yetandiying = {//id13
			marktext:"夜",
			intro:{
				name:'夜探敌营',
				nocount:true,
				content: function (storage, player) {
					if (!player.storage._ny_zhanFa_yetandiying_players || player.storage._ny_zhanFa_yetandiying_players.length == 0) return;
					let str = '';
					for (let i of player.storage._ny_zhanFa_yetandiying_players) {
						if (str !== '') str += '、';
						str += get.translation(i);
					}
				    return "本回合内，当你对" + str + "造成大于1点的伤害时，此伤害-1；";
				},
			},
			trigger:{
				global:"phaseZhunbeiBegin",
			},
			filter: function(event,player){
				if (!player.storage._ny_fushiId) return false;
				if (player.storage._ny_fushiId[4] !== 13) return false;
				return event.player !== player && event.player.countCards('h') > 0;
			},
			popup:false,
			frequent: false,
			async content(event,trigger,player){
				await player.gainPlayerCard(trigger.player, "h", "visible",true);
				if (!trigger.player.storage._ny_zhanFa_yetandiying_players) trigger.player.storage._ny_zhanFa_yetandiying_players = [];
				trigger.player.storage._ny_zhanFa_yetandiying_players.push(player);
				trigger.player.addMark("_ny_zhanFa_yetandiying");
				trigger.player.when({player:"phaseEnd"})
					.then(() => {
						player.removeMark("_ny_zhanFa_yetandiying",Infinity);
						player.unmarkSkill('_ny_zhanFa_yetandiying');
						player.updateMarks();
						delete player.storage._ny_zhanFa_yetandiying_players;
					});
			},
			check(event,player) {
				return 1 - get.attitude(player,event.player);
			},
			priority: 1145,
			subSkill:{
				effect:{
					trigger:{
						source:"damageBegin1",
					},
					popup: false,
					forced: true,
					filter:function(event,player) {
						if (!player.storage._ny_zhanFa_yetandiying_players) return false;
						if (player.storage._ny_zhanFa_yetandiying_players.length == 0) return false;
						if (event.num <= 1) return false;
						return player.storage._ny_zhanFa_yetandiying_players.includes(event.player);
					},
					content:function(){
						trigger.num --;
					},
					priority: 1145,
				},
			},
			//game.me.damage(2,game.me.next)
		}
		lib.skill._ny_zhanFa_bixujishi = {//id14
			marktext:"固",
			intro:{
				name:'固本归元',
				nocount:true,
				content: function (storage, player) {
					if (!player.storage._ny_zhanFa_bixujishi_p && !player.storage._ny_zhanFa_bixujishi_n) return;
					let str = '';
					if (player.storage._ny_zhanFa_bixujishi_p > 0) str += "你造成伤害时，此伤害+" + String(player.storage._ny_zhanFa_bixujishi_p) + "<br>";
					if (player.storage._ny_zhanFa_bixujishi_n > 0) str += "你失去体力时，数值-" + String(player.storage._ny_zhanFa_bixujishi_n) + "<br>";
				    return str + "这些效果持续至你的回合结束";
				},
			},
			trigger:{
				player:["gainMaxHpAfter","loseMaxHpAfter"],
			},
			popup:false,
			frequent: true,
			filter: function(event,player){
				if (!player.storage._ny_fushiId) return false;
				if (player.storage._ny_fushiId[4] !== 14) return false;
				return true;
			},
			content: function(){
				player.draw(3 * trigger.num);
				player.addMark("_ny_zhanFa_bixujishi");
				if (trigger.name == "gainMaxHp") {
					if (!player.storage._ny_zhanFa_bixujishi_p) player.storage._ny_zhanFa_bixujishi_p = 0;
					player.storage._ny_zhanFa_bixujishi_p += trigger.num;
				} else {
					if (!player.storage._ny_zhanFa_bixujishi_n) player.storage._ny_zhanFa_bixujishi_n = 0;
					player.storage._ny_zhanFa_bixujishi_n += trigger.num;
				}
				player.when({player:"phaseEnd"})
					.then(() => {
						player.removeMark("_ny_zhanFa_bixujishi",Infinity);
						player.unmarkSkill('_ny_zhanFa_bixujishi');
						player.updateMarks();
						delete player.storage._ny_zhanFa_bixujishi_p;
						delete player.storage._ny_zhanFa_bixujishi_n;
					});
			},
			priority: 1145,
			subSkill:{
				p:{
					trigger:{
						source:"damageBegin1",
					},
					popup:false,
					forced:true,
					filter: function(event,player){
						return player.storage._ny_zhanFa_bixujishi_p > 0;
					},
					content:function() {
						trigger.num += player.storage._ny_zhanFa_bixujishi_p;
					},
					priority: 1145,
				},
				n:{
					trigger:{
						player:"loseHpBegin",
					},
					popup:false,
					forced:true,
					filter: function(event,player){
						return player.storage._ny_zhanFa_bixujishi_n > 0;
					},
					content:function() {
						trigger.num -= player.storage._ny_zhanFa_bixujishi_n;
						if (trigger.num <= 0) trigger.cancel();
					},
					priority: 1145,
				},
			},
		}
		lib.skill._ny_zhanFa_bainiaochaofeng = {//id15
			trigger:{
				player:"phaseUseBegin",
			},
			popup:false,
			frequent: true,
			filter: function(event,player){
				if (!player.storage._ny_fushiId) return false;
				if (player.storage._ny_fushiId[4] !== 15) return false;
				return true;
			},
			async content(event,trigger,player) {
				let list = [];
				for (let name of lib.inpile) {
					if (get.type(name) == 'trick') list.push(['锦囊','',name]);
				}
				if (list.length) {
				    let { result } = await player.chooseButton(["###百鸟朝凤###是否视为强化使用一张普通锦囊牌？", [list, "vcard"]])
				        .set("ai", (button) => _status.event.player.getUseValue(button.link[2]))
						.set("filterButton", (button, player) => player.hasUseTarget(button.link[2]));
					if (!result.bool) return;
					let card = {
						name: result.links[0][2],
						isCard: true,
						storage:{
							_ny_zhanFa_bainiaochaofeng: true,
							_useCardQianghua: true,
						},
					};
					await player.chooseUseTarget(card, true);
				} else return;
			},
			priority: 1145,
			subSkill:{
				effect:{
					trigger:{
						player:"useCardAfter",
					},
					popup:false,
					forced: true,
					filter: function(event,player){
						return event.card.storage._ny_zhanFa_bainiaochaofeng;
					},
					async content(event,trigger,player) {
						const targets = game.filterPlayer(current => current != player).sortBySeat(_status.currentPhase);
						if (!targets.length) return;
						player.line(targets);
						for (let target of targets) {
						    if (!target?.isIn()) {
						        continue;
						    }
							if (target.countCards("he") < 1) {
								await target.loseHp(2);
								continue;
							}
						    let { result } = await target.chooseCard("he", "将一张" + get.translation(trigger.card.name) + "交给" + get.translation(player) + "<br>否则，你失去2点体力",(card) => card.name == trigger.card.name)
								.set("ai", function (card) {
								    return 9 - get.value(card);
								});
							if (result.bool) {
								let cards = result.cards;
								//give不用await
								target.give(cards, player);
							} else await target.loseHp(2);
						}
					},
					priority: 1145,
				},
			},
		}
		lib.skill._ny_zhanFa_yihuajiemu = {//id16
			trigger:{
				global:"phaseUseBegin",
			},
			popup:false,
			frequent: true,
			filter: function(event,player){
				if (!player.storage._ny_fushiId) return false;
				if (player.storage._ny_fushiId[4] !== 16) return false;
				return event.player != player;
			},
			async content(event,trigger,player) {
				await player.draw();
				let { result } = await player.chooseCard({
				    selectCard: [1,5],
				    position: "h",
				    ai(card) {
				        return 10 - get.value(card);
				    },
				    prompt: "是否发动〖移花接木〗",
				    prompt2: "展示至多五张手牌，随机弃置" + get.translation(trigger.player) + "等量张手牌，其获得你展示的牌，然后，你摸两张牌",
				});
				if (result.bool && result.cards.length) {
					let num = result.cards.length;
					trigger.player.randomDiscard(num,"h");
					await trigger.player.gain(result.cards,"gain2");
					await player.draw(2);
				}
			},
			priority: 1145,
		}
		lib.skill._ny_zhanFa_zhengzhengrishang = {//id17
			marktext:"蒸",
			intro:{
				name:'蒸蒸日上',
				nocount:true,
				content: "本回合内，你使用黑/红色【杀】无次数/距离限制",
			},
			mod: {
			    cardUsable(card, player) {
					if (player.hasMark("_ny_zhanFa_zhengzhengrishang") && card.name == "sha" && get.color(card) == "black") {
						return Infinity;
					}
			    },
			    targetInRange(card, player, target) {
			        if (player.hasMark("_ny_zhanFa_zhengzhengrishang") && card.name == "sha" && get.color(card) == "red") {
			        	return true;
			        }
			    },
			},
			trigger:{
				player: "phaseZhunbeiBegin",
			},
			popup:false,
			frequent: true,
			filter: function(event,player){
				if (!player.storage._ny_fushiId) return false;
				if (player.storage._ny_fushiId[4] !== 17) return false;
				return true;
			},
			content: function() {
				if (!player.storage._ny_zhanFa_zhengzhengrishang_time) player.storage._ny_zhanFa_zhengzhengrishang_time = 0;
				player.storage._ny_zhanFa_zhengzhengrishang_time ++;
				player.draw(player.storage._ny_zhanFa_zhengzhengrishang_time);
				player.addMark("_ny_zhanFa_zhengzhengrishang");
				player.when({player:"phaseEnd"})
					.then(() => {
						player.removeMark("_ny_zhanFa_zhengzhengrishang",Infinity);
						player.unmarkSkill('_ny_zhanFa_zhengzhengrishang');
						player.updateMarks();
					})
			},
			priority: 1145,
			subSkill:{
				shaTime:{
					trigger:{
						player:"useCard",
					},
					popup:false,
					forced: true,
					filter: function(event,player) {
						if (!player.hasMark("_ny_zhanFa_zhengzhengrishang")) return false;
						return event.card.name == "sha" && ["black", "red"].includes(get.color(card));
					},
					content:function(){
						player.storage._ny_zhanFa_zhengzhengrishang_time++;
					},
					priority: 1145,
				},
			},
		}
		lib.skill._ny_zhanFa_Firsttongqiangtiebi = {//id18
			trigger:{
				global:"phaseBegin",
			},
			popup:false,
			frequent: true,
			filter: function(event,player){
				if (!player.storage._ny_fushiId) return false;
				if (player.storage._ny_fushiId[4] !== 18) return false;
				return true;
			},
			content:function(){
				player.changeHujia(4);
			},
			priority: 1145,
			subSkill:{
				loseHp:{
					trigger:{
						player:"loseHpBegin",
					},
					popup:false,
					forced: true,
					filter: function(event,player){
						if (!player.storage._ny_fushiId) return false;
						if (player.storage._ny_fushiId[4] !== 18) return false;
						return player.hujia > player.maxHp;
					},
					async content(event,trigger,player) {
						await player.changeHujia(-1);
						trigger.cancel();
					},
					priority: 1145,
				},
			},
		}
		lib.skill._ny_zhanFa_sheguoyouzui = {//id19
			marktext:"赦",
			intro:{
				name:'赦过宥罪',
				nocount:true,
				content: "你造成伤害时，此伤害-1直至你的回合结束",
			},
			trigger:{
				player:"phaseZhunbeiBegin",
			},
			popup:false,
			frequent: true,
			filter: function(event,player){
				if (!player.storage._ny_fushiId) return false;
				if (player.storage._ny_fushiId[4] !== 19) return false;
				return true;
			},
			async content(event,trigger,player) {
				let { result } = await player.chooseTarget(get.prompt2('_ny_zhanFa_sheguoyouzui')).set('ai', function (target) {
					var player = _status.event.player;
					let num = -1 * get.attitude(player, target);
					if (target.isDamaged()) num += (num > 0) ? -5 : (num < 0) ? 5 : 0;
					return num;
				});
				if (result.bool && result.targets.length) {
					let target = result.targets[0];
					await target.recover();
					await target.link(false);
					await target.turnOver(false);
					if (target.hasMark("_ny_yinni") && lib.config.extension_怒焰武将_yinniSet) {
						target.clearMark("_ny_yinni");
						target.unmarkSkill("_ny_yinni");
						target.updateMarks();
					}
					//target.storage._ny_second_yinni = false;
					target.addMark("_ny_zhanFa_sheguoyouzui");
					target.when({player:"phaseEnd"})
						.then(() => {
							player.removeMark("_ny_zhanFa_sheguoyouzui",Infinity);
							player.unmarkSkill('_ny_zhanFa_sheguoyouzui');
							player.updateMarks();
						})
				}
			},
			priority: 1145,
			subSkill:{
				effect:{
					trigger:{
						source:"damageBegin1",
					},
					filter:function(event,player) {
						return player.hasMark("_ny_zhanFa_sheguoyouzui");
					},
					content:function(){
						trigger.num --;
					},
					priority: 1145,
				},
			},
		}
		lib.skill._ny_zhanFa_yixinghuandou = {//id20
			trigger:{
				player:"phaseBegin",
			},
			popup:false,
			frequent: true,
			filter: function(event,player){
				if (!player.storage._ny_fushiId) return false;
				if (player.storage._ny_fushiId[4] !== 20) return false;
				return true;
			},
			async content(event,trigger,player) {
				//等人来做ai
				let { result } = await player.chooseTarget(get.prompt2('_ny_zhanFa_yixinghuandou'), 2)
					.set("filterTarget",(card,player,target) => target.countCards("h"));
				if (result.bool) {
					const target1 = result.targets[0];
					const target2 = result.targets[1];
					let hcards1 = target1.getCards("h");
					let hcards2 = target2.getCards("h");
					const choices = Array.from({ length: 7 }).map((_, i) => [i, get.cnNumber(i + 1, true)]);
					let next1 = await player.chooseButton(2, ['移行换斗：请选择你交换牌数和随机交换形式',
						'<div class="text center">交换牌数</div>',
						[choices, 'tdnodes'],
						'<div class="text center">交换形式</div>',
						[[["first","令两名目标角色随机交换等量张你选择数量的手牌"],["second","从两名目标角色的手牌中随机选取你选择牌数张牌，这些牌的拥有者将之交给另一名目标角色"]], 'tdnodes']
					])
						.set('filterButton', button => {
						    const link = button.link;
						    if (Boolean(ui.selected.buttons.length) !== (typeof link == 'number')) return false;
						    if (ui.selected.buttons?.length) {
						        if (ui.selected.buttons[0].link == 'first') return link < Math.min(hcards1.length,hcards2.length,7);
						        return link < Math.min(7,hcards1.length+hcards2.length);
						    }
						    return true;
						}).forResult();
					if (next1.links.length) {
						let num = next1.links[1] + 1;
						if (next1.links[0] == "first") {
							//zhonghuiFunction定义在了precontent.js里面，要抄记得把定义也抄过去
							let list1 = zhonghuiFunction.randomList(hcards1);
							let list2 = zhonghuiFunction.randomList(hcards2);
							await target1.swapHandcards(target2,list1.splice(0,num),list2.splice(0,num));
						} else {
							let res = zhonghuiFunction.randomTwoListAndChoose(hcards1,hcards2,num);
							await target1.swapHandcards(target2,res.list1,res.list2);
						}
					}
					let next2 = await player.chooseBool("是否令"+get.translation(target1)+"与"+get.translation(target2)+"交换技能符石").forResult();
					if (next2.bool) {
						if (!target1.storage._ny_fushiId && !target2.storage._ny_fushiId) return;
						let temp = target1.storage._ny_fushiId;
						target1.storage._ny_fushiId = target2.storage._ny_fushiId;
						target2.storage._ny_fushiId = temp;
						temp = target1.storage._ny_fushiTime;
						target1.storage._ny_fushiTime = target2.storage._ny_fushiTime;
						target2.storage._ny_fushiTime = temp;
						temp = target1.storage._ny_zhuanShuFuShiId;
						target1.storage._ny_zhuanShuFuShiId = target2.storage._ny_zhuanShuFuShiId;
						target2.storage._ny_zhuanShuFuShiId = temp;
						if (target1.storage._ny_fushiId !== undefined) {
							lib.skill._ny_getNuqi.localMark(target1,"_ny_getFuShi");
							game.addVideo("markSkill", target1, ["_ny_getFuShi"]);
						} else {
							target1.unmarkSkill("_ny_getFuShi");
							target1.updateMarks();
						}
						if (target2.storage._ny_fushiId !== undefined) {
							lib.skill._ny_getNuqi.localMark(target2,"_ny_getFuShi");
							game.addVideo("markSkill", target2, ["_ny_getFuShi"]);
						} else {
							target2.unmarkSkill("_ny_getFuShi");
							target2.updateMarks();
						}
					}
				}
			},
			priority: 1145,
		}
		lib.skill._ny_zhanFa_shehunduopo = {//id21
			//game.me.useCard(game.me.next,{name:"shunshou"})
			//game.me.useCard(game.me.next,{name:"shunshou",storage:{_useCardBaseChange:4}})
			trigger: {
			    player: "gainEnd",
			},
			popup:false,
			frequent: false,
			filter: function(event,player) {
				if (!player.storage._ny_fushiId) return false;
				if (player.storage._ny_fushiId[4] !== 21) return false;
				return event.source && event.source != player && event.getl(event.source).hs.length > 0;
			},
			content: async function(event, trigger, player) {
				if (trigger.source.storage._ny_nuqi > 0 && player.storage._ny_nuqi) {
					await lib.skill._ny_getNuqi.loseNuQi(trigger.source,1);
					await lib.skill._ny_getNuqi.addNuQi(player,1);
				}
				if (trigger.getl(trigger.source).hs.length > 3 && (player.storage._ny_zhanFa_shehunduopo !== true)) {
					player.storage._ny_zhanFa_shehunduopo = true;
					player.when({global:"phaseEnd"})
						.then(() => delete player.storage._ny_zhanFa_shehunduopo);
					trigger.source.addTempSkill('fengyin',{player:"phaseEnd"});
				}
			},
			priority: 1145,
		}
		lib.skill._ny_zhanFa_jiuhanzhanyong = {//id22
			trigger:{
				player:"phaseUseBegin",
			},
			popup:false,
			frequent: true,
			filter: function(event,player) {
				if (!player.storage._ny_fushiId) return false;
				if (player.storage._ny_fushiId[4] !== 22) return false;
				return true;
			},
			async content(event,trigger,player) {
				await player.chooseUseTarget("jiu",false,true);
				let list = [],
				    shown = [];
				let piles = ["cardPile", "discardPile"];
				for (let pile of piles) {
					//zhonghuiFunction定义在了precontent.js里面，要抄记得把定义也抄过去
					let p = zhonghuiFunction.randomPile(ui[pile].childNodes);
				    for (let i = 0; i < ui[pile].childNodes.length; i++) {
				        let card = p[i];
				        if (!list.some(i => i.name == card.name) && get.tag(card, "damage")) {
				            list.push(card);
				            if (pile == "discardPile") shown.push(card);
				        } else if (card.name == "sha" && !list.some(i => i.name == "sha" && i.nature == get.nature(card))) {
							list.push(card);
							if (pile == "discardPile") shown.push(card);
						}
				    }
				}
				if (list.length) {
				    var next = await player.gain(list)
						.set("shown_cards",shown)
						.set("animate", function (event) {
						    var player = event.player,
						        cards = event.cards,
						        shown = event.shown_cards,
								num = list.length;
						    if (shown.length < num) {
						        num = num - shown.length;
						        player.$draw(num);
						        game.log(player, "从牌堆获得了", get.cnNumber(num), "张伤害牌");
						    }
						    if (shown.length > 0) {
						        player.$gain2(shown, false);
						        game.log(player, "从弃牌堆获得了", shown);
						    }
						    return 500;
						});
				}
			},
			priority: 1145,
		}
		lib.skill._ny_zhanFa_gubenguiyuan = {//id23
			marktext:"固",
			intro:{
				name:"固本归元",
				intro:"你造成的属性伤害+1直至本回合结束",
			},
			trigger:{
				player:"damageEnd",
			},
			popup:false,
			frequent: true,
			filter: function(event,player) {
				if (!player.storage._ny_fushiId) return false;
				if (player.storage._ny_fushiId[4] !== 23) return false;
				return event.nature;
			},
			content:function(){
				if (player.countCards("h") < player.maxHp) player.draw();
				player.addMark("_ny_zhanFa_gubenguiyuan");
				player.when({global:"phaseEnd"})
					.then(() => {
						player.removeMark("_ny_zhanFa_gubenguiyuan",Infinity);
						player.unmarkSkill('_ny_zhanFa_gubenguiyuan');
						player.updateMarks();
					});
			},
			priority: 1145,
			subSkill:{
				effect:{
					trigger:{
						player:"damageBegin1",
					},
					popup:false,
					forced: true,
					filter: function(event,player) {
						return event.nature && player.hasMark("_ny_zhanFa_gubenguiyuan");
					},
					content:function(){
						trigger.num++;
					},
					priority: 1145,
				},
			},
		}
		lib.skill._ny_zhanFa_pozhencuijian = {//id24
			trigger: {
			    player: "useCard",
			},
			popup:false,
			frequent: false,
			filter: function(event,player,triggername){
				if (!player.storage._ny_fushiId) return false;
				if (player.storage._ny_fushiId[4] !== 24) return false;
				const info = get.info(event.card);
				if (!info || info.type != "trick" || info.notarget || (info.selectTarget && info.selectTarget != 1)) return false;
				return true;
			},
			async content (event,trigger,player) {
				if (!trigger.card.storage._useCardBaseChange) trigger.card.storage._useCardBaseChange = 0;
				trigger.card.storage._useCardBaseChange += 2;
				trigger.card.storage._ny_zhanFa_pozhencuijian = true;
				await trigger.directHit.addArray(game.players);
			},
			subSkill:{
				effect:{
					trigger: {
					    player: "useCardAfter",
					},
					usable:1,
					popup:false,
					forced: true,
					filter: function(event,player,triggername){
						if (!player.storage._ny_fushiId) return false;
						if (player.storage._ny_fushiId[4] !== 24) return false;
						if (_status.currentPhase != player) return false;
						return event.card.storage && event.card.storage._ny_zhanFa_pozhencuijian == true;
					},
					async content (event,trigger,player) {
						if (!trigger.targets.length) return;
						const { result } = await player.chooseBool("是否对"+get.translation(trigger.targets)+"发动〖破阵摧坚〗：<br>"+get.translation("_ny_zhanFa_pozhencuijian_info")).set("ai", () => true);
						if (!result.bool) return;
						for (i of trigger.targets) {
							let cards = i.getCards("h");
							if (cards.length) {
								cards = cards.randomGets(Math.ceil(cards.length / 2));
								await lib.skill._ny_cuihui.cuihuiCards(i, cards);
							}
						}
						trigger.card.storage._ny_zhanFa_pozhencuijian = false;
					},
					priority: 1145,
				},
			},
			priority: 1145,
		}
		lib.skill._ny_zhanFa_zhulianbihe = {//id25
			trigger:{
				player:"useCard",
			},
			popup:false,
			frequent: true,
			filter: function(event,player,triggername){
				if (!player.storage._ny_fushiId) return false;
				if (player.storage._ny_fushiId[4] !== 25) return false;
				return get.is.convertedCard(event.card) && event.card.number == player.storage._ny_zhanFa_zhulianbihe;
			},
			async content(event,trigger,player) {
				let gaincard,shown;
				let piles = ["cardPile", "discardPile"];
				for (let pile of piles) {
					let p = zhonghuiFunction.randomPile(ui[pile].childNodes);
				    for (let i = 0; i < ui[pile].childNodes.length; i++) {
				        let card = p[i];
						if (gaincard !== undefined) break;
				        if (card.number == trigger.card.number + 1) {
				            gaincard = card;
				            if (pile == "discardPile") shown = card;
							break;
				        }
				    }
				}
				if (gaincard !== undefined) {
				    var next = await player.gain(gaincard)
						.set("shown_cards",shown)
						.set("animate", function (event) {
						    var player = event.player,
						        shown = event.shown_cards;
						    if (shown == undefined) {
						        player.$draw();
						        game.log(player, "从牌堆获得了1张点数为"+get.strNumber(player.storage._ny_zhanFa_zhulianbihe + 1)+"的牌");
						    } else {
								player.$gain2(shown, false);
								game.log(player, "从弃牌堆获得了", shown);
							}
						    return 500;
						});
				}
				if (get.tag(trigger.card, "damage")) await trigger.directHit.addArray(game.players);
			},
			priority: 1145,
			subSkill:{
				record:{
					marktext:"珠",
					intro:{
						name:"珠联璧合",
						nocount:true,
						content: function (storage, player) {
							if (player.storage._ny_zhanFa_zhulianbihe == undefined) return;
						    return "你使用的上一张牌的点数为"+get.strNumber(player.storage._ny_zhanFa_zhulianbihe);
						},
					},
					trigger:{
						player:"useCardAfter",
					},
					popup:false,
					forced: true,
					filter: function(event,player,triggername){
						if (!player.storage._ny_fushiId) return false;
						if (player.storage._ny_fushiId[4] !== 25) return false;
						return true;
					},
					content:function(){
						if (!player.hasMark("_ny_zhanFa_zhulianbihe_record")) player.addMark("_ny_zhanFa_zhulianbihe_record");
						player.storage._ny_zhanFa_zhulianbihe = trigger.card.number;
					},
					priority: 1145141919810,
				},
			},
		}
		//专属符石
		lib.skill._ny_zhuanShu_Firstqinglongshi = {//初版青龙石dying id1
			trigger:{
				global:"dying",
			},
			popup:false,
			frequent: false,
			filter: function(event,player) {
				if (!event.player.storage._ny_nuqi) return false;
				let id = player.storage._ny_zhuanShuFuShiId?.find(id => id == "_ny_zhuanShu_Firstqinglongshi");
				if (id) {
					event.zhuanShuFuShiId1 = player.storage._ny_zhuanShuFuShiId.indexOf(id);
					return player.storage._ny_fushiTime[4+event.zhuanShuFuShiId1] > 0;
				} else return false;
			},
			async content(event,trigger,player) {
				player.storage._ny_fushiTime[4+trigger.zhuanShuFuShiId1]--;
				let num = trigger.player.storage._ny_nuqi;
				trigger.player.recoverTo(num);
				if (trigger.player != player) await player.damage(num,"nosource");
				await lib.skill._ny_getNuqi.loseNuQi(trigger.player,num);
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
				let id = player.storage._ny_zhuanShuFuShiId?.find(id => id == "_ny_zhuanShu_qinglongshi");
				if (id) {
					event.zhuanShuFuShiId2 = player.storage._ny_zhuanShuFuShiId.indexOf(id);
					return player.storage._ny_fushiTime[4+event.zhuanShuFuShiId2] > 0;
				} else return false;
			},
			async content(event,trigger,player) {
				player.storage._ny_fushiTime[4+trigger.zhuanShuFuShiId2]--;
				trigger.player.recoverTo();
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
				let id = player.storage._ny_zhuanShuFuShiId?.find(id => id == "_ny_zhuanShu_bianhua");
				if (id) {
					event.zhuanShuFuShiId1 = player.storage._ny_zhuanShuFuShiId.indexOf(id);
					return player.storage._ny_fushiTime[4+event.zhuanShuFuShiId1] > 0;
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
					player.storage._ny_fushiTime[4+trigger.zhuanShuFuShiId1]--;
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
				let id = player.storage._ny_zhuanShuFuShiId?.find(id => id == "_ny_zhuanShu_wushaungzhanji");
				if (id) {
					event.zhuanShuFuShiId1 = player.storage._ny_zhuanShuFuShiId.indexOf(id);
					return player.storage._ny_fushiTime[4+event.zhuanShuFuShiId1] > 0;
				} else return false;
			},
			async content(event,trigger,player) {
				player.storage._ny_fushiTime[4+trigger.zhuanShuFuShiId1]--;
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
				let id = player.storage._ny_zhuanShuFuShiId?.find(id => id == "_ny_zhuanShu_Firstyinyueqiang");
				if (id) {
					event.zhuanShuFuShiId1 = player.storage._ny_zhuanShuFuShiId.indexOf(id);
					return player.storage._ny_fushiTime[4+event.zhuanShuFuShiId1] > 0 && event.getl(player)?.cards2?.some(card => card.name != "sha");
				} else return false;
			},
			async content(event,trigger,player) {
				for (let i of trigger.getl(player).cards2) {
					if (i.name == "sha") continue;
					if (player.storage._ny_fushiTime[4+trigger.zhuanShuFuShiId1] == 0) break;
					let result = await player.chooseUseTarget("###是否发动专属符石〖银月枪〗？###视为使用一张【杀】", { name: "sha" }).forResult();
					if (result.bool) player.storage._ny_fushiTime[4+trigger.zhuanShuFuShiId1]--;
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
				let id = player.storage._ny_zhuanShuFuShiId?.find(id => id == "_ny_zhuanShu_Firstfenghuashan");
				if (id) {
					event.zhuanShuFuShiId1 = player.storage._ny_zhuanShuFuShiId.indexOf(id);
					return player.storage._ny_fushiTime[4+event.zhuanShuFuShiId1] > 0 && event.source;
				} else return false;
			},
			async content(event, trigger, player) {
				let result = await player.chooseCard("he",[1,3])
					.set("prompt", get.prompt("_ny_zhuanShu_Firstfenghuashan"))
					.set("prompt2", "弃置至多三张牌并令" + get.translation(trigger.source) + "失去等量点体力")
					.forResult();
				if (result.bool) {
					player.storage._ny_fushiTime[4+trigger.zhuanShuFuShiId1]--;
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
				let id = player.storage._ny_zhuanShuFuShiId?.find(id => id == "_ny_zhuanShu_fenghuashan");
				if (id) {
					event.zhuanShuFuShiId1 = player.storage._ny_zhuanShuFuShiId.indexOf(id);
					return player.storage._ny_fushiTime[4+event.zhuanShuFuShiId1] > 0 && event.num < 0;
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
					player.storage._ny_fushiTime[4+trigger.zhuanShuFuShiId1]--;
					await player.modedDiscard(result.cards);
					await result.targets[0]?.loseHp(result.cards.length);
				}
			},
			priority: 1145,
		}
		lib.skill._ny_zhuanShu_liaoyuan = {//燎原•神 useCardToPlayered id1
			mod: {
				attackRange:function (player, num) {
					if (player.storage._ny_zhuanShuFuShiId?.some(id => id == "_ny_zhuanShu_liaoyuan")) {
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
				let id = player.storage._ny_zhuanShuFuShiId?.find(id => id == "_ny_zhuanShu_liaoyuan");
				if (id) {
					event.zhuanShuFuShiId1 = player.storage._ny_zhuanShuFuShiId.indexOf(id);
					return player.storage._ny_fushiTime[4+event.zhuanShuFuShiId1] > 0 && event.targets?.length && get.color(event.card) == "red" && get.tag(event.card, "damage");
				} else return false;
			},
			async content(event, trigger, player) {
				player.storage._ny_fushiTime[4+trigger.zhuanShuFuShiId1]--;
				let num = trigger.targets.length + 1;
				await player.draw(num);
				await lib.skill._ny_getNuqi.addNuQi(player, num);
			},
			priority: 1145,
		}
		lib.skill._ny_zhuanShu_Firstchixue = {//初版赤血•神 damage id114
			mod: {
				attackRange:function (player, num) {
					if (player.storage._ny_zhuanShuFuShiId?.some(id => id == "_ny_zhuanShu_Firstchixue")) {
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
				let id = player.storage._ny_zhuanShuFuShiId?.find(id => id == "_ny_zhuanShu_Firstchixue");
				if (id) {
					event.zhuanShuFuShiId114 = player.storage._ny_zhuanShuFuShiId.indexOf(id);
					return player.storage._ny_fushiTime[4+event.zhuanShuFuShiId114] > 0 && event.num > 0;
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
					player.storage._ny_fushiTime[4+trigger.zhuanShuFuShiId114]--;
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
					if (player.storage._ny_zhuanShuFuShiId?.some(id => id == "_ny_zhuanShu_chixue")) {
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
				let id = player.storage._ny_zhuanShuFuShiId?.find(id => id == "_ny_zhuanShu_chixue");
				if (id) {
					event.zhuanShuFuShiId113 = player.storage._ny_zhuanShuFuShiId.indexOf(id);
					return player.storage._ny_fushiTime[4+event.zhuanShuFuShiId113] > 0;
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
					player.storage._ny_fushiTime[4+trigger.zhuanShuFuShiId113]--;
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
				let num = player.storage._ny_nuqi ?? 0;
				let num2 = event.player.getHistory("skipped")?.length ?? 0;
				let id = player.storage._ny_zhuanShuFuShiId?.find(id => id == "_ny_zhuanShu_yongan");
				if (id) {
					event.zhuanShuFuShiId1 = player.storage._ny_zhuanShuFuShiId.indexOf(id);
					return player.storage._ny_fushiTime[4+event.zhuanShuFuShiId1] > 0 && num == (event.num - num2);
				} else return false;
			},
			content() {
				const phaseName = trigger.phaseList[trigger.num].replace(/\|.+/, '');
				player.storage._ny_fushiTime[4+trigger.zhuanShuFuShiId1]--;
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
				let id = player.storage._ny_zhuanShuFuShiId?.find(id => id == "_ny_zhuanShu_polu");
				if (id) {
					event.zhuanShuFuShiId2 = player.storage._ny_zhuanShuFuShiId.indexOf(id);
					return player.storage._ny_fushiTime[4+event.zhuanShuFuShiId2] > 0;
				} else return false;
			},
			async content(event, trigger, player) {
				player.storage._ny_fushiTime[4+trigger.zhuanShuFuShiId2]--;
				trigger.card.storage ??= {};
				let result = await player.chooseBool("是否令此【决斗】无视防具且无法被响应<br>若选择否，则此【决斗】无视防御符石且造成的伤害视为体力流失")
					.set("ai", () => true).forResult();
				if (result.bool) {
					await trigger.getParent().directHit.addArray(game.players);
					trigger.card.storage._ny_zhuanShu_polu1 = true;
				} else {
					trigger.card.storage._ny_zhuanShu_polu2 = true;
					trigger.target.addMark("_ny_noneFangYuFushi");
					trigger.target.when({global: "useCardAfter"})
						.filter(evt => evt?.card?.storage?._ny_zhuanShu_polu2)
						.then(() => {
							player.removeMark("_ny_noneFangYuFushi", Infinity);
							player.unmarkSkill("_ny_noneFangYuFushi");
							player.updateMarks();
						});
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
				let id = player.storage._ny_zhuanShuFuShiId?.find(id => id == "_ny_zhuanShu_jianbi");
				if (id) {
					event.zhuanShuFuShiId1 = player.storage._ny_zhuanShuFuShiId.indexOf(id);
					return player.storage._ny_fushiTime[4+event.zhuanShuFuShiId1] > 0;
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
				player.storage._ny_fushiTime[4+trigger.zhuanShuFuShiId2]--;
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
					if (player.storage._ny_zhuanShuFuShiId?.some(id => id == "_ny_zhuanShu_Firstgudingdao")) {
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
				let id = player.storage._ny_zhuanShuFuShiId?.find(id => id == "_ny_zhuanShu_Firstgudingdao");
				if (id) {
					event.zhuanShuFuShiId1 = player.storage._ny_zhuanShuFuShiId.indexOf(id);
					return player.storage._ny_fushiTime[4+event.zhuanShuFuShiId1] > 0;
				} else return false;
			},
			async content(event, trigger, player) {
				player.storage._ny_fushiTime[4+trigger.zhuanShuFuShiId1]--;
				for (let i of trigger.targets) {
					trigger.card.storage._ny_zhuanShu_Firstgudingdao ??= 0;
					trigger.card.storage._ny_zhuanShu_Firstgudingdao++;
					i.addMark("_ny_noneFangYuFushi");
					i.when({global: "useCardAfter"})
						.filter(evt => evt?.card?.storage?._ny_zhuanShu_Firstgudingdao)
						.then(() => {
							player.removeMark("_ny_noneFangYuFushi", Infinity);
							player.unmarkSkill("_ny_noneFangYuFushi");
							player.updateMarks();
						});
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
					if (player.storage._ny_zhuanShuFuShiId?.some(id => id == "_ny_zhuanShu_gudingdao")) {
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
				let id = player.storage._ny_zhuanShuFuShiId?.find(id => id == "_ny_zhuanShu_gudingdao");
				if (id) {
					event.zhuanShuFuShiId2 = player.storage._ny_zhuanShuFuShiId.indexOf(id);
					return player.storage._ny_fushiTime[4+event.zhuanShuFuShiId2] > 0;
				} else return false;
			},
			async content(event, trigger, player) {
				player.storage._ny_fushiTime[4+trigger.zhuanShuFuShiId2]--;
				for (let i of trigger.targets) {
					trigger.card.storage._ny_zhuanShu_gudingdao ??= 0;
					trigger.card.storage._ny_zhuanShu_gudingdao++;
					i.addMark("_ny_noneFangYuFushi");
					i.when({global: "useCardAfter"})
						.filter(evt => evt?.card?.storage?._ny_zhuanShu_gudingdao)
						.then(() => {
							player.removeMark("_ny_noneFangYuFushi", Infinity);
							player.unmarkSkill("_ny_noneFangYuFushi");
							player.updateMarks();
						});
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
				let id = player.storage._ny_zhuanShuFuShiId?.find(id => id == "_ny_zhuanShu_zhuisi");
				if (id) {
					event.zhuanShuFuShiId1 = player.storage._ny_zhuanShuFuShiId.indexOf(id);
					return player.storage._ny_fushiTime[4+event.zhuanShuFuShiId1] > 0;
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
					player.storage._ny_fushiTime[4+trigger.zhuanShuFuShiId1]--;
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
			    if (!player.storage._ny_fushiId) return false;
				if (!player.isDying()) return false;
			    let id = player.storage._ny_zhuanShuFuShiId?.find(id => id == "_ny_zhuanShu_luoying");
			    if (id) {
			    	id = player.storage._ny_zhuanShuFuShiId.indexOf(id);
			    	return player.storage._ny_fushiTime[4+id] > 0;
			    } else return false;
			},
			filterCard: function (card) {
				return get.color(card) == "black";
			},
			viewAsFilter: function (player) {
				if (!player.storage._ny_fushiId) return false;
				if (!player.isDying()) return false;
				let id = player.storage._ny_zhuanShuFuShiId?.find(id => id == "_ny_zhuanShu_luoying");
				if (id) {
					id = player.storage._ny_zhuanShuFuShiId.indexOf(id);
					return player.storage._ny_fushiTime[4+id] > 0 && player.countCards("he", { color: "black" }) > 0;
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
				let id = player.storage._ny_zhuanShuFuShiId?.find(id => id == "_ny_zhuanShu_luoying");
				id = player.storage._ny_zhuanShuFuShiId.indexOf(id);
				player.storage._ny_fushiTime[4+id]--;
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
						let id = player.storage._ny_zhuanShuFuShiId?.find(id => id == "_ny_zhuanShu_luoying");
						if (id) {
							id = player.storage._ny_zhuanShuFuShiId.indexOf(id);
							return player.storage._ny_fushiTime[4+id] > 0;
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
				if (!player.storage._ny_zhuanShuFuShiId?.some(id => id == "_ny_zhuanShu_fengqiqin")) return false;
				let id = player.storage._ny_zhuanShuFuShiId.find(id => id == "_ny_zhuanShu_fengqiqin");
				id = player.storage._ny_zhuanShuFuShiId.indexOf(id);
				return player.storage._ny_fushiTime[4 + id] > 0 && event.num < 0;
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
					let id = player.storage._ny_zhuanShuFuShiId.find(id => id == "_ny_zhuanShu_fengqiqin");
					id = player.storage._ny_zhuanShuFuShiId.indexOf(id);
					player.storage._ny_fushiTime[4 + id]--;
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
				if (!player.storage._ny_zhuanShuFuShiId?.some(id => id == "_ny_zhuanShu_keqingdi")) return false;
				let id = player.storage._ny_zhuanShuFuShiId.find(id => id == "_ny_zhuanShu_keqingdi");
				id = player.storage._ny_zhuanShuFuShiId.indexOf(id);
				if (player.storage._ny_fushiTime[4 + id] <= 0) return false;
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
				let id = player.storage._ny_zhuanShuFuShiId.find(id => id == "_ny_zhuanShu_keqingdi");
				id = player.storage._ny_zhuanShuFuShiId.indexOf(id);
				player.storage._ny_fushiTime[4 + id]--;
				if (player.storage.nuyan_jiaowei_used) {
					trigger.cancel();
					trigger.player.addTempSkill("nuyan_wangji", { player: "phaseEnd" });
					return;
				}
				event.targets[0].addTempSkill("nuyan_wangyou", { player: "phaseBegin" });
			},
		}
	});
	//生成概念解释 纯💩山
	//数字代表层数，要加层数记得zhonghuiFunction.noprDescription也要加
	lib.arenaReady.push(() => {
		zhonghuiFunction.tipMap1 = [
			["天焰石", "你的初始体力值和体力上限+1"],
			["怒气上限", "怒焰武将默认拥有2点怒气上限，怒气值增加后，若怒气值超过怒气上限，则将怒气值修改为怒气上限"],
			["强化你使用的牌", `强化后的牌效果+1<br>特殊强化：<br>I.【铁索连环】强化后额外指定一个目标<br>Ⅱ.【怒发冲冠】/【釜底抽薪】强化后数值+2<br>Ⅲ.【闪】强化后摸一张牌<br>Ⅳ.【无懈可击】强化后获得目标锦囊牌<br>V.【乐不思蜀】强化后目标额外跳过摸牌阶段`],
		];
		let list = ["演奏调式"],
			str = "";
		for (let i of lib.skill._ny_yanzoudiaoshi.list) {
			str += `<br>〖${get.translation("nuyan" + i)}〗：${get.translation("nuyan" + i + "_info")}`;
		}
		str = str.slice(2);
		list.push(str);
		zhonghuiFunction.tipMap1.push(list);
		if (typeof game.addPoptip == "function") {
			game.addPoptip(zhonghuiFunction.tipMap1);
		}
		zhonghuiFunction.tipMap2 = [
			["天嗔石", `你的初始${zhonghuiFunction.poptipLink("怒气上限", null, null, true)}+1`],
			["怒气", `怒焰武将开局拥有0点怒气值和2点${zhonghuiFunction.poptipLink("怒气上限", null, null, true)}<br>每受到1点伤害后便获得1点怒气<br>怒焰武将在使用强化牌列表内的牌时可以选择消耗1点怒气${zhonghuiFunction.poptipLink("强化你使用的牌", null, null, true)}`],
		];
		if (typeof game.addPoptip == "function") {
			game.addPoptip(zhonghuiFunction.tipMap2);
		}
		zhonghuiFunction.tipMap3 = [
			["天怒石", `你的初始${zhonghuiFunction.poptipLink("怒气", null, null, true)}+1`],
		];
		if (typeof game.addPoptip == "function") {
			game.addPoptip(zhonghuiFunction.tipMap3);
		}
	});
}