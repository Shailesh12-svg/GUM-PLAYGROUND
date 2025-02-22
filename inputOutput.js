const audioInputEl = document.querySelector('#audio-input')
const audioOutputEl = document.querySelector('#audio-output')
const videoInputEl = document.querySelector('#video-input')


const getDevices =async()=>{
    try{
    const devices = await navigator.mediaDevices.enumerateDevices();
    console.log(devices)

        devices.forEach(d=>{
            const option = document.createElement('option') //creating option element
            option.value = d.deviceId
            option.text= d.label

            if(d.kind ==='audioinput'){
                audioInputEl.appendChild(option) //Add the option tag 
            }
            else if(d.kind ==='audiooutput'){
                audioOutputEl.appendChild(option) //Add the option tag into audio-output
            }
            else if(d.kind ==='videoinput'){
                videoInputEl.appendChild(option) //Add the option tag into videoInputEl
            }
        })



    }catch(err){
        console.log(err)
    }

}

const changeAudioInput =async (e)=>{
    //Changed audio Input

    const deviceId = e.target.value;

    const newConstraints ={ 
        audio:{deviceId:{exact :deviceId}},
        video:true,
    }
    try{
        stream = await navigator.mediaDevices.getUserMedia(newConstraints)
        
    }
    catch(err){
        console.log(err)
    }
    
}

const changeAudioOutput = async(e)=>{
   await  videoEl.setSinkId(e.target.value)
}

const changeVideoInput =async (e) =>{
    const deviceId = e.target.value;

    const newConstraints  = {
        audio:true,
        video:{deviceId:{exact: deviceId}}
    }
    try{
        stream = await navigator.mediaDevices.getUserMedia(newConstraints)
    }catch(err){
        console.log(err)
    }
}


getDevices();