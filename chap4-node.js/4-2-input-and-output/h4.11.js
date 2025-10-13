/*
    보통의 텍스트를 출력하는 경우에서는, console.log로 충분하다.
    하지만, 좀 더 복잡한 출력을 하려고 하면, console.log만으로는 꽤 힘든 경우가 있다. 
    -> 예를 들어서, "표"의 출력.
    -> console.table( object );

*/

var data = {Tokyo:1230, London:987, NewYork:456};
console.table(data);

var data2 = {
    Windows:{Tokyo:1230, London:987, NewYork:456},
    macOS:{Tokyo:543, London:210, NewYork:789},
    linux:{Tokyo:98, London:76, NewYork:54}
};
console.table(data2)