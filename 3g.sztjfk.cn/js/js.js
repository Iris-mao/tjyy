//首页医生部分菜单切换
$(".zm_z #cz").click(function(){$(".zm_a").css("display","none");$(".zm_z li").removeClass("on");$(".zm_b").css("display","block");$(".zm_z #cz").addClass("on");})
$(".zm_z #sj").click(function(){$(".zm_b").css("display","none");$(".zm_z li").removeClass("on");$(".zm_a").css("display","block");$(".zm_z #sj").addClass("on");})

//首页三甲专家滚动
TouchSlide({ slideCell:"#focus", titCell:".hd ul", mainCell:".bd ul", effect:"left", autoPlay:false, autoPage:true, }); 

//首页常驻专家滚动
TouchSlide({ slideCell:"#focus1", titCell:".hd ul", mainCell:".bd ul", effect:"left", autoPlay:false, autoPage:true, });

//首页品牌滚动
TouchSlide({ slideCell:"#ppbox",titCell:".zm_t li",mainCell:".zm_c ul",effect:"leftLoop",delayTime:300});

//简介页医生滚动
  TouchSlide({ slideCell:"#focus2", titCell:".hd ul", mainCell:".bd ul", effect:"left", autoPlay:false, autoPage:true, });

//简介页服务滚动
  TouchSlide({ slideCell:"#focus3", titCell:".hd ul", mainCell:".bd ul", effect:"left", autoPlay:false, autoPage:true, });

//医生页面下面小banner滚动
TouchSlide({ slideCell:"#ls-ban",titCell:".hd ul li", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
    mainCell:".bd ul", effect:"leftLoop", autoPlay:true, //自动播放
    interTime:5000
});