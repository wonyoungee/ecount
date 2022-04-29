var en;
(function (en) {
    en[en["A"] = 1] = "A";
})(en || (en = {}));

//인터페이스는 타입체크만 하고 버림...
// type도 버림...
// enum은 실제 컴파일된 파일에 존재. 
// const enum은 