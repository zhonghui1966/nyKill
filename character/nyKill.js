import { lib, game, ui, get, ai, _status } from "../../../noname.js";
export default {
	name: "nyKill",
	connect: true,
	characterSort: {
		nyKill:{
			nyKill_wei:["nuyan_caorui","nuyan_xizhicai","nuyan_jie_zhangchunhua","nuyan_jie_caojinyu", "nuyan_jie_xuhuang", "nuyan_jie_guojia", "nuyan_wei_wenyang", "nuyan_caomao", "nuyan_First_yanghuiyu", "nuyan_First_wangyuanji"],
			nyKill_shu:["nuyan_jie_weiyan","nuyan_zhaoxiang","nuyan_First_mifuren", "nuyan_wuxian", "nuyan_jie_machao"],
			nyKill_wu:["nuyan_jie_ganning","nuyan_xusheng","nuyan_jie_sunjian","nuyan_First_luotong", "nuyan_jie_lusu", "nuyan_zhuran", "nuyan_zhugejin"],
			nyKill_qun:["nuyan_lvlingqi","nuyan_jushou","nuyan_jie_diaochan","nuyan_liuqi", "nuyan_jie_caojie", "nuyan_liru"],
			nyKill_shen:["nuyan_shenFirst_huangzhong", "nuyan_shenFirst_sunjian"],
		},
	},
	character:{
		"nuyan_caorui": ["male","wei","7/7",["nuyan_huituo","nuyan_mingjianchaogang","nuyan_enweibingshi","nuyan_nuqidashi","nuyan_fushizongshi"], ["name:曹|叡"]],
		"nuyan_xizhicai": ["male","wei","6/6",["nuyan_chouce","nuyan_yizhijuncai","nuyan_xianfuqiyue","nuyan_nuqidashi","nuyan_fushidashi"], ["name:戏|志才"]],
		"nuyan_jie_ganning": ["male","wu","7/7",["nuyan_qixi","nuyan_linjiangshenjian","nuyan_yexidiying","nuyan_jingongdashi","nuyan_fushidashi"], ["name:甘|宁"]],
		"nuyan_xusheng": ["male","wu","6/6",["nuyan_pojun","nuyan_yongliequedi","nuyan_wanfumokai","nuyan_jingongdashi","nuyan_fushidashi"], ["name:徐|盛"]],
		"nuyan_jie_sunjian": ["male","wu","6/6",["nuyan_yinghun","nuyan_hunyoujiangdong","nuyan_jianbukecui","nuyan_fangyudashi","nuyan_fushidashi"], ["name:孙|坚"]],
		"nuyan_jie_weiyan": ["male","shu","6/6",["nuyan_kuanggu","nuyan_shuguogulang","nuyan_kuangnuzhuiji","nuyan_fangyudashi","nuyan_fushidashi"], ["name:魏|延"]],
		"nuyan_lvlingqi": ["female","qun","7/7",["nuyan_guowu","nuyan_shenweizaixian","nuyan_wushuangxiaoji","nuyan_jingongdashi","nuyan_fushizongshi"], ["name:吕|玲绮"]],
		"nuyan_jie_zhangchunhua": ["female","wei","6/6",["nuyan_shangshi","nuyan_xinyixiangtong","nuyan_jueqingzhuohua","nuyan_jingongdashi","nuyan_fushidashi"], ["name:张|春华"]],
		"nuyan_jushou": ["male","qun","6/6",["nuyan_jianying","nuyan_jianzhongbuqu","nuyan_honghuzhizai","nuyan_mopaidashi","nuyan_fushidashi"], ["name:沮|授"]],
		"nuyan_jie_diaochan": ["male","qun","6/6",["nuyan_lihun","nuyan_miaojilianhuan","nuyan_qiaoxianlianhuan","nuyan_nuqidashi","nuyan_fushidashi"], ["name:貂|蝉"]],
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
		"nuyan_jie_caojie": ["female", "qun", "6/6", ["nuyan_shouxi", "nuyan_nvzhongjinguo", "nuyan_huiminjishi", "nuyan_Legend_diewufeihua", "nuyan_fangyudashi", "nuyan_fushidashi"], ["name:曹|节"]],
		"nuyan_liru": ["male", "qun", "7/7", ["nuyan_fencheng", "nuyan_fenchengmieji", "nuyan_jueshizhice", "nuyan_jingongdashi", "nuyan_fushidashi"], ["name:李|儒"]],
		"nuyan_caomao": ["male", "wei", "6/6", ["nuyan_qianlong", "nuyan_qingzaofensi", "nuyan_juejintaoni", "nuyan_fangyudashi", "nuyan_fushidashi"], ["name:曹|髦"]],
		"nuyan_jie_machao": ["male", "shu", "7/7", ["nuyan_tieji", "nuyan_weizhenliangzhou", "nuyan_yijidangqian", "nuyan_jingongdashi", "nuyan_fushizongshi"], ["name:马|超"]],
		"nuyan_First_yanghuiyu": ["female", "wei", "6/6", ["nuyan_hongyi", "nuyan_huirongrenxin", "nuyan_ciweibingji", "nuyan_nuqidashi", "nuyan_fushidashi"], ["name:羊|徽瑜"]],
		"nuyan_zhugejin": ["male", "wu", "7/7", ["nuyan_hongyuan", "nuyan_zhifangganjian", "nuyan_moudingquanju", "nuyan_mopaidashi", "nuyan_fushidashi"], ["name:诸葛|瑾"]],
		"nuyan_First_wangyuanji": ["female", "wei", "6/6", ["nuyan_shiren", "nuyan_shangjianyihua", "nuyan_qianchongdunmu", "nuyan_mopaidashi", "nuyan_fushidashi"], ["name:王|元姬"]],
		"nuyan_zuoci": ["male", "qun", "7/7", ["nuyan_huashen", "nuyan_shaoyoushendao", "nuyan_yiguishishen", "nuyan_mopaidashi", "nuyan_fushizongshi"], ["name:左|慈"]],
	},
	skill:{
		/*
			技能的nuyan_star属性表示解锁此技能所需武将星级
			技能的nuyan_jiBan属性表示此技能为额外获得的羁绊技能
		*/
		//通用技能
		nuyan_fushizongshi: {//符石宗师
			trigger:{
				global:"gameStart",
			},
			nuyan_jiBan:true,
			direct:true,
			usable:1,
			filter: function(event,player) { 
				if (!player.storage._ny_fushiId) return false;
				return true;
			},
			content: function(){
				for (let i = 0; i < 4; i++) {
					player.storage._ny_fushiTime[i]++;
				}
				if (player.storage._ny_zhuanShuFuShiId) {
					for (let i in player.storage._ny_zhuanShuFuShiId) {
						player.storage._ny_fushiTime[Number(i)+4]++;
					}
				}
				game.log(player,"所有技能符石触发次数+1");
			},
			priority: 114513,
		},
		nuyan_fushidashi: {//符石大师
			trigger:{
				global:"gameStart",
			},
			direct:true,
			nuyan_jiBan:true,
			usable:1,
			filter: function(event,player) { 
				if (!player.storage._ny_fushiId) return false;
				return true;
			},
			content: function(){
				let list = ["jinGong","fangYu","moPai","nuQi"];
				if (player.storage._ny_zhuanShuFuShiId) player.storage._ny_zhuanShuFuShiId.forEach(i => list.push(i));
				let i = Math.floor(Math.random() * list.length);
				player.storage._ny_fushiTime[i]++;
				if (i < 4) game.log(player,get.translation(list[i]),"技能符石触发次数+1");
				else game.log(player,"的专属技能符石〖",get.translation(list[i]),"〗触发次数+1");
				
			},
			priority: 114513,
		},
		nuyan_jingongdashi: {//进攻大师
			trigger:{
				global:"gameStart",
			},
			direct:true,
			nuyan_jiBan:true,
			usable:1,
			filter: function(event,player) { 
				if (!player.storage._ny_fushiId) return false;
				return true;
			},
			content: function(){
				player.storage._ny_fushiTime[0]++;
				game.log(player,"进攻技能符石触发次数+1");
			},
			priority: 114512,
		},
		nuyan_fangyudashi: {//防御大师
			trigger:{
				global:"gameStart",
			},
			direct:true,
			nuyan_jiBan:true,
			usable:1,
			filter: function(event,player) { 
				if (!player.storage._ny_fushiId) return false;
				return true;
			},
			content: function(){
				player.storage._ny_fushiTime[1]++;
				game.log(player,"防御技能符石触发次数+1");
			},
			priority: 114512,
		},
		nuyan_mopaidashi: {//摸牌大师
			trigger:{
				global:"gameStart",
			},
			direct:true,
			nuyan_jiBan:true,
			usable:1,
			filter: function(event,player) { 
				if (!player.storage._ny_fushiId) return false;
				return true;
			},
			content: function(){
				player.storage._ny_fushiTime[2]++;
				game.log(player,"摸牌技能符石触发次数+1");
			},
			priority: 114512,
		},
		nuyan_nuqidashi: {//怒气大师
			trigger:{
				global:"gameStart",
			},
			direct:true,
			nuyan_jiBan:true,
			usable:1,
			filter: function(event,player) { 
				if (!player.storage._ny_fushiId) return false;
				return true;
			},
			content: function(){
				player.storage._ny_fushiTime[3]++;
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
			nuyan_star:3,
		    trigger: {
		        global: "phaseBefore",
		        player: "enterGame",
		    },
		    forced: true,
		    filter: function(event,player){
		        return game.hasPlayer(current => current != player) && (event.name!='phase'||game.phaseNumber==0);
		    },
		    //audio: "ext:怒焰武将:6",
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
				if (!player.storage._ny_nuqi) return false;
				return true;
		    },
		    forced: true,
			locked: true,
		    async content (event,trigger,player) {
				let num = Math.ceil(player.storage._ny_nuqi / 2);
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
						//zhonghuiFunction定义在了precontent.js里面，要抄记得把定义也抄过去
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
					if (lib.config.extension_怒焰武将_nuyan_lvlingqi == "First") return "phaseEnd";
					else return;
				},
				get source() {
					if (lib.config.extension_怒焰武将_nuyan_lvlingqi == "New") return "damageEnd";
					else return;
				},
			},
			filter: function(event, player) {
				if (lib.config.extension_怒焰武将_nuyan_lvlingqi == "First") {
					let num = Number(lib.config.extension_怒焰武将_nuyan_star);
					return (player.hp <= num) || (player.countCards("h") < num);
				} else return event?.card?.name == "sha";
			},
			async content(event,trigger,player) {
				if (lib.config.extension_怒焰武将_nuyan_lvlingqi == "First") {
					await player.recover();
					await player.draw();
				} else {
					await player.draw();
					await lib.skill._ny_getNuqi.addNuQi(player, 1);
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
			audio:"shangshi",
			trigger: {
			    player: "loseAfter",
			    global: ["equipAfter","addJudgeAfter","gainAfter","loseAsyncAfter","addToExpansionAfter"],
			},
			filter: function(event,player, triggername) {
				let num = Number(lib.config.extension_怒焰武将_nuyan_star) ?? 0;
				return player.countCards("h") < (num+1);
			},
			forced:true,
			locked:true,
			init(player, skill) {
				let num = Number(lib.config.extension_怒焰武将_nuyan_star) ?? 0;
				if (player.countCards("h") < (num+1)) player.drawTo(num + 1);
			},
			async content(event, trigger, player) {
				let num = Number(lib.config.extension_怒焰武将_nuyan_star) ?? 0;
				await player.drawTo(num + 1);
			},
		},
		nuyan_xinyixiangtong: {//心意相通
			enable:"phaseUse",
			usable:1,
			nuyan_star:1,
			filter:function(event,player) {
				return player.countCards("h") > 0 && player.storage._ny_nuqi && player.storage._ny_nuqi < player.storage._ny_nuqiMax;
			},
			filterCard:1,
			position:"h",
			check: function (card) {
			    return 9 - get.value(card);
			},
			discard: false,
			lose: false,
			delay: false,
			content: async function(event, trigger, player) {
				await player.modedDiscard(cards);
				await lib.skill._ny_getNuqi.addNuQi(player,1);
			},
		},
		nuyan_jueqingzhuohua: {//绝情灼华
			enable:"phaseUse",
			nuyan_star:3,
			filter:function(event,player) {
				return player.storage._ny_nuqi && player.storage._ny_nuqi >= 2;
			},
			check: function (player) {
			    return player.storage._ny_nuqi && player.storage._ny_nuqi >= 4;
			},
			discard: false,
			lose: false,
			delay: false,
			content: async function(event, trigger, player) {
				await lib.skill._ny_getNuqi.loseNuQi(player,2);
				player.addMark("nuyan_jueqingzhuohua_effect");
				player.addSkill("nuyan_jueqingzhuohua_effect");
			},
			subSkill:{
				effect:{
					mark:true,
					marktext:"绝",
					onremove: function(player) {
						player.removeMark("nuyan_jueqingzhuohua_effect",Infinity);
						player.unmarkSkill("nuyan_jueqingzhuohua_effect");
						player.updateMarks();
					},
					intro:{
						name:"绝情灼华",
						content:"你下次即将造成的伤害+#且视为失去体力",
					},
					charlotte: true,
					forced: true,
					trigger:{
						source:"damageBefore",
					},
					content:function() {
						trigger.num += player.countMark("nuyan_jueqingzhuohua_effect")
						trigger.cancel();
						trigger.player.loseHp(trigger.num);
						player.removeSkill("nuyan_jueqingzhuohua_effect");
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
					await lib.skill._ny_getNuqi.loseNuQi(target,1);
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
							if (i.isDead() || !i.storage._ny_nuqi) continue;
							if (!player.countCards("h")) break;
							let cards = player.getCards("h");
							if (cards.length > i.storage._ny_nuqi) {
								const next = await player.chooseCard("h",true,i.storage._ny_nuqi,"离魂：选择要交给" + get.translation(i) + "的牌").forResult();
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
			audio:"fanghun",
			trigger:{
				player:"useCardToPlayered",
				target:"useCardToPlayered",
			},
			forced:true,
			locked:true,
			filter: function(event,player) {
				return event.card.name == "sha";
			},
			async content(event,trigger,player) {
				if (!player.storage._ny_nuqi) return;
				if (player.storage._ny_nuqi == player.storage._ny_nuqiMax) await player.draw();
				else await lib.skill._ny_getNuqi.addNuQi(player,1);
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
			        viewAsFilter: function(player) {
			            if (!player.countCards("hs", "shan")) {
			                return false;
			            }
			        },
			        position: "hs",
			        prompt: "将一张闪当杀使用或打出",
			        check: function() {
			            return 1;
			        },
			        ai: {
			            effect: {
			                target: function(card, player, target, current) {
			                    if (get.tag(card, "respondSha") && current < 0) {
			                        return 0.6;
			                    }
			                },
			            },
			            respondSha: true,
			            skillTagFilter: function(player) {
			                if (!player.countCards("hs", "shan")) {
			                    return false;
			                }
			            },
			            order: function() {
			                return get.order({ name: "sha" }) + 0.1;
			            },
			            useful: -1,
			            value: -1,
			            yingbian: function(card, player, targets, viewer) {
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
					if (player.storage._ny_zhuanShuFuShiId && cards.length > 1) {
						for(let i of player.storage._ny_zhuanShuFuShiId) {
							if (i == "_ny_zhuanShu_wanminshu") {
								let time = player.storage._ny_zhuanShuFuShiId.indexOf(i);
								if (player.storage._ny_fushiTime[4+time] > 0) {
									player.storage._ny_zhuanShu_wanminshu ??= 0;
									player.storage._ny_zhuanShu_wanminshu++;
									player.markSkill("_ny_zhuanShu_wanminshu");
									player.storage._ny_fushiTime[4+time]--;
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
			content: async function(event, trigger, player) {
				for (let i = 0;i < trigger.num;i ++) {
					if (trigger.player.isDamaged()) await trigger.player.recover();
					else if (trigger.player.storage._ny_nuqi != undefined) await lib.skill._ny_getNuqi.addNuQi(trigger.player,1);
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
				return event.targets?.some(target => target != player && player.canCompare(target)) && get.color(event.card) == "black" && player.storage._ny_nuqi;
			},
			frequent: true,
			check(event, player) {
				return true;
			},
			async content(event, trigger, player) {
				for (let i of trigger.targets) {
					if (!i.isIn() || !player.canCompare(i)) continue;
					if (!player.storage._ny_nuqi) break;
					let result = await player.chooseBool("是否发动〖勇决〗？<br>与" + get.translation(i) + "拼点，若你赢，其失去1点体力，若你没赢，你失去1点怒气").set("ai", () => true).forResult();
					if (result.bool) {
						let next = await player.chooseToCompare(i).forResult();
						if (next.bool) await i.loseHp();
						else await lib.skill._ny_getNuqi.loseNuQi(player,1);
					}
				}
			},
		},
		//怒焰神黄忠
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
				return player.storage._ny_nuqi && player.storage._ny_nuqi >= 2 && player.getAttackRange();
			},
			check: function (player) {
			    return player.storage._ny_nuqi && player.storage._ny_nuqi >= 2 && player.getAttackRange();
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
				if (event.name == "damage") return event.player != player && event.card?.name == "sha" && event.player.storage._ny_nuqi && event.player.countCards("h");
				return event.card?.name == "sha" && event.targets?.some(target => target.countCards("h") <= player.getAttackRange());
			},
			async content(event, trigger, player) {
				if (trigger.name == "damage") trigger.player.randomDiscard("h",trigger.player.storage._ny_nuqi);
				else {
					trigger.card.storage ??= {};
					trigger.card.storage.nuyan_mojinshayu = true;
					trigger.getParent().baseDamage++;
					trigger.target.storage._ny_noneFangYuFushi = 1;
					trigger.target.markSkill("_ny_noneFangYuFushi");
					trigger.target.when({global: "useCardAfter"})
						.filter(evt => evt?.card?.storage?.nuyan_mojinshayu)
						.then(() => {
							player.removeMark("_ny_noneFangYuFushi", Infinity);
							player.unmarkSkill("_ny_noneFangYuFushi");
							player.updateMarks();
						});
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
						target.addGainTag(cards, "_ny_cuihui");
						break;
					case "diamond": await lib.skill._ny_getNuqi.loseNuQi(target, 1);break;
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
				    var cards = list[0][1];
					let cards2
				    if (get.attitude(player, target) > 0) {
				        card2 = cards.shift();
				    }
				    return [cards, [card2]];
				});
				let result = await next.forResult();
				var moved = result.moved;
				cards.removeArray(moved[0]);
				cards.removeArray(moved[1]);
				var list = [],
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
			filter: function(event, player) {
				return !player.getHistory("sourceDamage", evt => evt.player == event.player)?.length && event.num < 0;
			},
			content: async function(event, trigger, player) {
				if (player.isDamaged()) await player.recover();
				else await lib.skill._ny_getNuqi.addNuQi(player, 1);
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
							await lib.skill._ny_getNuqi.addNuQi(player, result.cards.length);
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
				return player.storage._ny_nuqiMax && player.storage._ny_nuqiMax > 1 && player.maxHp > 1 && game.hasPlayer(current => current != player && current.countCards("h") <= player.countCards("h"));
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
				if (target.storage._ny_nuqiMax && target.storage._ny_nuqiMax == 6) {
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
					await lib.skill._ny_getNuqi.gainNuQiMax(target, 1);
					await target.draw(3);
					await lib.skill._ny_getNuqi.loseNuQiMax(player, 1);
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
			changeMaxHp: async function(player, num) {
				if (player.maxHp == num) return;
				let num2 = player.maxHp;
				if (num2 > num) await player.loseMaxHp(num2 - num);
				else await player.gainMaxHp(num - num2);
			},
			changeMaxNuQi: async function(player, num) {
				if (player.storage._ny_nuqiMax == num) return;
				let num2 = player.storage._ny_nuqiMax;
				if (num2 > num) await lib.skill._ny_getNuqi.loseNuQiMax(player, num2 - num);
				else await lib.skill._ny_getNuqi.gainNuQiMax(player, num - num2);
			},
			changeHandCards: async function(player, target) {
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
			hpMax: async function(player, target) {
				let num = player.maxHp + target.maxHp;
				num /= 2;
				await lib.skill.nuyan_dizaolianmeng.changeMaxHp(player, Math.ceil(num));
				await lib.skill.nuyan_dizaolianmeng.changeMaxHp(target, Math.floor(num));
				await lib.skill.nuyan_dizaolianmeng.changeHandCards(player, target);
			},
			nuqiMax: async function(player, target) {
				if (!player.storage._ny_nuqiMax && !target.storage._ny_nuqiMax) return false;
				player.storage._ny_nuqiMax ??= 0;
				target.storage._ny_nuqiMax ??= 0;
				let num = target.storage._ny_nuqiMax + player.storage._ny_nuqiMax;
				num /= 2;
				await lib.skill.nuyan_dizaolianmeng.changeMaxNuQi(player, Math.ceil(num));
				await lib.skill.nuyan_dizaolianmeng.changeMaxNuQi(target, Math.floor(num));
				await lib.skill.nuyan_dizaolianmeng.changeHandCards(player, target);
			},
			async content(event, trigger, player) {
				if (!player.storage._ny_nuqiMax && !trigger.player.storage._ny_nuqiMax) {
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
			viewAsFilter: function(event,player) {
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
			filter:function(event,player) {
				return player.storage._ny_nuqi && player.storage._ny_nuqi >= 1 && game.hasPlayer(current => current != player && current.countCards("j"));
			},
			selectTarget: 1,
			filterTarget: function(card, player, target) {
				return target != player && target.countCards("j");
			},
			check: function (player, target) {
				//ai等人写，懒得写
			    return -114;
			},
			discard: false,
			lose: false,
			delay: false,
			async content(event, trigger, player) {
				const { target } = event;
				await lib.skill._ny_getNuqi.loseNuQi(player, 1);
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
							if (get.color(card) == "black" && player.countMark("nuyan_liangjinyuanjue") && player.isPhaseUsing()) return false;
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
				return player.isPhaseUsing() && get.info("nuyan_qizuo").buttonRequire(player).length && name !== "wuxie";
			},
			filter: function(event, player, triggername) {
			    return player.isPhaseUsing() && get.info("nuyan_qizuo").buttonRequire(player).length && _status.event.getParent()?.name !== "_wuxie";
			},
			chooseButton: {
			    dialog: function(event, player){
			        let list = get.info("nuyan_qizuo").buttonRequire(player);
					list = list.map(i => i = ["锦囊", "", i]);
			        return ui.create.dialog(get.translation("nuyan_qizuo"), [list,'vcard']);
			    },
				check: (button) => player.getUseValue(button.link[2]),
				filter: (button, player) => _status.event.getParent().filterCard({name:button.link[2]}, player,_status.event.getParent()),
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
						viewAs:{
							name:links[0][2],
						},
			        }
			    },
			    prompt: function(links,player){
			        return "〖奇佐〗：将一张牌当作【" + get.translation(links[0][2]) + "】使用";
			    },
			},
			buttonRequire: function(player) {
			    const cardCanUse = lib.inpile.filter(cardName => {
					if (cardName == "wuxie") return false;
			        if (get.type(cardName) !== "trick") return false;
			        if (player.storage.nuyan_qizuo_used?.includes(cardName)) return false;
			        return true;
			    });
				return cardCanUse;
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
					await lib.skill._ny_getNuqi.addNuQi(player, 1);
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
			init2: function(player) {
				let list = game.players.filter(current => current != player);
				for (let i of list) {
					//init时机比游戏开始更早
					if (game.phaseNumber == 0) i.storage._noInitNuQi = true;
					else lib.skill._ny_getNuqi.loseNuQi(i, (i.storage?._ny_nuqi ?? 0));
					i.turnOver();
					i.disableEquip(2);
				}
			},
			trigger: {
				player: ["damageBegin", "loseHp"],
			},
			filter: function(event, player) {
				return player.hp == 1 && event.num > 0;
			},
			content: function() {
				trigger.cancel();
				player.recover(trigger.num);
			},
		},
		nuyan_qinwangpolu: {//勤王破虏
			nuyan_star: 3,
			sunbenSkill: true,
			skillAnimation: true,
			animationColor: "orange",
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
				let num = player.storage._ny_nuqi;
				let result = await player.chooseTarget(1)
					.set("prompt", get.prompt("nuyan_shouxi"))
					.set("prompt2", "令一名其他角色失去" + get.cnNumber(num + 1) + "点体力")
					.set("ai", (target) => -1 * get.attitude(_status.event.player, target))
					.set("filterTarget", (card, player, target) => player != target)
					.forResult();
				if (result.bool) {
					player.logSkill("nuyan_shouxi", result.targets[0]);
					await result.targets[0].loseHp(player.storage._ny_nuqi + 1);
					await lib.skill._ny_getNuqi.loseNuQi(player, 2);
					let filterSkill = "nuyan_nvzhongjinguo";
					const ownedSkills = player.getSkills(null, false, true).filter(skill => {
						return skill == filterSkill;
					});
					let b = ownedSkills.length !== 0 && !player.isTempBanned(filterSkill) && !(player.shixiaoedSkills && player.shixiaoedSkills.includes(filterSkill));
					if (b) {
						await lib.skill._ny_getNuqi.addNuQi(player, 1);
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
			filter: function(event, player) {
				return event.LOGSkill == "nuyan_nvzhongjinguo";
			},
			content: function() {
				if (lib.config.extension_怒焰武将_nuyan_jie_caojie == "second") player.tempBanSkill("nuyan_nvzhongjinguo");
				else if (player.getRoundHistory("draw")?.filter(evt => evt.skill == event.skill)?.length >= lib.config.extension_怒焰武将_nuyan_star) player.tempBanSkill("nuyan_nvzhongjinguo", "roundEnd");
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
				await lib.skill._ny_getNuqi.addNuQi(player, 1);
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
				if (player.getHistory("useSkill")?.filter(evt => evt.skill == "nuyan_fencheng")?.length == 1 && player.storage._ny_zhuanShuFuShiId?.some(id => id == "_ny_zhuanShu_dujiu")) return true;
				return (player.storage._ny_nuqi ?? 0) >= (player.getHistory("useSkill")?.filter(evt => evt.skill == "nuyan_fencheng")?.length ?? 0);
			},
			async content(event, trigger, player) {
				let num = (player.getHistory("useSkill")?.filter(evt => evt.skill == "nuyan_fencheng")?.length ?? 0) - 1;
				//专属符石-毒鸠
				if (num == 1 && player.storage._ny_zhuanShuFuShiId?.some(id => id == "_ny_zhuanShu_dujiu")) {
					let id = player.storage._ny_zhuanShuFuShiId.find(id => id == "_ny_zhuanShu_dujiu");
					id = player.storage._ny_zhuanShuFuShiId.indexOf(id);
					if (player.storage._ny_fushiTime?.[4+id] > 0) player.storage._ny_fushiTime[4+id]--;
					else await lib.skill._ny_getNuqi.loseNuQi(player, num);
				}
				else await lib.skill._ny_getNuqi.loseNuQi(player, num);
				let list = game.players.sortBySeat(player);
				num = 1;
				for (let current of list) {
					if (!current.isIn()) continue;
					if (current.countCards("he") < num) {
						await current.loseHp(2);
						continue;
					}
					let str = current == player ? "(你无须失去体力)" : "";
					let result = await current.chooseToDiscard([num, Infinity], "he", "弃置至少" + get.cnNumber(num) + "张牌或失去2点体力" + str)
						.set("ai", function (card) {
							if (ui.selected.cards.length >= num) return -1;
							if (get.type(card) != "basic") return 10 - get.value(card);
							return 8 - get.value(card);
						})
						.forResult();
					if (result.bool) {
						num = result.cards.length + 1;
					} else if (current != player) await current.loseHp(2);
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
				if (player.storage._ny_zhuanShuFuShiId?.some(id => id == "_ny_zhuanShu_longyuan")) {
					let id = player.storage._ny_zhuanShuFuShiId.find(id => id == "_ny_zhuanShu_longyuan");
					id = player.storage._ny_zhuanShuFuShiId.indexOf(id);
					if (player.storage._ny_fushiTime?.[4+id] > 0) {
						player.storage._ny_fushiTime[4+id]--;
						num += 2;
						b = true;
					}
				}
				const cards = get.cards(num);
				await game.cardsGotoOrdering(cards);
				await player.showCards(cards, get.translation(player) + '发动了〖潜龙〗');
				const { result } = await player.chooseCardButton("潜龙：选择其中任意张牌作为“鳞”置入牌堆中，你获得其余牌", false, cards)
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
						player: "gainEnd",
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
						trigger.player.addGainTag(cards, "鳞");
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
			animationColor: "red",
			mark: true,
			intro: {
			    content: "limited",
			},
			trigger: {
				player: "phaseZhunbeiBegin",
			},
			init2: async function(player,skill) {
				if (player.isMinHp()) {
					let result = await player.chooseBool()
						.set("prompt", get.prompt(skill))
						.set("prompt2", get.prompt2(skill))
						.set("ai", () => game.hasPlayer(current => -get.attitude(player, current)))
						.forResult();
					if (result.bool) {
						player.logSkill(skill);
						player.awakenSkill(skill);
						let result = await player.chooseTarget(true)
							.set("prompt", get.prompt(skill))
							.set("prompt2", get.prompt2(skill))
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
					}
				}
			},
			direct: true,
			async content(event, trigger, player) {
				await get.info(event.name)?.init2(player, event.name);
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
				trigger.target.addMark("_ny_noneFangYuFushi");
				trigger.target.when({global: "useCardAfter"})
					.filter(evt => evt?.card?.name == "sha" && evt.targets.includes(player))
					.then(() => {
						player.removeMark("_ny_noneFangYuFushi", Infinity);
						player.unmarkSkill("_ny_noneFangYuFushi");
						player.updateMarks();
					});
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
					await lib.skill._ny_getNuqi.addNuQi(player, 1);
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
						if (num > 0 && _status.event.target.storage._ny_nuqiMax && _status.event.target.storage._ny_nuqi == 0) return "选项一";
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
					await lib.skill._ny_getNuqi.addNuQi(trigger.player, 1);
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
				if (player.storage._ny_zhuanShuFuShiId?.some(id => id == "_ny_zhuanShu_kongqueling")) {
					let id = player.storage._ny_zhuanShuFuShiId.find(id => id == "_ny_zhuanShu_kongqueling");
					id = player.storage._ny_zhuanShuFuShiId.indexOf(id);
					if (player.storage._ny_fushiTime?.[4+id] > 0) {
						player.storage._ny_fushiTime[4+id]--;
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
						await lib.skill._ny_getNuqi.addNuQi(result.targets[0], 1);
						player.logSkill(filterSkill, result.targets[0]);
					}
				} else {
					num--;
					await player.draw(num)
						.set("skill", event.name);
					if (b) {
						await lib.skill._ny_getNuqi.addNuQi(player, 1);
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
				global: "nuyan_huashenInit",
				player: ["phaseBegin", "phaseEnd"],
			},
			init2(player) {
				lib.skill.nuyan_huashen.addHuashens(player, 5);
				_status.event.trigger("nuyan_huashenInit");
			},
			filter(event, player, name) {
				if (name == "nuyan_huashenInit") {
					return true;
				}
				return player.storage.nuyan_huashen?.character?.length > 0;
			},
			async cost(event, trigger, player) {
				if (event.triggername === "nuyan_huashenInit") {
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
						let aiChar = maxRankList[(maxRankList.length * Math.random()) + 1];
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
							let aiChar = maxRankList[(maxRankList.length * Math.random()) + 1];
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
						if (player.storage._ny_zhuanShuFuShiId?.some(id => id == "_ny_zhuanShu_shendaoling")) {
							let id = player.storage._ny_zhuanShuFuShiId.find(id => id == "_ny_zhuanShu_shendaoling");
							id = player.storage._ny_zhuanShuFuShiId.indexOf(id);
							if (player.storage._ny_fushiTime?.[4+id] > 0) {
								player.storage._ny_fushiTime[4+id]--;
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
							if (player.storage._ny_zhuanShuFuShiId?.some(id => id == "_ny_zhuanShu_shendaoling")) {
								let id = player.storage._ny_zhuanShuFuShiId.find(id => id == "_ny_zhuanShu_shendaoling");
								id = player.storage._ny_zhuanShuFuShiId.indexOf(id);
								if (player.storage._ny_fushiTime?.[4+id] > 0) {
									player.storage._ny_fushiTime[4+id]--;
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
		
		"ny_podan":"破胆",
		"ny_podan_info":"锁定技，当你不因【酒】回复体力时，取消之。",
		
		"_useCardQianghua":"怒焰-使用牌强化",
		//"_useCardQianghua_info":"消耗1点&poptip=怒气&以&poptip=强化你使用的牌&",
		//后续版本更新给translate上强度（
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
		"_ny_moPai_huxiao_info":"锁定技，其他角色获得怒气时，你摸获得值张牌。",
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
		"_ny_zhanFa_leitingnuhou_info":"准备阶段，你可以令一名其他角色弃置两张装备牌并获得‘破胆’直至回合结束。",
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
		
		//武将
		nuyan_caorui: "曹叡",
		nuyan_xizhicai: "戏志才",
		nuyan_jie_ganning: "界甘宁",
		nuyan_xusheng: "徐盛",
		nuyan_jie_sunjian: "界孙坚",
		nuyan_jie_weiyan: "界魏延",
		nuyan_lvlingqi: "吕玲绮",
		nuyan_jie_zhangchunhua: "界张春华",
		nuyan_jushou: "沮授",
		nuyan_jie_diaochan: "界貂蝉",
		nuyan_zhaoxiang: "赵襄",
		nuyan_xunsheng: "徐盛",
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
		nuyan_jie_caojie:"界曹节",
		nuyan_liru: "李儒",
		nuyan_caomao: "曹髦",
		nuyan_jie_machao: "界马超",
		nuyan_First_yanghuiyu: "羊徽瑜",
		nuyan_zhugejin: "诸葛瑾",
		nuyan_First_wangyuanji: "王元姬",
		nuyan_zuoci: "左慈",
		
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
		nuyan_fencheng_info:"出牌阶段，你可以消耗等同于本回合你先前发动此技能次数的怒气值，令所有角色依次选择1项：1.弃置至少X张牌（X为上一名选择的角色以此法弃置牌数+1）；2.若其不为你，其失去2点体力。",
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
	},
	dynamicTranslate: {//动态翻译
		nuyan_yuqi: function(player) {
			if (player.storage.nuyan_yuqi) return `每回合限${get.cnNumber(player.storage.nuyan_yuqi[0])}次，当1名角色受到伤害后，你可以观看牌堆顶${get.cnNumber(player.storage.nuyan_yuqi[1])}张牌，并将至多${get.cnNumber(player.storage.nuyan_yuqi[2])}张交给其，然后你获得剩余的牌；当你登场时或准备阶段，你令此技能中的全部中文数字+2(单项不大于10)`;
		    else return "每回合限三次，当1名角色受到伤害后，你可以观看牌堆顶两张牌，并将至多一张交给其，然后你获得剩余的牌；当你登场时或准备阶段，你令此技能中的全部中文数字+2(单项不大于10)";
		},
		nuyan_nvzhongjinguo: function() {
			if (lib.config.extension_怒焰武将_nuyan_jie_caojie == "First") return "锁定技，每轮限X次（X为你的武将星级），当你发动〖守玺〗时，你获得1点怒气并摸一张牌。";
			else return "锁定技，每回合限一次，当你发动〖守玺〗时，你获得1点怒气并摸一张牌。";
		},
		nuyan_shenweizaixian: function() {
			if (lib.config.extension_怒焰武将_nuyan_lvlingqi == "First") return "锁定技，每回合结束时，若你的体力值或手牌数不大于你的星级，你回复1点体力并摸一张牌。";
			else return "锁定技，你使用【杀】造成伤害后，你摸一张牌并获得1点怒气。";
		},
	},
};