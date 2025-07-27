import { lib, game, ui, get, ai, _status } from "../../../../noname.js";
let nyCard = {
	//蹲个人来改ai
	name: "nyCard",
	connect: true,
	card:{
		nuyan_fudichouxin: {
			fullskin: true,
			type:"trick",
			cardcolor:"black",
			selectTarget: 1,
			enable: true,
			filterTarget: function (card, player, target) {
				return target !== player && target.storage._ny_nuqi && target.storage._ny_nuqi > 0;
			},
			async content(event, trigger, player) {
				const target = event.target,
					card = event.card;
				let num = 1;
				if (card.storage._useCardQianghua && card.storage._useCardQianghua == true) num += 2;
				if (card.storage._useCardBaseChange && card.storage._useCardBaseChange > 0) num += card.storage._useCardBaseChange;
				lib.skill._ny_getNuqi.loseNuQi(target,num);
			},
			ai:{
				wuxie: function (target, card, player, viewer) {
					if (ai.get.attitude(viewer, target) > 0 && target.storage._ny_nuqi == 1) {
						return 1;
					}
				},
				basic: {
					order: 8,
					useful: 4,
					value: 3,
				},
				result: {
					target: function(player, target) {
						return -1 * get.attitude(player, target);
					},
				},
			},
		},
		nuyan_nufachongguan: {
			fullskin: true,
			type:"trick",
			cardcolor:"red",
			selectTarget: 1,
			modTarget: true,
			enable: true,
			filterTarget: function (card, player, target) {
				return target.storage._ny_nuqi != undefined && target.storage._ny_nuqi != target.storage._ny_nuqiMax;
			},
			async content(event, trigger, player) {
				const target = event.target,
					card = event.card;
				let num = 1;
				if (card.storage._useCardQianghua && card.storage._useCardQianghua == true) num += 2;
				if (card.storage._useCardBaseChange && card.storage._useCardBaseChange > 0) num += card.storage._useCardBaseChange;
				lib.skill._ny_getNuqi.addNuQi(target,num);
			},
			ai:{
				wuxie: function (target, card, player, viewer) {
					if (ai.get.attitude(viewer, target) < 0 && target.storage._ny_nuqi == 0) {
						return 1;
					}
				},
				basic: {
					order: 8,
					useful: 4,
					value: 4,
				},
				result: {
					target: function(player, target) {
						return get.attitude(player, target);
					},
				},
			},
		},
		nuyan_Firstshuiyanqijun: {
			fullskin: true,
			type: "trick",
			selectTarget: 1,
			enable: true,
			filterTarget: function(card, player, target) {
				return player != target;
			},
			async content(event, trigger, player) {
				const target = event.target,
					card = event.card;
				if (target.countCards("e")) {
					let result = await target.chooseControl()
						.set('choiceList', [
					        '弃置装备区的所有牌',
					        '失去1点体力',
					    ]).forResult();
						if (result.index == 0) {
							await target.modedDiscard(target.getCards('e'));
							return;
						}
				}
				let num = 1;
				if (card.storage._useCardQianghua && card.storage._useCardQianghua == true) num ++;
				if (card.storage._useCardBaseChange && card.storage._useCardBaseChange > 0) num += card.storage._useCardBaseChange;
				await target.loseHp(num);
			},
			ai:{
				wuxie: function (target, card, player, viewer) {
					if (ai.get.attitude(viewer, target) > 0 && target.hp == 1 && !target.countCards("e")) {
						return 1;
					}
				},
				basic: {
					order: 6.5,
					useful: 4,
					value: 6,
				},
				result: {
					target: function(player, target) {
						return -1 * get.attitude(player, target);
					},
				},
			},
		},
		nuyan_shuiyanqijun: {
			fullskin: true,
			type: "trick",
			selectTarget: -1,
			enable: true,
			filterTarget: function(card, player, target) {
				return player != target;
			},
			async content(event, trigger, player) {
				const target = event.target,
					card = event.card;
				if (target.countCards("e")) {
					let result = await target.chooseControl()
						.set('choiceList', [
					        '弃置装备区的所有牌',
					        '失去1点体力',
					    ]).forResult();
						if (result.index == 0) {
							await target.modedDiscard(target.getCards('e'));
							return;
						}
				}
				let num = 1;
				if (card.storage._useCardQianghua && card.storage._useCardQianghua == true) num ++;
				if (card.storage._useCardBaseChange && card.storage._useCardBaseChange > 0) num += card.storage._useCardBaseChange;
				await target.loseHp(num);
			},
			ai: {
				wuxie: function (target, card, player, viewer) {
					if (get.attitude(viewer, target) > 0 && target.hp == 1 && !target.countCards("e")) {
						return 1;
					}
				},
				basic: {
					order: 6,
					useful: 3,
					value: 1,
				},
				tag: {
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
		//Math.floor(Math.random() * 13 + 1)
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