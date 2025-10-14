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

*/