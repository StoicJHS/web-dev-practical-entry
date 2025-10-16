/*
    데이터를 쓰고 내보낸다. 

    * 파일을 쓰고 내보내기 (동기처리)
        fs.writeFileSync( 파일 경로, 데이터);

    * 파일을 쓰고 내보내기 (비동기처리)
        fs.writeFile( 파일 경로, 데이터);
    
    * 인수를 지정하는 애로우 함수
        (error) => {
            ... 종료 후의 처리 ...
        }
*/

const fs = require('fs'); // fs는 파일 엑세스
const rl = require('/Users/y.nam/Desktop/Github_Project/web-dev-practical-entry/chap4-node.js/4-2-input-and-output/h4.6_getline.js');

async function main() {
    let msg = await rl.getline('please type:');
    fs.writeFile('/Users/y.nam/Desktop/Github_Project/web-dev-practical-entry/chap4-node.js/4-3-access-external-data/data_async.txt', msg, (err) => {
        console.log('save data_async.txt to write:' + msg);
    });
}

main();