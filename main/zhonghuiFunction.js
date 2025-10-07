import { lib, game, ui, get, ai, _status } from '../../../noname.js';
import updateStr from './updateStr.js';
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
		pileList.randomSort();
		for (let i in pileList) {
			copyPile[i] = pileList[i];
		}
		return copyPile;
	},
	helpStr(html) {
		if (!lib.skill._useCardQianghua?.list) {
			html.innerHTML = "请开启<b>怒焰武将</b>包后在做尝试";
			return;
		}
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
			updateStr + 
			`<br>
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

export default zhonghuiFunction;