// ================================================================
// 白石桥七号 - 北理人商务平台 (Mobile)
// ================================================================
window.onerror = function(msg, src, line) {
  var app = document.getElementById('app');
  if (app) app.innerHTML = '<div style="padding:40px;text-align:center;color:red"><h2>JS Error</h2><p>' + msg + '</p><p>Source: ' + (src||'?') + ' Line: ' + (line||'?') + '</p></div>';
};

// ================================================================
// IMAGE PLACEHOLDER HELPER - 使用稳定的网络图片服务
// ================================================================
function img(seed, w, h) {
  w = w || 400; h = h || 300;
  
  // 使用稳定的图片服务(国内可用)
  // 使用随机ID确保不同seed显示不同图片
  var hash = 0;
  for (var i = 0; i < seed.length; i++) hash = ((hash << 5) - hash) + seed.charCodeAt(i);
  var id = Math.abs(hash) % 100;
  
  // 使用不同分类的图片
  if (seed.indexOf('banner') === 0) {
    // 横幅图片 - 使用商务/科技类
    return 'https://picsum.photos/id/' + (100 + id % 20) + '/' + w + '/' + h;
  } else if (seed.indexOf('feed') === 0) {
    // 动态图片 - 使用自然/生活类
    return 'https://picsum.photos/id/' + (200 + id % 30) + '/' + w + '/' + h;
  } else if (seed.indexOf('u') === 0 || seed.indexOf('r') === 0 || seed.indexOf('m') === 0) {
    // 用户头像 - 使用人物类
    return 'https://picsum.photos/id/' + (200 + id % 30) + '/' + w + '/' + h;
  } else if (seed.indexOf('logo') === 0) {
    // Logo - 使用抽象类
    return 'https://picsum.photos/id/' + (100 + id % 20) + '/' + w + '/' + h;
  } else if (seed.indexOf('prod') === 0) {
    // 产品图片 - 使用科技类
    return 'https://picsum.photos/id/' + (100 + id % 20) + '/' + w + '/' + h;
  } else if (seed.indexOf('course') === 0) {
    // 课程封面 - 使用商务类
    return 'https://picsum.photos/id/' + (100 + id % 20) + '/' + w + '/' + h;
  } else if (seed.indexOf('svc') === 0) {
    // 服务图片 - 使用办公类
    return 'https://picsum.photos/id/' + (100 + id % 20) + '/' + w + '/' + h;
  } else if (seed.indexOf('report') === 0) {
    // 报告图片 - 使用数据类
    return 'https://picsum.photos/id/' + (100 + id % 20) + '/' + w + '/' + h;
  }
  
  // 默认图片
  return 'https://picsum.photos/id/' + id + '/' + w + '/' + h;
}

// ================================================================
// SECTION A: MOCK DATA
// ================================================================
var banners = [
  { id: 1, image: img('banner1', 750, 350), title: '北理工校友上市企业名录', link: '/news/1' },
  { id: 2, image: img('banner2', 750, 350), title: '北理工校友投资人及机构名录', link: '/news/2' },
  { id: 3, image: img('banner3', 750, 350), title: '北理工领先科技项目名录', link: '/news/3' },
  { id: 4, image: img('banner4', 750, 350), title: '平台服务成果年报', link: '/news/4' }
];

var newsList = [
  { id: 1, title: '北京理工大学2026年校友企业家论坛成功举办', cover: img('news1', 400, 240), date: '2026-06-08', author: '管理员', summary: '6月5日，北京理工大学2026年校友企业家论坛在中关村校区隆重举行，来自全国各地的200余位校友企业家齐聚一堂，共话创新发展。', content: '<p>6月5日，北京理工大学2026年校友企业家论坛在中关村校区隆重举行，来自全国各地的200余位校友企业家齐聚一堂，共话创新发展。本次论坛以"科技创新与产业升级"为主题，围绕人工智能、新能源、先进制造等前沿领域展开深入研讨。</p><p>论坛开幕式上，学校领导介绍了近年来学校在科研创新、人才培养等方面取得的突出成就。多位优秀校友企业家代表分享了创业经验与行业洞察，引发了与会者的热烈讨论。</p><p>本次论坛还设立了项目路演环节，12个校友创业项目进行了展示，涵盖人工智能、生物医药、新材料等多个领域。现场多家投资机构与项目方达成初步合作意向。</p><p>论坛期间，校友们参观了学校重点实验室和创新中心，深入了解母校最新科研成果。多位校友表示，将进一步加强与母校的合作，推动产学研深度融合。</p>', views: 1256, likes: 89, comments: 23 },
  { id: 2, title: '白石桥七号会员企业走访——走进华为技术有限公司', cover: img('news2', 400, 240), date: '2026-06-05', author: '管理员', summary: '近日，白石桥七号组织会员企业代表赴华为技术有限公司参观交流，深入了解华为在5G、云计算等领域的创新成果。', content: '<p>近日，白石桥七号组织会员企业代表赴华为技术有限公司参观交流，深入了解华为在5G、云计算、人工智能等领域的创新成果。</p><p>参访团由白石桥七号发起人代表和会员企业家组成，一行30余人参观了华为深圳总部园区、研发中心和展示厅。华为技术专家详细介绍了公司在数字化转型、智能制造、智慧城市等领域的技术方案和应用案例。</p><p>座谈会上，双方就企业数字化转型的关键挑战和解决方案进行了深入交流。华为专家针对参访企业提出的具体问题给予了专业建议。</p>', views: 986, likes: 67, comments: 15 },
  { id: 3, title: '人工智能赋能制造业转型升级专题沙龙圆满落幕', cover: img('news3', 400, 240), date: '2026-06-01', author: '管理员', summary: '由白石桥七号主办的"AI赋能制造业"专题沙龙在北京成功举办，来自AI领域和制造业的40余位校友进行了深度交流。', content: '<p>由白石桥七号主办的"AI赋能制造业"专题沙龙在北京成功举办，来自AI领域和制造业的40余位校友进行了深度交流。</p><p>活动邀请了3位在人工智能和智能制造领域有丰富实践经验的校友进行了主题分享，内容涵盖工业视觉检测、预测性维护、智能排产等热门话题。</p>', views: 756, likes: 45, comments: 12 },
  { id: 4, title: '关于征集北理工校友企业产品入驻平台的通知', cover: img('news4', 400, 240), date: '2026-05-28', author: '管理员', summary: '为进一步丰富平台资源，现面向全体校友企业征集优质产品入驻白石桥七号商务平台。', content: '<p>为进一步丰富平台资源，更好地服务广大校友，现面向全体校友企业征集优质产品入驻白石桥七号商务平台。</p><p>征集范围包括但不限于：科技产品、消费品、工业品、专业服务等。入驻产品将获得平台专属展示位和精准推荐机会。</p>', views: 1567, likes: 112, comments: 35 }
];

var activityList = [
  { id: 1, type: '商务活动', reviewStatus: 'approved', title: '北理工校友企业投融资对接会', cover: img('act1', 400, 240), date: '2026-06-20', location: '北京中关村', status: '报名中', fee: 0, organizer: '张建国', orgAvatar: img('avatar1', 100, 100), publisher: { name: '张建国', avatar: img('avatar1', 100, 100), role: '商务会员' }, deadline: '2026-06-18', description: '<p>为促进校友企业融资对接，本次投融资对接会将邀请多家知名投资机构参与，为校友企业提供展示和对接机会。欢迎有融资需求的校友企业报名参加。</p>', registered: 28, customFields: [{ label: '所属行业', type: 'select', options: ['人工智能', '新能源', '生物医药', '金融', '其他'], required: true }, { label: '公司名称', type: 'text', required: true }, { label: '职位', type: 'text', required: false }], registeredUsers: [{ name: '李明远', avatar: img('u2', 60, 60) }, { name: '王军', avatar: img('u3', 60, 60) }, { name: '刘芳', avatar: img('u4', 60, 60) }, { name: '陈晓华', avatar: img('u5', 60, 60) }, { name: '赵磊', avatar: img('u6', 60, 60) }, { name: '孙丽', avatar: img('u7', 60, 60) }, { name: '周杰', avatar: img('u8', 60, 60) }, { name: '吴敏', avatar: img('u9', 60, 60) }] },
  { id: 2, type: '校友活动', reviewStatus: 'approved', title: '走进字节跳动——数字化转型与组织创新', cover: img('act2', 400, 240), date: '2026-07-25', location: '北京海淀', status: '报名中', fee: 200, organizer: '李明远', orgAvatar: img('avatar2', 100, 100), publisher: { name: '李明远', avatar: img('avatar2', 100, 100), role: '认证校友' }, deadline: '2026-07-20', description: '<p>参访字节跳动总部，学习其在数字化转型、组织管理创新和企业文化建设方面的先进经验。活动费用包含交通和午餐。</p>', registered: 45, customFields: [{ label: '所属学校', type: 'text', required: true }, { label: '毕业年份', type: 'select', options: ['2026届', '2025届', '2024届', '2023届', '2022届', '更早'], required: false }, { label: '备注', type: 'textarea', required: false }], registeredUsers: [{ name: '张建国', avatar: img('u1', 60, 60) }, { name: '王军', avatar: img('u3', 60, 60) }, { name: '刘芳', avatar: img('u4', 60, 60) }, { name: '赵磊', avatar: img('u5', 60, 60) }, { name: '孙丽', avatar: img('u6', 60, 60) }, { name: '周杰', avatar: img('u7', 60, 60) }, { name: '吴敏', avatar: img('u8', 60, 60) }, { name: '郑凯', avatar: img('u10', 60, 60) }] },
  { id: 3, type: '商务活动', reviewStatus: 'approved', title: '2026北理工校友创业项目路演（第二季）', cover: img('act3', 400, 240), date: '2026-07-15', location: '北京朝阳', status: '报名中', fee: 0, organizer: '王军', orgAvatar: img('avatar3', 100, 100), publisher: { name: '王军', avatar: img('avatar3', 100, 100), role: '商务会员' }, deadline: '2026-07-10', description: '<p>为展示校友创业成果、对接产业资源和资本支持，特举办2026年度第二季校友创业项目路演活动。欢迎创业校友报名展示，也欢迎投资人校友参与评审。</p>', registered: 56, customFields: [{ label: '项目名称', type: 'text', required: true }, { label: '融资阶段', type: 'select', options: ['种子轮', '天使轮', 'A轮', 'B轮及以后'], required: true }, { label: '融资金额', type: 'text', required: false }], registeredUsers: [{ name: '张建国', avatar: img('u1', 60, 60) }, { name: '李明远', avatar: img('u2', 60, 60) }, { name: '刘芳', avatar: img('u4', 60, 60) }, { name: '陈晓华', avatar: img('u5', 60, 60) }, { name: '孙丽', avatar: img('u6', 60, 60) }, { name: '周杰', avatar: img('u7', 60, 60) }, { name: '吴敏', avatar: img('u8', 60, 60) }, { name: '郑凯', avatar: img('u10', 60, 60) }] },
  { id: 4, type: '校友活动', reviewStatus: 'pending', title: '北理工羽毛球校友联谊赛', cover: img('act4', 400, 240), date: '2026-07-22', location: '北京理工大学体育馆', status: '报名中', fee: 50, organizer: '赵明辉', orgAvatar: img('m1', 100, 100), publisher: { name: '赵明辉', avatar: img('m1', 100, 100), role: '认证校友' }, deadline: '2026-07-20', description: '<p>面向全体北理工校友的羽毛球友谊赛，设有男单、女单、混双三个项目。欢迎各水平的羽毛球爱好者参加，以球会友！</p>', registered: 18, customFields: [{ label: '参赛项目', type: 'select', options: ['男单', '女单', '混双'], required: true }], registeredUsers: [{ name: '张建国', avatar: img('u1', 60, 60) }, { name: '李明远', avatar: img('u2', 60, 60) }, { name: '王军', avatar: img('u3', 60, 60) }] },
  { id: 5, type: '商务活动', reviewStatus: 'pending', title: '校友企业联合招聘会（北京站）', cover: img('act5', 400, 240), date: '2026-08-10', location: '北京中关村国际人才中心', status: '未开始', fee: 0, organizer: '陈晓华', orgAvatar: img('u2', 100, 100), publisher: { name: '陈晓华', avatar: img('u2', 100, 100), role: '商务会员' }, deadline: '2026-08-05', description: '<p>由白石桥七号平台联合20余家校友企业举办的大型线下招聘会，涵盖AI、新能源、生物医药、金融等多个行业。欢迎求职校友前来应聘、欢迎招聘企业报名设展。</p>', registered: 12, customFields: [{ label: '应聘岗位', type: 'text', required: true }, { label: '工作年限', type: 'select', options: ['应届生', '1-3年', '3-5年', '5-10年', '10年以上'], required: false }], registeredUsers: [{ name: '赵磊', avatar: img('u5', 60, 60) }, { name: '孙丽', avatar: img('u6', 60, 60) }] },
  { id: 6, type: '平台活动', reviewStatus: 'approved', title: '白石桥七号年度校友大会', cover: img('act6', 400, 240), date: '2026-09-15', location: '北京国家会议中心', status: '未开始', fee: 0, organizer: '平台运营', orgAvatar: img('admin', 100, 100), publisher: { name: '平台运营', avatar: img('admin', 100, 100), role: '平台' }, deadline: '2026-09-10', description: '<p>一年一度的白石桥七号校友大会，将邀请校领导、各行业杰出校友代表发表演讲，回顾平台年度成果，展望未来发展蓝图。欢迎全体校友踊跃报名参加！</p>', registered: 320, registeredUsers: [{ name: '张建国', avatar: img('u1', 60, 60) }, { name: '李明远', avatar: img('u2', 60, 60) }, { name: '王军', avatar: img('u3', 60, 60) }, { name: '刘芳', avatar: img('u4', 60, 60) }, { name: '陈晓华', avatar: img('u5', 60, 60) }, { name: '赵磊', avatar: img('u6', 60, 60) }, { name: '孙丽', avatar: img('u7', 60, 60) }, { name: '周杰', avatar: img('u8', 60, 60) }] }
];

var memberPackages = [
  { id: 1, name: '季度会员', duration: '3个月', price: 299, originalPrice: 399, color: '#6fa4cf', popular: false, benefits: ['会员名片展示', '企业信息发布', '产品推广', '商务活动优先报名'] },
  { id: 2, name: '年度会员', duration: '12个月', price: 899, originalPrice: 1299, color: '#dabb6e', popular: true, benefits: ['会员名片展示', '企业信息发布', '产品推广', '商务活动优先报名', '专属客服', '积分翻倍', '年度校友大会VIP席位'] },
  { id: 3, name: '月度会员', duration: '1个月', price: 129, originalPrice: 199, color: '#07c160', popular: false, benefits: ['会员名片展示', '企业信息发布', '产品推广'] }
];

var memberOrders = [
  { id: 'MO20260601001', packageName: '年度会员', price: 899, status: '已完成', createTime: '2026-06-01 10:30', expiryDate: '2027-06-01' },
  { id: 'MO20260315002', packageName: '季度会员', price: 299, status: '已完成', createTime: '2026-03-15 14:20', expiryDate: '2026-06-15' }
];

// AI报告产品列表
var aiReports = [
  { 
    id: 'R001', 
    name: '产业全景分析报告', 
    price: 2999, 
    originalPrice: 3999,
    description: '基于AI智能分析，深度剖析目标产业的发展现状、市场规模、竞争格局、技术趋势和投资机会，为企业战略决策提供数据支撑。',
    features: ['产业规模与增速分析', '竞争格局全景图', '技术发展趋势预测', '投资机会评估', '政策影响分析'],
    cover: img('report1', 400, 300),
    deliveryTime: '2-3个工作日',
    format: 'PDF + PPT'
  },
  { 
    id: 'R002', 
    name: '企业经营分析报告', 
    price: 1999, 
    originalPrice: 2699,
    description: '全面分析企业经营状况，包括财务健康度、运营效率、市场表现、客户满意度等维度，帮助企业发现问题、优化管理。',
    features: ['财务指标深度分析', '运营效率评估', '市场表现对比', '客户满意度分析', '经营风险预警'],
    cover: img('report2', 400, 300),
    deliveryTime: '1-2个工作日',
    format: 'PDF'
  },
  { 
    id: 'R003', 
    name: '科创需求分析报告', 
    price: 1599, 
    originalPrice: 1999,
    description: '针对科技创新需求进行精准分析，识别技术痛点、研发方向、专利布局和产学研合作机会，助力企业技术创新。',
    features: ['技术痛点识别', '研发方向建议', '专利布局分析', '产学研合作匹配', '技术路线规划'],
    cover: img('report3', 400, 300),
    deliveryTime: '2个工作日',
    format: 'PDF'
  },
  { 
    id: 'R004', 
    name: '企业综合评估报告', 
    price: 4999, 
    originalPrice: 6999,
    description: '整合企业多维度数据，进行全面评估和深度画像，包括信用状况、发展潜力、投资价值等，为投融资决策提供专业参考。',
    features: ['企业信用评估', '发展潜力评级', '投资价值分析', '风险评估报告', '对标企业分析'],
    cover: img('report4', 400, 300),
    deliveryTime: '3-5个工作日',
    format: 'PDF + Excel'
  }
];

// 会员行业分布数据
var memberIndustryData = [
  { name: '人工智能', value: 156, color: '#6fa4cf' },
  { name: '生物医药', value: 98, color: '#07c160' },
  { name: '新能源汽车', value: 72, color: '#ee0a24' },
  { name: '智能制造', value: 65, color: '#ff976a' },
  { name: '金融科技', value: 58, color: '#722ed1' },
  { name: '新材料', value: 45, color: '#dabb6e' },
  { name: '消费零售', value: 38, color: '#64b5f6' },
  { name: '其他', value: 28, color: '#9e9e9e' }
];

