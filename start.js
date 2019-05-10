var http = require('http');
var fs = require('fs');
var url = require('url');
 
 
// 创建服务器
http.createServer( function (request, response) {  
   // 解析请求，包括文件名
   var pathname = url.parse(request.url).pathname;
   console.log("Request for " + request + " request.");
   // 输出请求的文件名
   console.log("Request for " + pathname + " received.");
   
   // 从文件系统中读取请求的文件内容
   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);
         // HTTP 状态码: 404 : NOT FOUND
         // Content Type: text/html
         response.writeHead(404, {'Content-Type': 'text/html'});
      }else{             
         // HTTP 状态码: 200 : OK
         // Content Type: text/html
         let fileName = pathname.lastIndexOf(".");//取到文件名开始到最后一个点的长度
         let fileNameLength = pathname.length;//取到文件名长度
         let type = pathname.substring(fileName + 1, fileNameLength);//
         console.log("'Content-Type': 'text/'+",type);
         response.writeHead(200, {'Content-Type': 'text/'+type});    
         
         // 响应文件内容
         response.write(data.toString());        
      }
      //  发送响应数据
      response.end();
   });   
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000/');