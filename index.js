const express = require('express')
var cors = require('cors')
const app = express()   //app이 서버를 의미

app.use(cors()) //cors() 메서드 인자로 조건을 받음. 인자를 비우면 모든 요청에 대한 응답을 허용함을 의미

app.get('/sound/:name', function (req, res) {
  const {name} = req.params;    // {key:value}에서 value값이 {name}으로 들어감

  if(name=="dog") {
     res.json({'sound':'멍멍'})
  } else if(name=="cat") {  
    res.json({'sound':'야옹'})
  } else if(name=="pig") {
    res.json({'sound':'꿀꿀'})
  } else {
    res.json({'sound':'알 수 없음'})
  };
  
})



app.listen(3000)