// 校友圈子数据（与后台管理一致）
var businessNetworkData = [
  { 
    type: '上市公司', 
    count: 5, 
    desc: '校友创办或任职的上市公司、拟上市企业', 
    icon: 'building',
    gradient: 'linear-gradient(135deg, #6fa4cf, #4a90d9)',
    items: [
      { 
        alumnusInfo: { avatar: 'https://picsum.photos/seed/zjg/100/100', name: '张建国', gender: '男', graduationYear: '2005届', department: '自动化学院', major: '软件工程', phone: '138****1234', email: 'zhangjg@zktech.com' }, 
        companyShortName: '智控科技', stockCode: '301xxx', roleLabel: '创始人', companyStage: '已上市', businessIntro: '工业智能控制解决方案提供商，服务超过100家制造企业' 
      },
      { 
        alumnusInfo: { avatar: 'https://picsum.photos/seed/lmy/100/100', name: '李明远', gender: '男', graduationYear: '2006届', department: '材料学院', major: '新能源材料', phone: '139****5678', email: 'limy@starlight.com' }, 
        companyShortName: '星辰科技', stockCode: '002xxx', roleLabel: '联合创始人', companyStage: '已上市', businessIntro: '新能源储能技术研发与应用，产品覆盖家庭和工业储能' 
      },
      { 
        alumnusInfo: { avatar: 'https://picsum.photos/seed/wj/100/100', name: '王军', gender: '男', graduationYear: '2003届', department: '机械学院', major: '车辆工程', phone: '137****9012', email: 'wangj@nio.com' }, 
        companyShortName: '蔚来汽车', stockCode: 'NIO', roleLabel: '总经理', companyStage: '已上市', businessIntro: '新能源汽车研发制造，专注智能电动汽车领域' 
      },
      { 
        alumnusInfo: { avatar: 'https://picsum.photos/seed/cxh/100/100', name: '陈晓华', gender: '女', graduationYear: '2004届', department: '生命学院', major: '生物医学', phone: '136****3456', email: 'chenxh@kangyuan.com' }, 
        companyShortName: '康源生物', stockCode: '', roleLabel: '董事长', companyStage: 'IPO 申报中', businessIntro: '创新药物研发，肿瘤免疫治疗为核心方向' 
      },
      { 
        alumnusInfo: { avatar: 'https://picsum.photos/seed/lf/100/100', name: '刘芳', gender: '女', graduationYear: '2007届', department: '信息学院', major: '电子信息', phone: '135****7890', email: 'liuf@huachuang.com' }, 
        companyShortName: '华创医疗', stockCode: '', roleLabel: '独立董事', companyStage: 'Pre-IPO', businessIntro: '医疗器械研发生产，聚焦高端影像诊断设备' 
      }
    ]
  },
  { 
    type: '投资机构', 
    count: 5, 
    desc: '投资人及机构校友网络', 
    icon: 'trendingUp',
    gradient: 'linear-gradient(135deg, #07c160, #05a04a)',
    items: [
      { 
        alumnusInfo: { avatar: 'https://picsum.photos/seed/cl/100/100', name: '陈立', gender: '男', graduationYear: '2002届', department: '经济管理学院', major: '金融学', phone: '138****2345', email: 'chenl@redstar.com' }, 
        orgName: '红杉中国', orgType: 'VC', position: '合伙人', investTrack: '半导体、生物医药、新能源', representProjects: '字节跳动、美团、蔚来汽车' 
      },
      { 
        alumnusInfo: { avatar: 'https://picsum.photos/seed/zw/100/100', name: '张伟', gender: '男', graduationYear: '2004届', department: '经济管理学院', major: '投资学', phone: '137****6789', email: 'zhangw@idg.com' }, 
        orgName: 'IDG资本', orgType: 'VC', position: '管理合伙人', investTrack: '人工智能、企业服务', representProjects: '百度、腾讯、小米' 
      },
      { 
        alumnusInfo: { avatar: 'https://picsum.photos/seed/ly/100/100', name: '刘洋', gender: '男', graduationYear: '2008届', department: '计算机学院', major: '计算机科学', phone: '136****0123', email: 'liuyy@zhenge.com' }, 
        orgName: '真格基金', orgType: '天使投资', position: '合伙人', investTrack: '消费科技、教育', representProjects: '小红书、完美日记' 
      },
      { 
        alumnusInfo: { avatar: 'https://picsum.photos/seed/wl/100/100', name: '王磊', gender: '男', graduationYear: '2005届', department: '自动化学院', major: '控制工程', phone: '135****4567', email: 'wangl@matrix.com' }, 
        orgName: '经纬中国', orgType: 'VC', position: '投资总监', investTrack: '硬科技、智能制造', representProjects: '大疆、商汤科技' 
      },
      { 
        alumnusInfo: { avatar: 'https://picsum.photos/seed/zq/100/100', name: '赵强', gender: '男', graduationYear: '2001届', department: '材料学院', major: '材料科学', phone: '134****8901', email: 'zhaoq@guoke.com' }, 
        orgName: '国科投资', orgType: '产业投资', position: '总经理', investTrack: '集成电路、新材料', representProjects: '中芯国际、宁德时代' 
      }
    ]
  },
  { 
    type: '企业高管', 
    count: 5, 
    desc: '担任企业高管的职业经理人校友', 
    icon: 'user',
    gradient: 'linear-gradient(135deg, #ee0a24, #d00820)',
    items: [
      { 
        alumnusInfo: { avatar: 'https://picsum.photos/seed/zming/100/100', name: '张明', gender: '男', graduationYear: '2000届', department: '计算机学院', major: '计算机科学', phone: '138****1111', email: 'zhangming@huawei.com' }, 
        companyName: '华为技术有限公司', companyNature: '跨国企业', position: '常务董事', businessBlock: '消费者业务' 
      },
      { 
        alumnusInfo: { avatar: 'https://picsum.photos/seed/lh/100/100', name: '李华', gender: '男', graduationYear: '2003届', department: '经济管理学院', major: '会计学', phone: '137****2222', email: 'lihua@xiaomi.com' }, 
        companyName: '小米集团', companyNature: '上市民企', position: '首席财务官', businessBlock: '财务管理' 
      },
      { 
        alumnusInfo: { avatar: 'https://picsum.photos/seed/wf/100/100', name: '王芳', gender: '女', graduationYear: '2006届', department: '外语学院', major: '英语', phone: '136****3333', email: 'wangf@bytedance.com' }, 
        companyName: '字节跳动', companyNature: '跨国企业', position: '人力资源副总裁', businessBlock: '人才发展' 
      },
      { 
        alumnusInfo: { avatar: 'https://picsum.photos/seed/cw/100/100', name: '陈伟', gender: '男', graduationYear: '2004届', department: '管理学院', major: '市场营销', phone: '135****4444', email: 'chenw@meituan.com' }, 
        companyName: '美团', companyNature: '上市民企', position: '运营副总裁', businessBlock: '到店业务' 
      },
      { 
        alumnusInfo: { avatar: 'https://picsum.photos/seed/zl/100/100', name: '赵丽', gender: '女', graduationYear: '2005届', department: '法学院', major: '法学', phone: '134****5555', email: 'zhaol@jd.com' }, 
        companyName: '京东集团', companyNature: '上市民企', position: '首席合规官', businessBlock: '合规管理' 
      }
    ]
  },
  { 
    type: '科创项目', 
    count: 5, 
    desc: '校友参与的科技创新项目', 
    icon: 'lightbulb',
    gradient: 'linear-gradient(135deg, #ff976a, #f07a4a)',
    items: [
      { 
        alumnusInfo: { avatar: 'https://picsum.photos/seed/zn/100/100', name: '张博士', gender: '男', graduationYear: '2015届', department: '计算机学院', major: '人工智能', phone: '138****6666', email: 'zhangdr@zdrive.ai' }, 
        projectName: '智能驾驶系统', techTrack: '自动驾驶/人工智能', devStage: 'B轮', financing: 'B轮+2亿元', coreAdvantage: 'L4级自动驾驶解决方案，已在国内多个城市落地运营', showFinancing: true 
      },
      { 
        alumnusInfo: { avatar: 'https://picsum.photos/seed/lxs/100/100', name: '李博士', gender: '女', graduationYear: '2016届', department: '生命学院', major: '生物医学工程', phone: '137****7777', email: 'lixs@bioxchip.com' }, 
        projectName: '生物芯片技术', techTrack: '生物医药/微流控', devStage: 'A轮', financing: 'A轮+5000万', coreAdvantage: '新一代基因检测芯片，检测效率提升10倍', showFinancing: true 
      },
      { 
        alumnusInfo: { avatar: 'https://picsum.photos/seed/wqp/100/100', name: '王博士', gender: '男', graduationYear: '2018届', department: '物理学院', major: '量子物理', phone: '136****8888', email: 'wangqp@quantum.cn' }, 
        projectName: '量子计算平台', techTrack: '量子科技', devStage: '种子轮', financing: '种子轮+1000万', coreAdvantage: '超导量子计算原型机研发，已实现50量子比特', showFinancing: false 
      },
      { 
        alumnusInfo: { avatar: 'https://picsum.photos/seed/lx/100/100', name: '刘硕士', gender: '男', graduationYear: '2019届', department: '材料学院', major: '新能源材料', phone: '135****9999', email: 'liuxs@enerstore.com' }, 
        projectName: '新能源储能', techTrack: '新能源/储能技术', devStage: 'C轮', financing: 'C轮+3亿元', coreAdvantage: '新型锂电池储能系统，能量密度行业领先', showFinancing: true 
      },
      { 
        alumnusInfo: { avatar: 'https://picsum.photos/seed/zhp/100/100', name: '赵博士', gender: '男', graduationYear: '2017届', department: '自动化学院', major: '控制工程', phone: '134****0000', email: 'zhaohp@ai-control.com' }, 
        projectName: '工业AI平台', techTrack: '智能制造/人工智能', devStage: '稳定经营', financing: 'A轮+1亿元', coreAdvantage: '工业过程智能控制平台，已服务100+制造企业', showFinancing: true 
      }
    ]
  }
];

// 报告订单列表
var reportOrders = [
  { 
    id: 'RO20260720001', 
    reportName: '产业全景分析报告', 
    reportId: 'R001',
    price: 2999, 
    status: '已完成', 
    createTime: '2026-07-20 09:30',
    deliveryTime: '2026-07-21 14:20',
    companyName: '北京智控科技有限公司',
    industry: '人工智能',
    reportUrl: '#',
    downloadCount: 3
  },
  { 
    id: 'RO20260722002', 
    reportName: '企业经营分析报告', 
    reportId: 'R002',
    price: 1999, 
    status: '生成中', 
    createTime: '2026-07-22 16:45',
    deliveryTime: '',
    companyName: '北京康源生物科技有限公司',
    industry: '生物医药',
    reportUrl: '',
    downloadCount: 0
  },
  { 
    id: 'RO20260723003', 
    reportName: '科创需求分析报告', 
    reportId: 'R003',
    price: 1599, 
    status: '待支付', 
    createTime: '2026-07-23 10:20',
    deliveryTime: '',
    companyName: '北理工智能驾驶俱乐部',
    industry: '智能驾驶',
    reportUrl: '',
    downloadCount: 0
  }
];

var feedList = [
  { id: 1, user: { name: '张建国', avatar: img('u1', 100, 100), school: '自动化学院', year: '2005级' }, content: '今天参加了母校的校友企业家论坛，见到了许多老同学，感慨万千！母校的发展令人振奋，为是一名北理工人而自豪！', images: [img('feed1a', 400, 300), img('feed1b', 400, 300)], date: '2026-06-08 14:30', likes: 32, comments: 8, liked: false },
  { id: 2, user: { name: '陈晓华', avatar: img('u2', 100, 100), school: '计算机学院', year: '2008级' }, content: '我们公司新研发的智能安防系统已经在全国多个城市落地应用，感谢白石桥七号平台对接的合作伙伴，让好产品能被更多人看到！', images: [img('feed2a', 400, 300), img('feed2b', 400, 300), img('feed2c', 400, 300)], date: '2026-06-07 10:15', likes: 56, comments: 12, liked: true },
  { id: 3, user: { name: '刘芳', avatar: img('u3', 100, 100), school: '管理与经济学院', year: '2010级' }, content: '分享一个好消息：我们团队获得了A轮融资5000万！感谢一路支持我的校友们，特别是李明远师兄在关键时刻给予的指导和建议。北理工校友的力量真的很强大！', images: [], date: '2026-06-06 18:45', likes: 128, comments: 35, liked: false }
];

var alumniList = [
  { id: 1, name: '张建国', avatar: img('u1', 100, 100), school: '自动化学院', major: '控制科学与工程', year: '2005级', degree: '硕士', city: '北京', industry: '人工智能', company: '北京智控科技有限公司', title: '创始人兼CEO', tags: ['创业', '人工智能', '智能制造'], intro: '15年自动化与人工智能行业经验，曾任职于西门子、ABB等世界500强企业。2018年创立智控科技，专注于工业智能控制领域。', phone: '138****6789', email: 'zhangjg@example.com', wechat: 'zhangjianguo_bit', exchanged: false },
  { id: 2, name: '李明远', avatar: img('u2', 100, 100), school: '计算机学院', major: '计算机科学与技术', year: '2008级', degree: '本科', city: '深圳', industry: '互联网', company: '字节跳动', title: '技术总监', tags: ['互联网', '大数据', '技术管理'], intro: '10年互联网行业经验，先后在百度、腾讯担任核心技术岗位。目前负责字节跳动某核心业务线的技术管理工作。', phone: '139****1234', email: 'limy@example.com', wechat: 'limingyuan_bit', exchanged: false },
  { id: 3, name: '王军', avatar: img('u3', 100, 100), school: '机械与车辆学院', major: '车辆工程', year: '2003级', degree: '博士', city: '上海', industry: '新能源汽车', company: '蔚来汽车', title: '副总裁', tags: ['新能源汽车', '自动驾驶', '研发管理'], intro: '新能源汽车领域资深专家，拥有20余项发明专利。在蔚来汽车负责自动驾驶技术研发团队。', phone: '136****5678', email: 'wangjun@example.com', wechat: 'wangjun_bit', exchanged: true },
  { id: 4, name: '陈晓华', avatar: img('u2', 100, 100), school: '材料学院', major: '材料科学与工程', year: '2006级', degree: '硕士', city: '深圳', industry: '新能源', company: '深圳星辰科技有限公司', title: 'CEO', tags: ['新能源', '储能', '创业'], intro: '新能源储能领域创业者，公司已获C轮融资3亿元。专注于储能电池管理系统的研发。', phone: '137****2345', email: 'chenxh@example.com', wechat: 'chenxiaohua_bit', exchanged: false },
  { id: 5, name: '刘芳', avatar: img('u3', 100, 100), school: '管理与经济学院', major: '工商管理', year: '2010级', degree: '硕士', city: '北京', industry: '生物医药', company: '北京康源生物科技有限公司', title: 'CEO', tags: ['生物医药', '创业', '投资'], intro: '连续创业者，专注于创新药物研发。公司已获B轮融资2亿元。', phone: '135****6789', email: 'liuf@example.com', wechat: 'liufang_bit', exchanged: false },
  { id: 6, name: '王磊', avatar: img('u5', 100, 100), school: '计算机学院', major: '软件工程', year: '2018级', degree: '本科', city: '北京', industry: '互联网', company: '恒业集团', title: '高级前端工程师', tags: ['前端开发', '互联网'], intro: '5年前端开发经验，精通Vue/React技术栈。', phone: '133****1111', email: 'wangl@example.com', wechat: 'wanglei_bit', exchanged: false },
  { id: 7, name: '孙磊', avatar: img('m3', 100, 100), school: '机械与车辆学院', major: '车辆工程', year: '2007级', degree: '本科', city: '北京', industry: '教育', company: '创新教育科技', title: '创始人', tags: ['教育', '创业', 'AI'], intro: 'AI辅助教育创业者，项目已有种子用户。', phone: '137****0003', email: 'sunl@example.com', wechat: 'sunlei_bit', exchanged: false },
  { id: 8, name: '赵明辉', avatar: img('m1', 100, 100), school: '自动化学院', major: '控制科学与工程', year: '2005级', degree: '博士', city: '北京', industry: '人工智能', company: 'AI实验室', title: '主任', tags: ['AI', '算法', '技术'], intro: '人工智能领域专家，从事AI算法研究和应用工作。', phone: '138****0001', email: 'zhaomh@example.com', wechat: 'zhaominghui_bit', exchanged: false },
  { id: 9, name: '周小雅', avatar: img('u6', 100, 100), school: '机械与车辆学院', major: '机械工程', year: '2023级', degree: '本科', city: '北京', industry: '学生', company: '北京理工大学', title: '在读学生', tags: ['学生', '考研'], intro: '北理本科大三学生，准备跨考自动化学院研究生。', phone: '133****2222', email: 'zhouxy@example.com', wechat: 'zhouxiaoya_bit', exchanged: false },
  { id: 10, name: '杨帆', avatar: img('u8', 100, 100), school: '计算机学院', major: '计算机科学与技术', year: '2020级', degree: '本科', city: '北京', industry: 'IT', company: '某科技公司', title: '软件工程师', tags: ['IT', '开发'], intro: '刚毕业在北京工作，从事软件开发工作。', phone: '134****3333', email: 'yangf@example.com', wechat: 'yangfan_bit', exchanged: false },
  { id: 11, name: '李娜', avatar: img('u9', 100, 100), school: '外语学院', major: '英语', year: '2018级', degree: '本科', city: '北京', industry: '教育', company: '某教育机构', title: '英语教师', tags: ['教育', '外语'], intro: '英语教师，从事教育培训工作。', phone: '135****4444', email: 'lin@example.com', wechat: 'lina_bit', exchanged: false }
];

var groupList = [
  { id: 1, name: '北理工人工智能校友会', logo: img('g1', 200, 200), category: '行业社团', leader: '赵明辉', phone: '138****0001', intro: '汇聚人工智能领域的北理工校友，定期举办技术交流、项目合作和人才对接活动。目前已有成员200余人，涵盖AI算法、芯片、应用等多个细分方向。', memberCount: 218, news: [{ id: 1, title: 'AI校友会春季技术交流会圆满举办', cover: img('news1', 400, 240), date: '2026-06-15' }, { id: 2, title: 'AI校友会赴商汤科技参观学习', cover: img('news2', 400, 240), date: '2026-06-10' }], activities: [{ id: 1, title: '大模型技术研讨会', cover: img('act1', 400, 240), date: '2026-06-20', location: '中关村软件园国际会议中心', description: '邀请业界大咖分享大模型最新技术进展与应用实践，设有圆桌讨论和自由交流环节，欢迎校友踊跃参加。' }, { id: 2, title: 'AI校友会春季户外团建', cover: img('act2', 400, 240), date: '2026-05-15', location: '奥林匹克森林公园', description: '春季户外团建活动，包含趣味运动、团队协作挑战和BBQ聚餐，增进校友感情。' }], members: [{ name: '赵明辉', avatar: img('m1', 100, 100), school: '自动化学院', year: '2005级', joinDate: '2025-03-01' }, { name: '张建国', avatar: img('u1', 100, 100), school: '自动化学院', year: '2005级', joinDate: '2025-03-10' }, { name: '李明远', avatar: img('u2', 100, 100), school: '计算机学院', year: '2008级', joinDate: '2025-06-15' }] },
  { id: 2, name: '北理工金融投资校友俱乐部', logo: img('g2', 200, 200), category: '行业社团', leader: '陈立', phone: '139****0002', intro: '由从事金融投资行业的校友发起，旨在搭建校友间的投融资对接平台。成员涵盖VC、PE、证券、银行等金融机构。', memberCount: 156, news: [{ id: 1, title: '2026年投资趋势研讨会成功举行', cover: img('news3', 400, 240), date: '2026-06-12' }], activities: [{ id: 1, title: '校友企业投融资对接会', cover: img('act3', 400, 240), date: '2026-07-08', location: '北京市朝阳区国贸三期', description: '为有融资需求的校友企业对接投资机构，提供路演展示和一对一交流机会，助力校友企业发展。' }, { id: 2, title: '二级市场投资沙龙', cover: img('act4', 400, 240), date: '2026-06-25', location: '金融街威斯汀酒店', description: '邀请券商首席分析师分享下半年投资策略，涵盖A股、港股和美股市场展望。' }], members: [{ name: '陈立', avatar: img('m2', 100, 100), school: '管理与经济学院', year: '2006级', joinDate: '2025-02-20' }] },
  { id: 3, name: '北理工北京校友足球队', logo: img('g3', 200, 200), category: '兴趣社团', leader: '孙磊', phone: '137****0003', intro: '热爱足球的北理工北京校友聚集地，每周组织训练和友谊赛。以球会友，锻炼身体，增进情谊。', memberCount: 68, news: [], activities: [{ id: 1, title: '友谊赛 vs 清华校友队', cover: img('act5', 400, 240), date: '2026-06-28', location: '北京理工大学中关村校区体育场', description: '一年一度的北理 vs 清华校友足球友谊赛，欢迎各位校友前来观赛助威！赛后安排聚餐交流。' }, { id: 2, title: '每周六常规训练', cover: img('act6', 400, 240), date: '2026-06-21', location: '奥体中心足球场', description: '每周六下午2-5点的常规训练，欢迎各水平的校友参加。新加入的校友请提前联系负责人。' }], members: [{ name: '孙磊', avatar: img('m3', 100, 100), school: '机械与车辆学院', year: '2007级', joinDate: '2024-09-01' }, { name: '王军', avatar: img('u4', 100, 100), school: '机械与车辆学院', year: '2010级', joinDate: '2024-10-15' }] },
  { id: 4, name: '北理工广东校友会', logo: img('g4', 200, 200), category: '地方社团', leader: '黄文杰', phone: '135****0004', intro: '广东地区北理工校友的联络平台，为在粤校友提供交流、互助和发展支持。定期组织企业走访、技术沙龙和联谊活动。', memberCount: 320, news: [], activities: [{ id: 1, title: '深圳校友企业走访——华为松山湖', cover: img('act7', 400, 240), date: '2026-07-15', location: '华为松山湖基地', description: '组织校友走访华为松山湖基地，参观华为研发中心，与华为校友进行技术交流与经验分享。名额有限，先到先得。' }], members: [{ name: '黄文杰', avatar: img('m4', 100, 100), school: '信息与电子学院', year: '2004级', joinDate: '2023-05-10' }, { name: '陈晓华', avatar: img('u2', 100, 100), school: '材料学院', year: '2006级', joinDate: '2024-01-20' }] }
];

