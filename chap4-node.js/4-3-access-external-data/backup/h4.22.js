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

// 비동기버전

const { count } = require('console');
const fs = require('fs');

let counter = 0;
fs.readdir('./', (err, files) => {
    for (let i in files){
        counter++
        console.log(counter + ': ' + files[i]);
    }
});