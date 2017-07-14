var fs=require('fs');
var cheerio=require('cheerio');



var myDate = new Date();
var year= myDate.getFullYear();
var month= myDate.getMonth()+1;
var date=myDate.getDate();
var riqi=year+"年"+month+"月"+date+"日";


var loadname="../datasource/"+riqi+"/1080.html";
var data=fs.readFileSync(loadname,"utf-8");

$=cheerio.load(data);

// console.log($('div[class=p-shop]').text()); 这个之后用来筛选店

// console.log($('em','.p-name-type-2').text()); //这个来筛选型号

 // console.log($('strong','ul.gl-warp').text()); //这个筛选价格

