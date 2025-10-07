import { lib, game, ui, get, ai, _status } from '../../../noname.js'
import { config } from "./config.js";
export const content = function (config, pack) {
    //在这里编写启动阶段执行的代码。
	//版本检测 and 更新公告
	if (pack.changelog) {
		if (!get.poptip) pack.changelog = `<span style="font-weight:bold;">你的无名杀版本过低，游玩怒焰武将时可能出现bug，请尽快更新</span><br>` + pack.changelog;
		var testCode = `\
			let a = 1,
				c;
			const b = 1,
				obj = { a: 1 };
			(() => a + b)();
			if (obj?.a) {
				c ??= 1;
			}
		`;
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

}