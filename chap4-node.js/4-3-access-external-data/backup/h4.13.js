/*
    Web 상의 데이터는 단순한 텍스트가 아닌, XML 혹은 JSON과 같은 형태로 공개되어있다.
    JSON = JavaScript Object Notation = 오브젝트의 리테럴이다 
    즉, {} 안에서 이름과 값을 콜론으로 연결하는 것. 이 형식이 웹에서 매우 많이 이용되는 것.

    * 오브젝트를 JSON형식의 텍스트로 변환한다:
        변수 = JSON.stringify( 오브젝트 );
    * JSON형식의 텍스트를 오브젝트로 변환한다:
        변수 = JSON.parse( 텍스트 );
*/

// JSON데이터를 받아보자

const http = require('https');

http.get('https://fapi.binance.com/fapi/v1/depth?symbol=BTCUSDT&limit=5', (res) => {
    let body = '';
    res.setEncoding('utf8');

    res.on('data', (chunk) => {
        body += chunk;
    });

    res.on('end', (res) => {
        json = JSON.parse(body);
        console.table(json);
    })
})