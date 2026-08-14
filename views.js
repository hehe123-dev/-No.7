
// ================================================================
// VIEW RENDERERS - Mobile (小程序端)
// ================================================================

// Helper: check if tabbar should be hidden for current route
function showTabbar() {
  var r = Router.current;
  if (!r) return false;
  var p = r.path;
  var hidePaths = ['/login', '/news/:id', '/activity/:id', '/activity-register/:id', '/activity-pay/:id', '/activity-register-success/:id', '/activity-registration/:id', '/alumni-card/:id', '/alumni-group/:id',
    '/alumni-feed/:id', '/help/:id', '/help-response/:id/:responseIdx', '/member-card/:id', '/member-company/:id', '/member-product/:id',
    '/member-service/:category', '/service-provider/:id', '/service-project/:id', '/service-chat/:providerId/:projectId',
    '/topic-share/:id', '/interview/:id',
    '/courses/:id', '/group-buy/:id', '/publish-feed', '/publish-demand', '/publish-activity',
    '/profile/edit', '/profile/subscribe', '/profile/group-buy', '/profile/favorites',
    '/profile/activities', '/profile/member-edit', '/profile/add-company', '/profile/add-product',
    '/profile/my-feed', '/profile/my-groups',
    '/profile/my-help', '/profile/my-response', '/profile/my-business', '/profile/my-topics', '/profile/points',
    '/profile/my-content', '/profile/social', '/profile/help-center', '/profile/business-center', '/profile/learning'
  ];
  for (var i = 0; i < hidePaths.length; i++) {
    if (p === hidePaths[i].replace(/:(\w+)/g, function(_, w) { return Router.params[w] || ':'; })) return false;
  }
  return true;
}

// Determine active tab key based on current route
function activeTabKey() {
  var p = Router.current ? Router.current.path : '';
  if (p === '/home') return '/home';
  if (p.indexOf('/courses') === 0) return '/courses';
  if (p.indexOf('/group-buy') === 0) return '/group-buy';
  if (p.indexOf('/profile') === 0 || p === '/profile') return '/profile';
  if (p.indexOf('/news') === 0 || p.indexOf('/activity') === 0 || p.indexOf('/alumni') === 0 ||
      p.indexOf('/help') === 0 || p.indexOf('/member') === 0 || p.indexOf('/topic') === 0 ||
      p.indexOf('/interview') === 0) return '';
  return '/home';
}

// ================================================================
// VIEW FUNCTIONS
// ================================================================

var Views = {};

// --- LOGIN ---
Views.Login = function() {
  return '<div class="page-login">'
    + '<div class="login-bg-deco"></div>'
    + '<div class="logo-area"><div class="logo-card"><img src="bit-logo.jpg" alt="白石桥七号"></div><div class="app-name">白石桥七号</div><div class="slogan">同心共建 · 聚力共赢</div><div class="desc">北理人商务平台</div></div>'
    + '<div class="login-panel">'
    + '<div class="wechat-btn" data-action="wechat-login"><span class="wx-icon">微</span>微信一键登录</div>'
    + '<div class="phone-toggle" data-action="toggle-phone"><span>手机号登录</span></div>'
    + '<div class="phone-form hidden" id="phone-form">'
    + '<div class="input-row"><input type="tel" id="login-phone" placeholder="请输入手机号" maxlength="11"><span style="font-size:18px;color:#999">' + iconSVG('phone', 18, '#999') + '</span></div>'
    + '<div class="input-row"><input type="digit" id="login-code" placeholder="请输入验证码" maxlength="6"><span class="code-btn" data-action="send-code">获取验证码</span></div>'
    + '<div class="mt-12">' + UI_Button('登录', 'primary', '', true, true) + '</div></div>'
    + '<div class="login-tip">演示账号已内置，点击上方任意方式即可体验</div>'
    + '</div>'
    + '<div class="agreement">登录即表示同意《用户协议》和《隐私政策》<br><a href="#/admin/login">运营管理员入口 &gt;</a></div>'
    + '</div>';
};

// --- HOME ---
Views.Home = function() {
  var role = AppState.currentRole;
  var isAlumni = roleRank[role] >= 1;
  var isMember = roleRank[role] >= 2;
  var isServiceProvider = role === '服务机构';

  // 公共宫格（所有角色都可见）
  var publicMenus = '';

  // 所有角色均可见，权限隔离在后端实现
  var alumniMenus = '<div class="section-title">校友功能<span class="more" data-action="nav" data-payload="/alumni-distribution">校友数据 ›</span></div><div class="menu-grid">'
    + '<div class="menu-item" data-action="nav" data-payload="/alumni-card"><div class="menu-icon" style="background:#e8f4fd">' + iconSVG('card', 22, '#6fa4cf') + '</div><div class="menu-label">校友名片</div></div>'
    + '<div class="menu-item" data-action="nav" data-payload="/alumni-group"><div class="menu-icon" style="background:#e8f8ee">' + iconSVG('users', 22, '#07c160') + '</div><div class="menu-label">校友社团</div></div>'
    + '<div class="menu-item" data-action="nav" data-payload="/activity"><div class="menu-icon" style="background:#fff0f0">' + iconSVG('activity', 22, '#ee0a24') + '</div><div class="menu-label">校友活动</div></div>'
    + '<div class="menu-item" data-action="nav" data-payload="/help"><div class="menu-icon" style="background:#fff7ed">' + iconSVG('help', 22, '#ff976a') + '</div><div class="menu-label">校友互助</div></div>'
    + '</div>';

  var memberMenus = '<div class="section-title">会员功能<span class="more" data-action="nav" data-payload="/member-distribution">会员数据 ›</span></div><div class="menu-grid">'
    + '<div class="menu-item" data-action="nav" data-payload="/member-card"><div class="menu-icon" style="background:#e8f4fd">' + iconSVG('award', 22, '#6fa4cf') + '</div><div class="menu-label">会员名片</div></div>'
    + '<div class="menu-item" data-action="nav" data-payload="/member-ep"><div class="menu-icon" style="background:#e8f8ee">' + iconSVG('building', 22, '#07c160') + '</div><div class="menu-label">会员企业</div></div>'
    + '<div class="menu-item" data-action="nav" data-payload="/member-service"><div class="menu-icon" style="background:#fff7ed">' + iconSVG('service', 22, '#ff976a') + '</div><div class="menu-label">会员服务</div></div>'
    + '<div class="menu-item" data-action="nav" data-payload="/member-org"><div class="menu-icon" style="background:#f3e8ff">' + iconSVG('network', 22, '#9254de') + '</div><div class="menu-label">会员组织</div></div>'
    + '</div>';

  var html = '<div class="page-container page-home">';
  // Header
  html += '<div class="home-header"><div class="top-row"><div class="brand"><img src="bit-logo.jpg"><div><div class="name">白石桥七号</div><div class="sub">北理人商务平台</div></div></div><div class="actions"><span class="role-tag" data-action="show-role-popup">' + escapeHtml(role) + ' ' + iconSVG('arrowDown', 10, '#fff') + '</span><div class="comp-badge"><span>' + iconSVG('bell', 20, '#fff') + '</span>' + (AppState.incomingRequests.length > 0 ? '<span class="badge-dot">' + AppState.incomingRequests.length + '</span>' : '') + '</div></div></div></div>';
  // Banner
  html += UI_Swipe(banners);
  // Slogan
  html += '<div class="slogan-banner">同心共建，聚力共赢</div>';
  // Menus
  html += publicMenus + alumniMenus + memberMenus;
  // News section
  html += '<div class="section-title">最新资讯<span class="more" data-action="nav" data-payload="/news">查看更多 &gt;</span></div><div class="card-list">';
  newsList.slice(0, 3).forEach(function(n) {
    html += '<div class="comp-card" data-action="nav" data-payload="/news/' + n.id + '"><img src="' + n.cover + '" class="card-thumb"><div class="card-info"><div class="card-title">' + escapeHtml(n.title) + '</div><div class="card-desc">' + escapeHtml(n.summary || '') + '</div><div class="card-meta">' + n.date + ' · ' + n.author + '</div></div></div>';
  });
  html += '</div>';
  // Activity section
  html += '<div class="section-title">活动报名<span class="more" data-action="nav" data-payload="/activity">查看更多 &gt;</span></div><div class="card-list">';
  activityList.slice(0, 2).forEach(function(a) {
    html += '<div class="comp-card" data-action="nav" data-payload="/activity/' + a.id + '"><img src="' + a.cover + '" class="card-thumb"><div class="card-info"><div class="card-title">' + escapeHtml(a.title) + '</div><div class="card-desc">' + escapeHtml(a.date + (a.endDate && a.endDate !== a.date ? ' - ' + a.endDate : '')) + (a.startTime ? ' ' + a.startTime + (a.endTime ? ' - ' + a.endTime : '') : '') + ' ' + escapeHtml(a.location) + '</div><div class="card-meta">' + UI_Tag(getActivityStatus(a), getActivityTagColor(a)) + ' ' + (a.reviewStatus === 'approved' ? a.registered + '人已报名' : '-') + '</div></div></div>';
  });
  html += '</div>';
  // Topic Share section
  html += '<div class="section-title">主题分享<span class="more" data-action="nav" data-payload="/topic-share">查看更多 &gt;</span></div><div class="card-list">';
  topicList.slice(0, 2).forEach(function(t) {
    html += '<div class="comp-card" data-action="nav" data-payload="/topic-share/' + t.id + '"><img src="' + t.cover + '" class="card-thumb"><div class="card-info"><div class="card-title">' + escapeHtml(t.title) + '</div><div class="card-desc">' + escapeHtml(t.summary || '') + '</div><div class="card-meta">' + t.date + '</div></div></div>';
  });
  html += '</div>';
  // Interview section
  html += '<div class="section-title">会员专访<span class="more" data-action="nav" data-payload="/interview">查看更多 &gt;</span></div><div class="card-list">';
  interviewList.slice(0, 2).forEach(function(item) {
    html += '<div class="comp-card" data-action="nav" data-payload="/interview/' + item.id + '"><img src="' + item.cover + '" class="card-thumb"><div class="card-info"><div class="card-title">' + escapeHtml(item.title) + '</div><div class="card-desc">' + escapeHtml(item.summary || '') + '</div><div class="card-meta">' + item.date + '</div></div></div>';
  });
  html += '</div>';
  // Alumni Feed section
  html += '<div class="section-title">校友动态<span class="more" data-action="nav" data-payload="/alumni-feed">查看更多 &gt;</span></div><div style="padding:0 12px">';
  feedList.forEach(function(f) {
    html += '<div class="home feed-card" data-action="nav" data-payload="/alumni-feed/' + f.id + '"><div class="feed-user"><img src="' + f.user.avatar + '"><div><div class="uname">' + escapeHtml(f.user.name) + '</div><div class="umeta">' + f.user.school + ' · ' + f.user.year + '</div></div></div>';
    html += '<div class="feed-content">' + escapeHtml(f.content) + '</div>';
    if (f.images && f.images.length) {
      html += '<div class="feed-images col' + f.images.length + '">';
      f.images.forEach(function(img) { html += '<img src="' + img + '">'; });
      html += '</div>';
    }
    html += '<div class="feed-actions"><span onclick="doLikeFeed(' + f.id + ')" style="color:' + (AppState.likedFeeds[f.id] ? 'var(--danger)' : '') + '">' + (AppState.likedFeeds[f.id] ? iconSVG('heartFilled', 14, 'var(--danger)') : iconSVG('heart', 14)) + ' ' + f.likes + '</span><span>' + iconSVG('message', 14) + ' ' + f.comments + '</span></div></div>';
  });
  html += '</div>';
  html += '</div>';
  return html;
};

// --- NEWS ---
Views.NewsList = function() {
  var html = '<div class="page-container">' + UI_NavBar('最新资讯', true);
  html += '<div class="card-list">';
  newsList.forEach(function(n) {
    html += '<div class="comp-card" data-action="nav" data-payload="/news/' + n.id + '"><img src="' + n.cover + '" class="card-thumb"><div class="card-info"><div class="card-title">' + escapeHtml(n.title) + '</div><div class="card-desc">' + escapeHtml(n.summary || '') + '</div><div class="card-meta">' + n.date + ' · ' + n.author + '</div></div></div>';
  });
  html += '</div></div>';
  return html;
};

Views.NewsDetail = function() {
  var n = newsList.find(function(item) { return item.id == Router.params.id; });
  if (!n) return '<div class="page-container">' + UI_NavBar('资讯详情', true) + UI_Empty('资讯未找到') + '</div>';
  var collected = AppState.collectedNews[n.id];
  var html = '<div class="page-container">' + UI_NavBar('资讯详情', true);
  html += '<div class="content-detail"><h3>' + escapeHtml(n.title) + '</h3><div class="meta">' + n.author + ' · ' + n.date + '</div><div class="body">' + n.content + '</div></div>';
  // Comment section
  var showCmt = uiState.showNewsComment === n.id;
  var cmts = (AppState.newsComments && AppState.newsComments[n.id]) || [];
  if (showCmt) {
    html += '<div class="comment-section"><div class="cmt-title">评论 (' + cmts.length + ')</div>';
    if (cmts.length === 0) html += '<div style="text-align:center;padding:20px;color:var(--text-lighter)">暂无评论，来说两句吧</div>';
    cmts.forEach(function(c) {
      html += '<div class="comment-item"><img src="' + c.avatar + '"><div class="cmt-body"><div class="cmt-name">' + escapeHtml(c.name) + '</div><div class="cmt-text">' + escapeHtml(c.text) + '</div><div class="cmt-time">' + c.time + '</div></div></div>';
    });
    html += '<div style="display:flex;gap:10px;padding:8px 16px;background:#fff;border-top:1px solid var(--border)"><input id="news-comment-input" type="text" placeholder="写评论..." style="flex:1;background:#f5f6f8;border-radius:20px;padding:8px 14px;font-size:13px;border:none;outline:none"><span style="padding:8px 12px;color:var(--primary);font-weight:600;cursor:pointer;font-size:14px" onclick="doPostNewsComment(' + n.id + ')">发送</span></div>';
  }
  html += '<div class="bottom-bar-actions"><div class="bba-item' + (AppState.likedFeeds['n' + n.id] ? ' active' : '') + '" onclick="doLikeNews(' + n.id + ')">' + (AppState.likedFeeds['n' + n.id] ? iconSVG('heartFilled', 18, 'var(--danger)') : iconSVG('heart', 18)) + '<span>' + n.likes + '</span></div><div class="bba-item' + (showCmt ? ' active' : '') + '" onclick="doToggleNewsComment(' + n.id + ')">' + iconSVG('message', 18) + '<span>' + n.comments + '</span></div><div class="bba-item' + (collected ? ' active' : '') + '" onclick="doCollectNews(' + n.id + ')">' + (collected ? iconSVG('starFilled', 18, 'var(--accent)') : iconSVG('star', 18)) + '<span>' + (collected ? '已收藏' : '收藏') + '</span></div><div class="bba-item" onclick="doShare()">' + iconSVG('share', 18) + '<span>分享</span></div></div></div>';
  return html;
};

// --- ACTIVITY ---
Views.ActivityList = function() {
  var isMember = roleRank[AppState.currentRole] >= 2;
  var typeTab = uiState.activityTypeTab || 'all';
  var types = [{ key: 'all', name: '全部活动' }, { key: '校友活动', name: '校友活动' }, { key: '商务活动', name: '商务活动' }, { key: '社团活动', name: '社团活动' }, { key: '平台活动', name: '平台活动' }];
  var typeColors = { '校友活动': 'success', '商务活动': 'warning', '社团活动': 'primary', '平台活动': 'info' };

  var filtered = activityList.filter(function(a) {
    if (a.reviewStatus !== 'approved') return false;
    return typeTab === 'all' || a.type === typeTab;
  });
  
  var html = '<div class="page-container">' + UI_NavBar('活动中心', true);
  html += '<div class="type-tabs">';
  types.forEach(function(t) {
    var active = typeTab === t.key;
    html += '<span class="type-tab' + (active ? ' active' : '') + '" data-action="set-act-type" data-payload="' + t.key + '">' + t.name + '</span>';
  });
  html += '</div>';
  
  html += '<div class="card-list">';
  filtered.forEach(function(a) {
    var typeColor = typeColors[a.type] || 'plain';
    var actStatus = getActivityStatus(a);
    var statusColor = getActivityTagColor(a);
    html += '<div class="activity-item" data-action="nav" data-payload="/activity/' + a.id + '"><img src="' + a.cover + '" class="act-thumb"><div class="act-info"><div class="act-title">' + escapeHtml(a.title) + '</div><div class="act-row">' + iconSVG('clock', 12, '#999') + ' ' + a.date + (a.endDate && a.endDate !== a.date ? ' - ' + a.endDate : '') + (a.startTime ? ' ' + a.startTime + (a.endTime ? ' - ' + a.endTime : '') : '') + '</div><div class="act-row">' + iconSVG('location', 12, '#999') + ' ' + escapeHtml(a.location) + '</div><div class="act-bottom">' + UI_Tag(a.type, typeColor) + ' ' + UI_Tag(actStatus, statusColor) + '<span style="font-size:11px;color:var(--text-lighter)">' + (a.reviewStatus === 'approved' ? a.registered + '人报名 ' : '- ') + (a.fee === 0 ? '免费' : '¥' + a.fee) + '</span></div></div></div>';
  });
  html += '</div>';
  
  if (filtered.length === 0) {
    html += '<div class="empty-state">' + iconSVG('calendar', 48, '#ccc') + '<div style="margin-top:8px;color:#999">暂无活动</div></div>';
  }

  html += '</div>';
  return html;
};

Views.ActivityDetail = function() {
  var a = activityList.find(function(item) { return item.id == Router.params.id; });
  if (!a) return '<div class="page-container">' + UI_NavBar('活动详情', true) + UI_Empty('活动未找到') + '</div>';
  var registered = hasRegisteredAct(a.id);
  var typeColors = { '校友活动': 'success', '商务活动': 'warning', '社团活动': 'primary', '平台活动': 'info' };
  var typeColor = typeColors[a.type] || 'plain';
  var actStatus = getActivityStatus(a);
  var statusColor = getActivityTagColor(a);
  var html = '<div class="page-container no-tab">' + UI_NavBar('活动详情', true);
  html += '<img src="' + a.cover + '" class="act-cover">';

  // 审核状态条
  if (a.reviewStatus === 'pending') {
    html += '<div style="margin:12px 16px;padding:14px 16px;background:#fffbe6;border:1px solid #faecd8;border-radius:10px;display:flex;align-items:flex-start;gap:10px">' +
      iconSVG('clock', 18, '#e6a23c') +
      '<div><div style="font-size:14px;font-weight:600;color:#b88230">活动审核中</div>' +
      '<div style="font-size:12px;color:#b88230;margin-top:4px;line-height:1.6">您发布的活动正在平台审核中，审核通过后将正式开放报名。</div></div></div>';
  } else if (a.reviewStatus === 'rejected') {
    html += '<div style="margin:12px 16px;padding:14px 16px;background:#fef0f0;border:1px solid #fbc4c4;border-radius:10px;display:flex;align-items:flex-start;gap:10px">' +
      iconSVG('alertCircle', 18, '#f56c6c') +
      '<div><div style="font-size:14px;font-weight:600;color:#c45656">活动未通过审核</div>' +
      '<div style="font-size:12px;color:#c45656;margin-top:4px;line-height:1.6"><span style="font-weight:600">驳回原因：</span>' + escapeHtml(a.reviewComment || '活动信息不符合平台规范，请修改后重新发布') + '</div></div></div>';
  }

  html += '<div style="padding:12px 16px"><h3 style="font-size:18px;margin-bottom:8px">' + escapeHtml(a.title) + '</h3><div style="display:flex;gap:8px">' + UI_Tag(a.type, typeColor) + UI_Tag(actStatus, statusColor) + '</div></div>';
  html += UI_CellGroup([{ title: '活动日期', value: a.date + (a.endDate && a.endDate !== a.date ? ' - ' + a.endDate : ''), icon: iconSVG('clock', 16, '#999') }, { title: '活动时间', value: (a.startTime ? a.startTime + (a.endTime ? ' - ' + a.endTime : '') : '待定'), icon: iconSVG('clock', 16, '#999') }, { title: '活动地点', value: a.location, icon: iconSVG('location', 16, '#999') }, { title: '组织者', value: a.organizer, icon: iconSVG('user', 16, '#999') }, { title: '报名截止', value: a.deadline }, { title: '活动费用', value: a.fee === 0 ? '免费' : '¥' + a.fee }], true);
  html += '<div class="content-detail"><div class="body">' + (a.description || '') + '</div></div>';
  html += '<div style="padding:0 16px"><div class="section-title" style="padding:8px 0">已报名校友 (' + (a.reviewStatus === 'approved' ? a.registered : '-') + '人)</div><div class="registered-avatars">';
  var regUsers = a.registeredUsers || [];
  for (var i = 0; i < Math.min(regUsers.length, 8); i++) {
    html += '<div style="position:relative"><img src="' + regUsers[i].avatar + '" title="' + escapeHtml(regUsers[i].name) + '"><span class="reg-name">' + escapeHtml(regUsers[i].name) + '</span></div>';
  }
  if (regUsers.length > 8) html += '<span class="more">+' + (regUsers.length - 8) + '</span>';
  html += '</div></div>';
  if (registered) {
    var myReg = getMyRegistration(a.id);
    var regStatus = myReg && myReg.status ? myReg.status : '已报名';
    html += '<div class="bottom-bar"><button class="comp-btn outline round" onclick="showRegistrationInfo(' + a.id + ')">查看报名信息</button></div>';
  } else {
    var canRegister = actStatus === '报名中';
    html += '<div class="bottom-bar">' + (canRegister ? '<button class="comp-btn primary round block" onclick="doRegisterActivity(' + a.id + ')">立即报名</button>' : '<button class="comp-btn outline round block">' + (actStatus === '报名截止' ? '报名已截止' : (actStatus === '活动进行中' ? '活动进行中' : '活动已结束')) + '</button>') + '</div>';
  }
  html += '</div>';
  return html;
};

Views.PublishActivity = function() {
  var role = AppState.currentRole;
  // 商务活动仅通过运营后台发布，移动端仅可发布校友活动
  var actTypes = ['校友活动'];
  uiState.publishActType = '校友活动';

  function typeTagHtml() {
    var html = '<div class="comp-field"><span class="field-label required">活动类型</span><div style="display:flex;flex-wrap:wrap;gap:8px;padding:4px 0">';
    actTypes.forEach(function(t) {
      var isActive = t === uiState.publishActType;
      var style = 'padding:6px 14px;border:1px solid ' + (isActive ? 'var(--primary)' : 'var(--border)') + ';border-radius:16px;font-size:13px;color:' + (isActive ? '#fff' : 'var(--text-light)') + ';background:' + (isActive ? 'var(--primary)' : '#fff') + ';cursor:pointer';
      html += '<span class="act-type-tag' + (isActive ? ' active' : '') + '" data-action="select-act-type" data-payload="' + escapeHtml(t) + '" style="' + style + '">' + t + '</span>';
    });
    html += '</div></div>';
    return html;
  }

  return'<div class="page-container">' + UI_NavBar('发布活动', true, '<span data-action="submit-publish-activity">发表</span>')
    + '<div class="cover-uploader" data-action="upload-cover"><span class="upload-plus">+</span><span style="font-size:12px;color:#c0c4cc;margin-left:6px">上传封面</span></div>'
    + typeTagHtml()
    + UI_Field('活动名称', 'text', '请输入活动名称') + UI_Field('活动地点', 'text', '请输入活动地点')
    + UI_Field('活动日期', 'date', '活动日期', '', true) + UI_Field('活动费用', 'number', '0表示免费', '0')
    + UI_Field('活动时间', 'text', '如：09:00 - 17:00', '', true) + UI_Field('报名截止', 'date', '报名截止日期', '', true)
    + UI_Field('活动描述', 'textarea', '请输入活动描述...')
    + '<div style="padding:12px 16px"><span data-action="submit-publish-activity">' + UI_Button('提交审核', 'primary', '', true, true) + '</span></div>'
    + '<div style="padding:0 16px 20px;font-size:12px;color:#999;text-align:center">提交后将由平台审核，预计1-3个工作日内反馈</div></div>';
};

Views.ActivityRegister = function() {
  var aid = Router.params.id;
  var act = activityList.find(function(a) { return a.id == aid; });
  if (!act) return '<div class="page-container">' + UI_NavBar('报名', true) + UI_Empty('活动未找到') + '</div>';
  
  var customFields = (act.customFields || []).filter(function(f) { return f.visible !== false; });
  
  var html = '<div class="page-container">' + UI_NavBar('活动报名', true);
  
  html += '<div style="background:#fff;margin:12px 16px;padding:16px;border-radius:12px">';
  html += '<img src="' + act.cover + '" style="width:100%;height:160px;border-radius:8px;object-fit:cover;margin-bottom:12px">';
  html += '<h3 style="font-size:16px;font-weight:600;margin-bottom:8px">' + escapeHtml(act.title) + '</h3>';
  html += '<div style="display:flex;gap:12px;font-size:13px;color:#666">';
  html += '<span>' + iconSVG('clock', 12, '#999') + ' ' + act.date + (act.startTime ? ' ' + act.startTime + (act.endTime ? ' - ' + act.endTime : '') : '') + '</span>';
  html += '<span>' + iconSVG('location', 12, '#999') + ' ' + escapeHtml(act.location) + '</span>';
  html += '</div>';
  html += '</div>';
  
  html += '<div style="background:#fff;margin:0 16px;padding:16px;border-radius:12px">';
  html += '<div style="font-size:15px;font-weight:600;margin-bottom:16px;color:#333">报名信息</div>';
  
  html += '<div style="margin-bottom:16px">';
  html += '<div style="font-size:14px;color:#333;margin-bottom:6px">姓名 <span style="color:#f56c6c">*</span></div>';
  html += '<input type="text" id="reg-name" placeholder="请输入姓名" style="width:100%;padding:10px 12px;border:1px solid var(--border);border-radius:8px;font-size:14px;outline:none;box-sizing:border-box">';
  html += '</div>';
  
  html += '<div style="margin-bottom:16px">';
  html += '<div style="font-size:14px;color:#333;margin-bottom:6px">手机号 <span style="color:#f56c6c">*</span></div>';
  html += '<input type="tel" id="reg-phone" placeholder="请输入手机号" maxlength="11" style="width:100%;padding:10px 12px;border:1px solid var(--border);border-radius:8px;font-size:14px;outline:none;box-sizing:border-box">';
  html += '</div>';
  
  customFields.forEach(function(f, idx) {
    html += '<div style="margin-bottom:16px">';
    html += '<div style="font-size:14px;color:#333;margin-bottom:6px">' + escapeHtml(f.label) + (f.required ? ' <span style="color:#f56c6c">*</span>' : '') + '</div>';
    if (f.type === 'select') {
      html += '<select id="reg-field-' + idx + '" style="width:100%;padding:10px 12px;border:1px solid var(--border);border-radius:8px;font-size:14px;outline:none;box-sizing:border-box">';
      html += '<option value="">请选择</option>';
      (f.options || []).forEach(function(opt) {
        html += '<option value="' + escapeHtml(opt) + '">' + escapeHtml(opt) + '</option>';
      });
      html += '</select>';
    } else if (f.type === 'textarea') {
      html += '<textarea id="reg-field-' + idx + '" placeholder="' + (f.placeholder || '') + '" rows="3" style="width:100%;padding:10px 12px;border:1px solid var(--border);border-radius:8px;font-size:14px;outline:none;box-sizing:border-box;resize:none"></textarea>';
    } else {
      html += '<input type="text" id="reg-field-' + idx + '" placeholder="' + (f.placeholder || '') + '" style="width:100%;padding:10px 12px;border:1px solid var(--border);border-radius:8px;font-size:14px;outline:none;box-sizing:border-box">';
    }
    html += '</div>';
  });
  
  html += '</div>';
  
  if (act.fee > 0) {
    html += '<div style="background:#fff;margin:12px 16px;padding:16px;border-radius:12px">';
    html += '<div style="display:flex;justify-content:space-between;align-items:center">';
    html += '<span style="font-size:14px;color:#666">报名费用</span>';
    html += '<span style="font-size:20px;font-weight:700;color:#f56c6c">¥' + act.fee + '</span>';
    html += '</div>';
    html += '</div>';
  }
  
  html += '<div style="padding:16px">';
  html += '<button class="comp-btn primary block" onclick="submitRegistration(' + aid + ')">' + (act.fee > 0 ? '确认报名并支付' : '提交报名') + '</button>';
  if (act.fee > 0) {
    html += '<div style="font-size:12px;color:#999;text-align:center;margin-top:8px">点击即表示同意《活动报名协议》</div>';
  }
  html += '</div>';
  
  html += '</div>';
  return html;
};

Views.ActivityPay = function() {
  var aid = Router.params.id;
  var act = activityList.find(function(a) { return a.id == aid; });
  var reg = getMyRegistration(aid);
  if (!act || !reg) return '<div class="page-container">' + UI_NavBar('支付', true) + UI_Empty('未找到报名信息') + '</div>';
  
  var html = '<div class="page-container">' + UI_NavBar('确认支付', true);
  
  html += '<div style="background:#fff;margin:12px 16px;padding:16px;border-radius:12px">';
  html += '<div style="font-size:15px;font-weight:600;margin-bottom:16px;color:#333">活动信息</div>';
  html += '<div class="comp-cell"><img src="' + act.cover + '" style="width:60px;height:60px;border-radius:6px;margin-right:12px;object-fit:cover"><div class="cell-body"><div class="cell-title">' + escapeHtml(act.title) + '</div><div class="cell-label">' + act.date + (act.startTime ? ' ' + act.startTime + (act.endTime ? ' - ' + act.endTime : '') : '') + ' · ' + escapeHtml(act.location) + '</div></div></div>';
  html += '</div>';
  
  html += '<div style="background:#fff;margin:0 16px;padding:16px;border-radius:12px">';
  html += '<div style="font-size:15px;font-weight:600;margin-bottom:16px;color:#333">报名人信息</div>';
  html += UI_CellGroup([{ title: '姓名', value: reg.name }, { title: '手机号', value: reg.phone }], true);
  if (reg.fields && Object.keys(reg.fields).length > 0) {
    Object.keys(reg.fields).forEach(function(key) {
      html += '<div class="comp-cell" style="border-bottom:1px solid var(--border);padding:10px 0"><div class="cell-body"><div class="cell-title" style="font-size:14px;color:#666">' + escapeHtml(key) + '</div><div class="cell-label" style="font-size:15px;color:#333">' + escapeHtml(reg.fields[key] || '') + '</div></div></div>';
    });
  }
  html += '</div>';
  
  html += '<div style="background:#fff;margin:12px 16px;padding:16px;border-radius:12px">';
  html += '<div style="font-size:15px;font-weight:600;margin-bottom:16px;color:#333">支付方式</div>';
  html += '<div style="display:flex;align-items:center;padding:12px;background:#f5f6fa;border-radius:8px">';
  html += '<div style="width:40px;height:40px;background:#07c160;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-right:12px">' + iconSVG('message', 20, '#fff') + '</div>';
  html += '<div style="flex:1"><div style="font-size:15px;font-weight:600;color:#333">微信支付</div><div style="font-size:12px;color:#999">推荐使用微信支付</div></div>';
  html += iconSVG('check', 18, '#07c160');
  html += '</div>';
  html += '</div>';
  
  html += '<div style="background:#fff;margin:0 16px;padding:16px;border-radius:12px">';
  html += '<div style="display:flex;justify-content:space-between;align-items:center">';
  html += '<span style="font-size:15px;color:#333">应付金额</span>';
  html += '<span style="font-size:24px;font-weight:700;color:#f56c6c">¥' + reg.payAmount + '</span>';
  html += '</div>';
  html += '</div>';
  
  html += '<div style="padding:16px">';
  html += '<button class="comp-btn primary block" onclick="doActivityPay(' + aid + ')">立即支付 ¥' + reg.payAmount + '</button>';
  html += '<div style="font-size:12px;color:#999;text-align:center;margin-top:8px">支付安全由微信支付保障</div>';
  html += '</div>';
  
  html += '</div>';
  return html;
};

