const shareScreen =async()=>{
    console.log(`share Screen is intialising ...`)
    const options ={
        video:true,
        audio:false,
        surfaceSwitching:'include',
    }
    try{
     mediaStream = await navigator.mediaDevices.getDisplayMedia(options)
    }catch(err){
        console.log(err)
    }



    //We dont handle all the btn paths.To do so 
    changeButtons([
        'green','green','blue','blue','grey','grey','grey','green'
    ])
}