var memberList = [
  { id: 1, name: '张建国', avatar: img('u1', 100, 100), school: '自动化学院', year: '2005级', city: '北京', industry: '人工智能', memberSince: '2025-03', company: '北京智控科技有限公司', title: '创始人兼CEO', intro: '15年自动化与人工智能行业经验，专注于工业智能控制领域。公司已获A轮融资，服务客户超过100家制造企业。', companies: [{ id: 1, name: '北京智控科技有限公司', logo: img('logo1', 200, 200), industry: '人工智能' }], products: [{ id: 1, name: '智控工业AI平台', cover: img('prod1', 400, 300) }] },
  { id: 2, name: '李明远', avatar: img('u2', 100, 100), school: '计算机学院', year: '2008级', city: '深圳', industry: '互联网', memberSince: '2025-06', company: '字节跳动', title: '技术总监', intro: '10年互联网行业经验，在分布式系统和大数据平台方面有深厚积累。', companies: [], products: [] },
  { id: 3, name: '刘芳', avatar: img('u3', 100, 100), school: '管理与经济学院', year: '2010级', city: '北京', industry: '生物医药', memberSince: '2026-01', company: '北京康源生物科技有限公司', title: 'CEO', intro: '连续创业者，专注于创新药物研发。公司已获B轮融资2亿元。', companies: [{ id: 1, name: '北京康源生物科技有限公司', logo: img('logo2', 200, 200), industry: '生物医药' }], products: [{ id: 1, name: '新型抗肿瘤药物K-101', cover: img('prod2', 400, 300) }] }
];

var companyList = [
  { id: 1, name: '北京智控科技有限公司', logo: img('logo1', 200, 200), industry: '人工智能', address: '北京市海淀区中关村软件园', founder: '张建国', intro: '智控科技成立于2018年，专注于工业智能控制领域，为制造企业提供AI驱动的智能控制解决方案。公司已获A轮融资，服务客户超过100家。', products: [{ id: 1, name: '智控工业AI平台', cover: img('prod1', 400, 300), intro: '基于深度学习的工业过程控制和优化平台，可降低能耗15%，提升产能20%。' }, { id: 2, name: '智能质检系统', cover: img('prod3', 400, 300), intro: '基于计算机视觉的产品质量检测系统，检测精度达到99.5%。' }] },
  { id: 2, name: '北京康源生物科技有限公司', logo: img('logo2', 200, 200), industry: '生物医药', address: '北京市昌平区生命科学园', founder: '刘芳', intro: '康源生物专注于创新药物研发，以肿瘤免疫治疗为核心方向。公司拥有多项自主知识产权，研发管线涵盖小分子药物和生物制剂。', products: [{ id: 1, name: '新型抗肿瘤药物K-101', cover: img('prod2', 400, 300), intro: '针对非小细胞肺癌的新型靶向药物，目前处于临床II期。' }] },
  { id: 3, name: '深圳星辰科技有限公司', logo: img('logo3', 200, 200), industry: '新能源', address: '深圳市南山区科技园', founder: '陈晓华', intro: '星辰科技致力于新能源储能技术的研发和应用，产品覆盖家庭储能、工商业储能和电网级储能。公司已获C轮融资3亿元。', products: [] }
];

var productList = [
  { id: 1, name: '智控工业AI平台', cover: img('prod1', 400, 300), company: '北京智控科技有限公司', industry: '人工智能', intro: '基于深度学习的工业过程控制和优化平台，通过实时数据分析和智能决策，帮助企业实现生产过程的最优化控制。', features: ['降低能耗15%', '提升产能20%', '实时监控与预警', '兼容主流PLC/DCS系统'], applications: '适用于化工、钢铁、水泥、电力等流程工业领域。' },
  { id: 2, name: '新型抗肿瘤药物K-101', cover: img('prod2', 400, 300), company: '北京康源生物科技有限公司', industry: '生物医药', intro: '针对非小细胞肺癌的新型靶向药物，具有高选择性和低毒性的特点。', features: ['高选择性靶向', '低毒副作用', '口服给药', '联合用药潜力'], applications: '非小细胞肺癌（NSCLC）二线治疗，目前处于临床II期。' },
  { id: 3, name: '智能安防监控系统', cover: img('prod3', 400, 300), company: '深圳星辰科技有限公司', industry: '安防', intro: '基于AI视觉分析的智能安防监控系统，支持人脸识别、行为分析和异常检测。', features: ['实时人脸识别', '异常行为检测', '多摄像头联动', '云端+边缘部署'], applications: '适用于社区、园区、商场、学校等场所的安全监控。' }
];

var helpList = [
  { id: 1, title: '寻找新能源电池领域的技术合作伙伴', publisher: { id: 4, name: '陈晓华', avatar: img('u2', 100, 100), role: '商务会员' }, date: '2026-06-08', description: '我们公司正在开发新一代储能电池管理系统，需要寻找在电池管理芯片或算法方面有技术积累的校友合作。最好在深圳或广州地区。', reviewStatus: 'approved', status: 'processing', rejectReason: '', responseCount: 3, responses: [{ id: 1, name: '张建国', avatar: img('u1', 100, 100), role: '商务会员', text: '我在深圳认识几个做BMS的团队，可以帮忙牵线。', time: '2026-06-09', responseStatus: 'accepted' }, { id: 8, name: '赵明辉', avatar: img('m1', 100, 100), role: '认证校友', text: '我们有一个储能方向的项目，可以聊一下合作。', time: '2026-06-10', responseStatus: 'waiting' }] },
  { id: 2, title: '求推荐靠谱的医疗器械注册代理机构', publisher: { id: 5, name: '刘芳', avatar: img('u3', 100, 100), role: '商务会员' }, date: '2026-06-05', description: '公司有一款二类医疗器械需要注册，求推荐有经验的代理机构，最好在北京地区，有成功案例的优先。', reviewStatus: 'approved', status: 'resolved', rejectReason: '', responseCount: 5, responses: [{ id: 2, name: '李明远', avatar: img('u2', 100, 100), role: '商务会员', text: '我可以帮忙对接，我们公司之前合作过一个不错的代理机构，我发给你。', time: '2026-06-06', responseStatus: 'finished' }] },
  { id: 3, title: '公司招聘——高级前端工程师（北京）', publisher: { id: 1, name: '张建国', avatar: img('u1', 100, 100), role: '商务会员' }, date: '2026-06-01', description: '智控科技招聘高级前端工程师，要求3年以上Vue/React开发经验，薪资30-50K，14薪，期权可谈。欢迎校友推荐或自荐。', reviewStatus: 'approved', status: 'processing', rejectReason: '', responseCount: 2, responses: [{ id: 6, name: '王磊', avatar: img('u5', 100, 100), role: '认证校友', text: '我有5年前端经验，可以发简历给您看看吗？', time: '2026-06-02', responseStatus: 'waiting' }, { id: 11, name: '李娜', avatar: img('u9', 100, 100), role: '认证校友', text: '朋友推荐，简历已发送邮箱。', time: '2026-06-03', responseStatus: 'waiting' }] },
  { id: 4, title: '求校友内推——想跳槽到互联网大厂', publisher: { id: 6, name: '王磊', avatar: img('u5', 100, 100), role: '认证校友' }, date: '2026-06-10', description: '本人计算机学院2018级，目前在传统制造业做后端开发，想跳槽去互联网大厂。求校友帮忙内推，主要看北京的机会。', reviewStatus: 'pending', status: 'processing', rejectReason: '', responseCount: 4, responses: [] },
  { id: 5, title: '考研咨询——想跨考自动化学院', publisher: { id: 9, name: '周小雅', avatar: img('u6', 100, 100), role: '普通用户' }, date: '2026-06-12', description: '我是北理本科大三学生，现在学的是机械，想跨考自动化学院的研究生。想咨询一下自动化学院的学长学姐，哪些方向比较好？导师推荐？', reviewStatus: 'approved', status: 'processing', rejectReason: '', responseCount: 6, responses: [] },
  { id: 6, title: '提供法律咨询公益服务', publisher: { id: 0, name: '王律师事务所', avatar: img('u7', 100, 100), role: '服务机构' }, date: '2026-06-15', description: '我们是一家专注于企业法律服务的律所，现面向白石桥七号校友企业提供免费法律咨询服务。涵盖公司法、知识产权、劳动法等领域。', reviewStatus: 'approved', status: 'processing', rejectReason: '', responseCount: 1, responses: [{ id: 1, name: '张建国', avatar: img('u1', 100, 100), role: '商务会员', text: '想咨询一下劳动纠纷相关问题，方便联系吗？', time: '2026-06-16', responseStatus: 'waiting' }] },
  { id: 7, title: '北京车牌指标出租或转让求助', publisher: { id: 10, name: '杨帆', avatar: img('u8', 100, 100), role: '普通用户' }, date: '2026-06-14', description: '刚毕业在北京工作，急需解决通勤问题。想问问有没有校友出租或转让北京车牌指标的渠道？靠谱的中介也可以推荐。', reviewStatus: 'rejected', status: 'processing', rejectReason: '涉及违规内容，平台不允许发布此类信息', responseCount: 0, responses: [] },
  { id: 8, title: '校友创业项目寻求天使轮融资', publisher: { id: 7, name: '孙磊', avatar: img('m3', 100, 100), role: '认证校友' }, date: '2026-06-16', description: '我们团队正在做AI辅助教育产品，已有种子用户，想寻求天使轮融资100-200万。BP已准备好，欢迎感兴趣的校友投资人联系。', reviewStatus: 'pending', status: 'processing', rejectReason: '', responseCount: 0, responses: [] },
  { id: 9, title: '旧书转让——考研资料低价出', publisher: { id: 9, name: '周小雅', avatar: img('u6', 100, 100), role: '普通用户' }, date: '2026-06-17', description: '本人去年考研上岸，现有大量考研资料（数学、英语、政治）低价转让，包含真题、笔记、网课视频等。北京地区可面交，其他地区包邮。', reviewStatus: 'approved', status: 'offline', rejectReason: '', responseCount: 3, responses: [] }
];

var businessNeedList = [
  { id: 1, title: '寻找新能源电池领域技术合作伙伴', publisher: { id: 4, name: '陈晓华', avatar: img('u2', 100, 100), role: '商务会员', company: '华能科技' }, date: '2026-06-08', description: '公司正在开发新一代储能电池管理系统，需要寻找在电池管理芯片或算法方面有技术积累的合作伙伴，优先深圳或广州地区。', category: '技术合作', budget: '面议', status: 'processing', responseCount: 3 },
  { id: 2, title: '求推荐靠谱的医疗器械注册代理机构', publisher: { id: 5, name: '刘芳', avatar: img('u3', 100, 100), role: '商务会员', company: '康源生物' }, date: '2026-06-05', description: '公司有一款二类医疗器械需要注册，求推荐有经验的代理机构，最好在北京地区，有成功案例的优先。', category: '专业服务', budget: '5-20万', status: 'resolved', responseCount: 5 },
  { id: 3, title: '寻求A轮融资——AI工业检测项目', publisher: { id: 1, name: '张建国', avatar: img('u1', 100, 100), role: '商务会员', company: '智控科技' }, date: '2026-06-01', description: '智控科技专注于AI工业视觉检测，已服务20+制造企业，年收入500万+，寻求A轮融资2000-3000万。', category: '融资需求', budget: '2000-3000万', status: 'processing', responseCount: 8 },
  { id: 4, title: '寻找跨境电商代运营合作', publisher: { id: 2, name: '李明远', avatar: img('m1', 100, 100), role: '商务会员', company: '优品贸易' }, date: '2026-06-10', description: '公司产品为消费电子配件，寻求亚马逊/TikTok Shop代运营合作伙伴，目标北美和欧洲市场。', category: '渠道合作', budget: '佣金制', status: 'processing', responseCount: 2 },
  { id: 5, title: '企业数字化转型咨询服务采购', publisher: { id: 6, name: '王磊', avatar: img('u5', 100, 100), role: '商务会员', company: '恒业集团' }, date: '2026-06-12', description: '集团计划启动数字化转型项目，需要寻找有大型企业转型经验的咨询公司，预算50-100万。', category: '咨询服务', budget: '50-100万', status: 'processing', responseCount: 4 },
  { id: 6, title: '寻求律所常年法律顾问合作', publisher: { id: 7, name: '孙磊', avatar: img('m3', 100, 100), role: '商务会员', company: '创新教育科技' }, date: '2026-06-15', description: '科技公司寻求常年法律顾问服务，涉及公司法、知识产权、劳动法等领域，希望律所熟悉互联网行业。', category: '法律顾问', budget: '10-30万/年', status: 'processing', responseCount: 1 }
];

var topicList = [
  { id: 1, title: '从0到1：我的AI创业之路', cover: img('topic1', 400, 240), author: '张建国', date: '2026-06-01', summary: '分享我在人工智能领域的创业经历和感悟，包括如何找到创业方向、组建团队、获得融资等。', content: '<p>大家好，我是自动化学院2005级的张建国。今天想和大家分享一下我在AI领域的创业历程。</p><p>2018年，我离开西门子创办了智控科技。当时看到了工业智能化转型的巨大机遇，决定投身其中。</p><p>创业初期最大的困难是找到产品市场契合点（PMF）。我们花了近一年时间，走访了50多家制造企业，深入了解他们的真实痛点，最终确定了以工业过程控制为切入点。</p><p>关于融资，我的建议是：先做出可演示的产品原型，拿到标杆客户，再去找投资人。我们的A轮融资就是在服务了10家付费客户之后完成的。</p>', views: 2356, likes: 156 },
  { id: 2, title: '新能源汽车行业发展趋势与机会', cover: img('topic2', 400, 240), author: '王军', date: '2026-05-25', summary: '基于我在蔚来汽车的工作经验，分享对新能源汽车行业未来发展的判断和投资机会分析。', content: '<p>作为在新能源汽车行业工作多年的从业者，我想分享一些对这个行业未来发展的看法。</p><p>首先，电动化已经是确定的趋势。预计到2030年，中国新能源汽车渗透率将超过60%。</p><p>其次，智能化是下一个竞争焦点。自动驾驶、智能座舱、车路协同等领域存在大量创新机会。</p>', views: 1890, likes: 98 }
];

var interviewList = [
  { id: 1, title: '从技术专家到创业者——专访智控科技CEO张建国', cover: img('interview1', 400, 240), author: '平台编辑部', date: '2026-05-20', summary: '张建国校友分享了从西门子技术专家到创办智控科技的心路历程，以及对工业AI未来发展的深刻思考。', content: '<p><strong>问：是什么促使你离开外企选择创业？</strong></p><p>张建国：在西门子工作了近10年，虽然职位一直在升，但内心始终有一个声音——我想做一件属于自己的事情。2018年看到国内制造业智能化转型的需求爆发，我判断这是一个千载难逢的机会窗口。</p><p><strong>问：创业过程中最大的挑战是什么？</strong></p><p>张建国：最大的挑战是从技术思维转向商业思维。做技术时追求完美，但做产品要追求"够用"。这个转变花了我至少一年时间。</p>', views: 3210, likes: 210 },
  { id: 2, title: '创新药研发的北理工力量——访康源生物CEO刘芳', cover: img('interview2', 400, 240), author: '平台编辑部', date: '2026-05-15', summary: '刘芳校友分享了在创新药研发领域的创业故事，以及如何借助校友平台资源加速企业发展。', content: '<p><strong>问：为什么选择肿瘤免疫治疗这个方向？</strong></p><p>刘芳：我母亲因癌症去世，这成为我投身肿瘤药物研发的原动力。我希望通过自己的努力，让更多患者能够获得有效且可负担的治疗。</p><p><strong>问：校友平台对你的帮助大吗？</strong></p><p>刘芳：非常大！我们的B轮投资方就是通过白石桥七号平台对接上的。此外，平台上的几位医药行业校友在临床资源方面也给了我们很大支持。</p>', views: 2180, likes: 145 }
];

var courseList = [
  {
    id: 1, title: '企业数字化转型实战指南', subtitle: '从战略到落地，一站式掌握数字化转型方法论', cover: img('course1', 750, 420),
    teacher: '张建国', teacherAvatar: img('u1', 200, 200), teacherTitle: '智控科技创始人 · 北理工2005级',
    teacherBio: '15年数字化转型经验，曾主导多家世界500强企业的数字化项目。智控科技创始人，A轮已融资1亿元。著有《工业智能化转型》。',
    price: 299, originalPrice: 599, memberPrice: 249, students: 1280, duration: '12课时', totalMinutes: 360, rating: 4.9, reviews: 326,
    category: '企业管理', tags: ['热门精选', '专家课', '14天回看'], intro: '从战略规划到落地执行，系统讲解企业数字化转型的方法论和实战经验。',
    highlights: ['12课时系统讲解', '20+真实案例', '配套电子讲义', '社群答疑1对1', '永久回看权'],
    chapters: [
      { id: 1, title: '第一章 数字化转型概述', lessons: [{ id: 1, title: '1.1 什么是数字化转型', duration: '15:30', preview: true }, { id: 2, title: '1.2 数字化转型的三个层次', duration: '18:45', preview: false }, { id: 3, title: '1.3 国内外典型案例对比', duration: '22:10', preview: false }] },
      { id: 2, title: '第二章 转型战略制定', lessons: [{ id: 4, title: '2.1 现状评估方法', duration: '20:15', preview: false }, { id: 5, title: '2.2 战略路径设计', duration: '25:40', preview: false }] },
      { id: 3, title: '第三章 组织变革管理', lessons: [{ id: 6, title: '3.1 组织架构调整', duration: '19:20', preview: false }, { id: 7, title: '3.2 文化与人才转型', duration: '23:55', preview: false }] },
      { id: 4, title: '第四章 技术架构设计', lessons: [{ id: 8, title: '4.1 数据中台搭建', duration: '28:30', preview: false }, { id: 9, title: '4.2 业务系统集成', duration: '24:15', preview: false }] },
      { id: 5, title: '第五章 落地实施', lessons: [{ id: 10, title: '5.1 试点选择', duration: '20:00', preview: false }, { id: 11, title: '5.2 推广策略', duration: '21:30', preview: false }, { id: 12, title: '5.3 持续优化', duration: '20:50', preview: false }] }
    ],
    reviewList: [
      { user: '王工程师', avatar: img('r1', 100, 100), rating: 5, date: '2026-06-05', content: '内容非常实用，老师讲得深入浅出，案例都是真实的，对我们公司的数字化转型有很大启发。' },
      { user: '李总监', avatar: img('r2', 100, 100), rating: 5, date: '2026-05-28', content: '系统性强，从战略到落地都有涉及，是难得的好课程。强烈推荐给企业管理者。' },
      { user: '赵创始人', avatar: img('r3', 100, 100), rating: 4, date: '2026-05-20', content: '干货满满，特别是组织变革那一章，正好解决了我们当前的痛点。' }
    ]
  },
  {
    id: 2, title: '创业者的财务管理课', subtitle: '让创业者真正读懂财务报表，做出明智决策', cover: img('course2', 750, 420),
    teacher: '陈立', teacherAvatar: img('u2', 200, 200), teacherTitle: '资深财务顾问 · 北理工2007级',
    teacherBio: '注册会计师CPA，曾任四大会计师事务所高级经理。10年创业服务经验，已帮助50+创业公司完成融资。',
    price: 199, originalPrice: 399, memberPrice: 159, students: 856, duration: '8课时', totalMinutes: 240, rating: 4.8, reviews: 218,
    category: '创业', tags: ['限时优惠', '新课首发'], intro: '帮助创业者建立财务思维，掌握现金流管理、融资估值等核心技能。',
    highlights: ['8课时精品内容', '15份财务模板', '案例全部实战', '群内答疑'],
    chapters: [
      { id: 1, title: '第一章 财务三表入门', lessons: [{ id: 1, title: '1.1 资产负债表精讲', duration: '20:00', preview: true }, { id: 2, title: '1.2 利润表关键指标', duration: '18:30', preview: false }] },
      { id: 2, title: '第二章 现金流管理', lessons: [{ id: 3, title: '2.1 现金流为王', duration: '22:15', preview: false }, { id: 4, title: '2.2 资金计划制定', duration: '19:45', preview: false }] },
      { id: 3, title: '第三章 融资估值', lessons: [{ id: 5, title: '3.1 估值方法详解', duration: '25:30', preview: false }, { id: 6, title: '3.2 融资条款解读', duration: '23:10', preview: false }] }
    ],
    reviewList: [
      { user: '张创业', avatar: img('r4', 100, 100), rating: 5, date: '2026-06-01', content: '陈老师讲课很有条理，把复杂的财务知识讲得很清楚。' },
      { user: '刘总', avatar: img('r5', 100, 100), rating: 5, date: '2026-05-15', content: '估值那一章特别实用，正好用上了。' }
    ]
  },
  {
    id: 3, title: 'AI产品经理入门到精通', subtitle: '抓住AI浪潮，从0到1打造爆款AI产品', cover: img('course3', 750, 420),
    teacher: '李明远', teacherAvatar: img('u3', 200, 200), teacherTitle: '字节跳动技术总监 · 北理工2008级',
    teacherBio: '10年互联网产品经验，先后在百度、腾讯、字节担任核心产品岗位。负责的AI产品累计用户过亿。',
    price: 399, originalPrice: 799, memberPrice: 319, students: 2100, duration: '16课时', totalMinutes: 480, rating: 4.95, reviews: 587,
    category: '产品', tags: ['口碑爆款', '专家课', '送学习社群'], intro: '从AI基础到产品设计，全面培养AI产品经理的核心能力。',
    highlights: ['16课时深度内容', '30+实战案例', '专属学习社群', '7天试看期', '永久回看'],
    chapters: [
      { id: 1, title: '第一章 AI产品认知', lessons: [{ id: 1, title: '1.1 AI产品的本质', duration: '18:30', preview: true }, { id: 2, title: '1.2 AI产品分类与场景', duration: '20:45', preview: true }] },
      { id: 2, title: '第二章 用户研究方法', lessons: [{ id: 3, title: '2.1 AI用户画像构建', duration: '22:10', preview: false }, { id: 4, title: '2.2 需求挖掘', duration: '19:50', preview: false }] },
      { id: 3, title: '第三章 产品设计实战', lessons: [{ id: 5, title: '3.1 交互设计原则', duration: '25:00', preview: false }, { id: 6, title: '3.2 模型与体验平衡', duration: '21:30', preview: false }] }
    ],
    reviewList: [
      { user: '产品小王', avatar: img('r6', 100, 100), rating: 5, date: '2026-06-08', content: '李老师的课真的太棒了，内容深度和广度都很到位。' },
      { user: '设计师Lisa', avatar: img('r7', 100, 100), rating: 5, date: '2026-06-03', content: '从产品视角讲AI，给我打开了新思路。强推！' },
      { user: '创业者Alex', avatar: img('r8', 100, 100), rating: 5, date: '2026-05-25', content: '我们公司在做AI产品，这门课解决了我很多疑惑。' }
    ]
  }
];

