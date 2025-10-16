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


    ---
    파일/폴더의 조작

    * 폴더의 작성 (동기)
        변수 = fs.mkdirSync(폴더 경로);
    * 폴더의 작성 (비동기)
        변수 = fs.mkdir(폴더 경로, 애로우 함수);
    * 파일의 복사 (동기)
        변수 = fs.copyFileSync(대상 파일, 복사 경로);
    * 파일의 복사 (비동기)
        변수 = fs.copyFile(대상 파일, 복사 경로, 애로우 함수);
    * 파일의 삭제 (동기)
        변수 = fs.unlinkSync(대상 파일);
    * 파일의 삭제 (비동기)
        변수 = fs.unlink(대상 파일, 애로우 함수);
    * 파일의 개명 (동기)
        변수 = fs.copyFileSync(대상 경로, 변경 경로);
    * 파일의 개명 (비동기)
        변수 = fs.copyFile(대상 경로, 변경 경로, 애로우 함수);
    * 콜백용 애로우 함수
        (err) => {
            ... 취득 후 처리 ...
        }



*/


const fs = require('fs');

let dir = './';
let bk = dir + 'backup/';

let files = fs.readdirSync(dir);
fs.mkdirSync(bk);
console.log( bk + ' created.');
for (let i in files){
    fs.copyFileSync(dir + files[i], bk+ files[i]);
    console.log(files[i] + 'backuped.');
}
console.log('backup completed!');


