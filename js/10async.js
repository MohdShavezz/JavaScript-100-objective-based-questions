// callbacks
// proimses 
// // [all,allSettled,race,any] //https://dev.to/shameel/javascript-promise-all-vs-allsettled-and-race-vs-any-3foj
// then catch 
// async await 
// error handling

// function order(){
//   setTimeout(function() {
//     console.log('ordered !')
//   }, 1000);
// }
// function process(){
//   setTimeout(function() {
//     console.log('processing !')
//   }, 800);
// }
// function delivery(){
//   setTimeout(function() {
//     console.log('delivered !')
//   }, 500);
// }
// order()
// process()
// delivery()
// // delivery->processing->order :unexpected outcome

// // Order->Process->Delivery

// // callback: a function passed as an argument to another function, to be executed later
// // Eg:
// function callbackfn(){
//   console.log('i am callbackfn')
// }
// function fn(cb){
//   console.log('fn runs')
//   cb()
// }
// fn()

// // 1st way using callback (async oper)
// function order(process){
//   setTimeout(function() {
//     console.log('ordered !')
//     process(delivery)
//   }, 1000);
// }
// function process(delivery){
//   setTimeout(function() {
//     console.log('processing !')
//     delivery()
//   }, 800);
// }
// function delivery(){
//   setTimeout(function() {
//     console.log('delivered !')
//   }, 500);
// }
// order(process)

// // callback hell 
// function order(){
//   setTimeout(function() {
//     console.log('ordered !')
//     setTimeout(function() {
//     console.log('processing !')
//     setTimeout(function() {
//     console.log('delivered !')
//   }, 500);
//   }, 800);
//   }, 1000);
// }

// // 2nd way using Promise

let myorder=new Promise((res,rej)=>{
  setTimeout(function() {
    res('Ordered!')
  }, 500);
})
let myprocess=new Promise((res,rej)=>{
  setTimeout(function() {
    res('Processing!')
  }, 800);
})
let mydelivery=new Promise((res,rej)=>{
  setTimeout(function() {
    res('Delivery!')
  }, 1000);
})

// //1. handle promises using then/catch
// myorder
//   .then(order => {
//     console.log(order)
//     return myprocess
//   })
//   .then(process => {
//     console.log(process)
//     return mydelivery
//   })
//   .then(delivery => {
//     console.log(delivery)
//   })
//   .catch(err => {
//     console.log('Error:', err)
//   }).finally(()=>console.log('finally runs.'))
  
// // 2. handle promises using async/await
// async function runOrderFlow() {
//   try {
//     const order = await myorder
//     console.log(order)

//     const process = await myprocess
//     console.log(process)

//     const delivery = await mydelivery
//     console.log(delivery)

//   } catch (err) {
//     console.log('Error:', err)
//   }
// }
// runOrderFlow()


async function fn(){
  try {
    // const [or,pe,de]=await Promise.all([myorder,myprocess,mydelivery])
    // console.log(or,pe,de)
    // Ordered! Processing! Delivery!  // if all resolved 
    // error in Delivery!              // if any one failed rej with that error
    
    // const [or,pe,de]=await Promise.allSettled([myorder,myprocess,mydelivery])
    // console.log(or,pe,de)
    // { status: 'fulfilled', value: 'Ordered!' } { status: 'fulfilled', value: 'Processing!' } { status: 'rejected', reason: 'rej Delivery!' }

    const res=await Promise.race([myorder,myprocess,mydelivery]) 
    console.log(res) // fastest settled res or rej
    
    const res=await Promise.any([myorder,myprocess,mydelivery]) 
    console.log(res) // first promise res, agar phle koi fail h to ignore krega
    
  } catch (e) {
    console.log('error',e)
  }
}
fn()


