// 服务机构列表
var serviceProviders = [
  { id: 1, name: '北京中天律师事务所', avatar: img('svc1', 200, 200), category: '法律服务', desc: '为北理工校友提供专业法律服务', rating: 4.8, serviceCount: 3, consultCount: 45, phone: '138****0001', email: 'admin@zhongtian.com', contactName: '张主任', contactPosition: '合伙人' },
  { id: 2, name: '银泰财务咨询有限公司', avatar: img('svc2', 200, 200), category: '财务咨询', desc: '为北理工校友提供专业财务服务', rating: 4.9, serviceCount: 3, consultCount: 58, phone: '138****0002', email: 'service@yintai.com', contactName: '李经理', contactPosition: '高级顾问' },
  { id: 3, name: '星路人力资源服务', avatar: img('svc3', 200, 200), category: '人力资源', desc: '为北理工校友提供专业人力资源服务', rating: 4.7, serviceCount: 2, consultCount: 28, phone: '138****0003', email: 'contact@xinglu.com', contactName: '王总监', contactPosition: '业务总监' }
];

// 会员服务分类体系
var serviceCategoryMap = {
  '市场推广': ['供需匹配', '渠道拓展', '项目合作'],
  '企业赋能': ['投融资服务', '流量运营', '人才招聘', '教育培训', '管理咨询', '数字化建设', '企划合规', '资质申报', '办公选址', '资源置换'],
  '商务活动': ['主题沙龙', '私董聚会', '经营研修', '政企走访', '项目路演', '供需交流', '招商推介', '新品发布', '年度峰会', '商务晚宴', '团建联谊', '公益帮扶'],
  '专属服务': ['亲子教育', '医疗保健', '居家置业', '外出礼遇', '应急解决']
};

// 生成扁平的分类列表（用于选择器）
var serviceCategories = [];
Object.keys(serviceCategoryMap).forEach(function(parent) {
  serviceCategoryMap[parent].forEach(function(child) {
    serviceCategories.push({ parent: parent, child: child, label: parent + ' - ' + child });
  });
});

// 服务项目列表
var serviceProjects = [
  { id: 1, providerId: 1, name: '企业法律顾问年度服务', category: '企划合规', price: 30000, unit: '年', desc: '为企业提供全年法律咨询、合同审核、合规建议等服务。', viewCount: 234, orderCount: 8 },
  { id: 2, providerId: 1, name: '知识产权专项保护', category: '企划合规', price: 8000, unit: '次', desc: '商标、专利、著作权相关咨询与诉讼支持。', viewCount: 156, orderCount: 5 },
  { id: 3, providerId: 1, name: '劳动合同纠纷处理', category: '企划合规', price: 5000, unit: '次', desc: '劳动争议调解、仲裁、诉讼代理服务。', viewCount: 98, orderCount: 3 },
  { id: 4, providerId: 2, name: '财税规划与代理记账', category: '企划合规', price: 1500, unit: '月', desc: '中小企业月度财税规划、代理记账、纳税申报。', viewCount: 380, orderCount: 22 },
  { id: 5, providerId: 2, name: '企业估值与尽职调查', category: '投融资服务', price: 80000, unit: '项目', desc: '为投融资提供企业估值分析与财务尽调服务。', viewCount: 125, orderCount: 2 },
  { id: 6, providerId: 2, name: '数字化转型咨询', category: '数字化建设', price: 120000, unit: '项目', desc: '为企业提供数字化转型规划、方案设计与实施指导。', viewCount: 142, orderCount: 1 },
  { id: 7, providerId: 3, name: '高端人才寻聘', category: '人才招聘', price: 50000, unit: '岗', desc: '面向技术、管理岗的高端人才猎头服务。', viewCount: 198, orderCount: 4 },
  { id: 8, providerId: 3, name: '校园招聘外包', category: '人才招聘', price: 30000, unit: '季', desc: '校园宣讲、简历筛选、组织面试等一站式服务。', viewCount: 156, orderCount: 2 }
];

// 服务咨询聊天记录 - 与运营后台统一的数据结构
var serviceChatHistory = {
  '1-1': [ // providerId-projectId
    { from: 'other', text: '您好，欢迎咨询！请问有什么可以帮到您的？', time: '10:30' },
    { from: 'me', text: '我想咨询「企业法律顾问年度服务」这项服务', time: '10:31' },
    { from: 'other', text: '好的，我们会有专人尽快与您联系。请留下您的联系方式。', time: '10:32' }
  ],
  '2-4': [
    { from: 'other', text: '您好，欢迎咨询！请问有什么可以帮到您的？', time: '14:15' },
    { from: 'me', text: '我想了解一下财税规划的具体服务内容', time: '14:16' }
  ]
};

var groupBuyCategories = [
  { key: 'all', name: '全部', icon: 'store', color: '#6fa4cf' },
  { key: 'food', name: '餐饮', icon: 'utensils', color: '#ff6b6b' },
  { key: 'hotel', name: '住宿', icon: 'hotel', color: '#4ecdc4' },
  { key: 'travel', name: '旅游', icon: 'plane', color: '#45b7d1' },
  { key: 'sport', name: '运动', icon: 'dumbbell', color: '#96ceb4' },
  { key: 'entertainment', name: '娱乐', icon: 'game', color: '#ffeaa7' },
  { key: 'cultural', name: '商品', icon: 'palette', color: '#dfe6e9' }
];

var groupBuyList = [
  { id: 1, title: '北理工校庆纪念版双肩包', cover: img('gb1', 400, 400), images: [img('gb1a', 750, 750), img('gb1b', 750, 750), img('gb1c', 750, 750)], price: 169, originalPrice: 399, soldCount: 456, totalCount: 600, endDate: '2026-06-30', category: 'cultural', supplier: '北理工校友文创工作室', desc: '为庆祝北理工建校纪念，特别推出的限量版双肩包。采用高品质防泼水面料，大容量主仓+独立电脑隔层，适合日常通勤和短途出行。', specs: ['材质：高密度防泼水尼龙', '尺寸：45×30×18cm', '容量：约25L', '颜色：深灰/藏蓝可选', '刺绣校徽+白石桥七号专属标识'], shipping: '下单后3个工作日内发货，全国包邮（偏远地区除外）', tags: ['限量', '包邮', '校庆纪念'] },
  { id: 2, title: '校友企业出品——有机五常大米 5kg装', cover: img('gb2', 400, 400), images: [img('gb2a', 750, 750), img('gb2b', 750, 750)], price: 78, originalPrice: 158, soldCount: 890, totalCount: 1000, endDate: '2026-06-25', category: 'food', supplier: '黑龙江五常校友农场', desc: '由黑龙江校友自营农场直供的有机五常大米，产自五常核心产区，一年一季，米粒晶莹饱满，口感软糯香甜。通过国家有机认证，从田间直达餐桌。', specs: ['净重：5kg', '品种：稻花香2号', '产地：黑龙江五常市', '保质期：12个月', '有机认证 + 地理标志产品'], shipping: '下单后48小时内发货，全国包邮', tags: ['包邮', '有机认证', '校友自营'] },
  { id: 3, title: '白石桥七号定制款紫砂茶具套装', cover: img('gb3', 400, 400), images: [img('gb3a', 750, 750), img('gb3b', 750, 750), img('gb3c', 750, 750)], price: 288, originalPrice: 688, soldCount: 215, totalCount: 300, endDate: '2026-07-15', category: 'cultural', supplier: '宜兴紫砂校友工坊', desc: '由宜兴校友工坊手工制作的紫砂茶具套装，包含一壶四杯一茶海。采用宜兴原矿紫砂泥料，传统工艺手工成型，壶身雕刻白石桥七号专属logo。自用雅致，送礼体面。', specs: ['套装：1壶+4杯+1公道杯', '材质：宜兴原矿紫泥', '壶容量：约200ml', '工艺：纯手工制作', '包装：精美礼盒装'], shipping: '手工制作需3-5天，发货后全国包邮', tags: ['手工', '限量', '包邮'] },
  { id: 4, title: '北理工校友优选——智利进口红酒双支礼盒', cover: img('gb4', 400, 400), images: [img('gb4a', 750, 750), img('gb4b', 750, 750)], price: 198, originalPrice: 498, soldCount: 632, totalCount: 800, endDate: '2026-06-28', category: 'food', supplier: '校友企业·品醇国际酒业', desc: '由校友经营的进口酒业公司直供，智利中央山谷产区赤霞珠干红2支礼盒装。酒体饱满，果香浓郁，适合商务宴请和家庭聚餐。附赠专业开瓶器。', specs: ['规格：750ml×2支', '品种：赤霞珠干红', '产地：智利中央山谷', '年份：2024年', '礼盒装+赠开瓶器'], shipping: '下单后24小时内发货，全国包邮', tags: ['包邮', '进口', '送礼'] },
  { id: 6, title: '北理工建筑系列——3D拼图 中心教学楼模型', cover: img('gb6', 400, 400), images: [img('gb6a', 750, 750), img('gb6b', 750, 750), img('gb6c', 750, 750)], price: 128, originalPrice: 268, soldCount: 340, totalCount: 500, endDate: '2026-07-20', category: 'cultural', supplier: '北理工校友文创工作室', desc: '以北京理工大学中关村校区中心教学楼为原型设计的高精度3D拼图模型。共328片零件，ABS环保材质，无需胶水即可拼装。拼装完成后尺寸约25×15×20cm，是送给北理工校友最好的桌面摆件。', specs: ['零件数：328片', '材质：ABS环保塑料', '成品尺寸：约25×15×20cm', '难度：中等（建议14岁以上）', '含详细拼装说明书'], shipping: '下单后2个工作日内发货，全国包邮', tags: ['限量', '文创', '包邮'] },
  { id: 7, title: '全聚德烤鸭套餐 4-6人份', cover: img('gb1', 400, 400), images: [img('gb1a', 750, 750), img('gb2a', 750, 750)], price: 398, originalPrice: 588, soldCount: 256, totalCount: 500, endDate: '2026-08-30', category: 'food', supplier: '全聚德烤鸭店（前门店）', desc: '百年老字号全聚德烤鸭店4-6人套餐，包含果木炭火烤鸭一只、荷叶饼、甜面酱、葱丝黄瓜丝，以及精选热菜6道、凉菜4道。到店享用，品味京城百年味道。', specs: ['适合人数：4-6人', '包含：烤鸭+配菜+小吃', '有效期：3个月', '预约：需提前1天预约', '仅限堂食'], shipping: '到店消费，无需配送', tags: ['老字号', '到店消费', '限量'] },
  { id: 8, title: '三里屯太古里酒店大床房', cover: img('gb3', 400, 400), images: [img('gb3a', 750, 750), img('gb3b', 750, 750)], price: 699, originalPrice: 1299, soldCount: 189, totalCount: 300, endDate: '2026-12-31', category: 'hotel', supplier: '三里屯太古里酒店', desc: '位于北京核心商圈三里屯的设计师酒店，大床房一晚住宿。酒店融合东方禅意与现代设计，步行可达太古里、工体等地标，是商旅休闲的理想选择。', specs: ['房型：高级大床房', '床型：1.8m大床', '含双早', '面积：35㎡', '免费WiFi+停车'], shipping: '预订成功后到店办理入住', tags: ['含早', '市中心', '限时特惠'] },
  { id: 9, title: '海南三亚5日4晚自由行', cover: img('gb4', 400, 400), images: [img('gb4a', 750, 750), img('gb1b', 750, 750)], price: 2980, originalPrice: 4580, soldCount: 156, totalCount: 300, endDate: '2026-10-31', category: 'travel', supplier: '携程旅行·校友合作商', desc: '海南三亚5日4晚自由行套餐，包含往返机票、海景酒店住宿、蜈支洲岛一日游、南山文化旅游区门票。自由安排行程，享受阳光沙滩椰林海岛风情。', specs: ['行程：5日4晚', '包含：机票+酒店+景点', '酒店：三亚湾海景酒店', '机票：北京/上海出发', '可选日期：多日期可选'], shipping: '电子行程单，出行前3天发送', tags: ['自由行', '海景', '限时优惠'] },
  { id: 10, title: '超级猩猩健身月卡', cover: img('gb5', 400, 400), images: [img('gb5a', 750, 750), img('gb3c', 750, 750)], price: 199, originalPrice: 399, soldCount: 523, totalCount: 1000, endDate: '2026-09-30', category: 'sport', supplier: '超级猩猩健身', desc: '超级猩猩健身全国通用月卡，覆盖北京、上海、广州、深圳等20+城市的50+门店。自由健身、团课预约、智能器械一应俱全，专业教练随时指导。', specs: ['有效期：30天', '适用门店：全国50+家', '包含：器械+团课+私教课体验', '首次到店需验证', '限新用户使用'], shipping: '电子卡券，购买后即时发放', tags: ['全国通用', '不限次', '新客专享'] },
  { id: 11, title: '北京欢乐谷亲子套票', cover: img('gb6', 400, 400), images: [img('gb6a', 750, 750), img('gb4b', 750, 750)], price: 299, originalPrice: 498, soldCount: 432, totalCount: 800, endDate: '2026-08-31', category: 'entertainment', supplier: '北京欢乐谷', desc: '北京欢乐谷亲子套票（1大1小），含全园通票，涵盖太阳神车、水晶神翼、丛林飞车等50+项游乐设施。小朋友的欢乐天堂，大朋友的减压胜地。', specs: ['包含：1成人+1儿童票', '儿童：1.2-1.5m', '有效期：购买后30天内', '营业时间：9:00-18:00', '园区：北京欢乐谷'], shipping: '电子票，刷二维码入园', tags: ['亲子', '通票', '热门'] },
  { id: 13, title: '海底捞火锅双人套餐', cover: img('gb1', 400, 400), images: [img('gb1c', 750, 750), img('gb2a', 750, 750)], price: 268, originalPrice: 398, soldCount: 789, totalCount: 1500, endDate: '2026-09-30', category: 'food', supplier: '海底捞火锅', desc: '海底捞火锅双人超值套餐，含锅底（四选一）、荤菜3份、素菜3份、主食2份、饮品2扎。服务至上的火锅体验，生日还有惊喜。', specs: ['适合：2人', '包含：锅底+菜品+饮品', '有效期：3个月', '需预约：提前排队', '限堂食'], shipping: '电子券，到店核销', tags: ['网红', '到店', '热销'] },
  { id: 14, title: '瑜伽私教课10节套餐', cover: img('gb3', 400, 400), images: [img('gb3b', 750, 750), img('gb6b', 750, 750)], price: 1999, originalPrice: 3500, soldCount: 128, totalCount: 300, endDate: '2026-12-31', category: 'sport', supplier: '静缘瑜伽', desc: '资深瑜伽老师一对一私教课程10节，涵盖哈他瑜伽、阴瑜伽、流瑜伽等多种流派。量身定制练习计划，改善体态、提升柔韧性、缓解工作压力。', specs: ['课时：10节', '时长：每节60分钟', '授课方式：一对一', '有效期：6个月', '需提前预约'], shipping: '购买后联系门店预约课时', tags: ['私教', '专业', '改善体态'] },
  { id: 15, title: '电影票全国通用兑换码', cover: img('gb5', 400, 400), images: [img('gb5a', 750, 750), img('gb4b', 750, 750)], price: 39, originalPrice: 80, soldCount: 1560, totalCount: 3000, endDate: '2026-12-31', category: 'entertainment', supplier: '猫眼电影', desc: '全国通用电影票兑换码，支持万达、博纳、大地等主流院线影院。2D/3D通兑，IMAX补差价。热门大片随心看，不限场次时间。', specs: ['有效期：1年', '适用：全国3000+影院', '2D/3D通兑', 'IMAX：补10-30元', '每个订单限用1张'], shipping: '电子码，即时发送', tags: ['通兑', '不限场次', '热销'] }
];


// ================================================================
// SECTION B: APP STATE
// ================================================================
var AppState = {
  isLoggedIn: false,
  currentRole: '商务会员',
  incomingRequests: [1, 3],
  outgoingIds: [],
  friendIds: [2],
  joinedGroups: [1],
  registeredActivities: [],
  activityRegistrations: [],
  subscribedCourses: [1],
  likedFeeds: {},
  collectedNews: {},
  collectedTopics: {},
  collectedInterviews: {},
  collectedCourses: {},
  feedComments: { 1: [{ name: '赵明辉', avatar: img('m1', 100, 100), text: '张总说得太好了，为北理工自豪！', time: '2026-06-08 15:00' }], 2: [{ name: '王军', avatar: img('u3', 100, 100), text: '恭喜落地！期待合作。', time: '2026-06-07 11:00' }, { name: '刘芳', avatar: img('u3', 100, 100), text: '星辰科技的产品很赞！', time: '2026-06-07 12:30' }], 3: [{ name: '张建国', avatar: img('u1', 100, 100), text: '恭喜刘总！A轮5000万非常不错！', time: '2026-06-06 20:00' }] },
  groupBuyOrders: [1, 2],
  myFeeds: [1, 2, 3],
  myActivities: [1, 2],
  myTopics: [1],
  myHelp: [3],
  myBiz: [1, 3]
};

// ================================================================
// 权限模型（独立角色+权限点体系）
// ================================================================
var rolePermissions = {
  '普通用户': ['browse', 'course', 'groupbuy'],
  '认证校友': ['browse', 'course', 'groupbuy', 'alumni_card', 'alumni_group', 'alumni_activity', 'alumni_help', 'publish_feed', 'publish_help'],
  '商务会员': ['browse', 'course', 'groupbuy', 'alumni_card', 'alumni_group', 'alumni_activity', 'alumni_help', 'publish_feed', 'publish_help', 'company', 'publish_business_need', 'member_service']
};

// 角色等级映射（仅用于兼容已有等级判断逻辑）
var roleRank = {
  '普通用户': 0,
  '认证校友': 1,
  '商务会员': 2
};

// 判断当前用户是否有发布权限（认证校友、商务会员都可以发布）
function canPublish() {
  return hasPermission('publish_feed')
      || hasPermission('publish_help')
      || hasPermission('publish_activity')
      || hasPermission('publish_business_need');
}

