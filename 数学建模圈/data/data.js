
var videopushList=[
  { imgpath: 'https://6d79-myfirst-02b89f-1258696265.tcb.qcloud.la/images/轮播图/push1.jpg?sign=68db7961145072da0e44923717cd7032&t=1554817106'},
  { imgpath: 'https://6d79-myfirst-02b89f-1258696265.tcb.qcloud.la/images/轮播图/lizhi1.jpg?sign=66f26a0cb13c311e5cf8388cac857b4d&t=1553072657' },
  { imgpath: 'https://6d79-myfirst-02b89f-1258696265.tcb.qcloud.la/images/轮播图/lizhi2.jpg?sign=e0d49aea51392bda10c1bbfcb8c4a663&t=1553072671' },
]
var videoList=[
  {
    id:0,
    imgpath:'https://6d79-myfirst-02b89f-1258696265.tcb.qcloud.la/images/科普.png?sign=449aab3b14b1d14a46e097e9a150a3e1&t=1552202220',
    title:"科普：数学建模竞赛",
    address:'cloud://myfirst-02b89f.6d79-myfirst-02b89f/video/科普：数学建模竞赛.mp4',
    introduce:'该视频主要讲解了数学建模竞赛的详细过程及注意事项',
    property: '微课',
  },
  {
    id: 1,
    imgpath: 'https://6d79-myfirst-02b89f-1258696265.tcb.qcloud.la/images/饺子.png?sign=846e39c5d3762c87ce1c6d8f629e7c15&t=1552202165',
    title: "从包饺子到数学建模",
    address: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/video/从包饺子到数学建模.mp4',
    introduce: '通过包饺子来介绍什么是数学建模，浅显易懂~',
    property: '微课',
  },
  {
    id: 2,
    imgpath: 'https://6d79-myfirst-02b89f-1258696265.tcb.qcloud.la/images/美赛.png?sign=89389b4a80b035c273a95bf5e8f136c5&t=1552202200',
    title: "2019年美国大学生数学建模大赛介绍",
    address: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/video/美赛.mp4',
    introduce: '2019年美国大学生数学建模竞赛即将到来，想要参加的小伙伴们赶紧点开看看吧！',
    property: '微课',

  },
    {
    id: 3,
      imgpath: 'https://6d79-myfirst-02b89f-1258696265.tcb.qcloud.la/images/励志.png?sign=14944e41ff5666c3c8264e141ecca0b6&t=1554816874',
    title: "青春的转变",
      address: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/video/微电影.mp4',
    introduce: '这是一部有关数学建模的微电影，主要讲述了一个高考失利，一蹶不振的少年，通过参加数学建模竞赛，发现自己的长处，从而找回自我...满满的正能量！',
    property: '微课',
  },
]
var pptList = [
  {
    id: 0,
    imgpath: 'https://6d79-myfirst-02b89f-1258696265.tcb.qcloud.la/images/ppt.png?sign=f8ed871c62a0a3df374309ccbdb0650b&t=1552744993',
    title: "讲座一：初识数学建模",
    fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/ppt课件/讲座二：认识数学建模.ppt',
    property: '课件',
  },
  {
    id: 1,
    imgpath: 'https://6d79-myfirst-02b89f-1258696265.tcb.qcloud.la/images/ppt.png?sign=f8ed871c62a0a3df374309ccbdb0650b&t=1552744993',
    title: "讲座二：数学建模竞赛",
    fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/ppt课件/讲座：数学建模竞赛.ppt',
    property: '课件',
  },
  {
    id: 2,
    imgpath: 'https://6d79-myfirst-02b89f-1258696265.tcb.qcloud.la/images/ppt.png?sign=f8ed871c62a0a3df374309ccbdb0650b&t=1552744993',
    title: "数学建模之MATLAB入门",
    fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/ppt课件/第2讲 MATLAB入门.ppt',
    property: '课件',
  },
  {
    id: 3,
    imgpath: 'https://6d79-myfirst-02b89f-1258696265.tcb.qcloud.la/images/ppt.png?sign=f8ed871c62a0a3df374309ccbdb0650b&t=1552744993',
    title: "数学建模论文答辩",
    fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/ppt课件/数学建模答辩ppt.ppt',
    property: '课件',

  },
]
var allpapers=[
    {title:"全国大学生数学建模竞赛",
    imgpath: 'https://6d79-myfirst-02b89f-1258696265.tcb.qcloud.la/images/真题2.png?sign=c894bcf321595f8c7f06ba4897c44944&t=1552550817',
    id:0,
    publish:"全国大学生数学建模竞赛组委会",
      contents:[
            {
              type: "2018 A题",
          question:"高温作业专用服装设计",
              list:[
                {
                  name:"问题描述",
                  fileid:'cloud://myfirst-02b89f.6d79-myfirst-02b89f/questions/高教社杯 2018/CUMCM-2018-Problem-A-Chinese.docx',
                },
                {
                  name: "附件（数据）",
                  fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/questions/高教社杯 2018/CUMCM-2018-Problem-A-Chinese-Appendix.xlsx',
                },
              ],
            },
            {
              type: "2018 B题",
              question: "智能RGV的动态调度策略",
              list: [
                {
                  name: "题目描述",
                  fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/questions/高教社杯 2018/B/CUMCM-2018-Problem-B-Chinese.doc',
                },
                {
                  name: "附件一",
                  fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/questions/高教社杯 2018/B/CUMCM-2018-Problem-B-Chinese-Appendix1.doc',
                },
                {
                  name: "附件二（1）",
                  fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/questions/高教社杯 2018/B/Case_1_result.xls',
                },
                {
                  name: "附件二（2）",
                  fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/questions/高教社杯 2018/B/Case_2_result.xls',
                },
                {
                  name: "附件二（3）",
                  fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/questions/高教社杯 2018/B/Case_3_result_1.xls',
                },
                {
                  name: "附件二（4）",
                  fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/questions/高教社杯 2018/B/Case_3_result_2.xls',
                },
              ],
            },
            {
              type: "2018 C题",
              question: "大型百货商场会员画像描绘",
              list: [
                {
                  name: "问题描述",
                  fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/questions/高教社杯 2018/C/CUMCM-2018-Problem C-Chinese.docx',
                },
                {
                  name: "附件1-会员信息表",
                  fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/questions/高教社杯 2018/C/附件1-会员信息表.xlsx',
                },
                {
                  name: "附件2-销售流水表",
                  fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/questions/高教社杯 2018/C/附件2-销售流水表.xlsx',
                },
                {
                  name: "附件3-会员消费明细表",
                  fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/questions/高教社杯 2018/C/附件3-会员消费明细表.xlsx',
                },
                {
                  name: "附件4-商品信息表",
                  fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/questions/高教社杯 2018/C/附件4-商品信息表.xlsx',
                },
                {
                  name: "附件5-数据字典",
                  fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/questions/高教社杯 2018/C/附件5-数据字典.docx',
                },
              ],
            },
            {
              type: "2018 D题",
              question: "汽车总装线的配置问题",
              list: [
                {
                  name: "问题描述",
                  fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/questions/高教社杯 2018/D/CUMCM-2018-problem-D-Chinese.docx',
                },
                {
                  name: "附件（数据）",
                  fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/questions/高教社杯 2018/D/CUMCM-2018-Problem-D-Chinese-Appendix.xlsx',
                },
              ],
            }, 
        {
          type: "2017 A题",
          question: "CT系统参数标定及成像",
          list: [
            {
              name: "问题描述",
              fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/questions/高教社杯 2017/A/CUMCM-2017-problem-A.docx',
            },
            {
              name: "附件（数据）",
              fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/questions/高教社杯 2017/A/A题附件.xls',
            },
          ],
        },
        {
          type: "2017 B题",
          question: "“拍照赚钱”的任务定价",
          list: [
            {
              name: "问题描述",
              fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/questions/高教社杯 2017/B/CUMCM-2017-problem-B.docx',
            },
            {
              name: "附件一：已结束项目任务数据",
              fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/questions/高教社杯 2017/B/附件一：已结束项目任务数据.xls',
            },
            {
              name: "附件二：会员信息数据",
              fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/questions/高教社杯 2017/B/附件二：会员信息数据.xlsx',
            },
            {
              name: "附件三：新项目任务数据",
              fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/questions/高教社杯 2017/B/附件三：新项目任务数据.xls',
            },
          ],
        },
        {
          type: "2017 C题",
          question: "颜色与物质浓度辨识",
          list: [
            {
              name: "问题描述",
              fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/questions/高教社杯 2017/C/CUMCM-2017-problem-C.docx',
            },
            {
              name: "附件1（数据）",
              fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/questions/高教社杯 2017/C/Data1.xls',
            },
            {
              name: "附件2（数据）",
              fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/questions/高教社杯 2017/C/Data2.xls',
            },
          ],
        },
        {
          type: "2017 D题",
          question: "巡检线路的排班",
          list: [
            {
              name: "问题描述",
              fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/questions/高教社杯 2017/D/CUMCM-2017-problem-D.docx',
            },
            {
              name: "附件（数据）",
              fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/questions/高教社杯 2017/D/CUMCM-2017-appendix-D.xlsx',
            },
          ],
        },
      ]
      },
  {
   title: "美国大学生数学建模竞赛",
    imgpath: 'https://6d79-myfirst-02b89f-1258696265.tcb.qcloud.la/images/真题2.png?sign=c894bcf321595f8c7f06ba4897c44944&t=1552550817',
    id: 1,
    publish: "美国数学及其应用联合会",
    contents: [
      {
        type: "2018 A题",
        question: "多跳 HF 无线电传播",
        list: [
          {
            name: "问题描述",
            fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/questions/美赛 2018/A/2018_MCM_Problem_A.pdf',
          },
          {
            name: "中文翻译",
            fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/questions/美赛 2018/A/c1.docx',
          },
          {
            name: "解题思路",
            fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/questions/美赛 2018/A/j1.docx',
          },
        ],
      },
      {
        type: "2018 B题",
        question: "有多少种语言？ ",
        list: [
          {
            name: "题目描述",
            fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/questions/美赛 2018/B/2018_MCM_Problem_B.pdf',
          },
          {
            name: "中文翻译",
            fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/questions/美赛 2018/B/c2.docx',
          },
          {
            name: "解题思路",
            fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/questions/美赛 2018/B/j2.docx',
          },
        ],
      },
      {
        type: "2018 C题",
        question: "能源生产",
        list: [
          {
            name: "题目描述",
            fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/questions/美赛 2018/C/2018_MCM_Problem_C.pdf',
          },
          {
            name: "中文翻译",
            fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/questions/美赛 2018/C/c3.docx',
          },
          {
            name: "附件（数据）",
            fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/questions/美赛 2018/C/ProblemCData.xlsx',
          },
          {
            name: "解题思路",
            fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/questions/美赛 2018/C/j3.docx',
          },
        ],
      },
      {
        type: "2018 D题",
        question: "从汽油驾驶到 E 驾驶",
        list: [
          {
            name: "问题描述",
            fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/questions/美赛 2018/D/2018_ICM_Problem_D.pdf',
          },
          {
            name: "中文翻译",
            fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/questions/美赛 2018/D/c4.docx',
          },
          {
            name: "解题思路",
            fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/questions/美赛 2018/D/j4.docx',
          },
        ],
      },
      {
        type: "2018 E题",
        question: "气候变化如何影响区域不稳定？",
        list: [
          {
            name: "问题描述",
            fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/questions/美赛 2018/E/2018_ICM_Problem_E.pdf',
          },
          {
            name: "中文翻译",
            fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/questions/美赛 2018/E/c5.docx',
          },
          {
            name: "解题思路",
            fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/questions/美赛 2018/E/j5.docx',
          },
        ],
      },
      {
        type: "2018 F题",
        question: "隐私成本问题",
        list: [
          {
            name: "问题描述",
            fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/questions/美赛 2018/F/2018_ICM_Problem_F.pdf',
          },
          {
            name: "中文翻译",
            fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/questions/美赛 2018/F/c6.docx',
          },
          {
            name: "解题思路",
            fileid: 'cloud://myfirst-02b89f.6d79-myfirst-02b89f/questions/美赛 2018/F/j6.docx',
          },
        ],
      },
    ]
  },
]