Views.ActivityRegisterSuccess = function() {
  var aid = Router.params.id;
  var act = activityList.find(function(a) { return a.id == aid; });
  var reg = getMyRegistration(aid);
  if (!act || !reg) return '<div class="page-container">' + UI_NavBar('报名成功', true) + UI_Empty('未找到报名信息') + '</div>';
  
  var html = '<div class="page-container">' + UI_NavBar('报名成功', true);
  
  html += '<div style="text-align:center;padding:40px 20px">';
  html += '<div style="width:100px;height:100px;background:#e8f8ee;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px">' + iconSVG('check', 48, '#07c160') + '</div>';
  html += '<h2 style="font-size:20px;font-weight:700;color:#333;margin-bottom:8px">报名成功</h2>';
  html += '<p style="font-size:14px;color:#666">您已成功报名「' + escapeHtml(act.title) + '」</p>';
  html += '</div>';
  
  html += '<div style="background:#fff;margin:12px 16px;padding:16px;border-radius:12px">';
  html += '<div style="font-size:15px;font-weight:600;margin-bottom:16px;color:#333">报名信息</div>';
  html += UI_CellGroup([{ title: '活动名称', value: act.title }, { title: '活动日期', value: act.date }, { title: '活动时间', value: (act.startTime ? act.startTime + (act.endTime ? ' - ' + act.endTime : '') : '待定') }, { title: '活动地点', value: act.location }, { title: '报名时间', value: reg.registerTime }, { title: '支付状态', value: reg.payStatus === 'paid' ? '已支付' : '未支付' }], true);
  html += '</div>';
  
  if (reg.fields && Object.keys(reg.fields).length > 0) {
    html += '<div style="background:#fff;margin:0 16px;padding:16px;border-radius:12px">';
    html += '<div style="font-size:15px;font-weight:600;margin-bottom:16px;color:#333">补充信息</div>';
    Object.keys(reg.fields).forEach(function(key) {
      html += '<div class="comp-cell" style="border-bottom:1px solid var(--border);padding:10px 0"><div class="cell-body"><div class="cell-title" style="font-size:14px;color:#666">' + escapeHtml(key) + '</div><div class="cell-label" style="font-size:15px;color:#333">' + escapeHtml(reg.fields[key] || '') + '</div></div></div>';
    });
    html += '</div>';
  }
  
  html += '<div style="padding:16px">';
  html += '<button class="comp-btn primary block" onclick="Router.navigate(\'/activity/' + aid + '\')">查看活动详情</button>';
  html += '<button class="comp-btn outline block" style="margin-top:10px" onclick="Router.navigate(\'/profile/my-activities\')">查看我的报名</button>';
  html += '</div>';
  
  html += '</div>';
  return html;
};

Views.ActivityRegistration = function() {
  var aid = Router.params.id;
  var act = activityList.find(function(a) { return a.id == aid; });
  var reg = getMyRegistration(aid);
  if (!act || !reg) return '<div class="page-container">' + UI_NavBar('报名详情', true) + UI_Empty('未找到报名信息') + '</div>';
  
  var statusText = getRegistrationStatusText(reg);
  var statusColor = getRegistrationStatusColor(reg);
  
  var html = '<div class="page-container">' + UI_NavBar('报名详情', true);
  
  html += '<div style="background:#fff;margin:12px 16px;padding:16px;border-radius:12px">';
  html += '<img src="' + act.cover + '" style="width:100%;height:160px;border-radius:8px;object-fit:cover;margin-bottom:12px">';
  html += '<h3 style="font-size:16px;font-weight:600;margin-bottom:8px">' + escapeHtml(act.title) + '</h3>';
  html += '<div style="display:flex;gap:8px">' + UI_Tag(getActivityStatus(act), getActivityTagColor(act)) + UI_Tag(statusText, statusColor) + '</div>';
  html += '</div>';
  
  html += '<div style="background:#fff;margin:0 16px;padding:16px;border-radius:12px">';
  html += '<div style="font-size:15px;font-weight:600;margin-bottom:16px;color:#333">报名信息</div>';
  html += UI_CellGroup([{ title: '活动日期', value: act.date }, { title: '活动时间', value: (act.startTime ? act.startTime + (act.endTime ? ' - ' + act.endTime : '') : '待定') }, { title: '活动地点', value: act.location }, { title: '报名时间', value: reg.registerTime }, { title: '支付状态', value: reg.payStatus === 'paid' ? '已支付' : '未支付' }], true);
  html += '</div>';
  
  html += '<div style="background:#fff;margin:12px 16px;padding:16px;border-radius:12px">';
  html += '<div style="font-size:15px;font-weight:600;margin-bottom:16px;color:#333">个人信息</div>';
  html += UI_CellGroup([{ title: '姓名', value: reg.name }, { title: '手机号', value: reg.phone }], true);
  if (reg.fields && Object.keys(reg.fields).length > 0) {
    Object.keys(reg.fields).forEach(function(key) {
      html += '<div class="comp-cell" style="border-bottom:1px solid var(--border);padding:10px 0"><div class="cell-body"><div class="cell-title" style="font-size:14px;color:#666">' + escapeHtml(key) + '</div><div class="cell-label" style="font-size:15px;color:#333">' + escapeHtml(reg.fields[key] || '') + '</div></div></div>';
    });
  }
  html += '</div>';
  
  if (reg.status === 'pending_pay') {
    html += '<div style="padding:16px">';
    html += '<button class="comp-btn primary block" onclick="Router.navigate(\'/activity-pay/' + aid + '\')">去支付 ¥' + reg.payAmount + '</button>';
    html += '</div>';
  } else if (reg.status === 'confirmed') {
    html += '<div style="padding:16px">';
    html += '<button class="comp-btn outline block" onclick="Router.navigate(\'/activity/' + aid + '\')">返回活动详情</button>';
    html += '</div>';
  }
  
  html += '</div>';
  return html;
};

// --- ALUMNI CARD ---
Views.AlumniCardList = function() {
  var html = '<div class="page-container">' + UI_NavBar('校友名片', true);

  // 搜索栏
  html += '<div style="padding:12px 16px;background:#fff;border-bottom:1px solid var(--border)">';
  html += '<input type="search" placeholder="搜索校友姓名/公司" style="width:100%;padding:6px 12px;border:1px solid var(--border);border-radius:4px;font-size:14px;outline:none;box-sizing:border-box">';
  html += '</div>';

  // 校友卡片列表
  html += '<div style="padding:12px;background:#f5f5f5">';
  alumniList.forEach(function(a) {
    var stat = '';
    if (isFriend(a.id)) stat = '<span style="padding:4px 10px;background:#e8f5e9;color:#4caf50;border-radius:12px;font-size:12px">已是好友</span>';
    else if (AppState.outgoingIds.indexOf(a.id) >= 0) stat = '<span style="padding:4px 10px;background:#f5f5f5;color:#999;border-radius:12px;font-size:12px">已发送请求</span>';
    else stat = '<button class="comp-btn primary small" onclick="event.stopPropagation();doExchangeCard(' + a.id + ')">交换名片</button>';

    html += '<div class="alumni-card" data-action="nav" data-payload="/alumni-card/' + a.id + '" style="background:#fff;border-radius:12px;padding:16px;margin-bottom:12px;box-shadow:0 2px 8px rgba(0,0,0,0.06)">';

    // 头部：头像+姓名+按钮
    html += '<div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">';
    html += '<img src="' + a.avatar + '" style="width:56px;height:56px;border-radius:50%;flex-shrink:0">';
    html += '<div style="flex:1;min-width:0">';
    html += '<div style="font-size:16px;font-weight:600;margin-bottom:4px;color:#333">' + escapeHtml(a.name) + '</div>';
    html += '<div style="font-size:12px;color:#999">' + escapeHtml(a.title) + '</div>';
    html += '</div>';
    html += '<div style="flex-shrink:0">' + stat + '</div>';
    html += '</div>';

    // 详细信息（分两行展示）
    html += '<div style="padding-top:10px;border-top:1px solid #f0f0f0">';
    html += '<div style="display:flex;flex-wrap:wrap;gap:10px;font-size:13px;color:#666">';
    html += '<div style="display:flex;align-items:center;gap:4px">' + iconSVG('building', 12, '#999') + '<span>' + escapeHtml(a.company) + '</span></div>';
    html += '<div style="display:flex;align-items:center;gap:4px">' + iconSVG('award', 12, '#999') + '<span>' + escapeHtml(a.school) + '</span></div>';
    html += '</div>';
    html += '<div style="display:flex;flex-wrap:wrap;gap:10px;font-size:13px;color:#666;margin-top:6px">';
    html += '<div style="display:flex;align-items:center;gap:4px">' + iconSVG('users', 12, '#999') + '<span>' + escapeHtml(a.year) + '</span></div>';
    html += '<div style="display:flex;align-items:center;gap:4px"><span style="display:inline-block;padding:1px 8px;background:#e3f2fd;color:#1976d2;border-radius:4px;font-size:11px">' + escapeHtml(a.industry) + '</span></div>';
    html += '<div style="display:flex;align-items:center;gap:4px;color:#999"><span>' + escapeHtml(a.city) + '</span></div>';
    html += '</div></div>';

    html += '</div>';
  });
  html += '</div></div>';
  return html;
};

Views.AlumniCardDetail = function() {
  var a = alumniList.find(function(item) { return item.id == Router.params.id; });
  if (!a) return '<div class="page-container">' + UI_NavBar('校友详情', true) + UI_Empty('校友未找到') + '</div>';
  var exchanged = a.exchanged || isFriend(a.id);
  var html = '<div class="page-container no-tab">' + UI_NavBar('校友详情', true);
  html += '<div style="text-align:center;padding:20px"><img src="' + a.avatar + '" style="width:72px;height:72px;border-radius:50%;margin:0 auto"><h3 style="margin:8px 0 4px">' + escapeHtml(a.name) + '</h3><div style="font-size:12px;color:var(--text-lighter)">' + escapeHtml(a.title) + '</div></div>';
  html += UI_CellGroup([{ title: '学校', value: a.school }, { title: '专业', value: a.major }, { title: '年级', value: a.year }, { title: '学历', value: a.degree }, { title: '城市', value: a.city }, { title: '行业', value: a.industry }, { title: '公司', value: a.company }], true);
  if (exchanged) {
    html += UI_CellGroup([{ title: '手机', value: a.phone }, { title: '邮箱', value: a.email }, { title: '微信', value: a.wechat }], true);
  } else {
    html += '<div class="exchange-notice">' + iconSVG('shield', 16, '#ff976a') + ' 交换名片后可查看联系方式</div>';
  }
  var introText = exchanged ? a.intro : (a.intro || '').substring(0, 50) + '...';
  html += '<div class="content-detail"><h4>个人简介</h4><div class="body">' + escapeHtml(introText) + '</div>';
  if (!exchanged) {
    html += '<div style="font-size:12px;color:var(--text-lighter);padding:0 16px 8px">交换名片后查看完整简介</div>';
  }
  html += '</div>';
  if (exchanged) {
    html += '<div style="display:flex;gap:4px;padding:4px 16px;flex-wrap:wrap">';
        html += '</div>';
  }
  // 底部交换名片按钮
  if (!exchanged) {
    var btnText = AppState.outgoingIds.indexOf(a.id) >= 0 ? '已发送请求' : '交换名片';
    var btnDisabled = AppState.outgoingIds.indexOf(a.id) >= 0;
    html += '<div class="bottom-bar"><button class="comp-btn ' + (btnDisabled ? 'outline' : 'primary') + ' round block" onclick="doExchangeCard(' + a.id + ')"' + (btnDisabled ? ' disabled' : '') + '>' + btnText + '</button></div>';
  }
  html += '</div>';
  return html;
};

// --- ALUMNI GROUP ---
Views.AlumniGroupList = function() {
  var tabs = [{ key: 'all', name: '全部' }, { key: '行业社团', name: '行业' }, { key: '兴趣社团', name: '兴趣' }, { key: '地方社团', name: '地方' }, { key: '海外社团', name: '海外' }];
  var html = '<div class="page-container">' + UI_NavBar('校友社团', true) + UI_Tabs(tabs, uiState.groupListTab);
  html += '<div style="padding-top:8px">';
  groupList.forEach(function(g) {
    if (uiState.groupListTab !== 'all' && g.category !== uiState.groupListTab) return;
    html += '<div class="group-card" data-action="nav" data-payload="/alumni-group/' + g.id + '"><img src="' + g.logo + '"><div class="group-info"><div class="group-name">' + escapeHtml(g.name) + '</div><div class="group-desc">' + escapeHtml(g.intro) + '</div><div class="group-meta">' + UI_Tag(g.category, 'primary') + ' ' + g.memberCount + '人</div></div></div>';
  });
  html += '</div></div>';
  return html;
};

Views.AlumniGroupDetail = function() {
  var g = groupList.find(function(item) { return item.id == Router.params.id; });
  if (!g) return '<div class="page-container">' + UI_NavBar('社团详情', true) + UI_Empty('社团未找到') + '</div>';
  var tabs = [{ key: 'news', name: '资讯' }, { key: 'activity', name: '活动' }, { key: 'members', name: '成员' }];
  var html = '<div class="page-container no-tab">' + UI_NavBar(g.name, true);
  html += '<div style="background:#fff;padding:20px;text-align:center;border-bottom:1px solid #f0f0f0">';
  html += '<img src="' + g.logo + '" style="width:64px;height:64px;border-radius:12px;margin:0 auto">';
  html += '<h3 style="margin:8px 0 4px">' + escapeHtml(g.name) + '</h3>';
  html += '<div style="font-size:12px;color:var(--text-lighter);margin-bottom:12px">负责人：' + g.leader + ' · ' + g.phone + '</div>';
  html += '<div style="font-size:13px;color:#333;line-height:1.5;text-align:left;padding:0 8px">' + escapeHtml(g.intro) + '</div>';
  html += '</div>';
  html += UI_Tabs(tabs, uiState.groupDetailTab);
  // Tab content
  if (uiState.groupDetailTab === 'news') {
    if (g.news && g.news.length) {
      html += '<div style="padding:12px 16px">';
      g.news.forEach(function(n) {
        html += '<div style="display:flex;gap:12px;padding:10px 0;border-bottom:1px solid #f0f0f0;cursor:pointer" data-action="nav" data-payload="/news/' + n.id + '">';
        html += '<img src="' + n.cover + '" style="width:120px;height:72px;border-radius:6px;object-fit:cover;flex-shrink:0">';
        html += '<div style="flex:1;min-width:0;display:flex;flex-direction:column;justify-content:space-between">';
        html += '<div style="font-size:14px;font-weight:500;color:#333;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">' + escapeHtml(n.title) + '</div>';
        html += '<div style="font-size:11px;color:#999;display:flex;align-items:center;gap:4px">';
        html += iconSVG('clock', 12, '#999');
        html += '<span>' + (n.date || '') + '</span>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
      });
      html += '</div>';
    } else { html += UI_Empty('暂无资讯'); }
  } else if (uiState.groupDetailTab === 'activity') {
    if (g.activities && g.activities.length) {
      html += '<div style="padding:12px 16px">';
      g.activities.forEach(function(act) {
        html += '<div style="display:flex;gap:12px;padding:10px 0;border-bottom:1px solid #f0f0f0;cursor:pointer" data-action="nav" data-payload="/activity/' + act.id + '">';
        html += '<img src="' + (act.cover || '') + '" style="width:120px;height:72px;border-radius:6px;object-fit:cover;flex-shrink:0;background:#f5f5f5">';
        html += '<div style="flex:1;min-width:0;display:flex;flex-direction:column;justify-content:space-between">';
        html += '<div style="font-size:14px;font-weight:500;color:#333;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">' + escapeHtml(act.title) + '</div>';
        html += '<div style="font-size:11px;color:#999;display:flex;align-items:center;gap:6px;flex-wrap:wrap">';
        html += '<span style="display:flex;align-items:center;gap:3px">' + iconSVG('clock', 12, '#999') + act.date + (act.startTime ? ' ' + act.startTime + (act.endTime ? ' - ' + act.endTime : '') : '') + '</span>';
        html += '<span style="display:flex;align-items:center;gap:3px">' + iconSVG('location', 12, '#999') + escapeHtml(act.location) + '</span>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
      });
      html += '</div>';
    } else { html += UI_Empty('暂无活动'); }
  } else if (uiState.groupDetailTab === 'members') {
    html += '<div class="card-list">';
    g.members.forEach(function(m, idx) {
      html += '<div class="comp-cell" data-action="nav" data-payload="/group-member/' + g.id + '/' + idx + '" style="cursor:pointer"><img src="' + m.avatar + '" style="width:36px;height:36px;border-radius:50%;margin-right:10px"><div class="cell-body"><div class="cell-title">' + escapeHtml(m.name) + '</div><div class="cell-label">' + m.school + ' · ' + m.year + '</div></div></div>';
    });
    html += '</div>';
  }
  var joined = isJoined(g.id);
  html += '<div class="bottom-bar"><button class="comp-btn ' + (joined ? 'outline' : 'primary') + ' round block" onclick="doToggleGroup(' + g.id + ')">' + (joined ? '退出社团' : '加入社团') + '</button></div>';
  html += '</div>';
  return html;
};

Views.GroupMemberDetail = function() {
  var g = groupList.find(function(item) { return item.id == Router.params.groupId; });
  if (!g) return '<div class="page-container">' + UI_NavBar('成员详情', true) + UI_Empty('社团未找到') + '</div>';
  var m = g.members[parseInt(Router.params.memberIdx)];
  if (!m) return '<div class="page-container">' + UI_NavBar('成员详情', true) + UI_Empty('成员未找到') + '</div>';
  // Try to find richer data from memberList
  var fullInfo = memberList.find(function(item) { return item.name === m.name; });
  var html = '<div class="page-container">' + UI_NavBar('成员详情', true);
  html += '<div style="text-align:center;padding:24px;background:#fff">';
  html += '<img src="' + m.avatar + '" style="width:80px;height:80px;border-radius:50%;margin:0 auto">';
  html += '<h3 style="margin:10px 0 4px">' + escapeHtml(m.name) + '</h3>';
  html += '<div style="font-size:13px;color:#909399;margin-bottom:4px">' + m.school + ' · ' + m.year + '</div>';
  html += '<div style="font-size:12px;color:#c0c4cc">加入时间：' + (m.joinDate || '-') + '</div>';
  html += '</div>';
  html += UI_CellGroup([
    { title: '所属社团', value: g.name },
    { title: '社团分类', value: g.category },
    { title: '社团负责人', value: g.leader }
  ], true);
  if (fullInfo) {
    var isCardFriend = isFriend(fullInfo.id);
    html += '<div style="padding:8px 16px;font-size:14px;color:#909399">更多信息</div>';
    if (isCardFriend) {
      html += UI_CellGroup([
        { title: '所在城市', value: fullInfo.city || '-' },
        { title: '所属行业', value: fullInfo.industry || '-' },
        { title: '公司', value: fullInfo.company || '-' },
        { title: '职位', value: fullInfo.title || '-' }
      ], true);
      html += '<div class="content-detail" style="padding:0 16px"><div class="body">' + escapeHtml(fullInfo.intro || '暂无介绍') + '</div></div>';
    } else {
      html += '<div style="text-align:center;padding:24px 16px">';
      html += '<div style="width:48px;height:48px;border-radius:50%;background:#f5f5f5;display:flex;align-items:center;justify-content:center;margin:0 auto 12px">' + iconSVG('lock', 24, '#c0c4cc') + '</div>';
      html += '<div style="font-size:14px;color:#909399;margin-bottom:8px">需交换校友名片后查看完整信息</div>';
      html += '<button class="comp-btn primary round" onclick="doExchangeCard(' + fullInfo.id + ')">交换名片</button>';
      html += '</div>';
    }
  }
  html += '</div>';
  return html;
};

// --- ALUMNI FEED ---
Views.AlumniFeedList = function() {
  var html = '<div class="page-container">' + UI_NavBar('校友动态', true);
  feedList.forEach(function(f) {
    html += '<div class="feed-item" data-action="nav" data-payload="/alumni-feed/' + f.id + '"><div class="feed-user"><img src="' + f.user.avatar + '"><div><div class="uname">' + escapeHtml(f.user.name) + '</div><div class="umeta">' + f.user.school + ' · ' + f.user.year + '</div></div><span class="feed-date">' + f.date + '</span></div>';
    html += '<div class="feed-content">' + escapeHtml(f.content) + '</div>';
    if (f.images && f.images.length) {
      html += '<div class="feed-images col' + f.images.length + '">';
      f.images.forEach(function(img) { html += '<img src="' + img + '" data-action="preview-img" data-src="' + img + '">'; });
      html += '</div>';
    }
    html += '<div class="feed-actions"><span onclick="doLikeFeed(' + f.id + ')" class="' + (AppState.likedFeeds[f.id] ? 'liked' : '') + '">' + (AppState.likedFeeds[f.id] ? iconSVG('heartFilled', 14, 'var(--danger)') : iconSVG('heart', 14)) + ' ' + f.likes + '</span><span>' + iconSVG('message', 14) + ' ' + f.comments + '</span></div></div>';
  });
  html += '</div>';
  return html;
};

Views.AlumniFeedDetail = function() {
  var f = feedList.find(function(item) { return item.id == Router.params.id; });
  if (!f) return '<div class="page-container">' + UI_NavBar('动态详情', true) + UI_Empty('动态未找到') + '</div>';
  var comments = AppState.feedComments[f.id] || [];
  var html = '<div class="page-container no-tab">' + UI_NavBar('动态详情', true);
  html += '<div class="feed-item" style="margin:0;border-radius:0"><div class="feed-user"><img src="' + f.user.avatar + '"><div><div class="uname">' + escapeHtml(f.user.name) + '</div><div class="umeta">' + f.user.school + ' · ' + f.user.year + '</div></div><span class="feed-date">' + f.date + '</span></div>';
  html += '<div class="feed-content">' + escapeHtml(f.content) + '</div>';
  if (f.images && f.images.length) {
    html += '<div class="feed-images col' + f.images.length + '">';
    f.images.forEach(function(img) { html += '<img src="' + img + '" data-action="preview-img" data-src="' + img + '">'; });
    html += '</div>';
  }
  html += '<div class="feed-actions"><span onclick="doLikeFeed(' + f.id + ')" class="' + (AppState.likedFeeds[f.id] ? 'liked' : '') + '">' + (AppState.likedFeeds[f.id] ? iconSVG('heartFilled', 14, 'var(--danger)') : iconSVG('heart', 14)) + ' ' + f.likes + '</span><span>' + iconSVG('message', 14) + ' ' + f.comments + '</span></div></div>';
  // Comments
  html += '<div class="comment-section"><div class="cmt-title">评论 (' + comments.length + ')</div>';
  comments.forEach(function(c) {
    html += '<div class="comment-item"><img src="' + c.avatar + '"><div class="cmt-body"><div class="cmt-name">' + escapeHtml(c.name) + '</div><div class="cmt-text">' + escapeHtml(c.text) + '</div><div class="cmt-time">' + c.time + '</div></div></div>';
  });
  if (!comments.length) html += '<div style="color:var(--text-lighter);text-align:center;padding:20px">暂无评论</div>';
  html += '</div>';
  // Comment input
  html += '<div class="bottom-bar"><input id="feed-comment-input" type="text" placeholder="写评论..." style="flex:1;background:#f5f6f8;border-radius:20px;padding:8px 14px;font-size:13px"><span style="padding:8px 12px;color:var(--primary);font-weight:600;cursor:pointer;font-size:14px" onclick="doPostComment(' + f.id + ')">发送</span></div>';
  html += '</div>';
  return html;
};

Views.PublishFeed = function() {
  var html = '<div class="page-container">' + UI_NavBar('发布动态', true, '<span data-action="publish-feed-submit">发表</span>');
  html += '<div style="padding:12px 16px"><textarea id="publish-feed-text" placeholder="分享你的想法..." style="width:100%;min-height:120px;font-size:15px;border:none;resize:none;outline:none"></textarea></div>';
  html += '<div class="publish-images" id="publish-feed-images" style="padding:8px 16px"><div class="pi-item" data-action="upload-img"><span>+</span></div></div>';
  html += '<input type="file" id="publish-feed-image-input" accept="image/*" multiple style="display:none">';
  html += '</div>';
  return html;
};

// --- HELP ---
Views.HelpList = function() {
  var filtered = helpList.filter(function(h) {
    return h.reviewStatus === 'approved' && h.status !== 'offline';
  });
  var html = '<div class="page-container">' + UI_NavBar('校友互助', true);
  filtered.forEach(function(h) {
    var statusText = '';
    var statusColor = 'warning';
    html += '<div class="comp-cell" data-action="nav" data-payload="/help/' + h.id + '"><img src="' + h.publisher.avatar + '" style="width:40px;height:40px;border-radius:50%;margin-right:10px"><div class="cell-body"><div class="cell-title">' + escapeHtml(h.title) + '</div><div class="cell-label">' + h.publisher.name + ' · ' + h.publisher.role + ' · ' + h.date + '</div></div>' + UI_Tag(statusText, statusColor) + '<span class="cell-arrow">' + iconSVG('arrowRight', 14, '#c8c9cc') + '</span></div>';
  });
  if (filtered.length === 0) {
    html += '<div class="empty-state">' + iconSVG('help', 48, '#ccc') + '<div style="margin-top:8px;color:#999">暂无求助</div></div>';
  }
  html += '</div>';
  return html;
};

Views.HelpDetail = function() {
  var h = helpList.find(function(item) { return item.id == Router.params.id; });
  if (!h) return '<div class="page-container">' + UI_NavBar('求助详情', true) + UI_Empty('求助未找到') + '</div>';
  var isPublisher = AppState.myHelp.indexOf(h.id) >= 0;
  var statusText = '';
  var statusColor = 'warning';
  var html = '<div class="page-container no-tab">' + UI_NavBar('求助详情', true);

  // 求助信息卡片
  html += '<div style="background:#fff;padding:16px;margin-bottom:8px">';
  html += '<div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">' + UI_Tag(statusText, statusColor) + '</div>';
  html += '<h3 style="font-size:17px;font-weight:600;color:#333;margin-bottom:12px">' + escapeHtml(h.title) + '</h3>';
  html += '<div style="display:flex;align-items:center;gap:8px;padding-bottom:12px;border-bottom:1px solid #f0f0f0">';
  if (h.publisher.id > 0) {
    html += '<div data-action="nav" data-payload="/alumni-card/' + h.publisher.id + '" style="display:flex;align-items:center;gap:8px;cursor:pointer;flex:1;min-width:0">';
  } else {
    html += '<div style="display:flex;align-items:center;gap:8px;flex:1;min-width:0">';
  }
  html += '<img src="' + h.publisher.avatar + '" style="width:32px;height:32px;border-radius:50%">';
  html += '<div>';
  html += '<div style="font-size:14px;color:#333;font-weight:500">' + escapeHtml(h.publisher.name) + '</div>';
  html += '<div style="font-size:12px;color:#666">' + escapeHtml(h.publisher.role) + '</div>';
  html += '</div>';
  html += '</div>';
  html += '<div style="margin-left:auto;font-size:12px;color:#999">' + h.date + '</div>';
  html += '</div>';
  html += '</div>';

  // 求助详情
  html += '<div style="background:#fff;padding:16px;margin-bottom:8px">';
  html += '<div style="font-size:13px;color:#999;margin-bottom:8px">求助详情</div>';
  html += '<div style="font-size:15px;color:#333;line-height:1.6">' + escapeHtml(h.description) + '</div>';
  html += '</div>';

  // 响应列表
  html += '<div style="padding:0 0 20px;background:#fff">';
  html += '<div style="padding:12px 16px;font-size:13px;color:#999;border-bottom:1px solid #f0f0f0">响应列表 (' + h.responseCount + ')</div>';
  (h.responses || []).forEach(function(r, idx) {
    var rStatus = r.responseStatus || 'waiting';
    var rStatusText = rStatus === 'accepted' ? '已接受' : (rStatus === 'finished' ? '已完成' : (rStatus === 'rejected' ? '已驳回' : '等待处理'));
    var rStatusColor = rStatus === 'accepted' ? 'success' : (rStatus === 'finished' ? 'info' : (rStatus === 'rejected' ? 'danger' : 'warning'));
    html += '<div style="border-bottom:1px solid #f5f5f5">';
    html += '<div class="comp-cell" style="padding:12px 16px;display:flex;align-items:flex-start">';
    if (r.id > 0) {
      html += '<div data-action="nav" data-payload="/alumni-card/' + r.id + '" style="display:flex;align-items:flex-start;gap:10px;flex-shrink:0;cursor:pointer">';
      html += '<img src="' + r.avatar + '" style="width:36px;height:36px;border-radius:50%">';
      html += '</div>';
    } else {
      html += '<img src="' + r.avatar + '" style="width:36px;height:36px;border-radius:50%;margin-right:10px;flex-shrink:0">';
    }
    html += '<div style="flex:1;min-width:0">';
    html += '<div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;flex-wrap:wrap">';
    html += '<span style="font-size:14px;font-weight:500;color:#333">' + escapeHtml(r.name) + '</span>';
    html += UI_Tag(r.role, 'primary');
    html += '</div>';
    html += '<div style="font-size:13px;color:#555;line-height:1.5;margin-bottom:6px">' + escapeHtml(r.text) + '</div>';
    html += '<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">';
    html += '<span style="font-size:11px;color:#999">' + r.time + '</span>';
    if (isPublisher) {
      if (rStatus === 'waiting') {
        html += '<span class="cmt-status" style="margin-left:auto">' + rStatusText + '</span>';
      } else {
        html += UI_Tag(rStatusText, rStatusColor);
      }
    } else if (rStatus !== 'waiting') {
      html += UI_Tag(rStatusText, rStatusColor);
    }
    html += '</div>';
    html += '</div>';
    html += '</div>';
    if (rStatus === 'rejected' && r.rejectReason) {
      html += '<div style="padding:6px 16px 10px;color:#f56c6c;font-size:12px;background:#fef0f0;margin:0 16px 0px 62px;border-radius:4px;line-height:1.6"><span style="font-weight:600">驳回原因：</span>' + escapeHtml(r.rejectReason) + '</div>';
    }
    html += '</div>';
  });
  if ((h.responses || []).length === 0) {
    html += '<div class="empty-state" style="padding:40px 20px">' + iconSVG('chat', 48, '#ccc') + '<div style="margin-top:8px;color:#999">暂无响应</div></div>';
  }
  html += '</div>';

  html += '<div class="bottom-bar"><button class="comp-btn primary round block" onclick="showResponseModal(' + h.id + ')">我要响应</button></div>';
  html += '</div>';
  return html;
};