function setRole(role) { AppState.currentRole = role; }
function hasPermission(permission) {
  var perms = rolePermissions[AppState.currentRole] || [];
  return perms.indexOf(permission) >= 0;
}

// 获取当前角色可发布的项（带权限引导）
function getPublishActions() {
  var role = AppState.currentRole;
  var allActions = [
    { name: '发布动态', desc: '分享校友圈动态与生活', key: 'feed', icon: 'edit', color: '#6fa4cf', path: '/publish-feed', permission: 'publish_feed', minRole: '认证校友', category: 'alumni' },
    { name: '发布需求', desc: '发布互助或商务需求', key: 'demand', icon: 'help', color: '#a78bfa', path: '/publish-demand', permission: 'publish_help', minRole: '认证校友', category: 'alumni' }
  ];

  // 按角色过滤和标记状态
  return allActions.map(function(a) {
    return Object.assign({}, a, { enabled: hasPermission(a.permission) });
  });
}
function isFriend(id) { return AppState.friendIds.indexOf(id) >= 0; }
function sendRequest(id) { if (AppState.outgoingIds.indexOf(id) < 0) AppState.outgoingIds.push(id); }
function acceptRequest(id) { var idx = AppState.incomingRequests.indexOf(id); if (idx >= 0) { AppState.incomingRequests.splice(idx, 1); AppState.friendIds.push(id); } }
function rejectRequest(id) { var idx = AppState.incomingRequests.indexOf(id); if (idx >= 0) AppState.incomingRequests.splice(idx, 1); }
function isJoined(gid) { return AppState.joinedGroups.indexOf(gid) >= 0; }
function joinGroup(gid) { if (AppState.joinedGroups.indexOf(gid) < 0) AppState.joinedGroups.push(gid); }
function leaveGroup(gid) { var idx = AppState.joinedGroups.indexOf(gid); if (idx >= 0) AppState.joinedGroups.splice(idx, 1); }
function hasRegisteredAct(aid) { return AppState.registeredActivities.indexOf(aid) >= 0; }
function registerActivity(aid) { if (AppState.registeredActivities.indexOf(aid) < 0) AppState.registeredActivities.push(aid); }
function getActivityStatus(act) {
  var today = new Date().toISOString().split('T')[0];
  if (act.date < today) return '活动结束';
  if (act.deadline < today) return '报名截止';
  return '报名进行中';
}
function getMyRegistration(aid) {
  return AppState.activityRegistrations.find(function(r) { return r.activityId == aid; });
}
function getRegistrationStatusText(reg) {
  if (!reg) return '已报名';
  if (reg.status === 'cancelled') return '已取消';
  if (reg.status === 'pending_pay') return '待支付';
  if (reg.status === 'confirmed') {
    return reg.payStatus === 'paid' ? '已报名' : '已报名';
  }
  return '报名中';
}
function getRegistrationStatusColor(reg) {
  if (!reg) return 'success';
  if (reg.status === 'cancelled') return 'plain';
  if (reg.status === 'pending_pay') return 'danger';
  return 'success';
}
function saveRegistration(activityId, data) {
  var existing = getMyRegistration(activityId);
  var now = new Date().toLocaleString('zh-CN');
  var regData = {
    activityId: activityId,
    name: data.name,
    phone: data.phone,
    fields: data.fields || {},
    status: data.fee > 0 ? 'pending_pay' : 'confirmed',
    payStatus: data.fee > 0 ? 'unpaid' : 'paid',
    payAmount: data.fee,
    registerTime: now
  };
  if (existing) {
    Object.assign(existing, regData);
  } else {
    AppState.activityRegistrations.push(regData);
    if (AppState.registeredActivities.indexOf(activityId) < 0) {
      AppState.registeredActivities.push(activityId);
    }
  }
}
function cancelRegistration(aid) {
  var idx = AppState.registeredActivities.indexOf(aid);
  if (idx >= 0) AppState.registeredActivities.splice(idx, 1);
  var regIdx = AppState.activityRegistrations.findIndex(function(r) { return r.activityId == aid; });
  if (regIdx >= 0) {
    AppState.activityRegistrations[regIdx].status = 'cancelled';
  }
  showToast('已取消报名');
  Router.navigate('/activity/' + aid);
}
function showRegistrationInfo(aid) {
  Router.navigate('/activity-registration/' + aid);
}
function submitRegistration(aid) {
  var name = document.getElementById('reg-name') ? document.getElementById('reg-name').value : '';
  var phone = document.getElementById('reg-phone') ? document.getElementById('reg-phone').value : '';
  
  if (!name.trim()) { showToast('请填写姓名'); return; }
  if (!phone.trim() || phone.length !== 11) { showToast('请填写正确的手机号'); return; }
  
  var act = activityList.find(function(a) { return a.id == aid; });
  if (!act) return;
  
  var customFields = (act.customFields || []).filter(function(f) { return f.visible !== false; });
  var fields = {};
  customFields.forEach(function(f, idx) {
    var val = document.getElementById('reg-field-' + idx) ? document.getElementById('reg-field-' + idx).value : '';
    if (f.required && !val.trim()) { showToast('请填写' + f.label); return; }
    fields[f.label] = val;
  });
  
  saveRegistration(aid, { name: name, phone: phone, fee: act.fee, fields: fields });
  
  if (act.fee > 0) {
    Router.navigate('/activity-pay/' + aid);
  } else {
    Router.navigate('/activity-register-success/' + aid);
  }
}
function doActivityPay(aid) {
  var act = activityList.find(function(a) { return a.id == aid; });
  if (!act) return;
  
  showLoading('支付中...');
  setTimeout(function() {
    hideLoading();
    var reg = getMyRegistration(aid);
    if (reg) {
      reg.status = 'confirmed';
      reg.payStatus = 'paid';
    }
    Router.navigate('/activity-register-success/' + aid);
  }, 1500);
}
function isSubscribedCourse(cid) { return AppState.subscribedCourses.indexOf(cid) >= 0; }
function subscribeCourse(cid) { if (AppState.subscribedCourses.indexOf(cid) < 0) AppState.subscribedCourses.push(cid); }

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function goBack(fallback) {
  if (window.history.length > 1) { history.back(); } else { Router.navigate(fallback || '/home'); }
}

function doLogout() {
  AppState.isLoggedIn = false;
  Router.navigate('/login');
}

function doReset() {
  localStorage.clear();
  location.reload();
}

// ================================================================
// SECTION C: ROUTER
// ================================================================
var Router = {
  routes: [],
  current: null,
  params: {},
  register: function(routes) { this.routes = routes; },
  match: function(hash) {
    var path = hash.replace('#', '') || '/';
    var queryStr = '';
    var qIdx = path.indexOf('?');
    if (qIdx >= 0) { queryStr = path.slice(qIdx + 1); path = path.slice(0, qIdx); }
    for (var i = 0; i < this.routes.length; i++) {
      var r = this.routes[i];
      var pattern = '^' + r.path.replace(/:(\w+)/g, '([^/]+)') + '$';
      var m = path.match(new RegExp(pattern));
      if (m) {
        var params = {};
        var keys = (r.path.match(/:(\w+)/g) || []).map(function(k) { return k.slice(1); });
        keys.forEach(function(k, j) { params[k] = m[j + 1]; });
        if (queryStr) {
          queryStr.split('&').forEach(function(pair) {
            var kv = pair.split('=');
            if (kv.length === 2) params[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1]);
          });
        }
        return { route: r, params: params };
      }
    }
    return null;
  },
  navigate: function(path) { location.hash = path; },
  replace: function(path) { location.replace('#' + path); },
  back: function() { history.back(); },
  beforeEach: null,
  start: function() {
    var self = this;
    function handle() {
      var matched = self.match(location.hash);
      if (!matched) { self.navigate('/login'); return; }
      if (matched.route.redirect) { self.navigate(matched.route.redirect); return; }
      if (self.beforeEach) {
        var result = self.beforeEach(matched.route, matched.params);
        if (result) { self.navigate(result); return; }
      }
      self.current = matched.route;
      self.params = matched.params;
      renderView();
    }
    window.addEventListener('hashchange', handle);
    handle();
  }
};

function authGuard(route, params) {
  var path = route.path;
  if (path === '/login') return null;
  if (!AppState.isLoggedIn) return '/login';
  if (route.meta && route.meta.minRole) {
    var reqRank = roleRank[route.meta.minRole];
    var userRank = roleRank[AppState.currentRole];
    if (userRank < reqRank) return '/home';
  }
  return null;
}

// ================================================================
// SECTION D: ROUTE DEFINITIONS
// ================================================================
var routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', view: 'Login' },
  { path: '/home', view: 'Home' },
  { path: '/news', view: 'NewsList' },
  { path: '/news/:id', view: 'NewsDetail' },
  { path: '/activity', view: 'ActivityList' },
  { path: '/activity/:id', view: 'ActivityDetail' },
  { path: '/activity-register/:id', view: 'ActivityRegister' },
  { path: '/activity-pay/:id', view: 'ActivityPay' },
  { path: '/activity-register-success/:id', view: 'ActivityRegisterSuccess' },
  { path: '/activity-registration/:id', view: 'ActivityRegistration' },
  { path: '/publish-activity', view: 'PublishActivity' },
  { path: '/alumni-card', view: 'AlumniCardList' },
  { path: '/alumni-card/:id', view: 'AlumniCardDetail' },
  { path: '/alumni-distribution', view: 'AlumniDistribution' },
  { path: '/alumni-group', view: 'AlumniGroupList' },
  { path: '/alumni-group/:id', view: 'AlumniGroupDetail' },
  { path: '/alumni-feed', view: 'AlumniFeedList' },
  { path: '/alumni-feed/:id', view: 'AlumniFeedDetail' },
  { path: '/publish-feed', view: 'PublishFeed' },
  { path: '/help', view: 'HelpList' },
  { path: '/help/:id', view: 'HelpDetail' },
  { path: '/publish-demand', view: 'PublishDemand' },
  { path: '/member-card', view: 'MemberCardList' },
  { path: '/member-card/:id', view: 'MemberCardDetail' },
  { path: '/member-distribution', view: 'MemberDistribution' },
  { path: '/member-ep', view: 'MemberEPListView' },
  { path: '/member-company/:id', view: 'MemberCompanyDetail' },
  { path: '/member-product/:id', view: 'MemberProductDetail' },
  { path: '/member-demand', view: 'MemberDemandListView' },
  { path: '/member-mutual-help', view: 'MemberMutualHelp' },
  { path: '/member-business-demand', view: 'MemberBusinessDemand' },
  { path: '/member-demand/business/:id', view: 'MemberBusinessDetail' },
  { path: '/member-org', view: 'MemberOrganization' },
  { path: '/member-service', view: 'MemberServiceIndex' },
  { path: '/member-service/alumni-circle/:type', view: 'AlumniCircleDetail' },
  { path: '/member-service/:category', view: 'MemberServiceDetail' },
  { path: '/service-provider/:id', view: 'ServiceProviderDetail' },
  { path: '/service-project/:id', view: 'ServiceProjectDetail' },
  { path: '/service-chat/:providerId/:projectId', view: 'ServiceChat' },
  { path: '/topic-share', view: 'TopicShareList' },
  { path: '/topic-share/:id', view: 'TopicShareDetail' },
  { path: '/interview', view: 'InterviewList' },
  { path: '/interview/:id', view: 'InterviewDetail' },
  { path: '/courses', view: 'CourseList' },
  { path: '/courses/:id', view: 'CourseDetail' },
  { path: '/group-buy', view: 'GroupBuyList' },
  { path: '/group-buy/:id', view: 'GroupBuyDetail' },
  { path: '/profile', view: 'Profile' },
  { path: '/profile/edit', view: 'ProfileEdit' },
  { path: '/profile/subscribe', view: 'ProfileSubscribe' },
  { path: '/profile/group-buy', view: 'ProfileGroupBuy' },
  { path: '/profile/favorites', view: 'ProfileFavorites' },
  { path: '/profile/activities', view: 'ProfileActivities' },
  { path: '/profile/member-edit', view: 'ProfileMemberEdit' },
  { path: '/profile/add-company', view: 'AddCompanyForm' },
  { path: '/profile/add-product', view: 'AddProductForm' },
  { path: '/profile/my-feed', view: 'ProfileMyFeed' },
  { path: '/profile/my-groups', view: 'ProfileMyGroups' },
  { path: '/profile/my-help', view: 'ProfileMyHelp' },
  { path: '/profile/my-response', view: 'ProfileMyResponse' },
  { path: '/help-response/:id/:responseIdx', view: 'HelpResponseDetail' },
  { path: '/profile/my-business', view: 'ProfileMyBusiness' },
  { path: '/profile/my-topics', view: 'ProfileMyTopics' },
  { path: '/profile/points', view: 'ProfilePoints', meta: { minRole: '商务会员' } },
  { path: '/profile/member-recharge', view: 'MemberRecharge' },
  { path: '/profile/member-recharge/:id', view: 'MemberRechargeConfirm' },
  { path: '/profile/member-recharge-success', view: 'MemberRechargeSuccess' },
  { path: '/profile/member-orders', view: 'MemberOrders' },
  { path: '/profile/collections', view: 'ProfileCollections' },
  { path: '/profile/likes', view: 'ProfileLikes' },
  { path: '/profile/settings', view: 'ProfileSettings' },
  { path: '/publish-service', view: 'PublishService' },
  { path: '/profile/my-services', view: 'ProfileMyServices' },
  { path: '/profile/service-consults', view: 'ProfileServiceConsults' },
  { path: '/profile/service-orders', view: 'ProfileServiceOrders' },
  { path: '/profile/my-content', view: 'ProfileMyContent' },
  { path: '/profile/social', view: 'ProfileSocial' },
  { path: '/profile/help-center', view: 'ProfileHelpCenter' },
  { path: '/profile/business-center', view: 'ProfileBusinessCenter' },
  { path: '/profile/learning', view: 'ProfileLearning' },
  // AI报告相关路由
  { path: '/ai-report', view: 'AIReportList' },
  { path: '/ai-report/:id', view: 'AIReportDetail' },
  { path: '/ai-report-order/:id', view: 'AIReportOrderConfirm' },
  { path: '/profile/report-orders', view: 'ReportOrders' },
  { path: '/profile/report-orders/:id', view: 'ReportOrderDetail' }
];

// ================================================================
// SECTION E: SVG ICONS
// ================================================================
var I = {};
I.home = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>';
I.search = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>';
I.bell = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>';
I.arrowLeft = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>';
I.arrowRight = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
I.arrowDown = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>';
I.clock = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>';
I.location = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>';
I.heart = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>';
I.heartFilled = '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>';
I.star = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
I.starFilled = '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
I.share = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>';
I.message = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';
I.plus = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>';
I.user = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>';
I.settings = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>';
I.check = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>';
I.close = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
I.image = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>';
I.shoppingCart = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>';
I.bookmark = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>';
I.fire = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.78 2-6.5a5.5 5.5 0 0 1 6.5 10.5c-1.04.7-1.5 1.5-1.5 3 0 1.93-1.57 3.5-3.5 3.5S10 18.43 10 16.5c0-.17.02-.33.05-.5"/></svg>';
I.eye = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>';
I.phone = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';
I.shield = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>';
I.card = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>';
I.building = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="9" y1="6" x2="9" y2="6.01"/><line x1="15" y1="6" x2="15" y2="6.01"/><line x1="9" y1="10" x2="9" y2="10.01"/><line x1="15" y1="10" x2="15" y2="10.01"/><line x1="9" y1="14" x2="9" y2="14.01"/><line x1="15" y1="14" x2="15" y2="14.01"/><line x1="9" y1="22" x2="15" y2="22"/></svg>';
I.package = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>';
I.service = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>';
I.users = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>';
I.activity = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>';
I.help = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>';
I.flag = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>';
I.award = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>';
I.video = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>';
I.mic = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>';
I.send = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';
I.coin = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="7" x2="12" y2="17"/><text x="8" y="13" font-size="7" fill="currentColor" stroke="none">$</text></svg>';
I.wallet = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4z"/></svg>';
I.store = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l1.5-4.5A2 2 0 0 1 6.4 3h11.2a2 2 0 0 1 1.9 1.5L21 9"/><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z"/><path d="M9 21V9"/></svg>';
I.calendar = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>';
I.bag = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>';
I.edit = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>';
I.play = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>';
I.wx = '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M8.69 11.95a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm3.62 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm-3.62 4a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm3.62 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zM12 2C6.48 2 2 5.92 2 10.7c0 2.68 1.38 5.07 3.53 6.63L4.5 21l4.13-2.55c1.08.3 2.2.45 3.37.45 5.52 0 10-3.92 10-8.7S17.52 2 12 2z"/></svg>';
I.utensils = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M5 2v20"/><path d="M15 14V2a3 3 0 0 1 6 0v12"/><path d="M15 14v8"/></svg>';
I.hotel = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 9h.01"/><path d="M9 12h.01"/><path d="M9 15h.01"/><path d="M9 18h.01"/><path d="M15 9h.01"/><path d="M15 12h.01"/><path d="M15 15h.01"/><path d="M15 18h.01"/></svg>';
I.plane = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>';
I.dumbbell = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6.5 6.5l11 11"/><path d="M21 21l-1-1"/><path d="M3 3l1 1"/><path d="M18 22l4-4"/><path d="M2 6l4-4"/><path d="M3 10l7-7"/><path d="M14 21l7-7"/></svg>';
I.game = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="11" x2="10" y2="11"/><line x1="8" y1="9" x2="8" y2="13"/><line x1="15" y1="12" x2="15.01" y2="12"/><line x1="18" y1="10" x2="18.01" y2="10"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258C21.012 8.69 19.55 5 17.32 5z"/></svg>';
I.pulse = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>';
I.palette = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>';
I.network = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V9"/></svg>';

function iconSVG(name, size, color) {
  var s = size || 20;
  var c = color || 'currentColor';
  return '<span style="display:inline-flex;width:' + s + 'px;height:' + s + 'px;color:' + c + ';pointer-events:none">' + (I[name] || '') + '</span>';
}

// ================================================================
// SECTION F: UI COMPONENTS
// ================================================================

function UI_NavBar(title, showBack, rightHtml) {
  var ph = '<div class="comp-navbar-placeholder"></div>';
  var back = '';
  if (showBack) {
    back = '<span class="nav-back" data-action="back">' + iconSVG('arrowLeft', 22, '#fff') + '</span>';
  }
  var right = rightHtml ? '<span class="nav-right">' + rightHtml + '</span>' : '';
  return ph + '<div class="comp-navbar">' + back + '<span class="nav-title">' + escapeHtml(title) + '</span>' + right + '</div>';
}

function UI_Tabbar(active) {
  var tabs = [
    { key: '/home', label: '首页', icon: 'home' },
    { key: '/courses', label: '课程', icon: 'bookmark' },
    { key: 'publish', label: '', icon: 'plus' },
    { key: '/group-buy', label: '团购', icon: 'shoppingCart' },
    { key: '/profile', label: '我的', icon: 'user' }
  ];
  var html = '<div class="comp-tabbar">';
  tabs.forEach(function(t) {
    if (t.key === 'publish') {
      // 所有角色都显示+按钮，点击打开发布抽屉（内部有权限引导）
      html += '<div class="tab-publish" data-action="show-publish"><div class="publish-btn">+</div></div>';
    } else {
      var isActive = (active === t.key || (active === '/' && t.key === '/home'));
      html += '<div class="tab-item' + (isActive ? ' active' : '') + '" data-action="nav" data-payload="' + t.key + '">' + iconSVG(t.icon, 20) + '<span>' + t.label + '</span></div>';
    }
  });
  html += '</div>';
  return html;
}

function UI_Search(value, placeholder, id) {
  var val = value || '';
  var ph = placeholder || '搜索';
  var sid = id || 'search-input';
  return '<div class="comp-search"><div class="search-wrap">' + iconSVG('search', 16, '#999') + '<input id="' + sid + '" type="text" placeholder="' + ph + '" value="' + escapeHtml(val) + '" data-input="' + sid + '"><span class="search-clear" data-action="clear-search" data-target="' + sid + '" style="display:' + (val ? '' : 'none') + '">&times;</span></div></div>';
}

