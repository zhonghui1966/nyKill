import { lib, game, ui, get, ai, _status } from "../../noname.js";
import { content } from "./main/content.js";
import { precontent } from "./main/precontent.js";
import { config } from "./main/config.js";
import { help } from "./main/help.js";
import { basic } from "./main/basic.js";
//import { prepare } from "./main/prepare.js";
import { extensionDefaultPackage } from "./main/main.js";

/*
原作者有三罪：
1.部分中文技能id，各种描述错误
2.部分代码使用本体扩展编辑器，缩进太恶心了，导致我重写时不敢复制你的代码
3.代码bug，代码各种神人操作，例if (!(true)) return false;
感谢@流年（虫豸），我的扩展模板全部都是照抄你的，抄抄你的（
来个人帮我改改Ai吧
	————时机已到，今日起兵
*/
//lib.init.css(lib.assetURL + "extension/怒焰武将", "extension");


let changelog = `
<a onclick="if (zhonghuiFunction) zhonghuiFunction.showRepo('怒焰武将')" style="cursor: pointer;text-decoration: underline;">
Visit Repository</a>
<br>QQ群：877603179
<br>详情见帮助内容
<br>怒焰机制默认关闭，请前往扩展选项处开启
<br><b onclick="setTimeout(() => ui.click.extensionTab('怒焰武将'), 850)">点击前往设置</b><br>
<li>当前版本：魔改版1.0.6版本
<br><b style="color: red">更新内容：</b>
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
&ensp; <li>欢迎大家进群支持怒焰武将<br>
&ensp; <img style=width:238px src="${lib.assetURL}extension/怒焰武将/image/qq.jpg">
`;
/*
<span onclick="if (zhonghuiFunction) zhonghuiFunction.openLink('https://keu1vrp2sz.feishu.cn/docx/CpsrdV4sDoazzUxzChMcqGjIneh')" 
style="color: red; font-size: x-large;cursor: pointer;text-decoration: underline;">
汇报bug点我</span><br>
&ensp; 更新武将<div style="display:inline; font-family: xingkai, xinwei;" data-nature="qunmm">SK葛玄</div><br>
&ensp; 修复bug（观虚、羽化、星舞、同心、暴怒、离魂、储元、天辩）<br>
&ensp; 优化技能（搏战、忠侯）<br>
&ensp; 添加extension.css以适配后续武将使用“临时牌”样式<br>
&ensp; 对srlose规则进行调整<br>
&ensp; 对SR包和SK包内的武将姓名进行补充/更正<br>
&ensp; 对SR武将进行翻修（张辽、甄姬、许诸、司马懿、郭嘉、吕布、华佗、貂蝉、孙尚香、大乔、黄盖、吕蒙）<br>
&ensp; 从extension.js中拆分help，并补充相关信息（许愿、临时牌）<br>
<span style="font-size: large;">历史：</span><br>
2025.05.08更新<br>
&ensp; 修复bug（刚直、玲珑、武志、精策、扼绝）<br>
&ensp; 优化技能（悍勇、反骨、魔兽）<br>
2025.04.27更新<br>
&ensp; 更新武将<div style="display:inline; font-family: xingkai, xinwei;" data-nature="thundermm">SP神关羽</div><br>
&ensp; 更新武将<div style="display:inline; font-family: xingkai, xinwei;" data-nature="orangemm">万魂归寂</div><br>
&ensp; 修复bug（灵泽、三绝、反骨、扶汉、才遇、枕戈）<br>
&ensp; 优化（草船借箭、通天）<br>
&ensp; 武将原画、语音归类<br>
&ensp; 拆分extension.js文件<br>
`*/

export let type = "extension";
export default async function () {
	const extensionInfo = await lib.init.promises.json(`${basic.extensionDirectoryPath}info.json`);
	let extension = {
		name: extensionInfo.name,
		editable: false,
		content: content,
		precontent: precontent,
		//prepare: prepare,
		config: await basic.resolve(config),
		help: await basic.resolve(help),
		package: await basic.resolve(extensionDefaultPackage),
		files: { character: [], card: [], skill: [], audio: [] },
	};
	Object.keys(extensionInfo)
		.filter(key => key != "name")
		.forEach(key => (extension.package[key] = extensionInfo[key]));
	extension.package.changelog = changelog;
	return extension;
}
