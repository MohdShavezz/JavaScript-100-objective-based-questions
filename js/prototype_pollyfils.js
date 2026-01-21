// PROTOTYPE 
// core JavaScript mechanism used for sharing functionality between objects
function Company(company_name,product,price){
  // this.company_name=company_name // also remove company_name 
  this.product=product
  this.price=price
  
  // this.detail = function (){
  //   console.log(`Company Name: ${this.company_name}, Product Name: ${this.product}, Price: ${this.price}`)
  // }  
}
Company.prototype.company_name='Britania'
Company.prototype.detail=function (){
    console.log(`Company Name: ${this.company_name}, Product Name: ${this.product}, Price: ${this.price}`)
  }

const c1=new Company("Britania","buiscuit",100)
c1.detail()

// EXAMPLE
Array.prototype.myCustomAddition = function () {
  let sum = 0
  for (let i = 0; i < this.length; i++) {
    if (typeof this[i] === "number") {
      sum += this[i]
    }
  }
  return sum
}
let arr=[1,2,3,4]
arr


// POLYFILL
// a piece of code used to provide modern functionality on older browsers that do not natively support it