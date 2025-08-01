import { lib, game, ui, get, ai, _status } from '../../../noname.js'
//import configPack from '../package/configPack.js'
const configInfo = {
	author: {
		clear:true,
		name:`作者:
		<samp id='宁宁澄1'><small><strong>军师爱白给丫</strong></small></samp><style>#宁宁澄1{animation:ningningchengbiaoqian1 20s linear 1.5s infinite;font-family:shousha;text-align: center; color: #00FFFF;text-shadow:-1.3px 0px 2.2px #000, 0px -1.3px 2.2px #000, 1.3px 0px 2.2px #000 ,0px 1.3px 2.2px #000;}@keyframes ningningchengbiaoqian1{0% {color:#00FFFF;opacity:1;}9%{opacity:0;}18%{color: #00FFFF;opacity:1;}27%{opacity:0;}36% {color:#00FFFF;opacity:1;}45%{opacity:0;}54%{color: #00FFFF;opacity:1;}63%{opacity:0;}72%{color:#00FFFF;opacity:1;}81%{opacity:0;}90%{color: #00FFFF;opacity:1;}99%{opacity:0;}}</style>
		<img src=\"extension/怒焰武将/image/author1.jpg\" alt='Q群昵称：是白给丫' title='Q群昵称：是白给丫' width='30px' height='30px' style='border-radius:100%;'><br>爆改者:
		<samp id='宁宁澄1'><small><strong>时机已到，今日起兵！</strong></small></samp>
		<img src=\"extension/怒焰武将/image/author2.jpg\" alt='Q群昵称：时机已到，今日起兵！' title='Q群昵称：时机已到，今日起兵！' width='30px' height='30px' style='border-radius:100%;'>
		`
	},
    thankInfo: {
        clear: true,
        name: `鸣谢:
		<samp id='宁宁澄2'><small><strong>新元noname</strong></small></samp><style>#宁宁澄2{animation:ningningchengbiaoqian2 20s linear 1.5s infinite;font-family:shousha;text-align: center; color: #FF0000;text-shadow:-1.3px 0px 2.2px #000, 0px -1.3px 2.2px #000, 1.3px 0px 2.2px #000 ,0px 1.3px 2.2px #000;}@keyframes ningningchengbiaoqian2{0% {color:#FF0000;opacity:1;}9%{opacity:0;}18%{color: #FF0000;opacity:1;}27%{opacity:0;}36% {color:#FF0000;opacity:1;}45%{opacity:0;}54%{color: #FF0000;opacity:1;}63%{opacity:0;}72%{color:#FF0000;opacity:1;}81%{opacity:0;}90%{color: #FF0000;opacity:1;}99%{opacity:0;}}</style>
		<img src='${lib.assetURL}extension/怒焰武将/image/mingxie1.jpg' alt='Q群昵称：新元noname' title='Q群昵称：新元noname' width='30px' height='30px' style="border-radius:100%;">
		<samp id='宁宁澄2'><small><strong>流年</strong></small></samp>
		<img src='${lib.assetURL}extension/怒焰武将/image/mingxie2.jpg' alt='Q群昵称：虫豸' title='Q群昵称：虫豸' width='30px' height='30px' style="border-radius:100%;"><br>
		`,
    },
	history: {
		name: '<div class="hth_menu">▶更新内容</div>',
		clear: true,
		onclick: function () {
			if (this.hth_more == undefined) {
				var more = ui.create.div('.hth_more',
				`<div style="border: 0px solid white;text-align:left"><div style="font-size:10px; line-height:11px;">
				<br><li>当前版本：魔改版1.0.1版本
				<br><b style="color: red">更新内容：</b>
				<br>新增武将：界曹节
				<br>修复一些已知问题
				<br>增加武将传说皮肤机制（在扩展选项处调整，重启后生效）
				`
				);
				this.hth_more = more;
			}
			if (this.hth_more_mode === undefined) {
				this.hth_more_mode = true;
				this.parentNode.insertBefore(this.hth_more, this.nextSibling);
				this.innerHTML = '<div class="hth_menu">▼更新内容</div>';
			}
			else {
				this.parentNode.removeChild(this.hth_more);
				delete this.hth_more_mode;
				this.innerHTML = '<div class="hth_menu">▶更新内容</div>';
			};
		},
	},
	getHelpContent: {
		clear: true,
		name: "帮助中有扩展的详细内容",
	},
	qqInfo: {//扩展群号
		clear:true,
		name:`扩展可加群号（QQ）<br>新将包扩展群：<b>682507990</b><br>怒焰武将扩展群：<b>877603179</b><br>极略扩展群：<b>702142668</b><br><li>欢迎大家进群支持怒焰武将<br><img style=width:238px src="${lib.assetURL}extension/怒焰武将/image/qq.jpg"><br>github仓库：<a href="https://github.com/zhonghui1966/nyKill">点击此处进入</a>`,
	},
    /*FenJieXianA: {//功能杂项
        clear: true,
        name: "<li>功能杂项",
    },*/
}
const fushiSet = {
	description:{
	    clear: true,
	    name: "<li>设置（所有选项须重启生效）",
	},
	nuyan_rule1: {
		name: "怒焰符石机制开关",
		init: "false",
		item: {
			false: "关闭",
			global: "全局",
			onlyMe: "仅自己可用",
		},
		intro: "开启后，怒焰三国杀武将开局将会拥有符石和专属符石，详情见帮助内容，联机模式仅自己可用=关闭",
	},
	nuyan_rule2: {
		name: "怒焰怒气机制开关",
		init: "false",
		item: {
			false: "关闭",
			global: "全局",
			onlyMe: "仅自己可用",
		},
		intro: "开启后，怒焰三国杀武将开局将会拥有怒气，详情见帮助内容，联机模式仅自己可用=关闭",
	},
	nuyan_rule3: {
		name: "怒焰摸牌机制开关",
		init: "false",
		item: {
			false: "关闭",
			global: "全局",
			onlyMe: "仅自己可用",
		},
		intro: "开启后，怒焰三国杀武将摸牌阶段摸牌数将会+1，详情见帮助内容，联机模式仅自己可用=关闭",
	},
	jibanLose: {
		name: "羁绊技能开关",
		init: false,
		intro: "是否开启怒焰武将的羁绊技能，即给符石增加次数",
	},
	nuyan_star: {
		name: "武将星级（全局）",
		init: 0,
		intro: "选择怒焰武将的星级，详情见帮助内容",
		item: {
			0: "零星",
			1: "一星",
			2: "二星",
			3: "三星",
			4: "四星",
			5: "五星",
			6: "六星",
		},
	},
	InfinityFuShi: {
		init: "false",
		name: "取消符石使用次数限制",
		intro: "开启后，使用任何符石将没有任何次数限制，联机模式仅自己可用=关闭",
		item: {
			"false": "关闭",
			"onlyMe": "仅限自己",
			"global": "全局",
		},
	},
}
const characterSet = {
	nuyan_jie_caojie: {
		init: "First",
		name: "界曹节版本",
		intro: "怒焰界曹节版本设置",
		item: {
			"First": "初版",
			"Second": "二版",
		},
		changeSkills: ["nuyan_nvzhongjinguo"],
	},
	legendSkin_nuyan_jie_caojie: {
		init: false,
		name: "曹节传说皮肤",
		intro: "怒焰界曹节传说皮肤设置",
	},
}
for (let i in fushiSet) configInfo[i] = fushiSet[i];
for (let i in characterSet) configInfo[i] = characterSet[i];
export let config = configInfo;