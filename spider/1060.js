var webpage = require('webpage');
var page = webpage.create();
var fs = require('fs');



page.open('https://s.taobao.com/search?q=gtx1060', function (status) {
    var data;
    if (status === 'fail') {
        console.log('open page fail!');
    } else {
      fs.write('1060.html',page.content,'w');
        // console.log(page.content);//打印出HTML内容
    }
    page.close();//关闭网页
    phantom.exit();//退出phantomjs命令行
});