import { lib, game, ui, get, ai, _status } from "../../noname.js";
import { content } from "./main/content.js";
import { precontent } from "./main/precontent.js";
import { config } from "./main/config.js";
import { help } from "./main/help.js";
import { basic } from "./main/basic.js";
//import { prepare } from "./main/prepare.js";
import { extensionDefaultPackage } from "./main/main.js";
import updateStr from "./main/updateStr.js";

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
` + updateStr +
`
&ensp; <li>欢迎大家进群支持怒焰武将<br>
&ensp; <img style=width:238px src="${lib.assetURL}extension/怒焰武将/image/qq.jpg">
`;

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
