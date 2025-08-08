import { lib, game, ui, get, ai, _status } from '../../../noname.js'
import { config } from "./config.js";
export const content = function (config, pack) {
    //在这里编写启动阶段执行的代码。
	//版本检测 and 更新公告
	if (pack.changelog) {
		if (lib.skill.starjiaowang.trigger.global !== "roundEnd") pack.changelog = `<span style="font-weight:bold;">你的无名杀版本过低，游玩怒焰武将时可能出现bug，请尽快更新</span><br>` + pack.changelog;
		var testCode = `\
let a = 1;
const b = 1;
(() => a + b)();`;
		try {
			eval(testCode);
		} catch (error) {
			if (!lib.config["extension_怒焰武将_compatibilityAlert"]) {
				game.saveConfig("extension_怒焰武将_compatibilityAlert", true);
				alert("怒焰武将与你的设备或是无名杀版本不兼容", "怒焰武将");
			}
			pack.changelog = `<span style="font-weight:bold;">怒焰武将与你的设备不兼容，因此导入被终止了。</span><br>` + pack.changelog;
			return;
		}
		game.showExtensionChangeLog(pack.changelog);
	}
	//初始化版本
	for (let Config in config) {
		if (!lib.config["extension_怒焰武将_" + Config] && config[Config]?.init) lib.config["extension_怒焰武将_" + Config] = config[Config].init;
	}
	/*if (config.debug) {
		lib.arenaReady.push(() => {
			lib.config.characters = window.__configCharactersBackup.slice();
		});
	}*/
	
	if (!_status.evaluatingExtension) {
		var callback = () => {
			if (!lib.config["extension_怒焰武将_wrongExtensionNameAlert"]) {
				game.saveConfig("extension_怒焰武将_wrongExtensionNameAlert", true);
				alert("万能导入/玄武版导入时需将拓展名设置为怒焰武将！你是不是设置错了？");
			}
		};
		if (lib.device) {
			window.resolveLocalFileSystemURL(lib.assetURL, function (entry) {
				entry.getDirectory("extension/怒焰武将/", {}, function (dirEntry) {}, callback);
			});
		} else {
			fetch(lib.assetURL + "extension/怒焰武将/extension.js").catch(e => {
				setTimeout(callback, 500);
			});
		}
	} else {
		game.saveConfig("extension_怒焰武将_wrongExtensionNameAlert", false);
	}
	
	//强化牌的五谷要改本体
	lib.arenaReady.push(() => {
		lib.card.wugu = {//五谷
			audio: true,
			fullskin: true,
			type: "trick",
			enable: true,
			cardcolor: "red",
			selectTarget: -1,
			filterTarget: true,
			contentBefore: function () {
				"step 0";
				if (!targets.length) {
					event.finish();
					return;
				}
				if ((card.storage && card.storage.chooseDirection) || get.is.versus()) {
					player
						.chooseControl("顺时针", "逆时针", function (event, player) {
							if ((get.event("isVersus") && player.next.side == player.side) || get.attitude(player, player.next) > get.attitude(player, player.previous)) return "逆时针";
							return "顺时针";
						})
						.set("prompt", "选择" + get.translation(card) + "的结算方向")
						.set("isVersus", get.is.versus());
				}
				else if (card.storage && card.storage._useCardQianghua == true) {
					player.chooseTarget(true, "请选择从哪名角色开始逆时针依次选择",(card, player, target) => {
						return _status.event.targets.includes(target);
					}).set("ai", target => get.attitude(player, target));
				}
				else {
					event.goto(2);
				}
				"step 1";
				if (result && result.control && result.control == "顺时针") {
					var evt = event.getParent(),
						sorter = _status.currentPhase || player;
					evt.fixedSeat = true;
					evt.targets.sortBySeat(sorter);
					evt.targets.reverse();
					if (evt.targets[evt.targets.length - 1] == sorter) {
						evt.targets.unshift(evt.targets.pop());
					}
				} else if(result && result.bool && result.targets) {
					var target = result.targets[0],
						evt = event.getParent();
					evt.fixedSeat = true;
					evt.targets.sortBySeat(target);
					if (evt.targets[evt.targets.length - 1] == target) {
						evt.targets.unshift(evt.targets.pop());
					}
				}
				"step 2";
				ui.clear();
				var cards;
				if (card.storage && Array.isArray(card.storage.fixedShownCards)) {
					cards = card.storage.fixedShownCards.slice();
					var lose_list = [],
						cards2 = [];
					cards.forEach(card => {
						var owner = get.owner(card);
						if (owner) {
							var arr = lose_list.find(i => i[0] == owner);
							if (arr) arr[1].push(card);
							else lose_list.push([owner, [card]]);
						} else cards2.add(card);
					});
					if (lose_list.length) {
						lose_list.forEach(list => {
							list[0].$throw(list[1]);
							game.log(list[0], "将", list[1], "置于了处理区");
						});
						game.loseAsync({
							lose_list: lose_list,
							visible: true,
						}).setContent("chooseToCompareLose");
					}
					if (cards2.length) game.cardsGotoOrdering(cards2);
					game.delayex();
				} else {
					var num;
					if (event.targets) {
						num = event.targets.length;
						if (card.storage && card.storage._useCardQianghua == true) num += 2;
						if (card.storage._useCardBaseChange && card.storage._useCardBaseChange > 0) num += card.storage._useCardBaseChange;
					} else {
						num = game.countPlayer();
					}
					if (card.storage && typeof card.storage.extraCardsNum == "number") num += card.storage.extraCardsNum;
					cards = get.cards(num);
					game.cardsGotoOrdering(cards).relatedEvent = event.getParent();
				}
				var dialog = ui.create.dialog("五谷丰登", cards, true);
				_status.dieClose.push(dialog);
				dialog.videoId = lib.status.videoId++;
				game.addVideo("cardDialog", null, ["五谷丰登", get.cardsInfo(cards), dialog.videoId]);
				event.getParent().preResult = dialog.videoId;
				game.broadcast(
					function (cards, id) {
						var dialog = ui.create.dialog("五谷丰登", cards, true);
						_status.dieClose.push(dialog);
						dialog.videoId = id;
					},
					cards,
					dialog.videoId
				);
				game.log(event.card, "亮出了", cards);
			},
			content: function () {
				"step 0";
				for (var i = 0; i < ui.dialogs.length; i++) {
					if (ui.dialogs[i].videoId == event.preResult) {
						event.dialog = ui.dialogs[i];
						break;
					}
				}
				if (!event.dialog || event.dialog.buttons.length == 0) {
					event.finish();
					return;
				}
				if (event.dialog.buttons.length > 1) {
					var next = target.chooseButton(true);
					next.set("ai", button => {
						let player = _status.event.player,
							card = button.link,
							val = get.value(card, player);
						if (get.tag(card, "recover")) {
							val += game.countPlayer(target => {
								return target.hp < 2 && get.attitude(player, target) > 0 && lib.filter.cardSavable(card, player, target);
							});
							if (player.hp <= 2 && game.checkMod(card, player, "unchanged", "cardEnabled2", player)) val *= 2;
						}
						return val;
					});
					next.set("dialog", event.preResult);
					next.set("closeDialog", false);
					next.set("dialogdisplay", true);
				} else {
					event.directButton = event.dialog.buttons[0];
				}
				"step 1";
				var dialog = event.dialog;
				var card;
				if (event.directButton) {
					card = event.directButton.link;
				} else {
					for (var i of dialog.buttons) {
						if (i.link == result.links[0]) {
							card = i.link;
							break;
						}
					}
					if (!card) card = event.dialog.buttons[0].link;
				}
				var button;
				for (var i = 0; i < dialog.buttons.length; i++) {
					if (dialog.buttons[i].link == card) {
						button = dialog.buttons[i];
						button.querySelector(".info").innerHTML = (function (target) {
							if (target._tempTranslate) return target._tempTranslate;
							var name = target.name;
							if (lib.translate[name + "_ab"]) return lib.translate[name + "_ab"];
							return get.translation(name);
						})(target);
						dialog.buttons.remove(button);
						break;
					}
				}
				var capt = get.translation(target) + "选择了" + get.translation(button.link);
				if (card) {
					target.gain(card, "visible");
					target.$gain2(card);
					game.broadcast(
						function (card, id, name, capt) {
							var dialog = get.idDialog(id);
							if (dialog) {
								dialog.content.firstChild.innerHTML = capt;
								for (var i = 0; i < dialog.buttons.length; i++) {
									if (dialog.buttons[i].link == card) {
										dialog.buttons[i].querySelector(".info").innerHTML = name;
										dialog.buttons.splice(i--, 1);
										break;
									}
								}
							}
						},
						card,
						dialog.videoId,
						(function (target) {
							if (target._tempTranslate) return target._tempTranslate;
							var name = target.name;
							if (lib.translate[name + "_ab"]) return lib.translate[name + "_ab"];
							return get.translation(name);
						})(target),
						capt
					);
				}
				dialog.content.firstChild.innerHTML = capt;
				game.addVideo("dialogCapt", null, [dialog.videoId, dialog.content.firstChild.innerHTML]);
				game.log(target, "选择了", button.link);
				game.delay();
			},
			contentAfter: function () {
				"step 0"
				for (var i = 0; i < ui.dialogs.length; i++) {
					if (ui.dialogs[i].videoId == event.preResult) {
						var dialog = ui.dialogs[i];
						dialog.close();
						_status.dieClose.remove(dialog);
						if (dialog.buttons.length) {
							event.remained = [];
							for (var i = 0; i < dialog.buttons.length; i++) {
								event.remained.push(dialog.buttons[i].link);
							}
							event.trigger("wuguRemained");
						}
						break;
					}
				}
				game.broadcast(function (id) {
					var dialog = get.idDialog(id);
					if (dialog) {
						dialog.close();
						_status.dieClose.remove(dialog);
					}
				}, event.preResult);
				game.addVideo("cardDialog", null, event.preResult);
				"step 1"
				if (event.remained?.length && card.storage && card.storage._useCardQianghua == true) event.targets[0].gain(event.remained, "gain2");
			},
			ai: {
				wuxie: function () {
					if (Math.random() < 0.5) return 0;
				},
				basic: {
					order: 3,
					useful: 0.5,
				},
				result: {
					target: function (player, target) {
						var sorter = _status.currentPhase || player;
						let opt = 6 + 0.75 * (game.countPlayer() - 2 * get.distance(sorter, target, "absolute"));
						if (get.is.versus()) {
							if (target !== sorter && get.attitude(player, player.next) < get.attitude(player, player.previous)) {
								opt = 6 + 0.75 * (2 * get.distance(sorter, target, "absolute") - game.countPlayer());
							}
						}
						if (player.hasUnknown(2)) {
							return 0;
						}
						return opt / 6;
					},
				},
				tag: {
					draw: 1,
					multitarget: 1,
				},
			},
		}
	});
}