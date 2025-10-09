// Measure execution time

console.time('test') // 해당 라벨에 대한 계측 개시

var result=[];
for (let i=2; i<1000; i++){
    var num = 2;
    var flg = true;
    while (num < i){
        if (i % num == 0){
            flg = false;
            break;
        }
        num++;
    }
    if (flg){
        result.push(i);
    }
}
console.log(result);
console.timeEnd('test');


