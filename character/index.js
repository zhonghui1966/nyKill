import { lib, game, ui, get, ai, _status } from '../../../../noname.js'
import { config } from "../main/config.js";
import nyKill from "./nyKill.js";
import zhonghuiFunction from '../main/zhonghuiFunction.js';

const packList = [nyKill];

//给武将按势力分小包+自动分星级
nyKill.characterSort.nyKill ??= {};
for (let char in nyKill.character) {
	let group = nyKill.character[char][1];
	nyKill.characterSort.nyKill["nyKill_" + group] ??= [];
	nyKill.characterSort.nyKill["nyKill_" + group].add(char);
	let skills = nyKill.character[char][3];
	if (nyKill.skill[skills?.[1]]) {
		nyKill.skill[skills[1]].nuyan_star ??= 1;
	}
	if (nyKill.skill[skills?.[2]]) {
		nyKill.skill[skills[2]].nuyan_star ??= 3;
	}
	if (nyKill.NAAL.includes(char)) continue;
	let translate = nyKill.translate[char];
	if (!translate) continue;
	zhonghuiFunction.HAL.add(translate);
	for (let name of skills.slice(0, 3)) {
		if (nyKill.skill[name]) {
			nyKill.skill[name].name ??= [];
			nyKill.skill[name].name.add(translate);
		}
	}
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
				if (get.itemtype(player) !== "player") return false;
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
						let name = event.name.slice(4);
						if (get.info(name).sourceSkill) name = get.info(name).sourceSkill;
						await player.ny_logStone(name);
						await get.info(name).precontentCopy.call(this, event, trigger, player, ...args);
					}
				}
			}
		}
		if (!object.noAutoContent && !name?.includes("zhanFa")) {
			object.contentCopy = object.content || function () { };
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
						num = this.modPlayerNum,
						bool = this.modNoTime || false;
					if (arguments[num].ny_filterStone(name, "mod") && bool) return this.modx[item].call(this, ...arguments);
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
//自动添加语音
for (let sk in nyKill.skill) {
	sk = nyKill.skill[sk];
	if (!sk.name) continue;
	if (sk.audio) continue;
	if (Array.isArray(sk.name) && sk.name.length == 0) continue;
	Object.defineProperty(sk, "audio", {
		get: function () {
			if (this._audio) return this._audio;
			if (!zhonghuiFunction) return;
			if (!zhonghuiFunction.audioMap) return;
			let nameList = Array.isArray(this.name) ? this.name : [this.name],
				list = [];
			for (let item of nameList) {
				if (item.startsWith("nuyan_")) item = get.translation(item);
				let adds = zhonghuiFunction.audioMap[item];
				if (adds?.length > 0) list.addArray(adds);
			}
			if (list.length) this._audio = list.randomGet();
			this._audio ??= "";
			return this._audio;
		}
	});
}
//清除羁绊技能和不够的星级技能
let skList = [];
if (!lib.config?.extension_怒焰武将_jibanLose) {
	for (let sk in skills) {
		if (skills[sk]?.nuyan_jiBan) skList.push(sk);
	}
}
let star = lib.config?.extension_怒焰武将_nuyan_star ?? 0;
for (let sk in skills) {
	if ((skills[sk]?.nuyan_star ?? -1) > star) skList.push(sk);
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
		const prefixMap = {
			First: "初版",
			Second: "二版",
			Jie: "界",
			Mou: "谋",
			Huan: "幻",
			Shen: "神",
			Qi: "起",
			Wei: "魏",
			Wu: "吴",
		};
		for (let name in pack.character) {
			//初始化第五格
			pack.character[name][4] ??= [];
			//原画
			if (lib.config["extension_怒焰武将_legendSkin_" + name]) {
				pack.character[name][4].push(`${lib.device || lib.node ? "ext:" : "db:extension-"}怒焰武将/image/character/legendSkin_${name}.jpg`);
			} else {
				pack.character[name][4].push(`${lib.device || lib.node ? "ext:" : "db:extension-"}怒焰武将/image/character/${name}.jpg`);
			}
			//阵亡语音
			if (!pack.character[name][4].some(j => j.startsWith("die:"))) {
				pack.character[name][4].add("die:ext:怒焰武将/audio/die:true");
			}
			if (name + "_prefix" in pack.translate) continue;
			if (!(name in pack.translate)) continue;
			//前缀
			let prefixList = ["怒焰"];
			for (let prefix in prefixMap) {
				if (name.includes(prefix)) prefixList.add(prefixMap[prefix]);
				if (lib.config["extension_怒焰武将_" + name] == prefix) prefixList.add(prefixMap[prefix]);
			}
			pack.translate[name + "_prefix"] ??= prefixList.join("|");
			let translate = pack.translate[name];
			pack.translate[name + "_ab"] ??= prefixList.join("") + translate;
		}
	}
}
delete nyKill.NAAL;

export const characters = {
	nyKill
};