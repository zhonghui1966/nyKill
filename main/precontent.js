import { lib, game, ui, get, ai, _status } from '../../../noname.js';
import { characters } from "../character/index.js";
import { card as nyCard } from "../card/nyCard.js";
export async function precontent(config, originalPack) {
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
			//记得传参，传一个字符串，如“怒焰武将”
			var mirrorURL = lib.extensionPack[ext] && lib.extensionPack[ext].mirrorURL;
			if (!mirrorURL) return;
			this.openLink(mirrorURL);
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
			//后续制作符石技能显示的缩放
			if (html.hth_more == undefined) {
				let str = "",
					listStr = "";
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
				if (lib.skill._useCardQianghua?.list) {
					for (let i of lib.skill._useCardQianghua.list) {
						if (get.translation(i)) listStr += "【" + get.translation(i) + "】、"
					}
					if (listStr) listStr = listStr.slice(0, -1);
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
				`<li>当前版本：魔改版1.0版本
				<br><b style="color: red">更新内容：</b>
				<br>符石机制重做，增加怒气，强化牌等机制
				<br>还原所有怒焰三国杀的符石和战法
				<br>增加神孙坚，重做所有武将
				<br>增加怒焰牌堆，目前仅包含两个版本的【水淹七军】，【怒发冲冠】和【釜底抽薪】
				<br>
				<hr>
				<li>怒焰星级：
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
				`+ str + qq
				//后续颜色给开局的适配+专属符石写进去
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
	lib.namePrefix.set("怒焰界", {
		getSpan(prefix, name) {
			return `${get.prefixSpan("怒焰", name)}${get.prefixSpan("界", name)}`;
		},
	});
	lib.namePrefix.set("怒焰谋", {
		getSpan(prefix, name) {
			return `${get.prefixSpan("怒焰", name)}${get.prefixSpan("谋", name)}`;
		},
	});
	lib.namePrefix.set("怒焰幻", {
		getSpan(prefix, name) {
			return `${get.prefixSpan("怒焰", name)}${get.prefixSpan("幻", name)}`;
		},
	});
	lib.namePrefix.set("怒焰起", {
		getSpan(prefix, name) {
			return `${get.prefixSpan("怒焰", name)}${get.prefixSpan("起", name)}`;
		},
	});
	lib.namePrefix.set("怒焰神", {
		getSpan(prefix, name) {
			return `${get.prefixSpan("怒焰", name)}${get.prefixSpan("神", name)}`;
		},
	});
	lib.namePrefix.set("怒焰魏", {
		getSpan(prefix, name) {
			return `${get.prefixSpan("怒焰", name)}${get.prefixSpan("魏", name)}`;
		},
	});
	lib.namePrefix.set("怒焰吴", {
		getSpan(prefix, name) {
			return `${get.prefixSpan("怒焰", name)}${get.prefixSpan("吴", name)}`;
		},
	});
	lib.namePrefix.set("怒焰初版", {
		getSpan(prefix, name) {
			return `${get.prefixSpan("怒焰", name)}${get.prefixSpan("旧", name)}`;
		},
	});
	lib.namePrefix.set("怒焰初版神", {
		getSpan(prefix, name) {
			return `${get.prefixSpan("怒焰", name)}${get.prefixSpan("旧", name)}${get.prefixSpan("神", name)}`;
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
				lib.namePrefix.set("怒焰界", {
					getSpan(prefix, name) {
						return `${get.prefixSpan("怒焰", name)}${get.prefixSpan("界", name)}`;
					},
				});
				lib.namePrefix.set("怒焰谋", {
					getSpan(prefix, name) {
						return `${get.prefixSpan("怒焰", name)}${get.prefixSpan("谋", name)}`;
					},
				});
				lib.namePrefix.set("怒焰幻", {
					getSpan(prefix, name) {
						return `${get.prefixSpan("怒焰", name)}${get.prefixSpan("幻", name)}`;
					},
				});
				lib.namePrefix.set("怒焰起", {
					getSpan(prefix, name) {
						return `${get.prefixSpan("怒焰", name)}${get.prefixSpan("起", name)}`;
					},
				});
				lib.namePrefix.set("怒焰神", {
					getSpan(prefix, name) {
						return `${get.prefixSpan("怒焰", name)}${get.prefixSpan("神", name)}`;
					},
				});
				lib.namePrefix.set("怒焰魏", {
					getSpan(prefix, name) {
						return `${get.prefixSpan("怒焰", name)}${get.prefixSpan("魏", name)}`;
					},
				});
				lib.namePrefix.set("怒焰吴", {
					getSpan(prefix, name) {
						return `${get.prefixSpan("怒焰", name)}${get.prefixSpan("吴", name)}`;
					},
				});
				lib.namePrefix.set("怒焰初版", {
					getSpan(prefix, name) {
						return `${get.prefixSpan("怒焰", name)}${get.prefixSpan("旧", name)}`;
					},
				});
				lib.namePrefix.set("怒焰初版神", {
					getSpan(prefix, name) {
						return `${get.prefixSpan("怒焰", name)}${get.prefixSpan("旧", name)}${get.prefixSpan("神", name)}`;
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
	//机制类技能
	//怒焰星级开局选石头
	lib.skill._ny_chooseStone = {
		trigger: {
			global: "gameStart",
		},
		filter: function(event, player) {
			if ((lib.config?.extension_怒焰武将_nuyan_star ?? 0) < 1) return false;
			if (lib.config.extension_钟会包_loseBuffLimit) return true;
			return get.nameList(player).some(name => name.startsWith("nuyan_"));
		},
		async content(event, trigger, player) {
			let result = await player.chooseButton([1, 3], false)
				.set("createDialog", ["怒焰星级符石镶嵌",
					`<div class="text center"><img src=\"extension/怒焰武将/image/stone/天怒石.jpg\" alt='天怒石' title='天怒石' width='30px' height='30px' style='border-radius:100%;'><b style="color:red">天怒石</b>：你的初始怒气+1</div><b style="font-weight: normal !important;background: inherit !important;">`,
					[[["clear1", "天怒石数量：</b>"],["tiannu1","一"],["tiannu2","二"],["tiannu3", "三"]],"tdnodes"],
					`<div class="text center"><img src=\"extension/怒焰武将/image/stone/天嗔石.jpg\" alt='天嗔石' title='天嗔石' width='30px' height='30px' style='border-radius:100%;'><b style="color:yellow">天嗔石</b>：你的初始怒气上限+1</div><b style="font-weight: normal !important;background: inherit !important;">`,
					[[["clear2", "天嗔石数量：</b>"],["tianchen1","一"],["tianchen2","二"]],"tdnodes"],
					`<div class="text center"><img src=\"extension/怒焰武将/image/stone/天焰石.jpg\" alt='天焰石' title='天焰石' width='30px' height='30px' style='border-radius:100%;'><b style="color:green">天焰石</b>：你的初始体力上限和体力值+1</div><b style="font-weight: normal !important;background: inherit !important;">`,
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
					console.log(star)
					if (link.startsWith("clear")) return -1;
					if (link.startsWith("tianyan")) return 9 + link.slice(-1);
					star = Math.floor(star / 2);
					if (link == "tianchen" + star) return 8;
					else if (link == "tainnu" + (star + 1)) return 6;
					else if (link == "tainnu" + star) return 5;
					return link.slice(-1);
				})
				.forResult();
			if (result.links?.length) {
				for (let i of result.links) {
					let num = Number(i.slice(-1));
					if (i.startsWith("tiannu") && !player.storage._noInitNuQi) lib.skill._ny_getNuqi.addNuQi(player, num);
					if (i.startsWith("tianchen")) lib.skill._ny_getNuqi.gainNuQiMax(player, num);
					if (i.startsWith("tianyan")) {
						player.maxHp += num;
						player.hp += num;
						player.update();
					}
				}
			}
		},
		forced: true,
		popup: false,
		charlotte: true,
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
		charlotte: true,
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
	    mark: true,
	    marktext: "🔥",
		initNuQi: function(player) {
			player.storage._ny_nuqi ??= 0;
			player.storage._ny_nuqiMax ??= 2;
			lib.skill._ny_getNuqi.localMark(player,"_ny_getNuqi");
			game.addVideo("markSkill", player, ["_ny_getNuqi"]);
		},
		addNuQi : function(player,num) {
			if (num <= 0) return;
			if ((!player.storage._ny_nuqi) && player.storage._ny_nuqi !== 0) return;
			if ((!player.storage._ny_nuqiMax) && player.storage._ny_nuqiMax !== 0) return;
			let x = player.storage._ny_nuqiMax - player.storage._ny_nuqi;
			if (num > x) {
				//摸牌符石id9 爆能
				if (player.storage._ny_fushiId && player.storage._ny_fushiId[2] == 9 && player.storage._ny_fushiTime[2] > 0) {
					let num2 = num - x;
					if (player.storage._ny_fushiTime[2] >= num2) {
						player.draw(2 * num2);
						player.storage._ny_fushiTime[2] -= num2;
					} else {
						player.draw(2 * player.storage._ny_fushiTime[2]);
						player.storage._ny_fushiTime[2] = 0;
					}
				}
				num = x;
			}
			player.storage._ny_nuqi += num;
			//摸牌符石id8 袭扰
			var list = [];
			for (let i of game.players) {
			  if (i != player && i.storage._ny_fushiId && i.storage._ny_fushiId[2] == 8 && i.storage._ny_fushiTime[2] > 0) {
			    list.push(i);
			  }
			}
			if (list.length) {
				for (let i of list) {
					i.storage._ny_fushiTime[2] --;
					i.draw(num);
				}
			}
			//摸牌符石id5 诱敌
			if (player.storage._ny_fushiId && player.storage._ny_fushiId[2] == 5 && player.storage._ny_fushiTime[2] > 0) {
				if (player.storage._ny_fushiTime[2] >= num) {
					player.draw(2 * num);
					player.storage._ny_fushiTime[2] -= num;
				} else {
					player.draw(2 * player.storage._ny_fushiTime[2]);
					player.storage._ny_fushiTime[2] = 0;
				}
			}
		},
		loseNuQi : function(player,num) {
			if (num <= 0) return;
			if ((!player.storage._ny_nuqi) && player.storage._ny_nuqi !== 0) return;
			if ((!player.storage._ny_nuqiMax) && player.storage._ny_nuqiMax !== 0) return;
			if (player.storage._ny_nuqi < num) num = player.storage._ny_nuqi;
			player.storage._ny_nuqi -= num;
			//摸牌符石id10 虎啸
			var list = [];
			for (let i of game.players) {
			  if (i != player && i.storage._ny_fushiId && i.storage._ny_fushiId[2] == 10 && i.storage._ny_fushiTime[2] > 0) {
			    list.push(i);
			  }
			}
			if (list.length) {
				for (let i of list) {
					i.storage._ny_fushiTime[2] --;
					i.draw(num);
				}
			}
			//摸牌符石id5 诱敌
			if (player.storage._ny_fushiId && player.storage._ny_fushiId[2] == 5 && player.storage._ny_fushiTime[2] > 0) {
				if (player.storage._ny_fushiTime[2] >= num) {
					player.draw(2 * num);
					player.storage._ny_fushiTime[2] -= num;
				} else {
					player.draw(2 * player.storage._ny_fushiTime[2]);
					player.storage._ny_fushiTime[2] = 0;
				}
			}
			//怒气符石id9 振奋
			if (player.storage._ny_fushiId && player.storage._ny_fushiId[3] == 9 && player.storage._ny_nuqi <= 1 && player.storage._ny_fushiTime[3] > 0) {
				player.storage._ny_fushiTime[2] --;
				lib.skill._ny_getNuqi.addNuQi(player,2);
			}
		},
		//怒气上限至多为6
		gainNuQiMax: function(player, num) {
			if (!player.storage._ny_nuqiMax) {
				player.storage._nu_nuqi = 0;
				player.storage._ny_nuqiMax = num;
				lib.skill._ny_getNuqi.localMark(player,"_ny_getNuqi");
				game.addVideo("markSkill", player, ["_ny_getNuqi"]);
			} else player.storage._ny_nuqiMax += num;
			player.storage._ny_nuqiMax = Math.min(player.storage._ny_nuqiMax, 6);
		},
		loseNuQiMax: function(player, num) {
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
					lib.skill._ny_getNuqi.loseNuQi(player, num);
				}
			}
		},
	    forced: true,
		popup:false,
	    charlotte: true,
		firstDo: true,
	    intro: {
	        name: "怒气",
	        content: function (storage, player) {
	            return "当前怒气值：" + player.storage._ny_nuqi + "/" + player.storage._ny_nuqiMax;
	        },
	    },
	    trigger: {
	        player: "damageEnd",
	        global: "gameStart",
	    },
	    filter: function (event, player) {
			if (lib.config.extension_怒焰武将_nuyan_rule2 == "false") return false;
			else if (lib.config.extension_怒焰武将_nuyan_rule2 == "onlyMe" && game.me != player) return false;
			//推销一下自己扩展
			if (lib.config.extension_钟会包_loseBuffLimit) return true;
			return get.nameList(player).some(name => name.startsWith("nuyan_")) && (player.storage._ny_nuqi ?? 0) < (player.storage._ny_nuqiMax ?? 1);
	    },
	    async content(event,trigger,player) {
			if (trigger.name == 'game') {
				lib.skill._ny_getNuqi.initNuQi(player);
			}
	        else {
				//受伤不获得怒气的标记写在此处
				if (player.hasMark('_ny_jinGong_tianfa')) return;
				if (player.hasMark("_ny_zhanFa_longzhenghudou")) return;
				lib.skill._ny_getNuqi.addNuQi(player, trigger.num);
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
		    global: "gameStart",
		},
		mark: true,
		marktext: "🪨",
		intro: {
		    name: "符石",
		    mark(dialog, storage, player) {
				if (!player.storage._ny_fushiId) return;
		    	const addNewRow = lib.element.dialog.addNewRow.bind(dialog);
		    	if (get.is.phoneLayout()) dialog.classList.add("fullheight");
		    	dialog.css({ width: "20%" });
		    	let itemContainerCss = {
					height: "20px" ,
				};
				let headerCss = {
					height: "20px" ,
					color: "red" ,
				};
				let str = [];
				if (player.storage._ny_fushiId[4] && player.storage._ny_fushiId[4] > 0) {
					str = [
						{ item: "战法名称", ratio: .6, headerCss },
						{ item: get.translation(lib.skill._ny_getFuShi.obj["zhanFa"][(player.storage._ny_fushiId[4]-1)]), ratio: .8, itemContainerCss },
					];
					addNewRow(...str);
				}
				str = [
					{ item: "符石名称", ratio: .6, headerCss },
					{ item: "剩余触发次数", ratio: .8, headerCss },
				];
				addNewRow(...str);
				let hasData;
				let keys = Object.keys(lib.skill._ny_getFuShi.obj);
		    	for (let i = 0; i < 4; i++) {
					if (player.storage._ny_fushiId[i] && player.storage._ny_fushiId[i] > 0) {
						str = [
							{ item: get.translation(lib.skill._ny_getFuShi.obj[keys[i]][(player.storage._ny_fushiId[i]-1)]), ratio: .6, itemContainerCss },
							{ item: String(player.storage._ny_fushiTime[i]), ratio: .8, itemContainerCss },
						];
						addNewRow(...str);
						hasData = true;
					}
				}
				if (player.storage._ny_zhuanShuFuShiId) {
					for (let i in player.storage._ny_zhuanShuFuShiId) {
						str = [
							{ item: get.translation(player.storage._ny_zhuanShuFuShiId[i]), ratio: .6, itemContainerCss },
							{ item: String(player.storage._ny_fushiTime[Number(i)+4]), ratio: .8, itemContainerCss },
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
		charlotte: true,
		obj: {
			"jinGong":["_ny_jinGong_duopo","_ny_jinGong_jinghong","_ny_jinGong_zhenshe","_ny_jinGong_yuwei","_ny_jinGong_fulian","_ny_jinGong_youlong","_ny_jinGong_gongjian","_ny_jinGong_shenmou","_ny_jinGong_lingjian","_ny_jinGong_qianggong","_ny_jinGong_tianfa","_ny_jinGong_fenyong"],
			"fangYu":["_ny_fangYu_yuanbing","_ny_fangYu_dunzhen","_ny_fangYu_xiongbing","_ny_fangYu_lingzhen","_ny_fangYu_Firstlingzhen","_ny_fangYu_yingyong","_ny_fangYu_shenyou","_ny_fangYu_miaosuan","_ny_fangYu_Firstmiaosuan","_ny_fangYu_qingling","_ny_fangYu_sishou","_ny_fangYu_tiejia","_ny_fangYu_jianren"],
			"moPai":["_ny_moPai_shengji","_ny_moPai_cangfeng","_ny_moPai_junzhen","_ny_moPai_zhangu","_ny_moPai_youdi","_ny_moPai_xuncha","_ny_moPai_wuku","_ny_moPai_xirao","_ny_moPai_baoneng","_ny_moPai_huxiao","_ny_moPai_yuling","_ny_moPai_qingshen"],
			"nuQi":["_ny_nuQi_xingchi","_ny_nuQi_qimou","_ny_nuQi_shayi","_ny_nuQi_fenfa","_ny_nuQi_wuling","_ny_nuQi_tongchou","_ny_nuQi_Firsttongchou","_ny_nuQi_guimou","_ny_nuQi_zhenfen","_ny_nuQi_aibing","_ny_nuQi_jingbing","_ny_nuQi_lingyuan","_ny_nuQi_gujun"],
			"zhanFa":["_ny_zhanFa_lvedigongcheng","_ny_zhanFa_xushidaifa","_ny_zhanFa_anzhongtuxi","_ny_zhanFa_Firstpozhencuijian","_ny_zhanFa_feiyangbahu","_ny_zhanFa_leitingnuhou","_ny_zhanFa_gexuqipao","_ny_zhanFa_dandadudou","_ny_zhanFa_cuichengbazhai","_ny_zhanFa_longzhenghudou","_ny_zhanFa_yanxingjunfa","_ny_zhanFa_libingmoma","_ny_zhanFa_yetandiying","_ny_zhanFa_bixujishi","_ny_zhanFa_bainiaochaofeng","_ny_zhanFa_yihuajiemu","_ny_zhanFa_zhengzhengrishang","_ny_zhanFa_Firsttongqiangtiebi","_ny_zhanFa_sheguoyouzui","_ny_zhanFa_yixinghuandou","_ny_zhanFa_shehunduopo","_ny_zhanFa_jiuhanzhanyong","_ny_zhanFa_gubenguiyuan","_ny_zhanFa_pozhencuijian","_ny_zhanFa_zhulianbihe"],
		},//get.translation("jinGong")
		filter: function (event, player) {
			if (lib.config.extension_怒焰武将_nuyan_rule1 == "false") return false;
			else if (lib.config.extension_怒焰武将_nuyan_rule1 == "onlyMe" && game.me != player) return false;
			//推销一下自己扩展
			if (lib.config.extension_钟会包_loseBuffLimit) return true;
			return get.nameList(player).some(name => name.startsWith("nuyan_"));
		},
		async content(event,trigger,player) {
			player.storage._ny_fushiId ??= [];
			player.storage._ny_fushiTime ??= [6,6,6,6];
			for (let k in lib.skill._ny_getFuShi.obj) {
				let list = lib.skill._ny_getFuShi.obj[k],
					lists = [];
				list.forEach(i => {
				    if (lib.translate[i + "_info"]) {
				        var translation = get.translation(i);
				        var litm = ('【' + translation + "】<div>" + lib.translate[i + "_info"] + "</div>");
				        lists.push(litm);
				    }
				})
				let next = await player.chooseButton(["请选择一项"+get.translation(k)+"符石获得", [lists.map((item, i) => { return [i, item]; }), "textbutton",],])
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
		},
		forced: true,
		popup:false,
		charlotte: true,
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
		燎原•神 useCardToTargeted id1
		初版赤血•神 damage id114
		赤血•神 damage changeHp id113
		永安 phaseChange id1
		破虏 useCardToTargeted id2
		坚壁 phaseEnd id1
		古锭刀•神 useCard id1
		初版古锭刀•神 useCard id2
		*/
		obj:{
			//属性一定要加数组，这个不是trigger，没写非数组适配
			"nuyan_caorui":["_ny_zhuanShu_Firstqinglongshi","_ny_zhuanShu_qinglongshi"],
			"nuyan_xizhicai":["_ny_zhuanShu_bianhua"],
			"nuyan_lvlingqi":["_ny_zhuanShu_wushaungzhanji"],
			"nuyan_zhaoxiang":["_ny_zhuanShu_Firstyinyueqiang"],
			"nuyan_Firstluotong":["_ny_zhuanShu_wanminshu"],
			"nuyan_Firstmifuren":["_ny_zhuanShu_Firstfenghuashan","_ny_zhuanShu_fenghuashan"],
			"nuyan_shen_huangzhong":["_ny_zhuanShu_liaoyuan","_ny_zhuanShu_Firstchixue","_ny_zhuanShu_chixue"],
			"nuyan_wuxian":["_ny_zhuanShu_yongan"],
			"nuyan_wei_wenyang":["_ny_zhuanShu_polu"],
			"nuyan_zhuran": ["_ny_zhuanShu_jianbi"],
			"nuyan_shenFirst_sunjian":["_ny_zhuanShu_Firstgudingdao","_ny_zhuanShu_gudingdao"],
		},
		filter: function (event, player) {
			if (!player.storage._ny_fushiId) return false;
			for (let i in lib.skill._ny_getZhuanShuFuShi.obj) {
				if (player.name == i) return true;
			}
			return false;
		},
		async content(event,trigger,player) {
			let list = lib.skill._ny_getZhuanShuFuShi.obj[player.name],
				lists = [];
			list.forEach(i => {
			    if (lib.translate[i + "_info"]) {
			        var translation = get.translation(i);
			        var litm = ('【' + translation + "】<div>" + lib.translate[i + "_info"] + "</div>");
			        lists.push(litm);
			    }
			})
			let next = await player.chooseButton(["请选择一项"+get.translation(player.name)+"的专属符石获得", [lists.map((item, i) => { return [i, item]; }), "textbutton",],])
				.set("selectButton", [1,Infinity])
				.set("ai", button => 114514)
				.forResultLinks();
			if (next) {
				player.storage._ny_zhuanShuFuShiId = [];
				for (let i in next.sort()) {
					player.storage._ny_zhuanShuFuShiId.push(lib.skill._ny_getZhuanShuFuShi.obj[player.name][i]);
					player.storage._ny_fushiTime.push(6);
				}
				//如果仅有专属符石，刷新出符石标记界面
				if (!player.storage._ny_fushiId.some(num => num > 0)) {
					lib.skill._ny_getNuqi.localMark(player,"_ny_getFuShi");
					game.addVideo("markSkill", player, ["_ny_getFuShi"]);
				}
			}
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
		taoyuanContent: function () {
			let num = 1;
			if (card.storage._useCardBaseChange && card.storage._useCardBaseChange > 0) num += card.storage._useCardBaseChange;
			if (card.storage._useCardQianghua && card.storage._useCardQianghua == true) {
				target.recover(num);
				lib.skill._ny_getNuqi.addNuQi(target,num);
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
		charlotte: true,
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
	    charlotte: true,
		popup:false,
	    filter: function (event,player) {
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
	        lib.skill._ny_getNuqi.loseNuQi(player,1);
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
				charlotte:true,
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
				charlotte: true,
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
				charlotte: true,
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
				charlotte: true,
				content: function() {
					trigger.player.skip("phaseDraw");
				},
			},
		},
	};
	//摧毁牌
	lib.skill._ny_cuihui = {
		charlotte: true,
		forced:true,
		popup:false,
		mod: {
		    cardEnabled2(card) {
		        if (card.hasGaintag("_ny_cuihui")) return false;
		    },
		},
		trigger:{
			player:"chooseToCompareBefore",
			target:"chooseToCompareBefore",
		},
		filter: function(event, player) {
			let cards = player.getCards('h');
			return cards.some(i => i.hasGaintag("_ny_cuihui"));
		},
		content:function(){
			let cards = player.getCards('h');
			if (!cards.some(i => !i.hasGaintag("_ny_cuihui"))) trigger.cancel();
			else trigger.filterCard = function(card) {
				return !card.hasGaintag("_ny_cuihui")
			};
		},
		priority: 1145141919810,
		//game.me.addGaintag(game.me.getCards("h"),"_ny_cuihui")
		//game.me.getCards("h").gaintag.remove('_ny_cuihui')
	}
	lib.skill._ny_noneFangYuFushi = {
		mark: true,
		marktext:"封",
		intro: {
			nocount:true,
			name:"你的防御符石失效",
		    content: "",
		},
	}
	
	//固定技能
	lib.skill.ny_podan = {
		charlotte: true,
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
	    charlotte: true,
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
		charlotte: true,
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
		charlotte: true,
		filter: function(event, player) {
			if (!player.storage._ny_fushiId) return false;
			if (player.storage._ny_fushiId[0] !== 3 || player.storage._ny_fushiTime[0] <= 0) return false;
		    if (event.targets.length !== 1) return false;
		    return get.tag(event.card, "damage") >= 0.5;
		},
		content: function() {
			player.storage._ny_fushiTime[0] --;
			lib.skill._ny_getNuqi.loseNuQi(trigger.target,3);
		},
		priority: 114,
	}
	lib.skill._ny_jinGong_yuwei = {//id4
		trigger: {
	        global: "cardsDiscardAfter",
	    },
		forced: true,
		popup:false,
		charlotte: true,
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
		charlotte: true,
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
		charlotte: true,
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
		charlotte: true,
		filter: function(event,player,triggername){
			if (!player.storage._ny_fushiId) return false;
			if (player.storage._ny_fushiId[0] !== 8 || player.storage._ny_fushiTime[0] <= 0) return false;
			const info = get.info(event.card);
			if (!info || info.type != "trick" || info.notarget || (info.selectTarget && info.selectTarget != 1)) return false;
			return true;
		},
		async content (event,trigger,player) {
			var { result } = await player.chooseBool("进攻符石【深谋】：是否令此牌无法被响应？").set("ai",() => true);
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
		charlotte: true,
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
		charlotte: true,
		filter: function (event, player) {
			if (!player.storage._ny_fushiId) return false;
			if (player.storage._ny_fushiId[0] !== 10 || player.storage._ny_fushiTime[0] <= 0) return false;
			if (event.card.name !== "sha") return false;
			if ((!event.target.storage._ny_nuqi) && event.target.storage._ny_nuqi !== 0) return false;
			return true;
		},
		content:function () {
			player.storage._ny_fushiTime[0] --;
			lib.skill._ny_getNuqi.loseNuQi(trigger.target,2);
		},
		priority: 114,
	}
	lib.skill._ny_jinGong_tianfa = {//id11
		trigger: {
		    source: "damageBefore",
		},
		mark:true,
		marktext:'罚',
		intro:{
			nocount:true,
			name:'天罚',
			content:'此次伤害结算内，你无法因受到伤害而获得怒气',
		},
		forced: true,
		popup:false,
		charlotte: true,
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
		charlotte:true,
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
		charlotte: true,
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
		locked: false,
		popup:false,
		charlotte: true,
		position: "hes",
		enable: "chooseToUse",
		filter: function(event,player,triggername){
		    if (!player.storage._ny_fushiId) return false;
		    if (player.storage._ny_fushiId[1] !== 2 || player.storage._ny_fushiTime[1] <= 0) return false;
			if (player.countMark("_ny_noneFangYuFushi")) return false;
		    return true;
		},
		filterCard: function (card) {
			return get.type(card) == "equip";
		},
		viewAsFilter: function (player) {
			return player.countCards("hes", { type: "equip" }) > 0;
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
		charlotte: true,
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
		locked: false,
		popup:false,
		charlotte: true,
		position: "hes",
		enable: ["chooseToRespond","chooseToUse"],
		filter: function(event,player,triggername){
		    if (!player.storage._ny_fushiId) return false;
		    if (player.storage._ny_fushiId[1] !== 4 || player.storage._ny_fushiTime[1] <= 0) return false;
			if (player.countMark("_ny_noneFangYuFushi")) return false;
		    return true;
		},
		filterCard: function (card) {
			return get.type(card) == "equip";
		},
		viewAsFilter: function (player) {
			return player.countCards("hes", { type: "equip" }) > 0;
		},
		viewAs: {
			name: "shan",
			storage:{_useCardQianghua:true},
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
		locked: false,
		popup:false,
		charlotte: true,
		position: "hes",
		enable: ["chooseToRespond","chooseToUse"],
		filter: function(event,player,triggername){
		    if (!player.storage._ny_fushiId) return false;
		    if (player.storage._ny_fushiId[1] !== 5 || player.storage._ny_fushiTime[1] <= 0) return false;
			if (player.countMark("_ny_noneFangYuFushi")) return false;
		    return true;
		},
		filterCard: function (card) {
			return get.type(card) == "equip";
		},
		viewAsFilter: function (player) {
			return player.countCards("hes", { type: "equip" }) > 0;
		},
		viewAs: {
			name: "shan",
			storage:{_ny_fangYu_Firstlingjian:true},
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
				charlotte: true,
				filter: function (event,player) {
					if (!event.card) return false;
					if (event.card.storage._ny_fangYu_Firstlingjian != true) return false;
					if ((!player.storage._ny_nuqi) && player.storage._ny_nuqi !== 0) return false;
					if ((!player.storage._ny_nuqiMax) && player.storage._ny_nuqiMax !== 0) return false;
				    return event.card.storage._useCardQianghua != true && player.storage._ny_nuqi !== player.storage._ny_nuqiMax;
				},
				content:function(){
					lib.skill._ny_getNuqi.addNuQi(player,1);
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
		locked: false,
		popup:false,
		charlotte: true,
		position: "hes",
		enable: ["chooseToRespond","chooseToUse"],
		filter: function(event,player,triggername){
		    if (!player.storage._ny_fushiId) return false;
			if (!player.isDying()) return false;
		    if (player.storage._ny_fushiId[1] !== 6 || player.storage._ny_fushiTime[1] <= 0) return false;
			if (player.countMark("_ny_noneFangYuFushi")) return false;
		    return true;
		},
		filterCard: function (card) {
			return get.type(card) == "equip";
		},
		viewAsFilter: function (player) {
			return player.countCards("hes", { type: "equip" }) > 0;
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
		charlotte: true,
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
		charlotte: true,
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
				charlotte: true,
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
				charlotte: true,
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
		charlotte: true,
		async content(event,trigger,player) {
			let { result } = await player.chooseBool("余威：是否于"+get.translation(trigger.card)+"结算过程中可消耗1点怒气视为使用强化【无懈可击】(不限次数)").set("ai", () => true);
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
				charlotte: true,
				enable: "chooseToUse",
				prompt: "妙计：你可以消耗1点怒气并视为使用一张强化【无懈可击】(不限次数)",
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
				precontent: function() {
					lib.skill._ny_getNuqi.loseNuQi(player,1);
				},
				filterCard:() => false,
				selectCard:-1,
			},
			restore:{
				forced: true,
				popup: false,
				charlotte: true,
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
		charlotte: true,
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
		charlotte: true,
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
		charlotte: true,
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
		charlotte: true,
		filter: function(event,player,triggername){
		    if (!player.storage._ny_fushiId) return false;
		    if (player.storage._ny_fushiId[2] !== 1 || player.storage._ny_fushiTime[2] <= 0) return false;
		    return true;
		},
		content: function(){
			let num = Math.min(Math.abs(trigger.num),5);
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
		charlotte: true,
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
		charlotte: true,
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
		charlotte: true,
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
		charlotte: true,
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
		charlotte: true,
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
		charlotte: true,
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
		charlotte: true,
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
		charlotte: true,
		filter: function(event,player,name){
		    if (!player.storage._ny_fushiId) return false;
		    if (player.storage._ny_fushiId[3] !== 1 || player.storage._ny_fushiTime[3] <= 0) return false;
			if (player.storage._ny_nuqi === player.storage._ny_nuqiMax) return false;
			if (event.player == player) return false;
			if (get.type(event.card) == "trick" && event.targets.length == 1) return true;
		    return get.type(event.card) == "basic" && player.storage._ny_nuqi !== player.storage._ny_nuqiMax;
		},
		content: function() {
			player.storage._ny_fushiTime[3] --;
			lib.skill._ny_getNuqi.addNuQi(player,2);
		},
		priority: 114,
	}
	lib.skill._ny_nuQi_qimou = {//id2
		trigger: {
		    player: ["useCard"],
		},
		forced: true,
		popup:false,
		charlotte: true,
		filter: function(event,player,name){
		    if (!player.storage._ny_fushiId) return false;
		    if (player.storage._ny_fushiId[3] !== 2 || player.storage._ny_fushiTime[3] <= 0) return false;
			if (player == _status.currentPhase) return false;
			return event.card.name == 'wuxie' && player.storage._ny_nuqi !== player.storage._ny_nuqiMax;
		},
		content: function() {
			player.storage._ny_fushiTime[3] --;
			lib.skill._ny_getNuqi.addNuQi(player,2);
			var card = _status.currentPhase.getCards('he').randomGet();
			if (card) {
	          _status.currentPhase.modedDiscard(card, player);
	        }
		},
		priority: 114,
	}
	lib.skill._ny_nuQi_shayi = {//id3
		trigger: {
		    player: "useCardToTargeted",
		},
		forced: true,
		popup:false,
		charlotte: true,
		filter: function(event,player,name){
		    if (!player.storage._ny_fushiId) return false;
		    if (player.storage._ny_fushiId[3] !== 3 || player.storage._ny_fushiTime[3] <= 0) return false;
			return event.card.name == 'sha' && event.targets.length && player.storage._ny_nuqi !== player.storage._ny_nuqiMax;
		},
		content: function() {
			player.storage._ny_fushiTime[3] --;
			if (trigger.target.isMinHp(true)) lib.skill._ny_getNuqi.addNuQi(player,2);
			else lib.skill._ny_getNuqi.addNuQi(player,1);
		},
		priority: 114,
	}
	lib.skill._ny_nuQi_fenfa = {//id4
		trigger: {
		    player: "changeHp",
		},
		forced: true,
		popup:false,
		charlotte: true,
		filter: function(event,player,name){
		    if (!player.storage._ny_fushiId) return false;
		    if (player.storage._ny_fushiId[3] !== 4 || player.storage._ny_fushiTime[3] <= 0) return false;
			if (event.num > 0) return false;
			if (player.getHp() <= 4 && !player.isHealthy()) return true;
			return player.storage._ny_nuqi !== player.storage._ny_nuqiMax;
		},
		content: function() {
			player.storage._ny_fushiTime[3] --;
			lib.skill._ny_getNuqi.addNuQi(player,1);
			if (player.getHp() <= 4) player.recover();
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
		charlotte: true,
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
		content: function() {
			lib.skill._ny_getNuqi.addNuQi(player,2);
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
				charlotte: true,
				filter: function(event,player){
				    if (!player.storage._ny_fushiId) return false;
				    if (player.storage._ny_fushiId[3] !== 5 || player.storage._ny_fushiTime[3] <= 0) return false;
					return player.storage._ny_nuqi !== player.storage._ny_nuqiMax && event.cards.some(c => get.type(c) == "equip");
				},
				content: function() {
					player.storage._ny_fushiTime[3] --;
					lib.skill._ny_getNuqi.addNuQi(player,2);
				},
				priority: 114,
			},
		},
	}
	lib.skill._ny_nuQi_tongchou = {//id6
		trigger: {
		    player: ["damageEnd","loseHpAfter"],
		},
		forced: true,
		popup:false,
		charlotte: true,
		filter: function(event,player,triggername){
		    if (!player.storage._ny_fushiId) return false;
		    if (player.storage._ny_fushiId[3] !== 6 || player.storage._ny_fushiTime[3] <= 0) return false;
		    return true;
		},
		async content(event,trigger,player){
			let { result } = await player.chooseBool("是否发动【同仇】：获得1点怒气并摸一张牌").set("ai", () => true);
			if (result.bool) {
				player.storage._ny_fushiTime[3] --;
				lib.skill._ny_getNuqi.addNuQi(player,1);
				await player.draw();
			}
		},
		priority: 114,
	}
	lib.skill._ny_nuQi_Firsttongchou = {//id7
		trigger: {
		    player: ["changeHp"],
		},
		forced: true,
		popup:false,
		charlotte: true,
		filter: function(event,player,triggername){
		    if (!player.storage._ny_fushiId) return false;
		    if (player.storage._ny_fushiId[3] !== 7 || player.storage._ny_fushiTime[3] <= 0) return false;
		    return event.player.getHp() <= 4;
		},
		async content(event,trigger,player){
			let { result } = await player.chooseBool("是否发动【同仇】：获得1点怒气并摸一张牌").set("ai", () => true);
			if (result.bool) {
				player.storage._ny_fushiTime[3] --;
				lib.skill._ny_getNuqi.addNuQi(player,1);
				await player.draw();
			}
		},
		priority: 114,
	}
	lib.skill._ny_nuQi_guimou = {//id8
		trigger: {
		    player: "useCardToTargeted",
		},
		forced: true,
		popup:false,
		charlotte: true,
		filter: function(event,player,name){
		    if (!player.storage._ny_fushiId) return false;
		    if (player.storage._ny_fushiId[3] !== 8 || player.storage._ny_fushiTime[3] <= 0) return false;
			return (get.type(event.card) == 'trick' || get.type(event.card) == 'delay') && event.targets.length && player.storage._ny_nuqi !== player.storage._ny_nuqiMax;
		},
		content: function() {
			player.storage._ny_fushiTime[3] --;
			if (trigger.targets.length > 1) lib.skill._ny_getNuqi.addNuQi(player,2);
			else lib.skill._ny_getNuqi.addNuQi(player,1);
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
		charlotte: true,
		filter: function(event,player,name){
		    if (!player.storage._ny_fushiId) return false;
		    if (player.storage._ny_fushiId[3] !== 10 || player.storage._ny_fushiTime[3] <= 0) return false;
			return player.isDamaged() && player.storage._ny_nuqi !== player.storage._ny_nuqiMax;
		},
		content: function() {
			player.storage._ny_fushiTime[3] --;
			lib.skill._ny_getNuqi.addNuQi(player,player.maxHp - player.hp);
		},
		priority: 114,
	}
	lib.skill._ny_nuQi_jingbing = {//id11
		trigger: {
		    player: "phaseEnd",
		},
		forced: true,
		popup:false,
		charlotte: true,
		filter: function(event,player,name){
		    if (!player.storage._ny_fushiId) return false;
		    if (player.storage._ny_fushiId[3] !== 11 || player.storage._ny_fushiTime[3] <= 0) return false;
			return player.countCards('e') > 0 && player.storage._ny_nuqi !== player.storage._ny_nuqiMax;
		},
		content: function() {
			player.storage._ny_fushiTime[3] --;
			lib.skill._ny_getNuqi.addNuQi(player,2);
		},
		priority: 114,
	}
	lib.skill._ny_nuQi_lingyuan = {//id12
		trigger: {
		    player: "phaseBegin",
		},
		forced: true,
		popup:false,
		charlotte: true,
		filter: function(event,player,name){
		    if (!player.storage._ny_fushiId) return false;
		    if (player.storage._ny_fushiId[3] !== 12 || player.storage._ny_fushiTime[3] <= 0) return false;
			return player.storage._ny_nuQi < 2 && player.storage._ny_nuqi !== player.storage._ny_nuqiMax;
		},
		content: function() {
			player.storage._ny_fushiTime[3] --;
			lib.skill._ny_getNuqi.addNuQi(player,2);
		},
		priority: 114,
	}
	lib.skill._ny_nuQi_gujun = {//id13
		trigger: {
		    player: "phaseEnd",
		},
		forced: true,
		popup:false,
		charlotte: true,
		filter: function(event,player,name){
		    if (!player.storage._ny_fushiId) return false;
		    if (player.storage._ny_fushiId[3] !== 13 || player.storage._ny_fushiTime[3] <= 0) return false;
			return player.storage._discardNum && player.storage._discardNum > 0 && player.storage._ny_nuqi !== player.storage._ny_nuqiMax;
		},
		content: function() {
			player.storage._ny_fushiTime[3] --;
			lib.skill._ny_getNuqi.addNuQi(player,player.storage._discardNum);
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
				charlotte: true,
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
		charlotte: true,
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
				.set("ai", target => -1 * get.attitude(player, target));
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
	    charlotte: true,
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
		charlotte: true,
		frequent: false,
		async content (event,trigger,player) {
			trigger.player.randomDiscard(2);
			lib.skill._ny_getNuqi.loseNuQi(trigger.player,1);
		},
	}
	lib.skill._ny_zhanFa_Firstpozhencuijian = {//id4
		trigger: {
		    player: "useCard",
		},
		popup:false,
		charlotte: true,
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
				charlotte: true,
				frequent: true,
				filter: function(event,player,triggername){
					if (!player.storage._ny_fushiId) return false;
					if (player.storage._ny_fushiId[4] !== 4) return false;
					if (_status.currentPhase != player) return false;
					return event.card.storage && event.card.storage._ny_zhanFa_Firstpozhencuijian == true;
				},
				async content (event,trigger,player) {
					if (!trigger.targets.length) return;
					const { result } = await player.chooseBool("是否对"+get.translation(trigger.targets)+"发动【破阵摧坚】：<br>"+get.translation("_ny_zhanFa_Firstpozhencuijian_info")).set("ai", () => true);
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
		mark:true,
		marktext:"飞",
		intro:{
			name:"飞扬跋扈",
			content:"你使用【杀】的次数+#",
		},
		trigger: {
		    player: ["phaseJudgeBegin","phaseUseBegin"],
		},
		popup:false,
		charlotte: true,
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
		charlotte: true,
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
				.set("ai", target => function (player, target) {
					let num = -1 * get.attitude(player, target);
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
		charlotte: true,
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
				charlotte: true,
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
		charlotte: true,
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
				mark:true,
				marktext:"单",
				intro: {
					nocount:true,
					name:"单打独斗",
				    content: "所有角色造成或受到的伤害+1",
				},
				popup:false,
				charlotte: true,
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
		charlotte: true,
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
					trigger.target.addGaintag(cards,'_ny_cuihui');
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
		mark:true,
		marktext:'罚',
		intro:{
			nocount:true,
			name:'龙争虎斗',
			content:'你无法使用或打出牌或因受到伤害而获得怒气直至你的回合结束',
		},
		trigger: {
		    player: "compare",
		    target: "compare",
		},
		popup:false,
		charlotte: true,
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
					player.chooseBool("是否令"+get.translation(player.storage._ny_zhanFa_longzhenghudou_target)+"无法使用或打出牌且受伤不获得怒气直至其回合结束")
						.set("ai",() => {
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
		mark:true,
		marktext:"刑",
		intro:{
			name:'严刑峻法',
			content:'你下次受到的伤害+$',
		},
		trigger: {
		    source: "dying",
		},
		popup:false,
		charlotte: true,
		frequent: true,
		filter: function(event, player) {
			if (!player.storage._ny_fushiId) return false;
			if (player.storage._ny_fushiId[4] !== 11) return false;
		    return true;
		},
		async content (event,trigger,player) {
			lib.skill._ny_getNuqi.addNuQi(player,1);
			let { result } = await player.chooseBool("是否令"+get.translation(trigger.player)+"选择一项：1.翻面；2.失去1点怒气且下次受到伤害+1")
				.set("ai",() => {
					return -1 * get.attitude(player,trigger.player);
				});
			if (result.bool) {
				const choiceList = ["翻面","失去1点怒气且下次受到伤害+1"];
				const choices = ["选项一","选项二"];
				if (!trigger.player.storage._ny_nuqi) {
					choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + "</span>";
					choices.remove(choices[1]);
				}
				let { result } = await trigger.player.chooseControl()
					.set("controls",choices)
					.set("choiceList",choiceList)
					.set("ai",() => {
						if (player.storage._ny_nuqi > 0) return "选项二";
						return "选项一";
					})
					.set("prompt","【龙争虎斗】：请选择以下一项执行");
				if (result.control == "选项一") {
					await trigger.player.turnOver();
				} else if (result.control == "选项二") {
					lib.skill._ny_getNuqi.loseNuQi(trigger.player,1);
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
		mark:true,
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
		charlotte: true,
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
		mark:true,
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
		charlotte: true,
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
		mark:true,
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
		charlotte: true,
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
				charlotte: true,
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
				charlotte: true,
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
		charlotte: true,
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
			        .set("ai", (button) => player.getUseValue(button.link[2]))
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
				charlotte: true,
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
		charlotte: true,
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
			    prompt: "是否发动【移花接木】",
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
		mark:true,
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
		charlotte: true,
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
				charlotte: true,
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
		charlotte: true,
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
				charlotte: true,
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
		mark:true,
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
		charlotte: true,
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
		charlotte: true,
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
		charlotte: true,
		frequent: false,
		filter: function(event,player) {
			if (!player.storage._ny_fushiId) return false;
			if (player.storage._ny_fushiId[4] !== 21) return false;
			return event.source && event.source != player && event.getl(event.source).hs.length > 0;
		},
		content: function() {
			if (trigger.source.storage._ny_nuqi > 0 && player.storage._ny_nuqi) {
				lib.skill._ny_getNuqi.loseNuQi(trigger.source,1);
				lib.skill._ny_getNuqi.addNuQi(player,1);
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
		charlotte: true,
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
		mark:true,
		marktext:"固",
		intro:{
			name:"固本归元",
			intro:"你造成的属性伤害+1直至本回合结束",
		},
		trigger:{
			player:"damageEnd",
		},
		popup:false,
		charlotte: true,
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
				charlotte: true,
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
		charlotte: true,
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
				charlotte: true,
				forced: true,
				filter: function(event,player,triggername){
					if (!player.storage._ny_fushiId) return false;
					if (player.storage._ny_fushiId[4] !== 24) return false;
					if (_status.currentPhase != player) return false;
					return event.card.storage && event.card.storage._ny_zhanFa_pozhencuijian == true;
				},
				async content (event,trigger,player) {
					if (!trigger.targets.length) return;
					const { result } = await player.chooseBool("是否对"+get.translation(trigger.targets)+"发动【破阵摧坚】：<br>"+get.translation("_ny_zhanFa_pozhencuijian_info")).set("ai", () => true);
					if (!result.bool) return;
					for (i of trigger.targets) {
						let cards = i.getCards("h");
						if (cards.length) {
							cards = zhonghuiFunction.randomList(cards).slice(0,Math.ceil(cards.length / 2));
							i.addGaintag(cards,"_ny_cuihui");
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
		charlotte: true,
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
				mark:true,
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
				charlotte: true,
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
		charlotte: true,
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
			lib.skill._ny_getNuqi.loseNuQi(trigger.player,num);
		},
		priority: 1145,
	}
	lib.skill._ny_zhuanShu_qinglongshi = {//青龙石dying id2
		trigger:{
			global:"dying",
		},
		popup:false,
		charlotte: true,
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
		charlotte: true,
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
			player.chooseCard('你的【筹策】判定为' + get.translation(trigger.player.judging[0]) + '，是否发动专属符石【彼岸花】，打出一张手牌代替之？', 'h', function (card) {
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
		charlotte: true,
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
		charlotte: true,
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
				let result = await player.chooseUseTarget("###是否发动专属符石【银月枪】？###视为使用一张【杀】", { name: "sha" }).forResult();
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
		mark: true,
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
		charlotte: true,
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
		charlotte: true,
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
	lib.skill._ny_zhuanShu_liaoyuan = {//燎原•神 useCardToTargeted id1
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
			player: "useCardToTargeted",
		},
		popup:false,
		charlotte: true,
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
			lib.skill._ny_getNuqi.addNuQi(player, num);
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
		charlotte: true,
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
					.set("ai", () => -1 * get.attitude(player, target))
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
		charlotte: true,
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
					.set("ai", () => -1 * get.attitude(player, target))
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
		charlotte: true,
		frequent: false,
		"prompt2": function(event, player) {
			const phaseName = event.phaseList[event.num].replace(/\|.+/, '');
			return "将" + get.translation(event.player) + "的" + phaseName + "改为摸牌阶段";
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
	lib.skill._ny_zhuanShu_polu = {//破虏
		trigger: {
			player: "useCardToTargeted",
		},
		popup:false,
		charlotte: true,
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
				trigger.target.markSkill("_ny_noneFangYuFushi");
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
		    },
		},
		subSkill: {
			effect: {
				trigger: {
					global: "damageBefore",
				},
				priority: 1145,
				charlotte: true,
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
		charlotte: true,
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
			let choiceList = ["令" + get.translation(trigger.player) + "减少一点体力上限", "令你增加一点体力上限并回复一点体力", "cancel2"];
			let result = await player.chooseControl(choiceList)
				.set("ai", () => {
					let player = _status.event.player;
					if (player.hp == 1 || get.attitude(player, trigger.player)) return "令你增加一点体力上限并回复一点体力";
					else return "令" + get.translation(trigger.player) + "减少一点体力上限";
				})
				.forResult();
			if (result.control == "cancel2") return;
			player.storage._ny_fushiTime[4+trigger.zhuanShuFuShiId2]--;
			if (result.control == "令" + get.translation(trigger.player) + "减少一点体力上限") await trigger.player.loseMaxHp();
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
		charlotte: true,
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
				i.markSkill("_ny_noneFangYuFushi");
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
				charlotte: true,
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
		charlotte: true,
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
				i.markSkill("_ny_noneFangYuFushi");
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
				charlotte: true,
				forced: true,
				priority: 1145,
			},
		},
	}
}