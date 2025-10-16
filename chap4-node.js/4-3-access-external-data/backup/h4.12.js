/* 
    지정한 주소에서 GET으로 엑세스:
        http.get( 주소, (인수) => {...엑세스 시 처리...} );

    response의 이벤트 설정:
        <response>.on(이벤트명, arrow function);

    이벤트에는 여러 종류가 있는데, 데이터가 보내져왔을 때의 이벤트는 "data"라는 이름을 가짐.
    이 이벤트에서는, arrow function의 변수로서, 보내져온 데이터(텍스트)가 전달된다. 
    단, 이 data이벤트는, 1번밖에 일어나지 않는다. 따라서, on 메소드로 데이터를 받아도, 모든 게 왔는지 모름.

    데이터의 송신 완료는, "end"이벤트를 체크하면 된다.

    즉, http.get에 의한 데이터 수신의 flow는 다음과 같다:
    1. http.get에서 지정 주소에 엑세스한다.
    2. get의 제2변수에 준비된 arrow 함수에서, response를 변수에 전달받는다.
    3. response에 data이벤트의 처리를 할당하여, 그 arrow function에서 받은 데이터를 어딘가 보관한다.
       데이터는 필요한 만큼 data 이벤트에 보내지므로, 보내져온 데이터를 1개로 통합하여 간다.
    4. response에 end 이벤트의 처리가 할당되어, 그 arrow 함수에서 데이터 송신 완료 후의 처리를 준비한다.
*/

const https = require('https');

https.get('https://fapi.binance.com/fapi/v1/depth?symbol=BTCUSDT&limit=5', (res) => { // Currently, unavailable.
    let body = '';
    res.setEncoding('utf8');
    res.on('data', (chunck) => {
        body += chunck;
    });

    res.on('end', (res) => {
        console.log(body);
    });
})