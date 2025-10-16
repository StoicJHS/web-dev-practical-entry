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


/*
    다행히도, 지금까지 무엇을 하고 있는지 몰라도 상관없다. 몰라도 크게 문제없는 테크닉이다.
    다만, Node.js에서는, 비동기처리가 빈번하게 등장하고, 그것을 동기처리처럼 하는 수법도 사용된다.
    여기서는 "await" = "내부에서 비동기처리를 호출하고 있다" 정도로 충분.
    독서백편의자현.
*/