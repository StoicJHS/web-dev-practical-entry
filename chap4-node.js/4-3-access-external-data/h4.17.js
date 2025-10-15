/*
    fs로 파일엑세스

    * 파일을 동기로 읽기:
        변수 = fs.readFileSync( 파일경로 );

    * Buffer에서 결과를 텍스트로 꺼낸다
        변수 = <Buffer>.toString();
        변수 = <Buffer>.toString(엔코드명);

    * 파일을 비동기로 읽기:
        fs.readFile( 파일 경로, 애로우 함수);
    * 변수로 준비하는 애로우 함수:
        ( 에러, 버퍼 ) => {
            ... 불러읽기 종료시의 처리 ...
        }

*/

// 비동기 readFile -> 동기처리로

// const { rejects } = require('assert');
const fs = require('fs');
// const { resolve } = require('path');

function getFile(fname) {
    return new Promise((resolve, reject) => {
        fs.readFile(fname, (err, data) => {
            resolve(data);
        });
    });
}

async function main(){
    var data = await getFile('/Users/y.nam/Desktop/Github_Project/web-dev-practical-entry/chap3-javascript/3-3-document-object-model/h3.23.html');
    console.log(data.toString());
}

main();
