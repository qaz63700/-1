/****** 服务端接口地址,结尾带上/符 *******/
var baseUrl = 'http://192.168.0.158:8020/';

/****** 表格分页默认记录数 ***************/
var pageSize = 20;

/****** 版权所有说明文字 ***************/
var copyRight = '技术支持：杭州尤普软件有限公司'

/****** 热线配置 ***************/
var ctiServerUrl = '192.168.0.180'; //CTI服务器地址

var ctiPort = 6116; //CTI端口号

//var sipPort = 5066; //SIP端口号,暂时无用

/****** 地图展示配置 ***************/
var baiduAk = '5qg9s0pPt3qTnCGw3rWiTKdMlou7UjRx'
var mapMode = 'baidu'; //地图模式(百度,天地图,高德)
var mapLocation = '岳西'; //地图搜索范围
var mapCenterPoint = {
    lng: 116.365464,
    lat: 30.857566
} //地图默认中心点

var agentList=[ //分机号列表
    {
        agentNum:"8001", //分机号
        employeeNo:"8001",//坐席号
        checkinPwd:"8001",//签入密码
    },
    {
        agentNum:"8002", //分机号
        employeeNo:"8002",//坐席号
        checkinPwd:"8002",//签入密码
    },
]