const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,   //吸底模式
    autoplay: true, //自动播放
    theme: '#FADFA3', //主题色
    loop: 'all', //音频循环播放, 可选值: 'all'全部循环, 'one'单曲循环, 'none'不循环
    order: 'random', //音频循环顺序, 可选值: 'list'列表循环, 'random'随机循环
    preload: 'auto', //预加载，可选值: 'none', 'metadata', 'auto'
    volume: 0.7, //默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
    mutex: true, //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
    listFolded: false, //列表默认折叠
    listMaxHeight: 90, //列表最大高度
    lrcType: 1, //歌词传递方式
    audio: [
	{
        name: "寂静之声",
        artist: '贵族乐团',
        url: 'http://other.web.nf01.sycdn.kuwo.cn/17592c9cdb88fff0bf2bd204ae77f5af/5dac4457/resource/n1/35/74/2210461433.mp3',
        cover: 'https://p1.music.126.net/Ix3X6A1jsuNR8NQNumhFlQ==/65970697683595.jpg?param=130y130',
      },
	  {
        name: "理想三旬",
        artist: '陈鸿宇',
        url: 'http://other.web.rh01.sycdn.kuwo.cn/ae477d69d00238d5e22b4fea4b3afa0a/5dac4922/resource/n2/8/86/1865597221.mp3',
        cover: 'http://p1.music.126.net/cqTTEPAaxXG3cOwaE4E_-g==/109951163104103366.jpg?param=130y130',
         lrc: '[ti:理想三旬]\n[al:]\n[00:01.45]原唱：陈鸿宇\n[00:02.57]雨后有车驶来\n[00:05.43]驶过暮色苍白\n[00:07.55]旧铁皮往南开，恋人已不在\n[00:12.75]收听浓烟下的\n[00:15.28]诗歌电台\n[00:18.44]不动情的咳嗽，至少看起来\n[00:23.55]归途也还可爱\n[00:25.71]琴弦少了姿态\n[00:28.61]再不见那夜里，听歌的小孩\n[00:34.33]时光匆匆独白\n[00:36.27]将颠沛磨成卡带\n[00:39.05]已枯倦的情怀，踏碎成年代\n[00:45.26]\n[00:55.03]就老去吧，孤独别醒来\n[01:01.24]你渴望的离开\n[01:06.53]只是无处停摆\n[01:11.42]就歌唱吧，眼睛眯起来\n[01:16.97]而热泪的崩坏\n[01:22.44]只是没抵达的存在\n[01:28.10]\n[01:37.65]青春又醉倒在\n[01:40.18]籍籍无名的怀\n[01:42.79]靠嬉笑来虚度，聚散得慷慨\n[01:48.32]辗转却去不到\n[01:50.75]对的站台\n[01:54.09]如果漂泊是成长，必经的路牌\n[01:59.06]你迷醒岁月中\n[02:01.53]那贫瘠的未来\n[02:03.84]像遗憾季节里，未结果的爱\n[02:09.20]弄脏了每一页诗\n[02:11.55]吻最疼痛的告白\n[02:14.34]而风声吹到这，已不需要释怀\n[02:21.00][02:27.43]就老去吧，孤独别醒来\n[02:35.68]你渴望的离开\n[02:41.21]只是无处停摆\n[02:45.87]就歌唱吧，眼睛眯起来\n[02:51.39]而热泪的崩坏\n[02:56.98]只是没抵达的存在\n[03:02.95]\n[03:22.26]就甜蜜地忍耐\n[03:24.43]繁星润湿窗台\n[03:27.11]光影跳动着像在，困倦里说爱\n[03:33.52]再无谓的感慨\n[03:36.44]以为明白\n[03:39.11]梦倒塌的地方，今已爬满青苔'
      },
      {
        name: "倾城",
        artist: '许美静',
        url: 'http://other.web.ra01.sycdn.kuwo.cn/00a8ef8ed6e2771503335c0e524872c7/5dac5a57/resource/n3/320/92/45/3797920914.mp3',
        cover: 'http://pic.xiami.net/images/album/img28/2328/125491465708868.jpg?x-oss-process=image/resize,limit_0,s_130,m_fill/quality,q_80',
        lrc: '[ti:倾城]\n[ar:许美静]\n[al:]\n[00:05.08]曲：陈佳明\n[00:07.10]词：黄伟文\n[00:10.21]编：吴庆隆\n[00:25.74]热情就算熄灭了\n[00:32.61]分手这一晚也重要\n[00:36.61]甜言蜜语谎话嬉笑\n[00:40.52]多给我一点 不要缺少\n[00:44.65]话题尽了也不重要\n[00:47.91]吻我至凄冷的深宵\n[00:51.71]繁华闹市灯光普照\n[00:55.43]然而共你已再没破晓\n[01:00.24]红眼睛幽幽的看着这孤城\n[01:03.34]如同苦笑挤出的高兴\n[01:07.15]全城为我花光狠劲\n[01:11.09]浮华盛世做分手布景\n[01:15.18]传说中痴心的眼泪会倾城\n[01:18.55]霓虹熄了世界渐冷清\n[01:22.42]烟花会谢 笙歌会停\n[01:26.48]显得这故事尾声更动听\n[02:05.24]热情就算熄灭了\n[02:09.76]分手这一晚也重要\n[02:13.54]甜言蜜语谎话嬉笑\n[02:17.44]多给我一点 不要缺少\n[02:21.36]话题尽了也不重要\n[02:24.99]吻我至凄冷的深宵\n[02:28.85]繁华闹市灯光普照\n[02:32.91]然而共你已再没破晓\n[02:37.06]红眼睛幽幽的看着这孤城\n[02:40.43]如同苦笑挤出的高兴\n[02:44.13]全城为我花光狠劲\n[02:47.83]浮华盛世做分手布景\n[02:52.12]传说中痴心的眼泪会倾城\n[02:55.67]霓虹熄了世界渐冷清\n[02:59.45]烟花会谢 笙歌会停\n[03:03.43]显得这故事尾声更动听\n[03:14.44]红眼睛幽幽的看着这孤城\n[03:18.72]如同苦笑挤出的高兴\n[03:22.12]琼楼玉宇倒了阵行\n[03:26.34]来营造这绝世的风景\n[03:29.84]传说中痴心的眼泪会倾城\n[03:33.75]霓虹熄了世界渐冷清\n[03:37.53]烟花会谢 笙歌会停\n[03:41.48]显得这故事尾声更动听'
      },
    ]
});