var textList=[
  {
    title:"数学建模到底有什么用, 虽然很讨厌, 但却是AlphaGo制胜的秘诀!",
    imgpath:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552396108&di=f4c3318c1808383c54703e3db673a58f&imgtype=jpg&er=1&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171017%2F4c34977ceee94cc58730de8a1007e550.jpeg',
    id: '5c80e147120021a168355cc2',
    numid: 0,
    property:'push',
  },
  {
    title: "通关全攻略--数学建模竞赛个人经验谈",
    imgpath: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551803194270&di=a0651106279d8211abbbe5c1f368ab5e&imgtype=0&src=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2FKbuhIl7RCTNqB7H6BBhEGTnVweyhkfNgeHFCqYeQ85CWEZqrGoMDn3FhZalPoaK8IqkVmd7rdDh1oaIqJRkBbg%2F640%3Fwx_fmt%3Djpeg',
    id: '5c7fb9cf120021a168347a12',
    numid: 1,
    property: 'push',
  },
  {
    title: "大学生数学建模教育的实践与认识",
    imgpath: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552208296062&di=039fe3571abd6c518d93876d1b0d7e87&imgtype=0&src=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2F0XXtm9Z9Omqdxxd3AXzxE7M55tFR7tGhliaYerdGQBUuqV32fhiacOeekDCXIicY3Vfh1UMAbQOy3pWUHl0B16jBg%2F640%3Fwx_fmt%3Djpeg',
    id: '5c84ab76120021a1683b4c40',
    numid: 2,
    property: 'push',
  },
]
var hotkeys=[
  {
    name:"旅行商",
  },
  {
    name: "房地产",
  },
  {
    name: "射线能量",
  },

]
var algorithmlist=[
  {
    title: "蒙特卡罗算法",
    id: "XHI17eSiwXKAQqWg",
    imgpath: 'https://6d79-myfirst-02b89f-1258696265.tcb.qcloud.la/images/basicsicon/IMG_20190324_182228.jpg?sign=8a00b8a185068727ee8db98e5f39fd33&t=1553423074',
    introduce: "又称随机性模拟算法,是通过计算机仿真来解决问题的算法,同时通过模拟可以来检验自己模型的正确性。在金融工程学，宏观经济学，计算物理学等领域应用广泛。",
    list: [
      {
        name: "算法讲解",
        fileid: "cloud://myfirst-02b89f.6d79-myfirst-02b89f/入门/算法/蒙特卡洛算法.doc",
      },
      // {
      //   name: "",
      //   fileid: "",
      // },
      
    ],
  },
  {
    title: "数据拟合、参数估计、插值算法",
    id: "XHI1_-SiwXKAQqWh",
    imgpath: 'https://6d79-myfirst-02b89f-1258696265.tcb.qcloud.la/images/basicsicon/IMG_20190324_182228.jpg?sign=8a00b8a185068727ee8db98e5f39fd33&t=1553423074',
    introduce: "比赛中通常会遇到大量的数据需要处理,而处理数据的关键就在于这些算法。",
    list: [
      {
        name: "算法讲解",
        fileid: "cloud://myfirst-02b89f.6d79-myfirst-02b89f/入门/算法/数据拟合、参数估计、插值等数据处理算法.docx",
      },
      // {
      //   name: "",
      //   fileid: "",
      // },
      // {
      //   name: "",
      //   fileid: "",
      // },
    ],
  },
  {
    title: "分支定界算法",
    id: "XHI2DHkPDdDCJ556",
    imgpath: 'https://6d79-myfirst-02b89f-1258696265.tcb.qcloud.la/images/basicsicon/IMG_20190324_182228.jpg?sign=8a00b8a185068727ee8db98e5f39fd33&t=1553423074',
    introduce: "应用于求解整数规划问题、生产进度表问题、货郎担问题、选址问题、背包问题以及可行解的数目为有限的许多其它问题。",
    list: [
      {
        name: "算法讲解",
        fileid: "cloud://myfirst-02b89f.6d79-myfirst-02b89f/入门/算法/分支定界算法.doc",
      },
      // {
      //   name: "",
      //   fileid: "",
      // },
      // {
      //   name: "",
      //   fileid: "",
      // },
    ],
  },
  {
    title: "分治算法",
    id: "XHI2GVsqTi00toCQ",
    imgpath: 'https://6d79-myfirst-02b89f-1258696265.tcb.qcloud.la/images/basicsicon/IMG_20190324_182228.jpg?sign=8a00b8a185068727ee8db98e5f39fd33&t=1553423074',
    introduce: "将一个规模为N的问题分解为K个规模较小的子问题，这些子问题相互独立且与原问题性质相同。求出子问题的解，就可得到原问题的解。",
    list: [
      {
        name: "算法讲解",
        fileid: "cloud://myfirst-02b89f.6d79-myfirst-02b89f/入门/算法/分治算法.doc",
      },
      // {
      //   name: "",
      //   fileid: "",
      // },
      // {
      //   name: "",
      //   fileid: "",
      // },
    ],
  },
  {
    title: "模拟退火算法",
    id: "XHI2JuSiwXKAQqWi",
    imgpath: 'https://6d79-myfirst-02b89f-1258696265.tcb.qcloud.la/images/basicsicon/IMG_20190324_182228.jpg?sign=8a00b8a185068727ee8db98e5f39fd33&t=1553423074',
    introduce: "一种通用的优化算法，目前已在工程中得到了广泛应用，诸如VLSI、生产调度、控制工程、机器学习、神经网络、信号处理等领域。",
    list: [
      {
        name: "算法讲解",
        fileid: "cloud://myfirst-02b89f.6d79-myfirst-02b89f/入门/算法/模拟退火法.doc",
      },
      // {
      //   name: "",
      //   fileid: "",
      // },
      // {
      //   name: "",
      //   fileid: "",
      // },
    ],
  },
  {
    title: "神经网络算法",
    id: "XHI2M1sqTi00toCR",
    imgpath: 'https://6d79-myfirst-02b89f-1258696265.tcb.qcloud.la/images/basicsicon/IMG_20190324_182228.jpg?sign=8a00b8a185068727ee8db98e5f39fd33&t=1553423074',
    introduce: "根据生物原型的研究，建立神经元、神经网络的理论模型，其中包括概念模型、知识模型、物理化学模型、数学模型等。",
    list: [
      {
        name: "算法讲解",
        fileid: "cloud://myfirst-02b89f.6d79-myfirst-02b89f/入门/算法/神经网络.doc",
      },
      // {
      //   name: "",
      //   fileid: "",
      // },
      // {
      //   name: "",
      //   fileid: "",
      // },
    ],
  },
  {
    title: "组合算法",
    id: "XHI2P1sqTi00toCS",
    imgpath: 'https://6d79-myfirst-02b89f-1258696265.tcb.qcloud.la/images/basicsicon/IMG_20190324_182228.jpg?sign=8a00b8a185068727ee8db98e5f39fd33&t=1553423074',
    introduce: "包括算法设计和算法分析两个方面。关于算法设计，历史上已经总结出了若干带有普遍意义的方法和技术，如动态规划、回溯法、贪心法等。",
    list: [
      {
        name: "算法讲解",
        fileid: "cloud://myfirst-02b89f.6d79-myfirst-02b89f/入门/算法/组合算法.docx",
      },
      // {
      //   name: "",
      //   fileid: "",
      // },
      // {
      //   name: "",
      //   fileid: "",
      // },
    ],
  },
  {
    title: "网格算法和穷举法",
    id: "XHI2TuSiwXKAQqWj",
    imgpath: 'https://6d79-myfirst-02b89f-1258696265.tcb.qcloud.la/images/basicsicon/IMG_20190324_182228.jpg?sign=8a00b8a185068727ee8db98e5f39fd33&t=1553423074',
    introduce: "暴力搜索最优点的算法,在很多竞赛题中有应用,当重点讨论模型本身而轻视算法的时候,可以使用这种暴力方案,最好使用一些高级语言作为编程工具。",
    list: [
      {
        name: "算法讲解",
        fileid: "cloud://myfirst-02b89f.6d79-myfirst-02b89f/入门/算法/网格算法和穷举法.doc",
      },
      // {
      //   name: "",
      //   fileid: "",
      // },
      // {
      //   name: "",
      //   fileid: "",
      // },
    ],
  },
  // {
  //   title: "图象处理算法",
  //   id: "XHI2WXkPDdDCJ558",
  //   imgpath: '',
  //   introduce: "",
  //   list: [
  //     {
  //       name: "",
  //       fileid: "",
  //     },
  //     {
  //       name: "",
  //       fileid: "",
  //     },
  //     {
  //       name: "",
  //       fileid: "",
  //     },
  //   ],
  // },
  // {
  //   title: "动态规划、回溯搜索、分治算法、分支定界等计算机算法",
  //   id: "XHI2ZFsqTi00toCT",
  //   imgpath: '',
  //   introduce: "",
  //   list: [
  //     {
  //       name: "",
  //       fileid: "",
  //     },
  //     {
  //       name: "",
  //       fileid: "",
  //     },
  //     {
  //       name: "",
  //       fileid: "",
  //     },
  //   ],
  // },
]
var modelist= [
    {
      title: "初等模型",
      id: "XH4eKInnuWjciycY",
    imgpath: 'https://6d79-myfirst-02b89f-1258696265.tcb.qcloud.la/images/basicsicon/模型.jpg?sign=3ac316a944333592df8829148dc6a6ce&t=1553433355',
      introduce: "数学建模在生活中的一些基本模型，适于初学者入门学习。",
      list: [
        {
          name: "模型详解",
          fileid: "cloud://myfirst-02b89f.6d79-myfirst-02b89f/入门/模型/第二章 初等模型.ppt",
        },
      ],
    },
    {
      title: "简单优化模型",
      id: "XHIys-SiwXKAQqWa",
      imgpath: 'https://6d79-myfirst-02b89f-1258696265.tcb.qcloud.la/images/basicsicon/模型.jpg?sign=3ac316a944333592df8829148dc6a6ce&t=1553433355',
      introduce: "归结为微积分中的函数极值问题，可以直接用微分法求解。其要求就是在已给定的能够满足的条件下，设计一个具体可行的策略，以得到最为满意的结果。",
      list: [
        {
          name: "模型详解",
          fileid: "cloud://myfirst-02b89f.6d79-myfirst-02b89f/入门/模型/第三章 简单的优化模型.ppt",
        },
      ],
    },
    {
      title: "数学规划模型",
      id: "XHI1JFsqTi00toCN",
      imgpath: 'https://6d79-myfirst-02b89f-1258696265.tcb.qcloud.la/images/basicsicon/模型.jpg?sign=3ac316a944333592df8829148dc6a6ce&t=1553433355',
      introduce: "一般都是指离散的或者是连续的，抑或是有约束的或者是无约束的优化问题模型。通常有约束的优化问题求解起来比无约束的优化问题难。",
      list: [
        {
          name: "模型详解",
          fileid: "cloud://myfirst-02b89f.6d79-myfirst-02b89f/入门/模型/第四章 数学规划模型.ppt",
        },
      ],
    },
    {
      title: "微分方程模型",
      id: "XHI1R1sqTi00toCO",
      imgpath: 'https://6d79-myfirst-02b89f-1258696265.tcb.qcloud.la/images/basicsicon/模型.jpg?sign=3ac316a944333592df8829148dc6a6ce&t=1553433355',
      introduce: "当要描述某事件的数量变化对时间或者其它东西的变化时，可以考虑采用微分方程模型。",
      list: [
        {
          name: "模型详解",
          fileid: "cloud://myfirst-02b89f.6d79-myfirst-02b89f/入门/模型/第五章 微分方程模型.ppt",
        },
      ],
    },
  {
    title: "稳定性模型",
    id: "XHI1R1sqTi00toCO",
    imgpath: 'https://6d79-myfirst-02b89f-1258696265.tcb.qcloud.la/images/basicsicon/模型.jpg?sign=3ac316a944333592df8829148dc6a6ce&t=1553433355',
    introduce: "建模对象是动态过程，而建模目的是研究时间充分长以后过程的变化趋势，即平衡状态是否稳定。",
    list: [
      {
        name: "模型详解",
        fileid: "cloud://myfirst-02b89f.6d79-myfirst-02b89f/入门/模型/第六章 稳定性模型.ppt",
      },
    ],
  },
  {
    title: "差分方程模型",
    id: "XHI1R1sqTi00toCO",
    imgpath: 'https://6d79-myfirst-02b89f-1258696265.tcb.qcloud.la/images/basicsicon/模型.jpg?sign=3ac316a944333592df8829148dc6a6ce&t=1553433355',
    introduce: "将连续变量在一定的条件下进行离散化，从而将连续型模型转化为离散型模型。因此，最后都归结为求解离散形式的差分方程解的问题。",
    list: [
      {
        name: "模型详解",
        fileid: "cloud://myfirst-02b89f.6d79-myfirst-02b89f/入门/模型/第七章 差分方程模型.ppt",
      },
    ],
  },
  {
    title: "离散模型",
    id: "XHI1R1sqTi00toCO",
    imgpath: 'https://6d79-myfirst-02b89f-1258696265.tcb.qcloud.la/images/basicsicon/模型.jpg?sign=3ac316a944333592df8829148dc6a6ce&t=1553433355',
    introduce: "图论、网络流、整数规划、组合数学等许多学科讨论和研究的对象，这类模型在生产调度、交通控制、物流、管理科学和社会科学等有着广泛的用途。",
    list: [
      {
        name: "模型详解",
        fileid: "cloud://myfirst-02b89f.6d79-myfirst-02b89f/入门/模型/第八章 离散模型.ppt",
      },
    ],
  },
  {
    title: "概率模型",
    id: "XHI1R1sqTi00toCO",
    imgpath: 'https://6d79-myfirst-02b89f-1258696265.tcb.qcloud.la/images/basicsicon/模型.jpg?sign=3ac316a944333592df8829148dc6a6ce&t=1553433355',
    introduce: "用来描述不同随机变量之间关系的数学模型，通常情况下刻画了一个或多个随机变量之间的相互非确定性的概率关系。",
    list: [
      {
        name: "模型详解",
        fileid: "cloud://myfirst-02b89f.6d79-myfirst-02b89f/入门/模型/第九章 概率模型.ppt",
      },
    ],
  },
  {
    title: "统计回归模型",
    id: "XHI1R1sqTi00toCO",
    imgpath: 'https://6d79-myfirst-02b89f-1258696265.tcb.qcloud.la/images/basicsicon/模型.jpg?sign=3ac316a944333592df8829148dc6a6ce&t=1553433355',
    introduce: "研究一个变量Y与其他若干变量X之间相关关系的一种数学工具。回归分析所研究的主要问题是如何利用变量X,Y的观察值对回归函数进行统计推断，包括对他进行估计及检验与它有关的假设等。",
    list: [
      {
        name: "模型详解",
        fileid: "cloud://myfirst-02b89f.6d79-myfirst-02b89f/入门/模型/第十章 统计回归模型.ppt",
      },
    ],
  },
  {
    title: "马氏链模型",
    id: "XHI1R1sqTi00toCO",
    imgpath: 'https://6d79-myfirst-02b89f-1258696265.tcb.qcloud.la/images/basicsicon/模型.jpg?sign=3ac316a944333592df8829148dc6a6ce&t=1553433355',
    introduce: "具有无后效性的，时间、状态均为离散的随机转移过程通常用马氏链模型描述。马氏链模型在经济、社会、生态、遗传等许多领域有着广泛的应用。",
    list: [
      {
        name: "模型详解",
        fileid: "cloud://myfirst-02b89f.6d79-myfirst-02b89f/入门/模型/第十一章 马氏链模型.ppt",
      },
    ],
  },
  ]
