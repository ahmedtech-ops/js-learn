let arr=[1,2,3,4,5,6,7,8,9]
// console.log(arr.splice(1,5))
// console.log(arr)
// let str="a_h_m_e_d"
// console.log(str.split("_"))

// arr.map((value,index)=>{
//     console.log(value,index)
// })

// function iseven(num){
//     if(num%2==0){
//         return true
//     }
    
//         return false
    
// }
// let evenarr=arr.filter((value)=>{
//     return iseven(value)

// })
// console.log(evenarr)
// console.log(arr)

// let arr1 = [...arr,10,11,12]
// console.log(arr)
// console.log(arr1)


function sleep(){
      const start=Date.now()
  while(
    Date.now()-start<5000
  ){

  }
}
Promise.resolve(sleep()).then(()=>{
    console.log("promisefullfill")
})
.catch(()=>{
    console.log("promise rejected")
})