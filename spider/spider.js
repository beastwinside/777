var https = require('https');
var http = require('http');
var fs = require('fs');  
  
// 要抓取的网页地址  
var url = 'https://search.jd.com/Search?keyword=gtx1070'  
  
https.get(url, function(res) {  
    var html = ''  ;
    res.on('data', function(data) {  
        html += data;  
    })  
    res.on('end', function() {  
        // 将抓取的内容保存到本地文件中  
        fs.writeFile('index.html', html, function(err) {  
            if (err) {  
                console.log('出现错误!')  
            }  
            console.log('已输出至index.html中')  
        })  
    })  
}).on('error', function(err) {  
    console.log('错误信息：' + err)  
})  
