/*
    fs로 파일엑세스

    * 파일을 동기로 읽기:
        변수 = fs.readFileSync( 파일경로 );

    * Buffer에서 결과를 텍스트로 꺼낸다
        변수 = <Buffer>.toString();
        변수 = <Buffer>.toString(엔코드명);

*/

const fs = require('fs');

const fl = fs.readFileSync('/Users/y.nam/Desktop/Github_Project/web-dev-practical-entry/chap3-javascript/3-3-document-object-model/h3.23.html')
console.log(fl.toString());