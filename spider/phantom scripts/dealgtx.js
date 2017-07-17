var fs=require('fs');
var cheerio=require('cheerio');



var myDate = new Date();//获取当前时间，动态读取时间保存为当天文件夹
var year= myDate.getFullYear();//获取年
var month= myDate.getMonth()+1;//获取月
var date=myDate.getDate();//获取日
var riqi=year+"年"+month+"月"+date+"日";//评价日期字符串


var loadname="../datasource/"+riqi+"/1070.html";//拼接保存位置
var data=fs.readFileSync(loadname,"utf-8"); //根据文字读取爬虫数据

$=cheerio.load(data); //cheerio，类似与Jquerry，装载完便与操作字符串

// console.log($('div[class=p-shop]').text()); 这个之后用来筛选店
// console.log($('em','.p-name-type-2').text()); //这个来筛选型号
 // console.log($('strong','ul.gl-warp').text()); //这个筛选价格

var dian=$('div[class=p-shop]').text(); //一团店铺信息
var xinghao=$('em','.p-name-type-2').text(); //一团型号信息
var jiage=$('strong','ul.gl-warp').text(); //一团价格信息


function dealram(){
	let xh=xinghao;
	let dianpu=dian;
	let jg=jiage;
	
	let xhcon=xh.split("显卡");  //根据内存类型，分割字符串
	let dianarr=dianpu.split("店");
	let jgarr=jg.split('评价'); //根据评价先分离一团的价格信息
	let jgnum=new Array();    //存放分离出来后商品价格的数组
	let pjnum=new Array();  //存放分离出来后商品评价的数组。

	let allarr=new Array();

	for(i=0;i<=25;i++)
		{
			jgarr[i]=jgarr[i].split("已有");
			jgnum.push(parseFloat(jgarr[i][0].split("￥")[1])); //抽离出num类型的价格数组。
			pjnum.push(parseFloat(jgarr[i][1].split("条")[0])); //抽离出num类型的评价数组。
			xhcon[i]=xhcon[i]+"显卡"; //拼接分离的型号具体描述数组
			dianarr[i]=dianarr[i]+"店";


			allarr.push({
				评价:pjnum[i],
				店铺名:dianarr[i],
				商品描述:xhcon[i],
				价格:jgnum[i]

			});
		}
console.log(allarr);

}

dealram();



