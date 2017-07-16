var fs=require('fs');
var cheerio=require('cheerio');



var myDate = new Date();
var year= myDate.getFullYear();
var month= myDate.getMonth()+1;
var date=myDate.getDate();
var riqi=year+"年"+month+"月"+date+"日";


var loadname="../datasource/"+riqi+"/16g内存.html";
var data=fs.readFileSync(loadname,"utf-8");

$=cheerio.load(data);

// console.log($('div[class=p-shop]').text()); 这个之后用来筛选店

// console.log($('em','.p-name-type-2').text()); //这个来筛选型号

 // console.log($('strong','ul.gl-warp').text()); //这个筛选价格
var dian=$('div[class=p-shop]').text();
var xinghao=$('em','.p-name-type-2').text();
var jiage=$('strong','ul.gl-warp').text();


function dealram(){
	let xh=xinghao;
	let dianpu=dian;
	let xhflag=xh.match(/台式机内存|笔记本内存|工作站内存/g);
	let xhcon=xh.split(/台式机内存|笔记本内存|工作站内存/g);
console.log(dianpu);





}

dealram();



