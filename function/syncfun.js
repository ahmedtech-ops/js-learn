function sleep(){
      const start=Date.now()
  while(
    Date.now()-start<5000
  ){

  }
}

async function sync(){
    await sleep()
    console.log("hello")
}
function ahmed(){
    console.log("ahmed")
}
sync()
ahmed()
