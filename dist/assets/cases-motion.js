document.addEventListener('DOMContentLoaded',()=>{
  const caseData=[
    {industry:'汽车',cover:'auto',image:'assets/real/case-im-l6.jpg',en:'AUTO / 汽车',headline:'把工程参数，翻译成生活语言',name:'智己 L6 新车上市',desc:'用“防晒神车”、窄街转弯与运动后支撑等真实情境解释产品能力，并通过跨圈层创作者拓宽人群。',metrics:[['9000万','上市 5 日曝光'],['+200%','小红书 KOS 留资'],['近 +800%','5 月预订环比'],['73.8','项目 NPS']],tags:['场景化表达','跨圈层种草','搜索承接'],source:'广告门公开复盘',url:'https://www.adquan.com/article/354010',tier:'项目公开复盘'},
    {industry:'汽车',cover:'auto',image:'assets/real/case-geely-starwish.jpg',en:'AUTO / 汽车',headline:'把一台车，放进年轻人的生活现场',name:'吉利星愿 × 小美说',desc:'围绕杭州城市空间与用户活动，把车型融入逛展、拍照和轻社交场景；该公开案例以项目事实为主，不归因销售结果。',metrics:[['IP 联名','小美说'],['城市事件','杭州 IN77']],tags:['IP 共创','城市事件','生活方式'],source:'SocialBeta 案例库',url:'https://socialbeta.com/campaign/22795',tier:'公开项目事实'},
    {industry:'户外',cover:'outdoor',image:'assets/real/case-arcteryx.jpg',en:'OUTDOOR / 户外',headline:'从小众专业，到人人可进入的山野课堂',name:'始祖鸟山地课堂',desc:'以专业课程、真实参与者与户外知识沉淀兴趣心智，让品牌角色从装备提供者延伸为户外文化共建者。',metrics:[['+124%','品牌搜索提升'],['5346万','AIPS 人群资产'],['73.17%','攀岩人群渗透'],['1000+','相关笔记']],tags:['兴趣教育','专业社群','内容资产'],source:'金投赏获奖案例',url:'https://winner.roifestival.com/cn/winners/detail/98aa5nij?year=2025',tier:'奖项公开案例'},
    {industry:'美妆',cover:'beauty',image:'assets/real/case-flower-knows.jpg',en:'BEAUTY / 美妆',headline:'用一个明星单品，撬动系列认知',name:'花知晓樱桃系列',desc:'聚焦“镜面唇釉”建立记忆点，再以妆效、包装与使用场景带动系列产品讨论和搜索。',metrics:[['+920%','产品搜索提升'],['+639%','品牌搜索热度'],['+60 位','品类排名提升']],tags:['明星单品','妆效内容','搜索增长'],source:'公开媒体复盘',url:'https://www.sohu.com/a/553475332_138893',tier:'媒体公开复盘'},
    {industry:'美妆',cover:'beauty',image:'assets/real/case-proya.png',en:'BEAUTY / 美妆',headline:'把护肤概念，做成可坚持的日常方法',name:'珀莱雅「早 C 晚 A」',desc:'以方法论内容持续教育用户，通过分层种草与搜索承接，把抽象成分语言转化为容易理解的护肤节奏。',metrics:[['400+','种草笔记'],['100×','搜索同比增长'],['+5.5%','市场份额提升'],['30+','头部内容']],tags:['概念教育','分层种草','长期心智'],source:'数英公开案例',url:'https://www.digitaling.com/projects/226491.html',tier:'项目公开复盘'},
    {industry:'美妆',cover:'beauty',image:'assets/real/case-guyu.jpg',en:'BEAUTY / 美妆',headline:'从产品体验到品类占位',name:'谷雨「小奶罐」',desc:'围绕美白面霜核心使用感和成分价值持续沟通，以内容与店铺承接形成从认知到转化的路径。',metrics:[['TOP 1','美白面霜品类'],['TOP 3','小红书商城销售'],['+200%','公开复盘 GMV 增长']],tags:['品类占位','体验种草','店铺承接'],source:'数英公开案例',url:'https://www.digitaling.com/projects/226421.html',tier:'项目公开复盘'},
    {industry:'美妆',cover:'beauty',image:'assets/real/case-intoyou.jpg',en:'BEAUTY / 美妆',headline:'让唇泥从新品类，长成用户语言',name:'INTO YOU 唇泥',desc:'以色号试用、妆容教程与真实上嘴体验推动新品类教育。历史数据为第三方样本估算，适合做趋势参考，不作为官方口径。',metrics:[['380 家','历史样本店铺'],['约 40%','样本分销占比']],tags:['新品类教育','色号内容','达人分销'],source:'人人都是产品经理',url:'https://www.woshipm.com/share/5924060.html',tier:'第三方历史估算'},
    {industry:'服饰',cover:'fashion',image:'assets/real/case-zhizhi.webp',en:'FASHION / 服饰',headline:'用冬日场景，把上新变成可感知的温度',name:'致知「暖冬上新」',desc:'通过季节需求、穿搭场景与新品讨论承接搜索，让服饰内容从“看款式”进一步走到“我会怎么穿”。',metrics:[['150万+','小红书店铺 GMV'],['+49%','品牌搜索热度'],['+213%','新品讨论度']],tags:['季节上新','穿搭场景','站内转化'],source:'公开媒体报道',url:'https://www.fabugov.com/html/shehui/2024/0112/30781.html',tier:'媒体公开数据'}
  ];

  const heroVisual=document.querySelector('#view-home .heroVisual');
  const heroAlbums=[
    {image:'assets/real/lifestyle-travel-user.jpg',label:'海边假日',title:'把风景收进今天',note:'真实旅行照片 · 01 / 02'},
    {image:'assets/real/lifestyle-resort-user.jpg',label:'度假穿搭',title:'阳光下的松弛一刻',note:'真实生活照片 · 02 / 02'}
  ];
  const videoNotes=[
    {image:'assets/real/xhs-video-cover-weizhou.jpg',label:'旅行 VLOG',title:'用《白莲花度假村》的方式打开涠洲岛',url:'https://www.xiaohongshu.com/explore/6a38f66400000000080332ed?xsec_token=ABtmGK6uTaIPIApvtHmPxlj0r9qkqxQ152dAYQX-yaAog=&xsec_source=pc_search&source=web_explore_feed'},
    {image:'assets/real/xhs-video-cover-moments.jpg',label:'海边拍照',title:'那些无法复刻的人生瞬间',url:'https://www.xiaohongshu.com/explore/6a927d98000000000402b411?xsec_token=ABX9wlVT4O3gZj_sgyviKnTbgXGsi_v3jsWRW_hBxIEi8=&xsec_source=pc_search&source=web_explore_feed'}
  ];
  heroVisual.innerHTML=`
    <div class="heroMediaTabs" role="tablist" aria-label="切换首屏媒体">
      <button class="heroMediaTab active" role="tab" aria-selected="true" data-media="album">图片相册</button>
      <button class="heroMediaTab" role="tab" aria-selected="false" data-media="video">视频笔记</button>
    </div>
    <div class="heroAlbum active" data-hero-panel="album" aria-live="polite">
      <div class="heroPhoto" role="img"></div>
      <div class="albumStamp"><small></small><b></b><span></span></div>
    </div>
    <div class="heroVideoNotes" data-hero-panel="video" aria-live="polite"></div>
    <div class="heroMediaControls">
      <button class="albumArrow albumPrev" aria-label="上一张">←</button>
      <div class="albumDots" aria-label="相册分页"></div>
      <button class="albumArrow albumNext" aria-label="下一张">→</button>
    </div>
    <div class="heroBand"><div><b>搜索</b><small>找答案</small></div><div><b>发现</b><small>遇灵感</small></div><div><b>记录</b><small>分享生活</small></div></div>`;
  const albumPanel=heroVisual.querySelector('[data-hero-panel="album"]');
  const videoPanel=heroVisual.querySelector('[data-hero-panel="video"]');
  const heroPhoto=albumPanel.querySelector('.heroPhoto');
  const albumDots=heroVisual.querySelector('.albumDots');
  let heroMode='album',heroIndex=0,heroTimer,pointerStart=0;
  const renderHero=()=>{
    const collection=heroMode==='album'?heroAlbums:videoNotes;
    heroIndex=(heroIndex+collection.length)%collection.length;
    albumPanel.classList.toggle('active',heroMode==='album');
    videoPanel.classList.toggle('active',heroMode==='video');
    if(heroMode==='album'){
      const item=collection[heroIndex];
      heroPhoto.style.backgroundImage=`linear-gradient(180deg,transparent 52%,rgba(5,5,7,.48)),url('${item.image}')`;
      heroPhoto.setAttribute('aria-label',item.title);
      albumPanel.querySelector('.albumStamp small').textContent=item.label;
      albumPanel.querySelector('.albumStamp b').textContent=item.title;
      albumPanel.querySelector('.albumStamp span').textContent=item.note;
    }else{
      const item=collection[heroIndex];
      videoPanel.innerHTML=`<a class="videoNote" href="${item.url}" target="_blank" rel="noopener" style="background-image:linear-gradient(180deg,rgba(5,5,7,.05),rgba(5,5,7,.68)),url('${item.image}')"><span class="videoBadge">公开视频笔记</span><span class="videoPlay" aria-hidden="true">▶</span><span class="videoCopy"><small>${item.label}</small><b>${item.title}</b><em>前往小红书观看 ↗</em></span></a>`;
    }
    albumDots.innerHTML=collection.map((_,i)=>`<button class="albumDot${i===heroIndex?' active':''}" aria-label="切换到第 ${i+1} 页"></button>`).join('');
    albumDots.querySelectorAll('button').forEach((dot,i)=>dot.addEventListener('click',()=>{heroIndex=i;renderHero();restartHero()}));
  };
  const stepHero=direction=>{heroIndex+=direction;renderHero();restartHero()};
  const restartHero=()=>{clearInterval(heroTimer);if(!matchMedia('(prefers-reduced-motion: reduce)').matches)heroTimer=setInterval(()=>stepHero(1),5200)};
  heroVisual.querySelector('.albumPrev').addEventListener('click',()=>stepHero(-1));
  heroVisual.querySelector('.albumNext').addEventListener('click',()=>stepHero(1));
  heroVisual.querySelectorAll('.heroMediaTab').forEach(tab=>tab.addEventListener('click',()=>{
    heroMode=tab.dataset.media;heroIndex=0;
    heroVisual.querySelectorAll('.heroMediaTab').forEach(x=>{const on=x===tab;x.classList.toggle('active',on);x.setAttribute('aria-selected',String(on))});
    renderHero();restartHero();
  }));
  heroVisual.addEventListener('pointerdown',event=>{pointerStart=event.clientX});
  heroVisual.addEventListener('pointerup',event=>{const delta=event.clientX-pointerStart;if(Math.abs(delta)>55)stepHero(delta<0?1:-1)});
  heroVisual.addEventListener('mouseenter',()=>clearInterval(heroTimer));
  heroVisual.addEventListener('mouseleave',restartHero);
  renderHero();restartHero();
  const filters=document.querySelector('#view-cases .caseFilters');
  const grid=document.querySelector('#caseGrid');
  filters.innerHTML=['全部','汽车','美妆','服饰','户外'].map((x,i)=>`<button class="caseFilter${i===0?' active':''}" data-industry="${x}">${x==='全部'?'全部行业':x}</button>`).join('');
  grid.innerHTML=caseData.map(c=>`<article class="caseCard realCase reveal" data-industry="${c.industry}"><div class="caseCover realCover ${c.cover}" style="background-image:linear-gradient(180deg,rgba(0,0,0,.08),rgba(0,0,0,.72)),url('${c.image}')"><small>${c.en}</small><b>${c.headline}</b></div><div class="caseBody"><h3>${c.name}</h3><p class="caseDeck">${c.desc}</p><div class="metricGrid">${c.metrics.map(m=>`<div class="metricItem"><strong>${m[0]}</strong><small>${m[1]}</small></div>`).join('')}</div><div class="caseTags">${c.tags.map(t=>`<span>${t}</span>`).join('')}</div><div class="sourceRow"><span class="sourceTier">${c.tier}</span><a href="${c.url}" target="_blank" rel="noopener">查看来源 ↗</a></div></div></article>`).join('')+'<div class="empty" id="caseEmpty">该行业案例正在补充中。</div>';
  const note=document.querySelector('#view-cases .formNote');
  note.outerHTML='<div class="dataNote">数据说明：以上指标来自品牌、案例平台或媒体公开复盘，保留其历史项目口径，并非当前实时经营数据；吉利星愿仅呈现公开项目事实，INTO YOU 为第三方历史样本估算。正式上线前建议再次取得品牌授权并复核原始数据。</div>';
  const filterCards=[...grid.querySelectorAll('.caseCard')],empty=grid.querySelector('#caseEmpty');
  filters.querySelectorAll('.caseFilter').forEach(button=>button.addEventListener('click',()=>{filters.querySelectorAll('.caseFilter').forEach(x=>x.classList.remove('active'));button.classList.add('active');let shown=0;filterCards.forEach(card=>{const on=button.dataset.industry==='全部'||card.dataset.industry===button.dataset.industry;card.style.display=on?'flex':'none';if(on)shown++});empty.style.display=shown?'none':'block'}));

  const contentSection=document.querySelector('#view-home .section.soft');
  contentSection.querySelector('.kicker').textContent='CONTENT & LIVE';
  contentSection.querySelector('h2').textContent='总有一款是自己喜欢看的';
  contentSection.querySelector('.sectionHead p').textContent='既有来自普通人的真实生活记录，也有风格鲜明的买手直播。按自己喜欢的方式，慢慢发现。';
  const lifeGrid=contentSection.querySelector('.lifeGrid');
  lifeGrid.classList.add('discoveryPanel','active');
  lifeGrid.dataset.panel='content';
  lifeGrid.insertAdjacentHTML('beforebegin','<div class="discoveryTabs" role="tablist" aria-label="内容类型"><button class="discoveryTab active" role="tab" aria-selected="true" data-panel="content">内容</button><button class="discoveryTab" role="tab" aria-selected="false" data-panel="live">直播</button></div>');
  const buyerGrid=document.createElement('div');
  buyerGrid.className='buyerGrid discoveryPanel';
  buyerGrid.dataset.panel='live';
  buyerGrid.innerHTML=`
    <article class="buyerCard" data-tilt-card><img src="assets/real/buyer-dongjie.jpg" alt="董洁生活方式买手直播公开画面"><div class="buyerCopy"><span>慢直播 · 生活方式</span><h3>董洁</h3><p>用从容讲解、穿搭示范与生活故事，让选品像一次朋友间的分享。</p><a href="https://www.36kr.com/p/2171004103143939" target="_blank" rel="noopener">查看公开报道 ↗</a></div></article>
    <article class="buyerCard" data-tilt-card><img src="assets/real/buyer-wuxin.jpg" alt="吴昕小红书买手直播公开画面"><div class="buyerCopy"><span>实用穿搭 · 快乐表达</span><h3>吴昕</h3><p>从一周穿搭到生活好物，用轻松互动和即时反馈建立亲近感。</p><a href="https://m.thepaper.cn/newsDetail_forward_28183150" target="_blank" rel="noopener">查看公开报道 ↗</a></div></article>
    <article class="buyerCard" data-tilt-card><img src="assets/real/buyer-wuqianyu.jpg" alt="吴千语小红书买手直播公开画面"><div class="buyerCopy"><span>美妆 · 精致生活</span><h3>吴千语</h3><p>把产品放进旅行、运动与居家护理场景，用长期内容积累审美信任。</p><a href="https://www.c2cc.cn/news/10011730.html" target="_blank" rel="noopener">查看公开报道 ↗</a></div></article>`;
  lifeGrid.after(buyerGrid);
  contentSection.querySelectorAll('.discoveryTab').forEach(tab=>tab.addEventListener('click',()=>{contentSection.querySelectorAll('.discoveryTab').forEach(x=>{const on=x===tab;x.classList.toggle('active',on);x.setAttribute('aria-selected',String(on))});contentSection.querySelectorAll('.discoveryPanel').forEach(panel=>panel.classList.toggle('active',panel.dataset.panel===tab.dataset.panel));if(window.AOS)requestAnimationFrame(()=>AOS.refresh())}));

  const motion=document.createElement('section');
  motion.className='motionSection';
  motion.innerHTML=`<div class="wrap motionIntro"><div class="reveal"><span class="kicker">REAL CASES, REAL IMPACT</span><h2>好内容，<br>让品牌进入生活</h2><p>不是把卖点说得更响，而是找到用户真正会在意的那一刻。滚动看看，产品如何被翻译成生活语言。</p><div class="motionHint">自动切换真实公开案例</div><div class="showcaseNav" aria-label="切换案例"></div></div><div class="showcase reveal" aria-live="polite"></div></div>`;
  document.querySelector('#view-home .closing').before(motion);
  const featured=[caseData[0],caseData[2],caseData[3],caseData[7]],showcase=motion.querySelector('.showcase'),nav=motion.querySelector('.showcaseNav');
  showcase.innerHTML=featured.map((c,i)=>`<article class="showcaseCard hasImage${i===0?' active':''}" style="background-image:linear-gradient(90deg,rgba(10,10,12,.94) 0%,rgba(10,10,12,.74) 55%,rgba(10,10,12,.16) 100%),url('${c.image}')" data-depth="${i}"><div class="showTop"><span class="showIndustry">${c.en}</span><span class="evidenceBadge">${c.tier}</span></div><div class="showMain"><h3 class="showTitle">${c.name}<br>${c.headline}</h3><p class="showStrategy">${c.desc}</p></div><div class="showMetric"><strong>${c.metrics[0][0]}</strong><span>${c.metrics[0][1]}</span></div></article>`).join('');
  nav.innerHTML=featured.map((_,i)=>`<button class="showDot${i===0?' active':''}" aria-label="查看第 ${i+1} 个案例"></button>`).join('');
  let active=0,timer;
  const selectCase=index=>{active=index;const cards=[...showcase.children];cards.forEach((card,i)=>{const depth=(i-index+cards.length)%cards.length;card.dataset.depth=depth;card.classList.toggle('active',depth===0)});[...nav.children].forEach((dot,i)=>dot.classList.toggle('active',i===index))};
  const restart=()=>{clearInterval(timer);if(!matchMedia('(prefers-reduced-motion: reduce)').matches)timer=setInterval(()=>selectCase((active+1)%featured.length),4300)};
  [...nav.children].forEach((dot,i)=>dot.addEventListener('click',()=>{selectCase(i);restart()}));
  restart();motion.addEventListener('mouseenter',()=>clearInterval(timer));motion.addEventListener('mouseleave',restart);

  const revealItems=[...document.querySelectorAll('.reveal'),...document.querySelectorAll('.lifeCard,.value,.gainCard,.buyerCard')];
  revealItems.forEach((el,i)=>{el.classList.add('reveal');el.dataset.aos='fade-up';el.dataset.aosDelay=String((i%4)*55)});
  const reduceMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(window.AOS&&!reduceMotion)AOS.init({duration:720,easing:'ease-out-cubic',once:true,offset:60});
  else if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('inView');observer.unobserve(entry.target)}}),{threshold:.14});revealItems.forEach(el=>observer.observe(el))}else revealItems.forEach(el=>el.classList.add('inView'));
  document.querySelectorAll('[data-view]').forEach(link=>link.addEventListener('click',()=>{if(window.AOS)requestAnimationFrame(()=>AOS.refreshHard())}));
  if(window.Lenis&&!reduceMotion)new Lenis({autoRaf:true,duration:1.05,smoothWheel:true,anchors:true});
  if(window.VanillaTilt&&!reduceMotion)VanillaTilt.init(document.querySelectorAll('[data-tilt-card],.realCase'),{max:3,speed:650,scale:1.012,glare:true,'max-glare':.08,gyroscope:false});
  let ticking=false;
  const parallax=()=>{if(ticking)return;ticking=true;requestAnimationFrame(()=>{const home=document.querySelector('#view-home'),hero=document.querySelector('#view-home .hero');if(hero&&home.classList.contains('active')&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const y=Math.min(scrollY,650);hero.querySelector('.heroVisual').style.transform=`translate3d(0,${y*.075}px,0) rotateX(${Math.min(y*.006,2.3)}deg)`;const copy=hero.querySelector('.heroGrid>div:first-child');copy.style.transform=`translate3d(0,${y*.025}px,0)`;copy.style.opacity=String(Math.max(.45,1-y/900))}ticking=false})};
  addEventListener('scroll',parallax,{passive:true});
});
