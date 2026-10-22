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
 {id:'macau',name:'澳门',english:'MACAU',note:'景点目录先行，联文资料陆续补充。'},
 {id:'taipei',name:'台北',english:'TAIPEI',note:'寺庙与园地中的题联，等待资料补充。'}
];
export const places:Place[] = [
 {id:'yiheyuan',cityId:'beijing',name:'颐和园',english:'Summer Palace',description:'北京的皇家园林。此处建立对联目录，具体联文待补充。',location:'北京'},
 {id:'tanzhe',cityId:'beijing',name:'潭柘寺',english:'Tanzhe Temple',description:'北京的一处寺庙。具体题联与位置资料待补充。',location:'北京'},
 {id:'xihu',cityId:'hangzhou',name:'西湖 · 天下景亭',english:'West Lake',description:'天下景亭位于西湖中山公园内，收录以山水晴雨为题的叠字联。',location:'杭州 · 中山公园'},
 {id:'lingyin',cityId:'hangzhou',name:'灵隐寺',english:'Lingyin Temple',description:'杭州的寺庙景点。联文与题刻照片待补充。',location:'杭州'},
 {id:'canglang',cityId:'suzhou',name:'沧浪亭',english:'Canglang Pavilion',description:'苏州园林景点。这里收录相关题联，并保留条目来源。',location:'苏州'},
 {id:'wuhou',cityId:'chengdu',name:'成都武侯祠',english:'Wuhou Shrine',description:'成都的祠庙景点。所收联文涉及诸葛亮的生平、出师与治蜀。',location:'四川 · 成都'},
 {id:'caotang',cityId:'chengdu',name:'杜甫草堂',english:'Du Fu Thatched Cottage',description:'成都的杜甫纪念地。联文资料待补充。',location:'成都'},
 {id:'daming',cityId:'jinan',name:'大明湖',english:'Daming Lake',description:'济南的湖泊景区。这里收录描写荷花、垂柳与湖山的题联。',location:'山东 · 济南'},
 {id:'lingnan',cityId:'hongkong',name:'荔枝角公园 · 岭南之风',english:'Lingnan Garden',description:'香港亭园对联的收录点。联文据香港教育局选编资料整理。',location:'香港 · 荔枝角'},
 {id:'mange',cityId:'macau',name:'妈阁庙',english:'A-Ma Temple',description:'澳门的寺庙景点。当前仅建立目录，联文待补充。',location:'澳门'},
 {id:'longshan',cityId:'taipei',name:'艋舺龙山寺',english:'Longshan Temple',description:'台北的寺庙景点。当前仅建立目录，联文待补充。',location:'台北'}
];
export const couplets:Couplet[] = [
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
