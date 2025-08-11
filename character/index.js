import { lib, game, ui, get, ai, _status } from '../../../../noname.js'
import { config } from "../main/config.js";
import nyKill from "./nyKill.js";

const packList = [nyKill];

//后续自动给武将按势力分小包
//技能替换
/*
for (let character in config) {
	let info = character.split("_");
	let prefix = info[0];
	if (!["jlsgsk", "jlsgsr", "jlsgsoul", "jlsgsy"].includes(prefix)) {
		continue;
	}
	const configx = lib.config[`extension_极略_${character}`];
	if (!configx || configx == "false") {
		continue;
	}
	const packName = prefix.includes("jlsgsk_skpf") ? "jlsg_skpf" : prefix.slice(0, 4) + "_" + prefix.slice(4);
	const replaceInfo = oldCharacter[packName]?.[character]?.[configx],
		pack = packList.find(i => i.name == packName);
	if (!replaceInfo) continue;
	for (let i in replaceInfo) {
		if (i == "info") {
			pack.character[character] = replaceInfo.info;
		} else if (i == "translate") {
			for (let j in replaceInfo.translate) {
				pack.translate[j] = replaceInfo.translate[j];
			}
		} else if (i == "skill") {
			for (let j in replaceInfo.skill) {
				pack.skill[j] = replaceInfo.skill[j];
			}
		}
	}
}
*/
//清除羁绊技能和不够的星级技能
let skList = [];
if (!lib.config?.extension_怒焰武将_jibanLose) {
	for (let sk in nyKill.skill) {
		if (nyKill.skill[sk]?.nuyan_jiBan) skList.push(sk);
	}
}
if (lib.config?.extension_怒焰武将_nuyan_star < 3) {
	let star = lib.config?.extension_怒焰武将_nuyan_star ?? 0;
	for (let sk in nyKill.skill) {
		if ((nyKill.skill[sk]?.nuyan_star ?? -1) > star) skList.push(sk);
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
			if (!pack.character[name][4]) pack.character[name][4] = [];
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
					else if (lib.config["extension_怒焰武将_" + name] == "Second") pack.translate[name + "_ab"] = "怒焰二版" + translate;
					else pack.translate[name + "_ab"] = "怒焰" + translate;
				}
				if (!(name + "_prefix" in pack.translate)) {
					let prefix = prefixList.find(prefix => translate.includes(prefix));
					pack.translate[name + "_prefix"] = "怒焰";
					if (name.includes("First") || lib.config["extension_怒焰武将_" + name] == "First") {
						pack.translate[name + "_prefix"] += "初版";
					}
					else if (lib.config["extension_怒焰武将_" + name] == "Second") pack.translate[name + "_prefix"] += "二版";
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