/*
    폴더 내 파일 취득

    * 폴더 내의 파일 얻기 (동기)
        변수 = fs.readdirSync ( 폴더 경로 );
    * 폴더 내의 파일 얻기 (비동기)
        변수 = fs.readdir( 폴더 경로, 애로우 함수 );
    * readdir 내에서의 애로우 함수
        (err, file종류) => {
            ... 취득 후 처리 ...
        }
*/

// 동기버전

const fs = require('fs');

let counter = 0;
let files = fs.readdirSync('./');
for (var i in files){
    counter++
    console.log(counter + ': ' +files[i]);
}