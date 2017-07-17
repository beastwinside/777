var fs=require('fs');
var cheerio=require('cheerio');



var myDate = new Date();//获取当前时间，动态读取时间保存为当天文件夹
var year= myDate.getFullYear();//获取年
var month= myDate.getMonth()+1;//获取月
var date=myDate.getDate();//获取日
var riqi=year+"年"+month+"月"+date+"日";//评价日期字符串


var loadname="../datasource/"+riqi+"/16g内存.html";//拼接保存位置
var data=fs.readFileSync(loadname,"utf-8"); //根据文字读取爬虫数据

$=cheerio.load(data); //cheerio，类似与Jquerry，装载完便与操作字符串

// console.log($('div[class=p-shop]').text()); 这个之后用来筛选店
// console.log($('em','.p-name-type-2').text()); //这个来筛选型号
 // console.log($('strong','ul.gl-warp').text()); //这个筛选价格
var dian=$('div[class=p-shop]').text();
var xinghao=$('em','.p-name-type-2').text();
var jiage=$('strong','ul.gl-warp').text();


function dealram(){
	let xh=xinghao;
	let dianpu=dian;
	let jg=jiage;
	let xhflag=xh.match(/台式机内存|笔记本内存|工作站内存/g);
	let xhcon=xh.split(/台式机内存|笔记本内存|工作站内存/g);
	let jgarr=jg.split('评价');
	let jgnum=new Array();
	let pjnum=new Array();
	for(i=0;i<=15;i++)
		{xhcon[i]=xhcon[i]+xhflag[i];
			jgarr[i]=jgarr[i].split("已有");
			jgnum.push(parseFloat(jgarr[i][0].split("￥")[1]));
			pjnum.push(parseFloat(jgarr[i][1].split("条")[0]));

		}




console.log(pjnum);





}

dealram();