function UI_Cell(title, label, value, isLink, icon, thumb) {
  var html = '<div class="comp-cell">';
  if (thumb) html += '<img src="' + thumb + '" class="cell-icon" style="width:40px;height:40px;border-radius:6px;object-fit:cover">';
  if (icon) html += '<span class="cell-icon">' + icon + '</span>';
  html += '<div class="cell-body"><div class="cell-title">' + escapeHtml(title) + '</div>';
  if (label) html += '<div class="cell-label">' + escapeHtml(label) + '</div>';
  html += '</div>';
  if (value) html += '<span class="cell-value">' + escapeHtml(value) + '</span>';
  if (isLink) html += '<span class="cell-arrow">' + iconSVG('arrowRight', 14, '#c8c9cc') + '</span>';
  html += '</div>';
  return html;
}

function UI_CellGroup(cells, inset) {
  return '<div class="comp-cell-group' + (inset ? ' inset' : '') + '">' + cells.map(function(c) { return UI_Cell(c.title, c.label, c.value, c.isLink, c.icon, c.thumb); }).join('') + '</div>';
}

function UI_Tag(text, type) {
  return '<span class="comp-tag ' + (type || 'plain') + '">' + escapeHtml(text) + '</span>';
}

function UI_Button(text, type, size, round, block, color) {
  var cls = 'comp-btn ' + (type || 'primary');
  if (size) cls += ' ' + size;
  if (round) cls += ' round';
  if (block) cls += ' block';
  var style = color ? 'background:' + color : '';
  return '<button type="button" class="' + cls + '" style="' + style + '">' + text + '</button>';
}

function UI_Tabs(tabs, active) {
  var nav = '<div class="comp-tabs"><div class="tabs-nav">';
  tabs.forEach(function(t, i) {
    nav += '<span class="tab-nav-item' + (t.key === active ? ' active' : '') + '" data-action="switch-tab" data-tab="' + t.key + '">' + escapeHtml(t.name) + '</span>';
  });
  nav += '</div></div>';
  return nav;
}

function UI_Swipe(items) {
  var html = '<div class="comp-swipe" data-swipe="true"><div class="swipe-track">';
  items.forEach(function(item) {
    if (item.link) {
      html += '<div class="swipe-item" onclick="Router.navigate(\'' + item.link + '\')" style="cursor:pointer"><img src="' + item.image + '" alt="' + escapeHtml(item.title) + '"></div>';
    } else {
      html += '<div class="swipe-item"><img src="' + item.image + '" alt="' + escapeHtml(item.title) + '"></div>';
    }
  });
  html += '</div><div class="swipe-dots">';
  items.forEach(function(_, i) {
    html += '<span class="' + (i === 0 ? 'active' : '') + '" data-dot="' + i + '"></span>';
  });
  html += '</div></div>';
  return html;
}

function UI_Empty(msg) {
  return '<div class="empty-state"><div class="icon">' + iconSVG('package', 48, '#c8c9cc') + '</div><div>' + escapeHtml(msg || '暂无数据') + '</div></div>';
}

function UI_BottomBar(html) {
  return '<div class="bottom-bar">' + html + '</div>';
}

function UI_Progress(pct, color) {
  var c = color || 'var(--primary)';
  return '<div class="comp-progress"><div class="bar" style="width:' + pct + '%;background:' + c + '"></div></div>';
}

function UI_Field(label, type, placeholder, value, required) {
  var val = value || '';
  var req = required ? ' required' : '';
  if (type === 'textarea') {
    return '<div class="comp-field"><span class="field-label' + req + '">' + escapeHtml(label) + '</span><textarea placeholder="' + escapeHtml(placeholder || '') + '">' + escapeHtml(val) + '</textarea></div>';
  }
  return '<div class="comp-field"><span class="field-label' + req + '">' + escapeHtml(label) + '</span><input type="' + (type || 'text') + '" placeholder="' + escapeHtml(placeholder || '') + '" value="' + escapeHtml(val) + '"></div>';
}

// Toast & Dialog
function showToast(msg) {
  var el = document.getElementById('toast-container');
  el.innerHTML = '<div class="comp-toast">' + escapeHtml(msg) + '</div>';
  setTimeout(function() { el.innerHTML = ''; }, 2000);
}

function showConfirm(msg, onOk, onCancel) {
  var el = document.getElementById('overlay-container');
  el.innerHTML = '<div class="comp-dialog-overlay"><div class="comp-dialog-box"><div class="dlg-header">提示</div><div class="dlg-body">' + escapeHtml(msg) + '</div><div class="dlg-footer"><button class="btn-cancel">取消</button><button class="btn-confirm" id="dlg-confirm-btn">确定</button></div></div></div>';
  document.getElementById('dlg-confirm-btn').onclick = function() { el.innerHTML = ''; if (onOk) onOk(); };
  el.querySelector('.btn-cancel').onclick = function() { el.innerHTML = ''; if (onCancel) onCancel(); };
}

function showActionSheet(actions, onSelect) {
  var el = document.getElementById('overlay-container');
  var html = '<div class="comp-popup-overlay" data-action="close-overlay"><div class="comp-actionsheet">';
  actions.forEach(function(a) {
    html += '<div class="as-action" data-action="as-select" data-key="' + a.key + '">' + escapeHtml(a.name) + '</div>';
  });
  html += '<div class="as-cancel" data-action="close-overlay">取消</div></div></div>';
  el.innerHTML = html;
  window._asCallback = onSelect;
}

// 身份切换底部抽屉
function showRoleSheet(onSelect) {
  var el = document.getElementById('overlay-container');
  var roles = [
    { key: '普通用户', desc: '浏览资讯、活动与社团等公开内容' },
    { key: '认证校友', desc: '校友名片、动态、互助等校友专属功能' },
    { key: '商务会员', desc: '会员名片、企业产品、专属商务服务' }
  ];
  var cur = AppState.currentRole;
  var html = '<div class="comp-popup-overlay" data-action="close-overlay"><div class="role-sheet">';
  html += '<div class="rs-grab"></div>';
  html += '<div class="rs-head"><div class="rs-title">切换身份</div><div class="rs-sub">选择你的身份，解锁对应的功能模块</div></div>';
  html += '<div class="rs-list">';
  roles.forEach(function(r) {
    var isActive = r.key === cur;
    html += '<div class="rs-item' + (isActive ? ' active' : '') + '" data-action="as-select" data-key="' + r.key + '">';
    html += '<div class="rs-ic">' + iconSVG('user', 22, '#fff') + '</div>';
    html += '<div class="rs-body"><div class="rs-name">' + escapeHtml(r.key) + '</div><div class="rs-desc">' + escapeHtml(r.desc) + '</div></div>';
    if (isActive) html += '<div class="rs-check">' + iconSVG('check', 14, '#fff') + '</div>';
    html += '</div>';
  });
  html += '</div></div></div>';
  el.innerHTML = html;
  window._asCallback = onSelect;
}

// 发布底部抽屉
// 发布底部抽屉（带权限引导）
function showPublishSheet(onSelect) {
  var el = document.getElementById('overlay-container');
  var actions = getPublishActions();
  var role = AppState.currentRole;

  var html = '<div class="comp-popup-overlay" data-action="close-overlay"><div class="role-sheet publish-sheet">';
  html += '<div class="rs-grab"></div>';
  html += '<div class="rs-head"><div class="rs-title">发布内容</div><div class="rs-sub">选择你想要发布的类型</div></div>';
  html += '<div class="rs-list">';

  actions.forEach(function(a) {
    var disabled = !a.enabled;
    var itemClass = 'rs-item' + (disabled ? ' rs-item-disabled' : '');
    var action = disabled ? 'show-publish-guide' : 'as-select';

    html += '<div class="' + itemClass + '" data-action="' + action + '" data-key="' + a.key + '" data-min-role="' + (a.minRole || '') + '">';
    html += '<div class="rs-ic" style="background:linear-gradient(135deg,' + a.color + ',' + a.color + (disabled ? '66' : 'cc') + ')">' + iconSVG(a.icon, 22, disabled ? '#ffffffaa' : '#fff') + '</div>';
    html += '<div class="rs-body"><div class="rs-name">' + escapeHtml(a.name) + '</div><div class="rs-desc">' + escapeHtml(disabled ? ('需' + a.minRole + '身份') : a.desc) + '</div></div>';
    if (disabled) {
      html += '<div class="rs-lock">' + iconSVG('lock', 16, '#c8c9cc') + '</div>';
    } else {
      html += '<span class="rs-arrow">' + iconSVG('arrowRight', 16, '#c8c9cc') + '</span>';
    }
    html += '</div>';
  });

  html += '</div>';

  // 底部按钮：普通用户显示"立即认证"，其他显示"取消"
  if (role === '普通用户') {
    html += '<div class="ps-action-btn" data-action="nav" data-payload="/profile/edit">立即认证 → 开启发布</div>';
  } else if (role === '认证校友') {
    html += '<div class="ps-upgrade-btn" data-action="nav" data-payload="/profile/member-edit">升级会员 → 解锁更多</div>';
  }
  html += '<div class="ps-cancel" data-action="close-overlay">取消</div>';

  html += '</div></div>';
  el.innerHTML = html;
  window._asCallback = onSelect;
}

// 保存企业表单
function saveCompanyForm() {
  // 获取表单字段
  var fields = document.querySelectorAll('.comp-field input, .comp-field textarea');
  var logo = document.getElementById('company-logo-preview').src;
  var name = fields[0] ? fields[0].value.trim() : '';
  var industry = fields[1] ? fields[1].value.trim() : '';
  var address = fields[2] ? fields[2].value.trim() : '';
  var position = fields[3] ? fields[3].value.trim() : '';
  var joinDate = fields[4] ? fields[4].value.trim() : '';
  var intro = fields[5] ? fields[5].value.trim() : '';

  // 验证必填字段
  if (!name) {
    showToast('请输入企业名称');
    return;
  }
  if (!industry) {
    showToast('请输入所属行业');
    return;
  }
  if (!address) {
    showToast('请输入企业地址');
    return;
  }
  if (!position) {
    showToast('请输入您的职位');
    return;
  }
  if (!intro) {
    showToast('请输入企业简介');
    return;
  }

  // 构建企业对象
  var company = {
    logo: logo,
    name: name,
    industry: industry,
    address: address,
    position: position,
    joinDate: joinDate,
    intro: intro
  };

  // 保存或更新
  if (!uiState.selectedCompanies) uiState.selectedCompanies = [];

  var editIndex = uiState.editingCompanyIndex;
  if (editIndex !== undefined && editIndex !== null && editIndex >= 0) {
    // 编辑模式
    uiState.selectedCompanies[editIndex] = company;
    showToast('企业信息已更新');
  } else {
    // 新增模式
    uiState.selectedCompanies.push(company);
    showToast('企业已添加');
  }

  // 清除编辑状态并返回
  uiState.editingCompanyIndex = null;
  goBack();
}

// 保存产品表单
function saveProductForm() {
  var fields = document.querySelectorAll('.comp-field input, .comp-field textarea');
  var cover = document.getElementById('product-cover-preview').src;
  var name = fields[0] ? fields[0].value.trim() : '';
  var intro = fields[1] ? fields[1].value.trim() : '';
  var featuresText = fields[2] ? fields[2].value.trim() : '';
  var applications = fields[3] ? fields[3].value.trim() : '';

  // 验证必填字段
  if (!name) {
    showToast('请输入产品名称');
    return;
  }
  if (!intro) {
    showToast('请输入产品简介');
    return;
  }
  if (!featuresText) {
    showToast('请输入核心功能');
    return;
  }
  if (!applications) {
    showToast('请输入应用领域');
    return;
  }

  // 处理核心功能（按行分割）
  var features = featuresText.split('\n').map(function(f) { return f.trim(); }).filter(function(f) { return f; });

  // 构建产品对象
  var product = {
    cover: cover,
    name: name,
    intro: intro,
    features: features,
    applications: applications
  };

  // 保存或更新
  if (!uiState.selectedProducts) uiState.selectedProducts = [];

  var editIndex = uiState.editingProductIndex;
  if (editIndex !== undefined && editIndex !== null && editIndex >= 0) {
    uiState.selectedProducts[editIndex] = product;
    showToast('产品信息已更新');
  } else {
    uiState.selectedProducts.push(product);
    showToast('产品已添加');
  }

  uiState.editingProductIndex = null;
  goBack();
}

function showImagePreview(images, startIdx) {
  var el = document.getElementById('overlay-container');
  var idx = startIdx || 0;
  window._previewImages = images;
  window._previewIdx = idx;
  el.innerHTML = '<div class="img-preview-overlay" data-action="close-overlay"><span class="close-preview">&times;</span><img src="' + images[idx] + '" id="preview-img"></div>';
}

function hideOverlay() {
  document.getElementById('overlay-container').innerHTML = '';
}

// ================================================================
// SECTION G: GLOBAL STATE FOR UI
// ================================================================
var uiState = {
  homeSearch: '',
  homeSearchVisible: false,
  groupListTab: 'all',
  groupDetailTab: 'intro',
  courseDetailTab: 'intro',
  profileActTab: 'registered',
  profileHelpTab: 'published',
  profileResponseTab: 'received',
  profileBizTab: 'biz',
  expandedChapters: {},
  feedVisibility: '公开',
  groupBuyCategory: 'all',
  demandTab: 'help',
  epListTab: 'company',
  publishDemandType: 'help'
};


// ================================================================
// SECTION H: RENDER VIEW
// ================================================================
function renderView() {
  if (typeof Views === 'undefined') {
    setTimeout(renderView, 50);
    return;
  }
  var viewName = Router.current ? Router.current.view : null;
  if (!viewName || !Views[viewName]) {
    document.getElementById('app').innerHTML = '<div class="page-container"><div class="empty-state">页面加载中...</div></div>';
    return;
  }
  var html;
  try {
    html = Views[viewName]();
  } catch (e) {
    document.getElementById('app').innerHTML = '<div class="page-container"><div class="empty-state" style="padding:40px"><h3>页面渲染错误</h3><p style="color:var(--danger);margin:10px 0">' + escapeHtml(viewName) + '</p><p style="font-size:12px;color:var(--text-lighter)">' + escapeHtml(e.message) + '</p><p style="margin-top:10px"><a href="javascript:location.reload()">刷新页面</a></p></div></div>';
    return;
  }
  // Add tabbar
  if (showTabbar()) {
    html += UI_Tabbar(activeTabKey());
  }
  document.getElementById('app').innerHTML = html;

  // 添加图片上传监听器
  var companyLogoInput = document.getElementById('company-logo-input');
  if (companyLogoInput) {
    companyLogoInput.addEventListener('change', function(e) {
      if (e.target.files && e.target.files[0]) {
        var reader = new FileReader();
        reader.onload = function(event) {
          document.getElementById('company-logo-preview').src = event.target.result;
        };
        reader.readAsDataURL(e.target.files[0]);
      }
    });
  }

  var productCoverInput = document.getElementById('product-cover-input');
  if (productCoverInput) {
    productCoverInput.addEventListener('change', function(e) {
      if (e.target.files && e.target.files[0]) {
        var reader = new FileReader();
        reader.onload = function(event) {
          document.getElementById('product-cover-preview').src = event.target.result;
        };
        reader.readAsDataURL(e.target.files[0]);
      }
    });
  }
  // Init swipe
  try { initSwipe(); } catch(e) {}
  // Init search
  try { initSearch(); } catch(e) {}
  // Init profile edit avatar uploader
  try { initProfileEditAvatar(); } catch(e) {}
  // Init charts (ECharts)
  try { initPageCharts(); } catch(e) { console.error('chart init error:', e); }
}

function initProfileEditAvatar() {
  var input = document.getElementById('pe-avatar-input');
  if (!input) return;
  input.addEventListener('change', function(e) {
    var file = e.target.files && e.target.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function(ev) {
      var preview = document.getElementById('pe-avatar-preview');
      if (!preview) return;
      var newImg = document.createElement('img');
      newImg.id = 'pe-avatar-preview';
      newImg.src = ev.target.result;
      newImg.style.cssText = 'width:60px;height:60px;border-radius:50%;object-fit:cover;border:1px solid #ebedf0';
      preview.replaceWith(newImg);
    };
    reader.readAsDataURL(file);
  });
}

function initSwipe() {
  var sw = document.querySelector('[data-swipe]');
  if (!sw) return;
  var track = sw.querySelector('.swipe-track');
  var dots = sw.querySelectorAll('[data-dot]');
  var items = track.children;
  var idx = 0;
  function go(i) {
    idx = i; track.style.transform = 'translateX(-' + (idx * 100) + '%)';
    dots.forEach(function(d, j) { d.className = j === idx ? 'active' : ''; });
  }
  var interval = setInterval(function() { go((idx + 1) % items.length); }, 3000);
  dots.forEach(function(d) {
    d.addEventListener('click', function() { clearInterval(interval); go(parseInt(this.dataset.dot)); });
  });
}

function initSearch() {
  var si = document.getElementById('home-search');
  if (!si) return;
  // Clear button handling
  var clearBtn = si.parentElement.querySelector('.search-clear');
  if (clearBtn) {
    clearBtn.style.display = si.value ? '' : 'none';
  }
}

// ================================================================
// SECTION I2: CHARTS (ECharts)
// ================================================================
function initPageCharts() {
  if (typeof echarts === 'undefined') return;
  // Dispatch by page
  if (document.getElementById('alumni-age-chart')) {
    initAlumniDistributionCharts();
  }
  if (document.getElementById('member-industry-chart')) {
    initMemberDistributionCharts();
  }
}