Views.PublishDemand = function() {
  var type = Router.params.type || uiState.publishDemandType || 'help';
  var isMember = roleRank[AppState.currentRole] >= 2;
  // 认证校友只能发布互助求助，商务求助仅商务会员可发布
  if (type === 'business' && !isMember) {
    type = 'help';
  }
  var tabs = [{ key: 'help', name: '互助求助' }];
  if (isMember) {
    tabs.push({ key: 'business', name: '商务求助' });
  }
  var html = '<div class="page-container">' + UI_NavBar('发布需求', true, '<span data-action="toast" data-payload="需求已发布">发表</span>');
  html += UI_Tabs(tabs, type);
  html += '<div class="demand-form">';
  if (type === 'business') {
    html += UI_Field('需求标题', 'text', '请输入商务求助标题', '', true);
    html += UI_Field('预算范围', 'text', '请输入预算范围，如：50万-100万', '', false);
    html += UI_Field('需求描述', 'textarea', '请详细描述你的商务求助...', '', true);
  } else {
    html += UI_Field('求助标题', 'text', '请输入求助标题', '', true);
    html += UI_Field('求助描述', 'textarea', '请详细描述你的求助需求...', '', true);
  }
  html += '</div>';
  html += '<div style="padding:12px 16px"><button type="button" class="comp-btn primary round block" data-action="publish-demand">立即发布</button></div>';
  html += '</div>';
  return html;
};

// --- MEMBER CARD ---
Views.MemberCardList = function() {
  var html = '<div class="page-container">' + UI_NavBar('会员名片', true);

  // 搜索栏
  html += '<div style="padding:12px 16px;background:#fff;border-bottom:1px solid var(--border)">';
  html += '<input type="search" placeholder="搜索会员姓名/公司" style="width:100%;padding:6px 12px;border:1px solid var(--border);border-radius:4px;font-size:14px;outline:none;box-sizing:border-box">';
  html += '</div>';

  // 会员卡片列表
  html += '<div style="padding:12px;background:#f5f5f5">';
  memberList.forEach(function(m) {
    html += '<div class="member-card" data-action="nav" data-payload="/member-card/' + m.id + '" style="background:#fff;border-radius:12px;padding:16px;margin-bottom:12px;box-shadow:0 2px 8px rgba(0,0,0,0.06);position:relative;overflow:hidden">';

    // 会员标签（右上角）
    html += '<div style="position:absolute;top:0;right:0;background:linear-gradient(135deg,#dabb6e,#e8c987);color:#fff;font-size:11px;padding:3px 12px;border-bottom-left-radius:8px">商务会员</div>';

    // 头部：头像+姓名+职位
    var mstat = '';
    if (isFriend(m.id)) mstat = '<span style="padding:4px 10px;background:#e8f5e9;color:#4caf50;border-radius:12px;font-size:12px">已是好友</span>';
    else if (AppState.outgoingIds.indexOf(m.id) >= 0) mstat = '<span style="padding:4px 10px;background:#f5f5f5;color:#999;border-radius:12px;font-size:12px">已发送请求</span>';
    else mstat = '<button class="comp-btn primary small" onclick="event.stopPropagation();doExchangeCard(' + m.id + ')">交换名片</button>';
    html += '<div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">';
    html += '<img src="' + m.avatar + '" style="width:60px;height:60px;border-radius:50%;flex-shrink:0;border:2px solid #dabb6e">';
    html += '<div style="flex:1;min-width:0">';
    html += '<div style="font-size:17px;font-weight:600;margin-bottom:4px;color:#333">' + escapeHtml(m.name) + '</div>';
    html += '<div style="font-size:13px;color:#666;margin-bottom:2px">' + escapeHtml(m.title) + '</div>';
    html += '<div style="font-size:12px;color:#999;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + escapeHtml(m.company) + '</div>';
    html += '</div>';
    html += '<div style="flex-shrink:0">' + mstat + '</div>';
    html += '</div>';

    // 详细信息
    html += '<div style="padding-top:10px;border-top:1px solid #f0f0f0">';
    html += '<div style="display:flex;flex-wrap:wrap;gap:10px;font-size:13px;color:#666">';
    html += '<div style="display:flex;align-items:center;gap:4px">' + iconSVG('award', 12, '#999') + '<span>' + escapeHtml(m.school) + '</span></div>';
    html += '<div style="display:flex;align-items:center;gap:4px">' + iconSVG('users', 12, '#999') + '<span>' + escapeHtml(m.year) + '</span></div>';
    html += '</div>';
    html += '<div style="display:flex;flex-wrap:wrap;gap:10px;font-size:13px;color:#666;margin-top:6px;align-items:center">';
    html += '<span style="display:inline-block;padding:1px 8px;background:#e3f2fd;color:#1976d2;border-radius:4px;font-size:11px">' + escapeHtml(m.industry) + '</span>';
    html += '<span style="color:#999">' + escapeHtml(m.city) + '</span>';
    html += '<span style="color:#999;margin-left:auto;font-size:11px">入会：' + escapeHtml(m.memberSince) + '</span>';
    html += '</div></div>';

    html += '</div>';
  });
  html += '</div></div>';
  return html;
};

Views.MemberCardDetail = function() {
  var m = memberList.find(function(item) { return item.id == Router.params.id; });
  if (!m) return '<div class="page-container">' + UI_NavBar('会员详情', true) + UI_Empty('会员未找到') + '</div>';
  var html = '<div class="page-container no-tab">' + UI_NavBar('会员详情', true);
  html += '<div style="text-align:center;padding:20px"><img src="' + m.avatar + '" style="width:72px;height:72px;border-radius:50%;margin:0 auto"><h3 style="margin:8px 0 4px">' + escapeHtml(m.name) + '</h3><div style="font-size:12px;color:var(--text-lighter)">' + m.company + ' · ' + m.title + '</div>' + UI_Tag('商务会员', 'primary') + '</div>';
  html += UI_CellGroup([{ title: '学校', value: m.school }, { title: '年级', value: m.year }, { title: '城市', value: m.city }, { title: '行业', value: m.industry }, { title: '加入时间', value: m.memberSince }], true);
  html += '<div class="content-detail"><h4>简介</h4><div class="body">' + escapeHtml(m.intro) + '</div></div>';
  // Companies
  if (m.companies && m.companies.length) {
    html += '<div class="section-title" style="padding:8px 16px">关联企业</div>';
    m.companies.forEach(function(c) {
      html += '<div class="comp-cell" data-action="nav" data-payload="/member-company/' + c.id + '"><img src="' + c.logo + '" style="width:36px;height:36px;border-radius:6px;margin-right:10px"><div class="cell-body"><div class="cell-title">' + escapeHtml(c.name) + '</div><div class="cell-label">' + c.industry + '</div></div><span class="cell-arrow">' + iconSVG('arrowRight', 14, '#c8c9cc') + '</span></div>';
    });
  }
  // Products
  if (m.products && m.products.length) {
    html += '<div class="section-title" style="padding:8px 16px">关联产品</div>';
    m.products.forEach(function(p) {
      html += '<div class="comp-cell" data-action="nav" data-payload="/member-product/' + p.id + '"><img src="' + p.cover + '" style="width:36px;height:36px;border-radius:6px;margin-right:10px;object-fit:cover"><div class="cell-body"><div class="cell-title">' + escapeHtml(p.name) + '</div></div><span class="cell-arrow">' + iconSVG('arrowRight', 14, '#c8c9cc') + '</span></div>';
    });
  }
  // 底部交换名片按钮
  if (!isFriend(m.id)) {
    var mbtnText = AppState.outgoingIds.indexOf(m.id) >= 0 ? '已发送请求' : '交换名片';
    var mbtnDisabled = AppState.outgoingIds.indexOf(m.id) >= 0;
    html += '<div class="bottom-bar"><button class="comp-btn ' + (mbtnDisabled ? 'outline' : 'primary') + ' round block" onclick="doExchangeCard(' + m.id + ')"' + (mbtnDisabled ? ' disabled' : '') + '>' + mbtnText + '</button></div>';
  }
  html += '</div>';
  return html;
};

// --- MEMBER COMPANY ---
Views.MemberCompanyList = function() {
  var html = '<div class="page-container">' + UI_NavBar('会员企业', true);

  // 搜索栏
  html += '<div style="padding:12px 16px;background:#fff;border-bottom:1px solid var(--border)">';
  html += '<input type="search" placeholder="搜索企业或简讯" style="width:100%;padding:6px 12px;border:1px solid var(--border);border-radius:4px;font-size:14px;outline:none;box-sizing:border-box">';
  html += '</div>';

  // 企业列表
  html += '<div style="padding:8px 0;background:#f5f5f5">';
  companyList.forEach(function(c) {
    html += '<div class="company-card" data-action="nav" data-payload="/member-company/' + c.id + '" style="background:#fff;margin-bottom:8px;padding:12px 16px;display:flex;align-items:center;gap:12px">';

    // 企业logo（圆形）
    html += '<img src="' + c.logo + '" style="width:48px;height:48px;border-radius:50%;flex-shrink:0;object-fit:cover">';

    // 企业信息
    html += '<div style="flex:1;min-width:0">';
    html += '<div style="font-size:16px;font-weight:600;margin-bottom:4px;color:#333">' + escapeHtml(c.name) + '</div>';
    html += '<div style="font-size:13px;color:#666;margin-bottom:2px">行业：' + escapeHtml(c.industry) + '</div>';
    html += '<div style="font-size:13px;color:#999">地址：' + escapeHtml(c.address) + '</div>';
    html += '</div>';

    // 右箭头
    html += '<div style="flex-shrink:0">' + iconSVG('arrow-right', 16, '#ccc') + '</div>';

    html += '</div>';
  });
  html += '</div></div>';
  return html;
};

Views.MemberCompanyDetail = function() {
  var c = companyList.find(function(item) { return item.id == Router.params.id; });
  if (!c) return '<div class="page-container">' + UI_NavBar('企业详情', true) + UI_Empty('企业未找到') + '</div>';
  var html = '<div class="page-container">' + UI_NavBar('企业详情', true);
  html += '<div style="text-align:center;padding:20px"><img src="' + c.logo + '" style="width:64px;height:64px;border-radius:12px;margin:0 auto"><h3 style="margin:8px 0 4px">' + escapeHtml(c.name) + '</h3><div style="font-size:12px;color:var(--text-lighter)">' + escapeHtml(c.industry) + '</div></div>';
  html += UI_CellGroup([{ title: '创始人', value: c.founder }, { title: '地址', value: c.address }, { title: '行业', value: c.industry }], true);
  html += '<div class="content-detail"><h4>企业简介</h4><div class="body">' + escapeHtml(c.intro) + '</div></div>';

  if (c.products && c.products.length) {
    html += '<div class="section-title" style="padding:8px 16px;background:#fff">旗下产品</div>';
    html += '<div style="padding:8px 0;background:#f5f5f5">';
    c.products.forEach(function(p) {
      html += '<div class="product-card" data-action="nav" data-payload="/member-product/' + p.id + '" style="background:#fff;margin-bottom:8px;padding:12px 16px;display:flex;gap:12px">';

      // 产品图片（方形）
      html += '<img src="' + p.cover + '" style="width:80px;height:80px;border-radius:6px;flex-shrink:0;object-fit:cover">';

      // 产品信息
      html += '<div style="flex:1;min-width:0;display:flex;flex-direction:column;justify-content:center">';
      html += '<div style="font-size:15px;font-weight:600;margin-bottom:4px;color:#333">产品名称：' + escapeHtml(p.name) + '</div>';
      html += '<div style="font-size:13px;color:#666;margin-bottom:2px">所属行业：' + escapeHtml(p.industry) + '</div>';
      html += '<div style="font-size:13px;color:#666;margin-bottom:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">应用领域：' + escapeHtml((p.intro || '').substring(0, 20)) + ((p.intro || '').length > 20 ? '...' : '') + '</div>';
      html += '<div style="font-size:13px;color:#666">生产企业：' + escapeHtml(c.name) + '</div>';
      html += '</div>';

      html += '</div>';
    });
    html += '</div>';
  }
  html += '</div>';
  return html;
};

// --- MEMBER PRODUCT ---
Views.MemberProductList = function() {
  var html = '<div class="page-container">' + UI_NavBar('会员产品', true);

  // 搜索栏
  html += '<div style="padding:12px 16px;background:#fff;border-bottom:1px solid var(--border)">';
  html += '<input type="search" placeholder="搜索产品关键词" style="width:100%;padding:6px 12px;border:1px solid var(--border);border-radius:4px;font-size:14px;outline:none;box-sizing:border-box">';
  html += '</div>';

  // 产品数量统计
  html += '<div style="padding:8px 16px;font-size:13px;color:#666;background:#fff">当前产品数量：' + productList.length + '个</div>';
  html += '</div>';

  // 产品列表
  html += '<div style="padding:8px 0;background:#f5f5f5">';
  productList.forEach(function(p) {
    html += '<div class="product-card" data-action="nav" data-payload="/member-product/' + p.id + '" style="background:#fff;margin-bottom:8px;padding:12px 16px;display:flex;gap:12px">';

    // 产品图片（方形）
    html += '<img src="' + p.cover + '" style="width:80px;height:80px;border-radius:6px;flex-shrink:0;object-fit:cover">';

    // 产品信息
    html += '<div style="flex:1;min-width:0;display:flex;flex-direction:column;justify-content:center">';
    html += '<div style="font-size:15px;font-weight:600;margin-bottom:4px;color:#333">产品名称：' + escapeHtml(p.name) + '</div>';
    html += '<div style="font-size:13px;color:#666;margin-bottom:2px">所属行业：' + escapeHtml(p.industry) + '</div>';
    html += '<div style="font-size:13px;color:#666;margin-bottom:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">应用领域：' + escapeHtml(p.intro.substring(0, 20)) + (p.intro.length > 20 ? '...' : '') + '</div>';
    html += '<div style="font-size:13px;color:#666">生产企业：' + escapeHtml(p.company) + '</div>';
    html += '</div>';

    html += '</div>';
  });
  html += '</div></div>';
  return html;
};

Views.MemberProductDetail = function() {
  var p = productList.find(function(item) { return item.id == Router.params.id; });
  if (!p) return '<div class="page-container">' + UI_NavBar('产品详情', true) + UI_Empty('产品未找到') + '</div>';
  var html = '<div class="page-container">' + UI_NavBar('产品详情', true);
  html += '<img src="' + p.cover + '" style="width:100%;max-height:240px;object-fit:cover">';
  html += '<div style="padding:12px 16px"><h3>' + escapeHtml(p.name) + '</h3><div style="font-size:12px;color:var(--text-lighter)">' + escapeHtml(p.company) + ' · ' + UI_Tag(p.industry, 'primary') + '</div></div>';
  html += '<div class="content-detail"><h4>产品简介</h4><div class="body">' + escapeHtml(p.intro) + '</div></div>';
  if (p.features && p.features.length) {
    html += '<div class="content-detail"><h4>核心功能</h4><div><ul style="padding-left:16px;line-height:2">';
    p.features.forEach(function(f) { html += '<li>' + escapeHtml(f) + '</li>'; });
    html += '</ul></div></div>';
  }
  html += '<div class="content-detail"><h4>应用领域</h4><div class="body">' + escapeHtml(p.applications) + '</div></div>';
  html += '</div>';
  return html;
};

// --- MEMBER ENTERPRISE & PRODUCT (MERGED) ---
Views.MemberEPListView = function() {
  var tabs = [{ key: 'company', name: '会员企业' }, { key: 'product', name: '会员产品' }];
  var html = '<div class="page-container">' + UI_NavBar('会员企产', true) + UI_Tabs(tabs, uiState.epListTab || 'company');

  // 搜索栏
  html += '<div style="padding:12px 16px;background:#fff;border-bottom:1px solid var(--border)">';
  html += '<input type="search" placeholder="搜索' + (uiState.epListTab === 'product' ? '产品' : '企业') + '" style="width:100%;padding:6px 12px;border:1px solid var(--border);border-radius:4px;font-size:14px;outline:none;box-sizing:border-box">';
  html += '</div>';

  if (uiState.epListTab === 'product') {
    // 产品数量统计
    html += '<div style="padding:8px 16px;font-size:13px;color:#666;background:#fff">当前产品数量：' + productList.length + '个</div>';
    // 产品列表
    html += '<div style="padding:8px 0;background:#f5f5f5">';
    productList.forEach(function(p) {
      html += '<div class="product-card" data-action="nav" data-payload="/member-product/' + p.id + '" style="background:#fff;margin-bottom:8px;padding:12px 16px;display:flex;gap:12px">';
      html += '<img src="' + p.cover + '" style="width:80px;height:80px;border-radius:6px;flex-shrink:0;object-fit:cover">';
      html += '<div style="flex:1;min-width:0;display:flex;flex-direction:column;justify-content:center">';
      html += '<div style="font-size:15px;font-weight:600;margin-bottom:4px;color:#333">' + escapeHtml(p.name) + '</div>';
      html += '<div style="font-size:13px;color:#666;margin-bottom:2px">所属行业：' + escapeHtml(p.industry) + '</div>';
      html += '<div style="font-size:13px;color:#666;margin-bottom:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">应用领域：' + escapeHtml((p.intro || '').substring(0, 20)) + ((p.intro || '').length > 20 ? '...' : '') + '</div>';
      html += '<div style="font-size:13px;color:#666">生产企业：' + escapeHtml(p.company) + '</div>';
      html += '</div></div>';
    });
    html += '</div>';
  } else {
    // 企业列表
    html += '<div style="padding:8px 0;background:#f5f5f5">';
    companyList.forEach(function(c) {
      html += '<div class="company-card" data-action="nav" data-payload="/member-company/' + c.id + '" style="background:#fff;margin-bottom:8px;padding:12px 16px;display:flex;align-items:center;gap:12px">';
      html += '<img src="' + c.logo + '" style="width:48px;height:48px;border-radius:50%;flex-shrink:0;object-fit:cover">';
      html += '<div style="flex:1;min-width:0">';
      html += '<div style="font-size:16px;font-weight:600;margin-bottom:4px;color:#333">' + escapeHtml(c.name) + '</div>';
      html += '<div style="font-size:13px;color:#666;margin-bottom:2px">行业：' + escapeHtml(c.industry) + '</div>';
      html += '<div style="font-size:13px;color:#999">地址：' + escapeHtml(c.address) + '</div>';
      html += '</div>';
      html += '<div style="flex-shrink:0">' + iconSVG('arrow-right', 16, '#ccc') + '</div>';
      html += '</div>';
    });
    html += '</div>';
  }
  html += '</div>';
  return html;
};

// --- MEMBER DEMAND ---
Views.MemberDemandListView = function() {
  var tabs = [{ key: 'help', name: '会员互助' }, { key: 'business', name: '商务求助' }];
  var html = '<div class="page-container">' + UI_NavBar('会员需求', true) + UI_Tabs(tabs, uiState.demandTab || 'help');

  if (uiState.demandTab === 'business') {
    // 商务求助列表
    var businessFiltered = businessNeedList.filter(function(b) { return b.status !== 'offline'; });
    html += '<div style="padding:8px 0;background:#f5f5f5">';
    businessFiltered.forEach(function(b) {
      var statusText = b.status === 'resolved' ? '已完成' : '进行中';
      var statusColor = b.status === 'resolved' ? 'success' : 'warning';
      html += '<div class="comp-cell" data-action="nav" data-payload="/member-demand/business/' + b.id + '">';
      html += '<div style="flex:1;min-width:0">';
      html += '<div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">';
      html += '<span style="font-size:12px;color:#ff976a">' + escapeHtml(b.budget) + '</span>';
      html += '</div>';
      html += '<div style="font-size:14px;font-weight:600;color:#333;margin-bottom:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + escapeHtml(b.title) + '</div>';
      html += '<div style="display:flex;align-items:center;gap:8px;font-size:12px;color:#999">';
      html += '<img src="' + b.publisher.avatar + '" style="width:16px;height:16px;border-radius:50%">';
      html += '<span>' + escapeHtml(b.publisher.name) + '</span>';
      if (b.publisher.company) {
        html += '<span style="color:#666">· ' + escapeHtml(b.publisher.company) + '</span>';
      }
      html += '<span>· ' + b.date + '</span>';
      html += '<span style="margin-left:auto">' + UI_Tag(statusText, statusColor) + '</span>';
      html += '</div>';
      html += '<div style="margin-top:6px;font-size:12px;color:#666;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + escapeHtml(b.description) + '</div>';
      html += '<div style="margin-top:6px;font-size:11px;color:#999">' + iconSVG('chat', 12, '#999') + ' ' + b.responseCount + '条响应</div>';
      html += '</div>';
      html += '<span class="cell-arrow">' + iconSVG('arrowRight', 14, '#c8c9cc') + '</span>';
      html += '</div>';
    });
    if (businessFiltered.length === 0) {
      html += '<div class="empty-state">' + iconSVG('list', 48, '#ccc') + '<div style="margin-top:8px;color:#999">暂无商务求助</div></div>';
    }
  } else {
    // 会员互助列表（复用helpList数据）
    var helpFiltered = helpList.filter(function(h) {
      return h.reviewStatus === 'approved' && h.status !== 'offline' && h.publisher.role === '商务会员';
    });
    html += '<div style="padding:8px 0;background:#f5f5f5">';
    helpFiltered.forEach(function(h) {
      var statusText = '';
      var statusColor = 'warning';
      html += '<div class="comp-cell" data-action="nav" data-payload="/help/' + h.id + '">';
      html += '<img src="' + h.publisher.avatar + '" style="width:40px;height:40px;border-radius:50%;margin-right:10px">';
      html += '<div style="flex:1;min-width:0">';
      html += '<div style="font-size:14px;font-weight:600;color:#333;margin-bottom:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + escapeHtml(h.title) + '</div>';
      html += '<div style="font-size:12px;color:#999">' + escapeHtml(h.publisher.name) + ' · ' + escapeHtml(h.publisher.role) + ' · ' + h.date + '</div>';
      html += '</div>';
      html += UI_Tag(statusText, statusColor);
      html += '<span class="cell-arrow">' + iconSVG('arrowRight', 14, '#c8c9cc') + '</span>';
      html += '</div>';
    });
    if (helpFiltered.length === 0) {
      html += '<div class="empty-state">' + iconSVG('help', 48, '#ccc') + '<div style="margin-top:8px;color:#999">暂无会员互助</div></div>';
    }
  }
  html += '</div>';

  // 发布按钮
  if (roleRank[AppState.currentRole] >= 2) {
    html += '<div class="bottom-bar">';
    if (uiState.demandTab === 'business') {
      html += UI_Button('发布商务求助', 'primary', '', true, true);
    } else {
      html += UI_Button('发布互助求助', 'primary', '', true, true);
    }
    html += '</div>';
  }
  html += '</div>';
  return html;
};

// --- 会员互助 ---
Views.MemberMutualHelp = function() {
  var html = '<div class="page-container">' + UI_NavBar('会员互助', true);

  // 会员互助列表（复用helpList数据）
  var helpFiltered = helpList.filter(function(h) {
    return h.reviewStatus === 'approved' && h.status !== 'offline' && h.publisher.role === '商务会员';
  });
  html += '<div style="padding:8px 0;background:#f5f5f5">';
  helpFiltered.forEach(function(h) {
    var statusText = '';
    var statusColor = 'warning';
    html += '<div class="comp-cell" data-action="nav" data-payload="/help/' + h.id + '">';
    html += '<img src="' + h.publisher.avatar + '" style="width:40px;height:40px;border-radius:50%;margin-right:10px">';
    html += '<div style="flex:1;min-width:0">';
    html += '<div style="font-size:14px;font-weight:600;color:#333;margin-bottom:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + escapeHtml(h.title) + '</div>';
    html += '<div style="font-size:12px;color:#999">' + escapeHtml(h.publisher.name) + ' · ' + escapeHtml(h.publisher.role) + ' · ' + h.date + '</div>';
    html += '</div>';
    html += UI_Tag(statusText, statusColor);
    html += '<span class="cell-arrow">' + iconSVG('arrowRight', 14, '#c8c9cc') + '</span>';
    html += '</div>';
  });
  if (helpFiltered.length === 0) {
    html += '<div class="empty-state">' + iconSVG('help', 48, '#ccc') + '<div style="margin-top:8px;color:#999">暂无会员互助</div></div>';
  }
  html += '</div>';

  // 发布按钮
  if (roleRank[AppState.currentRole] >= 2) {
    html += '<div class="bottom-bar">';
    html += UI_Button('发布互助求助', 'primary', '', true, true);
    html += '</div>';
  }
  html += '</div>';
  return html;
};

// --- 商务求助 ---
Views.MemberBusinessDemand = function() {
  var html = '<div class="page-container">' + UI_NavBar('商务求助', true);

  // 商务求助列表
  var businessFiltered = businessNeedList.filter(function(b) { return b.status !== 'offline'; });
  html += '<div style="padding:8px 0;background:#f5f5f5">';
  businessFiltered.forEach(function(b) {
    var statusText = b.status === 'resolved' ? '已完成' : '进行中';
    var statusColor = b.status === 'resolved' ? 'success' : 'warning';
    html += '<div class="comp-cell" data-action="nav" data-payload="/member-demand/business/' + b.id + '">';
    html += '<div style="flex:1;min-width:0">';
    html += '<div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">';
    html += '<span style="font-size:12px;color:#ff976a">' + escapeHtml(b.budget) + '</span>';
    html += '</div>';
    html += '<div style="font-size:14px;font-weight:600;color:#333;margin-bottom:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + escapeHtml(b.title) + '</div>';
    html += '<div style="display:flex;align-items:center;gap:8px;font-size:12px;color:#999">';
    html += '<img src="' + b.publisher.avatar + '" style="width:16px;height:16px;border-radius:50%">';
    html += '<span>' + escapeHtml(b.publisher.name) + '</span>';
    if (b.publisher.company) {
      html += '<span style="color:#666">· ' + escapeHtml(b.publisher.company) + '</span>';
    }
    html += '<span>· ' + b.date + '</span>';
    html += '<span style="margin-left:auto">' + UI_Tag(statusText, statusColor) + '</span>';
    html += '</div>';
    html += '<div style="margin-top:6px;font-size:12px;color:#666;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + escapeHtml(b.description) + '</div>';
    html += '<div style="margin-top:6px;font-size:11px;color:#999">' + iconSVG('chat', 12, '#999') + ' ' + b.responseCount + '条响应</div>';
    html += '</div>';
    html += '<span class="cell-arrow">' + iconSVG('arrowRight', 14, '#c8c9cc') + '</span>';
    html += '</div>';
  });
  if (businessFiltered.length === 0) {
    html += '<div class="empty-state">' + iconSVG('list', 48, '#ccc') + '<div style="margin-top:8px;color:#999">暂无商务求助</div></div>';
  }
  html += '</div>';

  // 发布按钮（仅商务会员可发布商务求助）
  if (roleRank[AppState.currentRole] >= 2) {
    html += '<div class="bottom-bar">';
    html += UI_Button('发布商务求助', 'primary', '', true, true);
    html += '</div>';
  }
  html += '</div>';
  return html;
};

Views.MemberBusinessDetail = function() {
  var b = businessNeedList.find(function(item) { return item.id == Router.params.id; });
  if (!b) return '<div class="page-container">' + UI_NavBar('需求详情', true) + UI_Empty('需求未找到') + '</div>';
  var statusText = b.status === 'resolved' ? '已完成' : '进行中';
  var statusColor = b.status === 'resolved' ? 'success' : 'warning';
  var html = '<div class="page-container no-tab">' + UI_NavBar('商务求助详情', true);

  // 需求信息卡片
  html += '<div style="background:#fff;padding:16px;margin-bottom:8px">';
  html += '<div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">';
  html += '<span style="font-size:14px;color:#ff976a;font-weight:500">' + escapeHtml(b.budget) + '</span>';
  html += UI_Tag(statusText, statusColor);
  html += '</div>';
  html += '<h3 style="font-size:17px;font-weight:600;color:#333;margin-bottom:12px">' + escapeHtml(b.title) + '</h3>';
  html += '<div style="display:flex;align-items:center;gap:8px;padding-bottom:12px;border-bottom:1px solid #f0f0f0">';
  if (b.publisher.id > 0) {
    html += '<div data-action="nav" data-payload="/alumni-card/' + b.publisher.id + '" style="display:flex;align-items:center;gap:8px;cursor:pointer;flex:1;min-width:0">';
  } else {
    html += '<div style="display:flex;align-items:center;gap:8px;flex:1;min-width:0">';
  }
  html += '<img src="' + b.publisher.avatar + '" style="width:32px;height:32px;border-radius:50%">';
  html += '<div>';
  html += '<div style="font-size:14px;color:#333;font-weight:500">' + escapeHtml(b.publisher.name) + '</div>';
  if (b.publisher.company) {
    html += '<div style="font-size:12px;color:#666">' + escapeHtml(b.publisher.company) + '</div>';
  }
  html += '</div>';
  html += '</div>';
  html += '<div style="margin-left:auto;font-size:12px;color:#999">' + b.date + '</div>';
  html += '</div>';
  html += '</div>';

  // 需求详情
  html += '<div style="background:#fff;padding:16px;margin-bottom:8px">';
  html += '<div style="font-size:13px;color:#999;margin-bottom:8px">需求详情</div>';
  html += '<div style="font-size:15px;color:#333;line-height:1.6">' + escapeHtml(b.description) + '</div>';
  html += '</div>';

  // 响应统计
  html += '<div style="background:#fff;padding:16px;margin-bottom:8px">';
  html += '<div style="font-size:13px;color:#999;margin-bottom:8px">响应统计</div>';
  html += '<div style="display:flex;gap:16px">';
  html += '<div style="flex:1;text-align:center;padding:12px;background:#f5f7fa;border-radius:8px">';
  html += '<div style="font-size:24px;font-weight:600;color:#333">' + b.responseCount + '</div>';
  html += '<div style="font-size:12px;color:#999">响应数</div>';
  html += '</div>';
  html += '<div style="flex:1;text-align:center;padding:12px;background:#f5f7fa;border-radius:8px">';
  html += '<div style="font-size:24px;font-weight:600;color:#07c160">' + Math.floor(b.responseCount / 2) + '</div>';
  html += '<div style="font-size:12px;color:#999">已接受</div>';
  html += '</div>';
  html += '<div style="flex:1;text-align:center;padding:12px;background:#f5f7fa;border-radius:8px">';
  html += '<div style="font-size:24px;font-weight:600;color:#ff976a">' + Math.ceil(b.responseCount / 2) + '</div>';
  html += '<div style="font-size:12px;color:#999">进行中</div>';
  html += '</div>';
  html += '</div>';
  html += '</div>';

  html += '<div class="bottom-bar"><button class="comp-btn primary round block" onclick="showBusinessResponseModal(' + b.id + ')">我要响应</button></div>';
  html += '</div>';
  return html;
};

