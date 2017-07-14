var webpage = require('webpage');
var page = webpage.create();
var fs = require('fs');

var myDate = new Date();
var name= myDate.toLocaleDateString();

var loadname="./datasource/"+name+"/1060.html";

page.open('https://search.jd.com/Search?keyword=gtx1060', function (status) {
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