/*
    메모의 추가, 삭제, 검색과 같은 기능을 가진 간단한 메모 툴 만들기
    message.txt라는 파일을 만들고 안에 '[]' 넣어놓기
*/

const fs = require('fs');
const rl = require('/Users/y.nam/Desktop/Github_Project/web-dev-practical-entry/chap4-node.js/4-2-input-and-output/h4.6_getline.js');

var data = []; // data 배열
let fname = './message.txt'; // 데이터 파일

// 메인 처리
async function main() { // async가 있는 것은 안에서 getline이 있기 때문이다. main뿐만 아니라 getline 사용하는 모든 건 async로!
    let opt = {encoding:'utf8'};
    let bf = fs.readFileSync(fname, opt);
    data = JSON.parse(bf.toString('utf8')); 
    // readFileSync로 불러오고, 내용을 JSON.parse로 오브젝트로 변환. 
    // 일본어가 있을 수 있으니, utf8로 텍스트인코드를 지정. opt = 옵션 설정. 

    while(true){
        let cmd = await rl.getline('cmd(a/d/f/q)');
        switch(cmd.toString()){
            case 'a':
                await add();
                break;
            case 'd':
                await del();
                break;
            case 'f':
                await find();
                break;
            case 'q':
                quit();
                return;
            default:
                console.log('no-command.');
        }
    }

}

// 메세지의 추가
async function add() {
    let bf = await rl.getline('type message: ');
    let msg = bf.toString('utf8');
    let item = {
        date:new Date(),
        message: msg
    }
    data.unshift(item); // 이것은, 배열의 처음에 값을 추가하는 메소드다. 이렇게 하면, 가장 새로운 게 배열의 맨 앞!
    console.log('message added.');
}

// 메세지의 삭제
async function del() {
    let bf = await rl.getline('type number: ');
    let num = bf.toString() * 1; // 텍스트를 숫자로 변환하는 간단한 방법! 
    console.log('item: ' + data[num].message);
    bf = await rl.getline('delete it? (y/n)');
    if (bf.toString()=='y'){
        data.splice(num, 1); // splice라는 메소드는, 삭제하는 위치를 나타내는 정수와, 삭제하는 항목의 수를 인수로 지정. 이를 배열에서 제거한다. 
    }
}



// 메세지의 검색
async function find() {
    let bf = await rl.getline('find: ');
    let find = bf.toString('utf8');
    for(let i in data){
        if (data[i].message.indexOf(find) > -1){ 
            // indexOf: 인수로 지정한 텍스트가, 대상이 되는 텍스트와의 몇번째에 있는가를 알아보기 위한 것. 
            // -1은 발견 못할 시. 따라서, -1보다 크다면 어디선가 발견.
            console.log(i + ': ' + data[i].message);
        }
    }
}


// 스크립트의 종료
function quit() {
    let opt = {encoding:'utf8'};
    fs.writeFileSync(fname, JSON.stringify(data), opt); // 데이터의 보존 처리.
    // JSON.stringify(data)로 변수 data의 오브젝트를 JSON형식의 텍스트로 변환!
    // opt에 대해서는, {encoding: 'utf8'}으로 지정하여, utf8의 인코드로 보존하도록 되어있다. 
    console.log('quite now!');
}


main();


/*
    이를 통해서, Node.js를 통해서 간단한 스크립트를 제작하여, 이것저것 편리한 기능을 만드는 예시를 파악하였다.
    JavaScript를 공부하면, 웹페이지 조작뿐만 아니라, 이런 것과 같이 일상에 접해있는 편리한 걸 스크립트로 제작 가능.
    하지만, Node.js는 이러한 일상의 처리만에 이용되는 것이 아니라, "Web서버의 처리"가 가장 주목 받고 있는 이용영역.
    서버 프로그램이라는 것은, Node.js를 이용하면 초심자도 충분히 이해할 수 있다.

    -> 따라서, 다음 챕터에서는, Node.js를 이용한 서버 개발에 대해서 학습한다.

*/