// --- MEMBER SERVICE ---
Views.MemberServiceIndex = function() {
  var aiCat = { key: 'ai-report', name: 'AI智能报告', desc: '产业分析 · 经营评估 · 科创需求 · 企业画像', icon: 'brain', gradient: 'linear-gradient(135deg, #6fa4cf, #9bc1de)', tagBg: '#e8f4fd', tagColor: '#4a90d9' };

  var html = '<div class="page-container" style="background:#f5f6fa">' + UI_NavBar('会员服务', true);

  // 顶部说明条
  html += '<div style="padding:12px 16px;background:linear-gradient(135deg,#f0f4ff,#fff);display:flex;align-items:center;gap:8px;border-bottom:1px solid #eef0f5">';
  html += '<div style="width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,#6fa4cf,#9bc1de);display:flex;align-items:center;justify-content:center;flex-shrink:0">' + iconSVG('service', 16, '#fff') + '</div>';
  html += '<div><div style="font-size:13px;font-weight:600;color:#333">欢迎使用会员服务</div><div style="font-size:11px;color:#999">北理工校友专属的商务求助对接平台</div></div>';
  html += '</div>';

  html += '<div style="padding:12px 16px">';

  // 会员互助 - 入口卡片
  html += '<div data-action="nav" data-payload="/member-mutual-help" style="background:linear-gradient(135deg,#07c160,#05a04a);border-radius:14px;padding:16px;box-shadow:0 4px 16px rgba(7,193,96,0.25);cursor:pointer;color:#fff;display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">';
  html += '<div style="display:flex;align-items:center;gap:12px">';
  html += '<div style="width:40px;height:40px;border-radius:10px;background:rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center">' + iconSVG('help', 20, '#fff') + '</div>';
  html += '<div>';
  html += '<div style="font-size:15px;font-weight:600">会员互助</div>';
  html += '<div style="font-size:11px;opacity:0.85;margin-top:2px">互助与响应 · 问题解决</div>';
  html += '</div>';
  html += '</div>';
  html += '<div style="display:flex;align-items:center;gap:4px">';
  html += '<span style="font-size:12px;opacity:0.9">进入</span>';
  html += iconSVG('arrowRight', 16, '#fff');
  html += '</div>';
  html += '</div>';

  // 商务求助 - 入口卡片
  html += '<div data-action="nav" data-payload="/member-business-demand" style="background:linear-gradient(135deg,#9254de,#b37feb);border-radius:14px;padding:16px;box-shadow:0 4px 16px rgba(146,84,222,0.25);cursor:pointer;color:#fff;display:flex;align-items:center;justify-content:space-between">';
  html += '<div style="display:flex;align-items:center;gap:12px">';
  html += '<div style="width:40px;height:40px;border-radius:10px;background:rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center">' + iconSVG('list', 20, '#fff') + '</div>';
  html += '<div>';
  html += '<div style="font-size:15px;font-weight:600">商务求助</div>';
  html += '<div style="font-size:11px;opacity:0.85;margin-top:2px">供需匹配 | 销售拓展 | 项目合作 | 投融资对接</div>';
  html += '</div>';
  html += '</div>';
  html += '<div style="display:flex;align-items:center;gap:4px">';
  html += '<span style="font-size:12px;opacity:0.9">进入</span>';
  html += iconSVG('arrowRight', 16, '#fff');
  html += '</div>';
  html += '</div>';

  html += '</div>';

  // AI智能报告卡片
  html += '<div style="padding:6px 16px">';
  html += '<div data-action="nav" data-payload="/ai-report" style="background:linear-gradient(135deg,#6fa4cf,#9bc1de);border-radius:14px;padding:16px;box-shadow:0 4px 16px rgba(111,164,207,0.3);cursor:pointer;color:#fff;display:flex;align-items:center;justify-content:space-between">';
  html += '<div style="display:flex;align-items:center;gap:12px">';
  html += '<div style="width:40px;height:40px;border-radius:10px;background:rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center">' + iconSVG(aiCat.icon, 20, '#fff') + '</div>';
  html += '<div>';
  html += '<div style="font-size:15px;font-weight:600">' + aiCat.name + '</div>';
  html += '<div style="font-size:11px;opacity:0.85;margin-top:2px">' + aiCat.desc + '</div>';
  html += '</div>';
  html += '</div>';
  html += '<div style="display:flex;align-items:center;gap:4px">';
  html += '<span style="font-size:12px;opacity:0.9">进入</span>';
  html += iconSVG('arrowRight', 16, '#fff');
  html += '</div>';
  html += '</div>';
  html += '</div>';

  // 企业赋能 - 入口卡片
  html += '<div style="padding:6px 16px">';
  html += '<div data-action="nav" data-payload="/member-service/empower" style="background:linear-gradient(135deg,#07c160,#05a04a);border-radius:14px;padding:16px;box-shadow:0 4px 16px rgba(7,193,96,0.25);cursor:pointer;color:#fff;display:flex;align-items:center;justify-content:space-between">';
  html += '<div style="display:flex;align-items:center;gap:12px">';
  html += '<div style="width:40px;height:40px;border-radius:10px;background:rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center">' + iconSVG('activity', 20, '#fff') + '</div>';
  html += '<div>';
  html += '<div style="font-size:15px;font-weight:600">企业赋能</div>';
  html += '<div style="font-size:11px;opacity:0.85;margin-top:2px">管理咨询 | 教育培训 | 人才招聘 | 办公选址</div>';
  html += '<div style="font-size:11px;opacity:0.85;margin-top:2px">企划合规 | 资质申报 | 营销推广 | 系统建设</div>';
  html += '</div>';
  html += '</div>';
  html += '<div style="display:flex;align-items:center;gap:4px">';
  html += '<span style="font-size:12px;opacity:0.9">进入</span>';
  html += iconSVG('arrowRight', 16, '#fff');
  html += '</div>';
  html += '</div>';
  html += '</div>';

  // 专属服务 - 入口卡片
  html += '<div style="padding:6px 16px">';
  html += '<div data-action="nav" data-payload="/member-service/exclusive" style="background:linear-gradient(135deg,#ff976a,#f07a4a);border-radius:14px;padding:16px;box-shadow:0 4px 16px rgba(255,151,106,0.25);cursor:pointer;color:#fff;display:flex;align-items:center;justify-content:space-between">';
  html += '<div style="display:flex;align-items:center;gap:12px">';
  html += '<div style="width:40px;height:40px;border-radius:10px;background:rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center">' + iconSVG('service', 20, '#fff') + '</div>';
  html += '<div>';
  html += '<div style="font-size:15px;font-weight:600">专属服务</div>';
  html += '<div style="font-size:11px;opacity:0.85;margin-top:2px">亲子教育 | 保健就医 | 居家置业 | 财富管理</div>';
  html += '</div>';
  html += '</div>';
  html += '<div style="display:flex;align-items:center;gap:4px">';
  html += '<span style="font-size:12px;opacity:0.9">进入</span>';
  html += iconSVG('arrowRight', 16, '#fff');
  html += '</div>';
  html += '</div>';
  html += '</div>';

  // 商务活动 - 入口卡片
  html += '<div style="padding:6px 16px">';
  html += '<div data-action="nav" data-payload="/member-service/biz-activity" style="background:linear-gradient(135deg,#ee0a24,#d00820);border-radius:14px;padding:16px;box-shadow:0 4px 16px rgba(238,10,36,0.25);cursor:pointer;color:#fff;display:flex;align-items:center;justify-content:space-between">';
  html += '<div style="display:flex;align-items:center;gap:12px">';
  html += '<div style="width:40px;height:40px;border-radius:10px;background:rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center">' + iconSVG('calendar', 20, '#fff') + '</div>';
  html += '<div>';
  html += '<div style="font-size:15px;font-weight:600">商务活动</div>';
  html += '<div style="font-size:11px;opacity:0.85;margin-top:2px">主题沙龙 | 圈层联谊 | 管理研修 | 行业峰会</div>';
  html += '<div style="font-size:11px;opacity:0.85;margin-top:2px">项目路演 | 政企走访 | 招商推介 | 公益帮扶</div>';
  html += '</div>';
  html += '</div>';
  html += '<div style="display:flex;align-items:center;gap:4px">';
  html += '<span style="font-size:12px;opacity:0.9">进入</span>';
  html += iconSVG('arrowRight', 16, '#fff');
  html += '</div>';
  html += '</div>';
  html += '</div>';

  html += '</div></div>';

  html += '</div>';
  return html;
};

Views.MemberServiceDetail = function() {
  var catKey = Router.params.category || '';

  // 分类key到名称的映射
  var categoryNames = {
    'empower': '企业赋能',
    'biz-activity': '商务活动',
    'exclusive': '专属服务'
  };

  var catName = categoryNames[catKey] || '服务详情';

  // 获取该大类下的所有子分类
  var subCategories = serviceCategoryMap[catName] || [];

  // 当前选中的子分类（从uiState获取，默认为"全部"）
  if (!uiState.serviceSubCategory) uiState.serviceSubCategory = {};
  var currentSub = uiState.serviceSubCategory[catKey] || '';

  // 根据大类和子分类筛选服务项目
  var projects = serviceProjects.filter(function(p) {
    var inCategory = subCategories.indexOf(p.category) >= 0;
    if (!inCategory) return false;
    if (currentSub && p.category !== currentSub) return false;
    return true;
  }).map(function(p) {
    var provider = serviceProviders.find(function(sp) { return sp.id === p.providerId; });
    return {
      id: p.id,
      name: p.name,
      desc: p.desc,
      price: p.price,
      unit: p.unit,
      category: p.category,
      viewCount: p.viewCount,
      orderCount: p.orderCount,
      providerName: provider ? provider.name : '未知机构',
      providerAvatar: provider ? provider.avatar : img('default', 100, 100),
      providerId: p.providerId
    };
  });

  var html = '<div class="page-container" style="background:#f5f6fa">' + UI_NavBar(catName, true);

  // 子分类标签筛选（可点击），企业赋能页不显示
  if (subCategories.length > 0 && catKey !== 'empower' && catKey !== 'exclusive') {
    html += '<div style="padding:10px 16px;background:#fff;border-bottom:1px solid #eef0f5;display:flex;align-items:center;gap:8px;overflow-x:auto;white-space:nowrap;-webkit-overflow-scrolling:touch">';

    // 全部按钮
    var allActive = !currentSub;
    html += '<span data-action="filter-service-sub" data-cat="' + catKey + '" data-sub="" style="flex-shrink:0;display:inline-flex;align-items:center;padding:6px 14px;background:' + (allActive ? 'linear-gradient(135deg,#6fa4cf,#4a90d9)' : '#f0f2f5') + ';color:' + (allActive ? '#fff' : '#666') + ';border-radius:20px;font-size:13px;cursor:pointer;font-weight:' + (allActive ? '600' : '400') + ';transition:all 0.2s">全部</span>';

    // 子分类按钮
    subCategories.forEach(function(sub) {
      var isActive = currentSub === sub;
      var count = serviceProjects.filter(function(p) { return p.category === sub; }).length;
      html += '<span data-action="filter-service-sub" data-cat="' + catKey + '" data-sub="' + escapeHtml(sub) + '" style="flex-shrink:0;display:inline-flex;align-items:center;gap:4px;padding:6px 14px;background:' + (isActive ? 'linear-gradient(135deg,#6fa4cf,#4a90d9)' : '#f0f2f5') + ';color:' + (isActive ? '#fff' : '#666') + ';border-radius:20px;font-size:12px;cursor:pointer;font-weight:' + (isActive ? '600' : '400') + ';transition:all 0.2s">' + escapeHtml(sub) + (count > 0 ? '<span style="font-size:10px;opacity:0.8">' + count + '</span>' : '') + '</span>';
    });
    html += '</div>';

    // 当前筛选状态
    if (currentSub) {
      html += '<div style="padding:8px 16px;background:#f0f4ff;display:flex;align-items:center;gap:6px;font-size:12px;color:#4a90d9">';
      html += iconSVG('check', 14, '#4a90d9');
      html += '当前筛选：<b>' + escapeHtml(currentSub) + '</b>';
      html += '<span data-action="filter-service-sub" data-cat="' + catKey + '" data-sub="" style="margin-left:auto;color:#999;cursor:pointer;font-size:11px">清除筛选</span>';
      html += '</div>';
    }
  }

  if (projects.length === 0) {
    html += '<div style="padding:60px 20px;text-align:center">';
    html += '<div style="margin-bottom:12px">' + iconSVG('package', 48, '#ddd') + '</div>';
    html += '<div style="font-size:14px;color:#999;margin-bottom:4px">暂无服务项目</div>';
    html += '<div style="font-size:12px;color:#bbb">该分类下暂未上架服务，请稍后再来</div>';
    html += '</div>';
  } else {
    html += '<div style="padding:12px 16px">';
    projects.forEach(function(proj) {
      html += '<div class="service-card" data-action="nav" data-payload="/service-project/' + proj.id + '" style="background:#fff;border-radius:14px;padding:16px;margin-bottom:12px;box-shadow:0 2px 10px rgba(0,0,0,0.04);position:relative">';

      // 左上角分类标签
      html += '<span style="position:absolute;top:14px;right:14px;display:inline-block;padding:3px 10px;background:#e8f5e9;color:#4caf50;border-radius:10px;font-size:11px;font-weight:500">' + escapeHtml(proj.category) + '</span>';

      // 服务机构信息
      html += '<div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">';
      html += '<img src="' + proj.providerAvatar + '" style="width:38px;height:38px;border-radius:10px;flex-shrink:0;box-shadow:0 2px 6px rgba(0,0,0,0.08)">';
      html += '<div>';
      html += '<div style="font-size:13px;font-weight:600;color:#333;margin-bottom:2px">' + escapeHtml(proj.providerName) + '</div>';
      html += '</div></div>';

      // 服务标题
      html += '<div style="font-size:16px;font-weight:700;color:#222;margin-bottom:8px;line-height:1.4;padding-right:100px">' + escapeHtml(proj.name) + '</div>';

      // 描述
      html += '<div style="font-size:13px;color:#666;line-height:1.6;margin-bottom:12px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">' + escapeHtml(proj.desc) + '</div>';

      // 价格和统计
      html += '<div style="display:flex;align-items:flex-end;justify-content:space-between;padding-top:12px;border-top:1px solid #f5f5f5">';
      html += '<div style="display:flex;align-items:baseline;gap:3px">';
      html += '<span style="font-size:22px;font-weight:800;color:#f56c6c;letter-spacing:-0.5px">¥' + proj.price.toLocaleString() + '</span>';
      html += '<span style="font-size:12px;color:#aaa">/ ' + proj.unit + '</span>';
      html += '</div>';
      html += '</div>';

      html += '</div>';
    });
    html += '</div>';
  }

  html += '</div>';
  return html;
};

Views.ServiceProvider = function() {
  var id = parseInt(Router.params.id);
  var html = '<div class="page-container">' + UI_NavBar('服务提供方', true);
  html += '<div style="text-align:center;padding:20px"><img src="' + img('svc'+id, 100, 100) + '" style="width:64px;height:64px;border-radius:12px;margin:0 auto"><h3 style="margin:8px 0 4px">服务提供方 #' + id + '</h3></div>';
  html += '<div class="content-detail"><div class="body">专业的校友服务机构，为校友企业提供优质的服务解决方案。</div></div>';
  html += '<div class="bottom-bar">' + UI_Button('联系Ta', 'primary', '', true, true) + '</div>';
  html += '</div>';
  return html;
};

// --- TOPIC SHARE ---
Views.TopicShareList = function() {
  var html = '<div class="page-container">' + UI_NavBar('主题分享', true);
  html += '<div class="card-list">';
  topicList.forEach(function(t) {
    html += '<div class="comp-card" data-action="nav" data-payload="/topic-share/' + t.id + '"><img src="' + t.cover + '" class="card-thumb"><div class="card-info"><div class="card-title">' + escapeHtml(t.title) + '</div><div class="card-desc">' + escapeHtml(t.summary || '') + '</div><div class="card-meta">' + t.date + '</div></div></div>';
  });
  html += '</div></div>';
  return html;
};

Views.TopicShareDetail = function() {
  var t = topicList.find(function(item) { return item.id == Router.params.id; });
  if (!t) return '<div class="page-container">' + UI_NavBar('分享详情', true) + UI_Empty('内容未找到') + '</div>';
  var collected = AppState.collectedTopics[t.id];
  var html = '<div class="page-container">' + UI_NavBar('分享详情', true);
  html += '<div class="content-detail"><h3>' + escapeHtml(t.title) + '</h3><div class="meta">' + t.date + '</div><div class="body">' + t.content + '</div></div>';
  // Comment section
  var showCmt = uiState.showTopicComment === t.id;
  var cmts = (AppState.topicComments && AppState.topicComments[t.id]) || [];
  if (showCmt) {
    html += '<div class="comment-section"><div class="cmt-title">评论 (' + cmts.length + ')</div>';
    if (cmts.length === 0) html += '<div style="text-align:center;padding:20px;color:var(--text-lighter)">暂无评论，来说两句吧</div>';
    cmts.forEach(function(c) {
      html += '<div class="comment-item"><img src="' + c.avatar + '"><div class="cmt-body"><div class="cmt-name">' + escapeHtml(c.name) + '</div><div class="cmt-text">' + escapeHtml(c.text) + '</div><div class="cmt-time">' + c.time + '</div></div></div>';
    });
    html += '<div style="display:flex;gap:10px;padding:8px 16px;background:#fff;border-top:1px solid var(--border)"><input id="topic-comment-input" type="text" placeholder="写评论..." style="flex:1;background:#f5f6f8;border-radius:20px;padding:8px 14px;font-size:13px;border:none;outline:none"><span style="padding:8px 12px;color:var(--primary);font-weight:600;cursor:pointer;font-size:14px" onclick="doPostTopicComment(' + t.id + ')">发送</span></div>';
  }
  html += '<div class="bottom-bar-actions"><div class="bba-item' + (AppState.likedFeeds['t' + t.id] ? ' active' : '') + '" onclick="doLikeTopic(' + t.id + ')">' + (AppState.likedFeeds['t' + t.id] ? iconSVG('heartFilled', 18, 'var(--danger)') : iconSVG('heart', 18)) + '<span>' + t.likes + '</span></div><div class="bba-item' + (showCmt ? ' active' : '') + '" onclick="doToggleTopicComment(' + t.id + ')">' + iconSVG('message', 18) + '<span>' + (t.comments || 0) + '</span></div><div class="bba-item' + (collected ? ' active' : '') + '" onclick="doCollectTopic(' + t.id + ')">' + (collected ? iconSVG('starFilled', 18, 'var(--accent)') : iconSVG('star', 18)) + '<span>' + (collected ? '已收藏' : '收藏') + '</span></div><div class="bba-item" onclick="doShare()">' + iconSVG('share', 18) + '<span>分享</span></div></div>';
  html += '</div>';
  return html;
};

// --- INTERVIEW ---
Views.InterviewList = function() {
  var html = '<div class="page-container">' + UI_NavBar('会员专访', true);
  html += '<div class="card-list">';
  interviewList.forEach(function(item) {
    html += '<div class="comp-card" data-action="nav" data-payload="/interview/' + item.id + '"><img src="' + item.cover + '" class="card-thumb"><div class="card-info"><div class="card-title">' + escapeHtml(item.title) + '</div><div class="card-desc">' + escapeHtml(item.summary || '') + '</div><div class="card-meta">' + item.date + '</div></div></div>';
  });
  html += '</div></div>';
  return html;
};

Views.InterviewDetail = function() {
  var item = interviewList.find(function(x) { return x.id == Router.params.id; });
  if (!item) return '<div class="page-container">' + UI_NavBar('专访详情', true) + UI_Empty('内容未找到') + '</div>';
  var collected = AppState.collectedInterviews[item.id];
  var html = '<div class="page-container">' + UI_NavBar('专访详情', true);
  html += '<div class="content-detail"><h3>' + escapeHtml(item.title) + '</h3><div class="meta">' + item.date + '</div><div class="body">' + item.content + '</div></div>';
  html += '<div class="bottom-bar-actions"><div class="bba-item' + (AppState.likedFeeds['i' + item.id] ? ' active' : '') + '" onclick="doLikeInterview(' + item.id + ')">' + (AppState.likedFeeds['i' + item.id] ? iconSVG('heartFilled', 18, 'var(--danger)') : iconSVG('heart', 18)) + '<span>' + item.likes + '</span></div><div class="bba-item' + (collected ? ' active' : '') + '" onclick="doCollectInterview(' + item.id + ')">' + (collected ? iconSVG('starFilled', 18, 'var(--accent)') : iconSVG('star', 18)) + '<span>' + (collected ? '已收藏' : '收藏') + '</span></div><div class="bba-item" onclick="doShare()">' + iconSVG('share', 18) + '<span>分享</span></div></div>';
  html += '</div>';
  return html;
};

// --- COURSES ---
Views.CourseList = function() {
  var html = '<div class="page-container">' + UI_NavBar('在线课程', true);
  html += '<div class="card-list">';
  courseList.forEach(function(c) {
    html += '<div class="course-item" data-action="nav" data-payload="/courses/' + c.id + '"><img src="' + c.cover + '" class="course-thumb"><div class="course-info"><div class="course-title">' + escapeHtml(c.title) + '</div><div class="course-meta">' + c.teacher + ' · ' + c.duration + ' · ' + c.students + '人订阅</div><div class="course-price">¥' + c.price + '<span class="orig">¥' + c.originalPrice + '</span></div></div></div>';
  });
  html += '</div></div>';
  return html;
};

Views.CourseDetail = function() {
  var c = courseList.find(function(item) { return item.id == Router.params.id; });
  if (!c) return '<div class="page-container">' + UI_NavBar('课程详情', true) + UI_Empty('课程未找到') + '</div>';
  var tabs = [{ key: 'intro', name: '课程介绍' }, { key: 'chapters', name: '课程目录' }, { key: 'teacher', name: '讲师' }];
  var subscribed = isSubscribedCourse(c.id);
  var html = '<div class="page-container no-tab">' + UI_NavBar('课程详情', true, '<span data-action="share-course" data-id="' + c.id + '">' + iconSVG('share', 18, '#fff') + '</span>');
  html += '<img src="' + c.cover + '" style="width:100%;max-height:220px;object-fit:cover">';
  html += '<div style="padding:12px 16px"><h3>' + escapeHtml(c.title) + '</h3><div style="font-size:12px;color:var(--text-lighter);margin:4px 0">' + c.subtitle + '</div>';
  html += '<div style="color:var(--danger);font-size:22px;font-weight:700">¥' + c.price + '<span style="font-size:12px;color:var(--text-lighter);text-decoration:line-through;margin-left:4px">¥' + c.originalPrice + '</span><span style="font-size:12px;color:var(--accent);margin-left:8px">会员价 ¥' + c.memberPrice + '</span></div>';
  html += '<div style="display:flex;gap:16px;margin-top:8px;font-size:11px;color:var(--text-lighter)">' + c.duration + ' · ' + c.students + '人订阅</div></div>';
  html += '<div style="display:flex;gap:8px;padding:4px 16px;flex-wrap:wrap">';
    html += '</div>';
  html += UI_Tabs(tabs, uiState.courseDetailTab);
  if (uiState.courseDetailTab === 'intro') {
    html += '<div class="content-detail"><h4>课程亮点</h4><div><ul style="padding-left:16px;line-height:2">';
    c.highlights.forEach(function(h) { html += '<li>' + escapeHtml(h) + '</li>'; });
    html += '</ul></div><h4>课程简介</h4><div class="body">' + escapeHtml(c.intro) + '</div></div>';
    html += '<div class="comment-section"><div class="cmt-title">学员评价 (' + (c.reviews || 0) + ')</div>';
    if (c.reviewList && c.reviewList.length) {
      c.reviewList.forEach(function(r) {
        html += '<div class="comment-item"><img src="' + r.avatar + '"><div class="cmt-body"><div class="cmt-name">' + escapeHtml(r.user) + '</div><div class="cmt-text">' + escapeHtml(r.content) + '</div><div class="cmt-time">' + r.date + '</div></div></div>';
      });
    }
    html += '<div style="text-align:center;padding:12px 0"><button class="comp-btn primary round" data-action="toggle-course-review" data-course-id="' + c.id + '">写评价</button></div>';
    if (uiState.showCourseReview && uiState.reviewCourseId == c.id) {
      html += '<div style="padding:12px;background:#f9f9f9;border-radius:8px;margin-top:8px">';
      html += '<div style="margin-bottom:8px;text-align:center"><span style="font-weight:600;font-size:14px">我的评价</span></div>';
      html += '<textarea id="course-review-text" placeholder="写下你的评价..." style="width:100%;height:80px;border:1px solid var(--border);border-radius:8px;padding:8px;font-size:13px;resize:vertical;box-sizing:border-box">' + (uiState.reviewText || '') + '</textarea>';
      html += '<div style="text-align:center;margin-top:10px"><button class="comp-btn primary round" data-action="submit-course-review" data-course-id="' + c.id + '">提交评价</button></div>';
      html += '</div>';
    }
    html += '</div>';
  } else if (uiState.courseDetailTab === 'chapters') {
    html += '<div style="padding:0 16px">';
    c.chapters.forEach(function(ch) {
      var isExpanded = uiState.expandedChapters[ch.id] !== false; // default expanded
      html += '<div style="padding:12px 0;border-bottom:1px solid var(--border)"><div style="font-weight:600;font-size:14px;margin-bottom:6px;display:flex;justify-content:space-between;cursor:pointer" data-action="toggle-chapter" data-chapter-id="' + ch.id + '"><span>' + escapeHtml(ch.title) + '</span><span>' + (isExpanded ? iconSVG('arrowDown', 14, '#999') : iconSVG('arrowRight', 14, '#999')) + '</span></div>';
      if (isExpanded) {
        html += '<div>';
        ch.lessons.forEach(function(l) {
          html += '<div style="display:flex;justify-content:space-between;padding:6px 8px;font-size:13px;color:var(--text-light);cursor:pointer" data-action="play-lesson" data-lesson-title="' + escapeHtml(l.title) + '" data-lesson-preview="' + l.preview + '"><span>' + (l.preview ? iconSVG('play', 12, 'var(--success)') + ' ' : iconSVG('play', 12, '#c8c9cc') + ' ') + escapeHtml(l.title) + '</span><span style="color:var(--text-lighter)">' + l.duration + '</span></div>';
        });
        html += '</div>';
      }
      html += '</div>';
    });
    html += '</div>';
  } else if (uiState.courseDetailTab === 'teacher') {
    html += '<div style="text-align:center;padding:20px"><img src="' + c.teacherAvatar + '" style="width:64px;height:64px;border-radius:50%;margin:0 auto"><div style="font-weight:600;margin:8px 0 4px">' + escapeHtml(c.teacher) + '</div><div style="font-size:12px;color:var(--text-lighter)">' + escapeHtml(c.teacherTitle) + '</div></div>';
    html += '<div class="content-detail"><div class="body">' + escapeHtml(c.teacherBio) + '</div></div>';
  }
  html += '<div class="bottom-bar"><span style="flex:1;display:flex;gap:16px;align-items:center"><span onclick="doShare()">' + iconSVG('share', 18, '#999') + '</span><span onclick="doCollectCourse(' + c.id + ')" style="color:' + (AppState.collectedCourses[c.id] ? 'var(--accent)' : '#999') + '">' + (AppState.collectedCourses[c.id] ? iconSVG('starFilled', 18, 'var(--accent)') : iconSVG('star', 18)) + '</span></span>' + (subscribed ? '<button class="comp-btn outline round block">已订阅</button>' : '<button class="comp-btn primary round block" onclick="doSubscribeCourse(' + c.id + ')">立即订阅 ¥' + c.price + '</button>') + '</div>';
  html += '</div>';
  return html;
};

// --- ALUMNI DISTRIBUTION ---
Views.AlumniDistribution = function() {
  var html = '<div class="page-container no-tab">' + UI_NavBar('校友数据', true);

  // ===== 1. 数据概览卡片 =====
  html += '<div class="dist-overview">';
  html += '<div class="dist-stat-item"><div class="dist-stat-num">1,520</div><div class="dist-stat-label">认证校友</div></div>';
  html += '<div class="dist-stat-item"><div class="dist-stat-num">7</div><div class="dist-stat-label">校友社团</div></div>';
  html += '<div class="dist-stat-item"><div class="dist-stat-num">128</div><div class="dist-stat-label">年度活动</div></div>';
  html += '<div class="dist-stat-item"><div class="dist-stat-num">197</div><div class="dist-stat-label">互助次数</div></div>';
  html += '</div>';

  // ===== 2. 年龄分布 =====
  html += '<div class="dist-card">';
  html += '<div class="dist-card-title">年龄分布<span class="dist-card-sub">按10年分段</span></div>';
  html += '<div id="alumni-age-chart" class="dist-chart-box"></div>';
  html += '</div>';

  // ===== 3. 专业分布 =====
  html += '<div class="dist-card">';
  html += '<div class="dist-card-title">专业分布<span class="dist-card-sub">各专业校友占比</span></div>';
  html += '<div id="alumni-major-chart" class="dist-chart-box dist-chart-tall"></div>';
  html += '</div>';

  // ===== 4. 社团人数分布 =====
  html += '<div class="dist-card">';
  html += '<div class="dist-card-title">校友社团分布<span class="dist-card-sub">各社团成员数</span></div>';
  html += '<div id="alumni-group-chart" class="dist-chart-box dist-chart-tall"></div>';
  html += '</div>';

  // ===== 5. 活动频次 =====
  html += '<div class="dist-card">';
  html += '<div class="dist-card-title">活动频次<span class="dist-card-sub">按月统计（次）</span></div>';
  html += '<div id="alumni-activity-chart" class="dist-chart-box"></div>';
  html += '</div>';

  // ===== 6. 互助频次 =====
  html += '<div class="dist-card">';
  html += '<div class="dist-card-title">校友互助频次<span class="dist-card-sub">按月统计（次）</span></div>';
  html += '<div id="alumni-help-chart" class="dist-chart-box"></div>';
  html += '</div>';

  html += '<div class="dist-footer-tip">数据更新于 2026-08-04</div>';
  html += '</div>';
  return html;
};

