/*
입출력 관련

모듈을 로드한다: 변수 = require( 모듈 ); <- 입력을 위해선 readline이라는 모듈이 필요!

readline을 이용하기 위해선, 먼저 Interface 라는 오브젝트를 작성할 필요가 있다:
변수 = readline.createInterface({
    input: process.stdin,
    output: procerss.stdout
});

출력을 위해서는 write라는 메소드를 이용:
<Interface>.write(값);

값의 입력은 question이라는 메소드를 이용:
<Interface>.question(텍스트, (answer) => {... 입력후의 처리 ...);
    -> 뭔가 신기한 형태를 하고 있다. 

アロー関数： ( 인수 ) => {... 처리 ...} (화살표가 アロー関数) (아마 arrow function인 듯)
-> 보통 함수와는 다르게 함수명이 없다! (python에서의 lambda랑 비슷한건가)

Interface의 종료:
    <Interface>.close();

*/

const readline = require('readline');

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

read.question('type any words: ', (answer) => {
    read.write("You typed:" + answer);
    read.close();
});