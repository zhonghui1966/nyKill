import { lib, game, ui, get, ai, _status } from '../../../../noname.js'
import { config } from "../main/config.js";
import nyKill from "./nyKill.js";

const packList = [nyKill];

//给武将按势力分小包
nyKill.characterSort.nyKill = {};
for (let char in nyKill.character) {
	let group = nyKill.character[char][1];
	nyKill.characterSort.nyKill["nyKill_" + group] ??= [];
	nyKill.characterSort.nyKill["nyKill_" + group].add(char);
}
//全局技能自动化
let skills = nyKill.skill;
const standardList = ["jinGong", "fangYu", "moPai", "nuQi", "zhanFa", "zhuanShu", "none"],
	func = (object) => {
		const func2 = () => true,
			name = object.id || object.sourceSkill;
		if (!object.noAutoFilter) {
			object.filterCopy = object.filter || func2;
			object.filter = function(event, player, ...args) {
				let name = this.id || this.sourceSkill;
				if (!player.ny_filterStone(name)) return false;
				return this.filterCopy.call(this, event, player, ...args);
			}
			if (object.viewAs && !object.noAutoViewAsFilter) {
				object.viewAsFilterx = object.viewAsFilter || func2;
				object.viewAsFilter = function(player) {
					let name = this.id || this.sourceSkill;
					if (!player.ny_filterStone(name)) return false;
					return this.viewAsFilterx.call(this, player);
				}
				if (object.precontent && !object.noAutoPreContent && !name.includes("zhanFa")) {
					object.precontentCopy = object.precontent;
					object.precontent = async function(event, trigger, player, ...args) {
						let name = event.name;
						if (get.info(event.name).sourceSkill) name = get.info(event.name).sourceSkill;
						await player.ny_logStone(name);
						await get.info(event.name).precontentCopy.call(this, event, trigger, player, ...args);
					}
				}
			}
		}
		if (!object.noAutoContent && !name?.includes("zhanFa") && object.content) {
			object.contentCopy = object.content;
			object.content = async function(event, trigger, player, ...args) {
				let name = event.name;
				if (get.info(event.name).sourceSkill) name = get.info(event.name).sourceSkill;
				await player.ny_logStone(name);
				await get.info(event.name).contentCopy.call(this, event, trigger, player, ...args);
			}
		}
		object.priority ??= 114;
		if (object.mod && !object.noAutoMod && typeof object.modPlayerNum == "number") {
			object.modx = get.copy(object.mod);
			for (let item in object.mod) {
				object.mod[item] = function() {
					let name = this.id || this.sourceSkill,
						num = this.modPlayerNum;
					if (arguments[num].ny_filterStone(name)) return this.modx[item].call(this, ...arguments);
				}.bind(object);
			}
		}
	};
for (let item in skills) {
	if (!item.startsWith("_")) continue;
	if (skills[item].noAuto) continue;
	skills[item].popup ??= false;
	if (!skills[item].viewAs && !skills[item].cost) skills[item].forced ??= true;
	let type;
	for (type of standardList) {
		if (type == "none") continue;
		if (item.startsWith("_ny_" + type)) {
			if (type == "zhuanShu") {
				skills._ny_getZhuanShuFuShi.obj[skills[item].name] ??= [];
				skills._ny_getZhuanShuFuShi.obj[skills[item].name].add(item);
				skills[item].priority ??= 1145;
			} else skills._ny_getFuShi.obj[type].add(item);
			skills[item].id = item;
			func(skills[item]);
			break;
		}
	}
	if (skills[item].subSkill) {
		for (let sub in skills[item].subSkill) {
			sub = skills[item].subSkill[sub];
			if (sub.noAuto) continue;
			if (sub.Auto) func(sub);
			sub.popup ??= false;
			if (!sub.viewAs && !sub.cost) sub.forced ??= true;
			if (type == "zhuanShu") sub.priority ??= 1145;
			else if (type !== "none") sub.priority ??= 114;
		}
	}
}
//清除羁绊技能和不够的星级技能
let skList = [];
if (!lib.config?.extension_怒焰武将_jibanLose) {
	for (let sk in skills) {
		if (skills[sk]?.nuyan_jiBan) skList.push(sk);
	}
}
if (lib.config?.extension_怒焰武将_nuyan_star < 3) {
	let star = lib.config?.extension_怒焰武将_nuyan_star ?? 0;
	for (let sk in skills) {
		if ((skills[sk]?.nuyan_star ?? -1) > star) skList.push(sk);
	}
}
for (let char in nyKill.character) {
	//为不同版本技能提供描述
	if (lib.config["extension_怒焰武将_" + char]) {
		for (let i of config[char].changeSkills) {
			if (nyKill.dynamicTranslate[i]) nyKill.translate[i + "_info"] = nyKill.dynamicTranslate[i]();
		}
	}
	//清除传说皮肤技能
	if (!lib.config["extension_怒焰武将_legendSkin_" + char]) {
		for (let sk of nyKill.character[char][3]) {
			if (sk.includes("Legend")) nyKill.character[char][3].remove(sk);
		}
	}
	for (let sk of skList) {
		nyKill.character[char][3].remove(sk);
	}
}

