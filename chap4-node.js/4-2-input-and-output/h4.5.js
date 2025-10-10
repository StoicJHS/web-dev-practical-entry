/*
    question 메소드를 쓰기 어려운 이유는, 이것이 "비동기처리"기 때문.
    즉, 하나를 실행 시작하고 완료되는 것을 기다렸다가 그 다음을 실행하는 동기처리가 아닌,
    하나를 실행 시작하면 백그라운드로 두고 바로 다음을 실행하는 식의 비동기처리를 한다.
    이는 웹서버의 프로그램에서는 피해야 한다.

    How to use arrow functions easily?

*/

const readline = require('readline');

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function answer(answer){
    read.write("you typed:" + answer);
    read.close();
}

read.question('type any words: ', answer);