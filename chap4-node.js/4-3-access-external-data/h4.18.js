/*
    데이터를 쓰고 내보낸다. 

    * 파일을 쓰고 내보내기 (동기처리)
        fs.writeFileSync( 파일 경로, 데이터);
*/

const fs = require('fs'); // fs는 파일 엑세스
const rl = require('/Users/y.nam/Desktop/Github_Project/web-dev-practical-entry/chap4-node.js/4-2-input-and-output/h4.6_getline.js');

async function main() {
    let msg = await rl.getline('please type:');
    fs.writeFileSync('/Users/y.nam/Desktop/Github_Project/web-dev-practical-entry/chap4-node.js/4-3-access-external-data/data.txt', msg);
    console.log('save data.txt to write:' + msg);
}

main();