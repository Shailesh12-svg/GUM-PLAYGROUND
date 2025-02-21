let mediaRecorder;
let recordedBlob =[]; //an array to hold the blobs for playback
const startRecording =()=>{
    
    console.log("start Recording")
    mediaRecorder = new MediaRecorder(stream) // make a mediaRecorder 
    //on data available will run the stream ends , or stopped , or we specified 
    mediaRecorder.ondataavailable =e=>{
        console.log(`Data is available for the media recorder`)

        recordedBlob.push(e.data)
    }
    mediaRecorder.start(); //start the feed 
    changeButtons([
        'green','green','blue','blue','green','blue','grey','blue'
    ])
}


const stopRecording =()=>{
    
    console.log("stop recording")
    mediaRecorder.stop();
    changeButtons([
        'green','green','blue','blue','blue','green','blue','blue'
    ])
}

const playRecording =()=>{
    if(!stream){
        alert("No Video Recordings are available")
    }
    console.log("play recording")
    const superBuffer= new Blob(recordedBlob) //superBuffer is a super Buffer of arrays of BLOBS

    const recordedVideoEl = document.querySelector('#other-video');

    recordedVideoEl.src = window.URL.createObjectURL(superBuffer)
    recordedVideoEl.controls = true;

    recordedVideoEl.play();
    changeButtons([
        'green','green','blue','blue','blue','blue','green','blue'
    ])
}
