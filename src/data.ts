export type City = {id:string; name:string; english:string; note:string};
export type Place = {id:string; cityId:string; name:string; english:string; description:string; location:string};
export type Couplet = {id:string; placeId:string; title:string; upper:string; lower:string; author?:string; dynasty?:string; position?:string; note?:string; source:{label:string;url:string}; sourceNote?:string; image?:string; imageCaption?:string};
export const cities:City[] = [
 {id:'beijing',name:'北京',english:'BEIJING',note:'从宫苑到寺庙，循着题联阅读城市。'},
 {id:'hangzhou',name:'杭州',english:'HANGZHOU',note:'西湖周边的亭台、寺庙与园林。'},
 {id:'suzhou',name:'苏州',english:'SUZHOU',note:'园林中的山水与联句。'},
 {id:'chengdu',name:'成都',english:'CHENGDU',note:'祠庙与草堂中的人物和往事。'},
 {id:'jinan',name:'济南',english:'JINAN',note:'湖山相映，联句留存。'},
 {id:'hongkong',name:'香港',english:'HONG KONG',note:'亭园与街巷之间的联语。'},
 {id:'macau',name:'澳门',english:'MACAU',note:'从妈阁庙的山门与殿阁题联阅读地方文化。'},
 {id:'taipei',name:'台北',english:'TAIPEI',note:'阅读寺庙柱联，辨识撰联人与书写者。'}
];
export const places:Place[] = [
 {id:'yiheyuan',cityId:'beijing',name:'颐和园',english:'Summer Palace',description:'收录南湖岛广润灵雨祠与寄澜堂题联，沿园林路径阅读联句。',location:'北京'},
 {id:'tanzhe',cityId:'beijing',name:'潭柘寺',english:'Tanzhe Temple',description:'收录题弥勒佛联，保留来源版本与待考说明。',location:'北京'},
 {id:'xihu',cityId:'hangzhou',name:'西湖 · 天下景亭',english:'West Lake',description:'天下景亭位于西湖中山公园内，收录以山水晴雨为题的叠字联。',location:'杭州 · 中山公园'},
 {id:'lingyin',cityId:'hangzhou',name:'灵隐寺',english:'Lingyin Temple',description:'依据寺院官网收录天王殿楹柱联，注明撰联者及殿内位置。',location:'杭州'},
 {id:'canglang',cityId:'suzhou',name:'沧浪亭',english:'Canglang Pavilion',description:'苏州园林景点。这里收录相关题联，并保留条目来源。',location:'苏州'},
 {id:'wuhou',cityId:'chengdu',name:'成都武侯祠',english:'Wuhou Shrine',description:'成都的祠庙景点。所收联文涉及诸葛亮的生平、出师与治蜀。',location:'四川 · 成都'},
 {id:'caotang',cityId:'chengdu',name:'杜甫草堂',english:'Du Fu Thatched Cottage',description:'依据草堂博物馆资料，收录纪念杜甫与花径题联。',location:'成都'},
 {id:'daming',cityId:'jinan',name:'大明湖',english:'Daming Lake',description:'济南的湖泊景区。这里收录描写荷花、垂柳与湖山的题联。',location:'山东 · 济南'},
 {id:'lingnan',cityId:'hongkong',name:'荔枝角公园 · 岭南之风',english:'Lingnan Garden',description:'香港亭园对联的收录点。联文据香港教育局选编资料整理。',location:'香港 · 荔枝角'},
 {id:'mange',cityId:'macau',name:'妈阁庙',english:'A-Ma Temple',description:'收录山门、观音阁及弘仁殿题联，出处为建筑研究论文。',location:'澳门'},
 {id:'longshan',cityId:'taipei',name:'艋舺龙山寺',english:'Longshan Temple',description:'依据寺院官网收录三川殿与钟鼓楼题联，保留繁体字形。',location:'台北'}
];
export const couplets:Couplet[] = [
{"id": "bj-001", "placeId": "yiheyuan", "title": "广润灵雨祠联", "upper": "云归大海龙千丈；", "lower": "雪满长空鹤一群。", "source": {"label": "词典网 · 广润灵雨祠联", "url": "https://www.cidianwang.com/duilian/20e16078.htm"}, "sourceNote": "据所附来源整理；标点为阅读所加，未进行现场题刻核对。", "author": "乾隆", "position": "南湖岛 · 广润灵雨祠", "dynasty": "清"},
{"id": "bj-002", "placeId": "yiheyuan", "title": "寄澜堂联", "upper": "四时佳气恒春树；", "lower": "一派祥光聚景园。", "source": {"label": "词典网 · 寄澜堂联", "url": "https://www.cidianwang.com/duilian/8987925.htm"}, "sourceNote": "据所附来源整理；标点为阅读所加，未进行现场题刻核对。", "position": "寄澜堂"},
{"id": "bj-003", "placeId": "tanzhe", "title": "弥勒佛联", "upper": "大肚能容，容天下难容之事；", "lower": "开口便笑，笑世间可笑之人。", "source": {"label": "人民日报海外版 · 2013年1月23日第7版", "url": "https://paper.people.com.cn/rmrbhwb/page/2013-01/23/07/hwbwhwx123b.pdf"}, "sourceNote": "采用来源中的“开口便笑”“世间”版本；作者与具体题刻年代待考。"},
{"id": "hz-002", "placeId": "lingyin", "title": "峰从天外飞来", "upper": "峰从天外飞来，见一线光明，万壑松涛开觉路；", "lower": "泉自石边流出，悟三生因果，十方华藏证根源。", "source": {"label": "灵隐寺官网 · 天王殿楹柱联", "url": "https://lingyinsi.org/detail_14045.html"}, "sourceNote": "据所附来源整理；标点为阅读所加，未进行现场题刻核对。", "author": "王念", "position": "天王殿内西侧楹柱"},
{"id": "hz-003", "placeId": "lingyin", "title": "鹫峰从天竺飞来", "upper": "鹫峰从天竺飞来，乃生成佛地；", "lower": "鹿苑弘泉唐施济，为汲引圣湖。", "source": {"label": "灵隐寺官网 · 天王殿楹柱联", "url": "https://lingyinsi.org/detail_14040.html"}, "sourceNote": "联文保留官网“泉唐”字样；不据作者生卒年推定题联年代。", "author": "王震", "position": "天王殿"},
{"id": "hz-004", "placeId": "lingyin", "title": "立定脚跟", "upper": "立定脚跟，背后山头飞不去；", "lower": "执持手印，眼前佛面即如来。", "source": {"label": "灵隐寺官网 · 天王殿楹柱联", "url": "https://lingyinsi.org/detail_14136.html"}, "sourceNote": "据所附来源整理；标点为阅读所加，未进行现场题刻核对。", "author": "张载阳", "position": "天王殿背面北门外墙石柱"},
{"id": "cd-003", "placeId": "caotang", "title": "草堂留后世", "upper": "草堂留后世；", "lower": "诗圣著千秋。", "source": {"label": "成都杜甫草堂博物馆 · 草堂留后世展厅", "url": "https://www.cddfct.cn/go-a112.htm"}, "sourceNote": "据所附来源整理；标点为阅读所加，未进行现场题刻核对。", "author": "朱德"},
{"id": "cd-004", "placeId": "caotang", "title": "花径联", "upper": "花学红绸舞；", "lower": "径开锦里春。", "source": {"label": "成都杜甫草堂博物馆 · 花径介绍", "url": "https://www.cddfct.cn/"}, "sourceNote": "据所附来源整理；标点为阅读所加，未进行现场题刻核对。", "author": "郭沫若", "position": "花径门柱"},
{"id": "mo-001", "placeId": "mange", "title": "妈阁庙山门联", "upper": "德周化宇；", "lower": "泽润生民。", "source": {"label": "美术学报（2022年第5期）· 澳门妈祖阁匠作营造研究", "url": "https://www.researchgate.net/publication/365797417_aomenmazugejiangzuoyingzaoyanjiu--jianlunqiyuqinggongbugongchengzuofazeliyangshiguanlian"}, "sourceNote": "据论文第143—144页题刻记录整理。作者及题刻年代待考。", "position": "山门石牌楼"},
{"id": "mo-002", "placeId": "mange", "title": "观音阁联", "upper": "镜海渡慈航，人登觉岸；", "lower": "莲山开法界，座彻禅灯。", "source": {"label": "美术学报（2022年第5期）· 澳门妈祖阁匠作营造研究", "url": "https://www.researchgate.net/publication/365797417_aomenmazugejiangzuoyingzaoyanjiu--jianlunqiyuqinggongbugongchengzuofazeliyangshiguanlian"}, "sourceNote": "据所附来源整理；标点为阅读所加，未进行现场题刻核对。", "position": "观音阁前檐柱"},
{"id": "mo-003", "placeId": "mange", "title": "弘仁殿联", "upper": "圣德流光莆田福曜；", "lower": "神山梃秀镜海恩波。", "source": {"label": "美术学报（2022年第5期）· 澳门妈祖阁匠作营造研究", "url": "https://www.researchgate.net/publication/365797417_aomenmazugejiangzuoyingzaoyanjiu--jianlunqiyuqinggongbugongchengzuofazeliyangshiguanlian"}, "sourceNote": "据论文原文保留“梃秀”字样；原刻字形尚待照片复核。", "position": "弘仁殿檐柱"},
{"id": "tp-001", "placeId": "longshan", "title": "龙舸渡迷津", "upper": "龍舸渡迷津發大慈雲只要眾生回首；", "lower": "山門開覺路入歡喜地更進十住安心。", "source": {"label": "艋舺龙山寺官网 · 艺术鉴赏·对联", "url": "https://lungshan.org.tw/tw/03_4_1_art.php"}, "sourceNote": "魏清德撰，康有为书。保留官网繁体字形；撰联者与书写者分开记录。", "author": "魏清德", "position": "三川殿"},
{"id": "tp-002", "placeId": "longshan", "title": "龙园煮香茗", "upper": "龍園煮香茗；", "lower": "山籟供清齋。", "source": {"label": "艋舺龙山寺官网 · 艺术鉴赏·对联", "url": "https://lungshan.org.tw/tw/03_4_1_art.php"}, "sourceNote": "据所附来源整理；标点为阅读所加，未进行现场题刻核对。", "author": "羅秀惠", "position": "三川殿"},
{"id": "tp-003", "placeId": "longshan", "title": "龙飞僧点画", "upper": "龍飛僧點畫；", "lower": "山暝寺鳴鐘。", "source": {"label": "艋舺龙山寺官网 · 艺术鉴赏·对联", "url": "https://lungshan.org.tw/tw/03_4_1_art.php"}, "sourceNote": "据所附来源整理；标点为阅读所加，未进行现场题刻核对。", "author": "羅秀惠", "position": "三川殿"},
{"id": "tp-004", "placeId": "longshan", "title": "不二法门", "upper": "不二法門須菩提意；", "lower": "大千世界觀自在身。", "source": {"label": "艋舺龙山寺官网 · 艺术鉴赏·对联", "url": "https://lungshan.org.tw/tw/03_4_1_art.php"}, "sourceNote": "据所附来源整理；标点为阅读所加，未进行现场题刻核对。", "author": "蘇鏡潭", "position": "三川殿"},
{"id": "tp-005", "placeId": "longshan", "title": "钟楼联", "upper": "小大叩隨鳴禪機頓發；", "lower": "清疎聞入妙俗慮旋忘。", "source": {"label": "艋舺龙山寺官网 · 艺术鉴赏·对联", "url": "https://lungshan.org.tw/tw/03_4_1_art.php"}, "sourceNote": "据所附来源整理；标点为阅读所加，未进行现场题刻核对。", "author": "劉育英", "position": "钟楼"},
{"id": "tp-006", "placeId": "longshan", "title": "鼓楼联", "upper": "念佛本慈悲何為作氣；", "lower": "願人同覺悟聊託宣威。", "source": {"label": "艋舺龙山寺官网 · 艺术鉴赏·对联", "url": "https://lungshan.org.tw/tw/03_4_1_art.php"}, "sourceNote": "据所附来源整理；标点为阅读所加，未进行现场题刻核对。", "author": "劉育英", "position": "鼓楼"},
 {id:'cd-001',placeId:'wuhou',title:'攻心联',upper:'能攻心则反侧自消，从古知兵非好战；',lower:'不审势即宽严皆误，后来治蜀要深思。',author:'赵藩',dynasty:'清',position:'诸葛亮殿',note:'上联写“攻心”与“知兵”，下联写“审势”与“治蜀”。可以对照阅读“能”与“不”、“攻心”与“审势”，体会联句如何从用兵转向处事。此段为联苑阅读提示，不是文献引文。',source:{label:'词典网 · 攻心联',url:'https://m.cidianwang.com/duilian/b1d6735.htm'},sourceNote:'联文、作者与景点据词典网条目；清代信息参照人民网相关介绍。尚未进行现场题刻核对。',image:'/images/wuhou-design.jpg',imageCaption:'Stitch 设计示意图 · 非实拍题刻，不作文字考证依据'},
 {id:'cd-002',placeId:'wuhou',title:'两表酬三顾',upper:'两表酬三顾；',lower:'一对足千秋。',author:'游俊',position:'过厅（据参考资料）',note:'“两表”“三顾”“一对”“千秋”以数字相对，串起出师表、三顾茅庐与隆中对。作者时代尚待进一步核实。',source:{label:'参考资料 · 武侯祠匾额对联注释',url:'https://www.yjbys.com/duilian/518374.html'},sourceNote:'二手资料线索，未核对原刻。'},
 {id:'hz-001',placeId:'xihu',title:'天下景亭叠字联',upper:'水水山山，处处明明秀秀；',lower:'晴晴雨雨，时时好好奇奇。',author:'黄文中',position:'天下景亭',note:'联中重复使用叠字，把山水之景和晴雨之时并列。标点为便于阅读所加；朝代资料暂未详。',source:{label:'词典网 · 天下景亭联',url:'https://www.cidianwang.com/duilian/75d12621.htm'}},
 {id:'sz-001',placeId:'canglang',title:'沧浪亭联',upper:'四万青钱，明月清风今有价；',lower:'一双白璧，诗人名将古无俦。',author:'齐彦槐',dynasty:'清',note:'上联从“青钱”写到“明月清风”，下联以“白璧”对“青钱”。此处仅作字句阅读提示，具体人物与典故可循来源继续查阅。',source:{label:'词典网 · 齐彦槐沧浪亭联',url:'https://www.cidianwang.com/duilian/46b27786.htm'}},
 {id:'jn-001',placeId:'daming',title:'大明湖山水联',upper:'四面荷花三面柳；',lower:'一城山色半城湖。',author:'刘凤诰',dynasty:'清',note:'“四面”与“一城”、“三面”与“半城”交错相对，将花、柳、山、湖写入两句之中。阅读提示由联苑整理。',source:{label:'词典网 · 大明湖联',url:'https://m.cidianwang.com/duilian/b7b37654.htm'},sourceNote:'来源对具体题联位置有不同表述，暂不标注殿堂位置，待进一步核实。'},
 {id:'hk-001',placeId:'lingnan',title:'岭南之风亭园联',upper:'燕來不誤東西屋；',lower:'水靜潭忘上下流。',author:'陳湛銓',source:{label:'香港教育局 · 中华经典名句选编（第5页）',url:'https://www.edb.gov.hk/attachment/tc/curriculum-development/kla/chi-edu/chinese-culture/chi-culture-calligraphy2023/2324_Classical%20sayings_%20selection.pdf'},sourceNote:'保留来源繁体字形；朝代暂未标注。'}
];
export const getPlace=(id:string)=>places.find(p=>p.id===id);
export const getCity=(id:string)=>cities.find(c=>c.id===id)!;
export const inPlace=(id:string)=>couplets.filter(c=>c.placeId===id);
