
const _ = require('lodash');    // lodash 모듈 참조

const a = _.concat([1],[2])
console.log(a);
/*
const ecount = require('./src/ecount.js');
const b = ecount.sum(1,2);
console.log(b);
*/
/*
import {test} from './src/ecount'
console.log(new test())*/

/*
Function.prototype.ecBind = function(){
    var args = arguments;
    var that = this;
    return function(){
        var result = [...args, ...arguments];   // var result = args.concat(arguments)
        return that(...result);
        //return that.apply(scope, result)
    }
    // 코드를 구현하시오.
}
var log = function(){
    const args = [].slice.call(arguments);
    console.log([].slice.call(arguments).join(" , "));
}
var ecLog = log.ecBind("a", "b", "c");
ecLog(1,2,3); //a , b , c , 1 , 2 , 3
ecLog("A", "B", "C", "D", "E"); //a , b , c , A , B , C , D , E
*/

function whatsThis() {
    return this.toString();
    }
var unikys = {
    what: whatsThis,
    toString: function () {
        return "[object unikys]";   
    }
};
whatsThis(); // #1
unikys.what(); // #2
whatsThis.call(); // #3
whatsThis.apply(unikys); // #4
unikys.what.call(undefined); // #5
unikys.what.apply(unikys); // #6    


const arr = [1,2,3,4,5];
const filtered = arr.slice(0,2);    //arr이 slice함수 실행했으니까 this는 arr

Array.prototype.slice = function(startIndex, endIndex){
    const newArray=[];
    startIndex = startIndex === undefined ? 0:startIndex;
    endIndex = startIndex === undefined ? this.length-1:endIndex;

    for(const i=startIndex; i<=endIndex; i++){
        newArray.push(this[i]);
    }
    return newArray;
}

//Function.prototype.bind = function(scope, ...args){}

function test (label, ...report){
    console.log(this.success, label, ...report)
}

const ul_test_testdata = {
    success : true
}

const server_test_data = {
    success : false
}

const ulTest = test.bind(ul_test_testdata, "ul");
const serverTest = test.bind(server_test_data, "server");

ulTest(true, 34,343,343);
serverTest();

//--------------------------------------------

//prototype
// 원형. 클래스를 배치하기 위한 도구.
// 속성. 함수가 가지는 속성. 
// 왜 쓰냐? 인스턴스 만들려고 씀.

function Proto(name){
    this.name = this.name
    console.log(this) 
    this.write = function(){}   // 프로퍼티
}

Proto.prototype = {
    name : "123",
    print : function(){
        console.log(this.name)
    }
} // 함수만 프로토타입 가짐

// 프로토타입 왜쓰냐 

Proto()// 이때 this는 window객체 (node는 global 객체)
const ecountProto = new Proto("ecount") // 1. 이 함수의 프로토타입에 있는 생성자 실행  // 2. 프로토타입 복사 // 이때, this는 해당 함수의 인스턴스
console = log(ecountProto)
ecountProto.print = function(){
    Proto.prototype.print.call(this)
}

ecountProto.write
ecountProto.print

/*
new 연산자
1. 뒤에잇는 함수의 prototype.constructor 실행
this는 해당 함수의 인스턴스

2. 타겟 함수의 prototype을 인스턴스 오브젝트의 __proto__에 복사

ecountProto.__proto__ = Proto.prototype;
ecountProto.print()
 */

function Child(){}
Child.prototype = new Proto(2);

function Child2(){}
Child2.prototype = new Proto(1);


const ec = new Child()
ec.print()