// --- MEMBER DISTRIBUTION ---
Views.MemberDistribution = function() {
  var html = '<div class="page-container no-tab">' + UI_NavBar('会员数据', true);

  // ===== 1. 数据概览卡片 =====
  html += '<div class="dist-overview">';
  html += '<div class="dist-stat-item"><div class="dist-stat-num dist-stat-num-gold">426</div><div class="dist-stat-label">注册会员</div></div>';
  html += '<div class="dist-stat-item"><div class="dist-stat-num dist-stat-num-gold">183</div><div class="dist-stat-label">会员企业</div></div>';
  html += '<div class="dist-stat-item"><div class="dist-stat-num dist-stat-num-gold">96</div><div class="dist-stat-label">商务活动</div></div>';
  html += '<div class="dist-stat-item"><div class="dist-stat-num dist-stat-num-gold">152</div><div class="dist-stat-label">商务互助</div></div>';
  html += '</div>';

  // ===== 2. 会员企业行业分布 =====
  html += '<div class="dist-card">';
  html += '<div class="dist-card-title">会员企业行业分布<span class="dist-card-sub">各行业企业占比</span></div>';
  html += '<div id="member-industry-chart" class="dist-chart-box dist-chart-tall"></div>';
  html += '</div>';

  // ===== 3. 商务活动类型分布 =====
  html += '<div class="dist-card">';
  html += '<div class="dist-card-title">商务活动类型分布<span class="dist-card-sub">各类型活动数量</span></div>';
  html += '<div id="member-activity-type-chart" class="dist-chart-box"></div>';
  html += '</div>';

  // ===== 4. 商务互助频次 =====
  html += '<div class="dist-card">';
  html += '<div class="dist-card-title">商务互助频次<span class="dist-card-sub">按月统计（次）</span></div>';
  html += '<div id="member-help-chart" class="dist-chart-box"></div>';
  html += '</div>';

  // ===== 5. 商务活动频次 =====
  html += '<div class="dist-card">';
  html += '<div class="dist-card-title">商务活动频次<span class="dist-card-sub">按月统计（次）</span></div>';
  html += '<div id="member-activity-chart" class="dist-chart-box"></div>';
  html += '</div>';

  html += '<div class="dist-footer-tip">数据更新于 2026-08-04</div>';
  html += '</div>';
  return html;
};

// --- MEMBER ORGANIZATION ---
Views.MemberOrganization = function() {
  var html = '<div class="page-container no-tab">' + UI_NavBar('会员组织', true);

  // 合并所有圈子数据为单一列表
  var allItems = [];
  memberOrgList.forEach(function(circle) {
    (circle.items || []).forEach(function(item) {
      allItems.push({ circle: circle, item: item });
    });
  });

  html += '<div style="padding:16px">';
  if (allItems.length) {
    allItems.forEach(function(entry) {
      var circle = entry.circle;
      var item = entry.item;
      var info = item.alumnusInfo || {};
      html += '<div class="org-item-card">';
      // 分类标签
      html += '<div style="font-size:11px;font-weight:600;margin-bottom:6px;color:' + circle.color + '">' + circle.name + '</div>';
      // 校友信息
      html += '<div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">';
      html += '<img src="' + (info.avatar || '') + '" style="width:40px;height:40px;border-radius:50%;object-fit:cover">';
      html += '<div><div style="font-weight:600;font-size:14px">' + escapeHtml(info.name || '') + '</div>';
      html += '<div style="font-size:11px;color:var(--text-lighter)">' + escapeHtml((info.school || '') + ' · ' + (info.major || '')) + '</div></div>';
      html += '</div>';

      // 字段
      html += '<div style="display:flex;flex-wrap:wrap;gap:6px">';
      if (circle.name === '上市公司') {
        html += fieldTag(item.companyShortName);
        html += fieldTag(item.stockCode, '#409eff');
        html += fieldTag(item.roleLabel, '#67c23a');
        html += fieldTag(item.companyStage, item.companyStage === '已上市' ? '#67c23a' : '#e6a23c');
        if (item.businessIntro) html += '<div style="width:100%;font-size:11px;color:var(--text-lighter);margin-top:4px">' + escapeHtml(item.businessIntro) + '</div>';
      } else if (circle.name === '投资机构') {
        html += fieldTag(item.orgName, '#409eff');
        html += fieldTag(item.orgType);
        html += fieldTag(item.position, '#67c23a');
        html += fieldTag(item.investTrack, '#e6a23c');
      } else if (circle.name === '企业高管') {
        html += fieldTag(item.companyName, '#409eff');
        html += fieldTag(item.companyNature);
        html += fieldTag(item.position, '#67c23a');
        html += fieldTag(item.businessBlock);
      } else if (circle.name === '科创项目') {
        html += fieldTag(item.projectName, '#409eff');
        html += fieldTag(item.techTrack);
        html += fieldTag(item.devStage, '#67c23a');
        html += fieldTag(item.financing, '#e6a23c');
      } else if (circle.fields) {
        circle.fields.forEach(function(f) {
          if (item[f]) html += fieldTag(item[f], '#409eff');
        });
      }
      html += '</div></div>';
    });
  } else {
    html += '<div style="padding:40px;text-align:center;color:var(--text-lighter)">暂无数据</div>';
  }
  html += '</div>';

  html += '</div>';
  return html;
};

function fieldTag(val, color) {
  color = color || '#909399';
  if (!val) return '';
  return '<span style="font-size:10px;background:' + color + '15;color:' + color + ';padding:2px 8px;border-radius:10px;white-space:nowrap">' + escapeHtml(val) + '</span>';
}

// --- GROUP BUY ---
Views.GroupBuyList = function() {
  var activeCategory = uiState.groupBuyCategory || 'all';
  var html = '<div class="page-container">' + UI_NavBar('团购专区', true);
  
  // Category tabs - compact single line
  html += '<div class="gb-category-tabs">';
  groupBuyCategories.forEach(function(cat) {
    var isActive = cat.key === activeCategory;
    html += '<div class="gb-cat-item' + (isActive ? ' active' : '') + '" data-action="switch-tab" data-tab="' + cat.key + '">';
    html += '<div class="gb-cat-name">' + escapeHtml(cat.name) + '</div>';
    html += '</div>';
  });
  html += '</div>';
  
  // Filter and render products
  var filteredList = activeCategory === 'all' 
    ? groupBuyList 
    : groupBuyList.filter(function(g) { return g.category === activeCategory; });
  
  html += '<div class="gb-grid">';
  if (filteredList.length === 0) {
    html += '<div style="grid-column:1/-1;padding:40px;text-align:center;color:var(--text-lighter)">该分类暂无商品</div>';
  } else {
    filteredList.forEach(function(g) {
      var catObj = groupBuyCategories.find(function(c) { return c.key === g.category; });
      var catName = catObj ? catObj.name : '';
      html += '<div class="gb-card" data-action="nav" data-payload="/group-buy/' + g.id + '">';
      html += '<div class="gb-cover"><img src="' + g.cover + '">';
      if (catName) {
        html += '<span class="gb-cat-badge">' + catName + '</span>';
      }
      html += '</div>';
      html += '<div class="gb-info"><div class="gb-title">' + escapeHtml(g.title) + '</div><div class="gb-price">¥' + g.price + '<span class="orig">¥' + g.originalPrice + '</span></div><div style="font-size:10px;color:var(--text-lighter);margin-top:2px">已售' + g.soldCount + '件</div></div></div>';
    });
  }
  html += '</div></div>';
  return html;
};

Views.GroupBuyDetail = function() {
  var g = groupBuyList.find(function(item) { return item.id == Router.params.id; });
  if (!g) return '<div class="page-container">' + UI_NavBar('团购详情', true) + UI_Empty('商品未找到') + '</div>';
  var html = '<div class="page-container no-tab">' + UI_NavBar('团购详情', true);
  html += '<div class="comp-swipe" data-swipe="true"><div class="swipe-track">';
  g.images.forEach(function(img) { html += '<div class="swipe-item"><img src="' + img + '" data-action="preview-img" data-src="' + img + '" alt="" style="cursor:pointer"></div>'; });
  html += '</div><div class="swipe-dots">';
  g.images.forEach(function(_, i) { html += '<span class="' + (i === 0 ? 'active' : '') + '" data-dot="' + i + '"></span>'; });
  html += '</div></div>';
  html += '<div style="padding:12px 16px"><h3>' + escapeHtml(g.title) + '</h3>';
  html += '<div style="color:var(--danger);font-size:24px;font-weight:700;margin:8px 0">¥' + g.price + '<span style="font-size:12px;color:var(--text-lighter);text-decoration:line-through;margin-left:6px">¥' + g.originalPrice + '</span></div>';
  html += '<div style="font-size:11px;color:var(--text-lighter)">已售' + g.soldCount + '件</div>';
  html += '<div style="font-size:12px;color:var(--text-lighter);margin-top:4px">供应商：' + escapeHtml(g.supplier) + ' · 截止：' + g.endDate + '</div></div>';
  html += '<div class="content-detail"><h4>商品描述</h4><div class="body">' + escapeHtml(g.desc) + '</div>';
  if (g.specs && g.specs.length) {
    html += '<h4 style="margin-top:10px">规格参数</h4><ul style="padding-left:16px;line-height:2">';
    g.specs.forEach(function(s) { html += '<li>' + escapeHtml(s) + '</li>'; });
    html += '</ul>';
  }
  html += '<h4 style="margin-top:10px">取货地址与联系人</h4><div class="body">' + escapeHtml(g.shipping).replace(/\n/g, '<br>') + '</div></div>';
  html += '<div class="bottom-bar"><div class="comp-stepper"><button data-action="stepper-minus">-</button><input type="number" value="1" id="gb-qty" style="width:40px;text-align:center" readonly><button data-action="stepper-plus">+</button></div><span style="flex:1"></span><button class="comp-btn primary round" onclick="doBuy()">立即购买</button></div>';
  html += '</div>';
  return html;
};

// --- PROFILE ---
Views.Profile = function() {
  var role = AppState.currentRole;
  var isAlumni = roleRank[role] >= 1;
  var isMember = roleRank[role] >= 2;
  var myAvatar = img('myavatar', 100, 100);
  // Stats based on role
  var stats;
  if (isMember) {
    stats = '<div class="stat" style="cursor:pointer" data-action="nav" data-payload="/alumni-card"><div class="num">' + AppState.friendIds.length + '</div><div class="label">好友</div></div><div class="stat" style="cursor:pointer" data-action="nav" data-payload="/profile/my-feed"><div class="num">' + AppState.myFeeds.length + '</div><div class="label">动态</div></div><div class="stat" style="cursor:pointer" data-action="nav" data-payload="/profile/collections"><div class="num">5</div><div class="label">收藏</div></div><div class="stat" style="cursor:pointer" data-action="nav" data-payload="/profile/points"><div class="num">1250</div><div class="label">积分</div></div>';
  } else if (isAlumni) {
    stats = '<div class="stat" style="cursor:pointer" data-action="nav" data-payload="/alumni-card"><div class="num">' + AppState.friendIds.length + '</div><div class="label">好友</div></div><div class="stat" style="cursor:pointer" data-action="nav" data-payload="/profile/my-feed"><div class="num">' + AppState.myFeeds.length + '</div><div class="label">动态</div></div><div class="stat" style="cursor:pointer" data-action="nav" data-payload="/profile/collections"><div class="num">5</div><div class="label">收藏</div></div><div class="stat" style="cursor:pointer" data-action="nav" data-payload="/alumni-group"><div class="num">2</div><div class="label">社团</div></div>';
  } else {
    stats = '<div class="stat" style="cursor:pointer" data-action="nav" data-payload="/profile/group-buy"><div class="num">2</div><div class="label">订单</div></div><div class="stat" style="cursor:pointer" data-action="nav" data-payload="/profile/collections"><div class="num">3</div><div class="label">收藏</div></div><div class="stat" style="cursor:pointer" data-action="nav" data-payload="/courses"><div class="num">1</div><div class="label">课程</div></div>';
  }

  var html = '<div class="page-container">';
  html += '<div class="profile-header"><div class="profile-card">';

  // 会员到期提醒（仅商务会员/服务机构）
  var memberExpiry = '';
  if (isMember) {
    var expiryDate = '2026-12-31';
    var today = new Date();
    var expDate = new Date(expiryDate);
    var daysLeft = Math.ceil((expDate - today) / (1000 * 60 * 60 * 24));
    var expColor, expText;
    if (daysLeft < 0) {
      expColor = '#ee0a24'; expText = '已过期';
    } else if (daysLeft <= 30) {
      expColor = '#ff976a'; expText = '剩余' + daysLeft + '天 · ' + expiryDate;
    } else {
      expColor = '#07c160'; expText = '有效期至 ' + expiryDate;
    }
    memberExpiry = '<span style="display:inline-flex;align-items:center;gap:3px;margin-left:6px;padding:2px 8px;background:' + expColor + '14;color:' + expColor + ';border-radius:10px;font-size:11px;font-weight:500;cursor:pointer" data-action="nav" data-payload="/profile/member-recharge">' + iconSVG('clock', 11, expColor) + expText + '</span>';
  }

  html += '<div class="avatar-row"><img src="' + myAvatar + '" data-action="nav" data-payload="/profile/edit" style="cursor:pointer"><div class="info"><div class="name">演示用户 <span data-action="show-role-popup">' + UI_Tag(role, 'primary') + '</span>' + memberExpiry + '</div><div style="font-size:11px;color:var(--text-lighter);margin-top:2px">自动化学院 · 2005级 · 北京</div></div><span data-action="nav" data-payload="/profile/settings">' + iconSVG('settings', 20, '#999') + '</span></div>';
  html += '<div class="stats">' + stats + '</div></div></div>';
  // Exchange requests (for alumni)
  if (isAlumni && AppState.incomingRequests.length > 0) {
    html += '<div style="padding:12px 16px 0"><div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">' + iconSVG('card', 18, '#6fa4cf') + '<span style="font-weight:600;font-size:14px">名片交换请求</span>' + UI_Tag(AppState.incomingRequests.length + '', 'danger') + '</div>';
    AppState.incomingRequests.forEach(function(rid) {
      var reqAlumni = alumniList.find(function(a) { return a.id === rid; });
      if (reqAlumni) {
        html += '<div class="exchange-card"><div style="display:flex;align-items:center;flex:1;cursor:pointer" data-action="nav" data-payload="/alumni-card/' + rid + '"><img src="' + reqAlumni.avatar + '" style="cursor:pointer"><div class="ex-info"><div class="ex-name">' + escapeHtml(reqAlumni.name) + '</div><div class="ex-school">' + reqAlumni.school + ' · ' + reqAlumni.year + '</div></div></div><div class="ex-btns"><span data-action="accept-exchange" data-id="' + rid + '">' + UI_Button('接受', 'primary', 'small', true) + '</span><span data-action="reject-exchange" data-id="' + rid + '">' + UI_Button('拒绝', 'danger', 'small', true) + '</span></div></div>';
      }
    });
    html += '</div>';
  }
  // 校友认证入口（仅普通用户）
  if (!isAlumni) {
    html += '<div class="promo-card" style="background:linear-gradient(135deg,#eef4fb,#e3eefc)" data-action="nav" data-payload="/profile/edit"><div class="promo-icon">🎓</div><div class="promo-text"><div class="pt">认证为校友</div><div class="ps">填写校友信息，认证后解锁校友名片、动态、互助等功能</div></div>' + iconSVG('arrowRight', 16, '#6fa4cf') + '</div>';
  }
  // Member promo (only for 认证校友, not 普通用户)
  if (isAlumni && !isMember) {
    html += '<div class="promo-card" data-action="nav" data-payload="/profile/member-edit"><div class="promo-icon">⭐</div><div class="promo-text"><div class="pt">升级为商务会员</div><div class="ps">填写企业信息，支付信息服务费后完成升级</div></div>' + iconSVG('arrowRight', 16, '#dabb6e') + '</div>';
  }
  // Service grid
  html += '<div class="service-grid">';
  html += '</div>';

  // Category cards
  var categories = [
    { name: '我的内容', desc: '活动/社团', path: '/profile/my-content', icon: 'edit', color: '#6fa4cf' },
    { name: '学习消费', desc: '课程/收藏/订单', path: '/profile/learning', icon: 'book', color: '#dabb6e' },
    { name: '设置', desc: '资料/客服/切换角色', path: '/profile/settings', icon: 'settings', color: '#999' }
  ];
  if (isAlumni) {
    categories.splice(1, 0, { name: '互助与响应', desc: '求助/响应', path: '/profile/help-center', icon: 'help', color: '#07c160' });
  }

  html += '<div style="padding:16px">';
  categories.forEach(function(cat, index) {
    var isLast = index === categories.length - 1;
    html += '<div class="category-card" data-action="nav" data-payload="' + cat.path + '"' + (isLast ? '' : ' style="margin-bottom:12px"') + '>';
    html += '<div style="width:48px;height:48px;border-radius:12px;background:' + cat.color + '20;display:flex;align-items:center;justify-content:center;margin-right:16px">';
    html += iconSVG(cat.icon, 22, cat.color);
    html += '</div>';
    html += '<div style="flex:1">';
    html += '<div style="font-size:16px;font-weight:600;color:var(--text)">' + cat.name + '</div>';
    html += '<div style="font-size:12px;color:var(--text-light);margin-top:2px">' + cat.desc + '</div>';
    html += '</div>';
    html += iconSVG('arrowRight', 16, '#c8c9cc');
    html += '</div>';
  });
  html += '</div>';

  html += '</div>';
  return html;
};

Views.ProfileSettings = function() {
  var appVersion = 'v1.0.0';
  var buildDate = '2026-06-25';
  var html = '<div class="page-container">' + UI_NavBar('设置', true);

  html += '<div style="padding:12px 0">';

  // 系统信息
  html += '<div style="font-size:13px;font-weight:600;color:var(--text-light);padding:12px 20px 6px">系统信息</div>';
  html += '<div class="comp-cell-group inset">';
  html += '<div class="comp-cell"><div class="cell-body"><div class="cell-title">当前版本</div></div><span class="cell-value" style="color:var(--text-light)">' + appVersion + '</span></div>';
  html += '<div class="comp-cell"><div class="cell-body"><div class="cell-title">构建日期</div></div><span class="cell-value" style="color:var(--text-light)">' + buildDate + '</span></div>';
  html += '<div class="comp-cell" data-action="toast" data-payload="已是最新版本"><div class="cell-body"><div class="cell-title">检查更新</div></div><span class="cell-arrow">' + iconSVG('arrowRight', 14, '#c8c9cc') + '</span></div>';
  html += '</div>';

  // 账户管理
  html += '<div style="font-size:13px;font-weight:600;color:var(--text-light);padding:12px 20px 6px">账户管理</div>';
  html += '<div class="comp-cell-group inset">';
  html += '<div class="comp-cell" data-action="logout"><div class="cell-body"><div class="cell-title" style="color:#ee0a24">退出登录</div></div><span class="cell-arrow">' + iconSVG('arrowRight', 14, '#c8c9cc') + '</span></div>';
  html += '</div>';

  // 开发者选项
  html += '<div style="font-size:13px;font-weight:600;color:var(--text-light);padding:12px 20px 6px">开发者选项</div>';
  html += '<div class="comp-cell-group inset">';
  html += '<div class="comp-cell" data-action="reset-data"><div class="cell-body"><div class="cell-title" style="color:#ff976a">重置演示数据</div></div><span class="cell-arrow">' + iconSVG('arrowRight', 14, '#c8c9cc') + '</span></div>';
  html += '</div>';

  html += '</div></div>';
  return html;
};

Views.ProfileEdit = function() {
  var role = AppState.currentRole;
  var isAlumni = roleRank[role] >= 1;
  var pageTitle = isAlumni ? '编辑校友信息' : '申请校友认证';
  var btnText = isAlumni ? '保存' : '提交审核';

  var d = isAlumni ? {
    avatar: img('myavatar', 100, 100),
    name: '赵明辉', gender: '男', birth: '1987-05', phone: '138****8888', email: 'zhaomh@example.com',
    school: '北京理工大学', dept: '自动化学院', major: '控制科学与工程', year: '2005级', degree: '硕士',
    hometown: '江苏南京', city: '北京', tags: '创业,人工智能,智能制造', hobbies: '篮球,摄影,阅读', intro: '', degreeCertImg: img('degcert', 400, 300), gradCertImg: img('gradcert', 400, 300)
  } : {
    avatar: '', name: '', gender: '', birth: '', phone: '', email: '',
    school: '', dept: '', major: '', year: '', degree: '',
    hometown: '', city: '', tags: '', hobbies: '', intro: '', degreeCertImg: '', gradCertImg: ''
  };

  function genderField(val) {
    var opts = ['男', '女'];
    var sel = opts.map(function(o) { return '<option value="' + o + '"' + (o === val ? ' selected' : '') + '>' + o + '</option>'; }).join('');
    return '<div class="comp-field"><span class="field-label required">性别</span><select class="pe-select">'
      + '<option value="" disabled' + (val ? '' : ' selected') + '>请选择性别</option>' + sel + '</select></div>';
  }
  function degreeField(val) {
    var opts = ['本科', '硕士', '博士', '其它'];
    var sel = opts.map(function(o) { return '<option value="' + o + '"' + (o === val ? ' selected' : '') + '>' + o + '</option>'; }).join('');
    return '<div class="comp-field"><span class="field-label required">学历层次</span><select class="pe-select">'
      + '<option value="" disabled' + (val ? '' : ' selected') + '>请选择学历层次</option>' + sel + '</select></div>';
  }
  function avatarField(val) {
    var preview = val
      ? '<img src="' + val + '" id="pe-avatar-preview" style="width:60px;height:60px;border-radius:50%;object-fit:cover;border:1px solid #ebedf0">'
      : '<div id="pe-avatar-preview" style="width:60px;height:60px;border-radius:50%;background:#f5f5f5;display:flex;align-items:center;justify-content:center;border:1px dashed #c8c9cc;color:#c8c9cc;font-size:24px">+</div>';
    return '<div class="comp-field" style="align-items:center"><span class="field-label required">上传头像</span>'
      + '<label style="display:flex;align-items:center;gap:8px;cursor:pointer;margin-left:auto">'
      + preview
      + '<input type="file" accept="image/*" id="pe-avatar-input" style="display:none">'
      + '</label></div>';
  }
  function certPhotoField(label, id, val) {
    var preview = val
      ? '<img src="' + val + '" id="' + id + '-preview" style="width:88px;height:64px;border-radius:6px;object-fit:cover;border:1px solid #ebedf0">'
      : '<div id="' + id + '-preview" style="width:88px;height:64px;border-radius:6px;background:#f5f5f5;display:flex;align-items:center;justify-content:center;border:1px dashed #c8c9cc;color:#c8c9cc;font-size:20px">+</div>';
    return '<div class="comp-field" style="align-items:center"><span class="field-label required">' + label + '</span>'
      + '<label style="display:flex;align-items:center;gap:8px;cursor:pointer;margin-left:auto">'
      + preview
      + '<input type="file" accept="image/*" id="' + id + '-input" style="display:none">'
      + '</label></div>';
  }

  var html = '<div class="page-container">' + UI_NavBar(pageTitle, true);
  html += '<div style="padding:8px 0">';

  // 校友认证审核状态条（仅对普通用户展示）
  if (!isAlumni && AppState.alumniCertStatus) {
    if (AppState.alumniCertStatus === 'pending') {
      html += '<div style="margin:12px 16px;padding:14px 16px;background:#fffbe6;border:1px solid #faecd8;border-radius:10px;display:flex;align-items:flex-start;gap:10px">' +
        iconSVG('clock', 18, '#e6a23c') +
        '<div><div style="font-size:14px;font-weight:600;color:#b88230">认证审核中</div>' +
        '<div style="font-size:12px;color:#b88230;margin-top:4px;line-height:1.6">您的校友认证申请已提交，平台正在审核中，一般 1-3 个工作日完成，请耐心等待。</div></div></div>';
    } else if (AppState.alumniCertStatus === 'rejected') {
      html += '<div style="margin:12px 16px;padding:14px 16px;background:#fef0f0;border:1px solid #fbc4c4;border-radius:10px;display:flex;align-items:flex-start;gap:10px">' +
        iconSVG('alertCircle', 18, '#f56c6c') +
        '<div><div style="font-size:14px;font-weight:600;color:#c45656">认证未通过</div>' +
        '<div style="font-size:12px;color:#c45656;margin-top:4px;line-height:1.6"><span style="font-weight:600">驳回原因：</span>' + escapeHtml(AppState.alumniCertRejectReason || '认证信息不符，请重新提交') + '</div></div></div>';
    }
  }

  // 个人基础信息
  html += '<div style="font-size:13px;font-weight:600;color:var(--text-light);padding:12px 20px 6px">个人基础信息 <span style="color:#ee0a24;font-size:11px;font-weight:400">*必填</span></div>';
  html += '<div class="comp-cell-group inset">';
  html += avatarField(d.avatar);
  html += UI_Field('姓名', 'text', '请输入姓名', d.name, true);
  html += genderField(d.gender);
  html += UI_Field('出生年月', 'text', 'YYYY-MM', d.birth, true);
  html += UI_Field('电话', 'tel', '请输入电话', d.phone, true);
  html += UI_Field('邮箱', 'text', '请输入邮箱', d.email, true);
  html += '</div>';

  // 校友认证信息
  html += '<div style="font-size:13px;font-weight:600;color:var(--text-light);padding:12px 20px 6px">校友认证信息 <span style="color:#ee0a24;font-size:11px;font-weight:400">*必填</span></div>';
  html += '<div class="comp-cell-group inset">';
  html += UI_Field('学校', 'text', '请输入学校', d.school, true);
  html += UI_Field('院系', 'text', '请输入院系', d.dept, true);
  html += UI_Field('专业', 'text', '请输入专业', d.major, true);
  html += UI_Field('入学年份', 'text', '例如：2005级', d.year, true);
  html += degreeField(d.degree);
  html += certPhotoField('学位证照片', 'pe-degree-cert', d.degreeCertImg);
  html += certPhotoField('毕业证照片', 'pe-grad-cert', d.gradCertImg);
  html += '</div>';

  // 其它信息
  html += '<div style="font-size:13px;font-weight:600;color:var(--text-light);padding:12px 20px 6px">其它信息 <span style="font-size:11px;font-weight:400;color:var(--text-lighter)">（选填）</span></div>';
  html += '<div class="comp-cell-group inset">';
  html += UI_Field('籍贯', 'text', '请输入籍贯', d.hometown);
  html += UI_Field('现住城市', 'text', '请输入现住城市', d.city);
  html += UI_Field('个人标签', 'text', '用逗号分隔', d.tags);
  html += UI_Field('兴趣爱好', 'text', '用逗号分隔，如：篮球,摄影', d.hobbies);
  html += UI_Field('个人简介', 'textarea', '简单介绍一下自己...', d.intro);
  html += '</div>';

  html += '<div style="padding:20px 16px"><span data-action="submit-profile-edit" data-role="' + role + '">' + UI_Button(btnText, 'primary', '', true, true) + '</span></div>';
  html += '</div></div>';
  return html;
};

