/*async function timeout() {
    return '1'
}
//async函数返回一个promise对象
console.log(timeout());//Promise { '1' }
console.log(2);*/


function timeout() {
    return new Promise(resolve => {
        setTimeout(() =>{
            console.log(1);
            resolve(); // 必须手动调用
        },2000)
    })
}

async function fn() {
    await timeout(); // 等await执行完才继续往下执行   ，只能在async内部使用
    console.log(2);
}
fn(); // 输出 1     2