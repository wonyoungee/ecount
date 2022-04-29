// 콜백지옥
// 비동기 처리 - 원하는 시점에 응답할 수 있다. => 무슨의미? 
// async - await

const { reject } = require("lodash");

(async() => {
    async function log(ts){
        return new Promise((resolve, reject)=>{ // promise 객체 생성하자마자 안의 함수 바로 실행.
            console.log("new Promise"); // 이미 return 된것. 바로 찍힘.
            setTimeout(() => {
                console.log("setTimeout");
                resolve(5); //then함수 호출
                //global.xxx = resolve;
            }, ts);
        })
        
    }


const result = await log(4000)   // 4초 후에 return // await는 promise객체 전달받음?   // 이 시점은 짜는 사람이 결정.  // resolve 될때까지 웨이팅
/* 
//promise 처리
const result = log(4000).then((res)=>{  // then -> resolve(5)전달 받음. 이때는 promise객체.
    console.log(res);
}); 
*/

console.log("result", result);

})();

const rule = [checkStoragesize, checkUploadPermission]
const rule2 = []


function upload(){
    const promise = fileUpload();
    for(const rule of rules){
        promise.then(rule);
    }
}

fileUpload()
.then()
.then()
.then(upload)
.catch(()=>{

})


function checkStoragesize(sdk){
    return new Promise((resolve, reject)=>{
        if(true) 
            // db access
            const size = sdk.get();  // side effect
            if(size < fileSize){
                reject({exceed});
            }
            resolve({});
        else reject()
    })
}
function checkUploadPermission(){
    return new Promise(()=>{
        
    })
}
function upload(){
    return new Promise(()=>{
        
    })
}