Views.ProfileMemberEdit = function() {
  var role = AppState.currentRole;
  var isMember = roleRank[role] >= 2;

  // 初始化状态
  if (!uiState.selectedCompanies) uiState.selectedCompanies = [];
  if (!uiState.selectedProducts) uiState.selectedProducts = [];

  // ============================
  // 已是商务会员：展示已维护的商务信息
  // ============================
  if (isMember) {
    // 如果没有已维护的数据，用模拟数据填充（演示用）
    if (uiState.selectedCompanies.length === 0) {
      uiState.selectedCompanies = [
        { logo: img('logo1', 200, 200), name: '北京智控科技有限公司', industry: '人工智能', address: '北京市海淀区中关村软件园', position: '创始人/CEO', joinDate: '2018年6月', intro: '专注于工业智能控制领域，为制造企业提供AI驱动的智能控制解决方案。' },
        { logo: img('logo2', 200, 200), name: '北京康源生物科技有限公司', industry: '生物医药', address: '北京市昌平区生命科学园', position: '联合创始人', joinDate: '2020年3月', intro: '专注于创新药物研发，以肿瘤免疫治疗为核心方向。' }
      ];
    }
    if (uiState.selectedProducts.length === 0) {
      uiState.selectedProducts = [
        { cover: img('prod1', 400, 300), name: '智控工业AI平台', intro: '基于深度学习的工业过程控制和优化平台', features: ['降低能耗15%', '提升产能20%', '实时监控与预警', '兼容主流PLC/DCS系统'], applications: '化工、钢铁、水泥、电力等流程工业领域' },
        { cover: img('prod2', 400, 300), name: '新型抗肿瘤药物K-101', intro: '针对非小细胞肺癌的新型靶向药物', features: ['高选择性靶向', '低毒副作用', '口服给药', '联合用药潜力'], applications: '非小细胞肺癌（NSCLC）二线治疗' }
      ];
    }

    var html = '<div class="page-container" style="background:#f5f6fa">' + UI_NavBar('商务信息', true);

    // 会员状态卡
    html += '<div style="margin:12px 16px;padding:16px;background:linear-gradient(135deg,#fff8e1,#fef3c7);border-radius:14px;border:1px solid #f0d9a3">';
    html += '<div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">';
    html += '<div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#dabb6e,#e8c987);display:flex;align-items:center;justify-content:center">' + iconSVG('award', 18, '#fff') + '</div>';
    html += '<div><div style="font-size:15px;font-weight:700;color:#5c4510">商务会员</div><div style="font-size:11px;color:#9a7a3a">有效期至 2026-12-31</div></div>';
    html += '</div>';
    html += '<div style="font-size:12px;color:#7a5d20;line-height:1.6">您已认证为商务会员，以下为您维护的商务信息。如需修改，请联系平台客服或重新提交审核。</div>';
    html += '</div>';

    // 关联企业
    html += '<div style="margin:0 16px 12px;background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.04)">';
    html += '<div style="padding:14px 16px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #f5f5f5">';
    html += '<div style="display:flex;align-items:center;gap:8px">';
    html += '<div style="width:4px;height:16px;background:var(--primary);border-radius:2px"></div>';
    html += '<span style="font-size:15px;font-weight:700;color:#333">关联企业</span>';
    html += '<span style="font-size:12px;color:#999">' + uiState.selectedCompanies.length + ' 家</span>';
    html += '</div>';
    html += '</div>';
    uiState.selectedCompanies.forEach(function(c) {
      html += '<div style="padding:14px 16px;border-bottom:1px solid #fafafa">';
      html += '<div style="display:flex;align-items:center;gap:12px;margin-bottom:10px">';
      html += '<img src="' + c.logo + '" style="width:48px;height:48px;border-radius:10px;flex-shrink:0">';
      html += '<div style="flex:1;min-width:0">';
      html += '<div style="font-size:15px;font-weight:700;color:#222;margin-bottom:4px">' + escapeHtml(c.name) + '</div>';
      html += '<div style="font-size:13px;color:#666">' + escapeHtml(c.position) + (c.joinDate ? ' · ' + escapeHtml(c.joinDate) : '') + '</div>';
      html += '</div></div>';
      html += '<div style="display:flex;flex-wrap:wrap;gap:10px;font-size:12px;color:#999">';
      html += '<span style="display:flex;align-items:center;gap:4px">' + iconSVG('location', 11, '#bbb') + escapeHtml(c.address) + '</span>';
      html += '<span style="display:inline-block;padding:2px 8px;background:#e3f2fd;color:#1976d2;border-radius:4px;font-size:11px">' + escapeHtml(c.industry) + '</span>';
      html += '</div></div>';
    });
    html += '</div>';

    // 关联产品
    html += '<div style="margin:0 16px 12px;background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.04)">';
    html += '<div style="padding:14px 16px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #f5f5f5">';
    html += '<div style="display:flex;align-items:center;gap:8px">';
    html += '<div style="width:4px;height:16px;background:#07c160;border-radius:2px"></div>';
    html += '<span style="font-size:15px;font-weight:700;color:#333">关联产品</span>';
    html += '<span style="font-size:12px;color:#999">' + uiState.selectedProducts.length + ' 款</span>';
    html += '</div>';
    html += '</div>';
    uiState.selectedProducts.forEach(function(p) {
      html += '<div style="padding:14px 16px;border-bottom:1px solid #fafafa;display:flex;gap:12px">';
      html += '<img src="' + p.cover + '" style="width:72px;height:54px;border-radius:8px;flex-shrink:0;object-fit:cover">';
      html += '<div style="flex:1;min-width:0">';
      html += '<div style="font-size:14px;font-weight:600;color:#222;margin-bottom:4px">' + escapeHtml(p.name) + '</div>';
      html += '<div style="font-size:12px;color:#888;line-height:1.5;margin-bottom:4px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">' + escapeHtml(p.intro) + '</div>';
      if (p.features && p.features.length) {
        html += '<div style="display:flex;flex-wrap:wrap;gap:4px">';
        p.features.slice(0, 3).forEach(function(f) {
          html += '<span style="padding:1px 6px;background:#e8f5e9;color:#4caf50;border-radius:3px;font-size:10px">' + escapeHtml(f) + '</span>';
        });
        html += '</div>';
      }
      html += '</div></div>';
    });
    html += '</div>';

    html += '</div>';
    return html;
  }

  // ============================
  // 未认证会员：升级表单
  // ============================
  var html = '<div class="page-container">' + UI_NavBar('升级商务会员', true);

  // 升级审核状态条（仅在审核中/驳回时展示）
  if (AppState.bizUpgradeStatus === 'pending') {
    html += '<div style="margin:12px 16px;padding:14px 16px;background:#fffbe6;border:1px solid #faecd8;border-radius:10px;display:flex;align-items:flex-start;gap:10px">' +
      iconSVG('clock', 18, '#e6a23c') +
      '<div><div style="font-size:14px;font-weight:600;color:#b88230">升级审核中</div>' +
      '<div style="font-size:12px;color:#b88230;margin-top:4px;line-height:1.6">您的商务会员升级申请已提交，平台正在审核中，一般 1-3 个工作日完成，请耐心等待。</div></div></div>';
  } else if (AppState.bizUpgradeStatus === 'rejected') {
    html += '<div style="margin:12px 16px;padding:14px 16px;background:#fef0f0;border:1px solid #fbc4c4;border-radius:10px;display:flex;align-items:flex-start;gap:10px">' +
      iconSVG('alertCircle', 18, '#f56c6c') +
      '<div><div style="font-size:14px;font-weight:600;color:#c45656">升级未通过</div>' +
      '<div style="font-size:12px;color:#c45656;margin-top:4px;line-height:1.6"><span style="font-weight:600">驳回原因：</span>' + escapeHtml(AppState.bizUpgradeRejectReason || '提交材料不完整，请重新提交') + '</div></div></div>';
  }

  // 顶部说明
  html += '<div style="padding:16px;background:linear-gradient(135deg,#fff8e1,#fff3cd);margin:0;border-bottom:1px solid #f0d9a3">';
  html += '<div style="display:flex;align-items:flex-start;gap:8px">';
  html += '<div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:#dabb6e;display:flex;align-items:center;justify-content:center">' + iconSVG('award', 14, '#fff') + '</div>';
  html += '<div>';
  html += '<div style="font-size:14px;font-weight:600;color:#7a5d20;margin-bottom:4px">升级商务会员</div>';
  html += '<div style="font-size:12px;color:#9a7a3a;line-height:1.6">作为认证校友，您只需提交关联的商务信息（关联企业 + 关联产品），即可申请升级为商务会员，享受更多权益。</div>';
  html += '</div></div></div>';

  // 关联企业部分
  html += '<div style="margin-top:12px;background:#fff">';
  html += '<div style="padding:12px 16px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--border)">';
  html += '<div style="font-size:15px;font-weight:600;color:#333">关联企业</div>';
  html += '<button class="comp-btn primary small" data-action="add-company">' + iconSVG('plus', 12, '#fff') + ' 添加企业</button>';
  html += '</div>';

  // 显示已添加的企业
  if (uiState.selectedCompanies.length === 0) {
    html += '<div style="padding:40px 20px;text-align:center;color:#999;font-size:13px">';
    html += '<div style="margin-bottom:8px">' + iconSVG('building', 32, '#ddd') + '</div>';
    html += '<div>请添加您关联的企业</div>';
    html += '<div style="font-size:12px;color:#bbb;margin-top:4px">建议关联至少1家企业</div>';
    html += '</div>';
  } else {
    html += '<div style="padding:8px">';
    uiState.selectedCompanies.forEach(function(c, idx) {
      html += '<div style="background:#fafafa;border-radius:8px;padding:12px;margin-bottom:8px;display:flex;align-items:center;gap:10px">';
      html += '<img src="' + c.logo + '" style="width:44px;height:44px;border-radius:6px;flex-shrink:0;object-fit:cover">';
      html += '<div style="flex:1;min-width:0">';
      html += '<div style="font-size:14px;font-weight:600;color:#333;margin-bottom:2px">' + escapeHtml(c.name) + '</div>';
      html += '<div style="font-size:12px;color:#999">' + escapeHtml(c.position || '') + (c.joinDate ? ' · ' + escapeHtml(c.joinDate) : '') + '</div>';
      html += '</div>';
      html += '<button data-action="remove-company" data-index="' + idx + '" style="background:none;border:none;color:#f56c6c;cursor:pointer;padding:6px">' + iconSVG('close', 16, '#f56c6c') + '</button>';
      html += '</div>';
    });
    html += '</div>';
  }
  html += '</div>';

  // 关联产品部分
  html += '<div style="margin-top:12px;background:#fff">';
  html += '<div style="padding:12px 16px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--border)">';
  html += '<div style="font-size:15px;font-weight:600;color:#333">关联产品</div>';
  html += '<button class="comp-btn primary small" data-action="add-product">' + iconSVG('plus', 12, '#fff') + ' 添加产品</button>';
  html += '</div>';

  // 显示已添加的产品
  if (uiState.selectedProducts.length === 0) {
    html += '<div style="padding:40px 20px;text-align:center;color:#999;font-size:13px">';
    html += '<div style="margin-bottom:8px">' + iconSVG('package', 32, '#ddd') + '</div>';
    html += '<div>请添加您关联的产品</div>';
    html += '<div style="font-size:12px;color:#bbb;margin-top:4px">建议关联至少1款产品</div>';
    html += '</div>';
  } else {
    html += '<div style="padding:8px">';
    uiState.selectedProducts.forEach(function(p, idx) {
      html += '<div style="background:#fafafa;border-radius:8px;padding:12px;margin-bottom:8px;display:flex;align-items:center;gap:10px">';
      html += '<img src="' + p.cover + '" style="width:44px;height:44px;border-radius:6px;flex-shrink:0;object-fit:cover">';
      html += '<div style="flex:1;min-width:0">';
      html += '<div style="font-size:14px;font-weight:600;color:#333;margin-bottom:2px">' + escapeHtml(p.name) + '</div>';
      html += '<div style="font-size:12px;color:#999;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + escapeHtml(p.intro.substring(0, 30)) + (p.intro.length > 30 ? '...' : '') + '</div>';
      html += '</div>';
      html += '<button data-action="remove-product" data-index="' + idx + '" style="background:none;border:none;color:#f56c6c;cursor:pointer;padding:6px">' + iconSVG('close', 16, '#f56c6c') + '</button>';
      html += '</div>';
    });
    html += '</div>';
  }
  html += '</div>';

  // 提交按钮区域
  html += '<div style="padding:20px 16px;margin-top:12px">';
  html += '<button class="comp-btn primary block" data-action="submit-member-info">下一步：支付信息服务费</button>';
  html += '<div style="margin-top:10px;font-size:12px;color:#999;text-align:center">提交企业信息后需支付信息服务费，支付完成后自动进入后台审核</div>';
  html += '</div>';

  html += '<div style="height:40px"></div>';
  html += '</div>';
  return html;
};

// ================================================================
// 添加关联企业表单
// ================================================================
Views.AddCompanyForm = function() {
  // 编辑模式：从uiState.editingCompanyIndex获取索引
  var editIndex = uiState.editingCompanyIndex;
  var isEdit = editIndex !== undefined && editIndex !== null;
  var company = isEdit ? (uiState.selectedCompanies[editIndex] || {}) : {};

  var html = '<div class="page-container">' + UI_NavBar(isEdit ? '编辑企业' : '添加关联企业', true);

  html += '<div style="background:#fff;padding:16px">';

  // 企业LOGO上传
  html += '<div style="margin-bottom:20px">';
  html += '<div style="font-size:14px;color:#333;margin-bottom:8px">企业LOGO <span style="color:#f56c6c">*</span></div>';
  html += '<div style="display:flex;align-items:center;gap:12px">';
  html += '<img id="company-logo-preview" src="' + (company.logo || img('default-company', 200, 200)) + '" style="width:60px;height:60px;border-radius:8px;border:1px solid var(--border);object-fit:cover">';
  html += '<button class="comp-btn plain small" data-action="upload-company-logo">选择图片</button>';
  html += '<input type="file" id="company-logo-input" accept="image/*" style="display:none">';
  html += '</div></div>';

  // 企业名称
  html += UI_Field('企业名称', 'text', '请输入企业全称', company.name, true);

  // 所属行业
  html += UI_Field('所属行业', 'text', '如：人工智能、生物医药', company.industry, true);

  // 企业地址
  html += UI_Field('企业地址', 'text', '请输入企业详细地址', company.address, true);

  // 任职信息分组
  html += '<div style="margin:16px 0;padding-top:16px;border-top:1px solid var(--border)">';
  html += '<div style="font-size:14px;font-weight:600;color:#333;margin-bottom:12px">您的任职信息</div>';

  // 职位
  html += UI_Field('职位/职务', 'text', '如：创始人/CEO、CTO、产品总监', company.position, true);

  // 入职时间
  html += UI_Field('入职时间', 'text', '如：2020年6月（可选）', company.joinDate, false);

  html += '</div>';

  // 企业简介
  html += UI_Field('企业简介', 'textarea', '介绍企业的主营业务、发展历程、核心优势等...', company.intro, true);

  html += '</div>';

  // 保存按钮
  html += '<div style="padding:16px">';
  html += '<button class="comp-btn primary block" data-action="save-company">' + (isEdit ? '保存修改' : '添加企业') + '</button>';
  html += '</div>';

  html += '<div style="height:40px"></div>';
  html += '</div>';
  return html;
};

// ================================================================
// 添加关联产品表单
// ================================================================
Views.AddProductForm = function() {
  var editIndex = uiState.editingProductIndex;
  var isEdit = editIndex !== undefined && editIndex !== null;
  var product = isEdit ? (uiState.selectedProducts[editIndex] || {}) : {};

  var html = '<div class="page-container">' + UI_NavBar(isEdit ? '编辑产品' : '添加关联产品', true);

  html += '<div style="background:#fff;padding:16px">';

  // 产品图上传
  html += '<div style="margin-bottom:20px">';
  html += '<div style="font-size:14px;color:#333;margin-bottom:8px">产品图 <span style="color:#f56c6c">*</span></div>';
  html += '<div style="display:flex;align-items:center;gap:12px">';
  html += '<img id="product-cover-preview" src="' + (product.cover || img('default-product', 400, 300)) + '" style="width:80px;height:60px;border-radius:6px;border:1px solid var(--border);object-fit:cover">';
  html += '<button class="comp-btn plain small" data-action="upload-product-cover">选择图片</button>';
  html += '<input type="file" id="product-cover-input" accept="image/*" style="display:none">';
  html += '</div></div>';

  // 产品名称
  html += UI_Field('产品名称', 'text', '请输入产品名称', product.name, true);

  // 产品简介
  html += UI_Field('产品简介', 'textarea', '简要介绍产品的功能和特点...', product.intro, true);

  // 核心功能
  html += UI_Field('核心功能', 'textarea', '列举产品的核心功能，一行一个...', product.features ? product.features.join('\n') : '', true);

  // 应用领域
  html += UI_Field('应用领域', 'text', '如：工业制造、医疗健康、智慧城市', product.applications, true);

  html += '</div>';

  // 保存按钮
  html += '<div style="padding:16px">';
  html += '<button class="comp-btn primary block" data-action="save-product">' + (isEdit ? '保存修改' : '添加产品') + '</button>';
  html += '</div>';

  html += '<div style="height:40px"></div>';
  html += '</div>';
  return html;
};

Views.ProfileSubscribe = function() {
  var html = '<div class="page-container">' + UI_NavBar('订阅课程', true);
  var subs = courseList.filter(function(c) { return AppState.subscribedCourses.indexOf(c.id) >= 0; });
  if (!subs.length) { html += UI_Empty('暂无订阅课程'); }
  else {
    html += '<div class="card-list">';
    subs.forEach(function(c) {
      html += '<div class="comp-cell" data-action="nav" data-payload="/courses/' + c.id + '"><div class="cell-body"><div class="cell-title">' + escapeHtml(c.title) + '</div><div class="cell-label">' + c.teacher + ' · ' + c.duration + '</div></div><span class="cell-arrow">' + iconSVG('arrowRight', 14, '#c8c9cc') + '</span></div>';
    });
    html += '</div>';
  }
  html += '</div>';
  return html;
};

Views.ProfileGroupBuy = function() {
  var html = '<div class="page-container">' + UI_NavBar('团购订单', true);
  var orders = groupBuyList.filter(function(g) { return AppState.groupBuyOrders.indexOf(g.id) >= 0; });
  if (!orders.length) { html += UI_Empty('暂无团购订单'); }
  else {
    html += '<div class="card-list">';
    orders.forEach(function(g) {
      html += '<div class="comp-cell" data-action="nav" data-payload="/group-buy/' + g.id + '"><img src="' + g.cover + '" style="width:40px;height:40px;border-radius:4px;margin-right:10px;object-fit:cover"><div class="cell-body"><div class="cell-title">' + escapeHtml(g.title) + '</div><div class="cell-label">¥' + g.price + '</div></div><span class="cell-arrow">' + iconSVG('arrowRight', 14, '#c8c9cc') + '</span></div>';
    });
    html += '</div>';
  }
  html += '</div>';
  return html;
};

Views.ProfileFavorites = function() {
  var html = '<div class="page-container">' + UI_NavBar('我的好友', true);
  var friends = alumniList.filter(function(a) { return AppState.friendIds.indexOf(a.id) >= 0; });
  if (!friends.length) { html += UI_Empty('暂无好友'); }
  else {
    html += '<div class="card-list">';
    friends.forEach(function(a) {
      html += '<div class="comp-cell"><img src="' + a.avatar + '" style="width:40px;height:40px;border-radius:50%;margin-right:10px"><div class="cell-body"><div class="cell-title">' + escapeHtml(a.name) + '</div><div class="cell-label">' + a.school + ' · ' + a.major + ' · ' + a.year + '</div></div></div>';
    });
    html += '</div>';
  }
  html += '</div>';
  return html;
};

Views.ProfileActivities = function() {
  var tabs = [{ key: 'registered', name: '我报名的' }, { key: 'published', name: '我发布的' }];
  var html = '<div class="page-container">' + UI_NavBar('我的活动', true) + UI_Tabs(tabs, uiState.profileActTab);
  
  if (uiState.profileActTab === 'registered') {
    var regActs = activityList.filter(function(a) {
      return AppState.registeredActivities.indexOf(a.id) >= 0;
    });
    
    var registrations = AppState.activityRegistrations.filter(function(r) {
      return regActs.some(function(a) { return a.id == r.activityId; });
    });
    
    if (!regActs.length) {
      html += UI_Empty('暂无报名活动');
    } else {
      html += '<div class="card-list">';
      regActs.forEach(function(a) {
        var reg = registrations.find(function(r) { return r.activityId == a.id; });
        var statusText = getRegistrationStatusText(reg);
        var statusColor = getRegistrationStatusColor(reg);
        html += '<div class="comp-cell" data-action="nav" data-payload="/activity-registration/' + a.id + '"><img src="' + a.cover + '" style="width:48px;height:48px;border-radius:6px;margin-right:12px;object-fit:cover"><div class="cell-body"><div class="cell-title">' + escapeHtml(a.title) + '</div><div class="cell-label">' + a.date + (a.startTime ? ' ' + a.startTime + (a.endTime ? ' - ' + a.endTime : '') : '') + ' · ' + escapeHtml(a.location) + '</div></div>' + UI_Tag(statusText, statusColor) + '<span class="cell-arrow">' + iconSVG('arrowRight', 14, '#c8c9cc') + '</span></div>';
      });
      html += '</div>';
    }
  } else {
    var pubActs = activityList.filter(function(a) { return AppState.myActivities.indexOf(a.id) >= 0; });
    if (!pubActs.length) {
      html += UI_Empty('暂无发布活动');
    } else {
      html += '<div class="card-list">';
      pubActs.forEach(function(a) {
        var actStatus = getActivityStatus(a);
        var statusColor = getActivityTagColor(a);
        html += '<div data-action="nav" data-payload="/activity/' + a.id + '">';
        html += '<div class="comp-cell"><img src="' + a.cover + '" style="width:48px;height:48px;border-radius:6px;margin-right:12px;object-fit:cover"><div class="cell-body"><div class="cell-title">' + escapeHtml(a.title) + '</div><div class="cell-label">' + a.date + (a.endDate && a.endDate !== a.date ? ' - ' + a.endDate : '') + (a.startTime ? ' ' + a.startTime + (a.endTime ? ' - ' + a.endTime : '') : '') + ' · ' + (a.reviewStatus === 'approved' ? a.registered + '人报名' : '-') + '</div></div>';
        html += '<div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px">';
        html += UI_Tag(actStatus, statusColor);
        html += '</div><span class="cell-arrow">' + iconSVG('arrowRight', 14, '#c8c9cc') + '</span></div>';
        if (a.reviewStatus === 'rejected' && a.reviewComment) {
          html += '<div style="padding:8px 16px;color:#f56c6c;font-size:12px;background:#fef0f0;border-radius:4px;margin:0 16px 8px;line-height:1.6"><span style="font-weight:600">驳回原因：</span>' + escapeHtml(a.reviewComment) + '</div>';
        }
        html += '</div>';
      });
      html += '</div>';
    }
  }
  
  html += '</div>';
  return html;
};

Views.ProfileMyFeed = function() {
  var html = '<div class="page-container">' + UI_NavBar('我的动态', true);
  var myFeeds = feedList.filter(function(f) { return AppState.myFeeds.indexOf(f.id) >= 0; });
  if (!myFeeds.length) { html += UI_Empty('暂无发布的动态'); }
  else {
    myFeeds.forEach(function(f) {
      html += '<div class="feed-item" data-action="nav" data-payload="/alumni-feed/' + f.id + '"><div class="feed-user"><img src="' + f.user.avatar + '"><div><div class="uname">' + escapeHtml(f.user.name) + '</div><div class="umeta">' + f.date + '</div></div></div><div class="feed-content" style="max-height:60px;overflow:hidden">' + escapeHtml(f.content) + '</div><div class="feed-actions"><span>' + iconSVG('heart', 14) + ' ' + f.likes + '</span><span>' + iconSVG('message', 14) + ' ' + f.comments + '</span></div></div>';
    });
  }
  html += '</div>';
  return html;
};

Views.ProfileMyGroups = function() {
  var html = '<div class="page-container">' + UI_NavBar('我的社团', true);
  var myg = groupList.filter(function(g) { return AppState.joinedGroups.indexOf(g.id) >= 0; });
  if (!myg.length) { html += UI_Empty('暂无加入的社团'); }
  else {
    myg.forEach(function(g) {
      html += '<div class="group-card" data-action="nav" data-payload="/alumni-group/' + g.id + '"><img src="' + g.logo + '"><div class="group-info"><div class="group-name">' + escapeHtml(g.name) + '</div><div class="group-desc">' + escapeHtml(g.intro) + '</div><div class="group-meta">' + g.memberCount + '人</div></div></div>';
    });
  }
  html += '</div>';
  return html;
};

Views.ProfileMyHelp = function() {
  var myHelps = helpList.filter(function(h) { return AppState.myHelp.indexOf(h.id) >= 0; });
  var html = '<div class="page-container">' + UI_NavBar('我的求助', true);
  if (!myHelps.length) {
    html += UI_Empty('暂无发布记录');
  } else {
    html += '<div class="card-list">';
    myHelps.forEach(function(h) {
      var reviewText = h.reviewStatus === 'pending' ? '审核中' : (h.reviewStatus === 'approved' ? '已发布' : '审核未通过');
      var reviewColor = h.reviewStatus === 'pending' ? 'warning' : (h.reviewStatus === 'approved' ? 'success' : 'danger');
      var helpStatus = '';
      var helpStatusColor = 'warning';
      html += '<div class="comp-cell" data-action="nav" data-payload="/help/' + h.id + '">';
      html += '<div class="cell-body"><div class="cell-title">' + escapeHtml(h.title) + '</div><div class="cell-label">' + h.date + ' · ' + (h.responseCount || 0) + '人响应</div></div>';
      html += '<div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px">';
      html += UI_Tag(reviewText, reviewColor);
      if (helpStatus) html += UI_Tag(helpStatus, helpStatusColor);
      html += '</div>';
      html += '</div>';
      if (h.reviewStatus === 'rejected' && h.rejectReason) {
        html += '<div style="padding:8px 16px;color:#f56c6c;font-size:12px;background:#fef0f0;border-radius:4px;margin-bottom:8px">驳回原因：' + escapeHtml(h.rejectReason) + '</div>';
      }
    });
    html += '</div>';
  }
  html += '</div>';
  return html;
};

Views.ProfileMyResponse = function() {
  var tabs = [{ key: 'received', name: '收到的响应' }, { key: 'responded', name: '我的响应' }];
  var html = '<div class="page-container">' + UI_NavBar('我的响应', true) + UI_Tabs(tabs, uiState.profileResponseTab);
  
  if (uiState.profileResponseTab === 'received') {
    var receivedResponses = [];
    helpList.forEach(function(h) {
      if (AppState.myHelp.indexOf(h.id) >= 0 && h.responses && h.responses.length > 0) {
        h.responses.forEach(function(r, idx) {
          receivedResponses.push({ helpId: h.id, responseIdx: idx, helpTitle: h.title, responderName: r.name, responderAvatar: r.avatar, responderRole: r.role, text: r.text, time: r.time, responseStatus: r.responseStatus, rejectReason: r.rejectReason });
        });
      }
    });
    if (!receivedResponses.length) {
      html += UI_Empty('暂无收到的响应');
    } else {
      html += '<div class="card-list">';
      receivedResponses.forEach(function(r) {
        var rStatus = r.responseStatus || 'waiting';
        var statusText = rStatus === 'accepted' ? '已接受' : (rStatus === 'finished' ? '已完成' : (rStatus === 'rejected' ? '已驳回' : '等待处理'));
        var statusColor = rStatus === 'accepted' ? 'success' : (rStatus === 'finished' ? 'info' : (rStatus === 'rejected' ? 'danger' : 'warning'));
        html += '<div data-action="nav" data-payload="/help/' + r.helpId + '">';
        html += '<div class="comp-cell"><img src="' + r.responderAvatar + '" style="width:40px;height:40px;border-radius:50%;margin-right:10px"><div class="cell-body"><div class="cell-title">' + escapeHtml(r.helpTitle) + '</div><div class="cell-label">' + escapeHtml(r.responderName) + ' · ' + r.responderRole + ' · ' + r.time + '</div><div style="font-size:13px;color:#666;margin-top:4px">' + escapeHtml(r.text) + '</div></div>';
        html += '<div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px">';
        html += UI_Tag(statusText, statusColor);
        html += '</div><span class="cell-arrow">' + iconSVG('arrowRight', 14, '#c8c9cc') + '</span></div>';
        if (rStatus === 'rejected' && r.rejectReason) {
          html += '<div style="padding:8px 16px;color:#f56c6c;font-size:12px;background:#fef0f0;border-radius:4px;margin:0 16px 8px;line-height:1.6"><span style="font-weight:600">驳回原因：</span>' + escapeHtml(r.rejectReason) + '</div>';
        }
        html += '</div>';
      });
      html += '</div>';
    }
  } else {
    var myResponses = [];
    helpList.forEach(function(h) {
      if (h.responses) {
        h.responses.forEach(function(r, idx) {
          if (r.name === AppState.userName) {
            myResponses.push({ helpId: h.id, responseIdx: idx, helpTitle: h.title, helpPublisher: h.publisher.name, text: r.text, time: r.time, responseStatus: r.responseStatus, rejectReason: r.rejectReason });
          }
        });
      }
    });
    if (!myResponses.length) {
      html += UI_Empty('暂无响应记录');
    } else {
      html += '<div class="card-list">';
      myResponses.forEach(function(r) {
        var rStatus = r.responseStatus || 'waiting';
        var statusText = rStatus === 'accepted' ? '已接受' : (rStatus === 'finished' ? '已完成' : (rStatus === 'rejected' ? '已驳回' : '等待对方处理'));
        var statusColor = rStatus === 'accepted' ? 'success' : (rStatus === 'finished' ? 'info' : (rStatus === 'rejected' ? 'danger' : 'warning'));
        html += '<div data-action="nav" data-payload="/help/' + r.helpId + '">';
        html += '<div class="comp-cell"><div class="cell-body"><div class="cell-title">' + escapeHtml(r.helpTitle) + '</div><div class="cell-label">' + r.helpPublisher + ' · ' + r.time + '</div><div style="font-size:13px;color:#666;margin-top:4px">' + escapeHtml(r.text) + '</div></div>' + UI_Tag(statusText, statusColor) + '<span class="cell-arrow">' + iconSVG('arrowRight', 14, '#c8c9cc') + '</span></div>';
        if (rStatus === 'rejected' && r.rejectReason) {
          html += '<div style="padding:8px 16px;color:#f56c6c;font-size:12px;background:#fef0f0;border-radius:4px;margin:0 16px 8px;line-height:1.6"><span style="font-weight:600">驳回原因：</span>' + escapeHtml(r.rejectReason) + '</div>';
        }
        html += '</div>';
      });
      html += '</div>';
    }
  }
  
  html += '</div>';
  return html;
};

Views.HelpResponseDetail = function() {
  var helpId = Router.params.id;
  var responseIdx = Router.params.responseIdx;
  var h = helpList.find(function(item) { return item.id == helpId; });
  if (!h || !h.responses || !h.responses[responseIdx]) {
    return '<div class="page-container">' + UI_NavBar('响应详情', true) + UI_Empty('响应记录未找到') + '</div>';
  }
  var r = h.responses[responseIdx];
  var isPublisher = AppState.myHelp.indexOf(h.id) >= 0;
  var isResponder = r.name === AppState.userName;
  var rStatus = r.responseStatus || 'waiting';
  var statusText = rStatus === 'accepted' ? '已接受' : (rStatus === 'finished' ? '已完成' : (rStatus === 'rejected' ? '已驳回' : '等待处理'));
  var statusColor = rStatus === 'accepted' ? 'success' : (rStatus === 'finished' ? 'info' : (rStatus === 'rejected' ? 'danger' : 'warning'));
  var hStatusText = '';
  var hStatusColor = 'warning';
  
  var html = '<div class="page-container no-tab">' + UI_NavBar('响应详情', true);
  
  html += '<div class="section-title">求助内容</div>';
  html += '<div class="content-detail"><h3>' + escapeHtml(h.title) + '</h3><div class="meta">' + h.publisher.name + ' · ' + h.publisher.role + ' · ' + h.date + ' ' + UI_Tag(hStatusText, hStatusColor) + '</div><div class="body">' + escapeHtml(h.description) + '</div></div>';
  
  html += '<div class="section-title">响应人信息</div>';
  html += '<div class="card-item" style="display:flex;align-items:center;gap:16px;padding:16px">';
  html += '<img src="' + r.avatar + '" style="width:60px;height:60px;border-radius:50%">';
  html += '<div>';
  html += '<div style="font-size:16px;font-weight:600">' + escapeHtml(r.name) + '</div>';
  html += '<div style="font-size:13px;color:#999;margin-top:4px">' + r.role + '</div>';
  html += '</div>';
  html += '</div>';
  
  html += '<div class="section-title">响应内容</div>';
  html += '<div class="card-item" style="padding:16px">';
  html += '<div style="font-size:14px;line-height:1.6;color:#333">' + escapeHtml(r.text) + '</div>';
  html += '<div style="font-size:12px;color:#999;margin-top:12px">响应时间：' + r.time + ' · ' + UI_Tag(statusText, statusColor) + '</div>';
  if (rStatus === 'rejected' && r.rejectReason) {
    html += '<div style="margin-top:12px;padding:10px 12px;color:#f56c6c;font-size:12px;background:#fef0f0;border:1px solid #fbc4c4;border-radius:6px;line-height:1.6"><div style="font-weight:600;margin-bottom:2px">驳回原因</div>' + escapeHtml(r.rejectReason) + '</div>';
  }
  html += '</div>';
  
  html += '<div class="section-title">互动记录</div>';
  html += '<div class="card-item" style="padding:16px">';
  if (isPublisher) {
    html += '<div style="display:flex;align-items:flex-start;gap:12px;margin-bottom:12px">';
    html += '<img src="' + h.publisher.avatar + '" style="width:40px;height:40px;border-radius:50%;flex-shrink:0">';
    html += '<div style="flex:1">';
    html += '<div style="font-size:13px;font-weight:500">' + h.publisher.name + '</div>';
    html += '<div style="font-size:13px;color:#666;margin-top:4px">您发布了此求助</div>';
    html += '</div>';
    html += '</div>';
  }
  html += '<div style="display:flex;align-items:flex-start;gap:12px">';
  html += '<img src="' + r.avatar + '" style="width:40px;height:40px;border-radius:50%;flex-shrink:0">';
  html += '<div style="flex:1">';
  html += '<div style="font-size:13px;font-weight:500">' + r.name + '</div>';
  html += '<div style="font-size:13px;color:#666;margin-top:4px">' + escapeHtml(r.text) + '</div>';
  html += '<div style="font-size:11px;color:#999;margin-top:4px">' + r.time + '</div>';
  html += '</div>';
  html += '</div>';
  if (rStatus === 'accepted') {
    html += '<div style="margin-top:12px;font-size:12px;color:#67c23a;padding-left:52px">✓ 您已接受此响应，请线下联系沟通</div>';
  } else if (rStatus === 'rejected' && r.rejectReason) {
    html += '<div style="margin-top:12px;padding:8px 12px;background:#fef0f0;border-radius:4px;font-size:12px;color:#f56c6c;padding-left:52px;line-height:1.6">✕ 平台已驳回此响应，原因：' + escapeHtml(r.rejectReason) + '</div>';
  }
  html += '</div>';
  
  html += '</div>';
  return html;
};

