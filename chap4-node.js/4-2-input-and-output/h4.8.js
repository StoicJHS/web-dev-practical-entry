// 개행 이벤트를 이용한다.
/*
    이벤트: 프로그램의 상태변화등에서도 발생 (유저의 조작에서만 생기는 거 아님)
    Interface: 출력에서 개행할 때 발생하는 이벤트 <- 준비되어 있다.
    이를 이용해서 프로그램의 상태에 응하여 자동적으로 처리를 실행하는 것이 가능.
*/

const readline = require('readline');

var counter = 0;

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

read.on('line', (line) => {
    counter++;
    console.log('(' + counter + ': ' + line.length + ' chars)');
});

var content = ["--begine--",
    "This is a content of long sentence. ",
    "The example of display a long sentence. ",
    "How will it be displayed?",
    "--end--"].join('\n');
read.write(content);
read.close();

/*
    이벤트를 설정한다: <Interface>.on(이벤트명, arrow함수);
    \n의 형태보다는 배열을 이용해서 텍스트를 만들면 편하다. 마지막에 1개의 텍스트를 만들고 싶으면 .join 메소드 이용.
    변수 = 텍스트.join( 배열 );
*/