if (lib.device || lib.node) {
	for (let pack of packList) {
		//防止吴姓角色错误被认为是prefix，吴势力角色的prefix和ab需在nyKill中自己定义
		const prefixList = ["界", "谋", "幻", "神", "起", "魏"];
		for (let name in pack.character) {
			//初始化第五格
			pack.character[name][4] ??= [];
			//原画
			if (lib.config["extension_怒焰武将_legendSkin_" + name]) pack.character[name][4].push(`${lib.device || lib.node ? "ext:" : "db:extension-"}怒焰武将/image/character/legendSkin_${name}.jpg`);
			else pack.character[name][4].push(`${lib.device || lib.node ? "ext:" : "db:extension-"}怒焰武将/image/character/${name}.jpg`);
			//阵亡语音
			if (!pack.character[name][4].some(j => j.startsWith("die:"))) {
				pack.character[name][4].add("die:ext:怒焰武将/audio/die:true");
			}
			//前缀
			if (name in pack.translate) {
				let translate = pack.translate[name];
				if (!(name + "_ab" in pack.translate)) {
					if (name.includes("First") || lib.config["extension_怒焰武将_" + name] == "First") pack.translate[name + "_ab"] = "怒焰初版" + translate;
					else if (name.includes("Second") || lib.config["extension_怒焰武将_" + name] == "Second") pack.translate[name + "_ab"] = "怒焰二版" + translate;
					else pack.translate[name + "_ab"] = "怒焰" + translate;
				}
				if (!(name + "_prefix" in pack.translate)) {
					let prefix = prefixList.find(prefix => translate.includes(prefix));
					pack.translate[name + "_prefix"] = "怒焰";
					if (name.includes("First") || lib.config["extension_怒焰武将_" + name] == "First") {
						pack.translate[name + "_prefix"] += "初版";
					}
					else if (name.includes("Second") || lib.config["extension_怒焰武将_" + name] == "Second") pack.translate[name + "_prefix"] += "二版";
					if (prefix) {
						pack.translate[name + "_prefix"] += prefix;
					}
				}
			}
		}
	}
}
if (!_status.postReconnect.extErdai_skill) {
	_status.postReconnect.extErdai_skill = [
		function (skills, info) {
			for (let skill in skills) {
				lib.skill[skill] = skills[skill];
				if (info[skill]) {
					lib.translate[skill] = info[skill];
				}
				if (info[skill + "_info"]) {
					lib.translate[skill + "_info"] = info[skill + "_info"];
				}
				game.finishSkill(skill);
			}
		},
		{},
		{},
	];
}
for (let pack of packList) {
	for (let key in pack.skill) {
		_status.postReconnect.extErdai_skill[1][key] = pack.skill[key];
		if (pack.translate[key]) _status.postReconnect.extErdai_skill[2][key] = pack.translate[key];
		if (pack.translate[key + "_info"]) _status.postReconnect.extErdai_skill[2][key + "_info"] = pack.translate[key + "_info"];
	}
}
export const characters = {
	nyKill
};