Views.ProfileMyBusiness = function() {
  var tabs = [{ key: 'biz', name: '我发起的商务' }, { key: 'demand', name: '我发布的需求' }];
  var html = '<div class="page-container">' + UI_NavBar('我的商务', true) + UI_Tabs(tabs, uiState.profileBizTab);
  var items = uiState.profileBizTab === 'biz'
    ? activityList.filter(function(a) { return AppState.myBiz.indexOf(a.id) >= 0; })
    : helpList.filter(function(h) { return AppState.myHelp.indexOf(h.id) >= 0; });
  if (!items.length) { html += UI_Empty('暂无数据'); }
  else {
    html += '<div class="card-list">';
    items.forEach(function(item) {
      html += '<div class="comp-cell"><div class="cell-body"><div class="cell-title">' + escapeHtml(item.title) + '</div><div class="cell-label">' + (item.date || '') + '</div></div></div>';
    });
    html += '</div>';
  }
  html += '</div>';
  return html;
};

Views.ProfileMyTopics = function() {
  var html = '<div class="page-container">' + UI_NavBar('我的主题', true);
  var myTop = topicList.filter(function(t) { return AppState.myTopics.indexOf(t.id) >= 0; });
  if (!myTop.length) { html += UI_Empty('暂无主题分享'); }
  else {
    html += '<div style="padding:10px 16px">' + UI_Button('发布主题', 'primary', 'small', true) + '</div>';
    myTop.forEach(function(t) {
      html += '<div class="comp-card" style="padding:12px 16px" data-action="nav" data-payload="/topic-share/' + t.id + '"><img src="' + t.cover + '" class="card-thumb"><div class="card-info"><div class="card-title">' + escapeHtml(t.title) + '</div><div class="card-meta">' + t.date + ' · ' + t.likes + '赞</div></div></div>';
    });
  }
  html += '</div>';
  return html;
};

Views.ProfilePoints = function() {
  var html = '<div class="page-container">' + UI_NavBar('积分明细', true);
  html += '<div style="text-align:center;padding:30px 16px;background:linear-gradient(135deg,#fff8e1,#fff3cd);margin:12px 16px;border-radius:12px"><div style="font-size:40px;font-weight:700;color:var(--accent)">1250</div><div style="font-size:13px;color:var(--text-light);margin-top:4px">当前积分</div></div>';
  
  html += '<div style="font-size:14px;font-weight:600;margin:16px 16px 8px;color:var(--text)">积分记录</div>';
  var records = [
    { desc: '报名参加「2026北理校友创业论坛」', points: '+20', date: '2026-06-17' },
    { desc: '发布动态', points: '+5', date: '2026-06-16' },
    { desc: '订阅课程「商务谈判技巧」', points: '-50', date: '2026-06-15' },
    { desc: '发布动态', points: '+5', date: '2026-06-14' },
    { desc: '报名参加「校友企业走访活动」', points: '+20', date: '2026-06-13' }
  ];
  html += UI_CellGroup(records.map(function(r) { return { title: r.desc, value: r.points, label: r.date }; }), true);
  html += '</div>';
  return html;
};

// ================================================================
// 服务机构列表
// ================================================================
Views.ServiceProviders = function() {
  var html = '<div class="page-container">' + UI_NavBar('服务机构', true);

  // 搜索框
  html += '<div style="padding:8px 16px;background:#fff"><input type="search" placeholder="搜索服务机构" style="width:100%;padding:10px 16px;border:1px solid var(--border);border-radius:20px;font-size:14px"></div>';

  // 分类标签
  var categories = ['全部', '法律服务', '财务咨询', '人力资源', '管理咨询'];
  html += '<div style="display:flex;gap:8px;padding:12px 16px;background:#fff;overflow-x:auto;white-space:nowrap">';
  categories.forEach(function(cat, i) {
    var active = i === 0 ? ' style="background:var(--primary);color:#fff"' : '';
    html += '<span' + active + ' style="padding:6px 14px;border-radius:16px;font-size:13px;background:#f5f7fa;color:var(--text);flex-shrink:0">' + cat + '</span>';
  });
  html += '</div>';

  // 服务机构卡片列表
  html += '<div style="padding:12px">';
  serviceProviders.forEach(function(p) {
    html += '<div class="provider-card" data-action="nav" data-payload="/service-provider/' + p.id + '" style="background:#fff;border-radius:12px;padding:14px;margin-bottom:12px;box-shadow:0 2px 8px rgba(0,0,0,0.06)">';
    html += '<div style="display:flex;align-items:center;gap:12px;margin-bottom:10px">';
    html += '<img src="' + p.avatar + '" style="width:56px;height:56px;border-radius:12px;flex-shrink:0">';
    html += '<div style="flex:1;min-width:0">';
    html += '<div style="font-size:16px;font-weight:600;margin-bottom:4px">' + escapeHtml(p.name) + '</div>';
    html += '<div style="font-size:12px;color:#ff9800">★★★★☆ ' + p.rating + '</div>';
    html += '<div style="display:flex;align-items:center;margin-top:4px">';
    html += '<span style="display:inline-block;padding:2px 8px;background:#e3f2fd;color:#1976d2;border-radius:4px;font-size:11px;margin-right:6px">' + p.category + '</span>';
    html += '<span style="font-size:11px;color:#999">' + p.serviceCount + ' 项服务</span>';
    html += '</div></div>';
    html += iconSVG('arrow-right', 16, '#ccc');
    html += '</div>';
    html += '<div style="font-size:13px;color:var(--text-light);line-height:1.6;margin-bottom:10px">' + p.desc + '</div>';
    html += '<div style="display:flex;align-items:center;justify-content:space-around;padding-top:10px;border-top:1px solid var(--border)">';
    html += '<div style="text-align:center"><div style="font-size:16px;font-weight:600;color:var(--primary)">' + p.consultCount + '</div><div style="font-size:11px;color:var(--text-lighter);margin-top:2px">咨询人次</div></div>';
    html += '<div style="width:1px;height:24px;background:var(--border)"></div>';
    html += '<div style="text-align:center"><div style="font-size:16px;font-weight:600;color:var(--primary)">' + p.serviceCount + '</div><div style="font-size:11px;color:var(--text-lighter);margin-top:2px">服务项目</div></div>';
    html += '</div></div>';
  });
  html += '</div></div>';
  return html;
};

// ================================================================
// 服务机构详情
// ================================================================
Views.ServiceProviderDetail = function() {
  var id = parseInt(Router.params.id);
  var provider = serviceProviders.find(function(p) { return p.id == id; });
  if (!provider) return UI_Error();

  var projects = serviceProjects.filter(function(p) { return p.providerId == id; });

  // 按子分类分组
  var projectsByCategory = {};
  projects.forEach(function(p) {
    if (!projectsByCategory[p.category]) projectsByCategory[p.category] = [];
    projectsByCategory[p.category].push(p);
  });

  // 查找该服务的父分类
  function getParentCategory(subCat) {
    for (var parent in serviceCategoryMap) {
      if (serviceCategoryMap[parent].indexOf(subCat) >= 0) return parent;
    }
    return '其他';
  }

  var html = '<div class="page-container">' + UI_NavBar('服务机构详情', true);

  // 机构头部
  html += '<div style="text-align:center;padding:20px;background:#fff;border-bottom:1px solid var(--border)">';
  html += '<img src="' + provider.avatar + '" style="width:72px;height:72px;border-radius:16px;margin-bottom:12px">';
  html += '<div style="font-size:18px;font-weight:700;margin-bottom:6px">' + escapeHtml(provider.name) + '</div>';
  html += '<span style="display:inline-block;padding:4px 12px;background:#e3f2fd;color:#1976d2;border-radius:12px;font-size:13px">' + escapeHtml(provider.category) + '</span>';
  if (provider.contactName) {
    html += '<div style="margin-top:10px;font-size:13px;color:#6fa4cf;font-weight:500">联系人：' + escapeHtml(provider.contactName) + ' · ' + escapeHtml(provider.contactPosition || '') + '</div>';
  }
  html += '<div style="display:inline-flex;align-items:center;gap:4px;margin-top:8px;font-size:13px;color:var(--text-light)">';
  html += iconSVG('phone', 14, 'currentColor') + '<span>' + provider.phone + '</span>';
  if (provider.email) {
    html += '  ·  ' + iconSVG('mail', 14, 'currentColor') + '<span>' + provider.email + '</span>';
  }
  html += '</div>';
  // 显示该机构提供的服务分类
  var serviceCats = Object.keys(projectsByCategory);
  if (serviceCats.length > 0) {
    html += '<div style="margin-top:10px;display:flex;flex-wrap:wrap;gap:6px;justify-content:center">';
    serviceCats.forEach(function(sub) {
      var parent = getParentCategory(sub);
      html += '<span style="font-size:11px;padding:2px 8px;background:#fff7e8;color:#cc7a00;border-radius:10px">' + escapeHtml(parent) + ' · ' + escapeHtml(sub) + '</span>';
    });
    html += '</div>';
  }
  html += '</div>';

  // 标签页
  html += '<div style="display:flex;background:#fff;border-bottom:1px solid var(--border)">';
  html += '<div style="flex:1;padding:12px;text-align:center;font-size:15px;font-weight:600;color:var(--primary);border-bottom:2px solid var(--primary)">服务项目</div>';
  html += '<div style="flex:1;padding:12px;text-align:center;font-size:15px;color:var(--text-light)">机构简介</div>';
  html += '</div>';

  // 服务项目列表 - 按子分类分组
  if (!projects.length) {
    html += UI_Empty('暂无服务项目');
  } else {
    html += '<div style="padding:12px">';
    Object.keys(projectsByCategory).forEach(function(subCat) {
      var subProjects = projectsByCategory[subCat];
      var parentCat = getParentCategory(subCat);
      // 分组标题
      html += '<div style="padding:8px 4px 12px;display:flex;align-items:center;gap:6px">';
      html += '<div style="width:4px;height:14px;background:#1976d2;border-radius:2px"></div>';
      html += '<span style="font-size:14px;font-weight:600;color:#333">' + escapeHtml(subCat) + '</span>';
      html += '<span style="font-size:11px;color:#999">· ' + escapeHtml(parentCat) + '</span>';
      html += '<span style="font-size:11px;color:#999;margin-left:auto">' + subProjects.length + '项</span>';
      html += '</div>';

      subProjects.forEach(function(proj) {
        html += '<div class="project-card" data-action="nav" data-payload="/service-project/' + proj.id + '" style="background:#fff;border-radius:12px;padding:14px;margin-bottom:12px;box-shadow:0 2px 8px rgba(0,0,0,0.06)">';
        html += '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">';
        html += '<div style="font-size:16px;font-weight:600;flex:1">' + escapeHtml(proj.name) + '</div>';
        html += '<span style="display:inline-block;padding:2px 8px;background:#e8f5e9;color:#4caf50;border-radius:4px;font-size:11px">' + escapeHtml(proj.category) + '</span>';
        html += '</div>';
        html += '<div style="font-size:13px;color:var(--text-light);line-height:1.6;margin-bottom:10px">' + proj.desc + '</div>';
        html += '<div style="display:flex;align-items:center;justify-content:space-between">';
        html += '<div style="display:flex;align-items:baseline;gap:2px">';
        html += '<span style="font-size:20px;font-weight:700;color:var(--primary)">¥' + proj.price.toLocaleString() + '</span>';
        html += '<span style="font-size:12px;color:var(--text-lighter)">/ ' + proj.unit + '</span>';
        html += '</div>';
        html += '</div>';
        html += '<div style="margin-top:10px"><span style="display:inline-block;padding:6px 12px;background:#e8f4fd;color:#6fa4cf;border-radius:16px;font-size:12px">' + iconSVG('phone', 12, '#6fa4cf') + ' 查看联系方式</span></div>';
        html += '</div>';
      });
    });
    html += '</div>';
  }

  html += '</div>';
  return html;
};
// 临时文件：服务项目详情视图
// 这段代码需要添加到 views.js 的末尾

// ================================================================
// 服务项目详情
// ================================================================
Views.ServiceProjectDetail = function() {
  var id = parseInt(Router.params.id);
  var project = serviceProjects.find(function(p) { return p.id == id; });
  if (!project) return UI_Error();

  var provider = serviceProviders.find(function(p) { return p.id == project.providerId; });

  var html = '<div class="page-container">' + UI_NavBar('服务详情', true);

  // 查找父分类
  var parentCategory = '其他';
  for (var parent in serviceCategoryMap) {
    if (serviceCategoryMap[parent].indexOf(project.category) >= 0) {
      parentCategory = parent;
      break;
    }
  }

  // 项目头部
  html += '<div style="padding:20px;background:#fff;border-bottom:1px solid var(--border)">';
  html += '<div style="font-size:20px;font-weight:700;margin-bottom:8px">' + escapeHtml(project.name) + '</div>';
  // 分类展示：父分类 + 子分类
  html += '<div style="display:flex;flex-wrap:wrap;gap:6px">';
  html += '<span style="display:inline-block;padding:4px 12px;background:#fff7e8;color:#cc7a00;border-radius:12px;font-size:13px">' + escapeHtml(parentCategory) + '</span>';
  html += '<span style="display:inline-block;padding:4px 12px;background:#e8f5e9;color:#4caf50;border-radius:12px;font-size:13px">' + escapeHtml(project.category) + '</span>';
  html += '</div>';

  if (provider) {
    html += '<div data-action="nav" data-payload="/service-provider/' + provider.id + '" style="display:inline-flex;align-items:center;gap:6px;margin-top:12px;padding:6px 12px;background:#f5f7fa;border-radius:20px;font-size:13px">';
    html += '<img src="' + provider.avatar + '" style="width:24px;height:24px;border-radius:50%">';
    html += '<span>' + escapeHtml(provider.name) + '</span>';
    html += iconSVG('arrow-right', 12, 'currentColor');
    html += '</div>';
  }
  html += '</div>';

  // 价格区域
  html += '<div style="padding:16px 20px;background:linear-gradient(135deg,#fef5e7,#fff);border-bottom:1px solid var(--border)">';
  html += '<div style="font-size:13px;color:var(--text-light);margin-bottom:4px">服务费用</div>';
  html += '<div style="display:flex;align-items:baseline;gap:4px">';
  html += '<span style="font-size:28px;font-weight:700;color:#f56c6c">¥' + project.price.toLocaleString() + '</span>';
  html += '<span style="font-size:14px;color:var(--text-lighter)">/ ' + project.unit + '</span>';
  html += '</div></div>';

  // 服务介绍
  html += '<div style="padding:16px 20px;background:#fff;margin-top:12px">';
  html += '<div style="font-size:16px;font-weight:600;margin-bottom:10px">服务介绍</div>';
  html += '<div style="font-size:14px;line-height:1.8;color:var(--text)">' + project.desc + '</div>';
  html += '</div>';

  // 服务详情
  html += '<div style="padding:16px 20px;background:#fff;margin-top:12px">';
  html += '<div style="font-size:16px;font-weight:600;margin-bottom:10px">服务详情</div>';
  html += UI_CellGroup([
    { title: '服务周期', value: '根据实际情况协商' },
    { title: '服务方式', value: '线上 + 线下' }
  ], false);
  html += '</div>';

  // 联系方式与联系人
  if (provider) {
    html += '<div style="padding:16px 20px;background:#fff;margin-top:12px">';
    html += '<div style="font-size:16px;font-weight:600;margin-bottom:12px">联系方式与联系人</div>';
    html += '<div style="background:#f8f9fc;border-radius:12px;padding:14px">';
    html += '<div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;padding-bottom:12px;border-bottom:1px solid #eee">';
    html += '<img src="' + provider.avatar + '" style="width:48px;height:48px;border-radius:50%">';
    html += '<div style="flex:1">';
    html += '<div style="font-size:15px;font-weight:600;color:#333">' + escapeHtml(provider.name) + '</div>';
    if (provider.contactName) {
      html += '<div style="font-size:12px;color:#6fa4cf;margin-top:2px">' + escapeHtml(provider.contactName) + ' · ' + escapeHtml(provider.contactPosition || '') + '</div>';
    }
    html += '</div>';
    html += '</div>';
    html += '<div style="display:flex;flex-direction:column;gap:10px">';
    html += '<div style="display:flex;align-items:center;gap:10px">';
    html += '<div style="width:32px;height:32px;border-radius:8px;background:#e8f4fd;display:flex;align-items:center;justify-content:center">' + iconSVG('phone', 16, '#6fa4cf') + '</div>';
    html += '<div style="flex:1">';
    html += '<div style="font-size:11px;color:#999">联系电话</div>';
    html += '<div style="font-size:14px;color:#333">' + escapeHtml(provider.phone) + '</div>';
    html += '</div>';
    html += '</div>';
    html += '<div style="display:flex;align-items:center;gap:10px">';
    html += '<div style="width:32px;height:32px;border-radius:8px;background:#e8f8ee;display:flex;align-items:center;justify-content:center">' + iconSVG('mail', 16, '#07c160') + '</div>';
    html += '<div style="flex:1">';
    html += '<div style="font-size:11px;color:#999">电子邮箱</div>';
    html += '<div style="font-size:14px;color:#333">' + escapeHtml(provider.email) + '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
  }

  // 底部操作栏
  html += '<div style="position:fixed;bottom:0;left:0;right:0;padding:10px 16px;background:#fff;border-top:1px solid var(--border);z-index:10;display:flex;gap:10px">';
  html += '<button class="comp-btn success block" style="flex:1" data-action="order-service" data-project-id="' + project.id + '">' + iconSVG('bag', 16, '#fff') + ' 预约购买</button>';
  html += '<button class="comp-btn primary block" style="flex:1" onclick="doPayService(' + project.id + ')">' + iconSVG('wallet', 16, '#fff') + ' 缴费</button>';
  html += '</div>';

  html += '<div style="height:120px"></div>'; // 底部空白占位
  html += '</div>';
  return html;
};

// ================================================================
// 服务咨询聊天页面 - 与运营后台统一风格
// ================================================================
Views.ServiceChat = function() {
  var providerId = parseInt(Router.params.providerId);
  var projectId = parseInt(Router.params.projectId);

  var provider = serviceProviders.find(function(p) { return p.id == providerId; });
  var project = serviceProjects.find(function(p) { return p.id == projectId; });

  if (!provider || !project) return UI_Error();

  // 获取聊天记录
  var chatKey = providerId + '-' + projectId;
  var messages = serviceChatHistory[chatKey] || [
    { from: 'other', text: '您好，欢迎咨询！请问有什么可以帮到您的？', time: '10:30' },
    { from: 'me', text: '我想咨询「' + project.name + '」这项服务', time: '10:31' },
    { from: 'other', text: '好的，我们会有专人尽快与您联系。请留下您的联系方式。', time: '10:32' }
  ];

  // 如果是新对话，初始化历史记录
  if (!serviceChatHistory[chatKey]) {
    serviceChatHistory[chatKey] = messages;
  }

  var html = '<div class="page-container" style="display:flex;flex-direction:column;height:100vh;padding:0">';

  // 顶部导航栏
  html += UI_NavBar(provider.name, true);

  // 当前咨询服务提示
  html += '<div style="background:#fff;border-bottom:1px solid var(--border);padding:8px 16px;flex-shrink:0">';
  html += '<div style="display:flex;align-items:center;gap:8px;padding:6px 10px;background:#fff7e8;border-left:3px solid #ff976a;border-radius:4px">';
  html += iconSVG('info', 14, '#ff976a');
  html += '<span style="font-size:13px;color:#333">当前咨询：' + escapeHtml(project.name) + '</span>';
  html += '</div></div>';

  // 聊天消息容器
  html += '<div class="chat-container" style="flex:1;overflow-y:auto;padding:12px;background:#f5f7fa;padding-bottom:70px">';

  messages.forEach(function(msg) {
    var isMine = msg.from === 'me';
    html += '<div style="margin-bottom:14px;display:flex;flex-direction:column;' + (isMine ? 'align-items:flex-end' : 'align-items:flex-start') + '">';
    html += '<div style="max-width:70%;padding:10px 14px;border-radius:12px;font-size:14px;line-height:1.5;word-break:break-word;' +
            (isMine
              ? 'background:linear-gradient(135deg,#6fa4cf,#9bc1de);color:#fff;border-bottom-right-radius:4px'
              : 'background:#fff;color:#303133;border-bottom-left-radius:4px') +
            '">' + escapeHtml(msg.text) + '</div>';
    html += '<div style="font-size:11px;color:#c0c4cc;margin-top:4px">' + msg.time + '</div>';
    html += '</div>';
  });

  html += '</div>';

  // 底部输入框 - 提高z-index确保可见
  html += '<div style="position:fixed;bottom:0;left:0;right:0;padding:8px 12px;background:#fff;border-top:1px solid var(--border);z-index:1000">';
  html += '<div style="display:flex;gap:8px;align-items:center">';
  html += '<input type="text" id="chat-input" placeholder="输入消息..." onkeypress="if(event.keyCode==13){document.querySelector(\'[data-action=send-chat-message]\').click();return false;}" style="flex:1;padding:8px 12px;border:1px solid #dcdfe6;border-radius:4px;font-size:14px;outline:none;box-sizing:border-box">';
  html += '<button class="comp-btn primary small" data-action="send-chat-message" data-provider-id="' + providerId + '" data-project-id="' + projectId + '">发送</button>';
  html += '</div></div>';

  html += '</div>';
  return html;
};

Views.MemberRecharge = function() {
  var html = '<div class="page-container">' + UI_NavBar('信息服务费', true);
  html += '<div style="padding:16px;background:linear-gradient(135deg,#6fa4cf,#9bc1de);text-align:center;color:#fff">';
  html += '<div style="font-size:14px;margin-bottom:4px">当前会员状态</div>';
  html += '<div style="font-size:24px;font-weight:700">' + AppState.currentRole + '</div>';
  html += '<div style="font-size:12px;opacity:0.8;margin-top:4px">有效期至 2026-12-31</div>';
  html += '</div>';
  html += '<div style="padding:12px 16px;background:#fff;border-bottom:1px solid var(--border)">';
  html += '<div style="font-size:14px;font-weight:600">选择套餐</div>';
  html += '</div>';
  html += '<div style="padding:12px">';
  memberPackages.forEach(function(p) {
    var popularTag = p.popular ? '<div style="position:absolute;top:-1px;right:-1px;background:#dabb6e;color:#fff;font-size:10px;padding:2px 8px;border-bottom-left-radius:8px">推荐</div>' : '';
    html += '<div class="comp-card" style="position:relative;border:2px solid ' + (p.popular ? p.color : 'transparent') + ';margin-bottom:12px" data-action="nav" data-payload="/profile/member-recharge/' + p.id + '">';
    html += popularTag;
    html += '<div style="padding:16px">';
    html += '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">';
    html += '<div><div style="font-size:18px;font-weight:700;color:' + p.color + '">' + p.name + '</div><div style="font-size:12px;color:var(--text-lighter)">' + p.duration + '</div></div>';
    html += '<div style="text-align:right"><div style="font-size:24px;font-weight:700;color:#ee0a24">¥' + p.price + '</div><div style="font-size:11px;color:var(--text-lighter);text-decoration:line-through">¥' + p.originalPrice + '</div></div>';
    html += '</div>';
    html += '<div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:12px">';
    p.benefits.forEach(function(b) {
      html += '<span style="padding:4px 10px;background:#f5f7fa;color:var(--text-light);border-radius:12px;font-size:11px">' + b + '</span>';
    });
    html += '</div>';
    html += '</div></div>';
  });
  html += '</div>';
  html += '<div style="padding:12px 16px;background:#fff;margin-top:12px">';
  html += '<div style="font-size:14px;font-weight:600;margin-bottom:8px">会员权益说明</div>';
  html += '<div style="font-size:12px;color:var(--text-light);line-height:1.8">';
  html += '<p>1. 购买会员套餐后，将立即获得对应时长的商务会员权益</p>';
  html += '<p>2. 会员到期后，您的会员权益将自动暂停，已发布的内容保留</p>';
  html += '<p>3. 购买后不支持退款，请您谨慎选择</p>';
  html += '</div>';
  html += '</div>';
  html += '</div>';
  return html;
};

Views.MemberRechargeConfirm = function() {
  var pkgId = parseInt(Router.params.id);
  var pkg = memberPackages.find(function(p) { return p.id == pkgId; });
  if (!pkg) return '<div class="page-container">' + UI_NavBar('支付确认', true) + UI_Empty('套餐不存在') + '</div>';
  var html = '<div class="page-container">' + UI_NavBar('支付确认', true);
  html += '<div style="padding:16px;background:#fff;margin-top:12px">';
  html += '<div style="font-size:16px;font-weight:600;margin-bottom:12px">确认订单</div>';
  html += '<div style="display:flex;align-items:center;gap:12px">';
  html += '<div style="width:80px;height:80px;border-radius:8px;background:' + pkg.color + ';display:flex;align-items:center;justify-content:center;color:#fff;font-size:20px;font-weight:700">' + pkg.name.substring(0, 2) + '</div>';
  html += '<div style="flex:1">';
  html += '<div style="font-size:16px;font-weight:600">' + pkg.name + '</div>';
  html += '<div style="font-size:13px;color:var(--text-light);margin-top:4px">有效期：' + pkg.duration + '</div>';
  html += '<div style="font-size:13px;color:var(--text-light);margin-top:2px">权益：' + pkg.benefits.join('、') + '</div>';
  html += '</div>';
  html += '</div>';
  html += '</div>';
  html += '<div style="padding:16px;background:#fff;margin-top:12px">';
  html += '<div style="font-size:16px;font-weight:600;margin-bottom:12px">支付方式</div>';
  html += '<div style="display:flex;align-items:center;gap:10px;padding:12px;background:#f5f7fa;border-radius:8px">';
  html += '<div style="width:36px;height:36px;border-radius:50%;background:#07c160;display:flex;align-items:center;justify-content:center">' + iconSVG('wallet', 18, '#fff') + '</div>';
  html += '<div style="flex:1"><div style="font-size:14px;font-weight:600">微信支付</div><div style="font-size:12px;color:var(--text-lighter)">推荐使用微信支付</div></div>';
  html += iconSVG('check', 18, '#07c160');
  html += '</div>';
  html += '</div>';
  html += '<div style="padding:16px;background:#fff;margin-top:12px">';
  html += '<div style="font-size:16px;font-weight:600;margin-bottom:12px">订单信息</div>';
  html += UI_CellGroup([
    { title: '订单编号', value: 'MO' + Date.now().toString().slice(-10) },
    { title: '购买时间', value: new Date().toLocaleString('zh-CN') },
    { title: '购买人', value: '演示用户' }
  ], true);
  html += '</div>';
  html += '<div style="padding:16px;background:#fff;margin-top:12px">';
  html += '<div style="font-size:16px;font-weight:600;margin-bottom:12px">金额明细</div>';
  html += '<div style="display:flex;justify-content:space-between;margin-bottom:8px"><span style="color:var(--text-light)">套餐原价</span><span style="color:var(--text-lighter);text-decoration:line-through">¥' + pkg.originalPrice + '</span></div>';
  html += '<div style="display:flex;justify-content:space-between;margin-bottom:8px"><span style="color:var(--text-light)">优惠金额</span><span style="color:#07c160">-¥' + (pkg.originalPrice - pkg.price) + '</span></div>';
  html += '<div style="border-top:1px solid var(--border);padding-top:8px;margin-top:8px;display:flex;justify-content:space-between"><span style="font-weight:600">实付金额</span><span style="font-size:18px;font-weight:700;color:#ee0a24">¥' + pkg.price + '</span></div>';
  html += '</div>';
  html += '<div style="padding:12px 16px;margin-top:12px">';
  html += '<div style="font-size:11px;color:var(--text-lighter);text-align:center">';
  html += '<input type="checkbox" checked style="margin-right:4px">';
  html += '我已阅读并同意《会员服务协议》和《隐私政策》';
  html += '</div>';
  html += '</div>';
  html += '<div class="bottom-bar"><button class="comp-btn primary round block" data-action="confirm-recharge" data-pkg-id="' + pkg.id + '">立即支付 ¥' + pkg.price + '</button></div>';
  html += '</div>';
  return html;
};

Views.MemberRechargeSuccess = function() {
  var html = '<div class="page-container" style="text-align:center;padding-top:60px">';
  html += '<div style="width:80px;height:80px;border-radius:50%;background:#07c160;display:flex;align-items:center;justify-content:center;margin:0 auto 20px">' + iconSVG('check', 40, '#fff') + '</div>';
  html += '<h2 style="font-size:20px;font-weight:700;margin-bottom:8px">支付成功</h2>';
  html += '<div style="font-size:14px;color:var(--text-light);margin-bottom:30px">您已成功开通商务会员</div>';
  html += '<div style="padding:16px;background:#fff;border-radius:12px;margin:0 16px;text-align:left">';
  html += '<div style="font-size:14px;font-weight:600;margin-bottom:8px">订单信息</div>';
  html += UI_CellGroup([
    { title: '订单编号', value: 'MO' + Date.now().toString().slice(-10) },
    { title: '开通套餐', value: '年度会员' },
    { title: '支付金额', value: '¥899' },
    { title: '有效期至', value: '2027-06-01' }
  ], true);
  html += '</div>';
  html += '<div style="padding:20px 16px;margin-top:30px">';
  html += '<div style="font-size:14px;color:var(--text-light);margin-bottom:20px">支付成功，您的商务会员申请已提交审核</div>';
  html += '<div style="font-size:12px;color:var(--text-muted)">预计1-3个工作日内反馈审核结果，请耐心等待</div>';
  html += '</div>';
  html += '</div>';
  return html;
};

