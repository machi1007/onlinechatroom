# onlinechatroom
簡易版陽春連線聊天室，支援線上成員顯示。  
使用node.js連線，若無伺服器可用Hamachi構建虛擬區域網路，連線後即可使用。  
必須安裝：express socket.io，  
*簡易操作流程：  
1.安裝node.js  
2.開啟cmd到指定路徑  
//使用cd+(空格)+指定路徑，切換資料夾位置，若在D槽則輸入D:  
3.輸入npm init  
//初始化，產生pakeage.json文件  
4.輸入npm install express socket.io  
5.輸入node server.js  
6.連線測試：http://localhost:3000/ 
  
*其他人連線：  
1.同區域網路或wifi環境，使用對方ip+檔案預設的port:3000  
//查詢IP請開啟cmd輸入ipconfig，就可以找到IPv4 Address  
2.不同區域網路或wifi，使用Hamachi連線後，輸入對應虛擬網路的IP即可。  

【範例】  
*補充1(自己電腦連線server)：http://localhost:3000/  
*補充2(相同網路連線server)：http://192.168.0.001:3000/  
*補充3(不同網路連線server)：http://25.23.7.121:3000/  
