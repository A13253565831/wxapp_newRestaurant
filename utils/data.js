var WYY_HOST_URL = "https://wxapi.weiyunyi.com";
var type = "Fitment";
module.exports = {
  wyy_host_api_url:WYY_HOST_URL,
  wyy_user_wxappid: "6",
  wyy_share_info:'',
  wyy_config_version:2567,
  //命名规范 模块名_方法名
  //以下通用方法
	//用户登录slogin
	index_slogin:WYY_HOST_URL + "/Wap.php/Index/slogin",
	//错误日志errorLog 
	index_errorLog :WYY_HOST_URL + "/Wap.php/Index/errorLog",
	//获取分享信息 getShareInfo
	index_getShareInfo:WYY_HOST_URL + "/Wap.php/Index/getShareInfo",
	//获取用户菜单列表 getUserMenuList
	Index_getUserMenuList:WYY_HOST_URL + "/Wap.php/Index/getUserMenuList",
	//获取用户信息 getUserInfo
	Index_getUserInfo:WYY_HOST_URL + "/Wap.php/Index/getUserInfo",
	//编辑用户信息 editUserInfo
	Index_editUserInfo:WYY_HOST_URL + "/Wap.php/Index/editUserInfo",
	//获取用户支付日志 getUserPaylog
	Index_getUserPaylog:WYY_HOST_URL + "/Wap.php/Index/getUserPaylog",
	//创建支付数据 makePayData
	Index_makePayData:WYY_HOST_URL + "/Wap.php/Index/makePayData",
	////以下医疗行业方法
	//获取商家基本信息 getinfo
	hospital_getinfo:WYY_HOST_URL + "/Wap.php/"+type+"/getinfo",
	//获取商家首页幻灯片 getslide
	hospital_getslide:WYY_HOST_URL + "/Wap.php/"+type+"/getslide",
	//获取商家分类 gettype
  hospital_gettype: WYY_HOST_URL + "/Wap.php/" + type +"/gettype",
	//获取图库分组 getphotogroup
  hospital_getphotogroup: WYY_HOST_URL + "/Wap.php/" + type +"/getphotogroup",
	//获取图库图片 getphoto
  hospital_getphoto: WYY_HOST_URL + "/Wap.php/" + type +"/getphoto",
	//获取文章 getartical
  hospital_getartical: WYY_HOST_URL + "/Wap.php/" + type +"/getartical",
	//获取预约列表 getprelist
  hospital_getprelist: WYY_HOST_URL + "/Wap.php/" + type +"/getprelist",
	//获取预约详情 getpre
  hospital_getpre: WYY_HOST_URL + "/Wap.php/" + type +"/getpre",
	//提交预约信息 prerecord
  hospital_postprerecord: WYY_HOST_URL + "/Wap.php/" + type +"/postprerecord",
	//获取评价信息 getevaluation
  hospital_getevaluation: WYY_HOST_URL + "/Wap.php/" + type +"/getevaluation",
  // 获取首页文章列表
  homegetartical: WYY_HOST_URL + "/Wap.php/" + type +"/homegetartical",
  //文章列表
  gettarticallist: WYY_HOST_URL + "/Wap.php/" + type + "/gettarticallist",
  // 首页图库分组
  homegetphotogroup: WYY_HOST_URL + "/Wap.php/" + type + "/homegetphotogroup",
  // 首页预约列表
  homegetprelist: WYY_HOST_URL + "/Wap.php/" + type + "/homegetprelist",
  // 文章
  getartical: WYY_HOST_URL + "/Wap.php/" + type + "/getartical",
  // 图库详情
  getphotodetail: WYY_HOST_URL + "/Wap.php/" + type + "/getphotodetail",
  getmap: WYY_HOST_URL + "/Wap.php/" + type + "/getmap",
  
}