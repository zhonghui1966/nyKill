import { lib, game, ui, get, ai, _status } from "../../../../noname.js";
let nyCard = {
	//ai来自@暴暴龙
	name: "nyCard",
	connect: true,
	card: {
		nuyan_fudichouxin: {
			fullskin: true,
			type: "trick",
			cardcolor: "black",
			selectTarget: 1,
			enable: true,
			filterTarget: function (card, player, target) {
				return target !== player && target.ny_nuqi && target.ny_nuqi > 0;
			},
			async content(event, trigger, player) {
				const { target } = event;
				await target.ny_loseNuQi(event.ny_getNum(target), player, "card");
			},
			ai: {
			    wuxie(target, card, player, viewer, status) {
					if (!target.ny_nuqi) return 0;
			    	let att = get.attitude(viewer, target),
			            eff = get.effect(target, card, player, target);
			        if (Math.abs(att) < 1 || status * eff * att >= 0) {
			            return 0;
			        }
			        return target.hasSkillTag("nuyan_keepNuQi");
			    },
			    basic: {
			        order: 8,
			        useful: 4,
			        value: 3,
			    },
			    result: {
			        target(player, target) {
			            return -1 * get.attitude(player, target);
			        },
			    },
			    tag: {
					nysgsRemoveFury: 1,
				},
			},
		},
		nuyan_nufachongguan: {
			fullskin: true,
			type: "trick",
			cardcolor: "red",
			selectTarget: 1,
			modTarget: true,
			enable: true,
			filterTarget(card, player, target) {
				return target.ny_nuqi != undefined && target.ny_nuqi != target.ny_nuqiMax;
			},
			async content(event, trigger, player) {
				const { target } = event;
				await target.ny_addNuQi(event.ny_getNum(target), player, "card");
			},
			ai: {
			    wuxie(target, card, player, viewer, status) {
					if (typeof target.ny_nuqi == "undefined") return 0;
			    	let att = get.attitude(viewer, target),
			            eff = get.effect(target, card, player, target);
			        if (Math.abs(att) < 1 || status * eff * att >= 0) {
			            return 0;
			        }
			        return target.ny_nuqi < 2;
			    },
			    basic: {
			        order: 8,
			        useful: 4,
			        value: 4,
			    },
			    result: {
			        target(player, target) {
			            return -1 * get.attitude(player, target);
			        },
			    },
			    tag: {
					ny_addNuQi: 1,
				},
			},
		},
		nuyan_Firstshuiyanqijun: {
			fullskin: true,
			type: "trick",
			selectTarget: 1,
			enable: true,
			filterTarget(card, player, target) {
				return player != target;
			},
			async content(event, trigger, player) {
				let next = lib.card.nuyan_shuiyanqijun.content;
				if (next) await next(event, trigger, player);
			},
			ai: {
			    wuxie(target, card, player, viewer, status) {
			        let att = get.attitude(viewer, target),
			            eff = get.effect(target, card, player, target);
			        if (Math.abs(att) < 1 || status * eff * att >= 0) {
			            return 0;
			        }
			        return 1;
			    },
			    basic: {
			        order: 8,
			        useful: [5, 1],
			        value: 4,
			    },
			    result: {
			    	player(player, target) {
			            if (player.nuyan_shuiyanqijun) {
			                return 0;
			            }
			            if (target.hp > 2 || (target.hp > 1 && !target.isZhu && target !== game.boss && target !== game.trueZhu && target !== game.falseZhu)) {
			                return 0;
			            }
			            player.nuyan_shuiyanqijun = true;
			            let eff = get.effect(target, { name: "losehp" }, player, target);
			            delete player.nuyan_shuiyanqijun;
			            if (eff >= 0) {
			                return 0;
			            }
			            if (target.hp > 1 && target.hasSkillTag("respondSha", true, "respond", true)) {
			                return 0;
			            }
			            let res = 0,
			                att = get.sgnAttitude(player, target);
			            res -= att * (0.8 * target.countCards("hs") + 0.6 * target.countCards("e") + 3.6);
			            if (get.mode() === "identity" && target.identity === "fan") {
			                res += 2.4;
			            }
			            if ((get.mode() === "guozhan" && player.identity !== "ye" && player.identity === target.identity) || (get.mode() === "identity" && player.identity === "zhu" && (target.identity === "zhong" || target.identity === "mingzhong"))) {
			                res -= 0.8 * player.countCards("he");
			            }
			            return res;
			        },
			        target(player, target) {
			        	let zhu = (get.mode() === "identity" && target.isZhu) || target.identity === "zhu";
			        	let es = target.getCards("e"),
			        		eff = 2 * get.sgn(get.effect(target, {name: "losehp"}, player, target));
			            if (!es.length) {
			            	if (zhu) {
			            		if (target.hp < 2) {
			                        return -99;
			                    }
			            	}
			                return eff;
			            }
			            let val = 0;
			            for (let i of es) {
			                if (i.name == "baiyin" && target.isDamaged() && get.recoverEffect(target)) {
			                    val += 6;
			                } else {
			                    val -= get.value(i, target);
			                }
			            }
			            return Math.max(eff, 0.15 * val);
			        },
			    },
			    tag: {
			    	loseHp: 1,
					loseCard: 1,
					multitarget: 1,
			    	multineg: 1,
				},
			},
		},
		nuyan_shuiyanqijun: {
			fullskin: true,
			type: "trick",
			selectTarget: -1,
			enable: true,
			filterTarget(card, player, target) {
				return player != target;
			},
			async content(event, trigger, player) {
				const { target } = event,
					num = event.ny_getNum(target);
				if (target.countDiscardableCards("e")) {
					let result = await target.chooseControl()
						.set("controls", ["选项一", "选项二"])
						.set("choiceList", [
							"选项一：弃置装备区的所有牌",
							"选项二：失去" + get.cnNumber(num) + "点体力",
						])
						.set("source", player)
						.set("ai", () => {
							const { player, source } = get.event();
						    let eff = get.effect(player, { name: "losehp" }, source, player) * get.event("num");
						    if (eff > 0) {
						        return 1;
						    }
						    if (player.hasSkillTag("noe")) {
						        return 0;
						    }
						    if (!eff) {
						        return 1;
						    }
						    if (player.isDamaged() && player.hasCard(card => get.name(card) == "baiyin" && get.recoverEffect(player, player, player) > 0, "e")) {
						        return 0;
						    }
						    if (player.hasCard(card => get.value(card, player) <= 0, "e") && !player.hasCard(card => get.value(card, player) > Math.max(7, 12 - player.hp), "e")) {
						        return 0;
						    }
						    if (player.getHp() + player.countCards("hs", card => player.canSaveCard(card, player)) >= (get.event("num") * 2)) return 1;
						    return 0;
						}).forResult();
					if (result.control == "选项一") {
						await target.modedDiscard(target.getDiscardableCards("e"));
						return;
					}
				}
				await target.loseHp(num);
			},
			ai: {
			    wuxie(target, card, player, viewer, status) {
			        let att = get.attitude(viewer, target),
			            eff = get.effect(target, card, player, target);
			        if (Math.abs(att) < 1 || status * eff * att >= 0) {
			            return 0;
			        }
			        return 1;
			    },
			    basic: {
			        order: 8,
			        useful: [5, 1],
			        value: 4,
			    },
			    result: {
			    	player(player, target) {
			            if (player.nuyan_shuiyanqijun) {
			                return 0;
			            }
			            if (target.hp > 2 || (target.hp > 1 && !target.isZhu && target !== game.boss && target !== game.trueZhu && target !== game.falseZhu)) {
			                return 0;
			            }
			            player.nuyan_shuiyanqijun = true;
			            let eff = get.effect(target, { name: "losehp" }, player, target);
			            delete player.nuyan_shuiyanqijun;
			            if (eff >= 0) {
			                return 0;
			            }
			            if (target.hp > 1 && target.hasSkillTag("respondSha", true, "respond", true)) {
			                return 0;
			            }
			            let res = 0,
			                att = get.sgnAttitude(player, target);
			            res -= att * (0.8 * target.countCards("hs") + 0.6 * target.countCards("e") + 3.6);
			            if (get.mode() === "identity" && target.identity === "fan") {
			                res += 2.4;
			            }
			            if ((get.mode() === "guozhan" && player.identity !== "ye" && player.identity === target.identity) || (get.mode() === "identity" && player.identity === "zhu" && (target.identity === "zhong" || target.identity === "mingzhong"))) {
			                res -= 0.8 * player.countCards("he");
			            }
			            return res;
			        },
			        target(player, target) {
			        	let zhu = (get.mode() === "identity" && target.isZhu) || target.identity === "zhu";
			        	let es = target.getCards("e"),
			        		eff = 2 * get.sgn(get.effect(target, {name: "losehp"}, player, target));
			            if (!es.length) {
			            	if (zhu) {
			            		if (target.hp < 2) {
			                        return -99;
			                    }
			            	}
			                return eff;
			            }
			            let val = 0;
			            for (let i of es) {
			                if (i.name == "baiyin" && target.isDamaged() && get.recoverEffect(target)) {
			                    val += 6;
			                } else {
			                    val -= get.value(i, target);
			                }
			            }
			            return Math.max(eff, 0.15 * val);
			        },
			    },
			    tag: {
			    	loseHp: 1,
					loseCard: 1,
					multitarget: 1,
			    	multineg: 1,
				},
			},
		},
	},
	skill:{},
	translate:{
		nyCard: "怒焰卡牌",
		nuyan_fudichouxin:"釜底抽薪",
		nuyan_fudichouxin_info:"出牌阶段，对一名其他角色使用，其失去1点怒气。",
		nuyan_nufachongguan:"怒发冲冠",
		nuyan_nufachongguan_info:"出牌阶段，对一名角色使用，其获得1点怒气。",
		nuyan_Firstshuiyanqijun:"初版水淹七军",
		nuyan_Firstshuiyanqijun_info:"出牌阶段，对一名其他角色使用，其选择一项：1.弃置装备区所有牌（至少一张）;2.失去1点体力。",
		nuyan_shuiyanqijun:"水淹七军",
		nuyan_shuiyanqijun_info:"出牌阶段，对所有其他角色使用，其依次一项：1.弃置装备区所有牌（至少一张）;2.失去1点体力。",
	},
	list:[
		["spade", Math.floor(Math.random() * 13 + 1), "nuyan_fudichouxin"],
		["club", Math.floor(Math.random() * 13 + 1), "nuyan_fudichouxin"],
		["club", Math.floor(Math.random() * 13 + 1), "nuyan_fudichouxin"],
		["diamond", Math.floor(Math.random() * 13 + 1), "nuyan_nufachongguan"],
		["heart", Math.floor(Math.random() * 13 + 1), "nuyan_nufachongguan"],
		["heart", Math.floor(Math.random() * 13 + 1), "nuyan_nufachongguan"],
		["club", Math.floor(Math.random() * 13 + 1), "nuyan_Firstshuiyanqijun"],
		["heart", Math.floor(Math.random() * 13 + 1), "nuyan_Firstshuiyanqijun"],
		["club", Math.floor(Math.random() * 13 + 1), "nuyan_shuiyanqijun"],
		["heart", Math.floor(Math.random() * 13 + 1), "nuyan_shuiyanqijun"],
	],
};
for (let cardName in nyCard.card) {
	let card = nyCard.card[cardName];
	if (card.fullskin) {
		if (_status.evaluatingExtension) {
			card.image = `db:extension-怒焰武将/image/card/${cardName}.jpg`;
		} else {
			card.image = `ext:怒焰武将/image/card/${cardName}.jpg`;
		}
	}
	if (card.audio === true) {
		card.audio = `ext:audio/card/怒焰`;
	}
}

export let card = nyCard;