function initAlumniDistributionCharts() {
  // 公共配置
  var baseTextColor = '#333';
  var lightTextColor = '#999';
  var primaryColor = '#6fa4cf';

  // ---------- 1. 年龄分布柱状图 ----------
  var ageChart = echarts.init(document.getElementById('alumni-age-chart'));
  ageChart.setOption({
    color: [primaryColor],
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    grid: { left: '3%', right: '4%', bottom: '3%', top: '8%', containLabel: true },
    xAxis: {
      type: 'category',
      data: ['20以下', '20-30', '30-40', '40-50', '50+'],
      axisTick: { alignWithLabel: true },
      axisLabel: { color: lightTextColor, fontSize: 10 }
    },
    yAxis: {
      type: 'value',
      name: '人数',
      nameTextStyle: { color: lightTextColor, fontSize: 10 },
      axisLabel: { color: lightTextColor, fontSize: 10 },
      splitLine: { lineStyle: { color: '#f0f0f0' } }
    },
    series: [{
      name: '校友数',
      type: 'bar',
      barWidth: '50%',
      data: [
        { value: 80, itemStyle: { color: '#9bc1de' } },
        { value: 420, itemStyle: { color: '#6fa4cf' } },
        { value: 560, itemStyle: { color: '#4a90d9' } },
        { value: 320, itemStyle: { color: '#dabb6e' } },
        { value: 140, itemStyle: { color: '#c9a558' } }
      ],
      label: { show: true, position: 'top', color: baseTextColor, fontSize: 10 }
    }]
  });

  // ---------- 2. 专业分布饼图 ----------
  var majorChart = echarts.init(document.getElementById('alumni-major-chart'));
  majorChart.setOption({
    color: ['#6fa4cf', '#dabb6e', '#07c160', '#ff976a', '#9254de', '#ee0a24', '#4ecdc4', '#ffeaa7'],
    tooltip: { trigger: 'item', formatter: '{b}: {c}人 ({d}%)' },
    legend: {
      orient: 'horizontal',
      bottom: 0,
      itemWidth: 10,
      itemHeight: 10,
      textStyle: { color: lightTextColor, fontSize: 10 }
    },
    series: [{
      name: '专业分布',
      type: 'pie',
      radius: ['35%', '65%'],
      center: ['50%', '45%'],
      avoidLabelOverlap: true,
      itemStyle: { borderColor: '#fff', borderWidth: 2 },
      label: { show: false },
      emphasis: {
        label: { show: true, fontSize: 12, fontWeight: 'bold' },
        itemStyle: { shadowBlur: 10, shadowOffsetX: 0, shadowColor: 'rgba(0,0,0,0.2)' }
      },
      data: [
        { value: 380, name: '计算机科学' },
        { value: 320, name: '机械工程' },
        { value: 240, name: '电子信息' },
        { value: 200, name: '材料科学' },
        { value: 160, name: '车辆工程' },
        { value: 120, name: '光电工程' },
        { value: 80, name: '管理科学' },
        { value: 100, name: '其他' }
      ]
    }]
  });

  // ---------- 3. 社团人数分布柱状图 ----------
  var groupChart = echarts.init(document.getElementById('alumni-group-chart'));
  groupChart.setOption({
    color: ['#07c160'],
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    grid: { left: '3%', right: '8%', bottom: '3%', top: '8%', containLabel: true },
    xAxis: {
      type: 'value',
      name: '人数',
      nameTextStyle: { color: lightTextColor, fontSize: 10 },
      axisLabel: { color: lightTextColor, fontSize: 10 },
      splitLine: { lineStyle: { color: '#f0f0f0' } }
    },
    yAxis: {
      type: 'category',
      data: ['篮球社', '摄影社', '读书会', '金融社', '创业社', '足球社', '公益社'],
      axisLabel: { color: baseTextColor, fontSize: 10 }
    },
    series: [{
      name: '成员数',
      type: 'bar',
      data: [128, 96, 85, 76, 64, 52, 38],
      barWidth: '55%',
      label: { show: true, position: 'right', color: baseTextColor, fontSize: 10 },
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
          { offset: 0, color: '#9be09e' },
          { offset: 1, color: '#07c160' }
        ])
      }
    }]
  });

  // ---------- 4. 活动频次折线图 ----------
  var activityChart = echarts.init(document.getElementById('alumni-activity-chart'));
  activityChart.setOption({
    color: ['#ee0a24'],
    tooltip: { trigger: 'axis' },
    grid: { left: '3%', right: '4%', bottom: '3%', top: '10%', containLabel: true },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      axisLabel: { color: lightTextColor, fontSize: 9 }
    },
    yAxis: {
      type: 'value',
      name: '活动数',
      nameTextStyle: { color: lightTextColor, fontSize: 10 },
      axisLabel: { color: lightTextColor, fontSize: 10 },
      splitLine: { lineStyle: { color: '#f0f0f0' } }
    },
    series: [{
      name: '活动数',
      type: 'line',
      smooth: true,
      data: [4, 6, 8, 10, 12, 15, 18, 16, 11, 9, 7, 5],
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(238,10,36,0.3)' },
          { offset: 1, color: 'rgba(238,10,36,0.02)' }
        ])
      },
      lineStyle: { width: 2 },
      symbol: 'circle',
      symbolSize: 5
    }]
  });

  // ---------- 5. 互助频次折线图 ----------
  var helpChart = echarts.init(document.getElementById('alumni-help-chart'));
  helpChart.setOption({
    color: ['#ff976a'],
    tooltip: { trigger: 'axis' },
    grid: { left: '3%', right: '4%', bottom: '3%', top: '10%', containLabel: true },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      axisLabel: { color: lightTextColor, fontSize: 9 }
    },
    yAxis: {
      type: 'value',
      name: '互助数',
      nameTextStyle: { color: lightTextColor, fontSize: 10 },
      axisLabel: { color: lightTextColor, fontSize: 10 },
      splitLine: { lineStyle: { color: '#f0f0f0' } }
    },
    series: [{
      name: '互助数',
      type: 'line',
      smooth: true,
      data: [8, 12, 15, 20, 24, 28, 22, 18, 16, 14, 11, 9],
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(255,151,106,0.3)' },
          { offset: 1, color: 'rgba(255,151,106,0.02)' }
        ])
      },
      lineStyle: { width: 2 },
      symbol: 'circle',
      symbolSize: 5
    }]
  });

  // 保存实例以备窗口大小变化时 resize
  window.__alumniCharts = [ageChart, majorChart, groupChart, activityChart, helpChart];
}

function initMemberDistributionCharts() {
  // 公共配置 - 会员分布使用金色系配色
  var baseTextColor = '#333';
  var lightTextColor = '#999';
  var goldColor = '#dabb6e';
  var goldDeepColor = '#c9a558';

  // ---------- 1. 会员企业行业分布饼图 ----------
  var industryChart = echarts.init(document.getElementById('member-industry-chart'));
  industryChart.setOption({
    color: ['#dabb6e', '#c9a558', '#6fa4cf', '#07c160', '#ff976a', '#9254de', '#4ecdc4', '#ee0a24'],
    tooltip: { trigger: 'item', formatter: '{b}: {c}家 ({d}%)' },
    legend: {
      orient: 'horizontal',
      bottom: 0,
      itemWidth: 10,
      itemHeight: 10,
      textStyle: { color: lightTextColor, fontSize: 10 }
    },
    series: [{
      name: '行业分布',
      type: 'pie',
      radius: ['35%', '65%'],
      center: ['50%', '45%'],
      avoidLabelOverlap: true,
      itemStyle: { borderColor: '#fff', borderWidth: 2 },
      label: { show: false },
      emphasis: {
        label: { show: true, fontSize: 12, fontWeight: 'bold' },
        itemStyle: { shadowBlur: 10, shadowOffsetX: 0, shadowColor: 'rgba(0,0,0,0.2)' }
      },
      data: [
        { value: 42, name: 'IT/互联网' },
        { value: 35, name: '制造业' },
        { value: 28, name: '金融服务' },
        { value: 22, name: '教育培训' },
        { value: 18, name: '商贸物流' },
        { value: 15, name: '文化传媒' },
        { value: 12, name: '医疗健康' },
        { value: 11, name: '其他' }
      ]
    }]
  });

  // ---------- 2. 商务活动类型分布柱状图 ----------
  var activityTypeChart = echarts.init(document.getElementById('member-activity-type-chart'));
  activityTypeChart.setOption({
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    grid: { left: '3%', right: '4%', bottom: '3%', top: '8%', containLabel: true },
    xAxis: {
      type: 'category',
      data: ['商务沙龙', '行业论坛', '资源对接', '专题培训', '企业参访', '项目路演'],
      axisTick: { alignWithLabel: true },
      axisLabel: { color: lightTextColor, fontSize: 10 }
    },
    yAxis: {
      type: 'value',
      name: '场次',
      nameTextStyle: { color: lightTextColor, fontSize: 10 },
      axisLabel: { color: lightTextColor, fontSize: 10 },
      splitLine: { lineStyle: { color: '#f0f0f0' } }
    },
    series: [{
      name: '活动场次',
      type: 'bar',
      barWidth: '50%',
      data: [28, 18, 22, 16, 8, 4],
      label: { show: true, position: 'top', color: baseTextColor, fontSize: 10 },
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#e8c878' },
          { offset: 1, color: '#c9a558' }
        ]),
        borderRadius: [4, 4, 0, 0]
      }
    }]
  });

  // ---------- 3. 商务互助频次折线图 ----------
  var helpChart = echarts.init(document.getElementById('member-help-chart'));
  helpChart.setOption({
    color: [goldColor],
    tooltip: { trigger: 'axis' },
    grid: { left: '3%', right: '4%', bottom: '3%', top: '10%', containLabel: true },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      axisLabel: { color: lightTextColor, fontSize: 9 }
    },
    yAxis: {
      type: 'value',
      name: '互助数',
      nameTextStyle: { color: lightTextColor, fontSize: 10 },
      axisLabel: { color: lightTextColor, fontSize: 10 },
      splitLine: { lineStyle: { color: '#f0f0f0' } }
    },
    series: [{
      name: '商务互助',
      type: 'line',
      smooth: true,
      data: [6, 9, 12, 14, 18, 22, 16, 13, 11, 10, 7, 14],
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(218,187,110,0.35)' },
          { offset: 1, color: 'rgba(218,187,110,0.02)' }
        ])
      },
      lineStyle: { width: 2, color: goldDeepColor },
      symbol: 'circle',
      symbolSize: 5,
      itemStyle: { color: goldDeepColor }
    }]
  });

  // ---------- 4. 商务活动频次折线图 ----------
  var activityChart = echarts.init(document.getElementById('member-activity-chart'));
  activityChart.setOption({
    color: ['#9254de'],
    tooltip: { trigger: 'axis' },
    grid: { left: '3%', right: '4%', bottom: '3%', top: '10%', containLabel: true },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      axisLabel: { color: lightTextColor, fontSize: 9 }
    },
    yAxis: {
      type: 'value',
      name: '活动数',
      nameTextStyle: { color: lightTextColor, fontSize: 10 },
      axisLabel: { color: lightTextColor, fontSize: 10 },
      splitLine: { lineStyle: { color: '#f0f0f0' } }
    },
    series: [{
      name: '商务活动',
      type: 'line',
      smooth: true,
      data: [4, 6, 9, 11, 12, 14, 10, 8, 7, 6, 5, 4],
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(146,84,222,0.3)' },
          { offset: 1, color: 'rgba(146,84,222,0.02)' }
        ])
      },
      lineStyle: { width: 2 },
      symbol: 'circle',
      symbolSize: 5
    }]
  });

  // 保存实例以备窗口大小变化时 resize
  window.__memberCharts = [industryChart, activityTypeChart, helpChart, activityChart];
}

// 窗口大小变化时重绘图表
window.addEventListener('resize', function() {
  if (window.__alumniCharts) {
    window.__alumniCharts.forEach(function(c) { try { c.resize(); } catch(e) {} });
  }
  if (window.__memberCharts) {
    window.__memberCharts.forEach(function(c) { try { c.resize(); } catch(e) {} });
  }
});

// ================================================================
// SECTION I: EVENT DELEGATION
// ================================================================
function findActionTarget(el) {
  while (el && el !== document.body) {
    if (el.hasAttribute && el.hasAttribute('data-action')) return el;
    el = el.parentElement || el.parentNode;
  }
  return null;
}

document.addEventListener('click', function(e) {
  var target = e.target.closest ? e.target.closest('[data-action]') : null;
  if (!target) target = findActionTarget(e.target);
  if (!target) return;
  var action = target.dataset.action;
  var payload = target.dataset.payload;
  var id = target.dataset.id;
  var key = target.dataset.key;
  var tab = target.dataset.tab;
  var src = target.dataset.src;

  switch (action) {
    // Navigation
    case 'nav':
      if (target && target.dataset && target.dataset.needAuth === 'true') {
        showConfirm('您当前尚未完成校友认证，开通商务会员需先提交校友认证申请。是否前往认证？', function() {
          Router.navigate('/profile/edit');
        });
        return;
      }
      Router.navigate(payload);
      break;
    case 'back':
      goBack();
      break;

    // Toast messages
    case 'toast':
      showToast(payload || '操作成功');
      break;

    // Publish demand
    case 'publish-demand':
      showToast('需求已发布');
      setTimeout(function() { goBack(); }, 800);
      break;

    // Course actions
    case 'share-course':
      showToast('已复制分享链接');
      break;
    case 'collect-course':
      AppState.collectedCourses[id] = !AppState.collectedCourses[id];
      showToast(AppState.collectedCourses[id] ? '已收藏' : '已取消收藏');
      renderView();
      break;
    case 'toggle-chapter':
      var chId = target.dataset.chapterId;
      if (uiState.expandedChapters[chId] === undefined) uiState.expandedChapters[chId] = true;
      uiState.expandedChapters[chId] = !uiState.expandedChapters[chId];
      renderView();
      break;
    case 'play-lesson':
      var ltitle = target.dataset.lessonTitle;
      var isPreview = target.dataset.lessonPreview === 'true';
      if (isPreview) {
        showToast('开始试看：' + ltitle);
      } else {
        showConfirm('该课时需要订阅课程后才能观看，确认订阅？', function() {
          subscribeCourse(parseInt(Router.params.id));
          showToast('订阅成功');
          renderView();
        });
      }
      break;

    // Login
    case 'wechat-login':
      AppState.isLoggedIn = true;
      showToast('登录成功');
      setTimeout(function() { Router.navigate('/home'); }, 500);
      break;
    case 'toggle-phone':
      var pf = document.getElementById('phone-form');
      if (pf) pf.classList.toggle('hidden');
      break;
    case 'send-code':
      var btn = target;
      btn.textContent = '60s后重发';
      btn.style.color = '#999';
      setTimeout(function() { btn.textContent = '获取验证码'; btn.style.color = 'var(--primary)'; }, 3000);
      showToast('验证码已发送');
      break;

    // Role
    case 'show-role-popup':
      showRoleSheet(function(rkey) {
        setRole(rkey); hideOverlay(); renderView();
      });
      break;

    // Publish action sheet
    case 'show-publish':
      showPublishSheet(function(k) {
        hideOverlay();
        var actions = getPublishActions();
        var chosen = actions.find(function(a) { return a.key === k; });
        if (!chosen) return;

        if (chosen.path) Router.navigate(chosen.path);
      });
      break;

    // Action sheet select
    case 'as-select':
      if (window._asCallback) window._asCallback(key);
      break;

    // 活动分类选择
    case 'select-act-cat':
      var catTags = document.querySelectorAll('.act-cat-tag');
      catTags.forEach(function(t) {
        t.classList.remove('active');
        t.style.borderColor = 'var(--border)';
        t.style.color = 'var(--text-light)';
        t.style.background = '#fff';
      });
      target.classList.add('active');
      target.style.borderColor = 'var(--primary)';
      target.style.color = '#fff';
      target.style.background = 'var(--primary)';
      break;

    // 发布权限引导提示（点击禁用项）
    case 'show-publish-guide':
      var minRole = target.dataset.minRole;
      if (minRole) {
        showToast('需要' + minRole + '身份才能使用此功能');
      }
      break;

    // Close overlay
    case 'close-overlay':
    case 'close-search':
      hideOverlay();
      uiState.homeSearchVisible = false;
      break;
    case 'close-search-nav':
      hideOverlay();
      uiState.homeSearchVisible = false;
      uiState.homeSearch = '';
      Router.navigate(payload);
      break;

    // Profile edit submit (校友认证 / 编辑校友信息)
    case 'submit-profile-edit':
      var peRole = target.dataset.role || AppState.currentRole;
      var peIsAlumni = roleRank[peRole] >= 1;
      var peRoot = document.querySelector('.page-container');
      var peInputs = peRoot ? peRoot.querySelectorAll('input, select, textarea') : [];
      var peVals = {};
      var peLabels = ['avatar', 'name', 'gender', 'birth', 'phone', 'email', 'school', 'dept', 'major', 'year', 'degree', 'hometown', 'city', 'tags', 'hobbies', 'intro'];
      var peAvatarEl = document.getElementById('pe-avatar-input');
      peVals.avatar = peAvatarEl && peAvatarEl.files && peAvatarEl.files.length > 0 ? 'uploaded' : (peIsAlumni ? 'existing' : '');
      var peIdx = 1;
      peInputs.forEach(function(el) {
        if (el.id === 'pe-avatar-input') return;
        if (peIdx < peLabels.length) { peVals[peLabels[peIdx]] = (el.value || '').trim(); peIdx++; }
      });
      if (!peIsAlumni && !peVals.avatar) { showToast('请上传个人头像'); break; }
      if (!peVals.name) { showToast('请填写姓名'); break; }
      if (!peVals.gender) { showToast('请选择性别'); break; }
      if (!peVals.birth) { showToast('请填写出生年月'); break; }
      if (!peVals.phone) { showToast('请填写电话'); break; }
      if (!peVals.email) { showToast('请填写邮箱'); break; }
      if (!peVals.school) { showToast('请填写学校'); break; }
      if (!peVals.dept) { showToast('请填写院系'); break; }
      if (!peVals.major) { showToast('请填写专业'); break; }
      if (!peVals.year) { showToast('请填写入学年份'); break; }
      if (!peVals.degree) { showToast('请选择学历层次'); break; }
      showToast(peIsAlumni ? '信息保存成功' : '认证申请已提交，请等待审核');
      setTimeout(function() { goBack('/profile'); }, 1000);
      break;

    // Activity type tab
    case 'set-act-type':
      uiState.activityTypeTab = payload;
      renderView();
      break;

    // Tabs
    case 'switch-tab':
      if (Router.current && Router.current.path === '/publish-demand' && (tab === 'help' || tab === 'business')) {
        uiState.publishDemandType = tab;
        uiState.demandTab = tab;
      } else if (tab === 'help' || tab === 'business') {
        uiState.demandTab = tab;
      } else if (tab === 'company' || tab === 'product') {
        uiState.epListTab = tab;
      } else if (tab === 'all' || tab === '行业社团' || tab === '兴趣社团' || tab === '地方社团' || tab === '海外社团') {
        uiState.groupListTab = tab;
      } else if (tab === 'intro' || tab === 'news' || tab === 'activity' || tab === 'members') {
        uiState.groupDetailTab = tab;
      } else if (tab === 'intro' || tab === 'chapters' || tab === 'teacher') {
        uiState.courseDetailTab = tab;
      } else if (tab === 'registered' || tab === 'published') {
        uiState.profileActTab = tab;
        if (tab === 'published') uiState.profileHelpTab = 'published';
        else uiState.profileHelpTab = tab === 'registered' ? 'responded' : 'published';
      } else if (tab === 'published' || tab === 'responded') {
        uiState.profileHelpTab = tab;
      } else if (tab === 'biz' || tab === 'demand') {
        uiState.profileBizTab = tab;
      } else if (tab === 'news' || tab === 'topic' || tab === 'interview' || tab === 'course') {
        uiState.collectionTab = tab;
        uiState.likeTab = tab;
      } else if (tab === 'pending' || tab === 'processing' || tab === 'completed') {
        uiState.serviceOrderTab = tab;
      } else if (tab === 'all' || tab === 'food' || tab === 'hotel' || tab === 'travel' || tab === 'sport' || tab === 'entertainment' || tab === 'health' || tab === 'cultural') {
        uiState.groupBuyCategory = tab;
      }
      renderView();
      break;

    // Like / Collect
    case 'like-feed':
      AppState.likedFeeds[id] = !AppState.likedFeeds[id];
      var fd = feedList.find(function(f) { return f.id == id; });
      if (fd) { fd.liked = AppState.likedFeeds[id]; fd.likes += AppState.likedFeeds[id] ? 1 : -1; }
      renderView();
      break;
    case 'like-news':
      AppState.likedFeeds['n' + id] = !AppState.likedFeeds['n' + id];
      var nd = newsList.find(function(n) { return n.id == id; });
      if (nd) nd.likes += AppState.likedFeeds['n' + id] ? 1 : -1;
      renderView();
      break;
    case 'collect-news':
      AppState.collectedNews[id] = !AppState.collectedNews[id];
      showToast(AppState.collectedNews[id] ? '已收藏' : '已取消收藏');
      renderView();
      break;
    case 'collect-topic':
      AppState.collectedTopics[id] = !AppState.collectedTopics[id];
      showToast(AppState.collectedTopics[id] ? '已收藏' : '已取消收藏');
      renderView();
      break;
    case 'collect-interview':
      AppState.collectedInterviews[id] = !AppState.collectedInterviews[id];
      showToast(AppState.collectedInterviews[id] ? '已收藏' : '已取消收藏');
      renderView();
      break;
    case 'like-interview':
      AppState.likedFeeds['i' + id] = !AppState.likedFeeds['i' + id];
      var iv = interviewList.find(function(item) { return item.id == id; });
      if (iv) iv.likes += AppState.likedFeeds['i' + id] ? 1 : -1;
      renderView();
      break;
    case 'like-topic':
      AppState.likedFeeds['t' + id] = !AppState.likedFeeds['t' + id];
      var tp = topicList.find(function(t) { return t.id == id; });
      if (tp) tp.likes += AppState.likedFeeds['t' + id] ? 1 : -1;
      renderView();
      break;

    // Comment
    case 'post-comment':
      var input = document.getElementById('feed-comment-input');
      if (input && input.value.trim()) {
        if (!AppState.feedComments[id]) AppState.feedComments[id] = [];
        AppState.feedComments[id].push({ name: '演示用户', avatar: img('myavatar', 100, 100), text: input.value.trim(), time: new Date().toLocaleString() });
        input.value = '';
        renderView();
      }
      break;

    // Image preview
    case 'preview-img':
      var images = [];
      var parent = target.closest('.feed-images');
      if (parent) {
        parent.querySelectorAll('img').forEach(function(img) { images.push(img.dataset.src || img.src); });
      } else {
        images = [src || target.src];
      }
      showImagePreview(images, images.indexOf(src || target.src));
      break;

    // Stepper
    case 'stepper-plus':
      var qtyEl = document.getElementById('gb-qty');
      if (qtyEl) qtyEl.value = parseInt(qtyEl.value) + 1;
      break;
    case 'stepper-minus':
      var qtyEl2 = document.getElementById('gb-qty');
      if (qtyEl2 && parseInt(qtyEl2.value) > 1) qtyEl2.value = parseInt(qtyEl2.value) - 1;
      break;

    // Clear search
    case 'clear-search':
      var sid = target.dataset.target;
      var si2 = document.getElementById(sid);
      if (si2) { si2.value = ''; uiState.homeSearch = ''; uiState.homeSearchVisible = false; renderView(); }
      break;

    // Publish feed
    case 'publish-feed-submit':
      var feedText = document.getElementById('publish-feed-text');
      if (feedText && feedText.value.trim()) {
        showToast('动态已发布');
        setTimeout(function() { goBack(); }, 600);
      } else {
        showToast('请输入内容或添加图片');
      }
      break;
    case 'cycle-visibility':
      var options = ['公开', '仅校友可见', '仅好友可见', '私密'];
      var cur = uiState.feedVisibility || '公开';
      var idx = options.indexOf(cur);
      uiState.feedVisibility = options[(idx + 1) % options.length];
      renderView();
      break;

    // Upload image
    case 'upload-img':
      showToast('请选择图片');
      break;
    case 'upload-cover':
      showToast('请选择封面图片');
      break;

    // Logout & Reset
    case 'logout':
      showConfirm('确定要退出登录吗？', doLogout);
      break;
    case 'reset-data':
      showConfirm('确定要重置演示数据吗？此操作不可恢复。', doReset);
      break;

    // Exchange
    case 'accept-exchange':
      acceptRequest(parseInt(id)); showToast('已接受名片交换'); renderView();
      break;
    case 'reject-exchange':
      rejectRequest(parseInt(id)); showToast('已拒绝'); renderView();
      break;
    case 'exchange-card-confirm':
      showConfirm('确认向该校友发送名片交换申请？', function() { sendRequest(parseInt(id)); showToast('名片交换请求已发送'); renderView(); });
      break;
    case 'exchange-card':
      var aid = parseInt(id);
      if (AppState.outgoingIds.indexOf(aid) >= 0) {
        showToast('已发送过请求');
      } else {
        sendRequest(aid);
        showToast('名片交换请求已发送');
        renderView();
      }
      break;

    // Activity register
    case 'register-activity':
      var aid2 = parseInt(id);
      if (hasRegisteredAct(aid2)) return;
      var act = activityList.find(function(a) { return a.id == aid2; });
      if (act && act.fee > 0) {
        showConfirm('该活动需支付 ¥' + act.fee + '，确认报名？', function() { registerActivity(aid2); showToast('报名成功'); renderView(); });
      } else {
        registerActivity(aid2); showToast('报名成功'); renderView();
      }
      break;

    // Course subscribe
    case 'subscribe-course':
      var cid = parseInt(id);
      if (isSubscribedCourse(cid)) return;
      var course = courseList.find(function(c) { return c.id == cid; });
      showConfirm('确认订阅《' + (course ? course.title : '') + '》？¥' + (course ? course.price : ''), function() { subscribeCourse(cid); showToast('订阅成功'); renderView(); });
      break;

    // Member upgrade - 关联企业/产品管理
    case 'add-company':
      if (!uiState.selectedCompanies) uiState.selectedCompanies = [];
      uiState.editingCompanyIndex = null; // 清除编辑状态
      Router.navigate('/profile/add-company');
      break;
    case 'remove-company':
      if (!uiState.selectedCompanies) uiState.selectedCompanies = [];
      var rcIdx = parseInt(target.dataset.index);
      if (rcIdx >= 0 && rcIdx < uiState.selectedCompanies.length) {
        showConfirm('确认移除该企业吗？', function() {
          uiState.selectedCompanies.splice(rcIdx, 1);
          showToast('已移除');
          renderView();
        });
      }
      break;
    case 'add-product':
      if (!uiState.selectedProducts) uiState.selectedProducts = [];
      uiState.editingProductIndex = null; // 清除编辑状态
      Router.navigate('/profile/add-product');
      break;
    case 'remove-product':
      if (!uiState.selectedProducts) uiState.selectedProducts = [];
      var rpIdx = parseInt(target.dataset.index);
      if (rpIdx >= 0 && rpIdx < uiState.selectedProducts.length) {
        showConfirm('确认移除该产品吗？', function() {
          uiState.selectedProducts.splice(rpIdx, 1);
          showToast('已移除');
          renderView();
        });
      }
      break;
    case 'upload-company-logo':
      document.getElementById('company-logo-input').click();
      break;
    case 'upload-product-cover':
      document.getElementById('product-cover-input').click();
      break;
    case 'save-company':
      saveCompanyForm();
      break;
    case 'save-product':
      saveProductForm();
      break;
    case 'filter-service-sub':
      var fsCat = target.dataset.cat;
      var fsSub = target.dataset.sub;
      if (!uiState.serviceSubCategory) uiState.serviceSubCategory = {};
      uiState.serviceSubCategory[fsCat] = fsSub;
      renderView();
      break;
    case 'submit-member-upgrade':
      if (!uiState.selectedCompanies || uiState.selectedCompanies.length === 0) {
        showToast('请至少添加一家关联企业');
        return;
      }
      showConfirm('确认提交商务会员升级申请？\n关联企业：' + uiState.selectedCompanies.length + ' 家\n关联产品：' + (uiState.selectedProducts ? uiState.selectedProducts.length : 0) + ' 款', function() {
        showToast('已提交审核，请等待平台审核');
        setTimeout(function() { goBack(); }, 1200);
      });
      break;

    case 'confirm-recharge':
      var pkgId = parseInt(target.dataset.pkgId);
      var pkg = memberPackages.find(function(p) { return p.id == pkgId; });
      if (pkg) {
        showConfirm('确认支付 ¥' + pkg.price + ' 购买「' + pkg.name + '」？', function() {
          showToast('正在支付...');
          setTimeout(function() {
            Router.navigate('/profile/member-recharge-success');
          }, 1500);
        });
      }
      break;

    // Service consult and order
    case 'send-chat-message':
      var chatInput = document.getElementById('chat-input');
      if (!chatInput || !chatInput.value.trim()) {
        showToast('请输入消息内容');
        return;
      }
      var msgContent = chatInput.value.trim();
      var msgProviderId = parseInt(target.dataset.providerId);
      var msgProjectId = parseInt(target.dataset.projectId);
      var chatKey = msgProviderId + '-' + msgProjectId;

      // 初始化聊天记录
      if (!serviceChatHistory[chatKey]) {
        serviceChatHistory[chatKey] = [];
      }

      // 添加用户消息
      var now = new Date();
      var timeStr = now.getHours() + ':' + String(now.getMinutes()).padStart(2, '0');

      serviceChatHistory[chatKey].push({
        from: 'me',
        text: msgContent,
        time: timeStr
      });

      chatInput.value = '';
      showToast('消息已发送');
      renderView();

      // 模拟服务机构回复
      setTimeout(function() {
        var replyTime = now.getHours() + ':' + String(now.getMinutes() + 1).padStart(2, '0');
        serviceChatHistory[chatKey].push({
          from: 'other',
          text: '好的，我们已记录您的需求，稍后会有专人回复您。',
          time: replyTime
        });
        renderView();
        // 自动滚动到底部
        setTimeout(function() {
          var chatContainer = document.querySelector('.chat-container');
          if (chatContainer) chatContainer.scrollTop = chatContainer.scrollHeight;
        }, 100);
      }, 1500);
      break;
    case 'consult-service':
      var projectId = target.dataset.projectId;
      var providerId = target.dataset.providerId;
      var proj = serviceProjects.find(function(p) { return p.id == parseInt(projectId); });
      var prov = serviceProviders.find(function(p) { return p.id == parseInt(providerId); });
      if (proj && prov) {
        showConfirm('是否向 ' + prov.name + ' 咨询《' + proj.name + '》服务？', function() {
          showToast('咨询消息已发送，服务机构将在24小时内与您联系');
        });
      }
      break;
    case 'order-service':
      var ordProjectId = parseInt(target.dataset.projectId);
      var ordProj = serviceProjects.find(function(p) { return p.id == ordProjectId; });
      if (ordProj) {
        showConfirm('确认预约购买《' + ordProj.name + '》？\n费用：¥' + ordProj.price.toLocaleString() + ' / ' + ordProj.unit, function() {
          showToast('预约成功！服务机构将尽快与您联系确认服务细节');
        });
      }
      break;

    // Group join/leave
    case 'join-group':
      var gid = parseInt(id);
      if (isJoined(gid)) { leaveGroup(gid); showToast('已退出社团'); }
      else { joinGroup(gid); showToast('已申请加入社团'); }
      renderView();
      break;

    // Group buy
    case 'buy-groupbuy':
      showConfirm('确认购买？', function() { showToast('下单成功'); });
      break;

    // Help respond
    case 'respond-help':
      showToast('响应已提交');
      break;

    // AI Report
    case 'submit-report-order':
      var rptId = target.dataset.reportId;
      var companyName = document.getElementById('report-company') ? document.getElementById('report-company').value : '';
      var industry = document.getElementById('report-industry') ? document.getElementById('report-industry').value : '';
      var focus = document.getElementById('report-focus') ? document.getElementById('report-focus').value : '';
      var note = document.getElementById('report-note') ? document.getElementById('report-note').value : '';
      var contactName = document.getElementById('report-contact-name') ? document.getElementById('report-contact-name').value : '';
      var contactPhone = document.getElementById('report-contact-phone') ? document.getElementById('report-contact-phone').value : '';
      var contactEmail = document.getElementById('report-contact-email') ? document.getElementById('report-contact-email').value : '';
      
      if (!companyName || !industry || !contactName || !contactPhone) {
        showToast('请填写完整的需求信息和联系人信息');
        break;
      }
      
      var report = aiReports.find(function(r) { return r.id === rptId; });
      if (report) {
        var newOrder = {
          id: 'RO' + Date.now().toString().slice(-10),
          reportName: report.name,
          reportId: report.id,
          price: report.price,
          status: '待支付',
          createTime: new Date().toLocaleString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).replace(/\//g, '-'),
          deliveryTime: '',
          companyName: companyName,
          industry: industry,
          reportUrl: '',
          downloadCount: 0
        };
        reportOrders.unshift(newOrder);
        showToast('订单提交成功，请完成支付');
        Router.navigate('/profile/report-orders');
      }
      break;
    case 'pay-report-order':
      var payOrderId = orderId = Router.params.id;
      var payOrder = reportOrders.find(function(o) { return o.id === payOrderId; });
      if (payOrder) {
        payOrder.status = '生成中';
        showToast('支付成功，AI正在生成报告');
        renderView();
      }
      break;
    case 'download-report':
      showToast('报告下载功能开发中');
      break;

    default:
      break;
  }
});

