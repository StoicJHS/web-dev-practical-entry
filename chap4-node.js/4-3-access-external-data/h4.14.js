/*
    서버에 데이터를 전송하기 (연습용으로.)
*/

const https = require('https');
const rl = require('./getline.js');

async function main(){
    let msg = await rl.getline('type your message: ');
    msg = '{"message":"' + msg + '"}';

    const options = {
        hostname: 'XXX.com',
        path: '/dummy.json',
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(msg)
        }
    };

    let req = https.request(options, (res) => {
        console.log('STATUS: ' + res.statusCode);
    });

    req.on('error', (e) => {
        console.log(e);
    });

    req.write(msg, (err) => {
        if (err != undefined) {
            console.log(err);
        }
    });

    req.end( ()=> {
        console.log('finishied!');
    })

}

/*
    StatusCode: 
    200 = Ok. 정상적인 엑세스.
    400 = Bad Request. 리퀘스트에 문제있다.
    401 = Unauthorized. 인증이 필요.
    403 = Forbidden. 엑세스가 금지.
    500 = Internal Server Error. 서버 내부에서 에러 발생.

    위에서 데이터의 송신에 'PUT'이라는 HTTP 메소드 사용. 
    WEB서버에 엑세스할 때는, HTTP라는 프로토콜을 사용.
    보통 데이터를 습득할 때는 GET 메소드 사용. 
    POST: 폼을 서버에 송신하는 경우에 사용. 

    hostname: 엑세스하는 서버명
    path: 서버내 파일등 디렉토리
    method: 메소드명
    headers: 헤더 정보. 

*/