var toollist= [
      {
        title: "Matlab",
        id: "text1",
    imgpath: 'https://6d79-myfirst-02b89f-1258696265.tcb.qcloud.la/images/basicsicon/matlab.png?sign=24a5bdad0843cc1e19aafb3144c7d6e2&t=1553417540',
    introduce: "主要解决矩阵运算，在数学建模过程中提供模拟建模，检验和优化方面，可以使用提供的多种概率统计学命令，进行多种统计量和置信区间的检验，综合性较强。",
        list: [
          {
            name: "Matlab入门",
            fileid: "cloud://myfirst-02b89f.6d79-myfirst-02b89f/入门/matlab/附录一  Matlab入门.pdf",
          },
          {
            name: "常用的程序及函数",
            fileid: "cloud://myfirst-02b89f.6d79-myfirst-02b89f/入门/matlab/数学建模中常用的30个MATLAB程序和函数.doc",
          },
          {
            name: "Matlab在线性代数中的应用",
            fileid: "cloud://myfirst-02b89f.6d79-myfirst-02b89f/入门/matlab/34附录二  Matlab在线性代数中的应用.doc",
          },
        ],
      },
      {
        title: "Mathematica",
        id: "text2",
        imgpath: 'https://6d79-myfirst-02b89f-1258696265.tcb.qcloud.la/images/basicsicon/mathethic.png?sign=5d3f394592d4353c4c7c84aab8b6520d&t=1553417611',
        introduce: "为数学建模提供强大的数值运算、符号运算、数学图形绘制等功能，轻松编写代码，执行效率较高。",
        list: [
          {
            name: "Mathematica编程基础",
            fileid: "cloud://myfirst-02b89f.6d79-myfirst-02b89f/入门/mathematics/Mathematica的编程基础.doc",
          },
          {
            name: "Mathematica在数学建模上的应用",
            fileid: "cloud://myfirst-02b89f.6d79-myfirst-02b89f/入门/mathematics/MATHEMATICA在数学建模中的应用.pdf",
          },
        ],
      },
      {
       title: "lingo",
        id: "text3",
        imgpath: 'https://6d79-myfirst-02b89f-1258696265.tcb.qcloud.la/images/basicsicon/lingo.png?sign=b94fa913a5d61ee038c2253438687cf0&t=1552808816',
        introduce: "用于求解非线性规划，也可以用于一些线性和非线性方程组的求解等，功能十分强大，是求解优化模型的最佳选择。",
        list: [
          {
            name: "lingo教程",
            fileid: "cloud://myfirst-02b89f.6d79-myfirst-02b89f/入门/lingo/数学建模软件lingo教程.doc",
          },
          {
            name: "lingo在运筹学问题的应用",
            fileid: "cloud://myfirst-02b89f.6d79-myfirst-02b89f/入门/lingo/Lingo and lindo解决运筹学问题.doc",
          },
        ],
      },
      {
       title: "SAS",
        id: "text4",
        imgpath: 'https://6d79-myfirst-02b89f-1258696265.tcb.qcloud.la/images/basicsicon/sas.png?sign=0651ce3ac9629596e5a971bdf06dacda&t=1553417644',
        introduce: "SAS在数据分析上有着巨大的优势，在数学建模中，数据分析与模型数据推导是必不可少的重要一环，也就造就了SAS在数学建模中稳固的地位。",
        list: [
          {
            name: "SAS入门",
            fileid: "cloud://myfirst-02b89f.6d79-myfirst-02b89f/入门/sps/sps.docx",
          },
          {
            name: "SAS在数据挖掘上的实例",
            fileid: "cloud://myfirst-02b89f.6d79-myfirst-02b89f/入门/sps/SAS 数据挖掘实例.pdf",
          },
        ],
      },
    ]

module.exports={
  videopushList: videopushList,
  videoList:videoList,
  pptList:pptList,
  textList:textList,
  hotkeys:hotkeys,
  allpapers: allpapers,
  algorithmlist: algorithmlist,
  modelist:modelist,
  toollist:toollist,
}