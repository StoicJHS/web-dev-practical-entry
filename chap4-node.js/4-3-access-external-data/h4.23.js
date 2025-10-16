/*
    파일의 정보 취득 

    * 파일의 정보 취득 (동기)
        변수 = fs.statSync(폴더 경로);
    * 파일의 정보 취득 (비동기)
        변수 = fs.stat(폴더 경로);
    * readdir 내의 애로우 함수
        (에러, 파일정보) => {
            ... 취득 후 처리 ...
        }

    주요한 메소드:
        isDirectory(): 디렉토리인지 아닌지
        isFile(): 파일인지 아닌지
        isSymbolicLink(): 심볼릭 링크인지 아닌지

    주요한 프로퍼티:
        size: 파일 사이즈
        birthtime: 작성일시
        ctime: 최종스테이터스 갱신일시
        mtime: 최종갱신일시 
        atime: 최종엑세스일시
*/

// 비동기버전

const fs = require('fs');

let fname = './h4.12.js';
fs.stat(fname, (err, st) => {
    console.log('Name:  ' + fname);
    console.log('Size:  ' + st.size);
    console.log('Create:    ' + st.birthtime);
    console.log('Modify:    ' + st.mtime);
});

