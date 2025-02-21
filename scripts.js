let stream = null //Init stream var
const videoEl = document.querySelector('#my-video');

let mediaStream = null //Intit Media stream for our screen share 


const constraints = {
    audio:true, //Use your headphones .....
    video:true,
}

const getMicAndCamera = async(e)=>{
    try{
        stream = await navigator.mediaDevices.getUserMedia(constraints); //Starting point
        console.log(stream)
        changeButtons([
           'green','blue','blue','grey','blue','grey','grey','grey' 
        ])
    }catch(err){
        console.log("User denied the permissions")
        console.log(err)
    }
    
};


const showMyFeed = e =>{
    if(!stream){
        alert("Stream still loading ....")
    }
    videoEl.srcObject = stream;  //This will set our MediaStream to our video/>
    const tracks = stream.getTracks();
    console.log(tracks)
    changeButtons([
        'green','green','blue','blue','blue','grey','grey','blue'
    ])
}

const stopMyFeed = e =>{
    if(!stream){
        alert("Stream still loading ....")
    }
    const tracks = stream.getTracks();

    tracks.forEach(track => {
        // console.log(track)
        track.stop(); //disassociated with the tracks
        changeButtons([
            'blue','grey','grey','grey','grey','grey','grey','grey'
        ])
    });
}


document.querySelector('#share').addEventListener('click',(e)=>{getMicAndCamera(e)})
document.querySelector('#show-video').addEventListener('click',(e)=>{showMyFeed(e)})
document.querySelector('#stop-video').addEventListener('click',(e)=>{stopMyFeed(e)})
document.querySelector('#change-size').addEventListener('click',(e)=>{changeVideoSize(e)})

document.querySelector('#start-record').addEventListener('click',(e)=>{startRecording(e)})
document.querySelector('#stop-record').addEventListener('click',(e)=>{stopRecording(e)})
document.querySelector('#play-record').addEventListener('click',(e)=>{playRecording(e)})

document.querySelector('#share-screen').addEventListener('click',(e)=>{shareScreen(e)})


document.querySelector('#audio-input').addEventListener('change',(e)=>{changeAudioInput(e)})
document.querySelector('#audio-output').addEventListener('change',(e)=>{changeAudioOutput(e)})
document.querySelector('#video-input').addEventListener('change',(e)=>{changeVideoInput(e)})