// Also handle button text clicks
document.addEventListener('click', function(e) {
  var btn = e.target.closest ? e.target.closest('.comp-btn') : null;
  if (!btn) { var el = e.target; while (el && el !== document.body) { if (el.classList && el.classList.contains('comp-btn')) { btn = el; break; } el = el.parentElement || el.parentNode; } }
  if (!btn) return;
  var text = btn.textContent.trim();
  if (text === '登录') {
    AppState.isLoggedIn = true;
    showToast('登录成功');
    setTimeout(function() { Router.navigate('/home'); }, 500);
  } else if (text === '发布校友活动') {
    Router.navigate('/publish-activity');
  } else if (text === '发布互助求助') {
    Router.navigate('/publish-demand?type=help');
  } else if (text === '发布商务需求') {
    Router.navigate('/publish-demand?type=business');
  } else if (text === '立即报名') {
    var actId = Router.params.id;
    if (actId) {
      var act = activityList.find(function(a) { return a.id == parseInt(actId); });
      if (act && act.fee > 0) {
        showConfirm('该活动需支付 ¥' + act.fee + '，确认报名？', function() { registerActivity(parseInt(actId)); showToast('报名成功'); renderView(); });
      } else {
        registerActivity(parseInt(actId)); showToast('报名成功'); renderView();
      }
    }
  } else if (text === '加入社团' || text === '退出社团') {
    var gId = Router.params.id ? parseInt(Router.params.id) : null;
    if (gId) {
      if (isJoined(gId)) { leaveGroup(gId); showToast('已退出社团'); }
      else { joinGroup(gId); showToast('已申请加入社团'); }
      renderView();
    }
  } else if (text === '退出登录') {
    showConfirm('确定要退出登录吗？', doLogout);
  } else if (text === '重置演示数据') {
    showConfirm('确定要重置演示数据吗？', doReset);
  } else if (text.indexOf('立即订阅') === 0 || text === '已订阅') {
    var cId = Router.params.id ? parseInt(Router.params.id) : null;
    if (cId && !isSubscribedCourse(cId)) {
      var course = courseList.find(function(c) { return c.id == cId; });
      showConfirm('确认订阅《' + (course ? course.title : '') + '》？', function() { subscribeCourse(cId); showToast('订阅成功'); renderView(); });
    } else if (cId && isSubscribedCourse(cId)) {
      showToast('已订阅该课程');
    }
  } else if (text === '立即购买') {
    showConfirm('确认购买？', function() { showToast('下单成功'); });
  } else if (text === '我要响应') {
    showToast('响应已提交');
  } else if (text === '联系Ta') {
    showToast('已发送联系请求');
  } else if (text === '保存') {
    showToast('保存成功');
    setTimeout(function() { goBack(); }, 500);
  } else if (text === '发布服务') {
    showToast('服务产品已发布');
    setTimeout(function() { Router.navigate('/home'); }, 800);
  } else if (text === '发布新服务') {
    Router.navigate('/publish-service');
  }
});

// Search input handler
document.addEventListener('input', function(e) {
  if (e.target.id === 'home-search') {
    uiState.homeSearch = e.target.value;
    uiState.homeSearchVisible = e.target.value.length > 0;
    renderView();
  }
});

// ================================================================
// SECTION H2: GLOBAL ACTION HANDLERS (for onclick)
// ================================================================
function doLikeNews(id) {
  AppState.likedFeeds['n' + id] = !AppState.likedFeeds['n' + id];
  var nd = newsList.find(function(n) { return n.id == id; });
  if (nd) nd.likes += AppState.likedFeeds['n' + id] ? 1 : -1;
  renderView();
}
function doCollectNews(id) {
  AppState.collectedNews[id] = !AppState.collectedNews[id];
  showToast(AppState.collectedNews[id] ? '已收藏' : '已取消收藏');
  renderView();
}
function doShare() { showToast('已复制分享链接'); }
function doToggleNewsComment(id) { uiState.showNewsComment = uiState.showNewsComment === id ? null : id; renderView(); }
function doPostNewsComment(id) {
  var input = document.getElementById('news-comment-input');
  if (input && input.value.trim()) {
    if (!AppState.newsComments) AppState.newsComments = {};
    if (!AppState.newsComments[id]) AppState.newsComments[id] = [];
    AppState.newsComments[id].push({ name: '演示用户', avatar: img('myavatar', 100, 100), text: input.value.trim(), time: new Date().toLocaleString() });
    var nd = newsList.find(function(n) { return n.id == id; });
    if (nd) nd.comments++;
    uiState.showNewsComment = null;
    renderView();
  }
}
function doCollectTopic(id) {
  AppState.collectedTopics[id] = !AppState.collectedTopics[id];
  showToast(AppState.collectedTopics[id] ? '已收藏' : '已取消收藏');
  renderView();
}
function doCollectInterview(id) {
  AppState.collectedInterviews[id] = !AppState.collectedInterviews[id];
  showToast(AppState.collectedInterviews[id] ? '已收藏' : '已取消收藏');
  renderView();
}
function doLikeTopic(id) {
  AppState.likedFeeds['t' + id] = !AppState.likedFeeds['t' + id];
  var tp = topicList.find(function(t) { return t.id == id; });
  if (tp) tp.likes += AppState.likedFeeds['t' + id] ? 1 : -1;
  renderView();
}
function doLikeInterview(id) {
  AppState.likedFeeds['i' + id] = !AppState.likedFeeds['i' + id];
  var iv = interviewList.find(function(it) { return it.id == id; });
  if (iv) iv.likes += AppState.likedFeeds['i' + id] ? 1 : -1;
  renderView();
}
function doCollectCourse(id) {
  AppState.collectedCourses[id] = !AppState.collectedCourses[id];
  showToast(AppState.collectedCourses[id] ? '已收藏' : '已取消收藏');
  renderView();
}
function doRegisterActivity(id) {
  if (hasRegisteredAct(id)) return;
  Router.navigate('/activity-register/' + id);
}
function doExchangeCard(id) {
  showConfirm('确认向该校友发送名片交换申请？', function() { sendRequest(id); showToast('名片交换请求已发送'); renderView(); });
}
function doToggleGroup(id) {
  if (isJoined(id)) { leaveGroup(id); showToast('已退出社团'); }
  else { joinGroup(id); showToast('已申请加入社团'); }
  renderView();
}
function doSubscribeCourse(id) {
  if (isSubscribedCourse(id)) { showToast('已订阅该课程'); return; }
  var course = courseList.find(function(c) { return c.id == id; });
  showConfirm('确认订阅《' + (course ? course.title : '') + '》？', function() { subscribeCourse(id); showToast('订阅成功'); renderView(); });
}
function doBuy() { showConfirm('确认购买？', function() { showToast('下单成功'); }); }
function doPostComment(id) {
  var input = document.getElementById('feed-comment-input');
  if (input && input.value.trim()) {
    if (!AppState.feedComments[id]) AppState.feedComments[id] = [];
    AppState.feedComments[id].push({ name: '演示用户', avatar: img('myavatar', 100, 100), text: input.value.trim(), time: new Date().toLocaleString() });
    input.value = '';
    renderView();
  }
}

function showResponseModal(id) {
  var modalHtml = '<div id="response-modal" style="position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:flex-end;justify-content:center">';
  modalHtml += '<div style="width:100%;max-width:600px;background:#fff;border-radius:16px 16px 0 0;padding:16px;box-sizing:border-box">';
  modalHtml += '<div style="text-align:center;font-size:16px;font-weight:600;margin-bottom:16px">我要响应</div>';
  modalHtml += '<textarea id="response-modal-input" placeholder="请输入您的响应内容..." style="width:100%;height:100px;border:1px solid #eee;border-radius:8px;padding:12px;font-size:14px;box-sizing:border-box;resize:none"></textarea>';
  modalHtml += '<div style="display:flex;gap:12px;margin-top:16px">';
  modalHtml += '<button class="comp-btn outline round block" onclick="document.getElementById(\'response-modal\').remove()">取消</button>';
  modalHtml += '<button class="comp-btn primary round block" onclick="doSubmitResponse(' + id + ')">发送</button>';
  modalHtml += '</div></div></div>';
  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function doSubmitResponse(id) {
  var input = document.getElementById('response-modal-input');
  if (!input || !input.value.trim()) return showToast('请输入响应内容');
  var h = helpList.find(function(item) { return item.id == id; });
  if (h) {
    if (!h.responses) h.responses = [];
    h.responses.push({ name: AppState.userName || '演示用户', avatar: img('myavatar', 100, 100), role: AppState.currentRole, text: input.value.trim(), time: new Date().toISOString().slice(0, 10), status: 'pending' });
    h.responseCount = h.responses.length;
    document.getElementById('response-modal').remove();
    showToast('响应成功');
    renderView();
  }
}

function doAcceptResponse(helpId, responderName) {
  var h = helpList.find(function(item) { return item.id == helpId; });
  if (h && h.responses) {
    var r = h.responses.find(function(item) { return item.name === responderName; });
    if (r) {
      r.responseStatus = 'accepted';
      showToast('已接受响应');
      renderView();
    }
  }
}

function doDeferResponse(helpId, responderName) {
  var h = helpList.find(function(item) { return item.id == helpId; });
  if (h && h.responses) {
    var r = h.responses.find(function(item) { return item.name === responderName; });
    if (r) {
      r.responseStatus = 'finished';
      showToast('暂不考虑');
      renderView();
    }
  }
}

function doLikeFeed(id) {
  AppState.likedFeeds[id] = !AppState.likedFeeds[id];
  var fd = feedList.find(function(f) { return f.id == id; });
  if (fd) { fd.liked = AppState.likedFeeds[id]; fd.likes += AppState.likedFeeds[id] ? 1 : -1; }
  renderView();
}

// ================================================================
// SECTION J: BOOTSTRAP
// ================================================================
function bootstrap() {
  if (typeof Views === 'undefined') {
    setTimeout(bootstrap, 50);
    return;
  }
  Router.register(routes);
  Router.beforeEach = authGuard;
  Router.start();
}
document.addEventListener('DOMContentLoaded', bootstrap);
