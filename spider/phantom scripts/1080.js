var webpage = require('webpage');
var page = webpage.create();
var fs = require('fs');

var myDate = new Date();
var year= myDate.getFullYear();
var month= myDate.getMonth();
var date=myDate.getDate();

var riqi=year+"年"+month+"月"+date+"日";
var loadname="../datasource/"+riqi+"/1080.html";

page.open('https://search.jd.com/Search?keyword=gtx1080', function (status) {
    var data;
    if (status === 'fail') {
        console.log('open page fail!');
    } else {
      fs.write(loadname,page.content,'w');
        // console.log(page.content);//打印出HTML内容
    }
    page.close();//关闭网页
    phantom.exit();//退出phantomjs命令行
});