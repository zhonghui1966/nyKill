import { lib, game, ui, get, ai, _status } from "../../../noname.js";
export default {
	name: "nyKill",
	connect: true,
	characterSort: {//武将分包详见index.js
	},
	character:{
		"nuyan_caorui": ["male","wei","7/7",["nuyan_huituo","nuyan_mingjianchaogang","nuyan_enweibingshi","nuyan_nuqidashi","nuyan_fushizongshi"], ["name:曹|叡"]],
		"nuyan_xizhicai": ["male","wei","6/6",["nuyan_chouce","nuyan_yizhijuncai","nuyan_xianfuqiyue","nuyan_nuqidashi","nuyan_fushidashi"], ["name:戏|志才"]],
		"nuyan_jie_ganning": ["male","wu","7/7",["nuyan_qixi","nuyan_linjiangshenjian","nuyan_yexidiying","nuyan_jingongdashi","nuyan_fushidashi"], ["name:甘|宁"]],
		"nuyan_First_xusheng": ["male","wu","6/6",["nuyan_pojun","nuyan_yongliequedi","nuyan_wanfumokai","nuyan_jingongdashi","nuyan_fushidashi"], ["name:徐|盛"]],
		"nuyan_jie_sunjian": ["male","wu","6/6",["nuyan_yinghun","nuyan_hunyoujiangdong","nuyan_jianbukecui","nuyan_fangyudashi","nuyan_fushidashi"], ["name:孙|坚"]],
		"nuyan_jie_weiyan": ["male","shu","6/6",["nuyan_kuanggu","nuyan_shuguogulang","nuyan_kuangnuzhuiji","nuyan_fangyudashi","nuyan_fushidashi"], ["name:魏|延"]],
		"nuyan_First_lvlingqi": ["female","qun","7/7",["nuyan_guowu","nuyan_shenweizaixian","nuyan_wushuangxiaoji","nuyan_jingongdashi","nuyan_fushizongshi"], ["name:吕|玲绮"]],
		"nuyan_jieFirst_zhangchunhua": ["female","wei","6/6",["nuyan_shangshi","nuyan_xinyixiangtong","nuyan_jueqingzhuohua","nuyan_jingongdashi","nuyan_fushidashi"], ["name:张|春华"]],
		"nuyan_jushou": ["male","qun","6/6",["nuyan_jianying","nuyan_jianzhongbuqu","nuyan_honghuzhizai","nuyan_mopaidashi","nuyan_fushidashi"], ["name:沮|授"]],
		"nuyan_jieFirst_diaochan": ["male","qun","6/6",["nuyan_lihun","nuyan_miaojilianhuan","nuyan_qiaoxianlianhuan","nuyan_nuqidashi","nuyan_fushidashi"], ["name:貂|蝉"]],
		"nuyan_zhaoxiang": ["female","shu","7/7",["nuyan_fanghun","nuyan_jinghongmeiying","nuyan_zhongxinfuhan","nuyan_jingongdashi","nuyan_fushidashi"], ["name:赵|襄"]],
		"nuyan_liuqi": ["male","qun","6/6",["nuyan_wenji","nuyan_bizoujiangnan","nuyan_choutiqiuce","nuyan_jingongdashi","nuyan_fushidashi"], ["name:刘|琦"]],
		"nuyan_First_luotong": ["male","wu","7/7",["nuyan_qinzheng","nuyan_renzhengaimin","nuyan_lingchurujian","nuyan_mopaidashi","nuyan_fushidashi"], ["name:骆|统"]],
		"nuyan_First_mifuren": ["female","shu","7/7",["nuyan_guixiu","nuyan_xuzhouwangzu","nuyan_sheshencunsi","nuyan_mopaidashi","nuyan_fushizongshi"], ["name:糜|夫人"]],
		"nuyan_shenFirst_huangzhong": ["male","shen","6/6",["nuyan_yongyi","nuyan_yingxiongxiangxi","nuyan_dingjunzhanshen", "nuyan_jingongdashi", "nuyan_fushizongshi"], ["name:黄|忠"]],
		"nuyan_shen_Shenshehuangzhong": ["male","shen","6/6",["nuyan_shenshe","nuyan_shenweiqianchong","nuyan_mojinshayu"], ["unseen", "forbidai", "name:黄|忠"]],
		"nuyan_shen_Tianrenhuangzhong": ["male","shen","6/6",["nuyan_tianren","nuyan_shenweiqianchong","nuyan_cuifengdengnan"], ["unseen", "forbidai", "name:黄|忠"]],
		"nuyan_jie_caojinyu": ["female","wei","6/6",["nuyan_yuqi","nuyan_shanshenzili","nuyan_xianjingduanzhuang","nuyan_fangyudashi","nuyan_fushidashi"], ["name:曹|金玉"]],
		"nuyan_jie_lusu": ["male","wu","6/6",["nuyan_haoshi","nuyan_lianliukangcao","nuyan_dizaolianmeng","nuyan_mopaidashi","nuyan_fushidashi"], ["name:鲁|肃"]],
		"nuyan_wuxian": ["female","shu","7/7",["nuyan_yirong","nuyan_hechundaiyan","nuyan_jirenguixiang", "nuyan_jingongdashi", "nuyan_fushidashi"], ["name:吴|苋"]],
		"nuyan_jie_xuhuang": ["male","wei","6/6",["nuyan_duanliang","nuyan_jiuyuanfancheng","nuyan_liangjinyuanjue", "nuyan_fangyudashi", "nuyan_fushidashi"], ["name:徐|晃"]],
		"nuyan_jie_guojia": ["male","wei","6/6",["nuyan_yiji","nuyan_huishixinzhi","nuyan_zhiceqizuo", "nuyan_fangyudashi", "nuyan_fushidashi"], ["name:郭|嘉"]],
		"nuyan_wei_wenyang": ["male","wei","7/7",["nuyan_chuifeng","nuyan_nvliguoren","nuyan_henxiaochoujue","nuyan_jingongdashi","nuyan_fushizongshi"], ["name:文|鸯"]],
		"nuyan_zhuran": ["male","wu","7/7",["nuyan_danshou","nuyan_yifudangguan","nuyan_bajianlungong", "nuyan_fangyudashi", "nuyan_fushidashi"], ["name:朱|然"]],
		"nuyan_shenFirst_sunjian": ["male","shen","1/8",["nuyan_hulie","nuyan_shenweiqianjun","nuyan_qinwangpolu", "nuyan_jingongdashi", "nuyan_fushizongshi"], ["name:孙|坚"]],
		"nuyan_jieFirst_caojie": ["female", "qun", "6/6", ["nuyan_shouxi", "nuyan_nvzhongjinguo", "nuyan_huiminjishi", "nuyan_Legend_diewufeihua", "nuyan_fangyudashi", "nuyan_fushidashi"], ["name:曹|节"]],
		"nuyan_liru": ["male", "qun", "7/7", ["nuyan_fencheng", "nuyan_fenchengmieji", "nuyan_jueshizhice", "nuyan_jingongdashi", "nuyan_fushidashi"], ["name:李|儒"]],
		"nuyan_caomao": ["male", "wei", "6/6", ["nuyan_qianlong", "nuyan_qingzaofensi", "nuyan_juejintaoni", "nuyan_fangyudashi", "nuyan_fushidashi"], ["name:曹|髦"]],
		"nuyan_jieFirst_machao": ["male", "shu", "7/7", ["nuyan_tieji", "nuyan_weizhenliangzhou", "nuyan_yijidangqian", "nuyan_jingongdashi", "nuyan_fushizongshi"], ["name:马|超"]],
		"nuyan_First_yanghuiyu": ["female", "wei", "6/6", ["nuyan_hongyi", "nuyan_huirongrenxin", "nuyan_ciweibingji", "nuyan_nuqidashi", "nuyan_fushidashi"], ["name:羊|徽瑜"]],
		"nuyan_zhugejin": ["male", "wu", "7/7", ["nuyan_hongyuan", "nuyan_zhifangganjian", "nuyan_moudingquanju", "nuyan_mopaidashi", "nuyan_fushidashi"], ["name:诸葛|瑾"]],
		"nuyan_First_wangyuanji": ["female", "wei", "6/6", ["nuyan_shiren", "nuyan_shangjianyihua", "nuyan_qianchongdunmu", "nuyan_mopaidashi", "nuyan_fushidashi"], ["name:王|元姬"]],
		"nuyan_zuoci": ["male", "qun", "7/7", ["nuyan_huashen", "nuyan_shaoyoushendao", "nuyan_yiguishishen", "nuyan_mopaidashi", "nuyan_fushizongshi"], ["name:左|慈"]],
		"nuyan_caizhenji": ["female", "wei", "6/6", ["nuyan_tianyin", "nuyan_dihunlvxin", "nuyan_zhongyueheming", "nuyan_fangyudashi", "nuyan_fushidashi"], ["name:蔡|贞姬"]],
		"nuyan_jie_xunyou": ["male", "wei", "6/6", ["nuyan_qice", "nuyan_miaojibaichu", "nuyan_shierqice", "nuyan_jingongdashi", "nuyan_fushizongshi"], ["name:荀|攸"]],
		"nuyan_huan_caiwenji": ["female", "wei", "6/6", ["nuyan_yayue", "nuyan_lvxindihun", "nuyan_xingyunliushui", "nuyan_mopaidashi", "nuyan_fushizongshi"], ["name:蔡|文姬"]],
		"nuyan_caochun": ["male", "wei", "7/7", ["nuyan_shanjia", "nuyan_pijianzhirui", "nuyan_duyuxiaoji", "nuyan_fangyudashi", "nuyan_fushidashi"], ["name:曹|纯"]],
		"nuyan_jie_zhouyu": ["male", "wu", "6/6", ["nuyan_fanjian", "nuyan_botaoxiongyong", "nuyan_lieyanqinyin", "nuyan_jingongdashi", "nuyan_fushidashi"], ["name:周|瑜"]],
		"nuyan_caoying": ["female", "wei", "6/6", ["nuyan_lingren", "nuyan_shuiqingzhuoying", "nuyan_longchengfengming", "nuyan_jingongdashi", "nuyan_fushizongshi"], ["name:曹|婴"]],
		"nuyan_mou_simayi": ["male", "wei", "6/6", ["nuyan_yinren", "nuyan_MouSimayi_xuanmoumiaoji", "nuyan_taoguangyanghui", "nuyan_fangyudashi", "nuyan_fushizongshi"], ["name:司马|懿"]],
		"nuyan_Second_yuji": ["male", "qun", "7/7", ["nuyan_guhuo", "nuyan_taipingdaoyi", "nuyan_huanhuozhongxin", "nuyan_jingongdashi", "nuyan_fushizongshi"], ["name:于|吉"]],
		"nuyan_qi_yuanshao": ["male", "qun", "6/6", ["nuyan_qi_luanji", "nuyan_bijianzixian", "nuyan_shiluxungui", "nuyan_mopaidashi", "nuyan_fushidashi"], ["name:袁|绍"]],
		"nuyan_zhouchu": ["male", "wu", "6/6", ["nuyan_chuhai", "nuyan_nanshanshehu", "nuyan_xijiufujiao"], ["name:周|处"]],
		"nuyan_mou_zhugeliang": ["male", "shu", "7/7", ["nuyan_guanxing", "nuyan_MouZhugeliang_xuanmoumiaoji", "nuyan_dongruoguanhuo"], ["name:诸葛|亮"]],
		"nuyan_qi_zhaojiao": ["male", "qun", "6/6", ["nuyan_jinglei", "nuyan_taipingyaoshu", "nuyan_huangtiandangli"], ["name:张|角"]],
	},
	skill:{
		//全局技能
		//注：index.js有关于全局技能的一些自动化过程，要抄全局技的代码最好去全能搜索，搜lib.skill.全局技id
		//机制类技能
		//怒焰星级开局选石头
		_ny_chooseStone: {
			firstDo: true,
			trigger: {
				global: "gameStart",
				player: ["enterGame", "changeCharacterAfter"],
			},
			filter(event, player) {
				if (get.itemtype(player) != "player") return false;
				if (player.storage._hasNuYanStones) return false;
				if ((lib.config?.extension_怒焰武将_nuyan_star ?? 0) < 1) return false;
				//推销一下自己扩展
				if (lib.config.extension_钟会包_loseBuffLimit) return true;
				return get.nameList(player).some(name => name.startsWith("nuyan_"));
			},
			async content(event, trigger, player) {
				let list = ["天怒石", "天嗔石", "天焰石"],
					styleStr = {
						"天怒石": "color: red;",
						"天嗔石": "color: yellow;",
						"天焰石": "color: green;",
					},
					endStr = `</div><b style="font-weight: normal !important;background: inherit !important;">`;
				list = list.map(i => {
					return `<div class="text center"><img src=\"extension/怒焰武将/image/stone/${i}.jpg\" alt='${i}' title='${i}' width='30px' height='30px' style='border-radius:100%;'>${i}`
				});
				list = list.map(i => {
					let str = i.slice(-3);
					return i.slice(0, -3) + `${zhonghuiFunction.poptip(str, null, styleStr[str])}` + endStr;
				});
				let result = await player.chooseButton([1, 3], false)
					.set("createDialog", ["怒焰星级符石镶嵌",
						list[0],
						[[["clear1", "天怒石数量：</b>"],["tiannu1","一"],["tiannu2","二"],["tiannu3", "三"]],"tdnodes"],
						list[1],
						[[["clear2", "天嗔石数量：</b>"],["tianchen1","一"],["tianchen2","二"]],"tdnodes"],
						list[2],
						[[["clear3", "天焰石数量：</b>"],["tianyan1","一"]],"tdnodes"],
					])
					.set("filterButton", button => {
						const link = button.link;
						if (ui.selected.buttons?.length) {
							let num = 0,
								star = lib.config.extension_怒焰武将_nuyan_star,
								hasChosen = ["clear"];
							for (let i of ui.selected.buttons) {
								num += Number(i.link.slice(-1));
								hasChosen.push(i.link.slice(0, -1));
							}
							return link.slice(-1) <= (star - num) && hasChosen.every(i => !link.startsWith(i));
						}
						if (lib.config.extension_怒焰武将_nuyan_rule3 == "false") return link.startsWith("tianyan");
						if (lib.config.extension_怒焰武将_nuyan_rule3 == "onlyMe" && game.me != player) return link.startsWith("tianyan");
						return !link.startsWith("clear");
					})
					//后续钟会包增加无镶嵌限制
					.set("ai", button => {
						//逻辑混乱（
						const { player } = get.event();
						let link = button.link,
							star = lib.config.extension_怒焰武将_nuyan_star - 1;
						if (link.startsWith("clear")) return -1;
						if (link.startsWith("tianyan")) return 9 + link.slice(-1);
						if (get.nameList(player)?.some(n => n == "nuyan_jie_caojie")) {
							if (link.startsWith("tiannu")) return link.slice(-1);
							return -1;
						}
						star = Math.floor(star / 2);
						if (link == "tianchen" + star) return 8;
						else if (link == "tainnu" + (star + 1)) return 6;
						else if (link == "tainnu" + star) return 5;
						return link.slice(-1);
					})
					.forResult();
				if (result.links?.length) {
					for (let i of result.links) {
						let num = Number(i.slice(-1));
						if (i.startsWith("tiannu")) player.ny_initNuQiNum = num;
						if (i.startsWith("tianchen")) player.ny_initNuQiMax = num;
						if (i.startsWith("tianyan")) {
							player.maxHp += num;
							player.hp += num;
							player.update();
						}
					}
					player.storage._hasNuYanStones = true;
				}
			},
			priority: 1145141919810,
		},
		//++摸牌阶段摸牌数
		_ny_buff: {
			trigger: {
				player: "phaseDrawBegin",
			},
			filter(event, player) {
				if (lib.config.extension_怒焰武将_nuyan_rule3 == "false") return false;
				else if (lib.config.extension_怒焰武将_nuyan_rule3 == "onlyMe" && game.me != player) return false;
				//推销一下自己扩展
				if (lib.config.extension_钟会包_loseBuffLimit) return true;
				return get.nameList(player).some(name => name.startsWith("nuyan_"));
			},
			firstDo: true,
			content() {
				trigger.num++;
			},
			priority: 1145141919810,
		},
		//获得怒气
		_ny_getNuqi: {
			marktext: "🔥",
			intro: {
				get name() {
					if (zhonghuiFunction) return zhonghuiFunction.poptip("怒气", null, "color: red", true);
					else return "";
				},
		        content(storage, player) {
					const str = "当前怒气值：" + player.ny_nuqi + "/" + player.ny_nuqiMax
					if (player.hasMark("_ny_qianghuaNoNuqi")) str += `<br>你${zhonghuiFunction.poptip("强化牌", null, null, true)}无需消耗怒气`;
					return str;
		        },
		    },
		    trigger: {
		        player: ["enterGame", "changeCharacterAfter", "damageEnd"],
		        global: "gameStart",
		    },
		    filter(event, player, name) {
				if (get.itemtype(player) != "player") return false;
				let bool = typeof player.ny_nuqiMax == "undefined";
				if (name == "damageEnd" && !bool) return (player.ny_nuqi ?? 0) < (player.ny_nuqiMax ?? 1);
				if (!bool) return false;
				if (lib.config.extension_怒焰武将_nuyan_rule2 == "false") return false;
				else if (lib.config.extension_怒焰武将_nuyan_rule2 == "onlyMe" && game.me != player) return false;
				//推销一下自己扩展
				if (lib.config.extension_钟会包_loseBuffLimit) return true;
				return get.nameList(player).some(name => name.startsWith("nuyan_"));
		    },
		    async content(event,trigger,player) {
		        if (trigger.name == "damage") await player.ny_addNuQi("damage");
				else await player.ny_initNuQi(2);
		    },
		    priority: 1145141919810,
		},
		//符石
		/*
		player.ny_fushiId = [进攻符石id，防御符石id，摸牌符石id，怒气符石id，战法id]
		如没有则id为0
		player.ny_fushiTime = [];同上+专属次数
		专属符石id为player.ny_zhuanShuFuShiId，为数组形式，包含玩家所有已拥有的专属符石的技能名
		*/
		_ny_getFuShi: {
			trigger: {
				player: ["enterGame", "changeCharacterAfter"],
			    global: "gameStart",
			},
			marktext: "🪨",
			intro: {
			    name: "符石(点击查看详细技能)",
				mark(dialog, storage, player) {
					if (!player.ny_fushiId) return;
			    	const addNewRow = lib.element.dialog.addNewRow.bind(dialog);
			    	if (get.is.phoneLayout()) dialog.classList.add("fullheight");
			    	dialog.css({ width: "20%" });
			    	let itemContainerCss = {
						height: "20px" ,
					};
					let str = [],
						timeStr = "",
						name;
					if (player.ny_fushiId[4] && player.ny_fushiId[4] > 0) {
						name = lib.skill._ny_getFuShi.obj["zhanFa"][(player.ny_fushiId[4]-1)];
						name = zhonghuiFunction.poptip(get.translation(name), get.translation(name + "_info"), get.info("_ny_getFuShi").color["zhanFa"], true);
						str = [
							{ item: `战法名称`, ratio: .6, itemContainerCss },
							{ item: name, ratio: .8, itemContainerCss },
						];
						addNewRow(...str);
					}
					str = [
						{ item: "符石名称", ratio: .6, itemContainerCss },
						{ item: "剩余次数", ratio: .8, itemContainerCss },
					];
					addNewRow(...str);
					let hasData,
						keys = Object.keys(lib.skill._ny_getFuShi.obj);
			    	for (let i = 0; i < 4; i++) {
						if (player.ny_fushiId[i] && player.ny_fushiId[i] > 0) {
							timeStr = String(player.ny_fushiTime[i]);
							if (timeStr == "Infinity") timeStr = "无限";
							name = lib.skill._ny_getFuShi.obj[keys[i]][(player.ny_fushiId[i]-1)];
							name = zhonghuiFunction.poptip(get.translation(name), get.translation(name + "_info"), get.info("_ny_getFuShi").color[keys[i]], true);
							str = [
								{ item: name, ratio: .6, itemContainerCss },
								{ item: timeStr, ratio: .8, itemContainerCss },
							];
							addNewRow(...str);
							hasData = true;
						}
					}
					if (player.ny_zhuanShuFuShiId) {
						for (let i in player.ny_zhuanShuFuShiId) {
							timeStr = String(player.ny_fushiTime[Number(i)+4]);
							if (timeStr == "Infinity") timeStr = "无限";
							name = player.ny_zhuanShuFuShiId[i];
							name = zhonghuiFunction.poptip(get.translation(name), get.translation(name + "_info"), get.info("_ny_getFuShi").color["zhuanShu"], true);
							str = [
								{ item: name, ratio: .6, itemContainerCss },
								{ item: timeStr, ratio: .8, itemContainerCss },
							];
							addNewRow(...str);
							hasData = true;
						}
					}
					if (!hasData) {
						str = [
							{ item: "暂无", ratio: .6, itemContainerCss },
							{ item: "暂无", ratio: .8, itemContainerCss },
						];
						addNewRow(...str);
					}
				},
			},
			color: {
				"jinGong": `color:#FF4500`,
				"fangYu": `color:#1E90FF`,
				"moPai": `color:#9370DB`,
				"nuQi": `color:#FF8C00`,
				"zhanFa": `color:#2E8B57`,
				"zhuanShu": `color:#FF00FF`,
			},
			obj: {
				"jinGong": [],
				"fangYu": [],
				"moPai": [],
				"nuQi": [],
				"zhanFa": [],
			},
			filter(event, player) {
				if (get.itemtype(player) != "player") return false;
				if (typeof player.ny_fushiId !== "undefined") return false;
				if (lib.config.extension_怒焰武将_nuyan_rule1 == "false") return false;
				else if (lib.config.extension_怒焰武将_nuyan_rule1 == "onlyMe" && game.me != player) return false;
				//推销一下自己扩展
				if (lib.config.extension_钟会包_loseBuffLimit) return true;
				return get.nameList(player).some(name => name.startsWith("nuyan_"));
			},
			async content(event, trigger, player) {
				player.ny_fushiId ??= [];
				if (lib.config.extension_怒焰武将_InfinityFuShi == "global" || (lib.config.extension_怒焰武将_InfinityFuShi == "onlyMe" && game.me == player)) player.ny_fushiTime ??= [Infinity, Infinity, Infinity, Infinity];
				else player.ny_fushiTime ??= [6,6,6,6];
				for (let k in get.info(event.name).obj) {
					let list = get.info(event.name).obj[k],
						lists = [];
					list.forEach(i => {
					    if (lib.translate[i + "_info"]) {
					        var translation = get.translation(i);
					        var litm = ('〖' + translation + "〗<div>" + lib.translate[i + "_info"] + "</div>");
					        lists.push(litm);
					    }
					})
					let str = `<b style="${get.info(event.name).color[k]}">${get.translation(k)}</b>`;
					let next = await player.chooseButton(["请选择一项"+ str +"符石获得", [lists.map((item, i) => { return [i, item]; }), "textbutton"]])
						.set("selectButton", 1)
						.set("ai", button => Math.floor(Math.random() * 114514))
						.forResultLinks();
					if (next) {
						var res = Number(next) + 1;
					} else {
						var res = 0;
					}
					player.ny_fushiId.push(res);
				}
				if (player.ny_fushiId.some(num => num > 0)) {
					player.markSkill(event.name);
				}
			},
			priority: 1919810,
		},
		//专属符石
		_ny_getZhuanShuFuShi: {
			trigger:{
				global: "gameStart",
				player: ["enterGame", "changeCharacterAfter"],
			},
			/*专属符石由于fushiTime的传递问题，设置了每个时机各有一个id
			其实这是个💩山，我会改，但我意识到的时候已经十几个专属符石了，懒得改了，后续（
			id汇总
			初版青龙石dying id1
			青龙石dying id2
			彼岸花judge id1
			无双战戟phaseDraw id1
			银月枪 失去牌id1
			初版风华扇 damage id1
			风华扇 changeHp id1
			燎原•神 useCardToPlayered id1
			初版赤血•神 damage id114
			赤血•神 damage changeHp id113
			永安 phaseChange id1
			破虏 useCardToPlayered id2
			坚壁 phaseEnd id1
			古锭刀•神 useCard id1
			初版古锭刀•神 useCard id2
			追思 phaseBegin id1
			落英 dying id3
			从凤栖琴开始，再也不用这种狗屎写法了
			*/
			obj:{
				//属性一定要加数组，这个不是trigger，没写非数组适配
				"nuyan_caorui":["_ny_zhuanShu_Firstqinglongshi","_ny_zhuanShu_qinglongshi"],
				"nuyan_xizhicai":["_ny_zhuanShu_bianhua"],
				"nuyan_lvlingqi":["_ny_zhuanShu_wushaungzhanji"],
				"nuyan_zhaoxiang":["_ny_zhuanShu_Firstyinyueqiang"],
				"nuyan_First_luotong":["_ny_zhuanShu_wanminshu"],
				"nuyan_First_mifuren":["_ny_zhuanShu_Firstfenghuashan","_ny_zhuanShu_fenghuashan"],
				"nuyan_shenFirst_huangzhong":["_ny_zhuanShu_liaoyuan","_ny_zhuanShu_Firstchixue","_ny_zhuanShu_chixue"],
				"nuyan_wuxian":["_ny_zhuanShu_yongan"],
				"nuyan_wei_wenyang":["_ny_zhuanShu_polu"],
				"nuyan_zhuran": ["_ny_zhuanShu_jianbi"],
				"nuyan_shenFirst_sunjian":["_ny_zhuanShu_Firstgudingdao","_ny_zhuanShu_gudingdao"],
				"nuyan_liru": ["_ny_zhuanShu_dujiu"],
				"nuyan_caomao": ["_ny_zhuanShu_longyuan"],
				"nuyan_First_yanghuiyu": ["_ny_zhuanShu_zhuisi"],
				"nuyan_zhugejin": ["_ny_zhuanShu_kongqueling"],
				"nuyan_First_wangyuanji": ["_ny_zhuanShu_luoying"],
				"nuyan_zuoci": ["_ny_zhuanShu_shendaoling"],
				"nuyan_caizhenji": ["_ny_zhuanShu_fengqiqin"],
				"nuyan_huan_caiwenji": ["_ny_zhuanShu_keqingdi"],
				"nuyan_caochun": ["_ny_zhuanShu_hanshuang"],
				"nuyan_caoying": ["_ny_zhuanShu_fengmingjian"],
				"nuyan_mou_simayi": ["_ny_zhuanShu_yingzhi"],
				"nuyan_Second_yuji": ["_ny_zhuanShu_taipingjin"],
				"nuyan_qi_yuanshao": ["_ny_zhuanShu_Firstsizhao", "_ny_zhuanShu_sizhao"],
				"nuyan_zhouchu": ["_ny_zhuanShu_longlin"],
				"nuyan_mou_zhugeliang": ["_ny_zhuanShu_bazhen"],
				"nuyan_qi_zhaojiao": ["_ny_zhuanShu_huangjin"],
			},
			filter(event, player) {
				if (get.itemtype(player) != "player") return false;
				if (lib.config.extension_怒焰武将_nuyan_rule5 == "false") return false;
				else if (lib.config.extension_怒焰武将_nuyan_rule5 == "onlyMe" && game.me != player) return false;
				//推销一下自己扩展
				if (lib.config.extension_钟会包_loseBuffLimit) return true;
				return get.nameList(player).some(name => (name in get.info("_ny_getZhuanShuFuShi").obj) && !(name in player.getStorage("_hasNuyanZhuanshuFushiChoosed")));
			},
			async content(event,trigger,player) {
				player.ny_fushiId ??= [0, 0, 0, 0, 0];
				player.ny_fushiTime ??= [6,6,6,6];
				for (let name of get.nameList(player)) {
					if (name in player.getStorage("_hasNuyanZhuanshuFushiChoosed")) continue;
					let list = get.info(event.name).obj[name],
						lists = [];
					if (!Array.isArray(list)) list = [list];
					list.forEach(i => {
					    if (lib.translate[i + "_info"]) {
					        var translation = get.translation(i);
					        var litm = ('〖' + translation + "〗<div>" + lib.translate[i + "_info"] + "</div>");
					        lists.push(litm);
					    }
					})
					let next = await player.chooseButton([`请选择一项${get.translation(name)}的<b style="${get.info("_ny_getFuShi").color["zhuanShu"]}">专属</b>符石获得`, [lists.map((item, i) => { return [i, item]; }), "textbutton"]])
						.set("selectButton", [1, Infinity])
						.set("ai", button => 114514)
						.forResultLinks();
					if (next) {
						player.ny_zhuanShuFuShiId ??= [];
						for (let i in next.sort()) {
							player.ny_zhuanShuFuShiId.push(get.info(event.name).obj[name][i]);
							if (lib.config.extension_怒焰武将_InfinityFuShi == "global" || (lib.config.extension_怒焰武将_InfinityFuShi == "onlyMe" && game.me == player)) player.ny_fushiTime.push(Infinity);
							else player.ny_fushiTime.push(6);
						}
						//如果仅有专属符石，刷新出符石标记界面
						if (!player.ny_fushiId.some(num => num > 0)) player.markSkill("_ny_getFuShi");
					}
				}
				player.markAuto("_hasNuyanZhuanshuFushiChoosed", get.nameList(player));
			},
			priority: 191981,
		},
		//符石无效
		//这两坨最近拉的后面也得改，后续
		_ny_noneFangYuFushi: {
			marktext: "封",
			init(player, expire, filter) {
				if (!player.ny_fushiId) return;
				let skill = "_ny_noneFangYuFushi";
				if (player.storage[skill]) return;
				if (typeof expire == "string") expire = { global: expire };
				if (!expire) expire = { global: "phaseEnd" };
				if (!filter) filter = () => true;
				player.storage[skill] = player.ny_fushiId[1];
				player.markSkill(skill);
				player.when(expire)
					.filter(filter)
					.then(() => player.unmarkSkill("_ny_noneFangYuFushi"));
			},
			intro: {
				nocount: true,
				name: "封印",
				mark(dialog, content, player) {
					if (!dialog) return;
					let storage = dialog - 1;
					let name = lib.skill._ny_getFuShi.obj["fangYu"][storage];
					name = zhonghuiFunction.poptip(get.translation(name), get.translation(name + "_info"), get.info("_ny_getFuShi").color["fangYu"], true);
					return "你的防御符石" + name + "失效";
				},
				onunmark: (storage, player) => delete player.storage._ny_noneFangYuFushi,
			},
		},
		_ny_noneFuShi: {
			marktext: "封",
			init(player, expire, filter) {
				if (!player.ny_fushiId) return;
				if (player.ny_fushiId.every(i => i == 0)) return;
				let skill = "_ny_noneFuShi";
				if (player.storage[skill]) return;
				if (typeof expire == "string") expire = { global: expire };
				if (!expire) expire = { global: "phaseEnd" };
				if (!filter) filter = () => true;
				player.storage[skill] = player.ny_fushiId.slice();
				if (player.ny_zhuanShuFuShiId?.length > 0) player.storage[skill].addArray(player.ny_zhuanShuFuShiId);
				player.markSkill(skill);
				player.when(expire)
					.filter(filter)
					.then(() => player.unmarkSkill("_ny_noneFuShi"));
			},
			intro: {
				nocount: true,
				name: "封印",
				mark(dialog, content, player) {
					let storage = player.storage._ny_noneFuShi.slice();
					if (storage.every(i => i == 0)) return;
					let str = "";
					let keys = Object.keys(lib.skill._ny_getFuShi.obj);
					for (let item in storage) {
						let index = Number(item);
						let i = storage[index],
							name = "";
						if (i == 0) continue;
						if (typeof i == "number") i--;
						if (index <= 4) {
							name = lib.skill._ny_getFuShi.obj[keys[index]][i];
							name = zhonghuiFunction.poptip(get.translation(name), get.translation(name + "_info"), get.info("_ny_getFuShi").color[keys[index]], true);
						} else {
							name = zhonghuiFunction.poptip(get.translation(i), get.translation(i + "_info"), get.info("_ny_getFuShi").color["zhuanShu"], true);
						}
						str += name + "、";
					}
					str = str.slice(0, -1);
					return "你的符石" + str + "失效";
				},
				onunmark: (storage, player) => delete player.storage._ny_noneFuShi,
			},
		},
		//这两坨后续再弄
		//使用牌效果增加
		_useCardBaseChange: {
			//后续同步本体PR
			huogongContent: function () {
				"step 0";
				if (target.countCards("h") == 0) {
					event.finish();
					return;
				} else if (target.countCards("h") == 1) event._result = { cards: target.getCards("h") };
				else
					target.chooseCard(true).ai = function (card) {
						if (_status.event.getRand() < 0.5) return Math.random();
						return get.value(card);
					};
				"step 1";
				target.showCards(result.cards).setContent(function () {});
				event.dialog = ui.create.dialog(get.translation(target) + "展示的手牌", result.cards);
				event.videoId = lib.status.videoId++;
				
				game.broadcast("createDialog", event.videoId, get.translation(target) + "展示的手牌", result.cards);
				game.addVideo("cardDialog", null, [get.translation(target) + "展示的手牌", get.cardsInfo(result.cards), event.videoId]);
				event.card2 = result.cards[0];
				game.log(target, "展示了", event.card2);
				game.addCardKnower(result.cards, "everyone");
				event._result = {};
				player
					.chooseToDiscard({ suit: get.suit(event.card2) }, function (card) {
						var evt = _status.event.getParent();
						if (get.damageEffect(evt.target, evt.player, evt.player, "fire") > 0) {
							return 6.2 + Math.min(4, evt.player.hp) - get.value(card, evt.player);
						}
						return -1;
					})
					.set("prompt", false);
				game.delay(2);
				"step 2";
				if (result.bool) {
					let num = 1;
					if (card.storage._useCardQianghua && card.storage._useCardQianghua == true) num ++;
					if (card.storage._useCardBaseChange && card.storage._useCardBaseChange > 0) num += card.storage._useCardBaseChange;
					target.damage(num,"fire");
				} else {
					target.addTempSkill("huogong2");
				}
				event.dialog.close();
				game.addVideo("cardDialog", null, event.videoId);
				game.broadcast("closeDialog", event.videoId);
			},
			juedouContent: function () {
				"step 0";
				if (event.turn == undefined) event.turn = target;
				if (typeof event.baseDamage != "number") event.baseDamage = 1;
				if (typeof event.extraDamage != "number") {
					event.extraDamage = 0;
				}
				if (!event.shaReq) event.shaReq = {};
				if (typeof event.shaReq[player.playerid] != "number") event.shaReq[player.playerid] = 1;
				if (typeof event.shaReq[target.playerid] != "number") event.shaReq[target.playerid] = 1;
				event.playerCards = [];
				event.targetCards = [];
				"step 1";
				event.trigger("juedou");
				event.shaRequired = event.shaReq[event.turn.playerid];
				"step 2";
				if (event.directHit) {
					event._result = { bool: false };
				} else {
					var next = event.turn.chooseToRespond({ name: "sha" });
					if (event.shaRequired > 1) next.set("prompt2", "共需打出" + event.shaRequired + "张杀");
					next.set("ai", function (card) {
						let event = _status.event,
							player = event.splayer,
							target = event.starget;
						if (player.hasSkillTag("notricksource") || target.hasSkillTag("notrick")) return 0;
						if (event.shaRequired > 1 && player.countCards("h", "sha") < event.shaRequired) return 0;
						if (event.player === target) {
							if (_status.event.tdamage >= 0 || player.hasSkill("naman")) return -1;
							if (get.attitude(target, player) <= 0 || (event.player.hp <= 1 && _status.event.tdamage < _status.event.pdamage)) {
								return get.order(card);
							}
							return -1;
						} else {
							if (_status.event.pdamage >= 0 || target.hasSkill("naman")) return -1;
							if (get.attitude(player, target) <= 0 || (event.player.hp <= 1 && _status.event.tdamage > _status.event.pdamage)) {
								return get.order(card);
							}
							return -1;
						}
					});
					next.set("splayer", player);
					next.set("starget", target);
					next.set("pdamage", get.damageEffect(player, target, event.turn));
					next.set("tdamage", get.damageEffect(target, player, event.turn));
					next.set("shaRequired", event.shaRequired);
					next.autochoose = lib.filter.autoRespondSha;
					if (event.turn == target) {
						next.source = player;
					} else {
						next.source = target;
					}
				}
				"step 3";
				if (result.bool) {
					event.shaRequired--;
					if (event.turn == target) {
						if (result.cards) event.targetCards.addArray(result.cards);
						if (event.shaRequired > 0) event.goto(2);
						else {
							event.turn = player;
							event.goto(1);
						}
					} else {
						if (result.cards) event.playerCards.addArray(result.cards);
						if (event.shaRequired > 0) event.goto(2);
						else {
							event.turn = target;
							event.goto(1);
						}
					}
				} else {
					if (event.turn == target) {
						let num = 1;
						if (card.storage._useCardQianghua && card.storage._useCardQianghua == true) num ++;
						if (card.storage._useCardBaseChange && card.storage._useCardBaseChange > 0) num += card.storage._useCardBaseChange;
						target.damage(num);
					} else {
						let num = 1;
						if (card.storage._useCardQianghua && card.storage._useCardQianghua == true) num ++;
						if (card.storage._useCardBaseChange && card.storage._useCardBaseChange > 0) num += card.storage._useCardBaseChange;
						player.damage(num,target);
					}
				}
				event._result = {};
			},
			nanmanContent: function () {
				"step 0";
				if (typeof event.shaRequired != "number" || !event.shaRequired || event.shaRequired < 0) event.shaRequired = 1;
				if (card.storage._useCardBaseChange && card.storage._useCardBaseChange > 0) event.shaRequired += card.storage._useCardBaseChange; 
				if (typeof event.baseDamage != "number") event.baseDamage = 1;
				if (card.storage._useCardQianghua && card.storage._useCardQianghua == true) event.baseDamage ++;
				if (card.storage._useCardBaseChange && card.storage._useCardBaseChange > 0) event.baseDamage += card.storage._useCardBaseChange;
				"step 1";
				if (event.directHit) event._result = { bool: false };
				else {
					var next = target.chooseToRespond({ name: "sha" });
					if (event.shaRequired > 1) {
						next.set("prompt2", "共需打出" + event.shaRequired + "张杀");
					}
					next.set("ai", function (card) {
						var evt = _status.event.getParent();
						if (get.damageEffect(evt.target, evt.player, evt.target) >= 0) return 0;
						if (evt.player.hasSkillTag("notricksource")) return 0;
						if (evt.target.hasSkillTag("notrick")) return 0;
						return get.order(card);
					});
					next.set("respondTo", [player, card]);
					next.autochoose = lib.filter.autoRespondSha;
				}
				"step 2";
				if (result.bool == false) {
					target.damage(event.baseDamage);
				} else {
					event.shaRequired--;
					if (event.shaRequired > 0) event.goto(1);
				}
			},
			wanjianContent: function () {
				"step 0";
				if (typeof event.shaRequired != "number" || !event.shaRequired || event.shaRequired < 0) event.shaRequired = 1;
				if (card.storage._useCardBaseChange && card.storage._useCardBaseChange > 0) event.shaRequired += card.storage._useCardBaseChange; 
				if (typeof event.baseDamage != "number") event.baseDamage = 1;
				if (card.storage._useCardQianghua && card.storage._useCardQianghua == true) event.baseDamage ++;
				if (card.storage._useCardBaseChange && card.storage._useCardBaseChange > 0) event.baseDamage += card.storage._useCardBaseChange;
				"step 1";
				if (event.directHit) event._result = { bool: false };
				else {
					var next = target.chooseToRespond({ name: "shan" });
					if (event.shanRequired > 1) {
						next.set("prompt2", "共需打出" + event.shanRequired + "张闪");
					}
					next.set("ai", function (card) {
						var evt = _status.event.getParent();
						if (get.damageEffect(evt.target, evt.player, evt.target) >= 0) return 0;
						if (evt.player.hasSkillTag("notricksource")) return 0;
						if (evt.target.hasSkillTag("notrick")) return 0;
						if (evt.target.hasSkillTag("noShan")) {
							return -1;
						}
						return get.order(card);
					});
					next.set("respondTo", [player, card]);
					next.autochoose = lib.filter.autoRespondShan;
				}
				"step 2";
				if (result.bool == false) {
					target.damage(event.baseDamage);
				} else {
					event.shanRequired--;
					if (event.shanRequired > 0) event.goto(1);
				}
			},
			guoheContent: function () {
				"step 0";
				if (get.is.single()) {
					let bool1 = target.countDiscardableCards(player, "h"),
						bool2 = target.countDiscardableCards(player, "e");
					if (bool1 && bool2)
						player
							.chooseControl("手牌区", "装备区")
							.set("ai", function () {
								return Math.random() < 0.5 ? 1 : 0;
							})
							.set("prompt", "弃置" + get.translation(target) + "装备区的一张牌，或观看其手牌并弃置其中的两张牌。");
					else event._result = { control: bool1 ? "手牌区" : "装备区" };
				} else event._result = { control: "所有区域" };
				"step 1";
				let pos,
					vis = "visible";
				if (result.control == "手牌区") pos = "h";
				else if (result.control == "装备区") pos = "e";
				else {
					pos = "hej";
					vis = undefined;
				}
				if (target.countDiscardableCards(player, pos)) {
					let num = 1;
					if (card.storage._useCardQianghua && card.storage._useCardQianghua == true) num ++;
					if (card.storage._useCardBaseChange && card.storage._useCardBaseChange > 0) num += card.storage._useCardBaseChange;
					player.discardPlayerCard(pos, target, num, true, vis).set("target", target).set("complexSelect", false).set("ai", lib.card.guohe.ai.button);
				}
			},
			shunshouContent: function () {
				let pos = get.is.single() ? "he" : "hej";
				let num = 1;
				if (card.storage._useCardQianghua && card.storage._useCardQianghua == true) num ++;
				if (card.storage._useCardBaseChange && card.storage._useCardBaseChange > 0) num += card.storage._useCardBaseChange;
				if (target.countGainableCards(player, pos)) player.gainPlayerCard(pos, target, num, true).set("target", target).set("complexSelect", false).set("ai", lib.card.shunshou.ai.button);
			},
			wuzhongContent: function () {
				let num = 2;
				if (card.storage._useCardQianghua && card.storage._useCardQianghua == true) num ++;
				if (card.storage._useCardBaseChange && card.storage._useCardBaseChange > 0) num += card.storage._useCardBaseChange;
				target.draw(num);
			},
			taoyuanContent: async function (event, trigger, player) {
				let num = 1;
				if (card.storage._useCardBaseChange && card.storage._useCardBaseChange > 0) num += card.storage._useCardBaseChange;
				if (card.storage._useCardQianghua && card.storage._useCardQianghua == true) {
					target.recover(num);
					await target.ny_addNuQi(player, num);
				} else target.recover(num);
				
			},
			jlsgqs_meiContent: function() {
				"step 0";
				if (card.storage._useCardBaseChange && card.storage._useCardBaseChange > 0) event.num = card.storage._useCardBaseChange;
				else event.num = 0;
				if (target.hp > 1) target.draw(2+event.num);
				else {
				    target.recover(1+event.num);
				}
				"step 1";
				if (target.hp > 0 && event.getParent(2).type == "dying") target.draw(1+event.num);
			},
			cardList: ["huogong","juedou","nanman","wanjian","guohe","shunshou","wuzhong","taoyuan","jlsgqs_mei"],
			trigger: {
				//感谢狗哥
				get player() {
					return lib.skill._useCardBaseChange.cardList.map(t => `${t}Begin`);
				},
			},
			filter(event, player) {
				let card = event.card;
				if ((!card.storage._useCardQianghua || !card.storage._useCardQianghua == true) && (!card.storage._useCardBaseChange || !card.storage._useCardBaseChange > 0)) return false;
				for (let i of lib.skill._useCardBaseChange.cardList) {
					if (i == card.name) return true;
				}
				return false;
			},
			content() {
			    trigger.setContent(lib.skill._useCardBaseChange[trigger.name+"Content"]);
			},
			priority: 1145141919810,
		},
		//强化牌
		_useCardQianghua: {
			trigger: {
				player: "useCard0",
			},
			//后续铁索增加效果，后续闪电
			list: ["sha", "shan", "tao", "jiu", "huogong", "juedou", "nanman", "wanjian", "guohe", "shunshou", "wuzhong", "taoyuan", "wuxie", "lebu", "tiesuo", "wugu", "nuyan_fudichouxin", "nuyan_nufachongguan", "nuyan_Firstshuiyanqijun", "nuyan_shuiyanqijun"],
			forced: false,
		    filter(event, player) {
				if (lib.config.extension_怒焰武将_nuyan_rule4 == "false") return false;
				else if (lib.config.extension_怒焰武将_nuyan_rule4 == "onlyMe" && game.me != player) return false;
				if (!event.card) return false;
				if (event.card.storage._useCardQianghua != undefined) return false;
		        if (get.type(event.card) == "equip") return false;
		        if ((player.ny_nuqi ?? 0) < 1 && !player.countMark("_ny_qianghuaNoNuqi")) return false;
				for (let i of get.info("_useCardQianghua").list) {
					if (i == event.card.name && i !== "wugu") return true;
				}
		        return false;
		    },
		    async content(event, trigger, player) {
				if (!player.countMark("_ny_qianghuaNoNuqi")) await player.ny_loseNuQi();
		        trigger.card.storage._useCardQianghua = true;
		    },
			check(event, player) {
				return get.value(event.card) - 5;
			},
			priority: 1145141919810,
			subSkill:{
				basic: {//基本效果
					trigger: {
					    player: "useCard1",
					},
				    filter(event, player) {
						var card = event.card;
						if (!card.storage._useCardQianghua == true) return false;
				        return get.type2(card, false) === "basic";
				    },
				    async content(event, trigger, player) {
				        trigger.baseDamage++;
						if (trigger.card.name === 'shan') await player.draw();
				    },
				    priority: 11,
				},
				draw: {//无懈
					trigger:{
						player: "useCard1",
					},
					filter(event, player) {
						let card = event.card;
						if (!card.storage._useCardQianghua == true) return false;
						return card.name === 'wuxie';
					},
					content() {
						player.when({ global: 'eventNeutralized' })
							.then(() => {
								if (game.hasGlobalHistory('everything', evt => {
									if (evt._neutralized || evt.responded && (!evt.result || !evt.result.bool)) {
										if (evt.getParent().card == trigger.card) return true;
									}
									return false;
								})) {
									player.gain(trigger.cards, 'gain2');
								}
							});
					},
					priority: 11,
				},
				tiesuo:{//铁索
					trigger:{
						player: "useCard2",
					},
					filter(event, player) {
						if (!event.card.storage._useCardQianghua == true) return false;
						if (event.card.name != "tiesuo") return false;
						return game.hasPlayer(current => !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, player, current));
					},
					async cost(event, trigger, player) {
						event.result = await player.chooseTarget( "为" + get.translation(trigger.card) + "额外指定一个目标")
							.set("filterTarget", (card, player, target) => !_status.event.sourcex.includes(target) && lib.filter.targetEnabled2(_status.event.card, player, target))
							.set("sourcex", trigger.targets)
							.set("ai", (target) => {
								var { player } = get.event();
								return get.effect(target, _status.event.card, player, player);
							})
							.set("card", trigger.card)
							.forResult();
					},
					async content(event, trigger, player) {
						const { card, targets } = event;
						trigger.targets.addArray(targets);
						game.log(targets, "也成为了", trigger.card, "的目标");
					},
					priority: 11,
				},
				lebu_effect:{//乐不思蜀
					trigger: {
						player: "judgeEnd",
					},
					filter(event, player) {
						const symbols = Object.getOwnPropertySymbols(_status.event?.getParent()?.card ?? {});
						return _status.event?.getParent()?.card?.name == "lebu" && _status.event?.getParent()?.card?.[symbols?.[0]]?.storage?._useCardQianghua == true && !event.result.bool;
					},
					content() {
						trigger.player.skip("phaseDraw");
					},
					priority: 11,
				},
			},
		},
		//摧毁牌
		_ny_cuihui: {
			mod: {
				cardEnabled2(card) {
					if (get.itemtype(card) == "card" && card.hasGaintag("_ny_cuihui")) return false;
				},
			},
			trigger:{
				player: "chooseToCompareBefore",
				target: "chooseToCompareBefore",
			},
			filter(event, player) {
				const cards = player.getCards('h');
				return cards.some(i => i.hasGaintag("_ny_cuihui"));
			},
			content() {
				trigger.filterCard = function(card) {
					return !card.hasGaintag(event.name);
				};
				//旧版本适配，有报错但无具体问题
				if (!lib.characterIntro.boss_kumuyuanrang && player.getCards("h").filter(card => trigger.filterCard(card)).length == 0) trigger.cancel(); 
			},
			priority: 1145141919810,
			//game.me.addGaintag(game.me.getCards("h"),"_ny_cuihui")
			//game.me.getCards("h").gaintag.remove('_ny_cuihui')
		},
		//强化牌不消耗怒气
		_ny_qianghuaNoNuqi: {
			//标记内容移至怒气标记内
			noAuto: true,
		},
		//隐匿
		_ny_yinni: {
			marktext:"隐",
			intro: {
				nocount:true,
				name: "隐匿",
			    content: "隐匿状态下，当你翻面时，你翻至正面且你无法成为其他角色使用【杀】或单体普通锦囊牌的目标<br>当你造成/受到伤害时，你令此伤害翻面/防止之并解除隐匿状态",
			},
			init(player) {
				player.addMark("_ny_yinni");
				player.turnOver(false);
			},
			mod: {
			    targetEnabled(card, player, target, now) {
			        if (target.hasMark("_ny_yinni") && target != player) {
			            if (card.name == 'sha') return false;
						let info = get.info(card);
						if (info?.type == "trick" && info?.selectTarget && info?.selectTarget == 1) return false;
			        }
			    },
			},
			trigger: {
				player: ["turnOverBegin", "damageBegin4"],
				source: "damageBegin1",
			},
			filter(event, player, triggername) {
				if (triggername !== "damageBegin1") return player.hasMark("_ny_yinni");
				else return event.source.hasMark("_ny_yinni");
			},
			async content(event, trigger, player) {
				if (event.triggername == "turnOverBegin") {
					await player.turnOver(false);
					return;
				}
				else if (event.triggername == "damageBegin4") trigger.cancel();
				else trigger.num *= 2;
				player.clearMark("_ny_yinni");
				player.unmarkSkill("_ny_yinni");
				player.updateMarks();
			},
		},
		//演奏调式
		_ny_yanzoudiaoshi: {
			marktext: "调",
			nameFunc: (player) => get.translation("_ny_yanzoudiaoshi_" + player.storage._ny_yanzoudiaoshi),
			noAuto: true,
			intro: {
				content: (storage, player) => "当前演奏调式：" + `<br>〖${get.translation("_ny_yanzoudiaoshi_" + player.storage._ny_yanzoudiaoshi)}〗：<br>${get.translation("_ny_yanzoudiaoshi_" + player.storage._ny_yanzoudiaoshi + "_info")}`,
			},
			list: ["gongdiao", "shangdiao", "jiaodiao", "zhidiao", "yudiao"],
			async init(player) {
				let list = this.list;
				let choices = list.map(i => get.translation("_ny_yanzoudiaoshi_" + i));
				let choiceList = list.map(i => `〖${get.translation("_ny_yanzoudiaoshi_" + i)}〗：<div>${get.translation("_ny_yanzoudiaoshi_" + i + "_info")}</div>`);
				let str = player.storage._ny_yanzoudiaoshi ? "<br>当前演奏调式：" + `〖${get.translation("_ny_yanzoudiaoshi_" + player.storage._ny_yanzoudiaoshi)}〗：${get.translation("_ny_yanzoudiaoshi_" + player.storage._ny_yanzoudiaoshi + "_info")}` : "";
				let result = await player.chooseControl()
					.set("prompt", "请选择一个演奏调式获得之(覆盖当前演奏调式)" + str)
					.set("controls", choices)
					.set("choiceList", choiceList)
					.set("ai", () => {
						const { controls } = get.event();
						return controls[Math.floor(Math.random() * controls.length)];
					})
					.forResult();
				result = list[choices.indexOf(result.control)];
				player.storage._ny_yanzoudiaoshi = result;
				game.broadcastAll((skill, func) => {
					skill.intro.name = func;
				}, this, this.nameFunc(player));
				player.markSkill("_ny_yanzoudiaoshi", this.intro);
				player.updateMarks();
			},
			subSkill: {
				gongdiao: {
					direct: true,
					trigger: {
						player: "useCard",
					},
					priority: 1145141919,
					filter: function(event, player) {
						return get.type(event.card) == "basic" && event.card.name !== "shan";
					},
					async content(event, trigger, player) {
						if (!event.name.endsWith(player.storage._ny_yanzoudiaoshi)) return;
						if (["jlsgqs_mei"].includes(trigger.card.name)) {
							trigger.card.storage._useCardBaseChange ??= 0;
							trigger.card.storage._useCardBaseChange ++;
						} else trigger.baseDamage ++;
					},
				},
				shangdiao: {
					direct: true,
					trigger: {
						player: "useCard",
					},
					priority: 1145141919,
					filter: function(event, player) {
						const info = get.info(event.card);
						if (!info || info.type != "trick" || info.notarget || (info.selectTarget && info.selectTarget != 1)) return false;
						return true;
					},
					async content(event, trigger, player) {
						if (!event.name.endsWith(player.storage._ny_yanzoudiaoshi)) return;
						trigger.card.storage._useCardBaseChange ??= 0;
						trigger.card.storage._useCardBaseChange ++;
					},
				},
				jiaodiao: {
					direct: true,
					trigger: {
						target: "useCardToTarget",
					},
					priority: 1145141919,
					filter: function(event, player) {
						return event.player !== player && event.player.countCards("h");
					},
					async content(event, trigger, player) {
						if (!event.name.endsWith(player.storage._ny_yanzoudiaoshi)) return;
						await player.randomGain(trigger.player, "h");
					},
				},
				zhidiao: {
					direct: true,
					trigger: {
						player: "damageBegin4",
					},
					priority: 1145141919,
					filter: function(event, player) {
						return !event.card && event.num >= player.hp;
					},
					async content(event, trigger, player) {
						if (!event.name.endsWith(player.storage._ny_yanzoudiaoshi)) return;
						trigger.cancel();
					},
				},
				yudiao: {
					direct: true,
					trigger: {
						player: "loseHpBegin",
					},
					priority: -1145141919,
					filter: function(event, player) {
						return event.num > 1;
					},
					async content(event, trigger, player) {
						if (!event.name.endsWith(player.storage._ny_yanzoudiaoshi)) return;
						trigger.num = 1;
					},
				},
			},
		},
		//符石技能
		//进攻符石
		_ny_jinGong_duopo: {//夺魄
			trigger: {
				source: "damageSource",
			},
			content() {
				player.recover();
			},
		},
		_ny_jinGong_jinghong: {//惊鸿
			trigger: {
				source: "damageBegin1",
			},
			filter(event, player) {
				if (event.card?.name != "sha") return false;
				return event.card?.storage?._useCardQianghua !== true;
			},
			content() {
				trigger.num++;
			},
		},
		_ny_jinGong_zhenshe: {//震慑
			trigger: {
				player: "useCardToPlayered",
			},
			filter(event, player) {
				if (event.targets.length !== 1) return false;
				return get.tag(event.card, "damage") >= 0.5;
			},
			async content(event, trigger, player) {
				await trigger.target.ny_loseNuQi(player, 3);
			},
		},
		_ny_jinGong_yuwei: {//余威
			trigger: {
				global: "cardsDiscardAfter",
		    },
			filter(event, player) {
				const evt = event.getParent();
				if (evt?.name != "orderingDiscard") return false;
				const evtx = evt.relatedEvent || evt.getParent();
				return player.hasHistory("useCard", evtxx => {
					if (!evtxx.card.isCard) return false;
					const info = get.info(evtxx.card);
					if (!info || info.type != "trick") return false;
					return evtx.getParent() == (evtxx.relatedEvent || evtxx.getParent());
			    });
			},
			async content(event, trigger, player) {
				let cards = _status.event.getTrigger().cards;
				if (cards.length !== 1) return;
				cards = cards[0];
				if (!cards.storage[event.name] && player.ny_filterStone(event.name)) {
					await player.ny_logStone(event.name);
					cards.storage[event.name] = true;
					await player.gain(cards, 'gain2').gaintag.add(event.name);
				} else {
					delete cards.storage._ny_jinGong_yuwei;
				}
			},
			noAutoContent: true,
			noAutoFilter: true,
		},
		_ny_jinGong_fulian: {//符炼
			trigger: {
			    source: "damageBegin1",
			},
			filter(event, player) {
				if (!event.card || get.type(event.card) !== "trick") return false;
			    return true;
			},
			content() {
			    trigger.num++;
			},
		},
		_ny_jinGong_youlong: {//游龙
			trigger: {
			    source: "damageBegin1",
			},
			filter(event, player) {
				if (event.card?.name != "sha") return false;
			    return event.card?.storage?._useCardQianghua;
			},
			content() {
			    trigger.num++;
			},
		},
		_ny_jinGong_gongjian: {//攻坚
			trigger: {
			    player: "shaMiss",
			},
			check(event, player) {
				return get.attitude(player, event.target) < 0;
			},
			forced: false,
			logTarget: "target",
			async content(event, trigger, player) {
				await trigger.target.loseHp();
			},
		},
		_ny_jinGong_shenmou: {//深谋
			trigger: {
			    player: "useCard",
			},
			filter(event, player) {
				const info = get.info(event.card);
				if (!info || info.type != "trick" || info.notarget || (info.selectTarget && info.selectTarget != 1)) return false;
				return true;
			},
			forced: false,
			check(event, player) {
				return get.value(event.card) - 4;
			},
			async content (event, trigger, player) {
				await trigger.directHit.addArray(game.players);
			},
		},
		_ny_jinGong_lingjian: {//灵剑
			trigger: {
			    player: "useCardToPlayered",
			},
			filter(event, player) {
				if (event.card.name !== "sha") return false;
				return event.target.getCards("he").some(card => get.type(card) == "equip");
			},
			content() {
				let card = trigger.target.getCards("he").filter((card) => get.type(card) == "equip").randomGet();
				player.gain(card, "gain2");
			},
		},
		_ny_jinGong_qianggong: {//强攻
			trigger: {
			    player: "useCardToPlayered",
			},
			filter(event, player) {
				if (event.card.name !== "sha") return false;
				if (typeof event.target.ny_nuqi == "undefined") return false;
				return true;
			},
			async content (event, trigger, player) {
				await trigger.target.ny_loseNuQi(player, 2);
			},
		},
		_ny_jinGong_tianfa: {//天罚
			trigger: {
			    source: "damageBefore",
			},
			marktext: "罚",
			intro: {
				nocount: true,
				name: "天罚",
				content: () => "此次伤害结算内，你无法因受到伤害而获得" + zhonghuiFunction.poptip("怒气", null, null, true),
			},
			filter(event, player) {
				if (typeof event.player.ny_nuqi == "undefined") return false;
				if (typeof event.player.ny_nuqiMax == "undefined") return false;
			    return player != event.player;
			},
			content() {
			    trigger.player.addMark('_ny_jinGong_tianfa');
				player.when({ source: "damageAfter" })
					.then(() => {
						trigger.player.removeMark('_ny_jinGong_tianfa');
						trigger.player.unmarkSkill('_ny_jinGong_tianfa');
						trigger.player.updateMarks();
					});
			},
		},
		_ny_jinGong_fenyong: {//奋勇
			trigger: {
			    player: "useCard1",
			},
			filter(event, player) {
				if (!player.isDamaged()) return false;
				return get.type2(event.card, false) === "basic";
			},
			content() {
				trigger.baseDamage++;
				if (trigger.card.name == "jlsgqs_mei") {
					if (!trigger.card.storage._useCardBaseChange) trigger.card.storage._useCardBaseChange = 1;
					else trigger.card.storage._useCardBaseChange++;
				}
			},
		},
		//防御符石
		_ny_fangYu_yuanbing: {//援兵
			trigger: {
			    player: ["damageEnd","loseHpAfter"],
			},
		    content() {
				player.recover();
		    },
		},
		_ny_fangYu_dunzhen: {//盾阵
			position: "he",
			enable: "chooseToUse",
			filterCard(card) {
				return get.type(card) == "equip";
			},
			viewAsFilter(player) {
				return player.countCards("he", { type: "equip" }) > 0;
			},
			viewAs: {
				name: "wuxie",
			},
			prompt: "将一张装备牌当无懈可击使用",
			precontent() {},
			check(card) {
				return 8 - get.value(card);
			},
		},
		_ny_fangYu_xiongbing: {//凶兵
			trigger: {
			    player: "damageEnd",
			},
			filter(event, player) {
			    if (event.source == undefined || event.source == player) return false;
				return event.source.countCards('he') > 0;
			},
			async content(event, trigger, player) {
				let num = trigger.num * 2;
				await trigger.source.randomDiscard(num);
				let card = trigger.source.getCards("e").randomGet();
				if (card) {
					trigger.source.$give(card, player, false);
					await player.equip(card);
				}
			},
		},
		_ny_fangYu_lingzhen: {//灵阵
			position: "he",
			enable: ["chooseToRespond", "chooseToUse"],
			filterCard(card) {
				return get.type(card) == "equip";
			},
			viewAsFilter(player) {
				return player.countCards("he", { type: "equip" }) > 0;
			},
			viewAs: {
				name: "shan",
				storage: {
					_useCardQianghua: true,
				},
			},
			prompt: "将一张装备牌当强化【闪】使用或打出",
			precontent() {},
			check(card) {
				return 8 - get.value(card);
			},
		},
		_ny_fangYu_Firstlingzhen: {//初版灵阵
			position: "he",
			enable: ["chooseToRespond", "chooseToUse"],
			filterCard(card) {
				return get.type(card) == "equip";
			},
			viewAsFilter(player) {
				return player.countCards("he", { type: "equip" }) > 0;
			},
			viewAs: {
				name: "shan",
				storage: {
					_ny_fangYu_Firstlingjian: true,
				},
			},
			prompt: "将一张装备牌当【闪】使用或打出",
			precontent() {},
			check(card) {
				return 8 - get.value(card);
			},
			subSkill:{
				effect:{
					trigger: {
						player: "useCard1",
					},
					filter(event, player) {
						if (typeof player.ny_nuqi == "undefined") return false;
						if (typeof player.ny_nuqiMax == "undefined") return false;
					    return event.card.storage?._useCardQianghua != true && player.ny_nuqi !== player.ny_nuqiMax && event.card.storage?._ny_fangYu_Firstlingjian == true;
					},
					async content(event, trigger, player) {
						await player.ny_addNuQi();
					},
				},
			},
		},
		_ny_fangYu_yingyong: {//英勇
			position: "he",
			enable: ["chooseToRespond", "chooseToUse"],
			filterCard(card) {
				return get.type(card) == "equip";
			},
			viewAsFilter(player) {
				return player.countCards("he", { type: "equip" }) > 0;
			},
			viewAs: {
				name: "jiu",
			},
			prompt: "将一张装备牌当【酒】使用或打出",
			precontent() {},
			check(card) {
				return 8 - get.value(card);
			},
		},
		_ny_fangYu_shenyou: {//神佑
			trigger: {
				player: ["damageBegin4","loseHpBefore"],
			},
			filter(event, player){
				if (event.name == "loseHp") return true;
				return get.type(event.card, "trick") == "trick";
			},
			content() {
				trigger.cancel();
			},
		},
		_ny_fangYu_miaosuan: {//妙算
			trigger: {
			    target: "useCardToTarget",
			},
			filter(event, player) {
				let info = get.info(event.card);
				if (!info || info.type != "trick" || info.notarget || (info.selectTarget && info.selectTarget != 1)) return false;
				if (player.storage.isMiaosuanIng == true) return false;
				return true;
			},
			forced: false,
			content() {
				trigger.card.storage.isMiaosuanIng = true;
				player.storage.isMiaosuanIng = true;
			},
			subSkill:{
				effect:{
					enable: "chooseToUse",
					prompt: "妙计：你可以视为使用一张【无懈可击】(不限次数)",
					viewAs:{
						name: "wuxie",
						suit: "none",
						number: null,
						isCard: true,
					},
					filter(event, player) {
						return player.storage.isFirstMiaosuanIng && player.storage.isMiaosuanIng == true;
					},
					viewAsFilter(player) {
						return player.storage.isFirstMiaosuanIng && player.storage.isMiaosuanIng == true;
					},
					filterCard: () => false,
					selectCard: -1,
				},
				restore:{
					trigger: {
						global: "useCardAfter",
					},
					filter(event) {
						return event.card.storage?.isMiaosuanIng == true;
					},
					content() {
						trigger.card.storage.isMiaosuanIng = false;
						game.players.forEach(current => {
							current.storage.isMiaosuanIng = false;
						});
					},
				},
			},
		},
		_ny_fangYu_Firstmiaosuan: {//初版妙算
			trigger: {
			    target: "useCardToTarget",
			},
			filter(event, player) {
				let info = get.info(event.card);
				if (!info || info.type != "trick" || info.notarget || (info.selectTarget && info.selectTarget != 1)) return false;
				if (player.storage.isFirstMiaosuanIng == true) return false;
				return player.ny_nuqi > 0;
			},
			forced: false,
			async content(event, trigger, player) {
				trigger.card.storage.isFirstMiaosuanIng = true;
				player.storage.isFirstMiaosuanIng = true;
			},
			subSkill:{
				effect:{
					enable: "chooseToUse",
					prompt: () => "妙计：你可以消耗1点" + zhonghuiFunction.poptip("怒气", null, null, true) + "并视为使用一张强化【无懈可击】(不限次数)",
					viewAs:{
						name: "wuxie",
						suit: "none",
						number: null,
						isCard: true,
						storage:{_useCardQianghua:true},
					},
					filter(event, player) {
						return player.storage.isFirstMiaosuanIng && player.storage.isFirstMiaosuanIng == true && player.ny_nuqi && player.ny_nuqi > 0;
					},
					viewAsFilter(player) {
						return player.storage.isFirstMiaosuanIng && player.storage.isFirstMiaosuanIng == true && player.ny_nuqi && player.ny_nuqi > 0;
					},
					async precontent(event, trigger, player) {
						await player.ny_loseNuQi();
					},
					filterCard: () => false,
					selectCard: -1,
				},
				restore:{
					trigger: {
						global: "useCardAfter",
					},
					filter(event) {
						return event.card.storage?.isFirstMiaosuanIng == true;
					},
					content() {
						trigger.card.storage.isFirstMiaosuanIng = false;
						game.players.forEach(current => {
							current.storage.isFirstMiaosuanIng = false;
						});
					},
				},
			},
		},
		_ny_fangYu_qingling: {//轻灵
			trigger: {
				player: "loseHpBefore",
			},
			filter(event, player) {
				return event.num > 1;
			},
			content() {
				trigger.num --;
			},
		},
		_ny_fangYu_sishou: {//死守
			mod: {
				maxHandcard(player, num) {
					return num + 6 + (player.maxHp - player.hp);
				},
			},
			modPlayerNum: 0,
		},
		_ny_fangYu_tiejia: {//铁甲
			trigger: {
				player: "damageBegin3",
			},
			filter(event) {
				return event.num > 1;
			},
			content() {
				trigger.num --;
			},
		},
		_ny_fangYu_jianren: {//坚韧
			trigger: {
				player: "damageEnd",
			},
			filter(event, player) {
				return player.isMinHp();
			},
			content() {
				player.recover();
			},
		},
		//摸牌符石
		_ny_moPai_shengji: {//生机
			trigger: {
			    player: "changeHp",
			},
			content() {
				let num = Math.min(Math.abs(trigger.num), 5);
				if (num > 0) {
					player.draw(num);
				}
			},
		},
		_ny_moPai_cangfeng: {//藏锋
			trigger: {
				global: "phaseEnd",
			},
			filter(event, player) {
			    return player.countCards('h');
			},
			content() {
			    player.draw(player.getCards('h').map(card => get.type2(card, player)).unique().length);
			},
		},
		_ny_moPai_junzhen: {//军阵
			trigger: {
				player: "phaseDrawBegin",
			},
			content() {
				trigger.num += game.players.length;
			},
		},
		_ny_moPai_zhangu: {//战鼓
			trigger: {
				player: "useCardToPlayered",
			},
			filter(event, player) {
			    return get.tag(event.card, "damage") >= 0.5;
			},
			content() {
				if (trigger.targets.length > 1) player.draw(2);
				else player.draw();
			},
		},
		_ny_moPai_youdi: {//诱敌
			trigger: {
				player: "ny_changeNuQi",
			},
			content() {
				player.draw(trigger.num);
			},
		},
		_ny_moPai_xuncha: {//巡查
			trigger: {
			    player: "loseAfter",
			    global: ["equipAfter","addJudgeAfter","gainAfter","loseAsyncAfter","addToExpansionAfter"],
			},
			filter(event, player) {
				var evt = event.getl(player);
				if (!evt || !evt.hs || !evt.hs.length) return false;
				return true;
			},
			async content(event, trigger, player) {
				let cards = trigger.getl(player).hs;
				for (let i of cards) {
				    if (player.ny_filterStone(event.name)) {
						if (player.isMinHandcard()) {
							await player.ny_logStone(event.name);
							await player.draw(2);
						} else break;
					} else break;
				}
			},
			noAutoContent: true,
		},
		_ny_moPai_wuku: {//武库
			trigger: {
				global: ["loseAfter","gainAfter","equipAfter","addJudgeAfter","loseAsyncAfter","addToExpansionAfter","cardsDiscardAfter"],
			},
			filter(event, player) {
				const cards = event.getd().filterInD('d').filter(c => get.position(c, true) == "d" && get.type(c, null, false) == "equip");
				if (!cards.length) return false;
				return game.hasPlayer2(i => i !== player && event.getd(i, "cards2").length);
			},
			async content(event, trigger, player) {
				let cards = trigger.getd().filter(card => (get.position(card, true) == "d" && get.type(card, null, false) == "equip"));
				await player.gain(cards, "gain2");
				await player.draw(2);
			},
		},
		_ny_moPai_xirao: {//袭扰
			trigger: {
				global: "ny_addNuQiBegin",
			},
			filter(event, player) {
				return event.num > 0 && event.player != player;
			},
			content() {
				player.draw(event.num);
			},
		},
		_ny_moPai_baoneng: {//爆能
			trigger: {
				player: "ny_addNuQiEnd",
			},
			filter: (event) => event.overNum > 0,
			content() {
				player.draw(event.overNum);
			},
		},
		_ny_moPai_huxiao: {//虎啸
			trigger: {
				global: "ny_loseNuQiBegin",
			},
			filter(event, player) {
				return event.player != player && event.num > 0;
			},
			content() {
				player.draw(trigger.num);
			},
		},
		_ny_moPai_yuling: {//御灵
			trigger: {
			    player: "phaseEnd",
			},
			filter(event, player) {
				return player.isDamaged();
			},
			content() {
				player.draw(2);
			},
		},
		_ny_moPai_qingshen: {//轻身
			trigger: {
			    player: "phaseDrawBegin",
			},
			filter(event, player) {
				return player.ny_nuqi < player.ny_nuqiMax;
			},
			content() {
				trigger.num += 2;
			},
		},
		//怒气符石
		_ny_nuQi_xingchi: {//星驰
			trigger: {
				target: "useCardToTargeted",
			},
			filter(event, player) {
				if (typeof player.ny_nuqi == "undefined") return false;
				if (typeof player.ny_nuqiMax == "undefined") return false;
				if (player.ny_nuqi === player.ny_nuqiMax) return false;
				if (event.player == player) return false;
				if (get.type(event.card) == "trick" && event.targets.length == 1) return true;
				return get.type(event.card) == "basic";
			},
			async content(event, trigger, player) {
				await player.ny_addNuQi(2);
			},
		},
		_ny_nuQi_qimou: {//奇谋
			trigger: {
			    player: "useCard",
			},
			filter(event, player) {
				if (player == _status.currentPhase) return false;
				return event.card.name == 'wuxie' && (player.ny_nuqi ?? 0) !== (player.ny_nuqiMax ?? 1);
			},
			async content(event, trigger, player) {
				await player.ny_addNuQi(2);
				var card = _status.currentPhase.getDiscardableCards('he').randomGet();
				if (card) {
					await _status.currentPhase.discard(card, player);
				}
			},
		},
		_ny_nuQi_shayi: {//杀意
			trigger: {
			    player: "useCardToPlayered",
			},
			filter(event, player) {
				if (typeof player.ny_nuqi == "undefined") return false;
				if (typeof player.ny_nuqiMax == "undefined") return false;
				return event.card.name == 'sha' && event.targets.length && player.ny_nuqi !== player.ny_nuqiMax;
			},
			async content(event, trigger, player) {
				if (trigger.target.isMinHp(true)) await player.ny_addNuQi(2);
				else await player.ny_addNuQi();
			},
		},
		_ny_nuQi_fenfa: {//奋发
			trigger: {
				player: "changeHp",
			},
			filter(event, player) {
				if (event.num > 0) return false;
				if (player.hp <= 4 && !player.isHealthy()) return true;
				if (typeof player.ny_nuqi == "undefined") return false;
				if (typeof player.ny_nuqiMax == "undefined") return false;
				return player.ny_nuqi !== player.ny_nuqiMax;
			},
			async content(event, trigger, player) {
				await player.ny_addNuQi();
				if (player.hp <= 4) await player.recover();
			},
		},
		_ny_nuQi_wuling: {//武灵
			//离开装备区
			trigger: {
				player: "loseAfter",
				global: ["equipAfter","addJudgeAfter","gainAfter","loseAsyncAfter","addToExpansionAfter"],
			},
			getIndex(event, player) {
				if (typeof player.ny_nuqi == "undefined") return false;
				if (typeof player.ny_nuqiMax == "undefined") return false;
				const evt = event.getl(player);
				if (player.ny_nuqi !== player.ny_nuqiMax && evt?.player === player && evt?.es?.length) {
					return evt.es.filter(c => get.type(c) == "equip").length;
				}
			    return false;
			},
			async content(event, trigger, player) {
				await player.ny_addNuQi(2);
			},
			subSkill: {
				add: {//进入装备区
					trigger: {
						player: "equipAfter",
					},
					Auto: true,
					sourceSkill: "_ny_nuQi_wuling",
					filter(event, player) {
					    if (typeof player.ny_nuqi == "undefined") return false;
					    if (typeof player.ny_nuqiMax == "undefined") return false;
						return player.ny_nuqi !== player.ny_nuqiMax && event.cards.some(c => get.type(c) == "equip");
					},
					async content(event, trigger, player) {
						await player.ny_addNuQi(2);
					},
				},
			},
		},
		_ny_nuQi_tongchou: {//同仇
			trigger: {
			    global: ["damageEnd","loseHpAfter"],
			},
			forced: false,
			async content(event, trigger, player) {
				await player.ny_addNuQi();
				await player.draw();
			},
		},
		_ny_nuQi_Firsttongchou: {//初版同仇
			trigger: {
				global: "changeHp",
			},
			filter(event) {
				return event.player.hp <= 4;
			},
			forced: false,
			async content(event, trigger, player) {
				await player.ny_addNuQi();
				await player.draw();
			},
		},
		_ny_nuQi_guimou: {//鬼谋
			trigger: {
				player: "useCardToPlayered",
			},
			filter(event, player) {
				if (typeof player.ny_nuqi == "undefined") return false;
				if (typeof player.ny_nuqiMax == "undefined") return false;
				return (get.type(event.card) == 'trick' || get.type(event.card) == 'delay') && event.targets.length && player.ny_nuqi !== player.ny_nuqiMax;
			},
			async content(event, trigger, player) {
				if (trigger.targets.length > 1) await player.ny_addNuQi(2);
				else await player.ny_addNuQi();
			},
		},
		_ny_nuQi_zhenfen: {//振奋
			trigger: {
				player: "ny_loseNuQiEnd",
			},
			filter(event, player) {
				return player.ny_nuqi <= 1;
			},
			async content(event, trigger, player) {
				await player.ny_addNuQi(2);
			},
		},
		_ny_nuQi_aibing: {//哀兵
			trigger: {
				player: "phaseBegin",
			},
			filter(event, player) {
				if (typeof player.ny_nuqi == "undefined") return false;
				if (typeof player.ny_nuqiMax == "undefined") return false;
				return player.isDamaged() && player.ny_nuqi !== player.ny_nuqiMax;
			},
			async content(event, trigger, player) {
				await player.ny_addNuQi(player.maxHp - player.hp);
			},
		},
		_ny_nuQi_jingbing: {//精兵
			trigger: {
				player: "phaseEnd",
			},
			filter(event, player) {
				if (typeof player.ny_nuqi == "undefined") return false;
				if (typeof player.ny_nuqiMax == "undefined") return false;
				return player.countCards('e') > 0 && player.ny_nuqi !== player.ny_nuqiMax;
			},
			async content(event, trigger, player) {
				await player.ny_addNuQi(2);
			},
		},
		_ny_nuQi_lingyuan: {//灵渊
			trigger: {
				player: "phaseBegin",
			},
			filter(event, player) {
				if (typeof player.ny_nuqi == "undefined") return false;
				if (typeof player.ny_nuqiMax == "undefined") return false;
				return player.ny_nuqi < 2 && player.ny_nuqi !== player.ny_nuqiMax;
			},
			async content(event, trigger, player) {
				await player.ny_addNuQi(2);
			},
		},
		_ny_nuQi_gujun: {//孤军
			trigger: {
				player: "phaseEnd",
			},
			filter(event, player) {
				if (typeof player.ny_nuqi == "undefined") return false;
				if (typeof player.ny_nuqiMax == "undefined") return false;
				return player.storage._discardNum && player.ny_nuqi !== player.ny_nuqiMax;
			},
			async content(event, trigger, player) {
				await player.ny_addNuQi(player.storage._discardNum);
			},
			subSkill: {
				num: {
					//记录弃牌阶段弃牌数
					trigger: {
					    player: "phaseDiscardAfter",
					},
					content() {
						let cntC = 0;
						player.getHistory("lose", evt => {
							if (evt?.type == 'discard' && evt?.getParent('phaseDiscard') == trigger && evt?.hs) {
								cntC += evt.hs.length;
							}
						});
						player.storage._discardNum = cntC;
						player.when({ player: "phaseEnd" })
							.then(() => player.storage._discardNum = 0);
					},
					priority: 1145141919810,
					Auto: true,
					sourceSkill: "_ny_nuQi_gujun",
					noAutoContent: true,
				},
			},
		},
		//战法
		_ny_zhanFa_lvedigongcheng: {//掠地攻城
			trigger: {
				player: "phaseBegin",
			},
			async cost(event, trigger, player) {
				let result = await player.chooseTarget()
					.set("filterTarget", (card, player, target) => player != target)
					.set("prompt", get.prompt(evnt.name.slice(0, -5)))
					.set("prompt2", get.prompt2(evnt.name.slice(0, -5)))
					.set("ai", (target) => -1 * get.attitude(_status.event.player, target))
					.forResult();
				event.result = {
					bool: result.bool,
					cost_data: result.targets?.[0],
				};
			},
			async content(event, trigger, player) {
				const target = event.cost_data;
				let num = Math.floor(Math.random() * 3 + 1);
				await target.damage(num, player);
				num = 1 + player.getAttackRange();
				await player.randomGain(num, target);
				num -= target.countCards("h");
				for (let i = 0; i < num; i++) {
					await target.damage(player);
				}
			},
		},
		_ny_zhanFa_xushidaifa: {//蓄势待发
			trigger: {
				player: "phaseEnd",
			},
		    content() {
				if (player.getHistory("sourceDamage").reduce((acc, cur) => acc + cur.num, 0) <= 4) {
					trigger.getParent("phase", false, true).phaseList?.splice(trigger.getParent("phase", false, true)?.num, 0 ,"phaseUse|_ny_zhanFa_xushidaifa")
				}
				trigger.getParent("phase", false, true).phaseList?.splice(trigger.getParent("phase", false, true)?.num, 0, "phaseDraw|_ny_zhanFa_xushidaifa");
		    },
		    priority: 1145,
		},
		_ny_zhanFa_anzhongtuxi: {//暗中突袭
			trigger: {
				global: "phaseZhunbeiBegin",
			},
			filter(event, player) {
				return event.player !== player;
			},
			async content (event, trigger, player) {
				await player.ny_addNuQi();
				let result = await player.chooseBool()
					.set("prompt", get.prompt(event.name))
					.set("prompt2", "令" + get.translation(trigger.player) + "随机弃置两张牌并失去1点怒气。")
					.set("target", trigger.player)
					.set("ai", () => {
						const { player, target } = get.event();
						return -get.attitude(player, target);
					}).forResult();
				if (!result.bool) return;
				await trigger.player.randomDiscard(2);
				await trigger.player.ny_loseNuQi(player);
			},
		},
		_ny_zhanFa_Firstpozhencuijian: {//初版破阵摧坚
			trigger: {
				player: "useCard",
			},
			filter(event) {
				const info = get.info(event.card);
				if (!info || info.type != "trick" || info.notarget || (info.selectTarget && info.selectTarget != 1)) return false;
				return true;
			},
			async content (event, trigger, player) {
				trigger.card.storage._useCardBaseChange ??= 0;
				trigger.card.storage._useCardBaseChange += 2;
				trigger.card.storage._ny_zhanFa_Firstpozhencuijian = true;
				await trigger.directHit.addArray(game.players);
			},
			subSkill: {
				effect: {
					trigger: {
						player: "useCardAfter",
					},
					usable: 1,
					Auto: true,
					forced: false,
					filter(event, player) {
						if (_status.currentPhase != player) return false;
						return event.card.storage?._ny_zhanFa_Firstpozhencuijian && event.targets.some(current => current.countDiscardableCards("h"));
					},
					async content (event, trigger, player) {
						const func = async (current) => {
							let handCards = current.getDiscardableCards("h");
							if (handCards.length == 0) return;
							let suits = [];
							for (let j of handCards) {
								suits.add(get.suit(j));
							}
							let suitDiscard = suits.randomGet();
							let cards = handCards.filter(card => get.suit(card) == suitDiscard);
							await i.modedDiscard(cards);
						};
						let num = 0;
						for (let current of trigger.targets) {
							await func(current);
							num += current.countCards("h");
						}
						if (num > player.countCards("h")) {
							for (let current of trigger.targets) {
								await func(current);
							}
						}
					},
				},
			},
		},
		_ny_zhanFa_feiyangbahu: {//飞扬跋扈
			mod: {
				cardUsable(card, player, num) {
					if (card.name == "sha") return num + player.countMark('_ny_zhanFa_feiyangbahu');
				},
			},
			noAutoMod: true,
			marktext: "飞",
			intro: {
				name: "飞扬跋扈",
				content: "你使用【杀】的次数+$",
			},
			trigger: {
				player: ["phaseJudgeBegin", "phaseUseBegin"],
			},
			filter(event, player) {
				if (event.name =="phaseJudge") return player.countCards("j");
				else return true;
			},
			content() {
				if (trigger.name == "phaseJudge") {
					let card = player.getCards("j").randomGet();
					player.modedDiscard(card);
				} else {
					player.draw(2);
					player.addMark(event.name);
					player.when({ player: "phaseUseEnd" })
						.then(() => player.clearMark("_ny_zhanFa_feiyangbahu"));
				}
			},
		},
		_ny_zhanFa_leitingnuhou: {//雷霆怒吼
			trigger: {
				player: "phaseZhunbeiBegin",
			},
			async cost(event, trigger, player) {
				const { result } = await player.chooseTarget(1)
					.set("filterTarget", (card, player, target) => {
						if (player == target) return false;
						if (!target.hasSkill('nuyan_podan')) return true;
						let cards  = target.getCards("he");
						for (let i of cards) {
						    let type = get.type2(i);
							if (type == "equip") return true;
						}
					})
					.set("prompt", get.prompt(event.name.slice(0, -5)))
					.set("prompt2", get.prompt2(event.name.slice(0, -5)))
					.set("ai", (target) => {
						const { player } = get.event();
						let num = -1 * get.attitude(player, target);
						if (!target.hasSkill('nuyan_podan')) num *= 2;
						if (num > 0) num += target.countCards("e");
						return num;
					});
				event.result = {
					bool: result.bool,
					cost_data: result.targets?.[0],
				};
			},
			async content(event, trigger, player) {
				const target = event.cost_data;
				let cards = target.getDiscardableCards("he").filter((card) => {
				    return get.type(card) == "equip";
				}).randomGets(2);
				await target.modedDiscard(cards);
				target.addTempSkill("nuyan_podan", { player:"phaseEnd" });
			},
		},
		_ny_zhanFa_gexuqipao: {//割须弃袍
			trigger: {
			    player: "dying",
			},
			filter(event, player) {
				return _status.currentPhase != player;
			},
			async content(event, trigger, player) {
				await player.draw(3);
				if (player.storage[event.name]) return;
				let { result } = await player.chooseToDiscard()
					.set("position", "he")
					.set("selectCard", 1)
					.set("filterCard", (card) => get.suit(card) == "heart")
					.set("prompt", get.prompt(event.name))
					.set("prompt2", "是否弃置一张♥牌并令本回合其他角色对你使用的黑色伤害牌无效")
					.set("ai", (card) => {
						if (card.name == 'tao') return -1;
						return 6 - get.value(card);
					});
				if (!result.bool) return;
				player.storage[event.name] = true;
				player.when({ global:"roundEnd" })
					.then(() => delete player.storage._ny_zhanFa_gexuqipao);
				player.storage._ny_zhanFa_gexuqipao_effect = true;
				player.addMark(event.name + "_effect");
				player.when({ global: "phaseEnd" })
					.then(() => player.clearMark("_ny_zhanFa_gexuqipao_effect"));
			},
			subSkill: {
				effect: {
					trigger: {
						target: "useCardToTarget",
					},
					marktext: "割",
					intro: {
						name: "割须弃袍",
						content: "本回合其他角色对你使用的黑色伤害牌无效",
					},
					filter(event, player) {
						if (player.storage._ny_zhanFa_gexuqipao_effect != true) return false;
						if (get.color(event.card) != "black") return false;
						if (!get.tag(event.card, "damage")) return false;
						return event.player != player;
					},
					content() {
						trigger.excluded.add(player);
					},
				},
			},
		},
		_ny_zhanFa_dandadudou: {//单打独斗
			trigger: {
				player:"phaseBegin",
			},
			content() {
				player.draw(2);
				if (game.players.length <= 2) {
					player.addMark("_ny_zhanFa_dandadudou_effect");
					player.when({ player:"phaseEnd" })
						.then(() => player.clearMark("_ny_zhanFa_dandadudou_effect"));
				}
			},
			subSkill: {
				effect: {
					marktext:"单",
					intro: {
						nocount: true,
						name: "单打独斗",
						content: "所有角色造成或受到的伤害+$",
					},
					trigger: {
						global: ["damageBegin3", "damageBegin1"],
					},
					filter(event, player) {
						return player.hasMark('_ny_zhanFa_dandadudou_effect');
					},
					content() {
						trigger.num += player.countMark(event.name);
					},
				},
			},
		},
		_ny_zhanFa_cuichengbazhai: {//摧城拔寨
			trigger: {
				player: "useCardToPlayered",
			},
			forced: false,
			filter(event, player) {
				return event.card.name == "sha";
			},
			check(event, player) {
				return -get.attitude(player, event.target);
			},
			async content(event, trigger, player) {
				trigger.getParent().baseDamage++;
				await trigger.getParent().directHit.addArray(game.players);
				if (trigger.target.storage[event.name] == true) return;
				if (trigger.getParent().baseDamage <= 0 || trigger.target.countCards("h") <= 0) return;
				const result = await player.chooseBool("是否摧毁" + trigger.target + get.cnNumber(trigger.getParent().baseDamage * 2) + "张手牌")
					.set("target", trigger.target)
					.set("ai", () => {
						const { player, target } = get.event();
						if (target.countCards("h") <= 2) return;
						return -get.attitude(player, target);
					}).forResult();
				if (!result.bool) return;
				trigger.target.storage[event.name] = true;
				trigger.target.when({ global: "phaseEnd" })
					.then(() => delete player.storage._ny_zhanFa_cuichengbazhai);
				let cards = trigger.target.getCards("h").randomGets(trigger.getParent().baseDamage * 2);
				await trigger.target.ny_cuihuiCards(cards);
			},
		},
		_ny_zhanFa_longzhenghudou: {//龙争虎斗
			mod: {
				cardEnabled2(card,player) {
					if (player.hasMark("_ny_zhanFa_longzhenghudou")) return false;
				},
			},
			noAutoMod: true,
			marktext: "龙",
			intro: {
				nocount: true,
				name: "龙争虎斗",
				content: () => "你无法使用或打出牌或因受到伤害而获得" + zhonghuiFunction.poptip("怒气", null, null, true) + "直至你的回合结束",
			},
			trigger: {
				player: "compare",
				target: "compare",
			},
			forced: false,
			filter(event, player) {
				if (event.player == player) return !event.iwhile;
				return true;
			},
			async content(event, trigger, player) {
			    game.log(player, "拼点牌点数视为", "#yK");
				if (player == trigger.player && get.type(trigger.card1) == "equip") {
					trigger.num1 = 13;
					player.storage._ny_zhanFa_longzhenghudou_target = trigger.target;
				} else if (player != trigger.player && get.type(trigger.card2) == "equip") {
					trigger.num2 = 13;
					player.storage._ny_zhanFa_longzhenghudou_target = trigger.player;
				}
				player.when({ player: "chooseToCompareAfter" })
					.filter((event, player) => player.storage._ny_zhanFa_longzhenghudou_target?.isIn())
					.step(async (event, trigger, player) => {
						const result = player.chooseBool("是否令" + get.translation(player.storage._ny_zhanFa_longzhenghudou_target) + "无法使用或打出牌且受伤不获得" + zhonghuiFunction.poptip("怒气", null, null, true) + "直至其回合结束")
							.set("ai",() => {
								const player = _status.event.player;
								return -1 * get.attitude(player, player.storage._ny_zhanFa_longzhenghudou_target)
							}).forResult();
						if (!result.bool) return;
						const target = player.storage._ny_zhanFa_longzhenghudou_target;
						target.addMark("_ny_zhanFa_longzhenghudou");
						target.when({ player: "phaseEnd" })
							.then(() => player.clearMark("_ny_zhanFa_longzhenghudou"));
					});
			},
		},
		_ny_zhanFa_yanxingjunfa: {//严刑峻法
			marktext: "刑",
			intro: {
				name: "严刑峻法",
				content: "你下次受到的伤害+$",
			},
			trigger: {
				source: "dying",
			},
			async content (event, trigger, player) {
				await player.ny_addNuQi();
				let { result } = await player.chooseBool("是否令" + get.translation(trigger.player) + "选择一项：1.翻面；2.失去1点" + zhonghuiFunction.poptip("怒气", null, null, true) + "且下次受到伤害+1")
					.set("target", trigger.player)
					.set("ai",() => {
						return -1 * get.attitude(_status.event.player, _status.event.target);
					});
				if (!result.bool) return;
				const choiceList = ["翻面", "失去1点" + zhonghuiFunction.poptip("怒气", null, null, true) + "且下次受到伤害+1"];
				const choices = ["选项一", "选项二"];
				if (!trigger.player.ny_nuqi) {
					choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + "</span>";
					choices.remove(choices[1]);
				}
				result = await trigger.player.chooseControl()
					.set("controls",choices)
					.set("choiceList",choiceList)
					.set("ai",() => _status.event.player.ny_nuqi > 0 ? "选项二" : "选项一")
					.set("prompt","〖龙争虎斗〗：请选择以下一项执行")
					.forResult();
				if (result.control == "选项一") await trigger.player.turnOver();
				else if (result.control == "选项二") {
					await trigger.player.ny_loseNuQi(player, 1);
					trigger.player.addMark(event.name);
					trigger.player.when({ player: "damageBegin3" })
						.then(() => {
							trigger.num ++;
							player.clearMark("_ny_zhanFa_yanxingjunfa");
						});
				}
			},
		},
		_ny_zhanFa_libingmoma: {//厉兵秣马
			marktext: "马",
			intro: {
				name: "厉兵秣马",
				content: "其他角色计算与你的距离+$直至本轮结束",
			},
			mod: {
			    globalTo(from, to, current) {
			        if (to.hasMark("_ny_zhanFa_libingmoma")) {
			            return current + to.countMark("_ny_zhanFa_libingmoma");
			        }
			    }, 
			},
			noAutoMod: true,
			trigger: {
				global: "roundStart",
			},
			async content(event, trigger, player) {
				let list = [],
				    shown = [],
					num = game.countPlayer() - 1;
				if (num <= 0) return;
				let piles = ["cardPile", "discardPile"];
				for (let pile of piles) {
					//zhonghuiFunction定义在了precontent.js里面，抄的话记得把定义也抄过去
					let p = zhonghuiFunction.randomPile(ui[pile].childNodes);
					for (let i = 0; i < ui[pile].childNodes.length; i++) {
						let card = p[i];
						let type = get.type(card);
						if (!list.includes(card) && type == "equip") {
							list.push(card);
							if (pile == "discardPile") shown.push(card);
							if (list.length >= num) break;
						}
					}
					if (list.length >= num) break;
				}
				if (list.length) {
					await player.gain(list)
						.set("shown_cards",shown)
						.set("animate", function (event) {
						    var player = event.player,
						        cards = event.cards,
						        shown = event.shown_cards;
						    if (shown.length < num) {
						        num = num - shown.length;
						        player.$draw(num);
						        game.log(player, "从牌堆获得了", get.cnNumber(num), "张装备牌");
						    }
						    if (shown.length > 0) {
						        player.$gain2(shown, false);
						        game.log(player, "从弃牌堆获得了", shown);
						    }
						    return 500;
						});
				}
				player.addMark(event.name, num);
				player.when({ global: "roundEnd" })
					.then(() => player.clearMark("_ny_zhanFa_libingmoma"));
			},
		},
		_ny_zhanFa_yetandiying: {//夜探敌营
			marktext: "夜",
			intro: {
				name: "夜探敌营",
				nocount: true,
				content(storage) {
				    return "本回合内，当你对" + get.translation(storage) + "造成大于1点的伤害时，此伤害-1；";
				},
			},
			trigger: {
				global: "phaseZhunbeiBegin",
			},
			filter(event, player) {
				return event.player !== player && event.player.countCards('h') > 0;
			},
			forced: false,
			async content(event,trigger,player){
				await player.gainPlayerCard(trigger.player, "h", "visible", true);
				trigger.player.storage,markAuto(event.name, player);
				trigger.player.markSkill("_ny_zhanFa_yetandiying");
				trigger.player.when({ player: "phaseEnd" })
					.then(() => {
						player.unmarkSkill("_ny_zhanFa_yetandiying");
						delete player.storage._ny_zhanFa_yetandiying;
					});
			},
			check(event,player) {
				return 1 - get.attitude(player, event.player);
			},
			subSkill: {
				effect: {
					trigger: {
						source:"damageBegin1",
					},
					filter(event, player) {
						if (event.num <= 1) return false;
						return player.storage._ny_zhanFa_yetandiying?.includes(event.player);
					},
					content() {
						trigger.num --;
					},
				},
			},
		},
		_ny_zhanFa_bixujishi: {//避虚击实
			marktext: "避",
			intro: {
				name: "避虚击实",
				nocount: true,
				content(storage, player) {
					if (!player.storage._ny_zhanFa_bixujishi_p && !player.storage._ny_zhanFa_bixujishi_n) return;
					let str = "";
					if (player.storage._ny_zhanFa_bixujishi_p > 0) str += "你造成伤害时，此伤害+" + String(player.storage._ny_zhanFa_bixujishi_p) + "<br>";
					if (player.storage._ny_zhanFa_bixujishi_n > 0) str += "你失去体力时，数值-" + String(player.storage._ny_zhanFa_bixujishi_n) + "<br>";
					return str + "这些效果持续至你的回合结束";
				},
			},
			trigger: {
				player: ["gainMaxHpAfter","loseMaxHpAfter"],
			},
			content() {
				player.draw(3 * trigger.num);
				if (trigger.name == "gainMaxHp") {
					player.storage._ny_zhanFa_bixujishi_p ??= 0;
					player.storage._ny_zhanFa_bixujishi_p += trigger.num;
				} else {
					player.storage._ny_zhanFa_bixujishi_n ??= 0;
					player.storage._ny_zhanFa_bixujishi_n += trigger.num;
				}
				player.markSkill("_ny_zhanFa_bixujishi");
				player.when({ player: "phaseEnd" })
					.then(() => {
						player.unmarkSkill('_ny_zhanFa_bixujishi');
						delete player.storage._ny_zhanFa_bixujishi_p;
						delete player.storage._ny_zhanFa_bixujishi_n;
					});
			},
			subSkill: {
				p: {
					trigger:{
						source: "damageBegin1",
					},
					filter(event, player) {
						return player.storage._ny_zhanFa_bixujishi_p > 0;
					},
					content() {
						trigger.num += player.storage._ny_zhanFa_bixujishi_p;
					},
				},
				n: {
					trigger:{
						player: "loseHpBegin",
					},
					filter(event, player) {
						return player.storage._ny_zhanFa_bixujishi_n > 0;
					},
					content() {
						trigger.num -= player.storage._ny_zhanFa_bixujishi_n;
						if (trigger.num <= 0) trigger.cancel();
					},
				},
			},
		},
		_ny_zhanFa_bainiaochaofeng: {//百鸟朝凤
			trigger: {
				player:"phaseUseBegin",
			},
			async content(event, trigger, player) {
				let list = [];
				for (let name of lib.inpile) {
					if (get.type(name) == "trick") list.push(['锦囊', '', name]);
				}
				if (list.length == 0) return;
				const { result } = await player.chooseButton(["###百鸟朝凤###是否视为强化使用一张普通锦囊牌？", [list, "vcard"]])
				    .set("ai", (button) => _status.event.player.getUseValue(button.link[2]))
					.set("filterButton", (button, player) => player.hasUseTarget(button.link[2]));
				if (!result.bool) return;
				let card = {
					name: result.links[0][2],
					isCard: true,
					storage:{
						_ny_zhanFa_bainiaochaofeng: true,
						_useCardQianghua: true,
					},
				};
				await player.chooseUseTarget(card, true);
			},
			subSkill: {
				effect: {
					trigger: {
						player: "useCardAfter",
					},
					filter(event, player) {
						return event.card.storage?._ny_zhanFa_bainiaochaofeng;
					},
					async content(event, trigger, player) {
						const targets = game.filterPlayer(current => current != player).sortBySeat(_status.currentPhase);
						if (!targets.length) return;
						player.line(targets);
						for (let target of targets) {
						    if (!target?.isIn()) continue;
							if (target.countCards("he") < 1) {
								await target.loseHp(2);
								continue;
							}
						    let { result } = await target.chooseCard("he", "将一张" + get.translation(trigger.card.name) + "交给" + get.translation(player) + "<br>否则，你失去2点体力", (card) => card.name == trigger.card.name)
								.set("target", player)
								.set("ai", (card) => {
									const { target, player } = get.event();
									if (get.attitude(player, target) > 0) return 114514;
								    return 6 - get.value(card);
								});
							if (result.bool) await target.give(result.cards, player);
							else await target.loseHp(2);
						}
					},
				},
			},
		},
		_ny_zhanFa_yihuajiemu: {//移花接木
			trigger: {
				global: "phaseUseBegin",
			},
			filter(event, player) {
				return event.player != player;
			},
			async content(event, trigger, player) {
				await player.draw();
				const att = get.attitude(player, trigger.player);
				const func = (att > 0) ? (card) => 10 - get.value(card) : (card) => {
					if (get.value(card) > 5) return -114514;
					else return -get.value(card);
				};
				const { result } = await player.chooseCard({
					selectCard: [1, 5],
					position: "h",
					ai: func,
					prompt: get.prompt(event.name),
					prompt2: get.prompt2(event.name),
				});
				if (result.bool && result.cards.length) {
					let num = result.cards.length;
					trigger.player.randomDiscard(num, "h");
					await trigger.player.gain(result.cards, "gain2");
					await player.draw(2);
				}
			},
		},
		_ny_zhanFa_zhengzhengrishang: {//蒸蒸日上
			marktext:"蒸",
			intro:{
				name: "蒸蒸日上",
				nocount: true,
				content: "本回合内，你使用黑/红色【杀】无次数/距离限制",
			},
			mod: {
			    cardUsable(card, player) {
					if (player.hasMark("_ny_zhanFa_zhengzhengrishang") && card.name == "sha" && get.color(card) == "black") return Infinity;
				},
				targetInRange(card, player, target) {
					if (player.hasMark("_ny_zhanFa_zhengzhengrishang") && card.name == "sha" && get.color(card) == "red") return true;
				},
			},
			noAutoMod: true,
			trigger:{
				player: "phaseZhunbeiBegin",
			},
			content() {
				player.storage[event.name] ??= 0;
				player.storage[event.name] ++;
				player.draw(player.storage[event.name]);
				player.markSkill(event.name);
				player.when({ player: "phaseEnd" })
					.then(() => player.unmarkSkill("_ny_zhanFa_zhengzhengrishang"));
			},
			subSkill: {
				time: {
					trigger: {
						player: "useCard",
					},
					filter(event,player) {
						if (!player.hasMark("_ny_zhanFa_zhengzhengrishang")) return false;
						return event.card.name == "sha" && ["black", "red"].includes(get.color(card));
					},
					content() {
						player.storage[event.name.slice(0, -5)] ++;
					},
				},
			},
		},
		_ny_zhanFa_Firsttongqiangtiebi: {//初版铜墙铁壁
			trigger: {
				global: "phaseBegin",
			},
			content() {
				player.changeHujia(4);
			},
			subSkill: {
				loseHp: {
					trigger: {
						player:"loseHpBegin",
					},
					Auto: true,
					filter(event, player) {
						return player.hujia > player.maxHp;
					},
					async content(event, trigger, player) {
						await player.changeHujia(-1);
						trigger.cancel();
					},
				},
			},
		},
		_ny_zhanFa_sheguoyouzui: {//赦过宥罪
			marktext: "赦",
			intro: {
				name: "赦过宥罪",
				nocount: true,
				content: "你造成伤害时，此伤害-1直至你的回合结束",
			},
			trigger: {
				player: "phaseZhunbeiBegin",
			},
			async cost(event, trigger, player) {
				let result = await player.chooseTarget(get.prompt2(event.name.slice(0, -5)))
					.set("ai", (target) => {
						const { player } = get.event();
						let num = -1 * get.attitude(player, target);
						if (target.isDamaged()) num += (num > 0) ? -5 : (num < 0) ? 5 : 0;
						return num;
					})
					.forResult();
				event.result = {
					bool: reuslt.bool,
					cost_data: result.targets?.[0],
				};
			},
			async content(event,trigger,player) {
				let target = event.cost_data;
				await target.recover();
				await target.link(false);
				await target.turnOver(false);
				if (target.hasMark("_ny_yinni") && lib.config.extension_怒焰武将_yinniSet) target.clearMark("_ny_yinni");
				target.addMark(event.name);
				target.when({ player:"phaseEnd" })
					.then(() => player.clearMark("_ny_zhanFa_sheguoyouzui"));
			},
			subSkill: {
				effect: {
					trigger: {
						source: "damageBegin1",
					},
					filter(event, player) {
						return player.hasMark("_ny_zhanFa_sheguoyouzui");
					},
					content() {
						trigger.num -= player.countMark(event.name.slice(0, -7));
					},
				},
			},
		},
		_ny_zhanFa_yixinghuandou: {//移星换斗
			trigger: {
				player: "phaseBegin",
			},
			async content(event,trigger,player) {
				//等人来做ai
				const result = await player.chooseTarget(get.prompt2(event.name), 2)
					.set("filterTarget",(card,player,target) => target.countCards("h"))
					.forResult();
				if (!result.bool) return;
				let target1 = result.targets[0],
					target2 = result.targets[1],
					hcards1 = target1.getCards("h"),
					hcards2 = target2.getCards("h"),
					choices = Array.from({ length: 7 }).map((_, i) => [i, get.cnNumber(i + 1, true)]);
				const next1 = await player.chooseButton(2, ['移行换斗：请选择你交换牌数和随机交换形式',
					'<div class="text center">交换牌数</div>',
					[choices, 'tdnodes'],
					'<div class="text center">交换形式</div>',
					[[["first","令两名目标角色随机交换等量张你选择数量的手牌"],["second","从两名目标角色的手牌中随机选取你选择牌数张牌，这些牌的拥有者将之交给另一名目标角色"]], 'tdnodes']
				])
					.set('filterButton', button => {
					    const link = button.link;
					    if (Boolean(ui.selected.buttons.length) !== (typeof link == 'number')) return false;
					    if (ui.selected.buttons?.length) {
					        if (ui.selected.buttons[0].link == 'first') return link < Math.min(hcards1.length, hcards2.length, 7);
					        return link < Math.min(7, hcards1.length + hcards2.length);
					    }
						return true;
					}).forResult();
				if (next1.links.length) {
					let num = next1.links[1] + 1;
					if (next1.links[0] == "first") {
						hcards1.randomSort();
						hcards2.randomSort();
						await target1.swapHandcards(target2, hcards1.splice(0,num), hcards1.splice(0,num));
					} else {
						//zhonghuiFunction定义在了precontent.js里面，抄的话记得把定义也抄过去
						let res = zhonghuiFunction.randomTwoListAndChoose(hcards1, hcards2, num);
						await target1.swapHandcards(target2, res.list1, res.list2);
					}
				}
				let next2 = await player.chooseBool("是否令" + get.translation(target1) + "与" + get.translation(target2)+"交换技能符石")
					.forResult();
				if (next2.bool) {
					if (!target1.ny_fushiId && !target2.ny_fushiId) return;
					//后续函数化
					let temp = target1.ny_fushiId;
					target1.ny_fushiId = target2.ny_fushiId;
					target2.ny_fushiId = temp;
					temp = target1.ny_fushiTime;
					target1.ny_fushiTime = target2.ny_fushiTime;
					target2.ny_fushiTime = temp;
					temp = target1.ny_zhuanShuFuShiId;
					target1.ny_zhuanShuFuShiId = target2.ny_zhuanShuFuShiId;
					target2.ny_zhuanShuFuShiId = temp;
					if (target1.ny_fushiId !== undefined) target1.markSkill("_ny_getFuShi");
					else target1.unmarkSkill("_ny_getFuShi");
					if (target2.ny_fushiId !== undefined) target2.markSkill("_ny_getFuShi");
					else target2.unmarkSkill("_ny_getFuShi");
				}
			},
		},
		_ny_zhanFa_shehunduopo: {//摄魂夺魄
			trigger: {
			    player: "gainEnd",
			},
			forced: false,
			filter(event,player) {
				return event.source && event.source != player && event.getl(event.source).hs.length > 0;
			},
			async content(event, trigger, player) {
				await trigger.source.ny_loseNuQi(player);
				await player.ny_addNuQi();
				if (trigger.getl(trigger.source).hs.length > 3 && (player.storage[event.name] !== true)) {
					player.storage[event.name] = true;
					player.when({ global: "phaseEnd" })
						.then(() => delete player.storage._ny_zhanFa_shehunduopo);
					trigger.source.addTempSkill("fengyin", { player: "phaseEnd" });
				}
			},
		},
		_ny_zhanFa_jiuhanzhanyong: {//酒酣战勇
			trigger: {
				player: "phaseUseBegin",
			},
			async content(event, trigger, player) {
				await player.chooseUseTarget("jiu", false, true);
				let list = [],
				    shown = [];
				let piles = ["cardPile", "discardPile"];
				for (let pile of piles) {
					//zhonghuiFunction定义在了precontent.js里面，抄的话记得把定义也抄过去
					let p = zhonghuiFunction.randomPile(ui[pile].childNodes);
				    for (let i = 0; i < ui[pile].childNodes.length; i++) {
				        let card = p[i];
				        if (!list.some(i => i.name == card.name) && get.tag(card, "damage")) {
				            list.push(card);
				            if (pile == "discardPile") shown.push(card);
				        } else if (card.name == "sha" && !list.some(i => i.name == "sha" && i.nature == get.nature(card))) {
							list.push(card);
							if (pile == "discardPile") shown.push(card);
						}
				    }
				}
				if (list.length) {
				    await player.gain(list)
						.set("shown_cards", shown)
						.set("animate", function (event) {
							const { player, cards, shown_cards } = event;
							let num = list.length;
						    if (shown_cards.length < num) {
								num = num - shown_cards.length;
								player.$draw(num);
								game.log(player, "从牌堆获得了", get.cnNumber(num), "张伤害牌");
							}
						    if (shown_cards.length > 0) {
								player.$gain2(shown_cards, false);
								game.log(player, "从弃牌堆获得了", shown_cards);
						    }
						    return 500;
						});
				}
			},
		},
		_ny_zhanFa_gubenguiyuan: {//固本归元
			marktext: "固",
			intro: {
				name: "固本归元",
				intro: "你造成的属性伤害+1直至本回合结束",
			},
			trigger: {
				player: "damageEnd",
			},
			filter(event) {
				return event.nature;
			},
			content() {
				if (player.countCards("h") < player.maxHp) player.draw();
				player.addMark(event.name);
				player.when({ global: "phaseEnd" })
					.then(() => player.unmarkSkill("_ny_zhanFa_gubenguiyuan"));
			},
			subSkill: {
				effect: {
					trigger: {
						player: "damageBegin1",
					},
					filter(event,player) {
						return event.nature && player.hasMark("_ny_zhanFa_gubenguiyuan");
					},
					content() {
						trigger.num++;
					},
				},
			},
		},
		_ny_zhanFa_pozhencuijian: {//破阵摧坚
			trigger: {
			    player: "useCard",
			},
			forced: false,
			filter(event, player) {
				const info = get.info(event.card);
				if (!info || info.type != "trick" || info.notarget || (info.selectTarget && info.selectTarget != 1)) return false;
				return true;
			},
			async content (event, trigger, player) {
				trigger.card.storage ??= {};
				trigger.card.storage._useCardBaseChange ??= 0;
				trigger.card.storage._useCardBaseChange += 2;
				trigger.card.storage._ny_zhanFa_pozhencuijian = true;
				await trigger.directHit.addArray(game.players);
			},
			subSkill: {
				effect: {
					trigger: {
						player: "useCardAfter",
					},
					usable: 1,
					Auto: true,
					sourceSkill: "_ny_zhanFa_pozhencuijian",
					filter(event, player) {
						if (_status.currentPhase != player) return false;
						return event.card.storage?._ny_zhanFa_pozhencuijian == true && trigger.targets?.some(item => item.countCards("h"));
					},
					async content (event, trigger, player) {
						const { result } = await player.chooseBool(get.prompt(event.name.slice(0, -7)) + "<br>摧毁" + get.translation(trigger.targets) + "半数手牌（向上取整）")
							.set("ai", () => true);
						if (!result.bool) return;
						for (i of trigger.targets) {
							let cards = i.getCards("h");
							if (cards.length) {
								cards = cards.randomGets(Math.ceil(cards.length / 2));
								await i.ny_cuihuiCards(cards);
							}
						}
					},
				},
			},
		},
		_ny_zhanFa_zhulianbihe: {//珠联璧合
			trigger: {
				player: "useCard",
			},
			filter(event, player) {
				return get.is.convertedCard(event.card) && event.card.number == player.storage._ny_zhanFa_zhulianbihe_record;
			},
			async content(event, trigger, player) {
				const gaincard = get.cardPile2((card) => card.number == (trigger.card.number ?? 0) + 1, "random");
				const showcard = gaincard?.filterInD();
				if (gaincard) {
					await player.gain(gaincard)
						.set("shown_cards", shown)
						.set("animate", function (event) {
						    const { player, shown_cards } = event;
						    if (shown_cards) {
								player.$gain2(shown_cards, false);
								game.log(player, "从弃牌堆获得了", shown_cards);
							} else {
								player.$draw();
								game.log(player, "从牌堆获得了1张点数为", get.strNumber(player.storage._ny_zhanFa_zhulianbihe_record + 1), "的牌");
							}
						    return 500;
						});
				}
				if (get.tag(trigger.card, "damage")) await trigger.directHit.addArray(game.players);
			},
			subSkill: {
				record: {
					marktext: "珠",
					intro: {
						name: "珠联璧合",
						nocount: true,
						content(storage, player) {
						    return "你使用的上一张牌的点数为" + get.strNumber(storage);
						},
					},
					trigger: {
						player: "useCardAfter",
					},
					Auto: true,
					sourceSkill: "_ny_zhanFa_zhulianbihe",
					noAutoContent: true,
					content() {
						player.storage[event.name] = trigger.card.number;
						player.markSkill(event.name);
					},
					priority: 1145141919810,
				},
			},
		},
		_ny_zhanFa_shirupozhu: {//势如破竹
			trigger: {
				source: ["damageBefore", "damageSource"],
			},
			filter(event, player) {
				if (!event.card) return false;
				let info = get.info(event.card);
				if (!info || info.notarget || info.type != "trick") return false;
				return info.selectTarget && info.selectTarget != 1;
			},
			async content(event, trigger, player) {
				if (event.triggername.endsWith("Before")) {
					game.setNature(trigger, "fire");
				} else {
					if (trigger.card.storage?._useCardQianghua) {
						await player.ny_addNuQi();
						const cards = trigger.player.getCards("h").randomGets(trigger.num);
						await trigger.player.ny_cuihuiCards(cards);
					}
				}
			},
		},
		nuyan_mouYi: {//谋奕机制模块化
			subSkill: {
				"激将法": {
					charlotte: true,
					direct: true,
					sub: true,
					sourceSkill: "nuyan_mouYi",
					priority: 11451419,
					init2(player, skill) {
						lib.skill.nuyan_mouYi.addMark(player, skill.slice(-3));
					},
					onremove(player, skill) {
						lib.skill.nuyan_mouYi.loseMark(player, skill.slice(-3), Infinity);
					},
					trigger: {
						player: "damageBegin3",
						source: "damageBegin2",
					},
					content() {
						trigger.num ++;
					},
				},
			},
			async content(player, target, name) {
				if (!this[name]) return;
				let controls1 = [],
					controls2 = [],
					choiceList = [];
				for (let item in this[name]) {
					if (["info1", "info2"].includes(item)) continue;
					controls1.add(item);
					choiceList.add(`【${item}】：${this[name][item].info}`);
					let num = this[name][item].type;
					controls2[num] ??= "";
					controls2[num] += "【" + item + "】、";
				}
				controls2 = controls2.map(i => "抵御：" + i.slice(0, -1));
				let result1 = await player.chooseControl(true)
					.set("prompt", this[name]["info1"] + "<br>目标：" + get.translation(target))
					.set("controls", controls1)
					.set("choiceList", choiceList)
					.set("ai", () => {
						let { controls } = get.event();
						return controls[Math.floor(Math.random() * controls.length)];
					})
					.forResultControl();
				choiceList = choiceList.map(item => item.replaceAll("你", get.translation(player)).replaceAll("目标", "你"));
				let result2 = await target.chooseControl(true)
					.set("prompt", this[name]["info2"] + "<br>来源：" + get.translation(player))
					.set("controls", controls2)
					.set("choiceList", choiceList)
					.set("ai", () => {
						let { controls } = get.event();
						return controls[Math.floor(Math.random() * controls.length)];
					})
					.forResultControl();
				if (!result2.includes(result1)) {
					await this[name][result1].content(player, target, "nuyan_mouYi", result1);
					return true;
				}
				return false;
			},
			marktext: "谋",
			intro: {
				name: "<b>谋奕效果</b>",
				content(storage) {
					let str = "";
					const map = {
						"养精蓄锐": "你下次造成伤害+",
						"缓兵计": "直至你的回合结束，你的怒气上限-",
						"激将法": "你本阶段造成或受到的伤害+",
					};
					for (let item of map) {
						if (storage[item]) str += map[item] + storage[item] + "<br>";
					}
					if (!str) return;
					return str.slice(0, -4);
				},
			},
			addMark(player, name, num) {
				if (!num) num = 1;
				player.storage.nuyan_mouYi ??= {};
				let storage = player.storage.nuyan_mouYi;
				storage[name] ??= 0;
				storage[name] += num;
				player.markSkill("nuyan_mouYi");
			},
			removeMark(player, name, num) {
				if (!num) num = 1;
				let storage = player.storage.nuyan_mouYi;
				if (!storage) return;
				storage[name] -= num;
				if (storage[name] <= 0) {
					delete storage[name];
				}
				if (Object.keys(storage) == 0) player.unmarkSkill("nuyan_mouYi");
			},
			//谋司马懿
			nuyan_mou_simayi: {
				info1: "怒焰谋司马懿【谋奕】：请选择一项执行，目标可以选择抵御一项",
				info2: "怒焰谋司马懿【谋奕】：可能执行以下效果之一，请选择抵御一项",
				"以逸待劳": {
					info: "你回复1点体力并摸一张牌",
					type: 0,
					async content(player) {
						await player.recover();
						await player.draw();
					},
				},
				"离间计": {
					info: "目标失去2点体力",
					type: 1,
					async content(player, target) {
						await target.loseHp(2);
					},
				},
				"养精蓄锐": {
					info: "你摸两张牌且下次造成的伤害+1",
					type: 2,
					async content(player, target, skill, item) {
						await player.draw(2);
						get.info(skill).addMark(player, item);
						player.when({ source: "damageBegin1" })
							.then(() => {
								trigger.num ++;
								lib.skill.nuyan_mouYi.removeMark(player, "养精蓄锐", Infinity);
							});
					},
				},
				"缓兵计": {
					info: "目标怒气上限-1直至其回合结束",
					type: 3,
					async content(player, target, skill, item) {
						get.info(skill).addMark(target, item, 1);
						await target.ny_loseNuQiMax(player);
						target.when({ player: "phaseEnd" })
							.step(async (event, trigger, player) => {
								lib.skill.nuyan_mouYi.removeMark(player, "缓兵计", Infinity);
								await player.ny_gainNuQiMax();
							});
					},
				},
			},
			//怒焰谋诸葛亮
			nuyan_mou_zhugeliang: {
				info1: "怒焰谋诸葛亮【谋奕】：请选择一项执行，目标可以选择抵御一项",
				info2: "怒焰谋诸葛亮【谋奕】：可能执行以下效果之一，请选择抵御一项",
				"草船借箭": {
					info: "你获得目标两张手牌",
					type: 0,
					async content(player, target) {
						if (player.countGainableCards(target, "h") <= 2) await player.gain(player.getGainableCards(target, "h"), "gain2")
						else await player.gainPlayerCard(target, "h", 2, true, "怒焰谋诸葛亮【谋奕】：获得其两张手牌");
					},
				},
				"激将法": {
					info: "目标本阶段造成或受到的伤害+1",
					type: 1,
					async content(player, target, skill, item) {
						target.addTempSkill(skill + "_" + item, { global: "phaseUseEnd" });
					},
				},
				"瞒天过海": {
					info: "目标翻面",
					type: 2,
					async content(player, target) {
						await target.turnOver();
					},
				},
				"空城计": {
					info: "目标受到2点无来源伤害",
					type: 3,
					async content(player, target) {
						await target.damage(2, "nosource");
					},
				},
			},
		},
		/*
			技能的nuyan_star属性表示解锁此技能所需武将星级
			技能的nuyan_jiBan属性表示此技能为额外获得的羁绊技能
		*/
		//通用技能
		nuyan_podan: {
			mark: true,
			marktext: "禁",
			intro: {
				nocount: true,
				name: "破胆",
				content: "当你不因【酒】回复体力后，取消之",
			},
			trigger: {
			    player: "recoverBefore",
			},
			filter: (event) => !event.card?.name == "jiu",
			forced: true,
			firstDo: true,
			content() {
			    trigger.cancel();
			},
			ai: {
			    effect: {
			        target(card, player, target) {
			            if (get.tag(card, "recover") && card.name != 'jiu') return "zeroplayertarget";
			        },
			    },
			},
			priority: 1145,
		},
		nuyan_fushizongshi: {//符石宗师
			trigger:{
				global:"gameStart",
				player: ["enterGame", "changeCharacterAfter"],
			},
			nuyan_jiBan:true,
			direct:true,
			usable:1,
			filter: function(event,player) { 
				if (!player.ny_fushiId) return false;
				return true;
			},
			content: function(){
				for (let i = 0; i < 4; i++) {
					player.ny_fushiTime[i]++;
				}
				if (player.ny_zhuanShuFuShiId) {
					for (let i in player.ny_zhuanShuFuShiId) {
						player.ny_fushiTime[Number(i)+4]++;
					}
				}
				game.log(player,"所有技能符石触发次数+1");
			},
			priority: 114513,
		},
		nuyan_fushidashi: {//符石大师
			trigger:{
				global:"gameStart",
				player: ["enterGame", "changeCharacterAfter"],
			},
			direct:true,
			nuyan_jiBan:true,
			usable:1,
			filter: function(event,player) { 
				if (!player.ny_fushiId) return false;
				return true;
			},
			content: function(){
				let list = ["jinGong","fangYu","moPai","nuQi"];
				if (player.ny_zhuanShuFuShiId) player.ny_zhuanShuFuShiId.forEach(i => list.push(i));
				let i = Math.floor(Math.random() * list.length);
				player.ny_fushiTime[i]++;
				if (i < 4) game.log(player,get.translation(list[i]),"技能符石触发次数+1");
				else game.log(player,"的专属技能符石〖",get.translation(list[i]),"〗触发次数+1");
				
			},
			priority: 114513,
		},
		nuyan_jingongdashi: {//进攻大师
			trigger:{
				global:"gameStart",
				player: ["enterGame", "changeCharacterAfter"],
			},
			direct:true,
			nuyan_jiBan:true,
			usable:1,
			filter: function(event,player) { 
				if (!player.ny_fushiId) return false;
				return true;
			},
			content: function(){
				player.ny_fushiTime[0]++;
				game.log(player,"进攻技能符石触发次数+1");
			},
			priority: 114512,
		},
		nuyan_fangyudashi: {//防御大师
			trigger:{
				global:"gameStart",
				player: ["enterGame", "changeCharacterAfter"],
			},
			direct:true,
			nuyan_jiBan:true,
			usable:1,
			filter: function(event,player) { 
				if (!player.ny_fushiId) return false;
				return true;
			},
			content: function(){
				player.ny_fushiTime[1]++;
				game.log(player,"防御技能符石触发次数+1");
			},
			priority: 114512,
		},
		nuyan_mopaidashi: {//摸牌大师
			trigger:{
				global:"gameStart",
				player: ["enterGame", "changeCharacterAfter"],
			},
			direct:true,
			nuyan_jiBan:true,
			usable:1,
			filter: function(event,player) { 
				if (!player.ny_fushiId) return false;
				return true;
			},
			content: function(){
				player.ny_fushiTime[2]++;
				game.log(player,"摸牌技能符石触发次数+1");
			},
			priority: 114512,
		},
		nuyan_nuqidashi: {//怒气大师
			trigger:{
				global:"gameStart",
				player: ["enterGame", "changeCharacterAfter"],
			},
			direct:true,
			nuyan_jiBan:true,
			usable:1,
			filter: function(event,player) { 
				if (!player.ny_fushiId) return false;
				return true;
			},
			content: function(){
				player.ny_fushiTime[3]++;
				game.log(player,"怒气技能符石触发次数+1");
			},
			priority: 114512,
		},
		//怒焰曹叡
		nuyan_huituo: {//恢拓
		    //audio: "ext:怒焰武将/audio/skill:2",
		    trigger: {
		        player: "damageEnd",
		    },
		    direct: true,
		    content: function(){
		        'step 0'
		        player.chooseTarget(get.prompt2('nuyan_huituo')).set('ai',function(target){
		            var player=_status.event.player;
		            if(get.attitude(player,target)>0){
		                return get.recoverEffect(target,player,player)+1;
		            }
		            return 0;
		        });
		        'step 1'
		        if(result.bool){
		            player.logSkill('nuyan_huituo',result.targets);
		            var target=result.targets[0];
		            event.target=target;
		            target.judge(function(card){
		                if(target.hp==target.maxHp){
		                    if(get.color(card)=='red') return -1;
		                }
		                if(get.color(card)=='red') return 1;
		                return 0;
		            });
		        }
		        else{
		            event.finish();
		        }
		        'step 2'
		        if(result.color){
		            if(result.color=='red'){
						event.target.recover(trigger.num);
						event.target.draw();
		            }
		            else{
		                event.target.draw(trigger.num);
						event.target.recover();
		            }
		        }
		    },
		    ai: {
		        maixie: true,
		        "maixie_hp": true,
		    },
		    priority: 0,
		},
		nuyan_mingjianchaogang: {//明鉴朝纲
			nuyan_star: 1,
		    enable: "phaseUse",
		    usable: 1,
		    filterTarget: function(card,player,target){
		        return player!=target;
		    },
		    filter: function(event,player){
		        return player.countCards('h')>0;
		    },
		    filterCard: true,
		    selectCard: -1,
		    discard: false,
		    lose: false,
		    delay: false,
			prepare: "give2",
		    content: function(){
		        player.give(cards,target);
		        target.addTempSkill('nuyan_mingjianchaogang2',{player:'phaseEnd'});
		        target.storage.nuyan_mingjianchaogang2 += cards.length;
		        target.updateMarks('nuyan_mingjianchaogang2');
				let limit = Number(lib.config.extension_怒焰武将_hujiaSet);
				player.changeHujia(cards.length, null ,limit);
		    },
		    ai: {
		        order: 1,
		        result: {
		            target: function(player,target){
		                if(target.hasSkillTag('nogain')) return 0;
		                if(player.countCards('h')==player.countCards('h','du')) return -1;
		                if(target.hasJudge('lebu')) return 0;
		                if(get.attitude(player,target)>3){
		                    var basis=get.threaten(target);
		                    if(player==get.zhu(player)&&player.hp<=2&&player.countCards('h','shan')&&!game.hasPlayer(function(current){
		                        return get.attitude(current,player)>3&&current.countCards('h','tao')>0;
		                    })) return 0;
		                    if(target.countCards('h')+player.countCards('h')>target.hp+2) return basis*0.8;
		                    return basis;
		                }
		                return 0;
		            },
		        },
		    },
		    priority: 0,
		},
		nuyan_mingjianchaogang2: {
		    charlotte: true,
		    mark: true,
			marktext:"明",
		    intro: {
				name:"明鉴朝纲",
		        content: "你的手牌上限+#，出杀次数+#",
		    },
		    init: function(player,skill){
		        if(!player.storage[skill]) player.storage[skill]=0;
		    },
		    onremove: true,
		    mod: {
		        maxHandcard: function(player,num){
		            return num+player.storage.nuyan_mingjianchaogang2;
		        },
		        cardUsable: function(card,player,num){
		            if(card.name=='sha') return num+player.storage.nuyan_mingjianchaogang2;
		        },
		    },
		},
		nuyan_enweibingshi: {//恩威并施
			nuyan_star: 3,
			trigger:{
				global:"phaseEnd",
			},
			frequent: true,
			async content(event,trigger,player) {
				let num = Math.min(player.countCards("h"),5);
				let result = await player.chooseTarget(1)
					.set("filterTarget", lib.filter.all)
					.set("prompt", get.prompt("nuyan_enweibingshi"))
					.set("prompt2", get.prompt2("nuyan_enweibingshi"))
					.set("ai", target => {
						var player = _status.event.player;
						if (player.countCards("h") >= player.hp) return -1 * get.attitude(player, target);
						else if (player == target) return 999;
						return get.attitude(player, target);
					})
					.forResult();
				if (result.bool) {
					let target = result.targets[0];
					if (player.countCards("h") >= player.hp) await target.damage("thunder",player,num);
					else await target.draw(num);
				}
			},
		},
		//怒焰戏志才
		nuyan_xianfuqiyue: {//先辅契约
			nuyan_star: 3,
			init2(player, skill) {
				let next = game.createEvent(skill + "_init");
				next.player = player;
				next.setContent("emptyEvent");
			},
		    trigger: {
		        player: "nuyan_xianfuqiyue_init",
		    },
		    forced: true,
		    filter(event,player){
		        return game.hasPlayer(current => current != player) && (event.name!='phase'||game.phaseNumber==0);
		    },
			audio: "xianfu",
		    async content(event,trigger,player){
		        let result = await player.chooseTarget('请选择〖先辅契约〗的目标',lib.translate.nuyan_xianfuqiyue_info,true,function(card,player,target){
		            return target!=player&&(!player.storage.nuyan_xianfuqiyue2||!player.storage.nuyan_xianfuqiyue2.includes(target));
		        })
		        	.set('ai',function(target){
		        		var att=get.attitude(_status.event.player,target);
		        		if(att==0) return Math.random();
		        		return att;
		        	})
		        	.set("animate", false).forResult();
		        if(result.bool){
		            var target=result.targets[0];
		            if(!player.storage.nuyan_xianfuqiyue2) player.storage.nuyan_xianfuqiyue2=[];
		            player.storage.nuyan_xianfuqiyue2.push(target);
		            player.addSkill('nuyan_xianfuqiyue2');
					//怒焰的标记一上来就明置
					if(!target.storage.nuyan_xianfuqiyue_mark) target.storage.nuyan_xianfuqiyue_mark=[];
					target.storage.nuyan_xianfuqiyue_mark.add(player);
					target.storage.nuyan_xianfuqiyue_mark.sortBySeat();
					target.markSkill('nuyan_xianfuqiyue_mark');
		        }
		    },
		    priority: 0,
		},
		nuyan_xianfuqiyue_mark: {
		    marktext: "先",
		    intro: {
				nocount:true,
		        name: "先辅契约",
		        content: "当你受到伤害后，$受到1点来源为你的伤害；当你不因此技能回复体力后，$回复等量的体力；当$不因此技能回复体力后，其可令你回复1点体力",
		    },
		    priority: 0,
		},
		nuyan_xianfuqiyue2: {
		    audio: "nuyan_xianfuqiyue",
			group:['nuyan_xianfuqiyue3'],
			sourceSkill: "nuyan_xianfuqiyue",
		    charlotte: true,
			audio: "xianfu",
		    trigger: {
		        global: ["damageEnd","recoverEnd"],
		    },
		    forced: true,
		    filter: function(event,player){
		        if(event.player.isDead() || !player.storage.nuyan_xianfuqiyue2 || event.num <= 0 || event.getParent().name == "nuyan_xianfuqiyue2") return false;
				if(player.storage.nuyan_xianfuqiyue2.includes(event.player) && event.name == 'damage') return true;
		        if(event.name == 'recover' && event.player == player) return player.storage.nuyan_xianfuqiyue2;
		        return player.isDamaged() && player.storage.nuyan_xianfuqiyue2.includes(event.player);
		    },
		    logTarget: "player",
		    async content (event,trigger,player) {
		        var target=trigger.player;
				if (trigger.name == 'damage') {
					await player.damage(1,target);
				}
		        else if (target == player && player.storage.nuyan_xianfuqiyue2) {
					let str = '';
					for (let i of player.storage.nuyan_xianfuqiyue2) {
						str += get.translation(i);
						str += '，';
					}
					str = str.slice(0,-1);
					let result = await player.chooseBool('是否令'+str+'回复1点体力')
						.set("ai", () => {
							let num = 0;
							for (let i of _status.event.player.storage.nuyan_xianfuqiyue2) {
								if (!i.isDamaged()) continue;
								num += get.attitude(_status.event.player, i);
							}
							return num;
						}).forResult();
					if (result.bool) {
						for (let i of player.storage.nuyan_xianfuqiyue2) {
							await i.recover();
						}
					}
				} else {
					await player.recover(trigger.num);
				}
		    },
		    onremove: function(player){
		        if(!player.storage.nuyan_xianfuqiyue2) return;
		        game.countPlayer(function(current){
		            if(player.storage.nuyan_xianfuqiyue2.includes(current)&&current.storage.nuyan_xianfuqiyue_mark){
		                current.storage.nuyan_xianfuqiyue_mark.remove(player);
		                if(!current.storage.nuyan_xianfuqiyue_mark.length) current.unmarkSkill('nuyan_xianfuqiyue_mark');
		                else current.markSkill('nuyan_xianfuqiyue_mark');
		            }
		        });
		        delete player.storage.nuyan_xianfuqiyue2;
		    },
		    priority: 0,
		},
		nuyan_xianfuqiyue3: {
		    charlotte: true,
		    trigger: {
		        global: "dieBegin",
		    },
		    forced: true,
		    silent: true,
			sourceSkill: "nuyan_xianfuqiyue",
		    filter: function(event,player){
				//孩子们，改这个代码的时候我发现了原版戏志才代码的bug
		        return event.player==player||(player.storage.nuyan_xianfuqiyue2&&player.storage.nuyan_xianfuqiyue2.includes(event.player));
		    },
		    content: function(){
		        if(player==trigger.player) lib.skill.nuyan_xianfuqiyue2.onremove(player);
		        else player.storage.nuyan_xianfuqiyue2.remove(event.player);
		    },
		    popup: false,
		    priority: 1,
		},
		nuyan_yizhijuncai: {//逸志俊才
			nuyan_star:1,
		    //audio: "ext:怒焰武将:2",
		    audioname: ["re_guojia","xizhicai","gz_nagisa"],
		    trigger: {
		        player: "judgeEnd",
		    },
		    frequent: function(event){
		        if(event.result.card.name=='du') return false;
		        return true;
		    },
		    check: function(event){
		        if(event.result.card.name=='du') return false;
		        return true;
		    },
		    filter: function(event,player){
		        return event.result?.card;
		    },
		    content: function(){
		        player.gain(trigger.result.card,'gain2');
		    },
		    priority: 0,
		},
		nuyan_chouce: {//筹策
		    trigger: {
		        player: ["changeHp"],
		    },
			filter: function (event,player) {
				return event.num < 0;
			},
		    async content (event,trigger,player) {
		        let num = Math.abs(trigger.num);
		        const color = await player.judge("nuyan_chouce").forResult("color");
		        if(color == 'black'){
		            if(game.hasPlayer(function(current){return current.countDiscardableCards(player,'hej')>0;})) {
						let result =  await player.chooseTarget('弃置一名角色区域内的'+String(num+1)+'张牌',function(card,player,target){
						    return target.countDiscardableCards(player,'hej');
						},true).set('ai',function(target){
						    var player=_status.event.player;
						    var att=get.attitude(player,target);
						    if(att<0){
						        att=-Math.sqrt(-att);
						    }
						    else{
						        att=Math.sqrt(att);
						    }
						    return att*lib.card.guohe.ai.result.target(player,target);
						}).forResult();
						if(result.bool) {
							var target=result.targets[0];
							player.line(target,'green');
							await player.discardPlayerCard(target,'hej',true,num+1);
						}
					}
		        } else if (color == 'red') {
		            let next = player.chooseTarget('令一名角色摸'+String(2*num)+'张牌');
		            if(player.storage.nuyan_xianfuqiyue2&&player.storage.nuyan_xianfuqiyue2.length){
		                next.set('prompt2','且'+get.translation(player.storage.nuyan_xianfuqiyue2)+'摸'+String(num)+'张牌');
		            }
		            next.set('ai',function(target){
		                var player=_status.event.player;
		                var att=get.attitude(player,target)/Math.sqrt(2*target.countCards('h'));
		                if(target.hasSkillTag('nogain')) att/=10;
		                if(player.storage.nuyan_xianfuqiyue2&&player.storage.nuyan_xianfuqiyue2.includes(target)) return att*2;
		                return att;
		            });
					let result = await next.forResult();
					if (result.bool) {
						var target=result.targets[0];
						player.line(target,'green');
						await target.draw(2 * num);
						if (player.storage.nuyan_xianfuqiyue2) {
							for (let i of player.storage.nuyan_xianfuqiyue2) {
								await i.draw(num);
							}
						}
					} 
		        }
		    },
		    ai: {
		        maixie: true,
		        "maixie_hp": true,
		        effect: {
		            target: function(card,player,target){
		                if(get.tag(card,'damage')){
		                    if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
		                    if(!target.hasFriend()) return;
		                    if(target.hp>=5) return [1,get.tag(card,'damage')*2.0];
		                    if(target.hp>=4) return [1,get.tag(card,'damage')*1.5];
		                    if(target.hp==3) return [1,get.tag(card,'damage')*1];
		                    if(target.hp==2) return [1,get.tag(card,'damage')*0.5];
		                }
		            },
		        },
		    },
		    priority: 0,
		},
		//怒焰界甘宁
		nuyan_qixi: {//奇袭
			audio: 2,
			audioname: ["re_ganning"],
			audioname2: { re_heqi: "duanbing_heqi" },
			group:['nuyan_qixi_discard'],
			enable: "phaseUse",
			filterCard(card) {
				return get.color(card) == "black";
			},
			position: "hes",
			viewAs: {
				name: "guohe",
				storage: { nuyan_qixi : true },
			},
			filter(event, player) {
				if (!player.countCards("hes", { color: "black" })) return false;
			},
			viewAsFilter(player) {
				if (!player.countCards("hes", { color: "black" })) return false;
			},
			prompt: "将一张黑色牌当过河拆桥使用",
			check(card) {
				return 4 - get.value(card);
			},
			subSkill:{
				discard:{
					forced:true,
					trigger: {
					    global: ["loseAfter","loseAsyncAfter"],
					},
					filter: function(event,player) {
						if (event.type != 'discard') return false;
						if ((event.discarder || event.getParent(2).player) != player) return false;
						if (event.player == player) return false;
						if (!event.getParent(3).card) return false;
						return event.getParent(3).card.name == 'guohe' && event.getParent(3).card.storage.nuyan_qixi == true && event.player.countCards('e') > 0;
					},
					async content (event,trigger,player) {
					    var card = trigger.player.getCards("e").randomGet();
					    await trigger.player.modedDiscard(card);
					},
					sub: true,
					sourceSkill: "nuyan_qixi",
				},
			},
		},
		nuyan_linjiangshenjian: {//临江神箭
			frequent:true,
			nuyan_star:1,
			trigger: {
			    global: ["loseAfter","loseAsyncAfter"],
				player: "nuyan_qixi_discardAfter",
			},
			filter: function(event,player,triggername) {
				if (triggername == "nuyan_qixi_discardAfter") return true;
				if (event.type != 'discard') return false;
				if ((event.discarder || event.getParent(2).player) != player) return false;
				if (event.player == player) return false;
				if (!event.cards.length) return false;
				if (!event.getParent(3).card) return false;
				return event.getParent(3).card.name == 'guohe';
			},
			content: async function (event, trigger, player) {
				if (event.triggername == "nuyan_qixi_discardAfter") {
					await player.draw()
				}
			    for (let i of trigger.cards) {
					if (get.type(i) == 'equip') await player.draw();
				}
			},
			priority: 0,
		},
		nuyan_yexidiying: {//夜袭敌营
		    audio: "ext:怒焰武将:2",
			nuyan_star:3,
		    trigger: {
		        global: "phaseZhunbeiBegin",
		    },
			group: "nuyan_yexidiying_effect",
		    direct: true,
		    filter: function(event,player){
				if (player == event.player) return false;
		        return lib.filter.targetEnabled({ name: "sha" }, player, event.player) && (player.hasSha() || (_status.connectMode && player.countCards("h") > 0));
		    },
		    content: function(){
		        player.chooseToUse(function (card, player, event) {
		                if (get.name(card) != "sha") return false;
		                   return lib.filter.filterCard.apply(this, arguments);
		               }, "夜袭敌营：是否对" + get.translation(trigger.player) + "使用一张杀？")
		            .set("logSkill", "nuyan_yexidiying")
		            .set("complexSelect", true)
		            .set("filterTarget", function (card, player, target) {
		                if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
		                return lib.filter.targetEnabled.apply(this, arguments);
		            })
		            .set("sourcex", trigger.player)
		            .set("oncard", function (card) {
		                try {
		                    card.nuyan_yexidiying_tag = true;
							if (!_status.currentPhase.countCards("e") > 0) {
								card.storage.nuyan_yexidiying_tag = true;
								let color = get.color(card);
								let cards = _status.currentPhase.getCards("h").filter(c => {
									return get.color(c) == color;
								});
								if (cards) _status.currentPhase.modedDiscard(cards);
							}
		                } catch (e) {
		                    alert("发生了一个导致〖夜袭敌营〗无法正常触发无视防具效果的错误。请关闭十周年UI/手杀ui等扩展以解决");
		                }
		            });
		    },
		    ai: {
		        unequip: true,
		        "unequip_ai": true,
		        skillTagFilter: function(player,tag,arg){
		             if(tag=='unequip_ai'){
		                 if(_status.event.getParent().name!='nuyan_yexidiying') return false;
		             }
		             else if(!arg||!arg.card||!arg.card.nuyan_yexidiying_tag) return false;
					 return true;
		         },
		    },
			subSkill:{
				effect:{
					trigger:{
						player:"useCard",
					},
					filter:function (event,player) {
						if (!event.card.nuyan_yexidiying_tag) return false;
						return event.card.storage.nuyan_yexidiying_tag == true;
					},
					forced:true,
					locked:false,
					content:function() {
						trigger.baseDamage++;
					},
					sub:true,
					sourceSkill:'nuyan_yexidiying',
				},
			},
		    priority: 0,
		},
		//怒焰界孙坚
		nuyan_yinghun: {//英魂
			audio: 2,
		    audioname: ["re_sunjian","sunce","re_sunben","re_sunce","ol_sunjian"],
		    "audioname2": {
		        "re_sunyi": "gzyinghun_re_sunyi",
		        "boss_sunce": "yinghun_sunce",
			},
		    trigger: {
		        player: ["changeHp","phaseZhunbeiBegin"],
		    },
		    filter: function(event, player, triggername){
				if (triggername == "phaseZhunbeiBegin") return true;
		        return event.num < 0;
		    },
		    async cost(event, trigger, player) {
		    	let result = await player
		    		.chooseTarget(get.prompt2("nuyan_yinghun"))
		    		.set("ai", function (target) {
		    			const player = _status.event.player;
		    			if (player.getDamagedHp() == 1 && target.countCards("he") == 0) {
		    				return 0;
		    			}
		    			if (get.attitude(_status.event.player, target) > 0) {
		    				return 10 + get.attitude(player, target);
		    			}
		    			if (player.getDamagedHp() == 1) {
		    				return -1;
		    			}
		    			return 1;
		    		})
		    		.setHiddenSkill(event.name.slice(0, -5))
		    		.forResult();
				if (result.bool) event.result = result;
		    },
		    async content(event, trigger, player) {
		    	const num = player.getDamagedHp();
		    	const [target] = event.targets;
		    	let directcontrol = num == 1;
		    	if (!directcontrol) {
		    		const str1 = "摸" + get.cnNumber(num, true) + "并随机弃置一张手牌";
		    		const str2 = "摸一并随机弃置" + get.cnNumber(num, true) + "张手牌";
		    		directcontrol =
		    			str1 ==
		    			(await player
		    				.chooseControl(str1, str2, function (event, player) {
		    					if (player.isHealthy()) return 1 - _status.event.choice;
		    					return _status.event.choice;
		    				})
		    				.set("choice", get.attitude(player, target) > 0 ? 0 : 1)
		    				.forResultControl());
		    	}
		    	if (directcontrol) {
		    		if (num > 0) await target.draw(num);
		    		await target.randomDiscard("h");
		    	} else {
		    		await target.draw();
		    		if (num > 0) await target.randomDiscard(num,"h");
		    	}
		    },
		    ai: {
		    	effect: {
		    		target(card, player, target) {
		    			if (
		    				get.tag(card, "damage") &&
		    				get.itemtype(player) === "player" &&
		    				target.hp >
		    				(player.hasSkillTag("damageBonus", true, {
		    					target: target,
		    					card: card,
		    				})
		    					? 2
		    					: 1)
		    			)
		    				return [1, 1];
		    		},
		    	},
		    	threaten(player, target) {
		    		return Math.max(0.5, target.getDamagedHp() / 2);
		    	},
		    	maixie: true,
		    },
		    priority: 0,
		},
		nuyan_hunyoujiangdong:{//魂佑江东
			//audio: 1,
			nuyan_star:1,
			trigger: {
				source: "dieAfter",
				player: "die",
			},
			forceDie: true,
			filter: function (event, player, name) {
				return (name == "die") || (event.source == player);
			},
			direct: true,
			async content (event,trigger,player) {
				let result = await player.chooseTarget(get.prompt("nuyan_hunyoujiangdong"), "令一名角色摸三张牌")
					.set("forceDie", true)
					.set("ai", target => get.attitude(_status.event.player, target)).forResult();
				if (result.bool) {
					var target = result.targets[0];
					player.logSkill("nuyan_hunyoujiangdong", target);
					await target.draw(3);
				}
			},
		},
		nuyan_jianbukecui:{//坚不可摧
			trigger: {
			    player: "phaseJieshuBegin",
			},
			//audio: 2,
			nuyan_star:3,
			group:["nuyan_jianbukecui_effect"],
			frequent:true,
			popup:false,
			filter: function (event, player) {
			    return player.hp > 0;
			},
			marktext:"坚",
			intro:{
				name:"坚不可摧",
				content:"当你受到伤害时，你移除1枚标记，防止此伤害",
			},
			async content (event,trigger,player) {
				let result = await player.chooseTarget(1,get.prompt2("nuyan_jianbukecui")).set("ai", function (target) {
				    var player = _status.event.player;
				    return get.attitude(player, target); 
				}).forResult();
				if (result.bool) {
					var target = result.targets[0];
					player.logSkill("nuyan_jianbukecui", target);
					await player.loseHp();
					let num = player.getDamagedHp();
					target.addMark("nuyan_jianbukecui",num);
					target.markSkill("nuyan_jianbukecui");
				}
			},
			subSkill:{
				effect:{
					trigger: {
					    global: "damageBegin3",
					},
					charlotte:true,
					forced:true,
					forceDie: true,
					filter: function(event,player){
						return event.player.hasMark("nuyan_jianbukecui") && event.num > 0;
					},
					content: function() {
						trigger.cancel();
						trigger.player.removeMark("nuyan_jianbukecui", 1);
						if (!trigger.player.hasMark("nuyan_jianbukecui")) {
							trigger.player.unmarkSkill('nuyan_jianbukecui');
							trigger.player.updateMarks();
						}
					},
					sourceSkill: "nuyan_jianbukecui",
					priority: -114514,
				}
			},
			priority: 0,
		},
		//怒焰徐盛
		nuyan_pojun: {//破军
		    trigger: {
		        player: "useCardToPlayered",
		    },
		    frequent: true,
		    filter: function(event,player){
		        return event.card.name == "sha" && event.target.countCards("h") > 0 && event.targets.length == 1;
		    },
		    async content (event,trigger,player) {
				let num = Number(lib.config.extension_怒焰武将_nuyan_star);
		        let result = await player.choosePlayerCard(true,trigger.target,[1,num+1],"h","你将其至多"+ get.cnNumber(num + 1) +"张手牌扣置于武将牌上").forResult();
				await trigger.target.addToExpansion(result.cards).gaintag.add("nuyan_pojun2");
				let filterSkill = "nuyan_yongliequedi";
				const ownedSkills = player.getSkills(null, false, true).filter(skill => {
				    return skill == filterSkill;
				});
				if (ownedSkills.length > 0 && !player.isTempBanned(filterSkill) && !(player.shixiaoedSkills && player.shixiaoedSkills.includes(filterSkill))) {
					let trick = false,
						equipCards = [];
					result.cards.forEach(i=>{
						if(get.type(i) == 'trick') trick = true;
						if(get.type(i) == 'equip') equipCards.push(i);
					});
					if (trick == true || equipCards.length) player.logSkill(filterSkill);
					if (trick == true) await player.draw();
					if (equipCards.length) {
						var randomCard = equipCards[Math.floor(Math.random() * equipCards.length)];
						await trigger.target.loseToDiscardpile(randomCard);
					}
				}
		        trigger.target.addSkill('nuyan_pojun2');
		    },
		    priority: 0,
		},
		nuyan_pojun2:{
			intro: {
			    markcount: "expansion",
				name:"破军",
			    mark: function(dialog,storage,player){
			        var cards=player.getExpansions('nuyan_pojun2');
			        if(player.isUnderControl(true)) dialog.addAuto(cards);
			        else return '共有'+get.cnNumber(cards.length)+'张牌';
			    },
			},
			trigger: {
			    global: "phaseEnd",
			},
			forced: true,
			popup: false,
			charlotte: true,
			filter: function(event,player){
			    return player.getExpansions('nuyan_pojun2').length>0;
			},
			content: function(){
			    'step 0'
			    var cards=player.getExpansions('nuyan_pojun2');
			    player.gain(cards,'draw');
			    game.log(player,'收回了'+get.cnNumber(cards.length)+'张“破军”牌');
			    'step 1'
			    player.removeSkill('nuyan_pojun2');
			},
			priority: 0,
		},
		nuyan_yongliequedi: {//勇烈却敌
			nuyan_star:1,
		    priority: 0,
		},
		nuyan_wanfumokai: {//万夫莫开
		    trigger: {
		        source: "damageBegin1",
		    },
		    locked:true,
			nuyan_star:3,
			forced:true,
		    logTarget: "player",
		    filter: function(event,player){
		        var target=event.player;
		        if(event.getParent().name!='sha') return false;
		        return player.countCards('h')>=target.countCards('h');
		    },
		    content: function(){
		        var target=trigger.player;
		        if(player.countCards('h')>=target.countCards('h')) trigger.num+=1;
		        if(target.countCards('h')===0) trigger.num+=2;
		    },
		    priority: 0,
		},
		//怒焰界魏延
		nuyan_kuanggu: {//狂骨
			audio: "kuanggu",
		    trigger: {
		        source: "damageEnd",
		    },
		    filter: function(event,player){
				if (event.player == player) return false;
				if (!player.ny_nuqi) return false;
				return true;
		    },
		    forced: true,
			locked: true,
		    async content (event,trigger,player) {
				let num = Math.ceil(player.ny_nuqi / 2);
				let choiceList = ["摸" + get.cnNumber(num) + "张牌", "回复" + get.cnNumber(num) + "点体力"];
				let choices = ["选项一", "选项二", "cancel2"];
				if (!player.isDamaged()) {
					choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + "</span>";
					choices.remove("选项二");
				}
				let { result } = await player.chooseControl()
					.set("controls", choices)
					.set("choiceList", choiceList)
					.set("ai", () => _status.event.player.hp == 1 ? "选项二" : "选项一");
				if (result.control == "cancel2") return;
				if (result.control == "选项一") {
					await player.draw(num);
				} else await player.recover(num);
		    },
		    priority: 1,
		},
		nuyan_shuguogulang:{//蜀国孤狼
			//audio: 2,
			nuyan_star:1,
			trigger: {
			    source: "damageEnd",
			},
			forced: true,
			filter: function (event, player) {
			    return player.isPhaseUsing() && !player.hasSkill("nuyan_shuguogulang_effect") && event.player != player;
			},
			content: function () {
			    player.addTempSkill("nuyan_shuguogulang_effect", "phaseUseAfter");
				player.markSkill("nuyan_shuguogulang_effect");
			},
			subSkill: {
			    effect: {
			        charlotte: true,
			        onremove: true,
			        forced: true,
					mark:true,
					marktext:"蜀",
			        intro: {
						nocount:true,
						name:"蜀国孤狼",
			            content: "你使用【杀】无次数限制",
			        },
			        mod: {
			            cardUsable(card, player, num) {
			                if (card.name == "sha") return Infinity;
			            },
			        },
			        sub: true,
			        sourceSkill: "nuyan_shuguogulang",
			        priority: 0,
			    },
			},
			priority: 0,
		},
		nuyan_kuangnuzhuiji:{//狂怒追击
			nuyan_star:3,
			trigger: {
			    player: "damageEnd",
			},
			group:['nuyan_kuangnuzhuiji_update'],
			filter: function(event,player) {
				if (!player.storage.nuyan_kuangnuzhuiji && player.storage.nuyan_kuangnuzhuiji != 0) player.storage.nuyan_kuangnuzhuiji = game.countPlayer();
				return player.storage.nuyan_kuangnuzhuiji;
			},
			frequent:true,
			async content(event,trigger,player) {
				const { result } = await player.chooseTarget(true, get.prompt2('nuyan_kuangnuzhuiji'), function (card, player, target) {
					return target != player;
				}).set("ai", target => -1 * get.attitude(_status.event.player, target));
				if (result.bool && result.targets) {
					let target = result.targets[0];
					player.storage.nuyan_kuangnuzhuiji --;
					await target.damage(trigger.num,player);
				}
			},
			subSkill:{
				update:{
					charlotte:true,
					popup:false,
					forced:true,
					trigger:{
						global: "phaseBegin",
					},
					content:function(){
						player.storage.nuyan_kuangnuzhuiji = game.countPlayer();
					},
					sub:true,
					sourceSkill: "nuyan_kuangnuzhuiji",
				},
			},
		},
		//怒焰吕玲绮
		nuyan_guowu: {//帼武
			audio: "guowu",
			trigger: {
			    player: "phaseUseBegin",
			},
			filter: function(event, player) {
			    return player.countCards("h") > 0;
			},
			frequent: true,
			async content(event,trigger,player) {
			    var cards = player.getCards("h");
			    await player.showCards(cards, get.translation(player) + "发动了〖帼武〗");
			    var list = [];
			    for (var i of cards) {
			        list.add(get.type2(i, player));
			        if (list.length >= 3) {
			            break;
			        }
			    }
			    if (list.length >= 1) {
					player.addSkill("nuyan_guowu_effect1");
			    }
			    if (list.length >= 2) {
			        player.addTempSkill("nuyan_guowu_effect2", "phaseUseAfter");
					player.addMark("nuyan_guowu_effect1");
			    }
			    if (list.length >= 3) {
					let cardList = [],
					    shown = [],
						num = player.getDamagedHp();
					if (num <= 0) num = 1;
					let piles = ["cardPile", "discardPile"];
					for (let pile of piles) {
						//zhonghuiFunction定义在了precontent.js里面，抄的话记得把定义也抄过去
						let p = zhonghuiFunction.randomPile(ui[pile].childNodes);
					    for (let i = 0; i < ui[pile].childNodes.length; i++) {
					        let card = p[i];
					        if (!cardList.includes(card) && card.name == "sha") {
					            cardList.push(card);
					            if (pile == "discardPile") shown.push(card);
					            if (cardList.length >= num) break;
					        }
					    }
					    if (cardList.length >= num) break;
					}
					if (cardList.length) {
					    var next = await player.gain(cardList)
							.set("shown_cards",shown)
							.set("animate", function (event) {
							    var player = event.player,
							        cards = event.cards,
							        shown = event.shown_cards;
							    if (shown.length < num) {
							        num = num - shown.length;
							        player.$draw(num);
							        game.log(player, "从牌堆获得了", get.cnNumber(num), "张【杀】");
							    }
							    if (shown.length > 0) {
							        player.$gain2(shown, false);
							        game.log(player, "从弃牌堆获得了", shown);
							    }
							    return 500;
							});
					}
			    }
			},
			subSkill:{
				effect1:{
					mark: true,
					marktext: "帼",
					intro:{
						name:"帼舞",
						content: function(storage,player) {
							let str = "";
							if (player.storage.nuyan_guowu_effect1 > 1) str += "你使用【杀】的次数+" + lib.config.extension_怒焰武将_nuyan_star + "直至本阶段结束<br>且";
							str += "你使用【杀】无法被响应"
							return str;
						},
					},
					init: function(player) {
						player.addMark("nuyan_guowu_effect1");
					},
					forced:true,
					trigger:{
						player:"useCard",
					},
					filter: function(event,player) {
						return event.card.name == "sha";
					},
					content:function() {
						trigger.directHit.addArray(game.players);
					},
					sub: true,
					sourceSkill: "nuyan_guowu",
					priority: 11,
				},
				effect2:{
					onremove: function(player) {
						player.removeMark("nuyan_guowu_effect1", 1);
					},
					mod:{
						cardUsable:function (card, player, num) {
							if (card.name == "sha") return num += Number(lib.config.extension_怒焰武将_nuyan_star);
						},
					},
					sub: true,
					sourceSkill: "nuyan_guowu",
				},
			},
		},
		nuyan_shenweizaixian: {//神威再现
			nuyan_star:1,
			forced: true,
			locked: true,
			trigger: {
				get global() {
					if (lib.config.extension_怒焰武将_nuyan_First_lvlingqi == "First") return "phaseEnd";
					else return;
				},
				get source() {
					if (lib.config.extension_怒焰武将_nuyan_First_lvlingqi == "New") return "damageEnd";
					else return;
				},
			},
			filter: function(event, player) {
				if (lib.config.extension_怒焰武将_nuyan_First_lvlingqi == "First") {
					let num = Number(lib.config.extension_怒焰武将_nuyan_star);
					return (player.hp <= num) || (player.countCards("h") < num);
				} else return event?.card?.name == "sha";
			},
			async content(event,trigger,player) {
				if (lib.config.extension_怒焰武将_nuyan_First_lvlingqi == "First") {
					await player.recover();
					await player.draw();
				} else {
					await player.draw();
					await player.ny_addNuQi();
				}
			},
		},
		nuyan_wushuangxiaoji: {//无双虓姬
			nuyan_star:3,
			forced:true,
			locked:true,
			trigger:{
				player:"useCard",
			},
			filter:function(event,player) {
				return player.isPhaseUsing() && event.card?.name == "sha";
			},
			content:function(){
				trigger.baseDamage += player.getStat().card.sha;
			},
		},
		//怒焰界张春华
		nuyan_shangshi: {//伤逝
			audio: "shangshi",
			trigger: {
			    player: "loseAfter",
			    global: ["equipAfter","addJudgeAfter","gainAfter","loseAsyncAfter","addToExpansionAfter"],
			},
			filter(event, player) {
				let num = Number(lib.config.extension_怒焰武将_nuyan_star) ?? 0;
				return player.countCards("h") < (num+1);
			},
			forced: true,
			locked: true,
			init(player) {
				let num = Number(lib.config.extension_怒焰武将_nuyan_star) ?? 0;
				if (player.countCards("h") < (num+1)) player.drawTo(num + 1);
			},
			async content(event, trigger, player) {
				let num = Number(lib.config.extension_怒焰武将_nuyan_star) ?? 0;
				await player.drawTo(num + 1);
			},
		},
		nuyan_xinyixiangtong: {//心意相通
			enable: "phaseUse",
			usable: 1,
			nuyan_star: 1,
			filter(event,player) {
				return player.countCards("h") > 0 && player.ny_nuqi && player.ny_nuqi < player.ny_nuqiMax;
			},
			filterCard: 1,
			position: "h",
			check(card) {
			    return 9 - get.value(card);
			},
			discard: false,
			lose: false,
			delay: false,
			async content(event, trigger, player) {
				await player.modedDiscard(cards);
				await player.ny_addNuQi();
			},
		},
		nuyan_jueqingzhuohua: {//绝情灼华
			enable:"phaseUse",
			nuyan_star:3,
			filter(event,player) {
				return player.ny_nuqi && player.ny_nuqi >= 2;
			},
			check(player) {
			    return player.ny_nuqi && player.ny_nuqi >= 4;
			},
			discard: false,
			lose: false,
			delay: false,
			async content(event, trigger, player) {
				await player.ny_loseNuQi(2);
				player.addMark(event.name + "_effect");
				player.addSkill(event.name + "_effect");
			},
			subSkill:{
				effect:{
					mark: true,
					marktext: "绝",
					onremove: true,
					intro:{
						name: "绝情灼华",
						content: "你下次即将造成的伤害+#且视为失去体力",
					},
					charlotte: true,
					forced: true,
					trigger:{
						source: "damageBefore",
					},
					content() {
						trigger.num += player.countMark(event.name);
						trigger.cancel();
						trigger.player.loseHp(trigger.num);
						player.removeSkill(event.name);
					},
				},
			},
		},
		//怒焰沮授
		nuyan_jianying: {//渐营
			audio: "jianying",
			locked: true,
			mod: {
			    aiOrder: function(player, card, num) {
			        if (typeof card == "object" && player.isPhaseUsing()) {
			            var evt = player.getLastUsed();
			            if (!evt || !evt.card || evt.getParent("phaseUse") !== _status.event.getParent("phaseUse")) {
			                return num;
			            }
			            if ((get.suit(evt.card) && get.suit(evt.card) == get.suit(card)) || (evt.card.number && evt.card.number == get.number(card))) {
			                return num + 10;
			            }
			        }
			    },
			},
			trigger: {
			    player: "useCard",
			},
			forced: true,
			filter: function(event, player) {
			    if (!player.isPhaseUsing()) {
			        return false;
			    }
			    player.addTip("nuyan_jianying", "渐营 " + get.translation(get.suit(event.card, player)) + get.translation(get.strNumber(get.number(event.card, player))), true);
			    var evt = player.getLastUsed(1);
			    if (!evt || !evt.card) {
			        return false;
			    }
			    var evt2 = evt.getParent("phaseUse");
			    if (!evt2 || evt2.name != "phaseUse" || evt2 !== event.getParent("phaseUse")) {
			        return false;
			    }
			    return (get.suit(evt.card) != "none" && get.suit(evt.card) == get.suit(event.card)) || (typeof get.number(evt.card, false) == "number" && get.number(evt.card, false) == get.number(event.card));
			},
			content: function() {
			    player.draw();
			},
			group: "nuyan_jianying_mark",
			init: function(player) {
			    if (player.isPhaseUsing()) {
			        var evt = _status.event.getParent("phaseUse");
			        var history = player.getHistory("useCard", function (evt2) {
			            return evt2.getParent("phaseUse") == evt;
			        });
			        if (history.length) {
			            var trigger = history[history.length - 1];
			            if (get.suit(trigger.card, player) == "none" || typeof get.number(trigger.card, player) != "number") {
			                return;
			            }
			            player.storage.nuyan_jianying_mark = trigger.card;
			            player.markSkill("nuyan_jianying_mark");
			            game.broadcastAll(
			                function (player, suit) {
			                    if (player.marks.nuyan_jianying_mark) {
			                        player.marks.nuyan_jianying_mark.firstChild.innerHTML = get.translation(suit);
			                    }
			                },
			                player,
			                get.suit(trigger.card, player)
			            );
			            player.when("phaseUseAfter").then(() => {
			                player.unmarkSkill("nuyan_jianying_mark");
			                delete player.storage.nuyan_jianying_mark;
			            });
			        }
			    }
			},
			onremove: function(player) {
			    player.unmarkSkill("nuyan_jianying_mark");
			    delete player.storage.nuyan_jianying_mark;
			},
			subSkill: {
			    mark: {
			        charlotte: true,
			        trigger: {
			            player: "useCard1",
			        },
			        filter: function(event, player) {
			            return player.isPhaseUsing();
			        },
			        forced: true,
			        popup: false,
			        firstDo: true,
			        content: function() {
			            if (get.suit(trigger.card, player) == "none" || typeof get.number(trigger.card, player) != "number") {
			                player.unmarkSkill("nuyan_jianying_mark");
			            } else {
			                player.storage.nuyan_jianying_mark = trigger.card;
			                player.markSkill("nuyan_jianying_mark");
			                game.broadcastAll(
			                    function (player, suit) {
			                        if (player.marks.nuyan_jianying_mark) {
			                            player.marks.nuyan_jianying_mark.firstChild.innerHTML = get.translation(suit);
			                        }
			                    },
			                    player,
			                    get.suit(trigger.card, player)
			                );
			                player.when("phaseUseAfter").then(() => {
			                    player.unmarkSkill("nuyan_jianying_mark");
			                    delete player.storage.nuyan_jianying_mark;
			                });
			            }
			        },
			        intro: {
			            markcount: function(card, player) {
			                return get.strNumber(get.number(card, player));
			            },
			            content: function(card, player) {
			                var suit = get.suit(card, player);
			                var num = get.number(card, player);
			                var str = "<li>上一张牌的花色：" + get.translation(suit);
			                str += "<br><li>上一张牌的点数：" + get.strNumber(num);
			                return str;
			            },
			        },
			        sub: true,
			        sourceSkill: "nuyan_jianying",
			        priority: 0,
			    },
			},
			priority: 0,
		},
		nuyan_jianzhongbuqu: {//坚忠不屈
			locked:true,
			forced:true,
			nuyan_star:1,
			trigger:{
				player:"damageEnd",
			},
			filter: function(event,player) {
				if (!player.storage.nuyan_jianzhongbuqu) return true;
				return player.storage.nuyan_jianzhongbuqu < 2;
			},
			async content(event,trigger,player) {
				if (!player.storage.nuyan_jianzhongbuqu) {
					player.storage.nuyan_jianzhongbuqu = 1;
					await player.recover();
				} else {
					player.storage.nuyan_jianzhongbuqu ++;
					await player.loseHp();
				}
				player.when({player:"phaseEnd"})
					.then(() => delete player.storage.nuyan_jianzhongbuqu);
			},
		},
		nuyan_honghuzhizai: {//鸿鹄志哉
			nuyan_star:3,
			frequent:true,
			trigger:{
				player:"phaseJieshuBegin",
			},
			filter: function(event,player) {
				return player.countCards("h") && game.hasPlayer((p) => p != player && p.countCards("h"));
			},
			async content(event,trigger,player) {
				let result = await player.chooseTarget(1)
					.set("filterTarget", function (card,player, target) {
						if (player == target) return false;
						return target.countCards("h");
					})
					.set("prompt", get.prompt("nuyan_honghuzhizai"))
					.set("prompt2", get.prompt2("nuyan_honghuzhizai"))
					.set("ai", target => function (target) {
						var player = _status.event.player;
						if (player == target) return -1;
						let num = get.attitude(player, target);
						if (num > 0 || !target.countCards("h")) return -1;
						return -1 * num + target.countCards("h");
					}).forResult();
				if (result.bool) {
					let list = [];
					for (let i of player.getCards("h")) {
						if (!list.includes(get.color(i))) list.push(get.color(i));
					}
					if (list.length) {
						let target = result.targets[0];
						let cards = target.getCards("h");
						if (list.length < target.countCards("h")) cards = cards.randomGets(list.length);
						await player.gain(cards,target,"giveAuto");
					}
				}
			},
		},
		//怒焰界貂蝉
		nuyan_lihun: {//离魂
			enable:"phaseUse",
			group:"nuyan_lihun_giveBack",
			usable:1,
			audio:"lihun",
			filter: function(event,player) {
				return game.hasPlayer((p) => p != player && p.countCards("h"));
			},
			async content(event,trigger,player) {
				let filterSkill = "nuyan_qiaoxianlianhuan";
				let num = Number(lib.config.extension_怒焰武将_nuyan_star);
				const ownedSkills = player.getSkills(null, false, true).filter(skill => {
				    return skill == filterSkill;
				});
				let b = ownedSkills.length !== 0 && !player.isTempBanned(filterSkill) && !(player.shixiaoedSkills && player.shixiaoedSkills.includes(filterSkill));
				if (b) {
					num += 2;
					player.logSkill(filterSkill);
				}
				if (num == 0) return;
				let result = await player.chooseTarget(1)
					.set("filterTarget", function (card,player, target) {
						if (player == target) return false;
						return target != player && target.countCards("h");
					})
					.set("prompt", get.prompt("nuyan_lihun"))
					.set("prompt2", "获得一名其他角色" + get.cnNumber(num) + "张牌")
					.set("ai", target => function (target) {
						var player = _status.event.player;
						if (player == target) return -1;
						let num = get.attitude(player, target);
						if (num > 0 || !target.countCards("h")) return -1;
						return -1 * num + target.countCards("h");
					}).forResult();
				let target = result.targets[0];
				await player.gainPlayerCard(target, true, "h", num);
				if (b && !target.countCards("hej")) {
					await target.ny_loseNuQi(player);
					player.logSkill(filterSkill);
				}
				if (!player.storage.nuyan_lihun) player.storage.nuyan_lihun = [];
				player.storage.nuyan_lihun.push(target);
			},
			subSkill:{
				giveBack:{
					charlotte:true,
					forced:true,
					popup:true,
					sub:true,
					audio: "lihun2",
					sourceSkill:"nuyan_lihun",
					trigger:{
						player:"phaseUseEnd",
					},
					filter:function(event,player) {
						return player.storage.nuyan_lihun;
					},
					async content(event,trigger,player) {
						player.storage.nuyan_lihun = player.storage.nuyan_lihun.sortBySeat();
						for (let i of player.storage.nuyan_lihun) {
							if (i.isDead() || !i.ny_nuqi) continue;
							if (!player.countCards("h")) break;
							let cards = player.getCards("h");
							if (cards.length > i.ny_nuqi) {
								const next = await player.chooseCard("h",true,i.ny_nuqi,"离魂：选择要交给" + get.translation(i) + "的牌").forResult();
								cards = next.cards;
							}
							player.give(cards,i);
						}
						delete player.storage.nuyan_lihun;
					},
				},
			},
		},
		nuyan_miaojilianhuan: {//妙计连环
			audio:"lijian",
			nuyan_star:1,
			enable: "phaseUse",
			usable: 1,
			filter: function(event, player) {
			    return game.countPlayer(current => current != player && current.hasSex("male")) > 1;
			},
			filterTarget: function(card, player, target) {
			    if (player == target) {
			        return false;
			    }
			    if (!target.hasSex("male")) {
			        return false;
			    }
			    if (ui.selected.targets.length == 1) {
			        return target.canUse({ name: "juedou" }, ui.selected.targets[0]);
			    }
			    return true;
			},
			targetprompt: ["先出杀","后出杀"],
			selectTarget: 2,
			multitarget: true,
			async content(event, trigger, player) {
			    const useCardEvent = event.targets[1].useCard({ name: "juedou", isCard: true }, event.targets[0], "noai");
			    useCardEvent.animate = false;
			    await game.delay(0.5);
			},
			ai: {
			    order: 8,
			    result: {
			        target: function(player, target) {
			            if (ui.selected.targets.length == 0) {
			                return -3;
			            } else {
			                return get.effect(target, { name: "juedou" }, ui.selected.targets[0], target);
			            }
			        },
			    },
			    expose: 0.4,
			    threaten: 3,
			},
			priority: 0,
		},
		nuyan_qiaoxianlianhuan: {//巧献连环
			nuyan_star:3,
			priority: 0,
		},
		//怒焰赵襄
		nuyan_fanghun: {//芳魂
			audio: "fanghun",
			trigger: {
				player: "useCardToPlayered",
				target: "useCardToPlayered",
			},
			forced: true,
			locked: true,
			filter: (event) => event.card.name == "sha",
			async content(event, trigger, player) {
				if (!player.ny_nuqi) return;
				if (player.ny_nuqi == player.ny_nuqiMax) await player.draw();
				else await player.ny_addNuQi();
			},
		},
		nuyan_jinghongmeiying: {//惊鸿魅影
			audio: "longdan_sha",
			audioname: ["re_zhaoyun"],
			nuyan_star:1,
			"audioname2": {
			    "old_zhaoyun": "longdan_sha_re_zhaoyun",
			},
			group: ["nuyan_jinghongmeiying_sha","nuyan_jinghongmeiying_shan"],
			subSkill: {
			    sha: {
			        audio: 2,
			        audioname: ["re_zhaoyun"],
			        "audioname2": {
			            "old_zhaoyun": "longdan_sha_re_zhaoyun",
			        },
			        enable: ["chooseToUse","chooseToRespond"],
			        filterCard: {
			            name: "shan",
			        },
			        viewAs: {
			            name: "sha",
			        },
			        viewAsFilter(player) {
			            if (!player.countCards("hs", "shan")) {
			                return false;
			            }
			        },
			        position: "hs",
			        prompt: "将一张闪当杀使用或打出",
			        check() {
			            return 1;
			        },
			        ai: {
			            effect: {
			                target(card, player, target, current) {
			                    if (get.tag(card, "respondSha") && current < 0) {
			                        return 0.6;
			                    }
			                },
			            },
			            respondSha: true,
						skillTagFilter(player) {
							if (!player.countCards("hs", "shan")) {
								return false;
							}
						},
						order() {
			                return get.order({ name: "sha" }) + 0.1;
			            },
			            useful: -1,
			            value: -1,
			            yingbian(card, player, targets, viewer) {
			                if (get.attitude(viewer, player) <= 0) {
			                    return 0;
			                }
			                var base = 0,
			                    hit = false;
			                if (get.cardtag(card, "yingbian_hit")) {
			                    hit = true;
			                    if (
			                        targets.some(target => {
			                            return target.mayHaveShan(viewer, "use") && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.natureList(card)) > 0;
			                        })
			                    ) {
			                        base += 5;
			                    }
			                }
			                if (get.cardtag(card, "yingbian_add")) {
			                    if (
			                        game.hasPlayer(function (current) {
			                            return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
			                        })
			                    ) {
			                        base += 5;
			                    }
			                }
			                if (get.cardtag(card, "yingbian_damage")) {
			                    if (
			                        targets.some(target => {
			                            return (
			                                get.attitude(player, target) < 0 &&
			                                (hit ||
			                                    !target.mayHaveShan(viewer, "use") ||
			                                    player.hasSkillTag(
			                                        "directHit_ai",
			                                        true,
			                                        {
			                                            target: target,
			                                            card: card,
			                                        },
			                                        true
			                                    )) &&
			                                !target.hasSkillTag("filterDamage", null, {
			                                    player: player,
			                                    card: card,
			                                    jiu: true,
			                                })
			                            );
			                        })
			                    ) {
			                        base += 5;
			                    }
			                }
			                return base;
			            },
			            canLink: function(player, target, card) {
			                if (!target.isLinked() && !player.hasSkill("wutiesuolian_skill")) {
			                    return false;
			                }
			                if (player.hasSkill("jueqing") || player.hasSkill("gangzhi") || target.hasSkill("gangzhi")) {
			                    return false;
			                }
			                let obj = {};
			                if (get.attitude(player, target) > 0 && get.attitude(target, player) > 0) {
			                    if (
			                        (player.hasSkill("jiu") ||
			                            player.hasSkillTag("damageBonus", true, {
			                                target: target,
			                                card: card,
			                            })) &&
			                        !target.hasSkillTag("filterDamage", null, {
			                            player: player,
			                            card: card,
			                            jiu: player.hasSkill("jiu"),
			                        })
			                    ) {
			                        obj.num = 2;
			                    }
			                    if (target.hp > obj.num) {
			                        obj.odds = 1;
			                    }
			                }
			                if (!obj.odds) {
			                    obj.odds = 1 - target.mayHaveShan(player, "use", true, "odds");
			                }
			                return obj;
			            },
			            basic: {
			                useful: [5,3,1],
			                value: [5,3,1],
			            },
			            result: {
			                target: function(player, target, card, isLink) {
			                    let eff = -1.5,
			                        odds = 1.35,
			                        num = 1;
			                    if (isLink) {
			                        eff = isLink.eff || -2;
			                        odds = isLink.odds || 0.65;
			                        num = isLink.num || 1;
			                        if (
			                            num > 1 &&
			                            target.hasSkillTag("filterDamage", null, {
			                                player: player,
			                                card: card,
			                                jiu: player.hasSkill("jiu"),
			                            })
			                        ) {
			                            num = 1;
			                        }
			                        return odds * eff * num;
			                    }
			                    if (
			                        player.hasSkill("jiu") ||
			                        player.hasSkillTag("damageBonus", true, {
			                            target: target,
			                            card: card,
			                        })
			                    ) {
			                        if (
			                            target.hasSkillTag("filterDamage", null, {
			                                player: player,
			                                card: card,
			                                jiu: player.hasSkill("jiu"),
			                            })
			                        ) {
			                            eff = -0.5;
			                        } else {
			                            num = 2;
			                            if (get.attitude(player, target) > 0) {
			                                eff = -7;
			                            } else {
			                                eff = -4;
			                            }
			                        }
			                    }
			                    if (
			                        !player.hasSkillTag(
			                            "directHit_ai",
			                            true,
			                            {
			                                target: target,
			                                card: card,
			                            },
			                            true
			                        )
			                    ) {
			                        odds -= 0.7 * target.mayHaveShan(player, "use", true, "odds");
			                    }
			                    _status.event.putTempCache("sha_result", "eff", {
			                        bool: target.hp > num && get.attitude(player, target) > 0,
			                        card: ai.getCacheKey(card, true),
			                        eff: eff,
			                        odds: odds,
			                    });
			                    return odds * eff;
			                },
			            },
			            tag: {
			                respond: 1,
			                respondShan: 1,
			                damage: function(card) {
			                    if (game.hasNature(card, "poison")) {
			                        return;
			                    }
			                    return 1;
			                },
			                natureDamage: function(card) {
			                    if (game.hasNature(card, "linked")) {
			                        return 1;
			                    }
			                },
			                fireDamage: function(card, nature) {
			                    if (game.hasNature(card, "fire")) {
			                        return 1;
			                    }
			                },
			                thunderDamage: function(card, nature) {
			                    if (game.hasNature(card, "thunder")) {
			                        return 1;
			                    }
			                },
			                poisonDamage: function(card, nature) {
			                    if (game.hasNature(card, "poison")) {
			                        return 1;
			                    }
			                },
			            },
			        },
			        sub: true,
			        sourceSkill: "nuyan_jinghongmeiying",
			        priority: 0,
			    },
			    shan: {
			        audio: "longdan_sha",
			        audioname: ["re_zhaoyun"],
			        "audioname2": {
			            "old_zhaoyun": "longdan_sha_re_zhaoyun",
			        },
			        enable: ["chooseToRespond","chooseToUse"],
			        filterCard: {
			            name: "sha",
			        },
			        viewAs: {
			            name: "shan",
			        },
			        prompt: "将一张杀当闪使用或打出",
			        check: function() {
			            return 1;
			        },
			        position: "hs",
			        viewAsFilter: function(player) {
			            if (!player.countCards("hs", "sha")) {
			                return false;
			            }
			        },
			        ai: {
			            respondShan: true,
			            skillTagFilter: function(player) {
			                if (!player.countCards("hs", "sha")) {
			                    return false;
			                }
			            },
			            effect: {
			                target: function(card, player, target, current) {
			                    if (get.tag(card, "respondShan") && current < 0) {
			                        return 0.6;
			                    }
			                },
			            },
			            order: 4,
			            useful: -1,
			            value: -1,
			            basic: {
			                useful: (card, i) => {
			                    let player = _status.event.player,
			                        basic = [7, 5.1, 2],
			                        num = basic[Math.min(2, i)];
			                    if (player.hp > 2 && player.hasSkillTag("maixie")) {
			                        num *= 0.57;
			                    }
			                    if (player.hasSkillTag("freeShan", false, null, true) || player.getEquip("rewrite_renwang")) {
			                        num *= 0.8;
			                    }
			                    return num;
			                },
			                value: [7,5.1,2],
			            },
			            result: {
			                player: 1,
			            },
			        },
			        sub: true,
			        sourceSkill: "nuyan_jinghongmeiying",
			        priority: 0,
			    },
			},
			priority: 0,
		},
		nuyan_zhongxinfuhan: {//忠心扶汉
			audio: "fuhan",
			trigger: {
			    player: "phaseZhunbeiBegin",
			},
			nuyan_star: 1,
			limited: true,
			skillAnimation: true,
			unique: true,
			animationColor: "orange",
			async content(event, trigger, player) {
			    player.awakenSkill(event.name);
			    let list;
				//获取所有蜀势力角色
				if (lib.character) {
					list = [];
					for (let i in lib.character) {
					    if (lib.character[i][1] == "shu") {
					        list.push(i);
					    }
					}
				} else if (_status.characterlist) {
			        list = [];
			        for (let i = 0; i < _status.characterlist.length; i++) {
			            const name = _status.characterlist[i];
			            if (lib.character[name][1] == "shu") {
			                list.push(name);
			            }
			        }
			    } else if (_status.connectMode) {
			        list = get.charactersOL(function (i) {
			            return lib.character[i][1] == "shu";
			        });
			    } else {
			        list = get.gainableCharacters(function (info) {
			            return info[1] == "shu";
			        });
			    }
				//后续增加只选怒焰选项
			    const players = game.players.concat(game.dead);
			    for (let i = 0; i < players.length; i++) {
			        list.remove(players[i].name);
			        list.remove(players[i].name1);
			        list.remove(players[i].name2);
			    }
			    list.remove("zhaoyun");
			    list.remove("re_zhaoyun");
			    list.remove("ol_zhaoyun");
				list = list.randomGets(5);
			    const skills = [];
			    for (const i of list) {
			        skills.addArray(
			            (lib.character[i][3] || []).filter(function (skill) {
			                const info = get.info(skill);
			                return info && !info.nuyan_jiBan;
			            })
			        );
			    }
			    if (!list.length || !skills.length) {
			        return;
			    }
			    await Promise.all(event.next);
			    event.videoId = lib.status.videoId++;
			    if (player.isUnderControl()) {
			        game.swapPlayerAuto(player);
			    }
			    const chooseCharacterSkills = function (player, list, skills, force = false, num, ai = { bool: false }) {
			        const { promise, resolve } = Promise.withResolvers();
			        const event = _status.event;
			        //初始化result
			        event._result ??= {};
			        event._result.skills = [];
			        event.selectedSkills ??= event._result.skills;
			        //创建对话框
			        let dialog = ui.create.dialog(`请选择获得至多${get.cnNumber(num)}个技能`, [list, "character"], "hidden");
			        event.dialog = dialog;
			        //创建确定按钮
			        event.control_ok = ui.create.control("ok", link => {
			            _status.imchoosing = false;
			            event.dialog.close();
			            event.control_ok?.close();
			            event.control_cancel?.close();
			            event._result = {
			                bool: true,
			                skills: event.selectedSkills,
			            };
			            resolve(event._result);
			            game.resume();
			        });
			        //event.control_ok.classList.add("disabled");
			        //如果是非强制的，才创建取消按钮
			        if (!force) {
			            event.control_cancel = ui.create.control("cancel", link => {
			                _status.imchoosing = false;
			                event.dialog.close();
			                event.control_ok?.close();
			                event.control_cancel?.close();
			                event._result = {
			                    bool: false,
			                };
			                resolve(event._result);
			                game.resume();
			            });
			        }
			        event.switchToAuto = function () {
			            _status.imchoosing = false;
			            event.dialog?.close();
			            event.control_ok?.close();
			            event.control_cancel?.close();
			            event._result = ai;
			            resolve(event._result);
			            game.resume();
			        };
			        //创建用于选择的技能按钮（tdnodes样式）
			        const table = document.createElement("div");
			        table.classList.add("add-setting");
			        table.style.margin = "0";
			        table.style.width = "100%";
			        table.style.position = "relative";
			        for (let i = 0; i < skills.length; i++) {
			            const td = ui.create.div(".shadowed.reduce_radius.pointerdiv.tdnode");
			            td.link = skills[i];
			            table.appendChild(td);
			            td.innerHTML = "<span>" + get.translation(skills[i]) + "</span>";
			            //给按钮添加监听
			            td.addEventListener(lib.config.touchscreen ? "touchend" : "click", function () {
			                if (_status.dragged) {
			                    return;
			                }
			                if (_status.justdragged) {
			                    return;
			                }
			                _status.tempNoButton = true;
			                setTimeout(function () {
			                    _status.tempNoButton = false;
			                }, 500);
			                const link = this.link;
			                if (!this.classList.contains("bluebg")) {
			                    //限制选择数量
			                    if (event.selectedSkills.length >= num) {
			                        return;
			                    }
			                    event.selectedSkills.add(link);
			                    this.classList.add("bluebg");
			                } else {
			                    this.classList.remove("bluebg");
			                    event.selectedSkills.remove(link);
			                }
			                //event.control_ok.classList[event.selectedSkills.length >= 0 ? "remove" : "add"]("disabled");
			            });
			        }
			        dialog.content.appendChild(table);
			        dialog.add("　　");
			        dialog.open();
						
			        //点亮所有按钮（包括角色的）
			        for (let i = 0; i < event.dialog.buttons.length; i++) {
			            event.dialog.buttons[i].classList.add("selectable");
			        }
			        game.pause();
			        _status.imchoosing = true;
			        return promise;
			    };
			    const ai = function () {
			        return { bool: true, skills: skills.slice().sort((a, b) => get.skillRank(b, "inout") - get.skillRank(a, "inout")).slice(0, 2) };
			    };
			    let next;
			    if (event.isMine()) {
			        next = chooseCharacterSkills(player, list, skills, true, 2, ai());
			    } else if (player.isOnline()) {
			        let { promise, resolve } = Promise.withResolvers();
			        player.send(chooseCharacterSkills, player, list, skills, true, 2, ai());
			        player.wait(result => {
			            if (result == "ai") {
			                result = ai();
			            }
			            resolve(result);
			        });
			        next = promise;
			    } else {
			        next = Promise.resolve(ai());
			    }
			    const result = await next;
			    if (result?.skills?.length) {
			        await player.addSkills(result.skills);
			    }
			    game.broadcastAll(function (list) {
			        game.expandSkills(list);
			        for (const i of list) {
			            var info = lib.skill[i];
			            if (!info) {
			                continue;
			            }
			            if (!info.audioname2) {
			                info.audioname2 = {};
			            }
			            info.audioname2.zhaoxiang = "fuhan";
			        }
			    }, result.skills);
			},
			mark: true,
			intro: {
			    content: "limited",
			},
			priority: 0,
		},
		//怒焰刘琦
		nuyan_wenji: {//问计
			audio:"wenji",
			enable:"phaseUse",
			selectTarget:1,
			mod:{
				cardUsable:function (card, player, num) {
					if (player.storage.nuyan_wenji_mod?.includes(get.type(card))) return Infinity;
				},
			},
			popup:false,
			filter: function(event,player) {
				return game.hasPlayer(p => p != player && p.countCards("h") && !player.storage.ny_wenji?.includes(p));
			},
			filterTarget: function(card,player,target) {
				return target != player && target.countCards("h") && !player.storage.ny_wenji?.includes(target);
			},
			async content(event,trigger,player) {
				const { target } = event;
				player.logSkill("nuyan_wenji",target);
				let result = await target.chooseCard("he", true, "问计：将一张牌交给" + get.translation(player))
					.set("ai",card => -1 * get.value(card)).forResult();
				let card = result.cards[0];
				await target.give(card,player);
				if (!player.storage.nuyan_wenji_mod) player.storage.nuyan_wenji_mod = [];
				if (!player.storage.nuyan_wenji_mod.includes(get.type(card))) player.storage.nuyan_wenji_mod.push(get.type(card));
				if (!player.storage.ny_wenji) player.storage.ny_wenji = [];
				player.storage.ny_wenji.push(target);
				//抽梯求策获取花色
				let filterSkill = "nuyan_choutiqiuce";
				const ownedSkills = player.getSkills(null, false, true).filter(skill => {
				    return skill == filterSkill;
				});
				let b = ownedSkills.length !== 0 && !player.isTempBanned(filterSkill) && !(player.shixiaoedSkills && player.shixiaoedSkills.includes(filterSkill));
				if (b) {
					player.logSkill(filterSkill);
					player.storage.nuyan_choutiqiuce ??= [];
					if (!player.storage.nuyan_choutiqiuce.includes(get.suit(card))) player.storage.nuyan_choutiqiuce.push(get.suit(card));
					player.when({player:"phaseEnd"})
						.then(() => delete player.storage.nuyan_choutiqiuce);
				}
				player.when({player:"phaseUseEnd"})
					.then(() => delete player.storage.ny_wenji);
				player.when({player:"phaseEnd"})
					.then(() => delete player.storage.nuyan_wenji_mod);
			},
			ai:{
				order: 114,
				result:{
					player:function(player) {
						return 10;
					},
					target: function(player, target) {
						if (get.attitude(player, target) < 0) return 10;
						return target.countCards("h") > 3;
					},
				},
			},
		},
		nuyan_bizoujiangnan: {//避走江南
			trigger: {
			    global: "phaseEnd",
			},
			forced: true,
			locked: true,
			nuyan_star: 1,
			filter: function(event, player) {
				return !player.getHistory("useCard")?.some(evt => evt.targets?.some(t => t != player));
			},
			content: function() {
				player.draw(2);
			},
		},
		nuyan_choutiqiuce: {//抽梯求策
			nuyan_star: 3,
			forced: true,
			locked: true,
			trigger:{
				player:"useCard",
			},
			filter: function(event, player) {
				return player.storage.nuyan_choutiqiuce?.includes(get.suit(event.card));
			},
			content: function() {
				trigger.directHit.addArray(game.players);
			},
			priority: 1,
		},
		//怒焰初版骆统
		nuyan_qinzheng: {//勤政
			audio: "qinzheng",
			trigger: {
			    player: ["useCard","respond"],
			},
			forced: true,
			locked: true,
			filter: function(event, player) {
			    var num = player.getAllHistory("useCard").length + player.getAllHistory("respond").length;
				player.storage.nuyan_qinzheng = num;
				player.markSkill("nuyan_qinzheng");
			    return num % 3 == 0 || num % 5 == 0 || num % 8 == 0;
			},
			async content(event, trigger, player) {
			    var num = player.getAllHistory("useCard").length + player.getAllHistory("respond").length;
			    var cards = [];
			    if (num % 3 == 0) {
			        var card = get.cardPile2(function (card) {
			            return card.name == "sha" || card.name == "shan";
			        },"random");
					if (!card) card = get.cardPile(function (card) {
			            return card.name == "sha" || card.name == "shan";
			        },"discardPile","random");
			        if (card) cards.push(card);
			    }
			    if (num % 5 == 0) {
			        var card = get.cardPile2(function (card) {
			            return ["tao", "jiu"].includes(card.name);
			        },"random");
					if (!card) card = get.cardPile(function (card) {
					    return ["tao", "jiu"].includes(card.name);
					},"discardPile","random");
			        if (card) cards.push(card);
			    }
			    if (num % 8 == 0) {
			        var card1 = get.cardPile2(c => c.name == "juedou","random");
					if (!card1) card1 = get.cardPile(c => c.name == "juedou","discardPile","random");
					var card2 = get.cardPile2(c => c.name == "wuzhong","random");
					if (!card2) card2 = get.cardPile(c => c.name == "wuzhong","discardPile","random");
			        if (card1) cards.push(card1);
					if (card2) cards.push(card2);
			    }
			    if (cards.length) {
			        await player.gain(cards, "gain2");
					//专属符石万民书
					if (player.ny_zhuanShuFuShiId && cards.length > 1) {
						for(let i of player.ny_zhuanShuFuShiId) {
							if (i == "_ny_zhuanShu_wanminshu") {
								let time = player.ny_zhuanShuFuShiId.indexOf(i);
								if (player.ny_fushiTime[4+time] > 0) {
									player.storage._ny_zhuanShu_wanminshu ??= 0;
									player.storage._ny_zhuanShu_wanminshu++;
									player.markSkill("_ny_zhuanShu_wanminshu");
									player.ny_fushiTime[4+time]--;
								}
							}
						}
					}
			    }
			},
			intro: {
			    content: function(num) {
			        var str = "<li>总次数：";
			        str += num;
			        str += "<br><li>杀/闪：";
			        str += num % 3;
			        str += "/3<br><li>桃/酒：";
			        str += num % 5;
			        str += "/5<br><li>决斗&无中生有：";
			        str += num % 8;
			        str += "/8";
			        return str;
			    },
			},
			priority: 0,
		},
		nuyan_renzhengaimin: {//仁政爱民
			nuyan_star: 1,
			trigger: {
			    source: "damageBegin1",
			},
			forced: true,
			locked: true,
			filter: function(event,player) {
				//这个时候还没有计入到次数里面
				return !player.getHistory("sourceDamage").length % 2;
			},
			content: function() {
				trigger.num++;
			},
		},
		nuyan_lingchurujian:{//令出如箭
			nuyan_star:3,
			audio: "qinzheng",
			trigger: {
			    player: ["useCard","respond"],
			},
			forced: true,
			locked: true,
			filter: function(event, player) {
			    var num = player.getAllHistory("useCard").length + player.getAllHistory("respond").length;
				player.storage.nuyan_lingchurujian = num;
				player.markSkill("nuyan_lingchurujian");
			    return num % 10 == 0;
			},
			async content(event, trigger, player) {
			    var cards = [];
			    var card1 = get.cardPile2(c => c.name == "nuyan_nufachongguan","random");
			    if (!card1) card1 = get.cardPile(c => c.name == "nuyan_nufachongguan","discardPile","random");
			    var card2 = get.cardPile2(c => c.name == "nuyan_fudichouxin","random");
			    if (!card2) card2 = get.cardPile(c => c.name == "nuyan_fudichouxin","discardPile","random");
			    if (card1) cards.push(card1);
			    if (card2) cards.push(card2);
			    if (cards.length) {
			        await player.gain(cards, "gain2");
			    }
			},
			intro: {
			    content: function(num) {
			        var str = "<li>总次数：";
			        str += num;
			        str += "<br><li>怒发冲冠&釜底抽薪：";
			        str += num % 10;
			        str += "/10";
			        return str;
			    },
			},
			priority: 0,
		},
		//怒焰初版糜夫人
		nuyan_guixiu: {//闺秀
			trigger: {
			    player: "loseAfter",
			    global: ["equipAfter","addJudgeAfter","gainAfter","loseAsyncAfter","addToExpansionAfter"],
			},
			frequent: true,
			filter: function(event, player) {
				return event.getl(player)?.hs?.length;
			},
			async content(event, trigger, player) {
				let num = trigger.getl(player).hs.length;
				for (let i = 0;i < num;i ++) {
					if (player.countCards("h") <= player.maxHp) {
						await player.draw(2)
							.set("skill",event.name);
						continue;
					}
					await player.draw()
						.set("skill",event.name);
					let result = await player.chooseTarget(1)
						.set("filterTarget", function (card,player, target) {
							return target != player;
						})
						.set("prompt", get.prompt("nuyan_guixiu"))
						.set("prompt2", "令一名其他角色摸一张牌")
						.set("ai", (target) => get.attitude(_status.event.player, target)).forResult();
					if (result.bool) {
						await result.targets[0]?.draw()
							.set("skill",event.name);
					}
				}
			},
		},
		nuyan_xuzhouwangzu: {//徐州望族
			trigger:{
				global: "drawAfter",
			},
			nuyan_star: 1,
			forced: true,
			locked: true,
			filter: function(event, player) {
				return event.skill == "nuyan_guixiu" && event.num > 0;
			},
			async content(event, trigger, player) {
				for (let i = 0;i < trigger.num;i ++) {
					if (trigger.player.isDamaged()) await trigger.player.recover();
					else await trigger.player.ny_addNuQi(player);
				}
			},
		},
		nuyan_sheshencunsi: {//舍身存嗣
			trigger:{
				global:"damageBegin",
			},
			nuyan_star: 3,
			derivation: ["nuyan_yongjue"],
			filter: function(event, player) {
				return !player.storage.nuyan_sheshencunsi?.includes(event.player) && player.countCards("h") >= event.num;
			},
			async cost(event, trigger, player) {
				let result = await player.chooseCard("h",trigger.num)
					.set("prompt", get.prompt("nuyan_sheshencunsi"))
					.set("prompt2", get.prompt2("nuyan_sheshencunsi")).forResult();
				if (result.bool) event.result = result;
			},
			async content(event, trigger, player) {
				await player.modedDiscard(event.cards);
				trigger.cancel();
				player.storage.nuyan_sheshencunsi ??= [];
				player.storage.nuyan_sheshencunsi.push(trigger.player);
				player.when({global:"phaseEnd"})
					.then(() => delete player.storage.nuyan_sheshencunsi);
				if (!game.hasPlayer(target => !target.getSkills(null,false,false).some(skill => skill == "nuyan_yongjue"))) return;
				let next = await player.chooseTarget(1)
					.set("filterTarget", function (card,player, target) {
						return !target.getSkills(null,false,false).some(skill => skill == "nuyan_yongjue");
					})
					.set("prompt", get.prompt("nuyan_sheshencunsi"))
					.set("prompt2", "是否令一名角色获得〖勇决〗？<br>（" + get.translation("nuyan_yongjue_info") + "）")
					.set("ai",(target) => {
						var player = _status.event.player;
						if (player == target && !player.getSkills(null,false,false).some(skill => skill == "nuyan_yongjue")) return 114514;
						return get.attitude(player, target);
					})
					.forResult();
				if (next.bool) next.targets[0]?.addTempSkill("nuyan_yongjue",{player:"phaseEnd"});
			},
		},
		nuyan_yongjue: {//勇决
			trigger:{
				player:"useCardAfter",
			},
			filter: function(event, player) {
				if (!player.isPhaseUsing()) return false;
				const info = get.info(event.card);
				if (!info || info.type != "trick" || info.notarget || (info.selectTarget && info.selectTarget != 1)) return false;
				return event.targets?.some(target => target != player && player.canCompare(target)) && get.color(event.card) == "black" && player.ny_nuqi;
			},
			frequent: true,
			check(event, player) {
				return true;
			},
			async content(event, trigger, player) {
				for (let i of trigger.targets) {
					if (!i.isIn() || !player.canCompare(i)) continue;
					if (!player.ny_nuqi) break;
					let result = await player.chooseBool("是否发动〖勇决〗？<br>与" + get.translation(i) + "拼点，若你赢，其失去1点体力，若你没赢，你失去1点怒气").set("ai", () => true).forResult();
					if (result.bool) {
						let next = await player.chooseToCompare(i).forResult();
						if (next.bool) await i.loseHp();
						else await player.ny_loseNuQi();
					}
				}
			},
		},
		//怒焰神黄忠
		//后续定军战神适配局内获得技能
		nuyan_yongyi: {//勇毅
			trigger:{
				player: "useCardToPlayered",
				target: "useCardToPlayered",
			},
			locked: true,
			forced: true,
			filter: function(event, player) {
				if (event.player == player && event.targets?.length) return get.color(event.card) == "black" && get.tag(event.card, "damage");
				if (event.targets?.includes(player) && event.player != player) return event.card.name == "sha" || get.type(event.card) == "trick";
				return false;
			},
			async content(event, trigger, player) {
				if (trigger.player == player) {
					trigger.getParent().directHit.addArray(game.players);
				} else {
					if (get.color(trigger.card) == "red") await player.draw();
					else trigger.excluded.add(player);
				}
			},
			ai: {
			    unequip: true,
			    skillTagFilter: function(player, tag, arg) {
			        if (arg?.card?.name && player.hasSkill('nuyan_yongyi')) return get.tag(arg.card, "damage") && get.color(arg.card) == "black";
			    },
			},
		},
		nuyan_yingxiongxiangxi: {//英雄相惜
			nuyan_star: 1,
			locked: true,
			derivation:["nuyan_yishi"],
			forced: true,
			usable: 1,
			trigger:{
				player:"dying",
			},
			filter: function(event, player) {
				return event.source && event.source != player;
			},
			async content(event, trigger, player) {
				trigger.source.addTempSkill("fengyin");
				trigger.source.addSkill("nuyan_yishi");
				await player.recoverTo(player.maxHp);
				if (player.hasEmptySlot(2)) {
					const card = get.fh_cardPile((card) => get.subtype(card) == 'equip2' && player.canUse(card, player));
					if (card) await player.chooseUseTarget(card, true, 'nopopup');
				}
			},
		},
		nuyan_yishi: {//义释
			locked: true,
			forced: true,
			trigger:{
				player:"damageBegin",
			},
			filter: function(event, player) {
				return event.source && event.source != player && player.countCards("e");
			},
			async content(event, trigger, player) {
				await player.randomDiscard("e");
				trigger.cancel();
			},
		},
		nuyan_dingjunzhanshen: {//定军战神
			//感觉自己写的就是💩
			locked: true,
			forced: true,
			onremove: true,
			nuyan_star: 3,
			init(player) {
				player.storage.nuyan_dingjunzhanshen = [0, false, false, false];
			},
			mark: true,
			marktext: "战",
			group: ["nuyan_dingjunzhanshen_getEffect", "nuyan_dingjunzhanshen_xiandeng", "nuyan_dingjunzhanshen_xianzhen", "nuyan_dingjunzhanshen_zhanjiang", "nuyan_dingjunzhanshen_duoqi"],
			derivation: ["nuyan_shenshe","nuyan_shenweiqianchong","nuyan_mojinshayu","nuyan_tianren","nuyan_shenweiqianchong","nuyan_cuifengdengnan"],
			intro: {
				name: "定军战神•战功",
				nocount: true,
				content(storage, player) {
					if (!player.storage?.nuyan_dingjunzhanshen?.length) return;
					//AI跑的style
					let list = ["陷阵","斩将","夺旗"];
					let effectList = ["你造成的伤害+1","你体力值变化后摸一张牌","你造成伤害后回复1点体力","你计算与其他角色的距离-1"];
					effectList = effectList.map(i => i + "<br>");
					let str = "先登‌";
					let str1 = "<b style='color: green;border: 2px solid green;border-radius: 10px;padding: 5px 5px;display: inline-block;'>已完成</b>";
					let str2 = "<b style='color: red;border: 2px solid red;border-radius: 10px;padding: 5px 5px;display: inline-block;'>未完成</b>";
					str += player.storage.nuyan_dingjunzhanshen[0] == 4 ? str1 : "<b style='color: red;border: 2px solid red;border-radius: 10px;padding: 5px 5px;display: inline-block;'>" + player.storage.nuyan_dingjunzhanshen[0] + "/4</b>‌&nbsp;&nbsp;&nbsp;";
					for (let i = 0;i < 3;i++) {
						str += list[i];
						str += player.storage.nuyan_dingjunzhanshen[i+1] ? str1 : str2;
						if (i !== 1) str += "<br>";
					}
					if (str.includes("已完成")) {
						str += "目前已获得效果：<br>";
						for (let i = 0;i < 4;i++) {
							if (i == 0 && player.storage.nuyan_dingjunzhanshen[0] == 4) {
								str += effectList[0];
								continue;
							}
							else if (player.storage.nuyan_dingjunzhanshen[i] == true) str += effectList[i];
						}
					}
					return str;
				},
			},
			trigger: {
				player:"phaseJieshuBegin",
			},
			filter: function(event, player) {
				if (!player.storage.nuyan_dingjunzhanshen?.length) return false;
				return player.storage.nuyan_dingjunzhanshen.every(i => [true, 4].includes(i));
			},
			async content(event, trigger, player) {
				//game.me.storage.nuyan_dingjunzhanshen = [4, true, true, true]
				const phase = trigger.getParent("phase", true);
				if (phase) phase.phaseList.splice(phase.num + 1, 0, `phaseUse|${event.name}`);
				else await trigger.player.phaseUse();
				let list = ["nuyan_shen_Shenshehuangzhong", "nuyan_shen_Tianrenhuangzhong"];
				let result = await player.chooseButton(["定军战神：请选择你即将变化的神话形态", [list, "character"]], true)
					.set("ai", (button) => Math.floor(Math.random() * 114514))
					.forResult();
				if (player.name2) await player.reinitCharacter(player.name2, result.links[0]);
				else await player.reinitCharacter(player.name1, result.links[0]);
			},
			subSkill: {
				getEffect:{
					charlotte: true,
					direct: true,
					trigger:{
						source: ["damageEnd", "dying"],
						player: ["damageEnd", "loseHpEnd", "gainEnd"],
					},
					sub: true,
					sourceSkill: "nuyan_dingjunzhanshen",
					filter: function(event, player, triggername) {
						if (!player.storage.nuyan_dingjunzhanshen?.length) return false;
						if (triggername == "gainEnd") return event.source && event.source != player && event.getl(event.source)?.cards?.length > 0;
						return true;
					},
					async content(event, trigger, player) {
						if (trigger.name == "damage" && trigger.source == player) {
							player.storage.nuyan_dingjunzhanshen[0] += trigger.num;
							player.storage.nuyan_dingjunzhanshen[0] = Math.min(player.storage.nuyan_dingjunzhanshen[0], 4);
						}
						if ((trigger.name == "damage" && trigger.player == player) || (trigger.name == "loseHp")) player.storage.nuyan_dingjunzhanshen[1] = true;
						if (trigger.name == "dying") player.storage.nuyan_dingjunzhanshen[2] = true;
						if (event.triggername == "gainEnd") player.storage.nuyan_dingjunzhanshen[3] = true;
					},
					priority: 11451419,
				},
				xiandeng: {
					trigger: {
					    source: ["damageBegin1"],
					},
					forced: true,
					locked: true,
					filter: function(event, player) {
						if (!player.storage.nuyan_dingjunzhanshen?.length) return false;
						return player.storage.nuyan_dingjunzhanshen[0] == 4;
					},
					content: function() {
						trigger.num ++;
					},
					sub: true,
					sourceSkill: "nuyan_dingjunzhanshen",
				},
				xianzhen: {
					trigger: {
					    player:"changeHp",
					},
					forced: true,
					locked: true,
					filter: function(event, player) {
						if (!player.storage.nuyan_dingjunzhanshen?.length) return false;
						return player.storage.nuyan_dingjunzhanshen[1];
					},
					content: function() {
						player.draw();
					},
					sub: true,
					sourceSkill: "nuyan_dingjunzhanshen",
				},
				zhanjiang: {
					trigger: {
					    source: ["damageEnd"],
					},
					forced: true,
					locked: true,
					filter: function(event, player) {
						if (!player.storage.nuyan_dingjunzhanshen?.length) return false;
						return player.storage.nuyan_dingjunzhanshen[2];
					},
					content: function() {
						player.recover();
					},
					sub: true,
					sourceSkill: "nuyan_dingjunzhanshen",
				},
				duoqi: {
					mod: {
						globalFrom:function(from,to,distance){
							if (!from.storage.nuyan_dingjunzhanshen?.length) return distance;
							if (from.storage.nuyan_dingjunzhanshen[3]) return distance - 1;
						},
					},
					sub: true,
					sourceSkill: "nuyan_dingjunzhanshen",
				},
			},
		},
		nuyan_shenshe: {//神射
			enable: "phaseUse",
			group: "nuyan_shenshe_effect",
			global: "nuyan_shenshe_block",
			filter: function(event, player) {
				return player.ny_nuqi && player.ny_nuqi >= 2 && player.getAttackRange();
			},
			check: function (player) {
			    return player.ny_nuqi && player.ny_nuqi >= 2 && player.getAttackRange();
			},
			selectTarget: 1,
			filterTarget: function(card, player, target) {
				return player != target;
			},
			async content(event, trigger, player) {
				const { target } = event;
				for (let i = 0;i < player.getAttackRange();i ++) {
					await player.useCard(target, {name: "sha",storage:{_useCardQianghua: true}}, false)
						.set("nodistance", true);
				}
			},
			subSkill: {
				effect: {
					direct: true,
					sub: true,
					sourceSkill: "nuyan_shenshe",
					trigger: {
						player: "useCard",
					},
					filter: function(event, player) {
						return event?.card?.name == "sha";
					},
					content: function() {
						trigger.card.storage ??= {};
						trigger.card.storage.nuyan_shenshe_block = true;
					},
				},
				block: {
					mod: {
					    cardEnabled: function(card, player) {
					        let evt = get.event();
					        if (evt.name != "chooseToUse") {
					            evt = evt.getParent("chooseToUse");
					        }
					        if (!evt?.respondTo || !evt.respondTo[1]?.storage?.nuyan_shenshe_block) {
					            return;
					        }
					        const color1 = get.color(card),
					            color2 = get.color(evt.respondTo[1]),
					            cards = [card];
					        if (color1 === "unsure") {
					            return;
					        }
					        if (Array.isArray(card.cards)) {
					            cards.addArray(card.cards);
					        } else {
					            return false;
					        }
					        if (color1 != color2) {
					            return false;
					        }
					    },
					},
					charlotte: true,
					sub: true,
					sourceSkill: "nuyan_shenshe",
				},
			},
		},
		nuyan_shenweiqianchong: {//神威千重
			nuyan_star: 1,
			locked: true,
			forced: true,
			init2(player) {
				let list = game.players.filter(current => current != player);
				for (let i of list) {
					i.turnOver();
					i.modedDiscard(i.getCards("hej"));
				}
			},
			trigger: {
				player: ["damageBegin4","loseHp"],
			},
			filter: function(event, player) {
				return player == _status.currentPhase && event.source && event.source != player;
			},
			content() {
				trigger.cancel();
			},
		},
		nuyan_mojinshayu: {//没金铩羽
			nuyan_star: 3,
			locked: true,
			forced: true,
			trigger: {
				source: "damageEnd",
				player: "useCardToPlayer",
			},
			filter: function(event, player) {
				if (event.name == "damage") return event.player != player && event.card?.name == "sha" && event.player.ny_nuqi && event.player.countCards("h");
				return event.card?.name == "sha" && event.targets?.some(target => target.countCards("h") <= player.getAttackRange());
			},
			async content(event, trigger, player) {
				if (trigger.name == "damage") trigger.player.randomDiscard("h",trigger.player.ny_nuqi);
				else {
					trigger.card.storage ??= {};
					trigger.card.storage.nuyan_mojinshayu = true;
					trigger.getParent().baseDamage++;
					lib.skill._ny_noneFangYuFushi.init(trigger.target, "useCardAfter", (evt) => evt?.card?.storage?.nuyan_mojinshayu);
				}
			},
			ai: {
				unequip: true,
				"unequip_ai": true,
				skillTagFilter: function(player, tag, arg) {
				    return arg?.card?.storage?.nuyan_mojinshayu;
				},
			},
		},
		nuyan_tianren: {//天刃
			enable: "phaseUse",
			filterCard: true,
			position: "he",
			filter: function(event, player) {
				return player.getCards("he").some(card => get.type(card) == "equip");
			},
			filterCard: function(card) {
				return get.type(card) == "equip";
			},
			filterTarget: function(card, player, target) {
				return target != player;
			},
			check: function(card) {
			    return 10 - get.value(card);
			},
			async content(event, trigger, player) {
				const { target } = event;
				const suit = await target.judge("nuyan_tianren").forResult("suit");
				switch(suit) {
					case "spade": await target.damage(3, "nosource");break;
					case "heart": await target.loseHp();break;
					case "club":
						let cards = target.countCards("h");
						if (!cards?.length) return;
						if (cards.length > 2) cards = cards.randomGets(2);
						await target.ny_cuihuiCards(cards);
						break;
					case "diamond": await target.ny_loseNuQi(player);break;
				}
			},
		},
		nuyan_cuifengdengnan: {//摧锋登难
			locked: true,
			forced: true,
			nuyan_star: 3,
			trigger: {
				player: ["useCard", "respond", "useCardToPlayer"],
			},
			filter: function(event, player, triggername) {
				return ["basic","trick"].includes(get.type(event.card, "trick"));
			},
			async content(event, trigger, player) {
				if (event.triggername == "useCardToPlayer") {
					if (get.distance(trigger.target, player) <= player.getAttackRange()) {
						trigger.card.storage ??= {};
						trigger.card.storage.nuyan_cuifengdengnan = true;
					}
					if (trigger.card.storage.nuyan_cuifengdengnan && player.stat[player.stat.length - 1].card.sha > 0) player.stat[player.stat.length - 1].card.sha--;
					return;
				}
				await player.draw();
			},
			mod: {
				cardUsable:function (card, player, num) {
					if (card.storage?.nuyan_cuifengdengnan) return Infinity;
				},
			},
		},
		//怒焰界曹金玉
		nuyan_yuqi: {//隅泣
			trigger: {
				global: "damageEnd",
				player: "phaseZhunbeiBegin",
			},
			init: function(player) {
				player.storage.nuyan_yuqi = [5, 4, 3];
			},
			frequent: true,
			filter: function(event, player, triggername) {
				if (triggername == "phaseZhunbeiBegin") return true;
				let num = (player.getHistory("useSkill", evt => evt.skill === "nuyan_yuqi")?.length) ?? 0;
				if (num > 0 && player == _status.currentPhase) num --;
				return num < (player.storage.nuyan_yuqi[0] ?? 0);
			},
			async content(event, trigger, player) {
				player.storage.nuyan_yuqi ??= [0, 0, 0];
				if (event.triggername == "phaseZhunbeiBegin") {
					player.storage.nuyan_yuqi = player.storage.nuyan_yuqi.map(i => i = Math.min(i+2, 10));
					return;
				}
				if (player.storage.nuyan_yuqi[1] == 0) return;
				//event.list = lib.skill.yuqi.getInfo(player);
				var cards = get.cards(player.storage.nuyan_yuqi[1]);
				if (player.storage.nuyan_yuqi[2] == 0 || !trigger.player.isIn()) {
					await player.gain(cards);
					return;
				}
				game.cardsGotoOrdering(cards);
				var next = player.chooseToMove_new(true, "隅泣");
				next.set("target", trigger.player);
				next.set("list", [
				    ["你获得的牌", cards],
				    [["交给" + get.translation(trigger.player) + '<div class="text center">' + "至多" + get.cnNumber(player.storage.nuyan_yuqi[2]) + "张" + "</div>"]]
				]);
				next.set("filterMove", function (from, to, moved) {
				    if (to == 1) {
				        return moved[1].length < player.storage.nuyan_yuqi[2];
				    }
				    return true;
				});
				next.set("processAI", function (list) {
					const { player , target } = get.event();
				    let cards = list[0][1],
						cards2;
				    if (get.attitude(player, target) > 0) {
				        card2 = cards.shift();
				    }
				    return [cards, [card2]];
				});
				let result = await next.forResult();
				let moved = result.moved;
				cards.removeArray(moved[0]);
				cards.removeArray(moved[1]);
				let list = [],
					b = false;
				if (moved[0].length) {
					list.push([player, moved[0]]);
					b = true;
				}
				if (moved[1].length) {
				    list.push([trigger.player, moved[1]]);
				}
				await game.loseAsync({
				    gain_list: list,
				    giver: player,
				    animate: "draw",
				}).setContent("gaincardMultiple");
				if (b && trigger.source) {
					let filterSkill = "nuyan_xianjingduanzhuang";
					const ownedSkills = player.getSkills(null, false, true).filter(skill => {
						return skill == filterSkill;
					});
					if (ownedSkills.length > 0 && !player.isTempBanned(filterSkill) && !(player.shixiaoedSkills && player.shixiaoedSkills.includes(filterSkill))) {
						let next2 = await player.chooseBool("是否发动〖娴静端庄〗：<br>令" + get.translation(trigger.source) + "失去2点体力？")
							.set("ai", () => -1 * get.attitude(_status.event.player, _status.event.source))
							.set("source", trigger.source)
							.forResult();
						if (next2.bool) {
							player.logSkill(filterSkill);
							await trigger.source.loseHp(2);
						}
					}
				}
			},
		},
		nuyan_shanshenzili: {//善身自立
			trigger: {
				global: "changeHp",
			},
			locked: true,
			nuyan_star: 1,
			forced: true,
			filter(event, player) {
				return !player.getHistory("sourceDamage", evt => evt.player == event.player)?.length && event.num < 0;
			},
			async content(event, trigger, player) {
				if (player.isDamaged()) await player.recover();
				else player.ny_addNuQi();
			},
		},
		nuyan_xianjingduanzhuang: {//娴静端庄
			nuyan_star: 3,
			priority: 0,
		},
		//怒焰界鲁肃
		nuyan_haoshi: {//好施
			trigger: {
				player: "phaseDrawBegin",
			},
			forced: true,
			async content(event, trigger, player) {
				trigger.num += game.countGroup() + 1;
			},
			group: "nuyan_haoshi_effect",
			subSkill: {
				effect: {
					sub: true,
					sourceSkill: "nuyan_haoshi",
					trigger: {
						player: "phaseDrawAfter",
					},
					forced: true,
					async content(event, trigger, player) {
						let result = await player.chooseCardTarget({
							position: "h",
							selectCard: [1, Infinity],
							selectTarget: 1,
							ai1: function(card) {
								return 4 - get.value(card);
							},
							ai2: function(target) {
								var player = _status.event.player;
								return get.attitude(player, target);
							},
							filterTarget: function(card, player, target) {
								return target != player;
							},
							prompt: get.prompt("nuyan_haoshi"),
							"prompt2":"交给一名其他角色任意张手牌并获得等量点怒气",
						}).forResult();
						if (result.bool) {
							await player.give(result.cards, result.targets[0]);
							await player.ny_addNuQi(result.cards.length);
						}
					},
				},
			},
		},
		nuyan_lianliukangcao: {//联刘抗曹
			trigger: {
				global: "roundStart",
			},
			frequent: true,
			nuyan_star: 1,
			filter: function(event, player) {
				return player.ny_nuqiMax && player.ny_nuqiMax > 1 && player.maxHp > 1 && game.hasPlayer(current => current != player && current.countCards("h") <= player.countCards("h"));
			},
			async cost(event, trigger, player) {
				let result = await player.chooseTarget(1)
					.set("filterTarget", function (card,player, target) {
						return target != player && target.countCards("h") <= player.countCards("h");
					})
					.set("prompt", get.prompt("nuyan_lianliukangcao"))
					.set("prompt2", get.prompt2("nuyan_lianliukangcao"))
					.set("ai", (target) => {
						var player = _status.event.player;
						return get.attitude(player, target) - 5;
					})
					.forResult();
				if (result.bool) event.result = result;
			},
			async content(event, trigger, player) {
				const [target] = event.targets;
				if (target.ny_nuqiMax && target.ny_nuqiMax == 6) {
					await target.gainMaxHp();
					await target.draw(3);
					await player.loseMaxHp();
					return;
				}
				let result = await player.chooseBool("是否令" + get.translation(target) + "加1点体力上限并摸三张牌，然后你减1点体力上限<br>若选择否，则改为其加1点怒气上限并摸三张牌，然后你减1点怒气上限")
					.set("ai", () => Math.random() * 2 - 1);
				if (result.bool) {
					await target.gainMaxHp();
					await target.draw(3);
					await player.loseMaxHp();
				} else {
					await target.ny_gainNuQiMax(player);
					await target.draw(3);
					await player.ny_loseNuQiMax();
				}
			},
		},
		nuyan_dizaolianmeng: {//缔造联盟
			trigger: {
				global: "phaseUseBegin",
			},
			nuyan_star: 3,
			check(event, player) {
				//后续/蹲个人来写ai，懒得写了
				return -114;
			},
			filter: function(event, player) {
				return event.player != player;
			},
			async changeMaxHp(player, num) {
				if (player.maxHp == num) return;
				let num2 = player.maxHp;
				if (num2 > num) await player.loseMaxHp(num2 - num);
				else await player.gainMaxHp(num - num2);
			},
			async changeMaxNuQi(player, num, source) {
				source ??= player;
				if (player.ny_nuqiMax == num) return;
				let num2 = player.ny_nuqiMax;
				if (num2 > num) await player.ny_loseNuQiMax(num2 - num, source);
				else await player.ny_gainNuQiMax(num - num2, source);
			},
			async changeHandCards(player, target) {
				const lose_list = [];
				let cards = [];
				[player, target].forEach(current => {
				    const hs = current.getCards("h");
				    if (hs.length) {
				        cards.addArray(hs);
				        current.$throw(hs.length, 500);
				        game.log(current, "将", get.cnNumber(hs.length), "张牌置入了处理区");
				        lose_list.push([current, hs]);
				    }
				});
				await game
				    .loseAsync({
				        lose_list: lose_list,
				    })
				    .setContent("chooseToCompareLose");
				await game.delay();
				cards = cards.filterInD();
				const pcards = cards.randomGets(Math.ceil(cards.length / 2));
				const tcards = cards.removeArray(pcards);
				const list = [];
				if (pcards.length) {
				    list.push([player, pcards]);
				    game.log(player, "获得了", get.cnNumber(pcards.length), "张牌");
				}
				if (tcards.length) {
				    list.push([target, tcards]);
				    game.log(target, "获得了", get.cnNumber(tcards.length), "张牌");
				}
				await game.loseAsync({
				    gain_list: list,
				    player: player,
				    animate: "draw",
				}).setContent("gaincardMultiple");
			},
			async hpMax(player, target) {
				let num = player.maxHp + target.maxHp;
				num /= 2;
				await lib.skill.nuyan_dizaolianmeng.changeMaxHp(player, Math.ceil(num));
				await lib.skill.nuyan_dizaolianmeng.changeMaxHp(target, Math.floor(num));
				await lib.skill.nuyan_dizaolianmeng.changeHandCards(player, target);
			},
			async nuqiMax(player, target) {
				if (!player.ny_nuqiMax && !target.ny_nuqiMax) return false;
				player.ny_nuqiMax ??= 0;
				target.ny_nuqiMax ??= 0;
				let num = target.ny_nuqiMax + player.ny_nuqiMax;
				num /= 2;
				await lib.skill.nuyan_dizaolianmeng.changeMaxNuQi(player, Math.ceil(num));
				await lib.skill.nuyan_dizaolianmeng.changeMaxNuQi(target, Math.floor(num), player);
				await lib.skill.nuyan_dizaolianmeng.changeHandCards(player, target);
			},
			async content(event, trigger, player) {
				if (!player.ny_nuqiMax && !trigger.player.ny_nuqiMax) {
					await lib.skill.nuyan_dizaolianmeng.hpMax(player, trigger.player);
					return;
				}
				let result = await player.chooseBool("是否与" + get.translation(trigger.player) + "平均交换体力上限并平均交换手牌（你获得的更多）<br>若选择否，则改为怒气上限").forResult();
				if (result.bool) await lib.skill.nuyan_dizaolianmeng.hpMax(player, trigger.player);
				else await lib.skill.nuyan_dizaolianmeng.nuqiMax(player, trigger.player);
			},
		},
		//怒焰吴苋
		nuyan_yirong: {//移荣
			trigger: {
				player: "phaseUseBegin",
			},
			frequent: true,
			check(event, player) {
				if (player.countCards("h") > player.maxHp) return -114;
				else return 114;
			},
			async content(event, trigger, player) {
				await player.drawTo(player.maxHp);
				player.when({player: "phaseUseEnd"})
					.then(() => player.modedDiscard(player.getCards("h")));
			},
		},
		nuyan_hechundaiyan: {//贺春怠宴
			enable: "phaseUse",
			marktext: "宴",
			intro: {
				name: "贺春怠宴",
				content: "回合开始时，你移去所有该标记并失去#点体力",
			},
			usable: 1,
			lose: false,
			nuyan_star: 1,
			discard: false,
			delay: false,
			prepare: "give2",
			filter: function(event, player) {
				return player.hasCard({ suit: "heart" }, "h");
			},
			filterTarget: function(card, player, target) {
				return player != target;
			},
			selectTarget: 1,
			selectCard: 1,
			position: "h",
			filterCard: function (card) {
				return get.suit(card) == "heart";
			},
			async content(event, trigger, player) {
				const { target, cards } = event;
				const [card] = cards;
				await player.give(card, target);
				target.addMark("nuyan_hechundaiyan");
				target.when({player: "phaseBegin"})
					.then(() => {
						player.loseHp(player.countMark("nuyan_hechundaiyan"));
						player.removeMark("nuyan_hechundaiyan", Infinity);
						player.unmarkSkill("nuyan_hechundaiyan");
						player.updateMarks();
					});
			},
		},
		nuyan_jirenguixiang: {//吉人贵相
			trigger: {
				player: "phaseChange",
			},
			frequent: true,
			nuyan_star: 3,
			"prompt2": function(event, player) {
				const phaseName = event.phaseList[event.num].replace(/\|.+/, '');
				return "将你的" + get.translation(phaseName) + "改为出牌阶段";
			},
			filter: function(event, player) {
				if (event.phaseList[event.num].startsWith("phaseUse")) return false;
				//阶段从0开始计
				let num = 0;
				game.players.forEach(current => num += current.countMark("nuyan_hechundaiyan"));
				let num2 = player.getHistory("skipped")?.length ?? 0;
				return num == (event.num - num2);
			},
			content() {
				const phaseName = trigger.phaseList[trigger.num].replace(/\|.+/, '');
				trigger.phaseList[trigger.num] = "phaseUse|nuyan_jirenguixiang";
				game.log(player, phaseName, '改为了', '出牌阶段');
				game.delayx();
			},
		},
		//怒焰界徐晃
		nuyan_duanliang: {//断粮
			enable: "chooseToUse",
			group: "nuyan_duanliang_draw",
			filterCard: function(card){
			    return get.color(card) == "black";
			},
			viewAsFilter: function(player) {
			    return player.countCards("h",{color:"black"}) && player.isPhaseUsing();
			},
			position: "h",
			viewAs: {
			    name: "lebu",
				storage:{
					_useCardQianghua: true,
				},
			},
			prompt: "将一张黑色手牌当作强化【乐不思蜀】使用",
			ai: {
			    order: 12,
			    basic: {
			        order: 1,
			        useful: 1,
			        value: 8,
			    },
			    result: {
			        target: function(player,target){
			            return -1.5/Math.sqrt(target.countCards('h')+1);
			        },
			        ignoreStatus: true,
			    },
			    tag: {
			        skip: ["phaseDraw","phaseUse"],
			    },
			},
			subSkill: {
				draw: {
					trigger: {
						global: "phaseDrawSkipped",
					},
					frequent: true,
					content() {
						player.draw(3);
					},
					sub: true,
					sourceSkill: "nuyan_duanliang",
				},
			},
		},
		nuyan_jiuyuanfancheng: {//救援樊城
			enable: "phaseUse",
			nuyan_star: 1,
			filter(event,player) {
				return player.ny_nuqi && player.ny_nuqi >= 1 && game.hasPlayer(current => current != player && current.countCards("j"));
			},
			selectTarget: 1,
			filterTarget(card, player, target) {
				return target != player && target.countCards("j");
			},
			check(player, target) {
				//ai等人写，懒得写
			    return -114;
			},
			discard: false,
			lose: false,
			delay: false,
			async content(event, trigger, player) {
				const { target } = event;
				await player.ny_loseNuQi();
				await player.gainPlayerCard(target, true, "hej");
			},
		},
		nuyan_liangjinyuanjue: {//粮尽援绝
			nuyan_star: 3,
			forced: true,
			locked: true,
			marktext: "绝",
			intro: {
				name:"粮尽援绝",
				content:"本回合的出牌阶段内你无法使用或打出黑色牌",
			},
			trigger:{
				global:"judgeEnd",
			},
			filter: function (event, player) {
				if (!event.player) return false;
				if (event.player != player) return false;
				const symbols = Object.getOwnPropertySymbols(_status.event?.getParent()?.card);
				return _status.event?.getParent()?.card?.name == "lebu" && _status.event?.getParent()?.card?.[symbols[0]]?.storage?._useCardQianghua == true && event.result.suit == "heart";
			},
			content: function() {
				trigger.player.addMark("nuyan_liangjinyuanjue");
				trigger.player.when({player: "phaseEnd"})
					.then(() => {
						player.removeMark("nuyan_liangjinyuanjue", Infinity);
						player.unmarkSkill("nuyan_liangjinyuanjue");
						player.updateMarks();
					});
			},
			global: "nuyan_liangjinyuanjue_effect",
			subSkill: {
				effect: {
					sub: true,
					sourceSkill: "nuyan_liangjinyuanjue",
					mod: {
						cardEnabled2:function (card, player) {
							if (get.itemtype(card) == "card" && get.color(card) == "black" && player.countMark("nuyan_liangjinyuanjue") && player.isPhaseUsing()) return false;
						},
					},
				},
			},
		},
		//怒焰界郭嘉
		nuyan_yiji: {//遗计
			forced: true,
			locked: true,
			trigger: {
				player: ["damageBegin", "loseHpEnd"],
			},
			filter: function(event, player, triggername) {
				return event.num > 0;
			},
			async content(event, trigger, player) {
				if (event.triggername == "loseHpEnd") {
					await player.draw();
					return;
				}
				let result = await player.chooseTarget(1)
					.set("prompt", get.prompt("nuyan_yiji"))
					.set("prompt2", "令一名角色摸" + get.cnNumber(trigger.num * 2) + "张牌")
					.set("ai", (target) => {
						var player = _status.event.player
						if (player == _status.currentPhase && player == target) return 999;
						return get.attitude(player, target);
					})
					.set("forced", true)
					.forResult();
				await result.targets[0].draw(2 * trigger.num);
			},
		},
		nuyan_huishixinzhi:{//慧识心志
			nuyan_star:1,
			audioname: ["re_guojia","xizhicai","gz_nagisa"],
			trigger: {
			    player: "judgeEnd",
			},
			forced: true,
			locked: true,
			filter: function(event, player) {
				return event.result?.card;
			},
			async content(event, trigger, player){
				await player.gain(trigger.result.card, "gain2");
				if (trigger.result.card.number <= 10) {
					if (player.maxHp < 10) await player.gainMaxHp();
				}
				else await player.loseHp();
			},
		},
		nuyan_zhiceqizuo: {//智策奇佐
			enable: "phaseUse",
			usable: 1,
			nuyan_star: 3,
			derivation: "nuyan_qizuo",
			check(player) {
				return player.hp > 1;
			},
			async content(event, trigger, player) {
				while (true) {
					let result = await player.judge().forResult();
					if (get.type(result.card) == "basic") {
						let next1 = await player.chooseBool("是否失去1点体力令然后重复此流程？")
							.set("ai", () => _status.event.player.hp > 1).forResult();
						if (next1.bool) {
							await player.loseHp();
							continue;
						} else break;
					} else if (get.type(result.card, "trick") == "trick") {
						let next2 = await player.chooseTarget(1)
							.set("prompt", "令一名角色获得技能〖奇佐〗")
							.set("ai", (target) => _status.event.player == target)
							.forResult();
						if (next2.bool) {
							next2.targets[0].addTempSkill("nuyan_qizuo", { player: "phaseEnd" });
						}
						break;
					}
					break;
				}
			},
		},
		nuyan_qizuo: {//奇佐
			enable: "chooseToUse",
			hiddenCard: function(player, name) {
				return player.isPhaseUsing() && get.info("nuyan_qizuo").buttonRequire(player).includes(name);
			},
			filter: function(event, player, triggername) {
			    return player.isPhaseUsing() && get.info("nuyan_qizuo").buttonRequire(player, event).length;
			},
			chooseButton: {
			    dialog: function(event, player){
			        let list = get.info("nuyan_qizuo").buttonRequire(player, event);
					list = list.map(i => i = ["锦囊", "", i]);
			        return ui.create.dialog(get.translation("nuyan_qizuo"), [list,'vcard']);
			    },
				check: (button) => _status.event.player.getUseValue(button.link[2]),
				filterButton: (button, player) => player.hasUseTarget(button.link[2]),
			    backup: function(links,player){
			        return {
			            filterCard: () => true,
						selectCard: 1,
						popname: true,
			            precontent:function() {
							player.markAuto("nuyan_qizuo_used",event.result.card.name);
							player.when({ global:"phaseUseEnd" })
								.then(() => delete player.storage.nuyan_qizuo_used);
			            },
						position: "h",
						viewAs:{
							name:links[0][2],
						},
			        }
			    },
			    prompt: function(links,player){
			        return "〖奇佐〗：将一张手牌当作【" + get.translation(links[0][2]) + "】使用";
			    },
			},
			buttonRequire: function(player, event) {
			    var list = [];
				const hs = player.getCards('h');
				if (!hs.length) return list;
				if (hs.every(card => game.checkMod(card, player, 'unchanged', 'cardEnabled2', player) === false)) return list;
			    for (var name of lib.inpile) {
			        if (get.type(name) != "trick") continue;
					if (name == "wuxie") continue;
					if (player.storage.nuyan_qizuo_used?.includes(name)) continue;
			    	if (event) {
			    		if (event.filterCard(get.autoViewAs({ name }, "unsure"), player, event)) list.push(name);
			    	}
			        else list.push(name);
			    }
			    return list;
			},
			ai: {
			    order: 2,
			    result: {
			        player: 1,
			    },
			    threaten: 1.6,
			},
		},
		//怒焰魏文鸯
		nuyan_chuifeng: {//棰锋
			enable: "phaseUse",
			marktext: "仇",
			intro: {
			    name: "仇",
			    content: "你受到因“棰锋”使用的【决斗】造成的伤害+#",
			},
			usable: 1,
			filterTarget: function(card,player,target){
			    return player != target;
			},
			check(player) {
				return player.hp > 1;
			},
			async content(event, trigger, player) {
				await player.loseHp();
				const target = event.targets[0];
				target.addMark("nuyan_chuifeng");
				await player.useCard({
					name: "juedou",
					storage: {
						nuyan_chuifeng: true,
					},
				}, target, false, "nuyan_chuifeng");
			},
			group: "nuyan_chuifeng_effect",
			subSkill: {
				effect: {
					trigger:{
						source: "damageBefore",
						player: "damageBegin1",
					},
					charlotte: true,
					forced: true,
					filter: function(event, player, triggername) {
						return event?.card?.name == "juedou" && event?.card?.storage?.nuyan_chuifeng;
					},
					async content(event, trigger, player) {
						if (event.triggername == "damageBegin1") {
							trigger.cancel();
							await player.draw(2);
						} else trigger.num += trigger.player.countMark("nuyan_chuifeng");
					},
					sub: true,
					sourceSkill: "nuyan_chuifeng",
					priority: 1145141919810114,
				},
			},
		},
		nuyan_nvliguoren: {//膂力过人
			nuyan_star: 1,
			usable: 1,
			trigger: {
				player: "damageEnd",
				source: "damageEnd",
			},
			frequent: false,
			filter: function(event, player) {
				return player.hp != player.countCards("h");
			},
			async content(event, trigger, player) {
				if (player.hp > player.countCards("h")) await player.drawTo(player.hp);
				else await player.recoverTo(player.countCards("h"));
			},
		},
		nuyan_henxiaochoujue: {//恨销仇决
			nuyan_star: 3,
			enable: "phaseUse",
			check(player) {
				if (player.getHistory("useSkill")?.length) {
					if (player.getHistory("useSkill")[player.getHistory("useSkill").length - 1].skill == "nuyan_chuifeng" && player.maxHp > 1) return 114514;
				}
				return false;
			},
			async content(event, trigger, player) {
				await player.loseMaxHp();
				player.getStat().skill.nuyan_chuifeng = 0;
			},
			group: "nuyan_henxiaochoujue_effect",
			subSkill: {
				effect: {
					trigger: {
						source: "dieAfter",
					},
					frequent: true,
					filter: function(event, player) {
						return event.player?.countMark("nuyan_chuifeng");
					},
					content() {
						player.gainMaxHp(trigger.player.countMark("nuyan_chuifeng"));
					},
					sub: true,
					sourceSkill: "nuyan_henxiaochoujue",
				},
			},
		},
		//怒焰朱然
		nuyan_danshou: {//胆守
			enable: "phaseUse",
			selectCard: 2,
			position: "he",
			filter: function(event, player) {
				let list = [];
				player.getCards("he")?.forEach(c => list.add(get.color(c)));
				return list?.length > 1;
			},
			filterTarget: function(card, player, target) {
				return player != target;
			},
			filterCard: function (card) {
			    if (!ui.selected.cards.length) return true;
				return get.color(card) == get.color(ui.selected.cards[0])
			},
			check(card) {
				return 6 - get.value(card);
			},
			async content(event, trigger, player) {
				const target = event.targets[0],
					cards = event.cards;
				if (get.color(cards[0]) == "red") {
					await player.draw();
					await target.randomDiscard();
				}
				if (get.color(cards[0]) == "black") {
					await player.ny_loseNuQi();
					await target.damage(player);
				}
			},
		},
		nuyan_yifudangguan: {//一夫当关
			trigger: {
			    target: "useCardToTarget",
			},
			forced: true,
			nuyan_star: 1,
			filter: function (event, player, triggername) {
				return event.player != player;
			},
			content: function () {
			    player.draw(2);
			},
		},
		nuyan_bajianlungong: {//拔剑论功
			forced: true,
			locked: false,
			nuyan_star: 3,
			trigger: {
			    global: "phaseBegin",
			},
			filter: function(event, player) {
				return event.player != player;
			},
			async content(event, trigger, player) {
				let num = Math.min(trigger.player.maxHp, 10);
				player.storage.nuyan_bajianlungong = num;
				await player.gainMaxHp(num);
				await player.recover(num);
				//为什么then不能异步啊
				player.when({ global: "phaseEnd" })
					.filter((event, player) => player.storage?.nuyan_bajianlungong)
					.then(() => {
						player.loseMaxHp(player.storage.nuyan_bajianlungong);
						trigger.nuyan_bajianlungong_num = player.hp;
					})
					.then(() => {
						num = trigger.nuyan_bajianlungong_num - player.hp;
						num = Math.ceil(num / 2);
						if (num <= 0) event.finish();
						trigger.nuyan_bajianlungong_num = num;
						player.chooseTarget(1)
							.set("prompt", get.prompt("nuyan_bajianlungong"))
							.set("prompt2", "对一名其他角色造成" + get.cnNumber(num) + "点伤害")
							.set("ai", (target) => -1 * get.attitude(_status.event.player, target))
							.set("filterTarget", (card, player, target) => player != target);
					})
					.then(() => {
						if (result.bool) result.targets[0].damage(trigger.nuyan_bajianlungong_num, player);
					});
			},
		},
		//怒焰神孙坚
		nuyan_hulie: {//虎烈
			forced: true,
			locked: true,
			trigger: {
				player: "useCardToPlayered",
			},
			filter: function(event, player) {
				return event.targets?.length == 1 && event.target != player && get.tag(event.card, "damage");
			},
			async content(event, trigger, player) {
				await player.discardPlayerCard(trigger.target, [0, player.getDamagedHp()], false)
					.set("prompt", "〖虎烈〗：弃置" + get.translation(trigger.target) + "至多" + get.cnNumber(player.getDamagedHp()) + "张牌");
				trigger.card.storage.nuyan_hulie_target ??= [];
				trigger.card.storage.nuyan_hulie_target.addArray(trigger.targets);
			},
			group: "nuyan_hulie_effect",
			subSkill: {
				effect: {
					charlotte: true,
					forced: true,
					trigger: {
						player: "useCardAfter",
					},
					filter: function(event, player) {
						if (!event.card?.storage?.nuyan_hulie_target?.length) return false;
						return !player.getAllHistory("sourceDamage")?.some(evt => evt.card == event.card);
					},
					async content(event, trigger, player) {
						for (let i of trigger.card.storage.nuyan_hulie_target) {
							if (!i.isIn()) continue;
							if (i.canUse("juedou", player, false)) {
								i.useCard({
									name: "juedou",
									storage: {
										_useCardQianghua: true,
									},
								}, player, "noai", false, "nuyan_hulie");
							}
						}
					},
					sub: true,
					sourceSkill: "nuyan_hulie",
				},
			},
		},
		nuyan_shenweiqianjun: {//神威千钧
			forced: true,
			locked: true,
			nuyan_star: 1,
			init2(player, skill) {
				let next = game.createEvent(skill + "_init");
				next.player = player;
				next.setContent("emptyEvent");
			},
			trigger: {
				player: ["damageBegin", "loseHpBegin", "nuyan_shenweiqianjun_init"],
			},
			filter(event, player, name) {
				if (name.endsWith("init")) return true;
				return player.hp == 1 && event.num > 0;
			},
			async content(event, trigger, player) {
				if (event.triggername.endsWith("init")) {
					let list = game.players.filter(current => current != player);
					for (let i of list) {
						//init时机比游戏开始更早
						if (typeof i.ny_nuqi == "undefined" && game.phaseNumber == 0) i.ny_initNuQiNum = 0;
						else await i.ny_loseNuQi(player, (i.ny_nuqi ?? 0));
						await i.turnOver();
						await i.disableEquip(2);
					}
					return;
				}
				trigger.cancel();
				await player.recover(trigger.num);
			},
		},
		nuyan_qinwangpolu: {//勤王破虏
			nuyan_star: 3,
			sunbenSkill: true,
			skillAnimation: true,
			animationColor: "wood",
			enable: "phaseUse",
			check(event, player) {
				return -1 * get.attitude(player, event.player);
			},
			filter: function(event, player) {
				return !player.hasSkill("nuyan_qinwangpolu_sunben");
			},
			filterTarget: function(card, player, target) {
				return target != player;
			},
			async content(event, trigger, player) {
				const target = event.targets[0];
				player.addSkill("nuyan_qinwangpolu_sunben");
				await player.loseMaxHp();
				await target.loseMaxHp();
				player.markAuto("nuyan_qinwangpolu_effect", [target]);
				player.addTempSkill("nuyan_qinwangpolu_effect", { player: "phaseUseEnd" });
			},
			subSkill: {
				effect: {
					onremove: true,
					sub: true,
					sourceSkill: "nuyan_qinwangpolu",
					charlotte: true,
					forced: true,
					trigger: {
						source: "dying",
					},
					mark: true,
					intro: {
						name: "勤王破虏",
						content(storage, player) {
							if (!player.storage?.nuyan_qinwangpolu_effect?.length) return;
							return "此阶段你因对" + get.translation(player.storage.nuyan_qinwangpolu_effect) + "造成致命伤害而令其进入濒死状态时，其须弃置X张装备牌，否则其直接阵亡(X为本次伤害值与其体力值的差+1)";
						},
					},
					filter: function(event, player) {
						return player.storage?.nuyan_qinwangpolu_effect?.includes(event.player);
					},
					async content(event, trigger, player) {
						let history = player.getAllHistory("sourceDamage");
						history = history[history?.length - 1];
						if (!history || (history.player != trigger.player)) return;
						let num = Math.abs(history.num - trigger.player.hp) + 1,
							num2 = trigger.player.getCards("he")?.filter(card => get.type(card) == "equip")?.length ?? 0;
						if (num2 < num) {
							await trigger.player.die({ source: player });
							return;
						}
						let result = await trigger.player.chooseToDiscard(num, false, "he")
							.set("prompt", "〖勤王破虏〗：弃置" + get.cnNumber(num) + "装备牌，否则立即死亡")
							.set("ai", (card) => true)
							.set("filterCard", (card) => get.type(card) == "equip")
							.forResult();
						if (!result.bool) await trigger.player.die({ source: player });
					},
				},
				sunben: {
					sub: true,
					sourceSkill: "nuyan_qinwangpolu",
					direct: true,
					charlotte: true,
					firstDo: true,
					trigger: {
						player: "dyingAfter",
						source: "dieAfter",
					},
					content: function() {
						player.removeSkill("nuyan_qinwangpolu_sunben");
						player.popup("勤王破虏");
						game.log(player, "恢复了技能", "#g〖勤王破虏〗");
					},
				},
			},
		},
		//怒焰界曹节
		nuyan_shouxi: {
			//时机写在precontent里
			skillEffect: async function(player) {
				let num = player.ny_nuqi;
				let result = await player.chooseTarget(1)
					.set("prompt", get.prompt("nuyan_shouxi"))
					.set("prompt2", "令一名其他角色失去" + get.cnNumber(num + 1) + "点体力")
					.set("ai", (target) => -1 * get.attitude(_status.event.player, target))
					.set("filterTarget", (card, player, target) => player != target)
					.forResult();
				if (result.bool) {
					player.logSkill("nuyan_shouxi", result.targets[0]);
					await result.targets[0].loseHp(player.ny_nuqi + 1);
					await player.ny_loseNuQi(2);
					let filterSkill = "nuyan_nvzhongjinguo";
					const ownedSkills = player.getSkills(null, false, true).filter(skill => {
						return skill == filterSkill;
					});
					let b = ownedSkills.length !== 0 && !player.isTempBanned(filterSkill) && !(player.shixiaoedSkills && player.shixiaoedSkills.includes(filterSkill));
					if (b) {
						await player.ny_addNuQi();
						await player.draw().set("LOGSkill", "nuyan_nvzhongjinguo");
					}
				}
			},
			priority: 0,
		},
		nuyan_nvzhongjinguo: {//女中巾帼
			priority: 0,
			nuyan_star: 1,
			trigger: {
				player: "drawAfter",
			},
			forced: true,
			locked: false,
			filter(event, player) {
				return event.LOGSkill == "nuyan_nvzhongjinguo";
			},
			content() {
				if (lib.config.extension_怒焰武将_nuyan_jieFirst_caojie == "second") player.tempBanSkill("nuyan_nvzhongjinguo");
				else if (player.getRoundHistory("useSkill")?.filter(evt => evt.skill == event.skill)?.length >= lib.config.extension_怒焰武将_nuyan_star) player.tempBanSkill("nuyan_nvzhongjinguo", "roundEnd");
			},
		},
		nuyan_huiminjishi: {//惠民济世
			nuyan_star: 3,
			frequent: true,
			trigger: {
				player: "phaseJieshuBegin",
			},
			async content(event, trigger, player) {
				let num = Number(lib.config.extension_怒焰武将_nuyan_star);
				if (num == 0) return;
				await player.draw(num);
				let result = player.chooseCardTarget({
					position: "h",
					selectCard: [num, num],
					forced: false,
					filterTarget: (card, player, target) => player != target,
					selectTarget: 1,
					ai1: (card) => 6 - get.value(card),
					ai2: (target) => get.attitude(_status.event.player, target),
					prompt: get.prompt("nuyan_huiminjishi"),
					"prompt2": "展示" + get.cnNumber(num) + "张手牌并将之交给一名其他角色",
				}).forResult();
				if (result.bool) await result.targets[0].gain(result.cards);
			},
		},
		nuyan_Legend_diewufeihua: {//蝶舞飞花
			round: 1,
			forced: true,
			locked: true,
			trigger: {
				global: "phaseUseBegin",
			},
			content: async function(event, trigger, player) {
				player.draw();
				await player.ny_addNuQi();
			},
		},
		//怒焰李儒
		nuyan_fencheng: {//焚城
			enable: "phaseUse",
			check(event, player) {
				let num = 0;
				game.players.forEach(i => {
					if (i != player) {
						num -= get.attitude(player, i);
						if (get.attitude(player, i) > 0) {
							if (i.hp == 1) return -1;
						} else num += i.hp;
					}
				});
				return num;
			},
			filter: function(event, player) {
				if (player.getHistory("useSkill")?.filter(evt => evt.skill == "nuyan_fencheng")?.length == 1 && player.ny_zhuanShuFuShiId?.some(id => id == "_ny_zhuanShu_dujiu")) return true;
				return (player.ny_nuqi ?? 0) >= (player.getHistory("useSkill")?.filter(evt => evt.skill == "nuyan_fencheng")?.length ?? 0);
			},
			async content(event, trigger, player) {
				let num = (player.getHistory("useSkill")?.filter(evt => evt.skill == "nuyan_fencheng")?.length ?? 0) - 1;
				//专属符石-毒鸠
				if (num == 1 && player.ny_zhuanShuFuShiId?.some(id => id == "_ny_zhuanShu_dujiu")) {
					let id = player.ny_zhuanShuFuShiId.find(id => id == "_ny_zhuanShu_dujiu");
					id = player.ny_zhuanShuFuShiId.indexOf(id);
					if (player.ny_fushiTime?.[4+id] > 0) player.ny_fushiTime[4+id]--;
					else await player.ny_loseNuQi(num);
				}
				else await player.ny_loseNuQi(num);
				let list = game.players.sortBySeat(player);
				const history = num + 1;
				num = 1;
				for (let current of list) {
					if (!current.isIn()) continue;
					if (current.countCards("he") < num) {
						await current.loseHp(2);
						continue;
					}
					let str = current == player ? "(你无须受到伤害)" : "";
					let result = await current.chooseToDiscard([num, Infinity], "he", "弃置至少" + get.cnNumber(num) + "张牌或受到" + get.translation(player) +"造成的" + get.cnNumber(history) + "点火焰伤害" + str)
						.set("ai", function (card) {
							if (ui.selected.cards.length >= num) return -1;
							if (get.type(card) != "basic") return 10 - get.value(card);
							return 8 - get.value(card);
						})
						.forResult();
					if (result.bool) {
						num = result.cards.length + 1;
					} else if (current != player) await current.damage(player, history, "fire");
				}
			},
		},
		nuyan_fenchengmieji: {//焚城灭迹
			nuyan_star: 1,
			inherit: "xinmieji",
			audio: "xinmieji",
			//有时间可以给本体李儒异步化
		},
		nuyan_jueshizhice: {//绝世之策
			nuyan_star: 3,
			trigger: {
				player: "phaseJieshuBegin",
			},
			frequent: true,
			check(event, player) {
				let list = game.players.filter(current => current != player && current.getHistory("lose", (evt) => evt.cards2?.length)?.length),
					num = 0;
				for (let i of list) {
					num -= get.attitude(player, i);
					if (get.attitude(player, i) > 0) {
						if (i.hp == 1) return -1;
					} else num += i.hp;
				}
				return num;
			},
			filter: function(event, player) {
				return game.hasPlayer(current => current != player && current.getHistory("lose", (evt) => evt.cards2?.length)?.length);
			},
			async content(event, trigger, player) {
				let list = game.players.filter(current => current != player && current.getHistory("lose", (evt) => evt.cards2?.length)?.length).sortBySeat(player);
				for (let i of list) {
					await i.damage(player);
					await player.draw(2);
				}
			},
		},
		//怒焰曹髦
		nuyan_qianlong: {//潜龙
			trigger: {
				player: "damageEnd",
			},
			frequent: true,
			async content(event, trigger, player) {
				let num = 3,
					b = false,
					limit = Number(lib.config.extension_怒焰武将_hujiaSet);
				//专属符石-龙渊
				if (player.ny_zhuanShuFuShiId?.some(id => id == "_ny_zhuanShu_longyuan")) {
					let id = player.ny_zhuanShuFuShiId.find(id => id == "_ny_zhuanShu_longyuan");
					id = player.ny_zhuanShuFuShiId.indexOf(id);
					if (player.ny_fushiTime?.[4+id] > 0) {
						player.ny_fushiTime[4+id]--;
						num += 2;
						b = true;
					}
				}
				const cards = get.cards(num);
				await game.cardsGotoOrdering(cards);
				await player.showCards(cards, get.translation(player) + '发动了〖潜龙〗');
				const { result } = await player.chooseCardButton("潜龙：选择其中任意张牌作为“鳞”置入牌堆中，你获得其余牌", false, cards, [1, Infinity])
					.set("ai", (button) => 0);
				if (result.bool) {
					let pileCards = result.links;
					cards.removeArray(pileCards);
					game.log(player, `将${get.cnNumber(pileCards.length)}张牌置入了牌堆`);
					for (let card of pileCards) {
						card.nuyan_qianlong = true;
						await card.discard(false);
					}
				}
				if (cards?.length) await player.gain(cards, "gain2");
				if (b) await player.changeHujia(4, null, limit);
			},
			group: "nuyan_qianlong_effect",
			subSkill: {
				effect: {
					trigger: {
						global: "gainEnd",
					},
					frequent: true,
					filter: function(event, player) {
						if (get.itemtype(event.source) == "player") return false;
						return event.cards.some(c => c.nuyan_qianlong == true);
					},
					async content(event, trigger, player) {
						let cards = trigger.cards.filter(c => c.nuyan_qianlong == true);
						let num = cards.length,
							limit = Number(lib.config.extension_怒焰武将_hujiaSet);
						trigger.player.addGaintag(cards, "鳞");
						let choiceList = ["令" + get.translation(trigger.player) + "受到" + get.cnNumber(num) + "点雷电伤害", "令其获得一点护甲"];
						let choices = ["选项一", "选项二", "cancel2"];
						if (trigger.player.hujia >= limit) {
							choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + "</span>";
							choices.remove("选项二");
						}
						let { result } = await player.chooseControl()
							.set("controls", choices)
							.set("choiceList", choiceList)
							.set("target", trigger.player)
							.set("ai", () => get.attitude(_status.event.player, _status.event.player) ? "选项二" : "选项一");
						if (result.control == "cancel2") return;
						else if (result.control == "选项二") await trigger.player.changeHujia(1, null, limit);
						else await trigger.player.damage(num, "thunder");
					},
				},
			},
		},
		nuyan_qingzaofensi: {//轻躁忿肆
			nuyan_star: 1,
			forced: true,
			locked: true,
			trigger: {
				player: "changeHujiaEnd",
			},
			filter: function(event, player) {
				if (_status?.dying?.length) return false;
				return event.num > 0 && event.type == "gain";
			},
			async content(event, trigger, player) {
				if (!game.hasPlayer((current) => current != player && current.hp >= player.hp)) {
				    await player.damage(player);
				    return;
				}
				let result = await player.chooseTarget(true)
					.set("prompt", "〖轻躁忿肆〗：对一名体力值不小于你的角色造成1点伤害")
					.set("prompt2", "然后，若其不为你，其视为对你使用一张无距离次数限制的【杀】")
					.set("filterTarget", (card, player, target) => target.hp >= player.hp)
				    .set("ai", function (target) {
				        var player = _status.event.player;
				        return get.damageEffect(target, player, player);
				    })
					.forResult();
				if (result.bool) {
				    let target = result.targets[0];
				    player.line(target, "green");
				    await target.damage(player);
					if (target.isIn() && target.canUse("sha", player, false) && target != player) {
					    await target.useCard({ name: "sha", isCard: true }, player, false, "noai");
					}
				}
			},
		},
		nuyan_juejintaoni: {//决进讨逆
			audio: "mbjuejin",
			nuyan_star: 3,
			derivation: "nuyan_juetao",
			limited: true,
			skillAnimation: true,
			unique: true,
			animationColor: "thunder",
			mark: true,
			intro: {
			    content: "limited",
			},
			trigger: {
				player: ["phaseZhunbeiBegin", "nuyan_juejintaoni_init"],
			},
			init2(player,skill) {
				let next = game.createEvent(skill + "_init");
				next.player = player;
				next.setContent("emptyEvent");
			},
			filter(event, player) {
				return player.isMinHp();
			},
			check(event, player) {
				return game.hasPlayer(current => get.attitude(player, current) < 0);
			},
			async content(event, trigger, player) {
				player.awakenSkill(event.name);
				let result = await player.chooseTarget(true)
					.set("prompt", get.prompt(event.name))
					.set("prompt2", get.prompt2(event.name))
					.set("filterTarget", (card, player, target) => player != target)
					.set("ai", function (target) {
					    var player = _status.event.player;
					    return get.damageEffect(target, player, player);
					})
					.forResult();
				let target = result.targets[0];
				target.addMark("nuyan_juejintaoni_effect");
				target.addSkill("nuyan_juejintaoni_effect");
				player.addSkill("nuyan_juetao");
			},
			subSkill: {
				effect: {
					sub: true,
					sourceSkill: "nuyan_juejintaoni",
					mark: true,
					marktext: "决",
					intro: {
						nocount: true,
						name: "决进讨逆",
						content: "你本局游戏受到的伤害+#",
					},
					onremove: true,
					charlotte: true,
					forced: true,
					trigger: {
						player: "damageBegin1",
					},
					content() {
						trigger.num += player.countMark(event.name);
					},
					priority: 11,
				},
			},
			priority: 11,
		},
		nuyan_juetao: {//决讨
			enable: "phaseUse",
			filter: function(event, player) {
				return game.hasPlayer(current => player.canCompare(current) && player != current);
			},
			check(event, player, target) {
				if (player.hp < 2) return -2;
				if (!player.getCards("h")?.some(c => c.number > 9)) return -1;
				if (get.attitude(player, target) < 0) return 8 - target.hp - target.countCards("h");
				else return -1;
			},
			filterTarget(card, player, target) {
				return player != target && player.canCompare(target);
			},
			async content(event, trigger, player) {
				const { target } = event;
				await player.loseHp();
				let next = await player.chooseToCompare(target).forResult();
				if (next.bool) await target.damage(player);
				else await target.draw();
			},
		},
		//怒焰界马超
		nuyan_tieji: {//铁骑
			forced: true,
			locked: true,
			audio: "retieji",
			trigger: {
				player: "useCardToPlayered",
			},
			filter: function(event, name) {
				return event.card.name == "sha";
			},
			async content(event, trigger, player) {
				lib.skill._ny_noneFangYuFushi.init(trigger.target, "useCardAfter", (evt) => evt?.card?.name == "sha" && evt.targets.includes(player));
				let filterSkill = "nuyan_yijidangqian";
				const ownedSkills = player.getSkills(null, false, true).filter(skill => {
					return skill == filterSkill;
				});
				let b = ownedSkills.length && !player.isTempBanned(filterSkill) && !(player.shixiaoedSkills && player.shixiaoedSkills.includes(filterSkill));
				if (b && !trigger.target.hasSkill("fengyin")) {
					player.logSkill(filterSkill);
					trigger.target.addTempSkill("fengyin");
				}
				let result = await player.judge((card) => {
					if (get.color(card) == "red") return 0;
					return -4;
				}).forResult();
				if (b) {
					player.logSkill(filterSkill);
					await player.gain(result.card, "gain2");
				}
				if (result.color == "red" && trigger.target.getCards("he")?.some(c => get.suit(c) == result.suit)) {
					let next = await trigger.target.chooseToDiscard("请弃置一张" + get.translation(result.suit) + "牌，否则不能使用闪抵消此杀", "he")
						.set("filterCard", (card) => get.suit(card) == result.suit)
						.set("ai", function (card) {
						    var num = trigger.target.countCards("h", "shan");
						    if (num == 0) {
						        return 0;
						    }
						    if (card.name == "shan") {
						        return num > 1 ? 2 : 0;
						    }
						    return 8 - get.value(card);
						})
						.forResult();
					if (!next.bool) {
						await trigger.getParent().directHit.add(trigger.target);
					}
				} else {
					await trigger.getParent().directHit.add(trigger.target);
				}
				if (result.color == "red" && b) {
					player.logSkill(filterSkill);
					player.addMark("nuyan_yijidangqian");
					player.when({ global: "phaseEnd" })
						.then(() => {
							player.clearMark("nuyan_yijidangqian");
							player.unmarkSkill("nuyan_yijidangqian");
							player.updateMarks();
						});
					await player.ny_addNuQi();
				}
			},
			ai: {
				unequip: true,
				unequip_ai: true,
				skillTagFilter: function(player, tag, arg) {
				    if (!arg || !arg.card || arg.card.name != 'sha') return false;
				},
			},
		},
		nuyan_weizhenliangzhou: {//威震凉州
			nuyan_star: 1,
			trigger: {
				player: "shaMiss",
			},
			filter: function(event, player) {
				return player.getCards("he")?.some(c => get.type(c) == "equip");
			},
			async cost(event, trigger, player) {
				let result = await player.chooseToDiscard("he")
					.set("prompt", "是否弃置一张装备牌")
					.set("prompt2", "视为对" + get.translation(trigger.target) + "强化使用一张无距离次数限制的【杀】")
					.set("filterCard", (card) => get.type(card) == "equip")
					.set("ai", (card) => 9 - get.value(card))
					.forResult();
				if (result.bool) event.result = result;
			},
			async content(event, trigger, player) {
				await player.useCard({
					name: "sha",
					isCard: true,
					storage: {
						_useCardQianghua: true,
					},
				}, trigger.target, false, "nuyan_weizhenliangzhou");
			},
		},
		nuyan_yijidangqian: {//一骑当千
			nuyan_star: 3,
			mod: {
				cardUsable:function (card, player, num) {
					if (card.name == "sha" && player.countMark("nuyan_yijidangqian")) return num += player.countMark("nuyan_yijidangqian");
				},
			},
			marktext: "骑",
			intro: {
				name: "一骑当千",
				content: "你使用【杀】的次数+#",
			},
		},
		//怒焰初版羊徽瑜
		nuyan_hongyi: {//弘仪
			trigger: {
				global: "phaseBegin",
			},
			async cost(event, trigger, player) {
				let result = await player.chooseTarget(false)
					.set("prompt", get.prompt("nuyan_hongyi"))
					.set("prompt2", "选择一名角色，直至本回合结束，其造成伤害后判定，若结果为：红色，受伤角色摸X张牌并回复1点体力；黑色，其随机弃置X张手牌并流失1点体力(X为本次伤害值)")
					.set("filterTarget", (card, player, target) => !target.hasSkill("nuyan_hongyi_effect"))
					.set("ai", (target) => {
					    let player = _status.event.player;
						let num = get.attitude(player, target);
					    if (num < 0 && target == _status.currentPhase) return 1145;
						else return -num;
					})
					.forResult();
				if (result.bool) event.result = result;
			},
			async content(event, trigger, player) {
				event.targets[0].addTempSkill("nuyan_hongyi_effect");
			},
			subSkill: {
				effect: {
					sub: true,
					sourceSkill: "nuyan_hongyi",
					mark: true,
					onremove: true,
					marktext: "弘",
					intro: {
						name:"弘仪",
						content:"直至本回合结束，你造成伤害后判定，若结果为：红色，受伤角色摸X张牌并回复1点体力；黑色，你随机弃置X张手牌并流失1点体力(X为本次伤害值)"
					},
					charlotte: true,
					forced: true,
					trigger: {
						source: "damageEnd",
					},
					async content(event, trigger, player) {
						let result = await player.judge().forResult();
						if (result.color == "red") {
							await trigger.player.draw(trigger.num);
							await trigger.player.recover();
						} else if (result.color == "black") {
							await player.randomDiscard(trigger.num, "h");
							await player.loseHp();
						}
					},
				},
			},
		},
		nuyan_huirongrenxin: {//慧容仁心、
			derivation: "_ny_yinni",
			init2(player) {
				get.info("_ny_yinni").init(player);
			},
			nuyan_star: 1,
			forced: true,
			trigger: {
				player: "recoverEnd",
			},
			async content(event, trigger, player) {
				if (player.hasMark("_ny_yinni")) {
					if (player.maxHp > player.countCards("h")) await player.drawTo(player.maxHp);
				} else get.info("_ny_yinni").init(player);
			},
		},
		nuyan_ciweibingji: {//慈威并济
			nuyan_star: 3,
			trigger: {
				global: "useCard0",
			},
			filter: function(event, player) {
				if (!player.countCards("h")) return false;
				if (player == event.player) return false;
				if (event.player !== _status.currentPhase) return false;
				if (get.type(event.card) == "basic") return true;
				let info = get.info(event.card);
				if (!info || info.type != "trick" || info.notarget || (info.selectTarget && info.selectTarget != 1)) return false;
				return true;
			},
			async cost(event, trigger, player) {
				let choiceList = ["你交给" + get.translation(trigger.player) + "一张手牌并令其获得1点怒气", "你弃置一张牌并令" + get.translation(trigger.card) + "无效"];
				let choices = ["选项一", "选项二", "cancel2"];
				if (!player.countDiscardableCards("h")) {
					choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + "</span>";
					choices.remove("选项二");
				}
				let result = await player.chooseControl()
					.set("controls", choices)
					.set("choiceList", choiceList)
					.set("target", trigger.player)
					.set("ai", () => {
						let num = get.attitude(_status.event.player, _status.event.target);
						if (num > 0 && _status.event.target.ny_nuqiMax && _status.event.target.ny_nuqi == 0) return "选项一";
						if (num < 0 && get.value(card) > 7) return "选项二";
						return "cancel2";
					})
					.forResult();
				if (result.control == "cancel2") return;
				event.result = {
					bool: true,
					cost_data: {
						control: result.control,
					},
				};
			},
			async content(event, trigger, player) {
				let { control } = event.cost_data;
				if (control == "选项一") {
					await player.chooseToGive(trigger.player, true, "将一张手牌交给" + get.translation(trigger.player) + "并令其获得1点怒气");
					await trigger.player.ny_addNuQi(player);
				} else {
					await player.chooseToDiscard(true, "h", "弃置一张手牌并令" + get.translation(trigger.card) + "无效");
					trigger.cancel();
				}
			},
		},
		//怒焰诸葛瑾
		nuyan_hongyuan: {//弘援
			audio: "hongyuan",
			trigger: {
				player: "gainAfter",
				global: "loseAsyncAfter",
			},
			getIndex(event, player) {
				return event?.cards?.filter(c => get.color(c) == "red" && player.getCards("h")?.includes(c))?.length;
			},
			filter: function(event, player) {
				if (event.getParent("draw").skill == "nuyan_hongyuan") return false;
				if (!event.getg(player)) return false;
				if (!event.cards?.length) return false;
				return event.cards?.some(c => get.color(c) == "red" && player.getCards("h")?.includes(c));
			},
			frequent: true,
			async content(event, trigger, player) {
				let filterSkill = "nuyan_zhifangganjian";
				const ownedSkills = player.getSkills(null, false, true).filter(skill => {
					return skill == filterSkill;
				});
				let b = ownedSkills.length && !player.isTempBanned(filterSkill) && !(player.shixiaoedSkills && player.shixiaoedSkills.includes(filterSkill));
				let num = 2;
				//专属符石-孔雀翎
				if (player.ny_zhuanShuFuShiId?.some(id => id == "_ny_zhuanShu_kongqueling")) {
					let id = player.ny_zhuanShuFuShiId.find(id => id == "_ny_zhuanShu_kongqueling");
					id = player.ny_zhuanShuFuShiId.indexOf(id);
					if (player.ny_fushiTime?.[4+id] > 0) {
						player.ny_fushiTime[4+id]--;
						num += 2;
					}
				}
				let result = await player.chooseTarget(1, false)
					.set("prompt", get.prompt("nuyan_hongyuan"))
					.set("prompt2", "令一名其他角色摸" + get.cnNumber(num) + "张牌，或点击取消并摸" + get.cnNumber(num - 1) + "张牌")
					.set("filterTarget", (card, player, target) => player != target)
					.set("ai", (target) => {
					    let player = _status.event.player;
						let num = get.attitude(player, target);
					    if (target == player && target == _status.currentPhase) return 1145;
						else if (target == player && target.hp <= 2) return 1145;
						else return num;
					})
					.forResult();
				if (result.bool) {
					await result.targets[0].draw(num)
						.set("skill", event.name);
					if (b) {
						await result.targets[0].ny_addNuQi(player);
						player.logSkill(filterSkill, result.targets[0]);
					}
				} else {
					num--;
					await player.draw(num)
						.set("skill", event.name);
					if (b) {
						await player.ny_addNuQi();
						player.logSkill(filterSkill);
					}
				}
			},
		},
		nuyan_zhifangganjian: {//直方敢谏
			nuyan_star: 1,
			audio: "huanshi",
			forced: true,
			locked: true,
		},
		nuyan_moudingquanju: {//谋定全局
			nuyan_star: 3,
			forced: true,
			locked: true,
			audio: "mingzhe",
			trigger: {
				player: ["useCard","respond","loseAfter"],
				global: "loseAsyncAfter",
			},
			filter: function(event, player, triggername) {
			    if (player == _status.currentPhase) {
			        return false;
			    }
			    if (!triggername.includes("lose")) {
			        return event.cards?.length;
			    }
			    return event.type == "discard" && event.getl?.(player)?.cards2?.length;
			},
			async content(event, trigger, player) {
				let num = 0;
				if (event.triggername.includes("lose")) num = trigger.getl(player).cards2.length;
				else num = trigger.cards.length;
				let result = await player.chooseTarget(1, true)
					.set("prompt", "〖谋定全局〗：弃置一名其他" + get.cnNumber(num) + "张牌")
					.set("filterTarget", (card, player, target) => player != target)
					.set("ai", (target) => get.attitude(_status.event.player, target))
					.forResult();
				await player.discardPlayerCard(result.targets[0], num, true, "〖谋定全局〗：弃置" + get.translation(result.targets[0]) + get.cnNumber(num) + "张牌");
			},
		},
		//怒焰王元姬
		nuyan_shiren: {//识人
			audio: "shiren",
			trigger: {
				global: ["gainEnd", "loseAsyncAfter"],
			},
			getIndex: function(event, player) {
				return event?.cards?.filter(c => get.type(c) !== "basic")?.length;
			},
			filter: function(event, player) {
				if (!event.player.isIn()) return false;
				if (player == event.player) return false;
				if (!event.player.isPhaseUsing()) return false;
				return event.cards?.some(c => get.type(c) !== "basic");
			},
			frequent: true,
			async content(event, trigger, player) {
				let card = get.cards()[0];
				event.cards = trigger.player.getCards("h").randomGets(trigger.cards.length);
				event.cards.push(card);
				ui.cardPile.insertBefore(card.fix(), ui.cardPile.firstChild);
				game.updateRoundNumber();
				event.cards.randomSort();
				game.log(player, "展示了", event.cards);
				event.videoId = lib.status.videoId++;
				var str = get.translation(player) + "对" + get.translation(trigger.player) + "发动了【识人】";
				game.broadcastAll(
				    function (str, id, cards) {
				        var dialog = ui.create.dialog(str, cards);
				        dialog.videoId = id;
				    },
				    str,
				    event.videoId,
				    event.cards
				);
				game.addVideo("showCards", player, [str, get.cardsInfo(event.cards)]);
				await game.delay(2);
				var func = async function (id, target) {
				    var dialog = get.idDialog(id);
				    if (dialog) {
				        dialog.content.firstChild.innerHTML = "猜猜哪张是" + get.translation(target) + "的手牌？";
				    }
				};
				if (player == game.me) {
				    await func(event.videoId, trigger.player);
				} else if (player.isOnline()) {
				    await player.send(func, event.videoId, trigger.player);
				}
				let next = player.chooseButton(true);
				next.set("dialog", event.videoId);
				next.set("ai", function (button) {
				    if (_status.event.answer) {
				        return  _status.event.answer.includes(button.link) ? Math.random() * 114514 : 0;
				    }
				    return get.value(button.link, _status.event.player);
				});
				if (player.hasSkillTag("viewHandcard", null, trigger.player, true)) {
					let answer = event.cards.remove(card);
				    next.set("answer", answer);
				}
				let result = await next.forResult();
				game.broadcastAll("closeDialog", event.videoId);
				if (result.links[0] == card) {
					player.popup("猜错");
					await player.randomDiscard("h");
				} else {
					player.popup("猜对");
					await trigger.player.damage(trigger.cards.length, player);
				}
			},
		},
		nuyan_shangjianyihua: {//尚俭抑华
			derivation: "_ny_yinni",
			nuyan_star: 1,
			forced: true,
			locked: true,
			audio: "xinfu_shangjian",
			init2(player) {
				get.info("_ny_yinni").init(player);
				if (player.countCards("h") < player.maxHp) player.drawTo(player.maxHp);
			},
			trigger: {
			    player: ["loseAfter","gainMaxHpAfter","loseMaxHpAfter"],
			    global: ["equipAfter","addJudgeAfter","gainAfter","loseAsyncAfter","addToExpansionAfter", "gameStart"],
			},
			filter: function(event, player) {
				return player.countCards("h") < player.maxHp;
			},
			async content(event, trigger, player) {
				await player.drawTo(player.maxHp);
				get.info("_ny_yinni").init(player);
			},
		},
		nuyan_qianchongdunmu: {//谦冲敦睦
			audio: "xinfu_qianchong",
			nuyan_star: 3,
			derivation: ["nuyan_hongyuan", "nuyan_hongyi"],
			forced: true,
			locked: true,
			trigger: {
				player: "phaseJieshuBegin",
			},
			content() {
				let redNum = player.countCards("h", { color: "red" }),
					blackNum = player.countCards("h", { color: "black" });
				if (redNum <= blackNum) player.addTempSkill("nuyan_hongyuan", { player: "phaseBegin" });
				if (blackNum <= redNum) player.addTempSkill("nuyan_hongyi", { player: "phaseBegin" });
			},
		},
		nuyan_huashen: {//化身
			unique: true,
			audio: "rehuashen",
			trigger: {
				player: ["phaseBegin", "phaseEnd", "nuyan_huashen_init"],
			},
			init2(player) {
				lib.skill.nuyan_huashen.addHuashens(player, 5);
				let next = game.createEvent("nuyan_huashen_init");
				next.player = player;
				next.setContent("emptyEvent");
			},
			filter(event, player, name) {
				if (name == "nuyan_huashenInit") {
					return true;
				}
				return player.storage.nuyan_huashen?.character?.length > 0;
			},
			async cost(event, trigger, player) {
				if (event.triggername === "nuyan_huashen_init") {
					event.result = { bool: true, cost_data: "替换当前化身" };
					return;
				}
				const prompt = "###" + get.prompt(event.skill) + '###<div class="text center">替换当前化身牌或制衡至多两张其他化身牌</div>';
				const result = await player
					.chooseControl("替换当前化身", "制衡其他化身", "cancel2")
					.set("ai", () => {
						const { player, cond } = get.event();
						if (!player.storage.nuyan_huashen.current) return "替换当前化身";
						let rankList = [];
						for (let char of player.storage.nuyan_huashen.character) {
							let skills = player.storage.nuyan_huashen.character.map(i => get.character(i).skills).flat();
							rankList.push(0);
							skills.forEach(sk => rankList[rankList.length - 1] += get.skillRank(sk, cond));
						}
						let max = Math.max(...rankList);
						let maxRankList = rankList.filter(i => i == max);
						let aiChar = maxRankList[Math.floor(maxRankList.length * Math.random()) + 1];
						aiChar = player.storage.nuyan_huashen.character[rankList.indexOf(aiChar)];
						if (player.storage.nuyan_huashen.current === aiChar || maxRankList[0] < 2) {
							return "制衡其他化身";
						}
						return "替换当前化身";
					})
					.set("cond", event.triggername)
					.set("prompt", prompt)
					.forResult();
				const control = result.control;
				event.result = { bool: typeof control === "string" && control !== "cancel2", cost_data: control };
			},
			async content(event, trigger, player) {
				let choice = event.cost_data;
				_status.noclearcountdown = true;
				const id = lib.status.videoId++,
					prompt = choice === "替换当前化身" ? "化身：请选择你要更换的武将牌" : "化身：选择制衡任意张武将牌";
				const cards = player.storage.nuyan_huashen.character;
				if (player.isOnline2()) {
					player.send(
						(cards, prompt, id) => {
							const dialog = ui.create.dialog(prompt, [cards, lib.skill.nuyan_huashen.$createButton]);
							dialog.videoId = id;
						},
						cards,
						prompt,
						id
					);
				}
				const dialog = ui.create.dialog(prompt, [cards, lib.skill.nuyan_huashen.$createButton]);
				dialog.videoId = id;
				if (!event.isMine()) {
					dialog.style.display = "none";
				}
				if (choice === "替换当前化身") {
					const buttons = dialog.content.querySelector(".buttons");
					const array = dialog.buttons.filter(item => !item.classList.contains("nodisplay") && item.style.display !== "none");
					const choosed = player.storage.nuyan_huashen.choosed;
					const groups = array
						.map(i => get.character(i.link).group)
						.unique()
						.sort((a, b) => {
							const getNum = g => (lib.group.includes(g) ? lib.group.indexOf(g) : lib.group.length);
							return getNum(a) - getNum(b);
						});
					if (choosed.length > 0 || groups.length > 1) {
						dialog.style.bottom = (parseInt(dialog.style.top || "0", 10) + get.is.phoneLayout() ? 230 : 220) + "px";
						dialog.addPagination({
							data: array,
							totalPageCount: groups.length + Math.sign(choosed.length),
							container: dialog.content,
							insertAfter: buttons,
							onPageChange(state) {
								const { pageNumber, data, pageElement } = state;
								const { groups, choosed } = pageElement;
								data.forEach(item => {
									item.classList[
										(() => {
											const name = item.link,
												goon = choosed.length > 0;
											if (goon && pageNumber === 1) {
												return choosed.includes(name);
											}
											const group = get.character(name).group;
											return groups.indexOf(group) + (1 + goon) === pageNumber;
										})()
											? "remove"
											: "add"
									]("nodisplay");
								});
								ui.update();
							},
							pageLimitForCN: ["←", "→"],
							pageNumberForCN: (choosed.length > 0 ? ["常用"] : []).concat(
								groups.map(i => {
									const isChineseChar = char => {
										const regex = /[\u4e00-\u9fff\u3400-\u4dbf\ud840-\ud86f\udc00-\udfff\ud870-\ud87f\udc00-\udfff\ud880-\ud88f\udc00-\udfff\ud890-\ud8af\udc00-\udfff\ud8b0-\ud8bf\udc00-\udfff\ud8c0-\ud8df\udc00-\udfff\ud8e0-\ud8ff\udc00-\udfff\ud900-\ud91f\udc00-\udfff\ud920-\ud93f\udc00-\udfff\ud940-\ud97f\udc00-\udfff\ud980-\ud9bf\udc00-\udfff\ud9c0-\ud9ff\udc00-\udfff]/u;
										return regex.test(char);
									}; //regex为基本汉字区间到扩展G区的Unicode范围的正则表达式，非加密/混淆
									if (i == "jlsgsy") return "魔";
									const str = get.plainText(lib.translate[i + "2"] || lib.translate[i] || "无");
									return isChineseChar(str.slice(0, 1)) ? str.slice(0, 1) : str;
								})
							),
							changePageEvent: "click",
							pageElement: {
								groups: groups,
								choosed: choosed,
							},
						});
					}
				}
				const finish = () => {
					if (player.isOnline2()) {
						player.send("closeDialog", id);
					}
					dialog.close();
					delete _status.noclearcountdown;
					if (!_status.noclearcountdown) {
						game.stopCountChoose();
					}
				};
				while (true) {
					const next = player.chooseButton(true).set("dialog", id);
					if (choice === "制衡其他化身") {
						next.set("selectButton", [1, Infinity]);
						next.set("filterButton", button => button.link !== get.event().current);
						next.set("current", player.storage.nuyan_huashen.current);
					} else {
						next.set("ai", button => {
							const { player, cond } = get.event();
							let rankList = [];
							for (let char of player.storage.nuyan_huashen.character) {
								let skills = player.storage.nuyan_huashen.character.map(i => get.character(i).skills).flat();
								rankList.push(0);
								skills.forEach(sk => rankList[rankList.length - 1] += get.skillRank(sk, cond));
							}
							let max = Math.max(...rankList);
							let maxRankList = rankList.filter(i => i == max);
							let aiChar = maxRankList[Math.floor((maxRankList.length * Math.random())) + 1];
							aiChar = player.storage.nuyan_huashen.character[rankList.indexOf(aiChar)];
							return player.storage.nuyan_huashen[button.link] == aiChar ? 2.5 : 1 + Math.random();
						});
						next.set("cond", event.triggername);
					}
					const result = await next.forResult();
					if (choice === "制衡其他化身") {
						finish();
						lib.skill.nuyan_huashen.removeHuashen(player, result.links);
						lib.skill.nuyan_huashen.addHuashens(player, result.links.length);
						//专属符石-神道铃
						if (player.ny_zhuanShuFuShiId?.some(id => id == "_ny_zhuanShu_shendaoling")) {
							let id = player.ny_zhuanShuFuShiId.find(id => id == "_ny_zhuanShu_shendaoling");
							id = player.ny_zhuanShuFuShiId.indexOf(id);
							if (player.ny_fushiTime?.[4+id] > 0) {
								player.ny_fushiTime[4+id]--;
								await player.draw();
								lib.skill.nuyan_huashen.addHuashens(player, 1);
							}
						}
						return;
					} else {
						const card = result.links[0];
						const func = function (card, id) {
							const dialog = get.idDialog(id);
							if (dialog) {
								//禁止翻页
								const paginationInstance = dialog.paginationMap?.get(dialog.content.querySelector(".buttons"));
								if (paginationInstance?.state) {
									paginationInstance.state.pageRefuseChanged = true;
								}
								for (let i = 0; i < dialog.buttons.length; i++) {
									if (dialog.buttons[i].link == card) {
										dialog.buttons[i].classList.add("selectedx");
									} else {
										dialog.buttons[i].classList.add("unselectable");
									}
								}
							}
						};
						if (player.isOnline2()) {
							player.send(func, card, id);
						} else if (event.isMine()) {
							func(card, id);
						}
						const result2 = await player
							.chooseControl("确定", "返回")
							.set("ai", () => {
								const { player, cond, controls } = get.event();
								let skills = controls.slice();
								skills.randomSort();
								skills.sort((a, b) => get.skillRank(b, cond) - get.skillRank(a, cond));
								return skills[0];
							})
							.forResult();
						const control = result2.control;
						if (control === "返回") {
							const func2 = function (card, id) {
								const dialog = get.idDialog(id);
								if (dialog) {
									//允许翻页
									const paginationInstance = dialog.paginationMap?.get(dialog.content.querySelector(".buttons"));
									if (paginationInstance?.state) {
										paginationInstance.state.pageRefuseChanged = false;
									}
									for (let i = 0; i < dialog.buttons.length; i++) {
										dialog.buttons[i].classList.remove("selectedx");
										dialog.buttons[i].classList.remove("unselectable");
									}
								}
							};
							if (player.isOnline2()) {
								player.send(func2, card, id);
							} else if (event.isMine()) {
								func2(card, id);
							}
						} else {
							finish();
							player.storage.nuyan_huashen.choosed.add(card);
							if (player.storage.nuyan_huashen.current != card) {
								const old = player.storage.nuyan_huashen.current;
								player.storage.nuyan_huashen.current = card;
								game.broadcastAll(
									(player, character, old) => {
										player.tempname.remove(old);
										player.tempname.add(character);
										player.sex = lib.character[character][0];
									},
									player,
									card,
									old
								);
								game.log(player, "将性别变为了", "#y" + get.translation(get.character(card).sex) + "性");
								player.changeGroup(get.character(card).group);
							}
							player.storage.nuyan_huashen.current2 = player.storage.nuyan_huashen.map[card];
							for (let sk of player.storage.nuyan_huashen.map[card]) {
								if (!player.additionalSkills.nuyan_huashen?.includes(sk)) {
									player.flashAvatar("nuyan_huashen", card);
									player.syncStorage("nuyan_huashen");
								}
							}
							player.updateMarks("nuyan_huashen");
							await player.addAdditionalSkills("nuyan_huashen", player.storage.nuyan_huashen.map[card]);
							//专属符石-神道铃
							if (player.ny_zhuanShuFuShiId?.some(id => id == "_ny_zhuanShu_shendaoling")) {
								let id = player.ny_zhuanShuFuShiId.find(id => id == "_ny_zhuanShu_shendaoling");
								id = player.ny_zhuanShuFuShiId.indexOf(id);
								if (player.ny_fushiTime?.[4+id] > 0) {
									player.ny_fushiTime[4+id]--;
									await player.draw();
									lib.skill.nuyan_huashen.addHuashens(player, 1);
								}
							}
							return;
						}
					}
				}
			},
			init(player, skill) {
				if (!player.storage[skill]) {
					player.storage[skill] = {
						character: [],
						choosed: [],
						map: {},
					};
				}
			},
			addHuashen(player) {
				if (!player.storage.nuyan_huashen) {
					return;
				}
				if (!_status.characterlist) {
					game.initCharacterList();
				}
				_status.characterlist.randomSort();
				for (let i = 0; i < _status.characterlist.length; i++) {
					let name = _status.characterlist[i];
					if (player.storage.nuyan_huashen.character.includes(name)) {
						continue;
					}
					let skills = lib.character[name][3].filter(skill => {
						const info = get.info(skill);
						return info && !info.nuyan_jiBan;
					});
					if (skills.length) {
						player.storage.nuyan_huashen.character.push(name);
						player.storage.nuyan_huashen.map[name] = skills;
						_status.characterlist.remove(name);
						return name;
					}
				}
			},
			addHuashens(player, num) {
				var list = [];
				for (var i = 0; i < num; i++) {
					var name = lib.skill.nuyan_huashen.addHuashen(player);
					if (name) {
						list.push(name);
					}
				}
				if (list.length) {
					player.syncStorage("nuyan_huashen");
					player.updateMarks("nuyan_huashen");
					game.log(player, "获得了", get.cnNumber(list.length) + "张", "#g化身");
					lib.skill.nuyan_huashen.drawCharacter(player, list);
				}
			},
			removeHuashen(player, links) {
				player.storage.nuyan_huashen.character.removeArray(links);
				_status.characterlist.addArray(links);
				game.log(player, "移去了", get.cnNumber(links.length) + "张", "#g化身");
			},
			drawCharacter(player, list) {
				game.broadcastAll(
					function (player, list) {
						if (player.isUnderControl(true)) {
							var cards = [];
							for (var i = 0; i < list.length; i++) {
								var cardname = "huashen_card_" + list[i];
								lib.card[cardname] = {
									fullimage: true,
									image: "character:" + list[i],
								};
								lib.translate[cardname] = get.rawName2(list[i]);
								cards.push(game.createCard(cardname, "", ""));
							}
							player.$draw(cards, "nobroadcast");
						}
					},
					player,
					list
				);
			},
			$createButton(item, type, position, noclick, node) {
				node = ui.create.buttonPresets.character(item, "character", position, noclick);
				const info = lib.character[item];
				const skills = info[3].filter(function (skill) {
					const info = get.info(skill);
					return info && !info.nuyan_jiBan;
				});
				if (skills.length) {
					const skillstr = skills.map(i => `[${get.translation(i)}]`).join("<br>");
					const skillnode = ui.create.caption(`<div class="text" data-nature=${get.groupnature(info[1], "raw")}m style="font-family: ${lib.config.name_font || "xinwei"},xinwei">${skillstr}</div>`, node);
					skillnode.style.left = "2px";
					skillnode.style.bottom = "2px";
				}
				node._customintro = function (uiintro, evt) {
					const character = node.link,
						characterInfo = get.character(node.link);
					let capt = get.translation(character);
					if (characterInfo) {
						capt += `&nbsp;&nbsp;${get.translation(characterInfo.sex)}`;
						let charactergroup;
						const charactergroups = get.is.double(character, true);
						if (charactergroups) {
							charactergroup = charactergroups.map(i => get.translation(i)).join("/");
						} else {
							charactergroup = get.translation(characterInfo.group);
						}
						capt += `&nbsp;&nbsp;${charactergroup}`;
					}
					uiintro.add(capt);
			
					if (lib.characterTitle[node.link]) {
						uiintro.addText(get.colorspan(lib.characterTitle[node.link]));
					}
					for (let i = 0; i < skills.length; i++) {
						if (lib.translate[skills[i] + "_info"]) {
							let translation = lib.translate[skills[i] + "_ab"] || get.translation(skills[i]).slice(0, 2);
							if (lib.skill[skills[i]] && lib.skill[skills[i]].nobracket) {
								uiintro.add('<div><div class="skilln">' + get.translation(skills[i]) + "</div><div>" + get.skillInfoTranslation(skills[i]) + "</div></div>");
							} else {
								uiintro.add('<div><div class="skill">【' + translation + "】</div><div>" + get.skillInfoTranslation(skills[i]) + "</div></div>");
							}
							if (lib.translate[skills[i] + "_append"]) {
								uiintro._place_text = uiintro.add('<div class="text">' + lib.translate[skills[i] + "_append"] + "</div>");
							}
						}
					}
				};
				return node;
			},
			mark: true,
			intro: {
				onunmark(storage, player) {
					_status.characterlist.addArray(storage.character);
					storage.character = [];
					const name = player.name ? player.name : player.name1;
					if (name) {
						const sex = get.character(name).sex;
						const group = get.character(name).group;
						if (player.sex !== sex) {
							game.broadcastAll(
								(player, sex) => {
									player.sex = sex;
								},
								player,
								sex
							);
							game.log(player, "将性别变为了", "#y" + get.translation(sex) + "性");
						}
						if (player.group !== group) {
							game.broadcastAll(
								(player, group) => {
									player.group = group;
									player.node.name.dataset.nature = get.groupnature(group);
								},
								player,
								group
							);
							game.log(player, "将势力变为了", "#y" + get.translation(group + 2));
						}
					}
				},
				mark(dialog, storage, player) {
					if (storage && storage.current) {
						dialog.addSmall([[storage.current], (item, type, position, noclick, node) => lib.skill.nuyan_huashen.$createButton(item, type, position, noclick, node)]);
					}
					if (storage && storage.current2) {
						dialog.add(`<div class="text" data-nature=${get.groupnature(storage.current, "raw")}m style="font-family: ${lib.config.name_font || "xinwei"},xinwei">当前已拥有技能：</div>`);
						for (let i of storage.current2) {
							dialog.add('<div><div class="skill">【' + get.translation(lib.translate[i + "_ab"] || get.translation(i)) + "】</div><div>" + get.skillInfoTranslation(i, player) + "</div></div>");
						}
					}
					if (storage && storage.character.length) {
						if (player.isUnderControl(true)) {
							dialog.addSmall([storage.character, (item, type, position, noclick, node) => lib.skill.nuyan_huashen.$createButton(item, type, position, noclick, node)]);
						} else {
							dialog.addText("共有" + get.cnNumber(storage.character.length) + "张“化身”");
						}
					} else {
						return "没有化身";
					}
				},
				content(storage, player) {
					return "共有" + get.cnNumber(storage.character.length) + "张“化身”";
				},
				markcount(storage, player) {
					if (storage && storage.character) {
						return storage.character.length;
					}
					return 0;
				},
			},
		},
		nuyan_shaoyoushendao: {//少有神道
			nuyan_star: 1,
			trigger: {
				player: "damageBegin4",
			},
			filter: function(event, player) {
				return player.storage.nuyan_huashen?.character?.length > 0;
			},
			async cost(event, trigger, player) {
				_status.noclearcountdown = true;
				const id = lib.status.videoId++;
				const finish = () => {
					if (player.isOnline2()) {
						player.send("closeDialog", id);
					}
					dialog.close();
					delete _status.noclearcountdown;
					if (!_status.noclearcountdown) {
						game.stopCountChoose();
					}
				};
				const cards = player.storage.nuyan_huashen.character,
					prompt = "少有神道：弃置一张化身牌并防止此伤害";
				if (player.isOnline2()) {
					player.send(
						(cards, prompt, id) => {
							const dialog = ui.create.dialog(prompt, [cards, lib.skill.nuyan_huashen.$createButton]);
							dialog.videoId = id;
						},
						cards,
						prompt,
						id
					);
				}
				const dialog = ui.create.dialog(prompt, [cards, lib.skill.nuyan_huashen.$createButton]);
				dialog.videoId = id;
				if (!event.isMine()) {
					dialog.style.display = "none";
				}
				const next = player.chooseButton(false).set("dialog", id);
				next.set("selectButton", [1, 1]);
				next.set("filterButton", button => button.link !== get.event().current);
				next.set("current", player.storage.nuyan_huashen.current);
				let result = await next.forResult();
				finish();
				event.result = {
					bool: result.links?.length > 0,
					cost_data: result.links,
				};
			},
			async content(event, trigger, player) {
				const { cost_data } = event;
				lib.skill.nuyan_huashen.removeHuashen(player, cost_data);
				trigger.cancel();
			},
		},
		nuyan_yiguishishen: {//役鬼使神
			audio: "rexinsheng",
			nuyan_star: 3,
			unique: true,
			trigger: { player: "damageEnd" },
			locked: true,
			forced: true,
			getIndex: event => event.num,
			filter(event, player) {
				return event.num && player.storage.nuyan_huashen?.character?.length < player.maxHp;
			},
			async content(event, trigger, player) {
				lib.skill.nuyan_huashen.addHuashens(player, 1);
			},
		},
		//怒焰蔡贞姬
		nuyan_tianyin: {//天音
			init2: function(player) {
				let next = game.createEvent("nuyan_tianyin_init");
				next.player = player;
				next.setContent("emptyEvent");
			},
			forced: true,
			trigger: {
				global: "phaseEnd",
				player: "nuyan_tianyin_init",
			},
			unCuihuiAble(card) {
				return ![1, 2, 3, 5, 6].includes(get.number(card));
			},
			async content(event, trigger, player) {
				await lib.skill._ny_yanzoudiaoshi.init(player);
			},
			mod: {
				ignoredHandcard(card,player) {
					return [1, 2, 3, 5, 6].includes(get.number(card));
				},
				cardDiscardable(card, player, name) {
					if (name == 'phaseDiscard' && [1, 2, 3, 5, 6].includes(get.number(card))) return false;
				},
			},
			group: "nuyan_tianyin_viewAs",
			subSkill: {
				viewAs: {
					enable: ["chooseToUse","chooseToRespond"],
					hiddenCard(player, name) {
						return get.info("nuyan_tianyin_viewAs").getCards(player).includes(name) && player.countCards("h");
					},
					getCards(player, event, ui = false) {
						var list = [];
						const hs = player.getCards('h');
						if (!hs.length) return list;
						if (hs.every(card => game.checkMod(card, player, 'unchanged', 'cardEnabled2', player) === false)) return list;
						for (var name of lib.inpile) {
						    if (get.type(name) != "basic") continue;
							if (event) {
								if (event.filterCard(get.autoViewAs({ name }, "unsure"), player, event)) list.push(["基本", "", name]);
								if (name == "sha" && ui) {
								    for (var nature of lib.inpile_nature) {
								        if (event.filterCard(get.autoViewAs({ name, nature }, "unsure"), player, event)) list.push(["基本", "", "sha", nature]);
								    }
								}
							}
						    else list.push(name);
						}
						if (ui == false && event) list = list.map(i => i[2]);
						return list;
					},
					filter(event, player) {
					    return get.info("nuyan_tianyin_viewAs").getCards(player, event).length;
					},
					chooseButton: {
					    dialog(event, player) {
					        var list = get.info("nuyan_tianyin_viewAs").getCards(player, event, true);
					        return ui.create.dialog("翊赞", [list, "vcard"], "hidden");
					    },
					    check(button) {
					        var player = _status.event.player;
					        var card = { name: button.link[2], nature: button.link[3] };
					        if (
					            _status.event.getParent().type != "phase" ||
					            game.hasPlayer(function (current) {
					                return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
					            })
					        ) {
					            switch (button.link[2]) {
									case "jlsgqs_mei":
										return 114;
					                case "tao":
					                case "shan":
									case "os_mi":
					                    return 5;
					                case "jiu": {
					                    return 2.91;
					                }
					                case "sha":
					                    if (button.link[3] == "fire") {
					                        return 2.95;
					                    } else if (button.link[3] == "thunder" || button.link[3] == "ice") {
					                        return 2.92;
					                    } else {
					                        return 2.9;
					                    }
					            }
					        }
					        return 0;
					    },
					    backup(links, player) {
					        return {
								filterCard:() => true,
					            check(card, player, target) {
					                return 7 - get.value(card);
					            },
					            viewAs: { name: links[0][2], nature: links[0][3] },
					            position: "h",
					            popname: true,
					        };
					    },
					    prompt(links, player) {
					        return "将一张手牌当做" + get.translation(links[0][3] || "") + get.translation(links[0][2]) + "使用或打出";
					    },
					},
					ai: {
					    order: 11,
					    result: {
					        player: 1,
					    },
					    respondSha: true,
					    respondShan: true,
					    fireAttack: true,
					},
					"_priority": 0,
				},
			},
		},
		nuyan_dihunlvxin: {//涤魂滤心
			nuyan_star: 1,
			trigger: {
				global: "dying",
			},
			check(event, player) {
				if (!player.ny_nuqi) return false;
				let att = get.attitude(player, event.player);
				if (att > 0) {
					if (player.ny_nuqi == 1) {
						if (!event.player.countCards("h")) return false;
						if (player.hasCard((card) => ["tao", "jiu"])) return false;
						if (player.hasCard("jlsgqs_mei") && event.player != player) return false;
						if (player.hasCard("os_mi") && event.player == player) return false;
						return true;
					}
				} else {
					return event.player.countCards("h") - 4 + att;
				}
			},
			filter(event, player) {
				if (player == event.player && player.countCards("h") == 4) return false;
				return player.ny_nuqi;
			},
			async content(event, trigger, player) {
				await player.ny_loseNuQi();
				if (trigger.player.countCards("h") < 4) await trigger.player.drawTo(4);
				else {
					let num = trigger.player.countCards("h") - 4;
					await trigger.player.randomDiscard(num, "h");
				}
				if (trigger.player != player) await player.draw();
			},
		},
		nuyan_zhongyueheming: {//众乐和鸣
			init2(player, skill) {
				let next = game.createEvent("nuyan_zhongyueheming_init");
				next.player = player;
				next.setContent("emptyEvent");
			},
			trigger: {
				player: ["phaseZhunbeiBegin", "nuyan_zhongyueheming_init"],
			},
			async cost(event, trigger, player) {
				//ai等人写（
				event.result = await player.chooseTarget(1, false)
					.set("prompt", get.prompt(event.name.slice(0, -5)))
					.set("prompt2", get.prompt2(event.name.slice(0, -5)))
					.set("filterTarget", (card, player, target) => player != target)
					.set("ai", () => -114514)
					.forResult();
			},
			async content(event, trigger, player) {
				let target = event.targets[0];
				player.addTempSkill("nuyan_zhongyueheming_effect", { player: "phaseEnd" });
				player.markAuto("nuyan_zhongyueheming_effect", [target]);
				target.addSkill("nuyan_zhongyueheming_effect");
			},
			subSkill: {
				effect: {
					onremove(player, skill) {
						if (player.storage[skill + "_effect"]) {
							for (let i of player.storage[skill + "_effect"]) {
								i.removeSkill(skill);
							}
						}
					},
					mark: true,
					marktext: "乐",
					intro: {
						name: "众乐和鸣",
						content(storage, player) {
							let source = game.players.addArray(game.dead);
							source = source.filter(i => i != player && i.storage["nuyan_zhongyueheming_effect"]?.length > 0);
							let str1 = storage?.length > 0 ? "你" : get.translation(source);
							let str2 = storage?.length > 0 ? get.translation(storage) : get.translation(source);
							let str = "直至" + str1 + "的回合结束，你与" + str2 + "使用或打出基本牌或单体锦囊牌时，若点数为1,2,3,5,6，则此牌无次数和距离限制，否则令其使用的牌无效";
							return str;
						},
					},
					mod: {
						cardUsable:function (card, player, num) {
							if ([1, 2, 3, 5, 6].includes(get.number(card))) return Infinity;
						},
						targetInRange:function (card, player, target, now) {
							if ([1, 2, 3, 5, 6].includes(get.number(card))) return Infinity;
						},
					},
					trigger: {
						player: "useCard",
					},
					charlotte: true,
					forced: true,
					filter(event, player) {
						if (get.type(event.card) == "basic") return ![1, 2, 3, 5, 6].includes(get.number(event.card));
						if (get.type(event.card) == "trick") {
							let info = get.info(event.card);
							if (!info || info.notarget || (info.selectTarget && info.selectTarget != 1)) return false;
						}
						return ![1, 2, 3, 5, 6].includes(get.number(event.card));
					},
					content() {
						trigger.targets.length = 0;
						trigger.all_excluded = true;
						game.log(player, "使用的", "#y" + get.translation(trigger.card), "无效");
					},
				},
			},
		},
		//怒焰界荀攸 调整后续
		nuyan_qice: {//奇策
			audio: "qice",
			inherit: "qice",
			hiddenCard(player, name) {
				if (!player.isPhaseUsing()) return false;
				if (player.countSkill("nuyan_qice") > 0) return false;
				const hs = player.getCards('h');
				if (!hs.length) return false;
				if (hs.every(card => game.checkMod(card, player, 'unchanged', 'cardEnabled2', player) === false)) return false;
				return lib.inpile.some(name => get.type(name) == 'trick');
			},
			filter(event, player) {
			    const hs = player.getCards('h');
			    if (!hs.length) return false;
			    if (hs.every(card => {
			        const mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
			        return mod2 === false;
			    })) return false;
			    return lib.inpile.some(name => {
			        if (get.type(name) != 'trick') return false;
			        const card = get.autoViewAs({ name }, hs);
			        return event.filterCard(card, player, event);
			    });
			},
			chooseButton: {
			    filter(button, player) {
			        const event = get.event().getParent();
			        return player.hasCard(card => event.filterCard(get.autoViewAs({ name: button.link[2] }, [card]), player, event), 'h');
			    },
			    backup(links, player) {
			        return {
			            audio: 'qice',
			            filterCard: true,
			            selectCard: [1, Infinity],
			            check(card) {
			                if (ui.selected.cards.length) return -1;
			                return 7 - get.value(card);
			            },
			            complexCard: true,
			            position: 'h',
			            popname: true,
			            viewAs: { name: links[0][2] },
						precontent() {
							let list = [];
							for (let i of event.result.cards) {
								list.add(get.suit(i));
							}
							if (list.length) player.draw(list.length);
						},
			        }
			    },
			    prompt(links, player) {
			        return '将任意张手牌当作' + get.translation(links[0][2]) + '使用';
			    },
			    dialog(player) {
			        var list = [];
			        for (var i = 0; i < lib.inpile.length; i++) {
			            if (get.type(lib.inpile[i]) == "trick") {
			                list.push(["锦囊", "", lib.inpile[i]]);
			            }
			        }
			        return ui.create.dialog(get.translation("nuyan_qice"), [list, "vcard"]);
			    },
			    check(button) {
			        var player = _status.event.player;
			        var recover = 0,
			            lose = 1,
			            players = game.filterPlayer();
			        for (var i = 0; i < players.length; i++) {
			            if (players[i].hp == 1 && get.damageEffect(players[i], player, player) > 0 && !players[i].hasSha()) {
			                return button.link[2] == "juedou" ? 2 : -1;
			            }
			            if (!players[i].isOut()) {
			                if (players[i].hp < players[i].maxHp) {
			                    if (get.attitude(player, players[i]) > 0) {
			                        if (players[i].hp < 2) {
			                            lose--;
			                            recover += 0.5;
			                        }
			                        lose--;
			                        recover++;
			                    } else if (get.attitude(player, players[i]) < 0) {
			                        if (players[i].hp < 2) {
			                            lose++;
			                            recover -= 0.5;
			                        }
			                        lose++;
			                        recover--;
			                    }
			                } else {
			                    if (get.attitude(player, players[i]) > 0) {
			                        lose--;
			                    } else if (get.attitude(player, players[i]) < 0) {
			                        lose++;
			                    }
			                }
			            }
			        }
			        if (lose > recover && lose > 0) {
			            return button.link[2] == "nanman" ? 1 : -1;
			        }
			        if (lose < recover && recover > 0) {
			            return button.link[2] == "taoyuan" ? 1 : -1;
			        }
			        return button.link[2] == "wuzhong" ? 1 : -1;
			    },
			},
		},
		nuyan_miaojibaichu: {//妙计百出
			nuyan_star: 1,
			forced: true,
			locked: true,
			trigger: {
				player: "loseHpBefore",
			},
			content() {
				if (trigger.getParent("trigger")?.getParent("damage")?.getParent()?.name == event.name) return;
				const source = trigger.getParent()?.player;
				if (!source) source = "nosource";
				trigger.cancel();
				player.damage(trigger.num, source);
			},
		},
		nuyan_shierqice: {//十二奇策
			nuyan_star: 3,
			locked: true,
			audio: "zhiyu",
			trigger: {
				player: "damageEnd",
			},
			async content(event, trigger, player) {
				let result = await player.draw().forResult();
				result = get.suit(result[0]);
				let cards = player.getCards("h", { suit: result });
				if (!cards.length) return;
				await player.showCards(cards);
				if (trigger.source) {
					if (trigger.source.countDiscardableCards("he") < cards.length) await trigger.source.modedDiscard(trigger.source.getCards("h"));
					else await trigger.source.chooseToDiscard(true, "he", cards.length, "〖十二奇策〗：弃置" + get.cnNumber(cards.length) + "张牌");
				}
			},
		},
		//怒焰幻蔡文姬
		nuyan_yayue: {//雅乐
			inherit: "nuyan_tianyin",
			init2: function(player) {
				let next = game.createEvent("nuyan_yayue_init");
				next.player = player;
				next.setContent("emptyEvent");
			},
			trigger: {
				global: "phaseEnd",
				player: "nuyan_yayue_init",
			},
			group: "nuyan_yayue_viewAs",
			subSkill: {
				viewAs: {
					enable: "chooseToUse",
					hiddenCard: function(player, name) {
						return get.info("nuyan_yayue_viewAs").buttonRequire(player).includes(name);
					},
					filter: function(event, player, triggername) {
					    return get.info("nuyan_yayue_viewAs").buttonRequire(player, event).length;
					},
					chooseButton: {
					    dialog: function(event, player){
					        let list = get.info("nuyan_yayue_viewAs").buttonRequire(player, event);
							list = list.map(i => i = ["锦囊", "", i]);
					        return ui.create.dialog("〖雅乐〗：将一张牌当作任意锦囊牌使用", [list,'vcard']);
					    },
						check: (button) => _status.event.player.getUseValue(button.link[2]),
						filterButton: (button, player) => player.hasUseTarget(button.link[2]),
					    backup: function(links,player){
					        return {
					            filterCard: () => true,
								selectCard: 1,
								popname: true,
								position: "h",
					            precontent:function() {
									let filterSkill = "nuyan_xingyunliushui_effect";
									const ownedSkills = player.getSkills(null, false, true).filter(skill => {
										return skill == filterSkill;
									});
									let b = ownedSkills.length && !player.isTempBanned(filterSkill) && !(player.shixiaoedSkills && player.shixiaoedSkills.includes(filterSkill));
									if (!b || player == _status.currentPhase) {
										player.storage.nuyan_yayue_used ??= {};
										player.storage.nuyan_yayue_used[event.result.card.name] ??= 0;
										player.storage.nuyan_yayue_used[event.result.card.name] ++;
										player.when({ global:"phaseEnd" })
											.then(() => delete player.storage.nuyan_yayue_used);
									}
					            },
								viewAs:{
									name:links[0][2],
								},
					        }
					    },
					    prompt: function(links,player){
					        return "〖雅乐〗：将一张手牌当作【" + get.translation(links[0][2]) + "】使用";
					    },
					},
					buttonRequire: function(player, event) {
						var list = [];
						const hs = player.getCards('h');
						if (!hs.length) return list;
						if (hs.every(card => game.checkMod(card, player, 'unchanged', 'cardEnabled2', player) === false)) return list;
					    for (var name of lib.inpile) {
					        if (get.type(name, "trick") != "trick") continue;
							if (player.storage.nuyan_yayue_used?.[name] >= 5) continue;
					    	if (event) {
					    		if (event.filterCard(get.autoViewAs({ name }, "unsure"), player, event)) list.push(name);
					    	}
					        else list.push(name);
					    }
					    return list;
					},
					ai: {
					    order: 114,
					    result: {
					        player: 1,
					    },
					    threaten: 1.6,
					},
				},
			},
		},
		nuyan_lvxindihun: {//滤心涤魂
			nuyan_star: 1,
			trigger: {
				global: "damageBefore",
			},
			filter(event, player) {
				return player.ny_nuqi && event.num;
			},
			check(event, player) {
				return player.ny_nuqi >= 4 && get.attitude(player, event.player) > 0 && player.ny_zhuanShuFuShiId.some(i => i == "_ny_zhuanShu_keqingdi") && event.player.hp <= (event.num + 1);
			},
			async content(event, trigger, player) {
				await player.ny_loseNuQi();
				trigger.cancel();
				if (trigger.player != player) await player.draw();
				await trigger.player.loseHp(trigger.num);
			},
		},
		nuyan_xingyunliushui: {//行云流水
			nuyan_star: 3,
			unique: true,
			juexingji: true,
			forced: true,
			skillAnimation: true,
			animationColor: "thunder",
			init2(player, skill) {
				player.addSkill(skill + "_effect");
				const history = player.getHistory("useCard");
				let list = [];
				for (let i of history) {
					if (!list.length || i.card.number != list[0]) list = [i];
					else list.push(i.card.number);
				}
				player.storage.nuyan_xingyunliushui = list;
				if (list.length) {
					player.markSkill(skill);
					player.when({ global: "phaseAfter" })
						.then(() => {
							player.storage.nuyan_xingyunliushui = [];
							player.unmarkSkill("nuyan_xingyunliushui");
							player.updateMarks();
						});
				}
			},
			derivation: "nuyan_jiaowei",
			marktext: "行",
			intro: {
				name: "行云流水",
				markcount:(storage) => storage?.length,
				content(storage, player) {
					if (!storage) return;
					return "当前进度：" + storage.length + "/6<br>当前点数：" + get.strNumber(storage[0]);
				},
			},
			trigger: {
				global: "phaseEnd",
			},
			filter(event, player, name) {
				return player.storage.nuyan_xingyunliushui?.length == 6;
			},
			async content(event, trigger, player) {
				player.addSkill("nuyan_jiaowei");
				player.awakenSkill(event.name);
				player.storage.nuyan_jiaowei_used = true;
				game.broadcastAll(() => {
					lib.translate._ny_zhuanShu_keqingdi_info = "当一名角色失去体力时，你可以防止之并令其获得〖忘机〗<br><br><b>" + lib.translate.nuyan_wangji + "</b><br>" + lib.translate.nuyan_wangji_info;
				});
				let result = await player.chooseTarget(true)
					.set("prompt", "〖行云流水〗：令一名角色执行一个额外回合")
					.set("ai", (target) => {
						if (_status.event.player == target) return 114514;
						else return get.attitude(_status.event.player, target);
					})
					.forResult();
				result.targets[0].insertPhase();
			},
			group: "nuyan_xingyunliushui_used",
			subSkill: {
				used: {
					sub: true,
					sourceSkill: "nuyan_xingyunliushui",
					unique: true,
					forced: true,
					locked: true,
					popup: false,
					trigger: {
						player: "useCard",
					},
					filter(event, player) {
						return player.storage.nuyan_xingyunliushui?.length !== 6;
					},
					content() {
						if (trigger.card.number == player.storage.nuyan_xingyunliushui[0]) player.storage.nuyan_xingyunliushui.push(trigger.card.number);
						else player.storage.nuyan_xingyunliushui = [trigger.card.number];
						player.markSkill("nuyan_xingyunliushui");
						player.when({ global: "phaseAfter" })
							.then(() => {
								player.storage.nuyan_xingyunliushui = [];
								player.unmarkSkill("nuyan_xingyunliushui");
								player.updateMarks();
							});
					},
				},
				effect: {
					sub: true,
					sourceSkill: "nuyan_xingyunliushui",
					unique: true,
					forced: true,
					locked: true,
				},
			},
		},
		nuyan_jiaowei: {//焦尾
			sourceSkill: "nuyan_xingyunliushui",
			forced: true,
			locked: true,
			trigger: {
				player: ["useCardEnd", "respondEnd"],
			},
			filter(event) {
				return [1, 2, 3, 5, 6].includes(event.card.number);
			},
			async content(event, trigger, player) {
				await player.draw();
				await player.ny_addNuQi();
			},
		},
		nuyan_wangyou: {//忘忧 来自专属符石
			forced: true,
			locked: true,
			sourceSkill: "_ny_zhuanShu_ketingdi",
			getSkills(player) {
				return player.getCards("e").reduce((list, card) => {
			        const info = get.info(card);
			        if (info && info.skills) {
			            return list.addArray(info.skills);
			        }
			        return list;
			    }, []);
			},
			init2(player, skill) {
				if (!player.storage._disableJudge) player.disableJudge();
				player.disableSkill(skill, lib.skill.nuyan_wangyou.getSkills(player));
			},
			trigger: {
				player: "equipAfter",
			},
			content() {
				lib.skill.nuyan_wangyou.init2(player, event.name);
			},
			mod: {
				globalTo(from, to, current) {
					return current + Math.max(0, to.hp);
				},
			},
		},
		nuyan_wangji: {//忘机 来自专属符石
			inherit: "nuyan_wangyou",
			init2(player, skill) {
				player.addSkillBlocker(skill);
				if (!player.storage._disableJudge) player.disableJudge();
				player.disableSkill(skill, lib.skill.nuyan_wangyou.getSkills(player));
			},
			skillBlocker(skill, player) {
				return !lib.skill[skill].charlotte && !lib.skill[skill].persevereSkill && !lib.skill[skill].juexingji && !lib.skill[skill].dutySkill && skill != "nuyan_wangji";
			},
			mod: {
				globalTo(from, to, current) {
					return current + Math.max(0, to.maxHp);
				},
			},
		},
		//怒焰曹纯
		//后续强化打出牌？
		nuyan_shanjia: {//缮甲
			trigger: {
				player: "phaseUseBegin",
			},
			marktext: "缮",
			audio: "shanjia",
			onremove: true,
			frequent: true,
			intro: {
				name: "缮甲",
				markcount: (storage) => storage?.length,
				content(storage) {
					if (!storage.length) return;
					let str = "";
					for (let i of storage) {
						str += get.translation(i) + "、"
					}
					str = str.slice(0, -1);
					return "本局游戏共失去过" + get.cnNumber(storage.length) + "张装备牌：<br>" + str;
				},
			},
			async content(event, trigger, player) {
				player.chat("雪豹，我们肘！");
				await player.draw(3);
				let num = player.storage[event.name].length,
					result;
				if (num < 3) {
					result = await player.chooseToDiscard(3 - num, true, "he")
						.set("ai", (card) => {
							if (get.type(card) == "equip" && !_status.event.player.storage.nuyan_shanjia.includes(card.name)) return 114514;
							else if (get.type(card) == "basic") return 2 - get.value(card);
							return 6 - get.value(card);
						})
						.set("prompt", "〖缮甲〗：弃置" + get.cnNumber(3 - num) + "张牌<br>若你未弃置基本牌/锦囊牌，你此阶段强化使用牌不消耗怒气/使用牌无距离限制，若均满足，你摸X张牌（X为你本局游戏内失去的装备牌牌名数）")
						.forResultCards();
				} else result = [];
				let bool1 = result.some(card => get.type(card) == "basic"),
					bool2 = result.some(card => get.type(card, "trick") == "trick");
				if (!bool1) {
					player.addMark("_ny_qianghuaNoNuqi");
					player.when({ global: "phaseUseEnd" })
						.then(() => {
							player.clearMark("_ny_qianghuaNoNuqi");
							player.unmarkSkill("_ny_qianghuaNoNuqi");
							player.updateMarks();
						});
				}
				if (!bool2) {
					player.addMark("nuyan_shanjia_effect");
					player.when({ global: "phaseUseEnd" })
						.then(() => {
							player.clearMark("nuyan_shanjia_effect");
							player.unmarkSkill("nuyan_shanjia_effect");
							player.updateMarks();
						});
				}
				if (!bool1 && !bool2) {
					await player.draw(player.storage[event.name].length);
				}
			},
			group: ["nuyan_shanjia_record", "nuyan_shanjia_effect"],
			subSkill: {
				effect: {
					mod: {
						targetInRange: function (card, player, target) {
							if (player.countMark("nuyan_shanjia_effect")) return true;
						},
					},
					sub: true,
					sourceSkill: "nuyan_shanjia",
					charlotte: true,
					marktext: "缮",
					intro: {
						name: "缮甲",
						nocount: true,
						content: "你本阶段使用牌无距离限制",
					},
				},
				record: {
					sub: true,
					sourceSkill: "nuyan_shanjia",
					charlotte: true,
					popup: false,
					forced: true,
					init(player) {
						let history = player.actionHistory;
						let list = [];
						for (var i = 0; i < history.length; i++) {
						    for (var j = 0; j < history[i].lose?.length; j++) {
						        list.addArray(history[i].lose[j]?.cards2?.filter(function (card) {
						            return get.type(card) == "equip";
						        }).map(c => c.name));
						    }
						}
						player.storage.nuyan_shanjia = list;
						if (list.length > 0) player.markSkill("nuyan_shanjia");
					},
					trigger: {
					    player: "loseAfter",
					    global: ["loseAsyncAfter","equipAfter","addJudgeAfter","addToExpansionAfter","gainAfter"],
					},
					async content(event, trigger, player) {
						lib.skill.nuyan_shanjia_record.init(player);
					},
				},
			},
		},
		nuyan_pijianzhirui: {//披坚执锐
			init2(player) {
				let next = game.createEvent("nuyan_pijianzhirui_init");
				next.player = player;
				next.setContent("emptyEvent");
			},
			nuyan_star: 1,
			trigger: {
				player: ["phaseZhunbeiBegin", "nuyan_pijianzhirui_init"],
			},
			async cost(event, trigger, player) {
				const hasEquip = player.getStorage("nuyan_pijianzhirui_equip").slice()
				    .map(equip => equip[2]);
				let virtualList = {
					equip1: [],
					equip2: [],
				};
				if (hasEquip.length) {
					for (let i of hasEquip) {
						virtualList[get.subtype(i)].add(i);
					}
				}
				let allEquip = lib.inpile.slice();
				//allEuqip.addArray(lib.cardPack.mode_derivation);
				allEquip = allEquip.filter(cardName => {
					return get.type(cardName) == "equip";
				});
				let chooseList = [];
				chooseList.push('###披坚执锐###<div class="text center">选择一个装备牌的牌名，当你对应的副类别区域内没有牌时，你视为装备着你选择的牌名的牌（每个副类别对应一个装备牌，若已有则改为替换为你选择的牌名）</div>');
				for (let i of ["equip1", "equip2"]) {
				    let str = get.translation(i) + "栏：";
				    if (virtualList[i]?.length) {
				        str += "已视为装备【" + get.translation(virtualList[i]) + "】";
				    } else {
				        str += "未视为装备任何牌";
				    }
				    chooseList.push(str);
				    let equips = allEquip.filter(name => get.subtypes(name).includes(i));
				    let list = [equips, "vcard"];
				    if (equips.length) {
				        chooseList.push(list);
				    }
				}
				const {
				    result: { bool, links },
				} = await player
				    .chooseButton(chooseList)
				    .set("filterButton", button => {
				        let hasEquip = get.event("hasEquip");
						return !hasEquip.includes(button.link[2]);
				    })
				    .set("hasEquip", hasEquip)
				    .set("ai", button => get.equipValue({ name: button.link[2] }, get.player()));
				event.result = {
				    bool: bool,
				    cost_data: links,
				};
			},
			async content(event, trigger, player) {
				const { cost_data } = event,
					equip = event.name + "_equip";
				const subtypes = cost_data.map(name => get.subtypes(name[2])).flat();
				player.unmarkAuto(
				    equip,
				    player.getStorage(equip).filter(name => subtypes.some(t => get.subtypes(name[2]).includes(t)))
				);
				player.markAuto(equip, cost_data);
				await lib.skill.nuyan_pijianzhirui.gainSkills(player, event.name);
			},
			async gainSkills(player, skill) {
				const equip = skill + "_equip";
				//获取技能
				for (let item of player.getStorage(equip)) {
					let skills = lib.card[item[2]]?.skills ?? [];
					for (let sk of skills) {
						let info = get.copy(lib.skill[sk]);
						info.subtypeNum = Number(get.subtype(item[2]).slice(-1));
						if (info.audio) info.audio = sk;
						const func = () => true;
						if (info.filter) {
							info.filterCopy = info.filter || func;
							info.filter = function (event, player, triggername, target) {
								if (player.getEquip(this.subtypeNum)) return false;
								return this["filterCopy"].call(this, event, player, triggername, target);
							};
						}
						if (info.viewAsFilter) {
							info.viewAsFilterx = info.viewAsFilter || func;
							info.viewAsFilter = function(player) {
								if (player.getEquip(this.subtypeNum)) return false;
								return this["viewAsFilterx"].call(this, player);
							};
						}
						if (info.mod) {
							info.modx = get.copy(info.mod) || {};
							for (let i in info.mod) {
								info.mod[i] = function() {
									let player;
									for (let item of arguments) {
										if (get.itemtype(item) == "player" && !player) player = item;
										else player = get.event().player;
									}
									player ??= get.event().player;
									if (!player.getEquip(this.subtypeNum)) {
										return this["modx"][i].call(this, ...arguments);
									}
								}.bind(info);
							}
						}
						const name = skill + "_" + sk;
						game.broadcastAll((name, info, card, skill, player) => {
							lib.skill[name] = info;
							lib.translate[name] = get.translation(card);
							lib.translate[name + "_info"] = get.translation(card + "_info");
							player.addAdditionalSkills(skill, name, true);
						}, name, info, item[2], skill, player);
					}
				}
			},
			group: ["nuyan_pijianzhirui_equip"],
			subSkill: {
				equip: {
					sub: true,
					sourceSkill: "nuyan_pijianzhirui",
					onremove: true,
					marktext: "披",
					intro: {
						name: "披坚执锐",
						mark(dialog, storage = []) {
						    if (!storage.length) {
						        return "当前未视为装备任意牌";
						    }
						    dialog.addText("当前视为装备");
						    dialog.addSmall([storage, "vcard"]);
						},
					},
					mod: {
					    globalFrom(from, to, distance) {
					        return distance + from.getStorage("nuyan_pijianzhirui_equip").reduce((sum, name) => sum + (lib.card[name[2]]?.distance?.globalFrom || 0), 0);
					    },
					    globalTo(from, to, distance) {
					        return distance + to.getStorage("nuyan_pijianzhirui_equip").reduce((sum, name) => sum + (lib.card[name[2]]?.distance?.globalTo || 0), 0);
					    },
					    attackRange(from, distance) {
					        return distance - from.getStorage("nuyan_pijianzhiruiu_equip").reduce((sum, name) => sum + (lib.card[name[2]]?.distance?.attackFrom || 0), 0);
					    },
					    attackTo(from, to, distance) {
					        return distance + to.getStorage("nuyan_pijianzhirui_equip").reduce((sum, name) => sum + (lib.card[name[2]]?.distance?.attackTo || 0), 0);
					    },
					},
					popup: false,
				},
			},
		},
		nuyan_duyuxiaoji: {//督御骁骑
			nuyan_star: 3,
			trigger: {
				global: "phaseBegin",
			},
			filter(event, player) {
				return player.countCards("he", { type: "equip" }) && player !== event.player;
			},
			async cost(event, trigger, player) {
				let result = await player.chooseCardTarget({
					filterCard: (card) => get.type(card) == "equip",
					forced: false,
					position: "he",
					prompt: get.prompt(event.name.slice(0, -5)),
					prompt2: get.prompt2(event.name.slice(0, -5)),
					target: trigger.player,
					ai2: (target) => {
						if (target == _status.event.target) return 114514;
						return -get.attitude(_status.event.target, target);
					}
				}).forResult();
				if (result.bool) {
					event.result = {
						bool: true,
						cost_data: {
							card: result.cards[0],
							target: result.targets[0],
						},
					}
				}
			},
			async content(event, trigger, player) {
				const { card, target } = event.cost_data;
				player.give(card, trigger.player);
				trigger.player.markAuto("nuyan_duyuxiaoji_effect", target);
				trigger.player.addTempSkill("nuyan_duyuxiaoji_effect");
			},
			subSkill: {
				effect: {
					sub: true,
					sourceSkill: "nuyan_duyuxiaoji",
					charlotte: true,
					onremove(player, skill) {
						delete player.storage[skill];
						delete player.storage[skill + "_known"];
					},
					forced: true,
					mark: true,
					marktext: "督",
					intro: {
						name: "",
						content(storage, player) {
							let str = "你于出牌阶段使用伤害牌指定唯一目标后，若目标为〖督御骁骑〗所选角色之一，你摸一张牌，否则此牌结算结束后，你结束此阶段。<br>已知〖督御骁骑〗所选角色：";
							if (player.storage.nuyan_duyuxiaoji_effect_known) str += get.translation(player.storage.nuyan_duyuxiaoji_effect_known);
							else str += "无";
							return str;
						},
					},
					trigger: {
						player: "useCardToPlayered",
					},
					filter(event, player) {
						return event.targets?.length == 1 && get.tag(event.card, "damage") && player.isPhaseUsing() && player.storage.nuyan_duyuxiaoji_effect?.length;
					},
					content() {
						if (player.storage[event.name].includes(trigger.target)) {
							player.draw();
						} else {
							const evt = trigger.getParent("phaseUse");
							if (evt && evt.player == player && evt.name == "phaseUse" && !evt.skipped) {
								evt.skipped = true;
								game.log(player, "跳过了出牌阶段");
							}
						}
						player.markAuto(event.name + "_known", trigger.target);
					},
				},
			},
		},
		//怒焰界周瑜
		nuyan_fanjian: {//反间
			enable: "chooseToUse",
			hiddenCard: function(player, name) {
				return get.info("nuyan_fanjian").buttonRequire(player).includes(name);
			},
			filter: function(event, player, triggername) {
			    return get.info("nuyan_fanjian").buttonRequire(player, event).length;
			},
			chooseButton: {
			    dialog: function(event, player){
			        let list = get.info("nuyan_fanjian").buttonRequire(player, event);
					list = list.map(i => i = ["锦囊", "", i]);
			        return ui.create.dialog("〖反间〗：将一张牌当作【水淹七军】使用", [list,'vcard']);
			    },
				check: (button) => _status.event.player.getUseValue(button.link[2]),
				filterButton: (button, player) => player.hasUseTarget(button.link[2]),
			    backup: function(links,player){
			        return {
			            filterCard(card) {
							return get.suit(card) == "spade";
						},
						selectCard: 1,
						popname: true,
						position: "h",
						viewAs:{
							name:links[0][2],
							storage: {
								nuyan_fanjian: true,
							},
						},
			        }
			    },
			    prompt: function(links,player){
			        return "〖反间〗：将一张手牌当作【" + get.translation(links[0][2]) + "】使用";
			    },
			},
			buttonRequire: function(player, event) {
				var list = [];
				const hs = player.getCards('h', { suit: "spade" });
				if (!hs.length) return list;
				if (hs.every(card => game.checkMod(card, player, 'unchanged', 'cardEnabled2', player) === false)) return list;
				let cardList = lib.inpile;
				//cardList.addArray(lib.cardPack.mode_derivation);
			    for (var name of lib.inpile) {
					if (!get.translation(name).includes("水淹七军")) continue;
			    	if (event) {
			    		if (event.filterCard(get.autoViewAs({ name }, "unsure"), player, event)) list.push(name);
			    	}
			        else list.push(name);
			    }
			    return list;
			},
			ai: {
			    order: 3,
			    result: {
			        player: 1,
			    },
			    threaten: 1.6,
			},
			group: "nuyan_fanjian_effect",
			subSkill: {
				effect: {
					sub: true,
					sourceSkill: "nuyan_fanjian",
					charlotte: true,
					forced: true,
					trigger: {
						player: "useCardAfter",
					},
					filter(event, player) {
						return event.card.storage?.nuyan_fanjian && event.card.storage?._useCardQianghua;
					},
					content() {
						const card = get.cardPile2((card) => get.color(card) == "black", "random");
						player.gain(card, "gain2");
					},
				},
			},
		},
		nuyan_botaoxiongyong: {//波涛汹涌
			locked: true,
			forced: true,
			nuyan_star: 1,
			judgeDraw(player) {
				return [!player.isMinHandcard(true), !player.isMinHp(true), !player.ny_isMinNuQi(true)];
			},
			trigger: {
				player: "phaseDrawBegin1",
			},
			filter(event, player) {
				if (event.numFixed) return false;
				return get.info("nuyan_botaoxiongyong").judgeDraw(player).some(bool => bool);
			},
			content() {
				const list = get.info("nuyan_botaoxiongyong").judgeDraw(player).filter(bool => bool);
				trigger.num += 2 * list.length;
			},
		},
		nuyan_lieyanqinyin: {//烈焰琴音
			nuyan_star: 3,
			trigger: {
				player: "useCardAfter",
			},
			filter(event, player) {
				return get.info("nuyan_lieyanqinyin").getCards(player, event).includes(event.card.name);
			},
			getCards(player, event) {
				var list = [];
				const hs = player.getCards('h', { color: "black" });
				if (!hs.length) return list;
				if (hs.every(card => game.checkMod(card, player, 'unchanged', 'cardEnabled2', player) === false)) return list;
				if (event?.card.storage?.nuyan_lieyanqinyin) return list;
				let cardList = lib.inpile;
				//cardList.addArray(lib.cardPack.mode_derivation);
				for (var name of lib.inpile) {
					if (!get.translation(name).includes("水淹七军")) continue;
					list.push(name);
				}
				return list;
			},
			async cost(event, trigger, player) {
				const list = get.info("nuyan_lieyanqinyin").getCards(player, trigger);
				list.map(i => ["锦囊", "", i]);
				let result = await player.chooseButton(['是否将一张黑色手牌当做一张【水淹七军】普通使用？', [list, 'vcard']], false)
					.set("ai", (button) => player.getUseValue(button.link[2]))
					.set("filterButton", (button, player) => player.hasUseTarget(button.link[2]))
					.forResult();
				if (!result.bool) {
					event.result = { bool: false };
					return;
				}
				const card = {
					name: result.links[0][2],
					nature: result.links[0][3],
					storage: {
						nuyan_lieyanqinyin: true,
						_useCardQianghua: false,
					},
				};
				event.result = {
					bool: true,
					cost_data: card,
				};
			},
			async content(event, trigger, player) {
				const card = event.cost_data;
				game.broadcastAll(card => {
				    lib.skill.nuyan_lieyanqinyin_backup.viewAs = card;
				}, card);
				const next = player.chooseToUse();
				next.set('openskilldialog', '将一张黑色手牌当做' + get.translation(card) + '普通使用');
				next.set('norestore', true);
				next.set('addCount', false);
				next.set('_backupevent', 'nuyan_lieyanqinyin_backup');
				next.set('custom', {
				    add: {},
				    replace: { window() { } }
				});
				next.backup('nuyan_lieyanqinyin_backup');
				await next;
			},
			subSkill: {
				backup: {
					filterCard(card) {
					    return get.itemtype(card) == "card" && get.color(card) == "black";
					},
					position: "h",
					filterTarget: function(card, player, target) {
					    if (!card || !target || target.removed) return false;
					    const info = get.info(card);
					    if (!info?.deadTarget && target.isDead()) return false;
					    if (!info?.includeOut && target.isOut()) return false;
					    const filter = info.filterTarget;
					    if (!info.singleCard || ui.selected.targets.length == 0) {
					        let mod = game.checkMod(card, player, target, "unchanged", "playerEnabled", player);
					        if (mod != "unchanged") return mod;
					        mod = game.checkMod(card, player, target, "unchanged", "targetEnabled", target);
					        if (mod != "unchanged") return mod;
					    }
					    if (typeof filter == "boolean") return filter;
					    if (typeof filter == "function") return Boolean(filter(card, player, target));
					},
					selectCard: 1,
					check: card => 6 - get.value(card),
					log: false,
					sub: true,
					sourceSkill: "nuyan_lieyanqinyin",
				},
			},
		},
		//怒焰曹婴
		nuyan_lingren: {//凌人
			enable: "phaseUse",
			usable: 1,
			audio: "xinfu_lingren",
			filterTarget: (card, player, target) => player != target,
			selectTarget() {
				let player = _status.event.player,
					filterSkill = "nuyan_shuiqingzhuoying";
				const ownedSkills = player.getSkills(null, false, true).filter(skill => {
				    return skill == filterSkill;
				});
				let b = ownedSkills.length !== 0 && !player.isTempBanned(filterSkill) && !(player.shixiaoedSkills && player.shixiaoedSkills.includes(filterSkill));
				if (b) return [1, 2];
				return 1;
			},
			async content(event, trigger, player) {
				const { target } = event;
				if (event.targets.length > 1 && event.targets[0] == event.target) player.logSkill("nuyan_shuiqingzhuoying");
				//专属符石-凤鸣剑
				let id, times = [];
				if (player.ny_zhuanShuFuShiId?.some(id => id == "_ny_zhuanShu_fengmingjian")) {
					id = player.ny_zhuanShuFuShiId.find(id => id == "_ny_zhuanShu_fengmingjian");
					id = player.ny_zhuanShuFuShiId.indexOf(id);
					if (player.ny_fushiTime?.[4+id] > 0) {
						id += 4;
						times = player.ny_fushiTime;
					}
				}
				let cards = await target.showHandcards().forResultCards();
				let typeList = [],
					remainCards = [],
					cardList = [];
				cards = cards.randomSort();
				for (let item of cards) {
					if (!typeList.includes(get.type(item))) {
						typeList.add(get.type(item));
						remainCards.add(item);
					}
				}
				typeList.forEach(t => {
					let card = get.cardPile2((c) => get.type(c) == t, "random");
					if (card) cardList.add(card);
				});
				await player.gain(cardList, "gain2");
				if (times.length && times[id] > 0) {
					times[id] --;
					cards = cards.filter(c => !remainCards.includes(c));
					await target.modedDiscard(cards);
				}
				player.markAuto(event.name + "_effect", target);
				player.addTempSkill(event.name + "_effect", { player: "phaseUseEnd" });
			},
			subSkill: {
				effect: {
					sub: true,
					sourceSkill: "nuyan_lingren",
					charlotte: true,
					forced: true,
					trigger: {
						player: "useCardToPlayer",
					},
					onremove(player, skill) {
						delete player.storage[skill];
						delete player.storage[skill.slice(0, -7)];
					},
					filter(event, player) {
						if (!get.tag(event.card, "damage")) return false;
						if (!player.getStorage("nuyan_lingren_effect").some(current => event.target == current)) return false;
						let cards = event.target.getCards("h");
						return cards.some(c => get.type(c) == get.type(event.card));
					},
					async content(event, trigger, player) {
						let parent = trigger.getParent();
						if (lib.skill._useCardBaseChange?.list?.includes(trigger.card.name)) {
							trigger.card.storage._useCardBaseChange ??= 0;
							trigger.card.storage._useCardBaseChange ++;
						} else parent.baseDamage++;
						parent.directHit.addArray(game.players);
						await player.ny_addNuQi();
					},
				},
			},
		},
		nuyan_shuiqingzhuoying: {//水清濯缨
			nuyan_star: 1,
		},
		nuyan_longchengfengming: {//龙城凤鸣
			nuyan_star: 3,
			trigger: {
				player: "damageBegin3",
			},
			filter(event, player) {
				if (!event.card) return false;
				if (event.num <= 1) return false;
				return player.countCards("h", { type: get.type(event.card) });
			},
			async cost(event, trigger, player) {
				let result = await player.chooseToDiscard(false, "he", "chooseonly")
					.set("filterCard", (card) => get.type(card) == get.type(trigger.card))
					.set("prompt", get.prompt(event.name.slice(0, -5)))
					.set("prompt2", get.prompt2(event.name.slice(0, -5)))
					.forResult();
				if (!result.bool) event.result = { bool: false };
				event.result = {
					bool: result.bool,
					cost_data: result.cards[0],
				};
			},
			async content(event, trigger, player) {
				const card = event.cost_data;
				await player.discard(card);
				trigger.num = 1;
				await player.draw();
			},
		},
		//怒焰谋司马懿
		nuyan_yinren: {//隐忍
			forced: true,
			locked: true,
			marktext: "隐",
			intro: {
				name: "隐忍",
				content: "共有$枚标记",
			},
			trigger: {
				global: ["roundStart", "phaseEnd", "gainMaxHpAfter","loseMaxHpAfter", "_ny_chooseStoneAfter"],
			},
			derivation: "nuyan_guicai",
			filter(event, player, name) {
				if (name == "phaseEnd") return !player.getHistory("useCard", (evt) => evt.targets.some(t => t != player)).length;
				return true;
				return !player.isTurnedOver();
			},
			update(player) {
				let skill = "nuyan_yinren";
				if (player.countMark(skill) >= player.maxHp) player.addAdditionalSkills(skill, "nuyan_guicai", true);
				else player.removeAdditionalSkills(skill);
			},
			async content(event, trigger, player) {
				if (event.triggername.endsWith("After")) {
					get.info(event.name).update(player);
					return;
				}
				let num = player.hp;
				if (event.triggername == "roundStart") {
					await player.turnOver();
					num *= 2;
				}
				player.addMark(event.name, num);
				get.info(event.name).update(player);
				if (event.triggername == "phaseEnd") {
					await player.gainMaxHp();
					await player.recoverTo(player.maxHp);
				}
			},
		},
		nuyan_guicai: {//鬼才
			group: "guicai",
			sourceSkill: "nuyan_yinren",
			audio: "guicai",
			trigger: {
				player: "dying",
			},
			filter: (event, player) => player.countMark("nuyan_yinren"),
			async content(event, trigger, player) {
				const source = "nuyan_yinren";
				player.removeMark(source, 1);
				get.info(source).update(player);
				const num = player.countMark(source);
				let result = await player.judge()
					.set("bool", (card) => {
						let num = get.number(card) - _status.event.numb;
						if (num == 0) return 1;
						return num;
					})
					.set("numb", num).forResultCard();
				if (num >= get.number(result)) await player.recoverTo(1);
			},
		},
		nuyan_MouSimayi_xuanmoumiaoji: {//谋司马懿--玄谋妙计
			enable: "phaseUse",
			audio: "lianpo",
			filter: (event, player) => player.countMark("nuyan_yinren"),
			selectTarget: 1,
			filterTarget: (card, player, target) => player != target,
			nuyan_star: 1,
			async content(event, trigger, player) {
				const { target } = event,
					skill = "nuyan_yinren";
				player.removeMark(skill, 1);
				get.info(skill).update(player);
				await player.draw();
				let result = await lib.skill.nuyan_mouYi.content(player, target, "nuyan_mou_simayi");
				if (result) {
					await target.damage(player);
					if (!target.isIn()) return;
					let next = await player.discardPlayerCard(target, true, "h", "摧毁" + get.translation(target) + "一张手牌")
						.set("chooseonly", true)
						.forResultCards();
					await target.ny_cuihuiCards(next);
				}
			},
			check(target) {
				let { player } = get.event();
				if (get.attitude(player, target) < 0) return 114514 - target.hp;
				return -114;
			},
			ai: {
				order: 11,
				combo: "nuyan_yinren",
			},
		},
		nuyan_taoguangyanghui: {//韬光养晦
			nuyan_star: 3,
			audio: "jsrgtuigu",
			trigger: {
			    global: "roundEnd",
			},
			mod: {
			    targetEnabled: function(card, player, target, now) {
			        if (target != player && player.isTurnedOver()) {
			            if (card.name == 'sha') return false;
			            let info = get.info(card);
			            if (info?.type == "trick" && info?.selectTarget && info?.selectTarget == 1 && get.color(card) == "black") return false;
			        }
			    },
			},
			filter(event, player) {
			    const curLen = player.actionHistory.length;
			    for (let i = curLen - 1; i >= 0; i--) {
			        const history = player.actionHistory[i];
			        if (history.isMe && !history.isSkipped) {
			            return false;
			        }
			        if (history.isRound) {
			            break;
			        }
			    }
			    return true;
			},
			forced: true,
			locked: true,
			async content(event, trigger, player) {
				const next = player.insertPhase();
				next.set("phaseList", ["phaseUse"]);
			},
		},
		//怒焰二版于吉
		nuyan_guhuo: {//蛊惑
			forced: true,
			locked: true,
			audio: "guhu",
			trigger: {
				global: ["useCard", "respond"],
			},
			filter(event, player) {
				if (player == event.player) return false;
				if (!event.respondTo?.length) return false;
				if (!event.respondTo?.[0] == player) return false;
				return player.getAllHistory("useCard", (evt) => evt.card == event.respondTo?.[1]).length;
			},
			async content(event, trigger, player) {
				const card = trigger.respondTo[1];
				if (get.number(card) != get.number(trigger.card)) {
					await player.draw();
					await player.ny_addNuQi();
				}
				if (get.suit(card) != get.suit(trigger.card)) {
					await trigger.player.randomDiscard();
					await trigger.player.loseHp();
				}
			},
		},
		nuyan_taipingdaoyi: {//太平道义
			forced: true,
			locked: true,
			nuyan_star: 1,
			getPlayers(event) {
				if (!event.card || !event.targets) return [];
				let list = event.targets;
				for (let target of event.targets) {
					if (target == event.player) continue;
					const func = (evt) => evt.respondTo?.[0] == event.player && evt.respondTo?.[1] == event.card;
					for (let item of ["useCard", "respond"]) {
						if (target.getAllHistory(item, func).length) list.remove(target);
					}
				}
				return list;
			},
			trigger: {
				player: "useCardEnd",
			},
			filter: (event, player) => get.info("nuyan_taipingdaoyi").getPlayers(event).length && event.targets.some(item => item !== player),
			async content(event, trigger, player) {
				for (let i of get.info(event.name).getPlayers(trigger)) {
					await player.draw();
					await player.ny_addNuQi();
				}
			},
		},
		nuyan_huanhuozhongxin: {//幻惑众心
			forced: true,
			locked: true,
			nuyan_star: 3,
			trigger: {
				player: ["useCard", "respond"],
			},
			filter(event, player) {
				if (!event.respondTo?.length) return false;
				const target = event.respondTo?.[0];
				if (target == player) return false;
				const card = event.respondTo?.[1];
				if (!card) return false;
				return target.getAllHistory("useCard", (evt) => evt.card == card && evt.targets.includes(player)).length;
			},
			async content(event, trigger, player) {
				const target = trigger.respondTo[0],
					card = trigger.respondTo[1];
				let num = 0;
				if (get.number(card) != get.number(trigger.card)) {
					await player.draw(2);
					num ++;
				}
				if (get.suit(card) != get.suit(trigger.card)) {
					await target.randomDiscard(2);
					num ++;
				}
				if (num !== 2 || !target.getGainableCards(player, "he")) return;
				//专属符石-太平巾
				if (player.ny_zhuanShuFuShiId?.some(id => id == "_ny_zhuanShu_taipingjin")) {
					let id = player.ny_zhuanShuFuShiId.find(id => id == "_ny_zhuanShu_taipingjin");
					id = player.ny_zhuanShuFuShiId.indexOf(id);
					if (player.ny_fushiTime?.[4+id] > 0) {
						player.ny_fushiTime[4+id]--;
						let cards = target.getGainableCards(player, "he").randomGets(2);
						await player.randomGain(target, 2, true);
					}
				}
			},
		},
		//怒焰起袁绍
		nuyan_qi_luanji: {//乱击
			audio: "luanji",
			inherit: "luanji",
			viewAs: {
				name: "wanjian",
				storage: {
					nuyan_qi_luanji: true,
				},
			},
			precontent() {
				if (player.storage._ny_zhuanShu_sizhao?.includes(get.suit(event.result?.cards?.[0]))) player.draw();
			},
			filterCard(card, player) {
			    if (ui.selected.cards.length) {
			        return get.suit(card) == get.suit(ui.selected.cards[0]);
			    }
			    const cards = player.getCards("hs");
			    for (let i of cards) {
			        if (card != i && get.suit(card) == get.suit(i)) return true;
			    }
			    return false;
			},
			selectCard() {
				const { player } = get.event();
				if (player.storage._ny_zhuanShu_Firstsizhao?.includes(get.suit(ui.selected?.cards?.[0]))) return 1;
				return 2;
			},
			group: "nuyan_qi_luanji_effect",
			subSkill: {
				effect: {
					trigger: {
						player: "useCardAfter",
					},
					charlotte: true,
					forced: true,
					sub: true,
					sourceSkill: "nuyan_qi_luanji",
					filter(event, player) {
						if (!event.card.storage?.[this.sourceSkill]) return false;
						return !game.hasPlayer2(current => current.getAllHistory("damage", evt => evt.card == event.card).length);
					},
					content() {
						player.draw();
					},
					priority: -11,
				},
			},
		},
		nuyan_bijianzixian: {//愎谏自贤
			forced: true,
			locked: true,
			nuyan_star: 1,
			audio: "olxueyi",
			trigger: {
				player: ["phaseUseBegin", "gainEnd"],
			},
			filter(event, player, name) {
				if (name == "gainEnd") return player.isPhaseUsing() && event.source && event.source != player && event.getl(event.source)?.cards?.length > 0;
				return player.hasMark("nuyan_shiluxungui");
			},
			async content(event, trigger, player) {
				if (event.triggername == "gainEnd") await player.ny_cuihuiCards(trigger.cards);
				else await player.drawTo(player.countMark("nuyan_shiluxungui") * 3);
			},
		},
		nuyan_shiluxungui: {//世禄勋贵
			forced: true,
			locked: true,
			audio: "xueyi",
			mod: {
				cardUsable: function (card, player, num) {
				    if (card.name == "sha") return num + player.countMark("nuyan_shiluxungui");
				},
				maxHandcard: function (player, num) {
				    return num + player.countMark("nuyan_shiluxungui");
				},
			},
			nuyan_star: 3,
			init2(player, skill) {
				player.addMark(skill, 4);
			},
			marktext: "勋",
			intro: {
				name: "世禄勋贵",
				content(storage) {
					return `你的摸牌阶段摸牌数、使用【杀】次数、手牌上限+${storage}<br>若你拥有〖愎谏自贤〗,出牌阶段开始时，你将手牌数摸至${3 * storage}张`;
				},
			},
			trigger: {
				player: ["phaseJieshuBegin", "phaseDrawBegin1"],
			},
			filter(event, player, name) {
				if (!player.hasMark("nuyan_shiluxungui")) return false;
				if (name == "phaseDrawBegin1") return !event.numFixed;
				return player.getHistory("loseHp").length;
			},
			content() {
				if (event.triggername == "phaseJieshuBegin") player.removeMark(event.name, 1);
				else trigger.num += player.countMark(event.name);
			},
		},
		//怒焰周处
		nuyan_chuhai: {//除害
			audio: "chuhai",
			dutySkill: true,
			forced: true,
			skillAnimation: true,
			animationColor: "wood",
			trigger: {
				player: "changeSkillsAfter",
				source: "dieAfter",
			},
			mod: {
				cardname(card) {
					if (get.type(card, null, false) == "equip") return "jiu";
				},
			},
			derivation: ["nuyan_huhuan", "nuyan_jiaohai", "nuyan_gaili"],
			init2(player) {
				player.addSkills(this.derivation.slice(0, 2));
			},
			filter(event, player) {
				if (event.name == "die") return true;
				return !player.hasSkill("nuyan_huhuan") && !player.hasSkill("nuyan_jiaohai");
			},
			async content(event, trigger, player) {
				await player.removeSkills(event.name);
				if (trigger.name == "die") {
					if (player.ny_nuqi) {
						const players = game.players.remove(player).sortBySeat(player);
						for (let item of players) {
							await item.damage(player, player.ny_nuqi);
						}
					}
				} else {
					await player.loseHp();
					await player.addSkills("nuyan_gaili");
				}
			},
		},
		nuyan_jiaohai: {//蛟害
			sourceSkill: "nuyan_chuhai",
			forced: true,
			locked: true,
			audio: "xianghai",
			global: "nuyan_jiaohai_g",
			subSkill: {
				g: {
					charlotte: true,
					sub: true,
					sourceSkill: "nuyan_jiaohai",
					mod: {
						maxHandcardBase(player, num) {
							let n = game.countPlayer(current => current != player && current.hasSkill("nuyan_jiaohai")) * -3;
							return Math.max(num + n, 0); 
						},
					},
				},
			},
		},
		nuyan_huhuan: {//虎患
			sourceSkill: "nuyan_chuhai",
			forced: true,
			locked: true,
			audio: "xianghai",
			trigger: {
				global: "phaseDrawBegin2",
			},
			filter: (event, player) => event.player != player && !event.numFixed,
			content() {
				trigger.num -= 3;
				if (trigger.num < 0) trigger.num = 0;
			},
		},
		nuyan_gaili: {//改励
			sourceSkill: "nuyan_chuhai",
			audio: "zhangming",
			enable: "phaseUse",
			selectCard: 1,
			filter(event, player) {
				return player.getCards("hes").some(c => get.type(c) == "equip");
			},
			position: "hes",
			filterCard: (card) => get.type(card) == "equip",
			async content(event, trigger, player) {
				let card = get.cardPile2((card) => get.type(card, "trick") == "trick" && !get.tag(card, "damage"), "random");
				if (card) {
					await player.gain(card, "gain2");
					player.addGaintag(card, event.name);
					player.addTempSkill(event.name + "_keep");
				} else {
					player.chat("没牌力，悲（");
				}
			},
			subSkill: {
				keep: {
					charlotte: true,
					mod: {
					    ignoredHandcard(card, player) {
					        if (card.hasGaintag("nuyan_gaili"))  return true;
					    },
					    cardDiscardable(card, player, name) {
					        if (name == "phaseDiscard" && card.hasGaintag("nuyan_gaili")) return false;
					    },
					},
					onremove(player) {
					    player.removeGaintag("nuyan_gaili");
					},
					sub: true,
					sourceSkill: "nuyan_gaili",
				},
			},
		},
		nuyan_nanshanshehu: {//南山射虎
			nuyan_star: 1,
			enable: "phaseUse",
			usable: 2,
			marktext: "虎",
			intro: {
				name: "南山射虎",
				content: (storage) => `你本阶段对${get.translation(storage)}造成伤害时，你将牌堆中的一张装备牌置于你的一个空置装备栏内`,
				markcount: (storage) => storage?.length,
			},
			selectTarget: 1,
			filterTarget(card, player, target) {
				return player.canCompare(target) && player != target;
			},
			async content(event, trigger, player) {
				const { target } = event;
				let result = await player.chooseToCompare(target).forResult();
				if (result.bool) {
					if (player.hasSkill("nuyan_huhuan")) await player.removeSkills("nuyan_huhuan");
					else await player.draw(3);
					player.markAuto(event.name, target);
					player.when({ global: "phaseEnd" })
						.then(() => {
							delete player.storage.nuyan_nanshanshehu;
							player.unmarkSkill("nuyan_nanshanshehu");
						});
				}
			},
			ai: {
				order: 114,
				target(player, target) {
					let att = get.attitude(player, target);
					if (att < 0) return 5 - target.getCards("h");
					else if (player.hasSkill("nuyan_huhuan") && player.getCards("h").some(c => get.number(c) < 8)) return 3 - target.getCards("h");
					return -114;
				},
			},
			group: "nuyan_nanshanshehu_effect",
			subSkill: {
				effect: {
					sub: true,
					sourceSkill: "nuyan_nanshanshehu",
					charlotte: true,
					popup: false,
					forced: true,
					trigger: {
						source: "damageEnd",
					},
					filter(event, player) {
						if (!player.storage.nuyan_nanshanshehu?.includes(event.player)) return false;
						for (var i = 1; i < 6; i++) {
						    if (!player.getEquips(i).length) {
								return true;
							}
						}
					},
					getIndex: (event, player) => player.storage.nuyan_nanshanshehu?.filter(c => c == event.player).length,
					async content(event, trigger, player) {
						let list = [1, 2, 3, 4, 5];
						list.randomSort();
						for (let i of list) {
							if (player.hasEmptySlot(i)) {
							    var sub = "equip" + i,
							        card = get.cardPile(function (card) {
							            return get.subtype(card, false) == sub && !get.cardtag(card, "gifts") && player.canEquip(card);
							        });
							    if (card) {
							        player.$gain2(card);
							        game.delayx();
							        await player.equip(card);
							        break;
							    }
							}
						}
					},
				},
			},
		},
		nuyan_xijiufujiao: {//西氿缚蛟
			nuyan_star: 3,
			enable: "phaseUse",
			usable: 2,
			marktext: "蛟",
			intro: {
				name: "西氿缚蛟",
				content: (storage) => `你本阶段失去装备区的牌后，对${get.translation(storage)}造成2点伤害`,
				markcount: (storage) => storage?.length,
			},
			selectTarget: 1,
			filterTarget(card, player, target) {
				return player.canCompare(target) && player != target;
			},
			async content(event, trigger, player) {
				const { target } = event;
				let result = await player.chooseToCompare(target).forResult();
				if (result.bool) {
					if (player.hasSkill("nuyan_jiaohai")) await player.removeSkills("nuyan_jiaohai");
					else await player.draw(3);
					player.markAuto(event.name, target);
					player.when({ global: "phaseEnd" })
						.then(() => {
							delete player.storage.nuyan_xijiufujiao;
							player.unmarkSkill("nuyan_xijiufujiao");
						});
				}
			},
			ai: {
				order: 114,
				target(player, target) {
					let att = get.attitude(player, target);
					if (att < 0) return 6 - target.getCards("h");
					return -114;
				},
			},
			group: "nuyan_xijiufujiao_effect",
			subSkill: {
				effect: {
					sub: true,
					sourceSkill: "nuyan_xijiufujiao",
					charlotte: true,
					forced: true,
					trigger: {
					    player: "loseAfter",
					    global: ["equipAfter","addJudgeAfter","gainAfter","loseAsyncAfter","addToExpansionAfter"],
					},
					filter: (event, player) => player.storage.nuyan_xijiufujiao?.length,
					getIndex(event, player) {
					    const evt = event.getl(player);
					    if (evt && evt.player === player && evt.es) {
					        return evt.es.length;
					    }
					    return false;
					},
					async content(event, trigger, player) {
						for (let target of player.storage.nuyan_xijiufujiao) {
							await target.damage(2, player);
						}
					},
				},
			},
		},
		//怒焰谋诸葛亮
		nuyan_guanxing: {//观星
			init2(player, skill) {
				let next = game.createEvent(skill + "_init");
				next.player = player;
				next.setContent("emptyEvent");
			},
			forced: true,
			locked: true,
			derivation: "nuyan_kongcheng",
			trigger: {
				player: ["nuyan_guanxing_init", "phaseZhunbeiBegin", "gainMaxHpAfter","loseMaxHpAfter", "_ny_chooseStoneAfter"],
			},
			intro: {
				//感谢萌佬
			    markcount: "expansion",
			    mark(dialog, content, player) {
			        var content = player.getExpansions("nuyan_guanxing");
			        if (content && content.length) {
			            if (player == game.me || player.isUnderControl()) {
			                dialog.addAuto(content);
			            } else {
			                return "共有" + get.cnNumber(content.length) + "张“星”";
			            }
			        }
			    },
			    content(content, player) {
			        var content = player.getExpansions("nuyan_guanxing");
			        if (content && content.length) {
			            if (player == game.me || player.isUnderControl()) {
			                return get.translation(content);
			            }
			            return "共有" + get.cnNumber(content.length) + "张“星”";
			        }
			    },
			},
			update(player) {
				let skill = "nuyan_guanxing";
				if (player.getExpansions(skill).length <= player.maxHp) player.addAdditionalSkills(skill, "nuyan_kongcheng", true);
				else player.removeAdditionalSkills(skill);
			},
			async content(event, trigger, player) {
				if (event.triggername.endsWith("After")) {
					get.info(event.name).update(player);
					return;
				}
				const num = player.hp;
				let cards = get.cards(num);
				await game.cardsGotoOrdering(cards);
				let result = await player.chooseToMove(true, "〖观星〗：将任意张牌置于武将牌旁并将其余牌放回牌堆顶")
					.set("list", [["牌堆顶", cards], ["置入“星”的牌"]])
					.set("processAI", function (list) {
						let cards = list[0][1];
						return [[], cards];
					})
					.forResult();
				let moved = result.moved;
				moved[0].reverse();
				for (var i = 0; i < moved[0].length; i++) {
					ui.cardPile.insertBefore(moved[0][i], ui.cardPile.firstChild);
				}
				game.addCardKnower(moved[0], player);
				game.log(player, "将" + get.cnNumber(moved[0].length) + "张牌置于牌堆顶");
				game.updateRoundNumber();
				game.delayx();
				cards.removeArray(moved[1]);
				await player.addToExpansion(moved[1], "giveAuto").gaintag.add("nuyan_guanxing");
				get.info(event.name).update(player);
				await player.loseMaxHp();
				await player.drawTo(player.maxHp);
			},
		},
		nuyan_kongcheng: {//空城
			sourceSkill: "nuyan_guanxing",
			forced: true,
			locked: true,
			group: "kongcheng",
			trigger: {
				player: "damageBegin3",
			},
			priority: 11451,
			filter: (event) => event.num > 1,
			async content(event, trigger, player) {
				let result = await player.judge((card) => get.number(card) <= _status.event.player.hp).forResultCard();
				if (get.number(result) > player.hp) trigger.num = 1;
			},
		},
		nuyan_MouZhugeliang_xuanmoumiaoji: {//谋诸葛亮--玄谋妙计
			enable: "phaseUse",
			audio: "huoji",
			filter: (event, player) => player.getExpansions("nuyan_guanxing").length,
			nuyan_star: 1,
			popup: false,
			chooseButton: {
			    dialog(event, player) {
			        return ui.create.dialog("玄谋妙计<br>" + get.prompt2("nuyan_MouZhugeliang_xuanmoumiaoji"), player.getExpansions("nuyan_guanxing"), "hidden");
			    },
			    backup(links, player) {
			        return {
			            audio: "rehuoji",
						log: false,
			            filterTarget: (card, player, target) => player != target,
						selectTarget: 1,
			            filterCard: () => false,
			            selectCard: -1,
						card: links[0],
						delay: false,
			            content: lib.skill.nuyan_MouZhugeliang_xuanmoumiaoji.contentx,
						ai: {
							order: 11,
			            },
			        };
			    },
			    prompt:() => "请选择〖玄谋妙计〗的目标",
			},
			async contentx(event, trigger, player) {
				player.logSkill("nuyan_MouZhugeliang_xuanmoumiaoji");
				const card = lib.skill.nuyan_MouZhugeliang_xuanmoumiaoji_backup.card;
				await player.loseToDiscardpile(card);
				const { target } = event,
					skill = "nuyan_yinren";
				get.info(skill).update(player);
				await player.draw();
				let result = await lib.skill.nuyan_mouYi.content(player, target, "nuyan_mou_zhugeliang");
				if (result) {
					await player.draw();
					if (!target.isIn()) return;
					target.addMark("nuyan_dongruoguanhuo_effect", player.hp);
					target.when({ global: "roundEnd" })
						.then(() => player.clearMark("nuyan_dongruoguanhuo_effect"));
				}
			},
			check(target) {
				let { player } = get.event();
				if (get.attitude(player, target) < 0) return 114514 - target.hp;
				return -114;
			},
			ai: {
				order: 11,
				combo: "nuyan_guanxing",
			},
		},
		nuyan_dongruoguanhuo: {//洞若观火
			forced: true,
			locked: true,
			nuyan_star: 3,
			trigger: {
				global: "roundStart",
			},
			marktext: "洞",
			intro: {
				name: "洞若观火",
				mark(dialog, storage, player) {
				    if (storage?.length) {
						dialog.addText("洞若观火");
				        if (player == game.me || player.isUnderControl()) {
							dialog.addText("记录的牌名（其他角色不可见）：");
							let content = storage.map(item => [get.type(item), "", item]);
				            dialog.addAuto([content, "vcard"]);
							dialog.addText("本轮内，你使用这些牌名的普通锦囊牌无距离限制且无法被【无懈可击】响应；当有“彀”标记的角色使用或打出这些牌名的牌时，令此牌无效，若不为基本牌，移去其一枚“彀”标记");
				        } else {
				            return "共记录了" + get.cnNumber(storage.length) + "张牌名<br>本轮内，" + get.translation(player) + "使用这些牌名的普通锦囊牌无距离限制且无法被【无懈可击】响应；当有“彀”标记的角色使用或打出这些牌名的牌时，令此牌无效，若不为基本牌，移去其一枚“彀”标记";
				        }
				    }
				},
				content(storage, player) {
				    if (storage?.length) {
				        if (player == game.me || player.isUnderControl()) {
				            return "记录的牌名（其他角色不可见）：<br>" + get.translation(storage) + "<br>本轮内，你使用这些牌名的普通锦囊牌无距离限制且无法被【无懈可击】响应；当有“彀”标记的角色使用或打出这些牌名的牌时，令此牌无效，若不为基本牌，移去其一枚“彀”标记";
				        }
				        return "共记录了" + get.cnNumber(storage.length) + "张牌名<br>本轮内，" + get.translation(player) + "使用这些牌名的普通锦囊牌无距离限制且无法被【无懈可击】响应；当有“彀”标记的角色使用或打出这些牌名的牌时，令此牌无效，若不为基本牌，移去其一枚“彀”标记";
				    }
				},
			},
			async content(event, trigger, player) {
				delete player.storage[event.name];
				player.unmarkSkill(event.name);
				let cardList = lib.inpile.slice();
				//cardList.addArray(lib.cardPack.mode_derivation);
				cardList = cardList.filter((name) => ["trick", "basic"].includes(get.type(name, "trick")));
				const str = `###洞若观火###<div class="text center">选择至多${get.cnNumber(player.hp + 1)}个基本牌或锦囊牌的牌名；本轮内，你使用这些牌名的普通锦囊牌无距离限制且无法被【无懈可击】响应；当有“彀”标记的角色使用或打出这些牌名的牌时，令此牌无效，若不为基本牌，移去其一枚“彀”标记</div>`;
				let result = await player.chooseButton([str, [cardList, "vcard"]], [1, player.hp + 1])
					.set("ai", button => get.player().getUseValue({ name: button.link[2] }))
					.forResult();
				if (result.bool) {
					player.storage[event.name] = result.links.map(i => i[2]);
					player.markSkill(event.name);
				}
			},
			group: "nuyan_dongruoguanhuo_effect",
			subSkill: {
				effect: {
					charlotte: true,
					sub: true,
					sourceSkill: "nuyan_dongruoguanhuo",
					forced: true,
					marktext: "彀",
					intro: {
						mark: (storage) => `共有${storage}枚标记`,
					},
					trigger: {
						global: "useCard",
					},
					mod: {
						targetInRange(card, player, target, now) {
							if (get.type(card) == "trick" && player.storage["nuyan_dongruoguanhuo"]?.includes(card.name)) return true;
						},
					},
					filter(event, player) {
						if (!event.player.hasMark("nuyan_dongruoguanhuo_effect") && event.player != player) return false;
						if (event.player == player && get.type(event.card) !== "trick") return false; 
						return player.storage["nuyan_dongruoguanhuo"]?.includes(event.card.name);
					},
					content() {
						if (trigger.player != player) {
							trigger.all_excluded = true;
							if (!get.type(trigger.card) == "basic") trigger.player.removeMark(event.name);
						} else {
							trigger.nowuxie = true;
						}
					},
				},
			},
		},
		//怒焰起张角
		nuyan_jinglei: {//惊雷
			trigger: {
				global: "damageEnd",
			},
			popup: false,
			audio: "leiji",
			filter(event, player) {
				if (!event.source) return false;
				return event.source.hp > event.player.hp || event.source.countCards("h") > event.player.countCards("h");
			},
			content() {
				player.logSkill(event.name, trigger.source);
				trigger.source.damage("nosource", "thunder");
			},
		},
		nuyan_taipingyaoshu: {//太平要术
			forced: true,
			locked: true,
			audio: "guidao",
			nuyan_star: 1,
			trigger: {
				player: "damageBegin4",
				global: ["equipAfter","addJudgeAfter","loseAfter","gainAfter","loseAsyncAfter","addToExpansionAfter"],
			},
			filter(event, player) {
				if (event.name == "damage") return event.hasNature();
				return event.getl(event.player)?.hs?.length && event.player.isMinHandcard() && event.player != _status.currentPhase;
			},
			getIndex(event, player) {
				if (event.name == "damage") return 1;
				else return event.getl(event.player)?.hs?.length;
			},
			async content(event, trigger, player) {
				if (trigger.name == "damage") {
					trigger.cancel();
					return;
				}
				const limit = Number(lib.config.extension_怒焰武将_hujiaSet);
				player.changeHujia(1, null ,limit);
			},
		},
		nuyan_huangtiandangli: {//黄天当立
			nuyan_star: 3,
			audio: "tianjie",
			init2(player, skill) {
				const limit = Number(lib.config.extension_怒焰武将_hujiaSet);
				player.changeHujia(36, null ,limit);
			},
			trigger: {
				player: "changeHujiaAfter",
				global: "damageBefore",
			},
			filter(event, player) {
				if (event.name == "damage") return event.card?.storage?.nuyan_huangtiandangli;
				return event.num < 0;
			},
			getIndex(event, player) {
				if (event.name == "damage") return 1;
				else return Math.abs(event.num);
			},
			forced: true,
			async content(event, trigger, player) {
				if (trigger.name == "damage") {
					game.setNature(trigger, "thunder");
					return;
				}
				await player.chooseUseTarget({
					name: "sha",
					storage: {
						nuyan_huangtiandangli: true,
						_useCardQianghua: true,
					},
				}, get.prompt2(event.name), "nodistance", false)
					.set("oncard", () => {
						get.event().customArgs.default.customSource = {
							isDead: () => true,
						};
					});
			},
		},
	},
	characterTitle: {//武将称号
	},
	characterIntro: {//武将简介    
	},
	characterReplace: {//可切换武将
	},
	translate: {
	    nyKill: "怒焰武将",
	    nyKill_wei: "魏势力武将",
	    nyKill_shu: "蜀势力武将",
	    nyKill_wu: "吴势力武将",
	    nyKill_qun: "群势力武将",
	    nyKill_shen: "神势力武将",
		
		jinGong: "进攻",
		fangYu: "防御",
		moPai: "摸牌",
		nuQi: "怒气",
		zhanFa: "战法",
		zhuanShu: "专属",
		"_ny_cuihui":"摧毁",
		"_ny_yinni":"隐匿",
		"_ny_yinni_info":"隐匿是一种特殊的状态，若你处于隐匿状态，当你翻面时，你翻至正面且你无法成为其他角色使用【杀】或单体普通锦囊牌的目标<br>当你造成/受到伤害时，你令此伤害翻面/防止之并解除隐匿状态",
		"_ny_yanzoudiaoshi_gongdiao": "宫调",
		"_ny_yanzoudiaoshi_gongdiao_info": "锁定技，你使用基本牌（除【闪】外）的效果+1",
		"_ny_yanzoudiaoshi_shangdiao": "商调",
		"_ny_yanzoudiaoshi_shangdiao_info":"锁定技，你使用单体普通锦囊牌（除【无懈可击】外）的效果+1",
		"_ny_yanzoudiaoshi_jiaodiao":"角调",
		"_ny_yanzoudiaoshi_jiaodiao_info":"锁定技，你成为其他角色使用牌的目标时，你随机获得其1张手牌",
		"_ny_yanzoudiaoshi_zhidiao":"徵调",
		"_ny_yanzoudiaoshi_zhidiao_info":"锁定技，当你受到不是牌造成的致命伤害时，防止之",
		"_ny_yanzoudiaoshi_yudiao":"羽调",
		"_ny_yanzoudiaoshi_yudiao_info":"锁定技，当你失去大于1点的体力时，将数值改为1点",
		nuyan_mouYi: "谋奕",
		
		nuyan_podan:"破胆",
		nuyan_podan_info:"锁定技，当你不因【酒】回复体力时，取消之。",
		
		"_useCardQianghua":"怒焰-使用牌强化",
		//"_useCardQianghua_info":`消耗1点${zhonghuiFunction.poptip("怒气")}以${zhonghuiFunction.poptip("强化牌", null, null, null, "强化此牌")}`,
		//translate相关要适配旧版比较难，后续再弄
		"_useCardQianghua_info":"消耗1点怒气以强化你使用的牌",
		
		//进攻符石
		"_ny_jinGong_duopo": "夺魄",
		"_ny_jinGong_duopo_info": "锁定技，你造成伤害后回复1点体力。",
		"_ny_jinGong_jinghong": "惊鸿",
		"_ny_jinGong_jinghong_info": "锁定技，你使用非强化【杀】造成伤害时，此伤害+1",
		"_ny_jinGong_zhenshe": "震慑",
		"_ny_jinGong_zhenshe_info": "锁定技，当你使用伤害牌指定唯一目标后，其失去3点怒气",
		"_ny_jinGong_yuwei":"余威",
		"_ny_jinGong_yuwei_info" :"锁定技，每局每张牌限一次，当你使用普通锦囊牌进入弃牌堆时，你获得之",
		"_ny_jinGong_fulian": "符炼",
		"_ny_jinGong_fulian_info": "锁定技，当你因伤害锦囊牌造成伤害时，此伤害+1",
		"_ny_jinGong_youlong":"游龙",
		"_ny_jinGong_youlong_info":"锁定技，当你使用强化【杀】造成伤害时，此伤害+1",
		"_ny_jinGong_gongjian":"攻坚",
		"_ny_jinGong_gongjian_info":"锁定技，当你使用【杀】被【闪】抵消后，你令目标角色失去1点体力",
		"_ny_jinGong_shenmou":"深谋",
		"_ny_jinGong_shenmou_info":"锁定技，当你使用单体普通锦囊牌时，你可令此牌无法被响应",
		"_ny_jinGong_lingjian":"灵剑",
		"_ny_jinGong_lingjian_info":"锁定技，当你使用【杀】指定目标后，你随机获得其一张装备牌。",
		"_ny_jinGong_qianggong":"强攻",
		"_ny_jinGong_qianggong_info":"锁定技，当你使用【杀】指定目标后，你令其失去2点怒气",
		"_ny_jinGong_tianfa":"天罚",
		"_ny_jinGong_tianfa_info":"锁定技，你即将对其他角色造成伤害时，其无法获得怒气",
		"_ny_jinGong_fenyong":"奋勇",
		"_ny_jinGong_fenyong_info":"锁定技，若你已受伤，你使用的基本牌效果+1。",
		
		//防御符石
		"_ny_fangYu_yuanbing": "援兵",
		"_ny_fangYu_yuanbing_info": "锁定技，当你受到伤害或失去体力时，你回复1点体力。",
		"_ny_fangYu_dunzhen": "盾阵",
		"_ny_fangYu_dunzhen_info": "你可以将一张装备牌当做【无懈可击】使用",
		"_ny_fangYu_xiongbing":"凶兵",
		"_ny_fangYu_xiongbing_info":"锁定技，当你受到伤害后，你随机弃置伤害来源2X张牌(X为伤害值)，然后若其装备区里有牌，随机将其中一张移至你的装备区。",
		"_ny_fangYu_lingzhen":"灵阵",
		"_ny_fangYu_lingzhen_info":"你可以将一张装备牌当作强化【闪】使用或打出",
		"_ny_fangYu_Firstlingzhen":"初版灵阵",
		"_ny_fangYu_Firstlingzhen_info":"你可以将一张装备牌当作【闪】使用或打出，若为普通使用，你获得1点怒气。",
		"_ny_fangYu_yingyong":"英勇",
		"_ny_fangYu_yingyong_info":"当你处于濒死状态时，你可将一张装备牌当作【酒】使用。",
		"_ny_fangYu_shenyou":"神佑",
		"_ny_fangYu_shenyou_info":"锁定技，当你受到来源为锦囊牌的伤害或失去体力时，防止之。",
		"_ny_fangYu_miaosuan":"妙算",
		"_ny_fangYu_miaosuan_info":"当你于回合外成为单体普通锦囊牌的目标时，你可于此牌结算过程中视为使用【无懈可击】。",
		"_ny_fangYu_Firstmiaosuan":"初版妙算",
		"_ny_fangYu_Firstmiaosuan_info":"当你于回合外成为单体普通锦囊牌的目标时，你可于此牌结算过程中消耗1点怒气并视为使用强化【无懈可击】。",
		"_ny_fangYu_qingling":"轻灵",
		"_ny_fangYu_qingling_info":"锁定技，当你失去大于1点体力时，数值-1。",
		"_ny_fangYu_sishou":"死守",
		"_ny_fangYu_sishou_info":"锁定技，你的手牌上限+X（X为6+你的已损失体力值）。",
		"_ny_fangYu_tiejia":"铁甲",
		"_ny_fangYu_tiejia_info":"锁定技，当你受到大于1点的伤害时，此伤害-1。",
		"_ny_fangYu_jianren":"坚韧",
		"_ny_fangYu_jianren_info":"锁定技，当你受到伤害后，若你体力值为全场最小，你可以回复1点体力",
		
		//摸牌符石
		"_ny_moPai_shengji": "生机",
		"_ny_moPai_shengji_info": "锁定技，当你体力值变化时，你摸X张牌。（X为变化值，至多为5）",
		"_ny_moPai_cangfeng": "藏锋",
		"_ny_moPai_cangfeng_info": "锁定技，每回合结束时，你摸X张牌（X为你手牌中的类别数）",
		"_ny_moPai_junzhen":"军阵",
		"_ny_moPai_junzhen_info":"锁定技，你摸牌阶段摸牌数加存活角色数。",
		"_ny_moPai_zhangu":"战鼓",
		"_ny_moPai_zhangu_info":"锁定技，当你使用伤害牌指定目标后，你摸一张牌，若目标数大于1，改为摸两张牌。",
		"_ny_moPai_youdi":"诱敌",
		"_ny_moPai_youdi_info":"锁定技，当你的怒气值变化1点时，你摸两张牌。",
		"_ny_moPai_xuncha":"巡查",
		"_ny_moPai_xuncha_info":"锁定技，当你失去一张手牌后，若你手牌数为全场最少，你摸两张牌。",
		"_ny_moPai_wuku":"武库",
		"_ny_moPai_wuku_info":"锁定技，当其他角色的装备牌进入弃牌堆后，你获得之并摸两张牌。",
		"_ny_moPai_xirao":"袭扰",
		"_ny_moPai_xirao_info":"锁定技，其他角色获得怒气时，你摸获得值张牌。",
		"_ny_moPai_baoneng":"爆能",
		"_ny_moPai_baoneng_info":"锁定技，你怒气溢出1点时，摸两张牌。",
		"_ny_moPai_huxiao":"虎啸",
		"_ny_moPai_huxiao_info":"锁定技，其他角色失去怒气时，你摸获得值张牌。",
		"_ny_moPai_yuling":"御灵",
		"_ny_moPai_yuling_info":"锁定技，回合结束时，若你已受伤，你摸两张牌",
		"_ny_moPai_qingshen":"轻身",
		"_ny_moPai_qingshen_info":"锁定技，摸牌阶段，若你的怒气值未达到上限，你摸两张牌",
		
		//怒气符石
		"_ny_nuQi_xingchi": "星驰",
		"_ny_nuQi_xingchi_info": "锁定技，当你成为其他角色使用基本牌或单体普通锦囊牌的目标后，你获得2点怒气",
		"_ny_nuQi_qimou": "奇谋",
		"_ny_nuQi_qimou_info": "锁定技，当你于回合外使用【无懈可击】时，你获得2点怒气并令当前回合角色随机弃置一张牌。",
		"_ny_nuQi_shayi":"杀意",
		"_ny_nuQi_shayi_info":"锁定技，当你使用【杀】指定目标后，若目标体力值不为全场（唯一）最小，你获得2点怒气，否则你获得1点怒气。",
		"_ny_nuQi_fenfa":"奋发",
		"_ny_nuQi_fenfa_info":"锁定技，当你的体力值减少后，你获得1点怒气，且若你体力值不大于4，你回复1点体力",
		"_ny_nuQi_wuling":"武灵",
		"_ny_nuQi_wuling_info":"锁定技，当一张装备牌进入或离开你的装备区时，你获得2点怒气。",
		"_ny_nuQi_tongchou":"同仇",
		"_ny_nuQi_tongchou_info":"锁定技，当一名角色受到伤害或失去体力时，你可以获得1点怒气并摸一张牌。",
		"_ny_nuQi_Firsttongchou":"初版同仇",
		"_ny_nuQi_Firsttongchou_info":"锁定技，当一名角色体力值变化时，若其体力值不大于4，你可以获得1点怒气并摸一张牌。",
		"_ny_nuQi_guimou":"鬼谋",
		"_ny_nuQi_guimou_info":"锁定技，当你使用锦囊牌指定目标后，若目标数大于1，你获得2点怒气，否则你获得1点怒气。",
		"_ny_nuQi_zhenfen":"振奋",
		"_ny_nuQi_zhenfen_info":"锁定技，当你失去怒气后，若你的怒气值不大于1，你获得2点怒气",
		"_ny_nuQi_aibing":"哀兵",
		"_ny_nuQi_aibing_info":"锁定技，回合开始时，若你已受伤，你获得等同于你已损失体力值的怒气。",
		"_ny_nuQi_jingbing":"精兵",
		"_ny_nuQi_jingbing_info":"锁定技，回合结束时，若你装备区有牌，你获得2点怒气。",
		"_ny_nuQi_lingyuan":"灵渊",
		"_ny_nuQi_lingyuan_info":"锁定技，回合开始时，若你怒气值小于2，你获得2点怒气。",
		"_ny_nuQi_gujun":"孤军",
		"_ny_nuQi_gujun_info":"锁定技，回合结束时，你获得等同于你本回合弃牌阶段弃牌数的怒气。",
		
		//战法
		"_ny_zhanFa_lvedigongcheng": "掠地攻城",
		"_ny_zhanFa_lvedigongcheng_info": "准备阶段，你可以对一名其他角色造成1-3点随机伤害，然后令其随机交给你X张手牌，其每少交1张，便受到你造成的1点伤害（X为你的攻击范围+1）",
		"_ny_zhanFa_xushidaifa": "蓄势待发",
		"_ny_zhanFa_xushidaifa_info": "结束阶段，你额外执行一个摸牌阶段，若你本回合造成伤害小于等于4,则你再额外执行一个出牌阶段。",
		"_ny_zhanFa_anzhongtuxi":"暗中突袭",
		"_ny_zhanFa_anzhongtuxi_info":"其他角色准备阶段，你获得1点怒气，然后，你可以令其随机弃置两张牌并失去1点怒气。",
		"_ny_zhanFa_Firstpozhencuijian":"初版破阵摧坚",
		"_ny_zhanFa_Firstpozhencuijian_info":"当你使用单体普通锦囊牌指定目标后，你可令此牌效果+2且无法被响应，然后，每回合限一次，此牌结算结束后，你可弃置目标随机一种花色的所有手牌，若其手牌仍大于你，你再弃置其另一种花色的所有手牌。",
		"_ny_zhanFa_feiyangbahu":"飞扬跋扈",
		"_ny_zhanFa_feiyangbahu_info":"判定/出牌阶段开始时，你弃置你判定区随机一张牌/摸两张牌且本阶段使用【杀】次数+1。",
		"_ny_zhanFa_leitingnuhou":"雷霆怒吼",
		get "_ny_zhanFa_leitingnuhou_info" () {
			let str = "准备阶段，你可以令一名其他角色弃置两张装备牌并获得〖破胆〗直至回合结束。<br><br><b>" + this.nuyan_podan + "</b><br>" + this.nuyan_podan_info;
			return str;
		},
		"_ny_zhanFa_gexuqipao":"割须弃袍",
		"_ny_zhanFa_gexuqipao_info":"当你于回合外进入濒死状态时，你摸3张牌，然后，每轮限一次，你可以弃置一张♥手牌并令你本回合无法成为其他角色使用黑色伤害牌的目标。",
		"_ny_zhanFa_dandadudou":"单打独斗",
		"_ny_zhanFa_dandadudou_info":"回合开始时，你摸两张牌，然后若存活角色数不大于2，你令所有角色本回合造成或受到伤害+1。",
		"_ny_zhanFa_cuichengbazhai":"摧城拔寨",
		"_ny_zhanFa_cuichengbazhai_info":"当你使用【杀】指定一名角色为目标时，你可令此牌伤害+1且无法被响应，然后，每回合每名角色限一次，你可摧毁其等同于2倍伤害值的手牌。",
		"_ny_zhanFa_longzhenghudou":"龙争虎斗",
		"_ny_zhanFa_longzhenghudou_info":"你拼点时亮出的装备牌点数视为K，结算结束后你可令目标无法使用或打出牌且受伤不获得怒气直至其回合结束。",
		"_ny_zhanFa_yanxingjunfa":"严刑峻法",
		"_ny_zhanFa_yanxingjunfa_info":"你令其他角色进入濒死状态时，你获得1点怒气，然后你可以令其选择一项：1.翻面；2.失去1点怒气且下次受到伤害+1。",
		"_ny_zhanFa_libingmoma":"厉兵秣马",
		"_ny_zhanFa_libingmoma_info":"每轮开始时，你从牌堆或弃牌堆中获得X张装备牌，然后你令本轮其他角色计算与你的距离+X（X为存活角色数-1）",
		"_ny_zhanFa_yetandiying":"夜探敌营",
		"_ny_zhanFa_yetandiying_info":"其他角色的准备阶段，你可以观看其手牌并获得其中一张，然后，你令其本回合对你造成大于1点的伤害时，伤害值-1",
		"_ny_zhanFa_bixujishi":"避虚击实",
		"_ny_zhanFa_bixujishi_info":"当你的体力上限变化1点时，你摸3张牌，然后，若本次你获得/失去体力上限，你造成伤害+/失去体力-1直至你的下回合开始。",
		"_ny_zhanFa_bainiaochaofeng":"百鸟朝凤",
		"_ny_zhanFa_bainiaochaofeng_info":"出牌阶段开始时，你可以视为强化使用一张普通锦囊牌，此牌结算结束后，你令所有其他角色交给你一张同名牌，否则其失去2点体力",
		"_ny_zhanFa_yihuajiemu":"移花接木",
		"_ny_zhanFa_yihuajiemu_info":"其他角色的出牌阶段开始时，你摸一张牌，然后，你可以展示至多5张手牌，你随机弃置其等量张牌，其获得你展示的牌，你摸两张牌",
		"_ny_zhanFa_zhengzhengrishang":"蒸蒸日上",
		"_ny_zhanFa_zhengzhengrishang_info":"准备阶段，你摸X张牌并令你本回合使用红色【杀】无距离限制，黑色【杀】无次数限制。（X为本技能发动次数）",
		"_ny_zhanFa_Firsttongqiangtiebi":"初版铜墙铁壁",
		"_ny_zhanFa_Firsttongqiangtiebi_info":"每回合开始时，你获得4点护甲；当你失去体力时，若你的护甲值大于体力上限，你失去1点护甲，防止之。",
		"_ny_zhanFa_sheguoyouzui":"赦过宥罪",
		"_ny_zhanFa_sheguoyouzui_info":"准备阶段，你可以令一名角色回复1点体力并复原武将牌，然后其造成的伤害-1直至其回合结束",
		"_ny_zhanFa_yixinghuandou":"移星换斗",
		"_ny_zhanFa_yixinghuandou_info":"回合开始时，你可以令两名有手牌的角色随机交换至多7张手牌，然后，你可以令其交换技能符石。",
		"_ny_zhanFa_shehunduopo":"摄魂夺魄",
		"_ny_zhanFa_shehunduopo_info":"当你获得其他角色的手牌后，你可以获得其1点怒气，然后，每回合限一次，若你本次获得的牌数>3，其非锁定技失效直至其回合结束。",
		"_ny_zhanFa_jiuhanzhanyong":"酒酣战勇",
		"_ny_zhanFa_jiuhanzhanyong_info":"出牌阶段开始时，你视为使用一张无次数限制的【酒】并从牌堆或弃牌堆中获得不同牌名的伤害牌各一张。",
		"_ny_zhanFa_gubenguiyuan":"固本归元",
		"_ny_zhanFa_gubenguiyuan_info":"当你受到属性伤害后，若你的手牌数小于你的体力上限，你摸一张牌，然后，你本回合内造成的属性伤害+1（不可叠加）。",
		"_ny_zhanFa_pozhencuijian":"破阵摧坚",
		"_ny_zhanFa_pozhencuijian_info":"当你使用单体普通锦囊牌指定目标后，你可令此牌效果+2且无法被响应，然后，每回合限一次，此牌结算结束后，你可摧毁目标的半数手牌（向上取整）。",
		"_ny_zhanFa_zhulianbihe":"珠联璧合",
		"_ny_zhanFa_zhulianbihe_info":"当你使用一张与你使用的上一张牌点数相等的转化牌时，你从牌堆或弃牌堆中获得一张点数为此牌点数+1的牌，然后，若此牌为伤害牌，此牌无法被响应。",
		"_ny_zhanFa_shirupozhu":"势如破竹",
		"_ny_zhanFa_shirupozhu_info":"你使用群体锦囊牌造成的伤害视为火焰伤害，若此牌为强化使用，则你获得1点怒气并摧毁目标等同于此牌伤害值的手牌。",
		//专属符石
		"_ny_zhuanShu_Firstqinglongshi":"初版青龙石",
		"_ny_zhuanShu_Firstqinglongshi_info":"当一名角色进入濒死状态时，若其怒气值大于0，你可令其将体力值回复至X点并失去所有怒气，然后，若其不为你，你受到X点无来源伤害。（X为其怒气值）",
		"_ny_zhuanShu_qinglongshi":"青龙石",
		"_ny_zhuanShu_qinglongshi_info":"当一名角色进入濒死状态时，你可令其将体力值回复至1点，然后，若其不为你，你受到1点无来源伤害。",
		"_ny_zhuanShu_bianhua":"彼岸花",
		"_ny_zhuanShu_bianhua_info":"当你因“筹策”判定时，你可以打出一张手牌代替之。",
		"_ny_zhuanShu_wushaungzhanji":"无双战戟",
		"_ny_zhuanShu_wushaungzhanji_info":"锁定技，摸牌阶段，你多摸2张牌。",
		//后续加入新版
		"_ny_zhuanShu_Firstyinyueqiang":"初版银月枪",
		"_ny_zhuanShu_Firstyinyueqiang_info":"当你于回合外失去一张牌名不为【杀】的牌时，你可以视为使用一张【杀】。",
		"_ny_zhuanShu_wanminshu":"万民书",
		"_ny_zhuanShu_wanminshu_info":"锁定技，当你因”勤政“一次性获得至少两张牌后，你本局游戏使用【杀】的次数+1。",
		"_ny_zhuanShu_Firstfenghuashan":"初版风华扇",
		"_ny_zhuanShu_Firstfenghuashan_info":"当你受到伤害后，你可以弃置至多3张牌并令伤害来源失去等量点体力。",
		"_ny_zhuanShu_fenghuashan":"风华扇",
		"_ny_zhuanShu_fenghuashan_info":"当你体力减少后，你可以弃置至多2张牌并令一名其他角色失去等量点体力。",
		"_ny_zhuanShu_liaoyuan":"燎原•神",
		"_ny_zhuanShu_liaoyuan_info":"锁定技，你的攻击范围+3，且若仍小于4，视为4；你使用红色伤害牌指定目标后，摸X张牌并获得X点怒气（X为此牌目标数+1）。",
		"_ny_zhuanShu_Firstchixue":"初版赤血•神",
		"_ny_zhuanShu_Firstchixue_info":"你的攻击范围+1，且若仍小于2，视为2；你受到/造成伤害后，可以令一名角色回复X点体力或对其造成X点伤害（X为本次伤害值且不大于2）",
		"_ny_zhuanShu_chixue":"赤血•神",
		"_ny_zhuanShu_chixue_info":"你的攻击范围+1，且若仍小于2，视为2；你造成伤害后/体力减少时，可以令一名角色回复X点体力或令其失去X点伤害（X为本次伤害值且不大于2）。",
		"_ny_zhuanShu_yongan":"永安",
		"_ny_zhuanShu_yongan_info":"你可以令其他角色回合内的第X个阶段改为摸牌阶段（X为你的怒气值+1）。",
		"_ny_zhuanShu_polu":"破虏",
		"_ny_zhuanShu_polu_info":"锁定技，你使用【决斗】指定唯一目标后，你须选择一项：1.令此牌无视防具且无法被响应：2.令此牌无视防御符石且造成的伤害视为失去体力。",
		"_ny_zhuanShu_jianbi":"坚壁",
		"_ny_zhuanShu_jianbi_info":"其他角色回合结束时，若你的体力值不为全场唯一最少，你可以选择一项：1.令其减少1点体力上限：2.令你增加1点体力上限并回复1点体力。",
		"_ny_zhuanShu_Firstgudingdao":"初版古锭刀•神",
		"_ny_zhuanShu_Firstgudingdao_info":"锁定技，你的攻击范围+4，且若仍小于5，视为5；你使用【杀】无视其防御符石且无法被响应；此【杀】造成伤害时，若目标没有手牌，则此伤害+1。",
		"_ny_zhuanShu_gudingdao":"古锭刀•神",
		"_ny_zhuanShu_gudingdao_info":"锁定技，你的攻击范围+4，且若仍小于5，视为5；你使用伤害牌无视其防御符石且无法被响应；此牌造成伤害时，若目标没有手牌，则此伤害+1。",
		"_ny_zhuanShu_dujiu":"毒鸠",
		"_ny_zhuanShu_dujiu_info":"锁定技，你于出牌阶段内第二次发动〖焚城〗时不消耗怒气。",
		"_ny_zhuanShu_longyuan": "龙渊",
		"_ny_zhuanShu_longyuan_info": "锁定技，你发动〖潜龙〗时，额外展示2张牌，然后你获得4点护甲。",
		"_ny_zhuanShu_zhuisi": "追思",
		"_ny_zhuanShu_zhuisi_info": "每个回合开始时，你观看3名未登场的女性角色中并可以获得其中1个技能直至回合结束。",
		"_ny_zhuanShu_kongqueling":"孔雀翎",
		"_ny_zhuanShu_kongqueling_info":"锁定技，你发动〖弘援〗时，摸牌量+2",
		"_ny_zhuanShu_luoying":"落英",
		"_ny_zhuanShu_luoying_info":"若你处于濒死状态，你可以将X张黑色牌当做【酒】使用；当你脱离濒死状态后，你对当前回合角色造成X点伤害(X为本回合你发动此技能次数+1)",
		"_ny_zhuanShu_shendaoling": "神道铃",
		"_ny_zhuanShu_shendaoling_info":"锁定技，你重铸或更改亮出的化身牌后，你摸一张牌并获得一张“化身”牌。",
		"_ny_zhuanShu_fengqiqin":"凤栖琴",
		"_ny_zhuanShu_fengqiqin_info":"你体力减少1点后，可以从牌堆或弃牌堆中获得1张点数不大于6的牌，然后你回复X点体力(X为此牌点数的一半，向上取整)。",
		"_ny_zhuanShu_keqingdi":"柯琴笛",
		get "_ny_zhuanShu_keqingdi_info" () {
			let info = "准备阶段或你登场时，你可以令一名角色获得〖忘忧〗直至其下回合开始;你因〖行云流水〗觉醒后，你升级此符石<br><br><b>" + this.nuyan_wangyou + "</b><br>" + this.nuyan_wangyou_info + "<br><br><b>升级〖柯琴笛〗</b><br>" + "当一名角色失去体力时，你可以防止之并令其获得〖忘机〗直至其下回合结束<br><br><b>" + this.nuyan_wangji + "</b><br>" + this.nuyan_wangji_info;
			delete this["_ny_zhuanShu_keqingdi_info"];
			this["_ny_zhuanShu_keqingdi_info"] = info;
			return info;
		},
		nuyan_wangyou: "忘忧",
		nuyan_wangyou_info:"锁定技，你装备区内的牌失效；你废除你的判定区；其他角色计算与你的距离+X（X为你的体力值）",
		nuyan_wangji: "忘机",
		nuyan_wangji_info: "锁定技，你装备区内的牌失效；你的所有其他技能（使命技，觉醒技除外）失效；你废除你的判定区；其他角色计算与你的距离+X（X为你的体力上限）",
		"_ny_zhuanShu_hanshuang":"寒霜",
		"_ny_zhuanShu_hanshuang_info":"其他角色的出牌阶段开始时，你可以弃置一张装备牌，令其本阶段无法使用或打出与此牌颜色相同的牌。",
		"_ny_zhuanShu_fengmingjian":"凤鸣剑",
		"_ny_zhuanShu_fengmingjian_info":"锁定技，当一名角色因“凌人”展示手牌后，其将手牌弃置至随机每种类型的牌各一张。",
		"_ny_zhuanShu_yingzhi": "鹰鸷",
		"_ny_zhuanShu_yingzhi_info": "当你翻面时，你可以令一名座次先于你或体力值大于你的其他角色选择一项：1.其翻面；2.其技能符石失效直至其回合结束",
		"_ny_zhuanShu_taipingjin": "太平巾",
		"_ny_zhuanShu_taipingjin_info": "锁定技，当你发动〖幻惑众心〗时，若你与其使用的牌点数与花色均不同，则你随机获得其两张牌。",
		//后续企业级理解（
		"_ny_zhuanShu_Firstsizhao": "初版思召",
		"_ny_zhuanShu_Firstsizhao_info": "锁定技，你于出牌阶段使用【杀】结算后，令你本回合使用与此牌花色相同的手牌发动〖乱击〗时，所需牌数改为1。",
		"_ny_zhuanShu_sizhao":"思召",
		"_ny_zhuanShu_sizhao_info":"锁定技，你于出牌阶段使用【杀】结算后，令你本回合使用与此牌花色相同的手牌发动〖乱击〗时，摸1张牌。",
		"_ny_zhuanShu_longlin": "龙鳞",
		"_ny_zhuanShu_longlin_info": "锁定技，你与已受伤角色拼点时，摸1张牌并令其拼点牌的点数X（X为其已损失体力值）",
		"_ny_zhuanShu_bazhen": "八阵",
		"_ny_zhuanShu_bazhen_info": "每个回合开始时，你可以令一名角色获得1个阵法效果直至本回合结束（每种阵法每局限1次）<br>●天覆阵：令其怒气上限-1，然后其本回合受到伤害后无法获得怒气；<br>●地载阵：令其体力上限+1，然后其本回合受到伤害时，数值-1；<br>●风扬阵：令其失去2点怒气，然后其本回合怒气变化后，随机摧毁1张手牌；<br>●云垂阵：令其回复1点体力，然后其本回合体力变化后，摸1张牌；<br>●龙飞阵：令其摸2张牌，然后其本回合使用强化【杀】不计入限制次数；<br>●虎翼阵：令其摸2张牌，然后其本回合使用伤害牌造成伤害时，数值+1；<br>●鸟翔阵：对其造成1点伤害，然后其本回合受到大于2点的伤害时，数值+1；<br>●蛇蟠阵：令其流失1点体力，然后其本回合流失体力时，数值+1；",
		"_ny_zhuanShu_huangjin": "黄巾",
		"_ny_zhuanShu_huangjin_info": "一名角色受到致命伤害时，你可以弃置2张手牌，防止此伤害，若其不为你，则其摸2张牌。",
		
		//武将
		nuyan_caorui: "曹叡",
		nuyan_xizhicai: "戏志才",
		nuyan_jie_ganning: "界甘宁",
		nuyan_First_xusheng: "徐盛",
		nuyan_jie_sunjian: "界孙坚",
		nuyan_jie_weiyan: "界魏延",
		nuyan_First_lvlingqi: "吕玲绮",
		nuyan_jieFirst_zhangchunhua: "界张春华",
		nuyan_jushou: "沮授",
		nuyan_jieFirst_diaochan: "界貂蝉",
		nuyan_zhaoxiang: "赵襄",
		nuyan_liuqi: "刘琦",
		nuyan_First_luotong: "骆统",
		nuyan_First_mifuren: "糜夫人",
		nuyan_shenFirst_huangzhong: "神黄忠",
		nuyan_shen_Shenshehuangzhong: "神黄忠",
		nuyan_shen_Shenshehuangzhong_ab: "怒焰神射黄忠",
		nuyan_shen_Shenshehuangzhong_prefix: "怒焰神射",
		nuyan_shen_Tianrenhuangzhong: "神黄忠",
		nuyan_shen_Tianrenhuangzhong_ab: "怒焰天刃黄忠",
		nuyan_shen_Tianrenhuangzhong_prefix: "怒焰天刃",
		nuyan_jie_caojinyu: "界曹金玉",
		nuyan_jie_lusu: "界鲁肃",
		nuyan_wuxian: "吴苋",
		nuyan_jie_xuhuang: "界徐晃",
		nuyan_jie_guojia: "界郭嘉",
		nuyan_wei_wenyang: "魏文鸯",
		nuyan_zhuran: "朱然",
		nuyan_shenFirst_sunjian:"神孙坚",
		nuyan_jieFirst_caojie:"界曹节",
		nuyan_liru: "李儒",
		nuyan_caomao: "曹髦",
		nuyan_jieFirst_machao: "界马超",
		nuyan_First_yanghuiyu: "羊徽瑜",
		nuyan_zhugejin: "诸葛瑾",
		nuyan_First_wangyuanji: "王元姬",
		nuyan_zuoci: "左慈",
		nuyan_caizhenji: "蔡贞姬",
		nuyan_jie_xunyou:"界荀攸",
		nuyan_huan_caiwenji: "幻蔡文姬",
		nuyan_caochun: "曹纯",
		nuyan_jie_zhouyu:"界周瑜",
		nuyan_caoying: "曹婴",
		nuyan_mou_simayi: "谋司马懿",
		nuyan_Second_yuji: "于吉",
		nuyan_qi_yuanshao: "起袁绍",
		nuyan_zhouchu: "周处",
		nuyan_mou_zhugeliang: "谋诸葛亮",
		nuyan_qi_zhaojiao: "起张角",
		
		//通用技能
		nuyan_fushizongshi:"符石宗师",
		nuyan_fushizongshi_info:"你的所有技能符石触发次数+1",
		nuyan_fushidashi:"符石大师",
		nuyan_fushidashi_info:"你的随机一个技能符石触发次数+1",
		nuyan_jingongdashi:"进攻大师",
		nuyan_jingongdashi_info:"你的进攻符石触发次数+1",
		nuyan_fangyudashi:"防御大师",
		nuyan_fangyudashi_info:"你的防御符石触发次数+1",
		nuyan_mopaidashi:"摸牌大师",
		nuyan_mopaidashi_info:"你的摸牌符石触发次数+1",
		nuyan_nuqidashi:"怒气大师",
		nuyan_nuqidashi_info:"你的怒气符石触发次数+1",
		
		//技能
		nuyan_huituo: "恢拓",
		nuyan_huituo_info: "当你受到伤害后，你可以令一名角色判定，若结果为红，其回复X点体力值并摸1张牌；黑，其摸X张牌并回复1点体力（X为伤害值）。",
		nuyan_mingjianchaogang: "明鉴朝纲",
		nuyan_mingjianchaogang_info: "出牌阶段限一次，你可以将所有手牌交给一名其他角色并令其下回合使用【杀】次数和手牌上限+X，然后，你获得X点护甲（X为你此次给出牌数）。",
		nuyan_enweibingshi:"恩威并施",
		nuyan_enweibingshi_info:"每回合结束时，你可以选择一名角色，若你的手牌数不小于你的体力值，你对其造成X点雷电伤害，否则，其摸X张牌（X为你的手牌数且不大于5）。",
		nuyan_xianfuqiyue: "先辅契约",
		nuyan_xianfuqiyue_info: "你首次登场时，你选择一名其他角色并令其获得“先辅”标记；当其受到伤害后，你受到其对你造成的1点伤害，当其不因此技能回复体力后，你回复等量的体力；当你不因此技能回复体力后，你可以令其回复1点体力。",
		nuyan_yizhijuncai: "逸志俊才",
		nuyan_yizhijuncai_info: "锁定技，当你的判定牌生效前，你获得之。",
		nuyan_chouce: "筹策",
		nuyan_chouce_info: "当你体力减少时，你可以判定，若结果为：黑色，你弃置一名其他角色区域内X+1张牌；红色，你令一名角色摸2X张牌，且【先辅契约】选择的角色摸X张牌。（X为你体力变化值）",
		nuyan_qixi:"奇袭",
		nuyan_qixi_info: "出牌阶段，你可以将一张黑色牌当作【过河拆桥】使用；你以此法使用的【过河拆桥】弃置其他角色的牌后，若其装备区有牌，随机弃置其中一张",
		nuyan_linjiangshenjian:"临江神箭",
		nuyan_linjiangshenjian_info:"当你因〖奇袭〗或【过河拆桥】弃置其他角色的一张装备牌时，你摸一张牌",
		nuyan_yexidiying:"夜袭敌营",
		nuyan_yexidiying_info:"一名其他角色的准备阶段开始时，你可以对其使用一张无距离限制且无视防具的【杀】，且若其装备区没有牌，此【杀】伤害+1且其弃置所有与此【杀】颜色相同的手牌。",
		nuyan_yinghun:"英魂",
		nuyan_yinghun_info:"准备阶段或当你的体力值减少时，你可以令一名角色执行一项：1.其摸X并随机弃置一张手牌；2.其摸一并随机弃置X张手牌（X为你已损失体力值）。",
		nuyan_hunyoujiangdong:"魂佑江东",
		nuyan_hunyoujiangdong_info:"当你死亡时或杀死一名角色时，你可令一名角色摸三张牌",
		nuyan_jianbukecui:"坚不可摧",
		nuyan_jianbukecui_info:"结束阶段，你可以失去1点体力，并令一名角色获得等同于你已损失体力值枚'坚'标记。当有'坚'标记的角色受到伤害时，其移除1个'坚'标记并防止此伤害",
		nuyan_pojun: "破军",
		nuyan_pojun_info: "当你使用【杀】指定唯一目标后，你可以将其至多X+1张手牌扣置于其武将牌上，回合结束时，其获得这些牌。（X为你的武将星级）",
		nuyan_yongliequedi: "勇烈却敌",
		nuyan_yongliequedi_info: "当你因〖破军〗扣置牌时，若其中含有锦囊牌，你摸一张牌；含有装备牌，你随机弃置其中一张。",
		nuyan_wanfumokai: "万夫莫开",
		nuyan_wanfumokai_info: "当你使用【杀】对手牌数不大于你的角色造成伤害时，此伤害+1，若其手牌为0则伤害额外+2。",
		nuyan_kuanggu:"狂骨",
		nuyan_kuanggu_info:"锁定技，你对其他角色造成伤害后，你选择一项:1.回复X点体力;2.摸X张牌(X为你怒气值的一半，向上取整)。",
		nuyan_shuguogulang:"蜀国孤狼",
		nuyan_shuguogulang_info:"锁定技，当你于出牌阶段对其他角色造成伤害后，你于此阶段使用【杀】无次数限制。",
		nuyan_kuangnuzhuiji:"狂怒追击",
		nuyan_kuangnuzhuiji_info:"每个回合限X次(X为此回合开始时场上存活角色数)，当你受到伤害后，你可以对一名其他角色造成等量点伤害。",
		nuyan_guowu:"帼武",
		nuyan_guowu_info:"出牌阶段开始时，你可以展示所有手牌，若展示类型数不小于：1，你使用【杀】无法被响应；2，你本阶段使用【杀】的次数+X（X为你的武将星级）；3，你从牌堆或弃牌堆中获得等同于你已损失体力值数量的【杀】。（至少1张）",
		nuyan_shenweizaixian:"神威再现",
		nuyan_wushuangxiaoji:"无双虓姬",
		nuyan_wushuangxiaoji_info:"锁定技，当你于出牌阶段使用【杀】时，此【杀】伤害+X（X为本阶段你使用【杀】的次数）。",
		nuyan_shangshi:"伤逝",
		nuyan_shangshi_info:"锁定技，当你的手牌数小于X时，你将手牌数摸至X张（X为你的武将星级）",
		nuyan_xinyixiangtong:"心意相通",
		nuyan_xinyixiangtong_info:"出牌阶段限一次，你可以弃置1张手牌并获得1点怒气。",
		nuyan_jueqingzhuohua:"绝情灼华",
		nuyan_jueqingzhuohua_info:"出牌阶段，你可以失去2点怒气，并令你下一次即将造成的伤害数值+1且视为失去体力。",
		nuyan_jianying:"渐营",
		nuyan_jianying_info:"锁定技，当你于出牌阶段内使用与此阶段你使用的上一张牌点数或花色相同的牌时，你摸一张牌。",
		nuyan_jianzhongbuqu:"坚忠不屈",
		nuyan_jianzhongbuqu_info:"锁定技，当你受到伤害后：若此伤害是你回合结束后第一/二次受到的伤害，则你回复/失去1点体力。",
		nuyan_honghuzhizai:"鸿鹄志哉",
		nuyan_honghuzhizai_info:"结束阶段，你可以选择一名其他角色，随机获得其X张手牌（X为你手牌中的颜色数）。",
		nuyan_lihun:"离魂",
		nuyan_lihun_info:"出牌阶段限一次，你可以获得一名其他角色的至多X张牌（X为你的武将星级），若如此做，此阶段结束时，你交给其等同于其怒气值张的手牌。",
		nuyan_miaojilianhuan:"妙计连环",
		nuyan_miaojilianhuan_info:"出牌阶段限一次，你可以令一名男性角色视为对另一名男性角色使用一张【决斗】。",
		nuyan_qiaoxianlianhuan:"巧献连环",
		nuyan_qiaoxianlianhuan_info:"你发动“离魂”时额外获得目标角色两张手牌；当你因“离魂”获得了目标区域内所有牌时，目标失去1点怒气。",
		nuyan_fanghun:"芳魂",
		nuyan_fanghun_info:"锁定技，当你使用【杀】指定一名角色为目标后或成为【杀】的目标后，你获得1点怒气（若怒气已达到上限则改为摸一张牌）。",
		nuyan_jinghongmeiying:"惊鸿魅影",
		nuyan_jinghongmeiying_info:"你可以将一张【杀】/【闪】当作【闪】/【杀】使用或打出。",
		nuyan_zhongxinfuhan:"忠心扶汉",
		nuyan_zhongxinfuhan_info:"限定技，准备阶段，你可以观看五名未登场的蜀势力角色的武将牌，然后选择获得其中至多两个武将技能。",
		nuyan_wenji:"问计",
		nuyan_wenji_info:"出牌阶段每名其他角色各限一次，你可以令一名其他角色交给你一张牌；你本回合使用与因此法获得的牌类别相同的牌无次数限制。",
		nuyan_bizoujiangnan:"避走江南",
		nuyan_bizoujiangnan_info:"锁定技，每名角色的回合结束时，若你本回合内未使用或打出过牌指定其他角色为目标，你摸两张牌。",
		nuyan_choutiqiuce:"抽梯求策",
		nuyan_choutiqiuce_info:"锁定技，你发动〖问计〗后，你于本回合内使用或打出与你本回合因“问计”获得的牌花色相同的牌无法被响应。",
		nuyan_qinzheng:"勤政",
		nuyan_qinzheng_info:"锁定技，你每使用或打出3/5/8张牌时，你从牌堆或弃牌堆中获得一张【杀】或【闪】/【桃】或【酒】/【决斗】和【无中生有】。",
		nuyan_renzhengaimin:"仁政爱民",
		nuyan_renzhengaimin_info:"锁定技，你每回合第奇数次造成的伤害+1。",
		nuyan_lingchurujian:"令出如箭",
		nuyan_lingchurujian_info:"锁定技，你每使用或打出10张牌时，你从牌堆或弃牌堆中获得一张【釜底抽薪】和一张【怒发冲冠】。",
		nuyan_guixiu:"闺秀",
		nuyan_guixiu_info:"当你失去一张手牌后，若你的手牌数不大于你的体力上限，你摸两张牌，否则，你摸一张牌并可以令一名其他角色摸一张牌。",
		nuyan_xuzhouwangzu:"徐州望族",
		nuyan_xuzhouwangzu_info:"锁定技，当一名角色因〖闺秀〗摸一张牌后，若其：已受伤，其回复1点体力，否则其获得1点怒气。",
		nuyan_sheshencunsi:"舍身存嗣",
		nuyan_sheshencunsi_info:"每回合每名角色限一次，当一名角色受到伤害时，你可以弃置X张手牌并防止此伤害（X为伤害值），然后，你可以令一名角色获得〖勇决〗直至其下回合结束。",
		nuyan_yongjue:"勇决",
		nuyan_yongjue_info:"出牌阶段，你对其他角色使用黑色单体普通锦囊牌结算结束后，你可以与其拼点，若你赢，其失去1点体力；若你没赢，你失去1点怒气",
		nuyan_yongyi: "勇毅",
		nuyan_yongyi_info:"锁定技，当你使用黑色伤害牌指定目标后，若其在你的攻击范围内，你令此牌无视防具且无法被响应；当你成为其他角色使用的【杀】或单体普通锦囊牌的目标后，若此牌为/不为红色，你摸一张牌/令此牌无效。",
		nuyan_yingxiongxiangxi:"英雄相惜",
		nuyan_yingxiongxiangxi_info:"锁定技，每回合限一次，其他角色令你进入濒死状态时，其本回合非锁定技失效并获得〖义释〗，然后你将体力值回复至体力上限，若你有空置的防具栏，则你将牌堆中的随机一张防具牌置入你的装备区。",
		nuyan_yishi:"义释",
		nuyan_yishi_info:"锁定技，其他角色对你造成伤害时，若你的装备区有牌，则随机弃置其中1张，然后防止此伤害。",
		nuyan_dingjunzhanshen:"定军战神",
		nuyan_dingjunzhanshen_info:"锁定技，结束阶段，若你于本局完成以下全部战功，则你执行1个额外的出牌阶段，然后觉醒为一个神话形态：神射形态或天刃形态（觉醒后会失去普通形态的所有技能）：<br>●先登：若你造成过至少4点伤害，则你本局游戏内造成的伤害+1；<br>●陷阵：若你受到过伤害或流失过体力，则你体力值变化时，摸一张牌；<br>●斩将：若你令一名角色进入过濒死状态，则你造成伤害后，回复1点体力；<br>●夺旗：若你获得过其他角色区域内的牌，则你计算与其他角色的距离-1；",
		nuyan_shenshe:"神射",
		nuyan_shenshe_info:"出牌阶段，你可以失去2点怒气并选择一名其他角色，然后视为你对其使用等同于你攻击范围张数的强化【杀】（无次数与距离限制）；你使用的【杀】不能被颜色不同的牌响应。",
		nuyan_shenweiqianchong:"神威千重",
		nuyan_shenweiqianchong_info:"锁定技，你首次登场时，令所有其他角色翻面并弃置区域内的所有牌。你于回合内受到其他角色造成的伤害或流失体力时，防止之。",
		nuyan_mojinshayu:"没金铩羽",
		nuyan_mojinshayu_info:"锁定技，你对手牌数不大于你攻击范围的角色使用【杀】无视其防具和防御符石且伤害+1；你使用【杀】对其他角色造成伤害后，随机弃置其等同于其当前怒气值张数的手牌。",
		nuyan_tianren:"天刃",
		nuyan_tianren_info:"出牌阶段，你可以弃置1张装备牌，然后令一名其他角色进行判定，若结果为：黑桃，其受到3点无来源伤害；红桃，其流失1点体力；梅花，其随机摧毁2张手牌；方块，其失去1点怒气。",
		nuyan_cuifengdengnan:"摧锋登难",
		nuyan_cuifengdengnan_info:"锁定技，你使用或打出基本牌或锦囊牌时，摸1张牌；你对与你距离小于你攻击范围的角色使用牌无次数限制。",
		nuyan_yuqi:"隅泣",
		//后续企业级理解（
		nuyan_yuqi_info:"每回合限三次,当1名角色受到伤害后，你可以观看牌堆项两张牌并将其中至多一张交给其，然后你获得剩余的牌；你首次登场时或准备阶段，你今此技能中的全部中文数字+2（单项不大于10)",
		nuyan_shanshenzili:"善身自立",
		nuyan_shanshenzili_info:"锁定技，一名角色体力减少后，若本回合你未对其造成过伤害，则你回复1点体力（若你未受伤改为获得1点怒气）",
		nuyan_xianjingduanzhuang:"娴静端庄",
		nuyan_xianjingduanzhuang_info:"你发动〖隅泣〗茯得牌后。可以令伤害来源失去2点体力。",
		nuyan_haoshi:"好施",
		nuyan_haoshi_info: "摸牌阶段，你多摸X张牌，然后你可以将任意张手碑交给一名其他角色，若如此做，你获得等同于你交出牌数量的怒气值(X为场上势力数+1)",
		nuyan_lianliukangcao:"联刘抗曹",
		nuyan_lianliukangcao_info:"每轮开始时，若你的体力上限/怒气上限均大于1，则你可以令一名手牌数不大于你的其他角色增加1点体力上限/怒气上限并摸3张牌(怒气上限至多为6)，然后你减少1点体力上限/怒气上限。",
		nuyan_dizaolianmeng:"缔造联盟",
		nuyan_dizaolianmeng_info:"其他角色出牌阶段开始时，你可以与其平均分配体力上限或怒气上限（怒气上限至多为6），然后随机平均分配双方手牌（若为奇数则你分配较多)",
		nuyan_yirong:"移荣",
		nuyan_yirong_info:"出牌阶段开始时，你可以将手牌摸至体力上限，若如此做，出牌阶段结束时，你弃置全部手牌。",
		nuyan_hechundaiyan:"贺春怠宴",
		nuyan_hechundaiyan_info:"出牌阶段限一次，你可以交给一名其他角色一张♥手牌并令其获得1个“宴”标记；其他角色回合开始时，移除其全部“宴”标记，然后其失去等量的体力。",
		nuyan_jirenguixiang:"吉人贵相",
		nuyan_jirenguixiang_info:"你可以将你回合内的第X个阶段改为出牌阶段（X为场上“宴”标记数+1）。",
		nuyan_duanliang:"断粮",
		nuyan_duanliang_info:"出牌阶段，你可以将1张黑色手牌当做强化【乐不思蜀】使用；一名角色跳过摸牌阶段后，你模3张牌",
		nuyan_jiuyuanfancheng:"救援樊城",
		nuyan_jiuyuanfancheng_info:"出牌阶段，你可以消耗1点怒气，获得一名判定区有牌的其他角色区域里的一张牌。",
		nuyan_liangjinyuanjue:"粮尽援绝",
		nuyan_liangjinyuanjue_info:"锁定技，其他角色的强化【乐不思蜀】的判定后，若结果为红桃，其于本回合的出牌阶段内无法使用或打出黑色牌。",
		nuyan_yiji:"遗计",
		nuyan_yiji_info:"锁定技，你受到伤害时，令一名角色摸2以张牌(X为伤害值)；你流失体力后，摸1张牌。",
		nuyan_huishixinzhi:"慧识心志",
		nuyan_huishixinzhi_info:"锁定技，当你的判定牌生效后，你获得之，然后，若此牌点数不小于10，你增加1点体力上限（不超过10），否则你失去1点体力",
		nuyan_zhiceqizuo:"智策奇佐",
		nuyan_zhiceqizuo_info:"出牌阶段限1次，你可以判定，若结果为锦囊牌，你可以令一名角色获得〖奇佐〗直至其下个回合结束；若结果为基本牌，你可以失去1点体力并重复此过程。",
		nuyan_qizuo:"奇佐",
		nuyan_qizuo_info:"出牌阶段每种牌名限一次，你可以将一张手牌当作任意普通锦囊牌使用（【无懈可击】除外）。",
		nuyan_chuifeng:"棰锋",
		nuyan_chuifeng_info:"出牌阶段限一次，你可以失去一点体力，令一名其他角色获得1枚“仇”标记并视为对其使用1张【决斗】；此牌造成的伤害或令目标失去的体力+X(X为其拥有的“仇“标记数)；当你受到此【决斗】的伤害时，你防止此伤害并摸2张牌。",
		nuyan_nvliguoren:"膂力过人",
		nuyan_nvliguoren_info:"每回合限1次，当你造成或受到伤害后，你可以将手牌摸至与体力值相同或将体力回复至与手牌数相同。",
		nuyan_henxiaochoujue:"恨销仇决",
		nuyan_henxiaochoujue_info:"出牌阶段，你可以减少1点体力上限，令你的“棰锋视为未发动过；你杀死其他角色后，加X点体力上限(X为其拥有的“仇”标记数）。",
		nuyan_danshou:"胆守",
		nuyan_danshou_info:"出牌阶段，你可以弃置2张颜色相同的牌并选择一名其他角色，若弃置的牌为：红色，你摸1张牌并随机弃置其1张牌；黑色，你获得1点怒气，然后对其造成1点伤害。",
		nuyan_yifudangguan:"一夫当关",
		nuyan_yifudangguan_info:"锁定技，你成为其他角色使用牌的目标时，你摸2张牌。",
		nuyan_bajianlungong:"拔剑论功",
		nuyan_bajianlungong_info: "其他角色回合开始时，你加X点体力上限并回复X点体力(X为其体力上限且不大于10)。若如此做，此回合结束时，你失去因此法获得的体力上限，然后你可以对一名其他角色造成Y点伤害(Y为你因此失去的体力值的一半，向上取整）。",
		nuyan_hulie:"虎烈",
		nuyan_hulie_info:"锁定技，你使用伤害牌指定其他角色为唯一目标后，你弃置其至多X张牌。此牌结算结束后，若此牌未对其造成伤害，令其视为对你使用1张强化【决斗】(X为你已损失体力值)。",
		nuyan_shenweiqianjun:"神威千钧",
		nuyan_shenweiqianjun_info:"锁定技，你首次登场时，令所有其他角色失去所有怒气，翻面并废除防具栏;你受到伤害或失去体力时，若你的体力值为1，则防止之，然后你回复等量体力。",
		nuyan_qinwangpolu:"勤王破虏",
		nuyan_qinwangpolu_info:"昂扬技，出牌阶段，你可以令你与一名其他角色各失去1点体力上限；若如此做，你于本阶段因对其造成致命伤害而令其进入濒死状态时，其须弃置X张装备牌，否则其直接死亡(X为本次伤害值与其体力值的差+1)；激昂：当你杀死一名角色后或你脱离濒死状态后",
		nuyan_shouxi:"守玺",
		nuyan_shouxi_info:"当你满怒气时，你可以消耗2点怒气并令一名其他角色失去X+1点体力(X为你当前的怒气值)",
		nuyan_nvzhongjinguo:"女中巾帼",
		nuyan_huiminjishi:"惠民济世",
		nuyan_huiminjishi_info:"结束阶段，你摸X张牌（X为你的武将星级），然后，你可以展示等量张手牌并令一名其他角色获得之。",
		nuyan_Legend_diewufeihua:"蝶舞飞花",
		nuyan_Legend_diewufeihua_info:"锁定技，每轮限一次，一名角色的出牌阶段开始时，你摸1张牌并获得1点怒气；",
		nuyan_fencheng:"焚城",
		nuyan_fencheng_info:"出牌阶段，你可以消耗等同于本回合你先前发动此技能次数的怒气值，令所有角色依次选择1项：1.弃置至少X张牌（X为上一名选择的角色以此法弃置牌数+1）；2.受到你造成的Y+1点火焰伤害。（Y为此技能发动次数+1）",
		nuyan_fenchengmieji:"焚城灭迹",
		nuyan_fenchengmieji_info:"出牌阶段限一次，你可以将一张黑色锦囊牌置于牌堆顶，令一名其他角色选择一项：1.交给你1张锦囊牌；2.依次弃置2张非锦囊牌（不足则全弃）；",
		nuyan_jueshizhice:"绝世之策",
		nuyan_jueshizhice_info:"结束阶段，你可以对本回合失去过牌的其他角色各造成1点伤害，你每因此法造成1点伤害，便摸2张牌。",
		nuyan_qianlong: "潜龙",
		nuyan_qianlong_info: "当你受到伤害后，你可以展示牌堆顶的3张牌，然后你可以选择其中任意张牌作为“鳞”随机置于牌堆中，你获得剩余的牌；一名角色从牌堆中获得“鳞”牌后，你选择一项：1.令其受到X点雷电伤害；2.令其获得1点护甲。(X为其本次获得的“鳞”牌数)",
		nuyan_qingzaofensi: "轻躁忿肆",
		nuyan_qingzaofensi_info:"锁定技，当你获得护甲后，你须对一名体力值不小于你的角色造成1点伤害，若目标不为你，视为其对你使用1张无次数和距离限制的【杀】",
		nuyan_juejintaoni: "决进讨逆",
		//后续企业级理解（
		nuyan_juejintaoni_info: "限定技，你登场时或准备阶段，若你的体力值为全场最少，你可以指定一名其他角色，其本局游戏受到伤害+1，然后你获得〖决讨〗。",
		nuyan_juetao:"决讨",
		nuyan_juetao_info:"出牌阶段，你可以失去1点体力，然后与一名其他角色拼点，若你赢，你对其造成1点伤害；若你没赢，其摸1张牌。",
		nuyan_tieji: "铁骑",
		nuyan_tieji_info:"锁定技，你使用【杀】无视防具和防御符石；你使用【杀】指定目标后，你判定，除非结果为红且其弃置一张与判定牌相同花色的牌，否则其无法响应此【杀】。",
		nuyan_weizhenliangzhou:"威震凉州",
		nuyan_weizhenliangzhou_info:"当你使用【杀】被【闪】抵消后，你可以弃置一张装备牌并视为对其强化使用一张无距离次数限制的【杀】。",
		nuyan_yijidangqian:"一骑当千",
		nuyan_yijidangqian_info:"锁定技，当你发动〖铁骑〗时，你令目标本回合内非锁定技失效；你获得〖铁骑〗的判定牌且若结果为红色，你本回合使用【杀】次数+1并获得1点怒气",
		nuyan_hongyi:"弘仪",
		nuyan_hongyi_info:"每回合开始时，你选择一名角色，直至本回合结束，其造成伤害后判定，若结果为：红色，受伤角色摸X张牌并回复1点体力；黑色，其随机弃置X张手牌并流失1点体力(X为本次伤害值)。",
		nuyan_huirongrenxin:"慧容仁心",
		nuyan_huirongrenxin_info:"锁定技，你首次登场时，进入“隐匿”状态。每当你回复体力后，若你处于“隐匿”状态，则将手牌摸至体力上限，否则你进入“隐匿”状态",
		nuyan_ciweibingji:"慈威并济",
		nuyan_ciweibingji_info:"当其他角色于其回合内使用牌时，若此牌为基本牌或单体普通锦囊牌，你可以选择1项:1.你交给其1张手牌并令其获得1点怒气；2.你弃置1张手牌并令此牌无效。",
		nuyan_hongyuan:"弘援",
		nuyan_hongyuan_info:"当你不因此技能获得红色手牌后，你令一名其他角色摸两张牌或摸一张牌。",
		nuyan_zhifangganjian:"直方敢谏",
		nuyan_zhifangganjian_info:"锁定技，当你发动〖弘援〗时，你令目标获得1点怒气。",
		nuyan_moudingquanju:"谋定全局",
		nuyan_moudingquanju_info:"锁定技，当你于回合外使用、打出或弃置牌时，你须弃置一名其他角色等量张牌。",
		nuyan_shiren:"识人",
		nuyan_shiren_info:"其他角色于其出牌阶段内获得一张非基本牌后，你可以随机展示其X张牌和牌堆顶的1张牌，然后你选择其中1张，若你选择的是来自其的牌，则你对其造成X点伤害，否则你随弃置1张手牌。(X为其本次获得牌数)",
		nuyan_shangjianyihua:"尚俭抑华",
		nuyan_shangjianyihua_info:"锁定技，你首次登场时，进入“隐匿”状态。当你的手牌数小于体力上限时，你将手牌摸至体力上限并进入“隐匿”状态",
		nuyan_qianchongdunmu:"谦冲敦睦",
		nuyan_qianchongdunmu_info:"锁定技，结束阶段，若你的手牌中的红/黑牌数不大于黑/红牌数，则你获得〖弘援〗/〖弘仪〗，直至你的下个回合开始",
		nuyan_huashen: "化身",
		nuyan_huashen_info: "你登场时，你随机获得5张武将牌作为“化身”牌置于你的武将牌上，然后你亮出其中一张；你视为拥有“化身”牌的所有武将技能（羁绊技除外）；回合开始前或回合结束后，你可以更改亮出的化身牌或重铸任意张“化身”牌。",
		nuyan_shaoyoushendao:"少有神道",
		nuyan_shaoyoushendao_info:"你受到伤害时，可以弃置一张“化身”牌，防止此伤害。",
		nuyan_yiguishishen:"役鬼使神",
		nuyan_yiguishishen_info:"你受到伤害后，若你的“化身”牌数小于你的体力上限，你获得1张新的“化身”牌。",
		nuyan_tianyin:"天音",
		nuyan_tianyin_info:"你登场或每个回合结束时，你须选择一个演奏调式；你的点数为1,2,3,5,6的牌不计入手牌上限且无法被摧毁；你可以将一张手牌当作任意基本牌使用或打出。",
		nuyan_dihunlvxin:"涤魂滤心",
		nuyan_dihunlvxin_info:"一名角色进入濒死状态时，你可以失去1点怒气，然后你令其将手牌调整至4张，若其不为你，你摸1张牌。",
		nuyan_zhongyueheming:"众乐和鸣",
		nuyan_zhongyueheming_info:"准备阶段或你登场时，你可以选择一名其他角色，直至你的回合结束，你与其使用基本牌或单体锦囊牌时，若点数为1,2,3,5,6中的任意点数，则此牌无次数和距离限制，否则令此牌无效。",
		nuyan_qice:"奇策",
		nuyan_qice_info:"出牌阶段限一次，你可以将任意张手牌当作一张普通锦囊牌使用并摸等同于这些牌花色数的牌。",
		nuyan_miaojibaichu:"妙计百出",
		nuyan_miaojibaichu_info:"锁定技，当你即将失去体力时，你改为受到等量点伤害。",
		nuyan_shierqice:"十二奇策",
		nuyan_shierqice_info:"锁定技，当你受到伤害后，你可以摸一张牌并展示所有与此牌花色相同的手牌，令来源弃置等量张牌。",
		nuyan_yayue:"雅乐",
		nuyan_yayue_info:"你首次登场或每个回合结束时，须选择一个演奏调式；你的点数为1,2,3,5,6的牌不计入手牌上限且无法被摧毁；你可以将一张手牌当作任意锦囊牌使用（每个回合每种牌名限五次）",
		nuyan_lvxindihun:"滤心涤魂",
		nuyan_lvxindihun_info:"一名角色受到伤害时，你可以失去1点怒气，将此伤害改为失去体力，且若其不为你，你摸1张牌。",
		nuyan_xingyunliushui:"行云流水",
		nuyan_xingyunliushui_info:"觉醒技，你于回合外发动〖雅乐〗无次数限制；每个回合结束时，若你于本回合连续使用或打出了六张点数相同的牌，则你获得〖焦尾〗并令一名角色执行一个额外的回合。",
		nuyan_jiaowei: "焦尾",
		nuyan_jiaowei_info: "锁定技，你使用或打出点数为1,2,3,5,6的牌后，摸1张牌并获得1点怒气。",
		nuyan_shanjia: "缮甲",
		nuyan_shanjia_info:"出牌阶段开始时，你摸3张牌，然后弃置3-X张牌，若你本次没有弃置：1.基本牌，此阶段你强化使用牌不消耗怒气；2.锦囊牌，此阶段你使用牌无距离限制；若两项都满足，你摸X张牌(X为你本局失去过装备牌的牌名数)。",
		nuyan_pijianzhirui: "披坚执锐",
		nuyan_pijianzhirui_info: "你首次登场时或准备阶段，你可以选择或更改一个装备牌的牌名（武器和防具各限1个）；当你未装备武器/防具时，视为你装备你声明的牌名的牌。",
		nuyan_duyuxiaoji:"督御骁骑",
		nuyan_duyuxiaoji_info:"其他角色回合开始时，你可以交给其1张装备牌并为其指定一名“督御”目标（其触发条件前对其隐藏），若如此做，直至本回合结束，当其于出牌阶段使用伤害牌指定唯一目标后，若此牌目标拥有“督御”标记，其摸1张牌，否则此牌结算后，结束其出牌阶段。",
		nuyan_fanjian:"反间",
		nuyan_fanjian_info:"出牌阶段，你可以将一张♠手牌当做【水淹七军】使用，你以此法强化使用的【水淹七军】结算结束后，你从牌堆中获得一张黑色牌。",
		nuyan_botaoxiongyong:"波涛汹涌",
		nuyan_botaoxiongyong_info:"锁定技，摸牌阶段，你多摸2X张牌，（X为以下项中你满足的项数：1.你手牌数不为全场最少；2.你体力值不为全场最少；3.你怒气值不为全场最少）。",
		nuyan_lieyanqinyin:"烈焰琴音",
		nuyan_lieyanqinyin_info:"你不以此法使用的【水淹七军】结算结束后，你可以将一张黑色手牌当做【水淹七军】普通使用。",
		nuyan_lingren:"凌人",
		nuyan_lingren_info:"出牌阶段限一次，你可以展示一名其他角色的所有手牌，然后从牌堆中随机获得其手牌中拥有类型的牌各一张；若如此做，本阶段你对其使用伤害牌时，若其手牌中有与此牌相同类型的牌，则此牌无法被响应且造成的伤害+1，然后你获得1点怒气。",
		nuyan_shuiqingzhuoying:"水清濯缨",
		nuyan_shuiqingzhuoying_info:"你发动“凌人”时可以额外选择一个目标。",
		nuyan_longchengfengming:"龙城凤鸣",
		nuyan_longchengfengming_info:"当你受到大于1点的伤害时，你可以弃置一张与造成此伤害的牌相同类型的牌，将本次伤害值改为1并摸一张牌。",
		nuyan_yinren: "隐忍",
		nuyan_yinren_info: "锁定技，每轮开始时，若你正面向上，则你翻面并获得2X枚“忍”标记。每个回合结束时，若你于本回合内未使用牌指定过其他角色为目标，则你获得X枚“忍”标记，然后你增加1点体力上限并将体力回复至上限。若你拥有的“忍”不小于体力上限，则视为拥有“鬼才”（X为你的体力值）",
		nuyan_guicai: "鬼才",
		nuyan_guicai_info: "当一名角色的判定牌生效前，你可以将一张手牌代替之。当你进入濒死状态时，你可以移除1枚”忍“标记，然后进行一次判定，若判定结果点数小于你拥有的”忍“标记数，则你将体力回复至1点。",
		nuyan_MouSimayi_xuanmoumiaoji: "玄谋妙计",
		nuyan_MouSimayi_xuanmoumiaoji_info: "出牌阶段，可以移除1个“忍”标记并摸1张牌，然后与一名其他角色进行一次“谋奕”。若你“谋奕”成功，对其造成1点伤害，然后摧毁其1张手牌。",
		nuyan_taoguangyanghui: "韬光养晦",
		nuyan_taoguangyanghui_info: "锁定技，每轮结束时，若你于本轮未执行过出牌阶段，则你获得一个只有出牌阶段的额外回合。当你成为其他角色使用【杀】和黑色单体非延时锦囊牌的目标时，若你处于翻面状态，则取消之。",
		nuyan_guhuo: "蛊惑",
		nuyan_guhuo_info: "锁定技，其他角色使用或打出牌响应你使用的牌时，若其与你使用的牌：点数不同，你摸一张牌并获得一点怒气；花色不同，其随机弃置一张牌并失去一点体力。",
		nuyan_taipingdaoyi: "太平道义",
		nuyan_taipingdaoyi_info: "锁定技，你对其他角色使用牌后，若其未响应此牌，则你摸一张牌并获得一点怒气。",
		nuyan_huanhuozhongxin: "幻惑众心",
		nuyan_huanhuozhongxin_info: "锁定技，你使用或打出牌响应其他角色对你使用的牌时，若两张牌：点数不同，你摸两张牌，花色不同，其随机弃置两张牌。",
		nuyan_qi_luanji:"乱击",
		nuyan_qi_luanji_info:"出牌阶段，你可以将2张花色相同的手牌当作【万箭齐发】使用。若此牌未造成伤害，你摸1张牌",
		nuyan_bijianzixian: "愎谏自贤",
		nuyan_bijianzixian_info:"锁定技，出牌阶段开始时，你将手牌摸至3X张；你于出牌阶段获得其他角色的牌后，摧毁之（X为你拥有的“勋”标记数)。",
		nuyan_shiluxungui:"世禄勋贵",
		nuyan_shiluxungui_info:"锁定技，你首次登场时，获得4个“勋”标记；你的摸牌阶段摸牌数+X；你使用【杀】的次数+X；你的手牌上限+X；结束阶段，若你于本回合失去过体力，你失去1个“勋”标记（X为你的“勋”标记数）。",
		nuyan_chuhai: "除害",
		nuyan_chuhai_info: "使命技，你首次登场时，获得〖虎患〗和〖蛟害〗；你手牌区的装备牌只能当做【酒】使用；<br><b>成功</b>：你失去〖虎患〗和〖蛟害〗时，失去1点体力，然后获得〖改励〗；<br><b>失败</b>：你杀死一名其他角色后，你对场上所有其他存活角色造成等同于你当前怒气值的伤害。",
		nuyan_huhuan: "虎患",
		nuyan_huhuan_info: "锁定技，场上所有其他角色摸牌阶段摸牌数-3。",
		nuyan_jiaohai: "蛟害",
		nuyan_jiaohai_info: "锁定技，场上所有其他角色弃牌阶段的手牌上限-3。",
		nuyan_gaili: "改励",
		nuyan_gaili_info: "出牌阶段，你可以弃置一张装备牌，然后从牌堆中随机获得一张非伤害锦囊牌；你以此法获得的牌不计入本回合手牌上限。",
		nuyan_nanshanshehu: "南山射虎",
		nuyan_nanshanshehu_info: "出牌阶段限两次，你可以与一名其他角色拼点；若你赢，你失去〖虎患〗（若你没有〖虎患〗，改为摸三张牌）且当你于此阶段对其造成伤害后，随机将牌堆中的一张你空置装备栏对应类型的装备牌置入你的装备区。",
		nuyan_xijiufujiao: "西氿缚蛟",
		nuyan_xijiufujiao_info: "出牌阶段限两次，你可以与一名其他角色拼点；若你赢，你失去〖蛟害〗（若你没有〖蛟害〗，改为摸三张牌）且当你于此阶段失去一张装备区的牌后，你对其造成2点伤害。",
		nuyan_guanxing: "观星",
		nuyan_guanxing_info: "锁定技，准备阶段，你观看牌堆顶的X张牌并将其中任意张牌置于武将牌旁，称为“星”，其余的牌放回牌堆顶，然后你减少1点体力上限并将手牌摸至体力上限；若你拥有的“星”不大于体力上限，则视为拥有〖空城〗（X为你的体力值）。",
		nuyan_kongcheng: "空城",
		nuyan_kongcheng_info: "锁定技，若你没有手牌，你不能成为【杀】或【决斗】的目标；当你受到大于1点的伤害时，你判定，若点数大于你的体力值，则此伤害改为1点。",
		nuyan_MouZhugeliang_xuanmoumiaoji: "玄谋妙计",
		nuyan_MouZhugeliang_xuanmoumiaoji_info: "出牌阶段，你可以移除1个“星”并摸1张牌，然后与一名其他角色进行一次“谋奕”，若你“谋奕”成功，则摸1张牌且令目标获得X个“彀”标记直至本轮结束（X为你的体力值）。",
		nuyan_dongruoguanhuo: "洞若观火",
		nuyan_dongruoguanhuo_info: "锁定技，每轮开始时，清除此技能记录的牌名，然后你选择并记录至多X个基本牌或锦囊牌的牌名；你使用与你记录牌名相同的非延时锦囊牌无距离限制且无法被【无懈可击】响应；当有“彀”标记的其他角色使用或打出与你记录牌名相同的牌时，令此牌无效，然后，若此牌为非基本牌，其移除1个“彀”标记（X为你的体力值+1）。",
		nuyan_jinglei:"惊雷",
		nuyan_jinglei_info:"一名角色受到伤害后，若伤害来源的体力值或手牌数大于其，你可以对来源造成1点无来源雷电伤害。",
		nuyan_taipingyaoshu:"太平要术",
		nuyan_taipingyaoshu_info: "锁定技，防止你受到的属性伤害；一名角色于其回合外失去手牌后，若其手牌数为全场最少，则你获得1点护甲。",
		nuyan_huangtiandangli:"黄天当立",
		nuyan_huangtiandangli_info:"你首次登场时，获得36点护甲；当你失去1点护甲后，可以视为对一名其他角色使用1张无距离与次数限制的强化【杀】且视为雷电伤害。",
	},
	dynamicTranslate: {//动态翻译
		nuyan_yuqi: function(player) {
			if (player.storage.nuyan_yuqi) return `每回合限${get.cnNumber(player.storage.nuyan_yuqi[0])}次，当1名角色受到伤害后，你可以观看牌堆顶${get.cnNumber(player.storage.nuyan_yuqi[1])}张牌，并将至多${get.cnNumber(player.storage.nuyan_yuqi[2])}张交给其，然后你获得剩余的牌；当你登场时或准备阶段，你令此技能中的全部中文数字+2(单项不大于10)`;
		    else return "每回合限三次，当1名角色受到伤害后，你可以观看牌堆顶两张牌，并将至多一张交给其，然后你获得剩余的牌；当你登场时或准备阶段，你令此技能中的全部中文数字+2(单项不大于10)";
		},
		nuyan_nvzhongjinguo: function() {
			if (lib.config.extension_怒焰武将_nuyan_jieFirst_caojie == "First") return "锁定技，每轮限X次（X为你的武将星级），当你发动〖守玺〗时，你获得1点怒气并摸一张牌。";
			else return "锁定技，每回合限一次，当你发动〖守玺〗时，你获得1点怒气并摸一张牌。";
		},
		nuyan_shenweizaixian: function() {
			if (lib.config.extension_怒焰武将_nuyan_First_lvlingqi == "First") return "锁定技，每回合结束时，若你的体力值或手牌数不大于你的星级，你回复1点体力并摸一张牌。";
			else return "锁定技，你使用【杀】造成伤害后，你摸一张牌并获得1点怒气。";
		},
	},
};