Views.MemberOrders = function() {
  var html = '<div class="page-container">' + UI_NavBar('会员订单', true);
  if (!memberOrders.length) {
    html += UI_Empty('暂无会员订单');
  } else {
    html += '<div style="padding:12px">';
    memberOrders.forEach(function(order) {
      html += '<div class="comp-card" style="margin-bottom:12px">';
      html += '<div style="padding:16px">';
      html += '<div style="display:flex;justify-content:space-between;margin-bottom:12px">';
      html += '<div style="font-size:12px;color:var(--text-lighter)">订单编号：' + order.id + '</div>';
      html += UI_Tag(order.status, order.status === '已完成' ? 'success' : 'warning');
      html += '</div>';
      html += '<div style="display:flex;justify-content:space-between;align-items:center">';
      html += '<div>';
      html += '<div style="font-size:16px;font-weight:600">' + order.packageName + '</div>';
      html += '<div style="font-size:12px;color:var(--text-lighter);margin-top:4px">' + order.createTime + '</div>';
      html += '<div style="font-size:12px;color:var(--text-lighter);margin-top:2px">有效期至 ' + order.expiryDate + '</div>';
      html += '</div>';
      html += '<div style="font-size:18px;font-weight:700;color:#ee0a24">¥' + order.price + '</div>';
      html += '</div>';
      html += '</div>';
      html += '</div>';
    });
    html += '</div>';
  }
  html += '</div>';
  return html;
};

Views.ProfileCollections = function() {
  var html = '<div class="page-container">' + UI_NavBar('我的收藏', true);
  var tabs = [{ key: 'all', name: '全部' }, { key: 'news', name: '资讯' }, { key: 'topic', name: '主题' }, { key: 'interview', name: '专访' }, { key: 'course', name: '课程' }];
  var activeTab = uiState.collectionTab || 'all';
  html += UI_Tabs(tabs, activeTab);
  
  var allCollections = [];
  if (activeTab === 'all' || activeTab === 'news') {
    newsList.forEach(function(n) {
      if (AppState.collectedNews[n.id]) {
        allCollections.push({ type: 'news', id: n.id, title: n.title, author: n.author, date: n.date, cover: n.cover });
      }
    });
  }
  if (activeTab === 'all' || activeTab === 'topic') {
    topicList.forEach(function(t) {
      if (AppState.collectedTopics[t.id]) {
        allCollections.push({ type: 'topic', id: t.id, title: t.title, author: t.author, date: t.date, cover: t.cover });
      }
    });
  }
  if (activeTab === 'all' || activeTab === 'interview') {
    interviewList.forEach(function(i) {
      if (AppState.collectedInterviews[i.id]) {
        allCollections.push({ type: 'interview', id: i.id, title: i.title, author: i.author, date: i.date, cover: i.cover });
      }
    });
  }
  if (activeTab === 'all' || activeTab === 'course') {
    courseList.forEach(function(c) {
      if (AppState.collectedCourses[c.id]) {
        allCollections.push({ type: 'course', id: c.id, title: c.title, author: c.author, date: c.date, cover: c.cover });
      }
    });
  }
  
  if (!allCollections.length) {
    html += UI_Empty('暂无收藏内容');
  } else {
    html += '<div class="card-list">';
    allCollections.forEach(function(item) {
      var path = item.type === 'news' ? '/news/' + item.id : (item.type === 'topic' ? '/topic-share/' + item.id : (item.type === 'interview' ? '/interview/' + item.id : '/courses/' + item.id));
      var typeLabel = item.type === 'news' ? '资讯' : (item.type === 'topic' ? '主题' : (item.type === 'interview' ? '专访' : '课程'));
      html += '<div class="comp-cell" data-action="nav" data-payload="' + path + '">';
      if (item.cover) {
        html += '<img src="' + item.cover + '" style="width:60px;height:60px;border-radius:6px;margin-right:10px">';
      }
      html += '<div class="cell-body"><div class="cell-title">' + escapeHtml(item.title) + '</div><div class="cell-label">' + typeLabel + ' · ' + item.author + ' · ' + item.date + '</div></div></div>';
    });
    html += '</div>';
  }
  html += '</div>';
  return html;
};

Views.ProfileLikes = function() {
  var html = '<div class="page-container">' + UI_NavBar('我的点赞', true);
  var tabs = [{ key: 'all', name: '全部' }, { key: 'news', name: '资讯' }, { key: 'topic', name: '主题' }, { key: 'interview', name: '专访' }];
  var activeTab = uiState.likeTab || 'all';
  html += UI_Tabs(tabs, activeTab);
  
  var allLikes = [];
  if (activeTab === 'all' || activeTab === 'news') {
    newsList.forEach(function(n) {
      if (AppState.likedFeeds['n' + n.id]) {
        allLikes.push({ type: 'news', id: n.id, title: n.title, author: n.author, date: n.date, cover: n.cover });
      }
    });
  }
  if (activeTab === 'all' || activeTab === 'topic') {
    topicList.forEach(function(t) {
      if (AppState.likedFeeds['t' + t.id]) {
        allLikes.push({ type: 'topic', id: t.id, title: t.title, author: t.author, date: t.date, cover: t.cover });
      }
    });
  }
  if (activeTab === 'all' || activeTab === 'interview') {
    interviewList.forEach(function(i) {
      if (AppState.likedFeeds['i' + i.id]) {
        allLikes.push({ type: 'interview', id: i.id, title: i.title, author: i.author, date: i.date, cover: i.cover });
      }
    });
  }
  
  if (!allLikes.length) {
    html += UI_Empty('暂无点赞内容');
  } else {
    html += '<div class="card-list">';
    allLikes.forEach(function(item) {
      var path = item.type === 'news' ? '/news/' + item.id : (item.type === 'topic' ? '/topic-share/' + item.id : '/interview/' + item.id);
      var typeLabel = item.type === 'news' ? '资讯' : (item.type === 'topic' ? '主题' : '专访');
      html += '<div class="comp-cell" data-action="nav" data-payload="' + path + '">';
      if (item.cover) {
        html += '<img src="' + item.cover + '" style="width:60px;height:60px;border-radius:6px;margin-right:10px">';
      }
      html += '<div class="cell-body"><div class="cell-title">' + escapeHtml(item.title) + '</div><div class="cell-label">' + typeLabel + ' · ' + item.author + ' · ' + item.date + '</div></div></div>';
    });
    html += '</div>';
  }
  html += '</div>';
  return html;
};

Views.PublishService = function() {
  return '<div class="page-container">' + UI_NavBar('发布服务产品', true, '<span data-action="toast" data-payload="服务产品已发布">发表</span>')
    + UI_Field('服务名称', 'text', '请输入服务名称', '', true)
    + UI_Field('服务类别', 'select', '', '', true, ['技术服务', '咨询服务', '培训服务', '金融服务', '法律服务', '其他'])
    + UI_Field('服务价格', 'text', '请输入服务价格，如：¥5000/次', '', true)
    + UI_Field('服务介绍', 'textarea', '请详细介绍你的服务内容...', '', true)
    + UI_Field('服务优势', 'textarea', '请描述服务的核心优势...', '', false)
    + '<div style="padding:12px 16px">' + UI_Button('发布服务', 'primary', '', true, true) + '</div></div>';
};

Views.ProfileMyServices = function() {
  var html = '<div class="page-container">' + UI_NavBar('我的服务', true);
  var services = [
    { id: 1, name: '企业数字化转型咨询', category: '咨询服务', price: '¥8000/次', status: 'published', createTime: '2026-07-15' },
    { id: 2, name: 'AI技术解决方案', category: '技术服务', price: '¥15000/次', status: 'published', createTime: '2026-07-14' },
    { id: 3, name: '创业融资指导', category: '金融服务', price: '¥5000/次', status: 'draft', createTime: '2026-07-13' }
  ];
  
  if (!services.length) {
    html += UI_Empty('暂无服务产品');
  } else {
    html += '<div class="card-list">';
    services.forEach(function(s) {
      var statusText = s.status === 'published' ? '已发布' : '草稿';
      var statusColor = s.status === 'published' ? 'success' : 'warning';
      html += '<div class="comp-cell">';
      html += '<div class="cell-body">';
      html += '<div class="cell-title">' + escapeHtml(s.name) + '</div>';
      html += '<div class="cell-label">' + s.category + ' · ' + s.price + ' · ' + s.createTime + '</div>';
      html += '</div>';
      html += UI_Tag(statusText, statusColor);
      html += '</div>';
    });
    html += '</div>';
  }
  html += '<div style="padding:12px 16px">' + UI_Button('发布新服务', 'primary', '', true) + '</div>';
  html += '</div>';
  return html;
};

Views.ProfileServiceConsults = function() {
  var html = '<div class="page-container">' + UI_NavBar('服务咨询', true);
  var consults = [
    { id: 1, userName: '张先生', userAvatar: '', serviceName: '企业数字化转型咨询', content: '您好，想咨询一下关于数字化转型的具体方案', time: '2026-07-16 14:30', status: 'pending' },
    { id: 2, userName: '李女士', userAvatar: '', serviceName: 'AI技术解决方案', content: '我们公司想引入AI技术，请问有哪些解决方案？', time: '2026-07-16 10:15', status: 'replied' },
    { id: 3, userName: '王先生', userAvatar: '', serviceName: '创业融资指导', content: '初创企业融资有什么建议？', time: '2026-07-15 16:45', status: 'pending' }
  ];
  
  if (!consults.length) {
    html += UI_Empty('暂无服务咨询');
  } else {
    html += '<div class="card-list">';
    consults.forEach(function(c) {
      var statusText = c.status === 'pending' ? '待回复' : '已回复';
      var statusColor = c.status === 'pending' ? 'danger' : 'success';
      html += '<div class="comp-cell" data-action="nav" data-payload="/service-chat/1/' + c.id + '">';
      html += '<div style="width:44px;height:44px;border-radius:50%;background:var(--primary-light);display:flex;align-items:center;justify-content:center;color:#fff;font-size:16px;font-weight:600;margin-right:10px">' + c.userName.charAt(0) + '</div>';
      html += '<div class="cell-body">';
      html += '<div class="cell-title">' + escapeHtml(c.userName) + '<span style="font-size:12px;color:var(--text-lighter);margin-left:8px">' + c.serviceName + '</span></div>';
      html += '<div class="cell-label">' + escapeHtml(c.content) + ' · ' + c.time + '</div>';
      html += '</div>';
      html += UI_Tag(statusText, statusColor);
      html += '</div>';
    });
    html += '</div>';
  }
  html += '</div>';
  return html;
};

Views.ProfileServiceOrders = function() {
  var html = '<div class="page-container">' + UI_NavBar('服务订单', true);
  var tabs = [{ key: 'all', name: '全部' }, { key: 'pending', name: '待确认' }, { key: 'processing', name: '服务中' }, { key: 'completed', name: '已完成' }];
  var activeTab = uiState.serviceOrderTab || 'all';
  html += UI_Tabs(tabs, activeTab);
  
  var orders = [
    { id: 1, serviceName: '企业数字化转型咨询', customerName: '张先生', amount: '¥8000', time: '2026-07-16', status: 'pending' },
    { id: 2, serviceName: 'AI技术解决方案', customerName: '李女士', amount: '¥15000', time: '2026-07-15', status: 'processing' },
    { id: 3, serviceName: '创业融资指导', customerName: '王先生', amount: '¥5000', time: '2026-07-14', status: 'completed' }
  ];
  
  var filtered = orders;
  if (activeTab !== 'all') {
    filtered = orders.filter(function(o) { return o.status === activeTab; });
  }
  
  if (!filtered.length) {
    html += UI_Empty('暂无服务订单');
  } else {
    html += '<div class="card-list">';
    filtered.forEach(function(o) {
      var statusMap = { pending: { text: '待确认', color: 'warning' }, processing: { text: '服务中', color: 'primary' }, completed: { text: '已完成', color: 'success' } };
      var status = statusMap[o.status];
      html += '<div class="comp-cell">';
      html += '<div class="cell-body">';
      html += '<div class="cell-title">' + escapeHtml(o.serviceName) + '</div>';
      html += '<div class="cell-label">' + o.customerName + ' · ' + o.amount + ' · ' + o.time + '</div>';
      html += '</div>';
      html += UI_Tag(status.text, status.color);
      html += '</div>';
    });
    html += '</div>';
  }
  html += '</div>';
  return html;
};

Views.ProfileMyContent = function() {
  var html = '<div class="page-container">' + UI_NavBar('我的内容', true);
  var items = [
    { title: '我的活动', path: '/profile/activities', icon: 'calendar' }
  ];
  if (roleRank[AppState.currentRole] >= 1) {
    items.push({ title: '我的社团', path: '/profile/my-groups', icon: 'users' });
  }
  html += '<div class="card-list">';
  items.forEach(function(item) {
    html += '<div class="comp-cell" data-action="nav" data-payload="' + item.path + '">';
    html += '<div style="width:40px;height:40px;border-radius:10px;background:var(--primary-light);display:flex;align-items:center;justify-content:center;margin-right:12px">';
    html += iconSVG(item.icon, 18, '#fff');
    html += '</div>';
    html += '<div class="cell-body">';
    html += '<div class="cell-title">' + escapeHtml(item.title) + '</div>';
    html += '</div>';
    html += '<span class="cell-arrow">' + iconSVG('arrowRight', 14, '#c8c9cc') + '</span>';
    html += '</div>';
  });
  html += '</div></div>';
  return html;
};

Views.ProfileSocial = function() {
  var html = '<div class="page-container">' + UI_NavBar('社交关系', true);
  var items = [
    { title: '我的好友', path: '/profile/favorites', icon: 'heart' },
    { title: '名片交换', path: '/alumni-card', icon: 'card' }
  ];
  html += '<div class="card-list">';
  items.forEach(function(item) {
    html += '<div class="comp-cell" data-action="nav" data-payload="' + item.path + '">';
    html += '<div style="width:40px;height:40px;border-radius:10px;background:var(--primary-light);display:flex;align-items:center;justify-content:center;margin-right:12px">';
    html += iconSVG(item.icon, 18, '#fff');
    html += '</div>';
    html += '<div class="cell-body">';
    html += '<div class="cell-title">' + escapeHtml(item.title) + '</div>';
    html += '</div>';
    html += '<span class="cell-arrow">' + iconSVG('arrowRight', 14, '#c8c9cc') + '</span>';
    html += '</div>';
  });
  html += '</div></div>';
  return html;
};

Views.ProfileHelpCenter = function() {
  var html = '<div class="page-container">' + UI_NavBar('互助与响应', true);
  var records = [];
  helpList.forEach(function(h) {
    if (AppState.myHelp.indexOf(h.id) >= 0) {
      // 我的求助（发布者 = 求助发布者）
      records.push({ avatar: h.publisher.avatar, name: h.publisher.name, title: h.title, sub: h.date + ' · ' + (h.responseCount || 0) + '人响应', helpId: h.id });
      // 收到的响应（发布者 = 响应者）
      (h.responses || []).forEach(function(r) {
        records.push({ avatar: r.avatar, name: r.name, title: h.title, sub: r.text, helpId: h.id });
      });
    }
  });
  if (!records.length) {
    html += UI_Empty('暂无互助记录');
  } else {
    html += '<div class="card-list">';
    records.forEach(function(rec) {
      html += '<div class="comp-cell" data-action="nav" data-payload="/help/' + rec.helpId + '">';
      html += '<img src="' + rec.avatar + '" style="width:40px;height:40px;border-radius:50%;margin-right:10px">';
      html += '<div class="cell-body"><div class="cell-title">' + escapeHtml(rec.title) + '</div><div class="cell-label">' + escapeHtml(rec.name) + ' · ' + escapeHtml(rec.sub) + '</div></div>';
      html += '<span class="cell-arrow">' + iconSVG('arrowRight', 14, '#c8c9cc') + '</span>';
      html += '</div>';
    });
    html += '</div>';
  }
  html += '</div>';
  return html;
};

Views.ProfileBusinessCenter = function() {
  var html = '<div class="page-container">' + UI_NavBar('商务求助中心', true);
  var items = [
    { title: '我的商务', path: '/profile/my-business', icon: 'briefcase' },
    { title: '我的服务', path: '/profile/my-services', icon: 'service' },
    { title: '服务咨询', path: '/profile/service-consults', icon: 'message' },
    { title: '服务订单', path: '/profile/service-orders', icon: 'list' }
  ];
  html += '<div class="card-list">';
  items.forEach(function(item) {
    html += '<div class="comp-cell" data-action="nav" data-payload="' + item.path + '">';
    html += '<div style="width:40px;height:40px;border-radius:10px;background:var(--primary-light);display:flex;align-items:center;justify-content:center;margin-right:12px">';
    html += iconSVG(item.icon, 18, '#fff');
    html += '</div>';
    html += '<div class="cell-body">';
    html += '<div class="cell-title">' + escapeHtml(item.title) + '</div>';
    html += '</div>';
    html += '<span class="cell-arrow">' + iconSVG('arrowRight', 14, '#c8c9cc') + '</span>';
    html += '</div>';
  });
  html += '</div></div>';
  return html;
};

Views.ProfileLearning = function() {
  var role = AppState.currentRole;
  var isMember = roleRank[role] >= 2;
  var html = '<div class="page-container">' + UI_NavBar('学习消费', true);
  var items = [
    { title: '订阅课程', path: '/profile/subscribe', icon: 'book' },
    { title: '团购订单', path: '/profile/group-buy', icon: 'bag' }
  ];
  if (isMember) {
    items.push({ title: '会员订单', path: '/profile/member-orders', icon: 'wallet' });
  }
  html += '<div class="card-list">';
  items.forEach(function(item) {
    html += '<div class="comp-cell" data-action="nav" data-payload="' + item.path + '">';
    html += '<div style="width:40px;height:40px;border-radius:10px;background:var(--primary-light);display:flex;align-items:center;justify-content:center;margin-right:12px">';
    html += iconSVG(item.icon, 18, '#fff');
    html += '</div>';
    html += '<div class="cell-body">';
    html += '<div class="cell-title">' + escapeHtml(item.title) + '</div>';
    html += '</div>';
    html += '<span class="cell-arrow">' + iconSVG('arrowRight', 14, '#c8c9cc') + '</span>';
    html += '</div>';
  });
  html += '</div></div>';
  return html;
};

// ================================================================
// AI报告页面（占位符，待后续开发）
// ================================================================
Views.AIReportList = function() {
  var html = '<div class="page-container">' + UI_NavBar('AI智能报告', true);
  html += '<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:80px 32px;text-align:center">';
  html += '<div style="width:72px;height:72px;border-radius:50%;background:linear-gradient(135deg,#e8f4fd,#d4e8f7);display:flex;align-items:center;justify-content:center;margin-bottom:20px">' + iconSVG('brain', 32, '#6fa4cf') + '</div>';
  html += '<div style="font-size:16px;font-weight:600;color:#333;margin-bottom:8px">AI智能报告</div>';
  html += '<div style="font-size:13px;color:#999;line-height:1.6">功能开发中，敬请期待</div>';
  html += '</div>';
  html += '</div>';
  return html;
};

Views.AIReportDetail = function() {
  var html = '<div class="page-container">' + UI_NavBar('报告详情', true);
  html += '<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:80px 32px;text-align:center">';
  html += '<div style="width:72px;height:72px;border-radius:50%;background:linear-gradient(135deg,#e8f4fd,#d4e8f7);display:flex;align-items:center;justify-content:center;margin-bottom:20px">' + iconSVG('brain', 32, '#6fa4cf') + '</div>';
  html += '<div style="font-size:16px;font-weight:600;color:#333;margin-bottom:8px">报告详情</div>';
  html += '<div style="font-size:13px;color:#999;line-height:1.6">功能开发中，敬请期待</div>';
  html += '</div>';
  html += '</div>';
  return html;
};

Views.AIReportOrderConfirm = function() {
  var reportId = Router.params.id;
  var report = aiReports.find(function(r) { return r.id === reportId; });
  
  if (!report) {
    return '<div class="page-container">' + UI_NavBar('确认订单', true) + UI_Empty('报告不存在') + '</div>';
  }
  
  var html = '<div class="page-container">' + UI_NavBar('确认订单', true);
  
  // 报告信息
  html += '<div style="padding:16px;background:#fff;margin-bottom:12px">';
  html += '<div style="font-size:14px;font-weight:600;margin-bottom:12px">报告信息</div>';
  html += '<div style="display:flex">';
  html += '<img src="' + report.cover + '" style="width:80px;height:60px;object-fit:cover;border-radius:8px;margin-right:12px">';
  html += '<div style="flex:1">';
  html += '<div style="font-size:15px;font-weight:600;margin-bottom:4px">' + escapeHtml(report.name) + '</div>';
  html += '<div style="font-size:12px;color:#999">' + report.deliveryTime + ' · ' + report.format + '</div>';
  html += '</div>';
  html += '<div style="font-size:16px;font-weight:700;color:#ee0a24">¥' + report.price + '</div>';
  html += '</div>';
  html += '</div>';
  
  // 需求信息表单
  html += '<div style="padding:16px;background:#fff;margin-bottom:12px">';
  html += '<div style="font-size:14px;font-weight:600;margin-bottom:12px">需求信息</div>';
  
  html += '<div style="margin-bottom:12px">';
  html += '<div style="font-size:13px;color:#666;margin-bottom:4px">目标企业/产业名称</div>';
  html += '<input type="text" id="report-company" placeholder="请输入目标企业或产业名称" style="width:100%;padding:12px;border:1px solid #e8e8e8;border-radius:8px;font-size:14px">';
  html += '</div>';
  
  html += '<div style="margin-bottom:12px">';
  html += '<div style="font-size:13px;color:#666;margin-bottom:4px">所属行业</div>';
  html += '<select id="report-industry" style="width:100%;padding:12px;border:1px solid #e8e8e8;border-radius:8px;font-size:14px">';
  html += '<option value="">请选择行业</option>';
  html += '<option value="人工智能">人工智能</option>';
  html += '<option value="生物医药">生物医药</option>';
  html += '<option value="新能源汽车">新能源汽车</option>';
  html += '<option value="智能制造">智能制造</option>';
  html += '<option value="金融科技">金融科技</option>';
  html += '<option value="新材料">新材料</option>';
  html += '<option value="其他">其他</option>';
  html += '</select>';
  html += '</div>';
  
  html += '<div style="margin-bottom:12px">';
  html += '<div style="font-size:13px;color:#666;margin-bottom:4px">关注重点（选填）</div>';
  html += '<textarea id="report-focus" placeholder="请输入您关注的重点内容，如市场规模、竞争格局、技术趋势等" rows="3" style="width:100%;padding:12px;border:1px solid #e8e8e8;border-radius:8px;font-size:14px;resize:none"></textarea>';
  html += '</div>';
  
  html += '<div style="margin-bottom:12px">';
  html += '<div style="font-size:13px;color:#666;margin-bottom:4px">补充说明（选填）</div>';
  html += '<textarea id="report-note" placeholder="如有其他需求或说明，请在此填写" rows="2" style="width:100%;padding:12px;border:1px solid #e8e8e8;border-radius:8px;font-size:14px;resize:none"></textarea>';
  html += '</div>';
  
  html += '</div>';
  
  // 联系人信息
  html += '<div style="padding:16px;background:#fff;margin-bottom:12px">';
  html += '<div style="font-size:14px;font-weight:600;margin-bottom:12px">联系人信息</div>';
  
  html += '<div style="display:flex;gap:12px;margin-bottom:12px">';
  html += '<div style="flex:1">';
  html += '<div style="font-size:13px;color:#666;margin-bottom:4px">联系人姓名</div>';
  html += '<input type="text" id="report-contact-name" placeholder="请输入联系人姓名" style="width:100%;padding:12px;border:1px solid #e8e8e8;border-radius:8px;font-size:14px">';
  html += '</div>';
  html += '<div style="flex:1">';
  html += '<div style="font-size:13px;color:#666;margin-bottom:4px">联系电话</div>';
  html += '<input type="digit" id="report-contact-phone" placeholder="请输入联系电话" style="width:100%;padding:12px;border:1px solid #e8e8e8;border-radius:8px;font-size:14px">';
  html += '</div>';
  html += '</div>';
  
  html += '<div>';
  html += '<div style="font-size:13px;color:#666;margin-bottom:4px">电子邮箱</div>';
  html += '<input type="email" id="report-contact-email" placeholder="请输入电子邮箱" style="width:100%;padding:12px;border:1px solid #e8e8e8;border-radius:8px;font-size:14px">';
  html += '</div>';
  
  html += '</div>';
  
  // 底部支付栏
  html += '<div class="bottom-bar">';
  html += '<div class="bb-left">';
  html += '<div style="font-size:12px;color:#999">合计</div>';
  html += '<div style="font-size:20px;font-weight:700;color:#ee0a24">¥' + report.price + '</div>';
  html += '</div>';
  html += '<button class="comp-btn primary" data-action="submit-report-order" data-report-id="' + report.id + '" style="padding:12px 40px">提交订单</button>';
  html += '</div>';
  
  html += '</div>';
  return html;
};

Views.ReportOrders = function() {
  var html = '<div class="page-container">' + UI_NavBar('报告订单', true);
  
  if (!reportOrders.length) {
    html += UI_Empty('暂无报告订单');
  } else {
    html += '<div style="padding:12px">';
    reportOrders.forEach(function(order) {
      html += '<div class="comp-card" data-action="nav" data-payload="/profile/report-orders/' + order.id + '" style="margin-bottom:12px">';
      html += '<div style="padding:16px">';
      html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">';
      html += '<div style="font-size:12px;color:var(--text-lighter)">订单编号：' + order.id + '</div>';
      var statusColor = order.status === '已完成' ? 'success' : (order.status === '生成中' ? 'warning' : 'danger');
      html += UI_Tag(order.status, statusColor);
      html += '</div>';
      html += '<div style="display:flex;justify-content:space-between;align-items:flex-start">';
      html += '<div>';
      html += '<div style="font-size:15px;font-weight:600">' + order.reportName + '</div>';
      html += '<div style="font-size:12px;color:var(--text-lighter);margin-top:4px">' + order.companyName + '</div>';
      html += '<div style="font-size:12px;color:var(--text-lighter);margin-top:2px">' + order.createTime + '</div>';
      html += '</div>';
      html += '<div style="font-size:17px;font-weight:700;color:#ee0a24">¥' + order.price + '</div>';
      html += '</div>';
      html += '</div>';
      html += '</div>';
    });
    html += '</div>';
  }
  
  html += '</div>';
  return html;
};

Views.ReportOrderDetail = function() {
  var orderId = Router.params.id;
  var order = reportOrders.find(function(o) { return o.id === orderId; });
  
  if (!order) {
    return '<div class="page-container">' + UI_NavBar('订单详情', true) + UI_Empty('订单不存在') + '</div>';
  }
  
  var html = '<div class="page-container">' + UI_NavBar('订单详情', true);
  
  // 订单状态
  html += '<div style="padding:20px 16px;background:linear-gradient(135deg,#6fa4cf,#1976d2);color:#fff">';
  var statusText = order.status === '已完成' ? '报告已生成' : (order.status === '生成中' ? 'AI正在生成报告' : '待支付');
  html += '<div style="font-size:18px;font-weight:700;margin-bottom:4px">' + statusText + '</div>';
  html += '<div style="font-size:12px;opacity:0.9">订单编号：' + order.id + '</div>';
  html += '</div>';
  
  // 报告信息
  html += '<div style="padding:16px;background:#fff;margin-top:-10px;border-radius:16px 16px 0 0">';
  
  // 报告名称和价格
  html += '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">';
  html += '<div>';
  html += '<div style="font-size:16px;font-weight:600">' + order.reportName + '</div>';
  html += '<div style="font-size:12px;color:#999;margin-top:2px">' + order.companyName + ' · ' + order.industry + '</div>';
  html += '</div>';
  html += '<div style="font-size:20px;font-weight:700;color:#ee0a24">¥' + order.price + '</div>';
  html += '</div>';
  
  // 时间信息
  html += '<div class="comp-cell-group">';
  html += '<div class="comp-cell"><div class="cell-body"><div class="cell-title">下单时间</div></div><span class="cell-value">' + order.createTime + '</span></div>';
  if (order.deliveryTime) {
    html += '<div class="comp-cell"><div class="cell-body"><div class="cell-title">交付时间</div></div><span class="cell-value">' + order.deliveryTime + '</span></div>';
  }
  if (order.downloadCount > 0) {
    html += '<div class="comp-cell"><div class="cell-body"><div class="cell-title">下载次数</div></div><span class="cell-value">' + order.downloadCount + '次</span></div>';
  }
  html += '</div>';
  
  html += '</div>';
  
  // 报告下载区域（仅已完成状态）
  if (order.status === '已完成') {
    html += '<div style="margin:12px;padding:20px;background:#f5f7fa;border-radius:12px;text-align:center">';
    html += '<div style="font-size:32px;margin-bottom:12px">📄</div>';
    html += '<div style="font-size:14px;font-weight:600;margin-bottom:4px">报告已生成</div>';
    html += '<div style="font-size:12px;color:#999;margin-bottom:16px">您可以下载报告进行查看</div>';
    html += '<button class="comp-btn primary" data-action="download-report" style="padding:10px 40px">下载报告</button>';
    html += '</div>';
  } else if (order.status === '生成中') {
    html += '<div style="margin:12px;padding:20px;background:#fffbe6;border-radius:12px">';
    html += '<div style="display:flex;align-items:center;gap:12px">';
    html += '<div class="loading-spinner"></div>';
    html += '<div>';
    html += '<div style="font-size:14px;font-weight:600;color:#dabb6e">AI正在生成报告</div>';
    html += '<div style="font-size:12px;color:#999;margin-top:4px">请耐心等待，预计2-3个工作日完成</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
  } else {
    html += '<div style="margin:12px;padding:20px;background:#fff0f0;border-radius:12px;text-align:center">';
    html += '<div style="font-size:32px;margin-bottom:12px">💰</div>';
    html += '<div style="font-size:14px;font-weight:600;color:#ee0a24;margin-bottom:4px">待支付</div>';
    html += '<div style="font-size:12px;color:#999;margin-bottom:16px">请完成支付后等待报告生成</div>';
    html += '<button class="comp-btn primary" data-action="pay-report-order" style="padding:10px 40px">立即支付</button>';
    html += '</div>';
  }
  
  html += '</div>';
  return html;
};
