const supportedConstraints = navigator.mediaDevices.getSupportedConstraints();


console.log(supportedConstraints)


const changeVideoSize =()=>{
    stream.getVideoTracks().forEach(track=>{
        //Track is a video track/

        //We can get its capabilities from .getCapabilities()
        //or we can apply new constraints with applyConstraints();
        const cap = track.getCapabilities();
        const height = document.querySelector('#vid-height').value
        const width = document.querySelector('#vid-width').value
        const vConstraints ={
            height:{exact:height<cap.height.max?height:cap.height.max},

            width:{exact:width<cap.width.max?width:cap.width.max},
            // width:500,
            // frameRate:5,
            // aspectRatio:10,
        }
        track.applyConstraints(vConstraints)
    })



    // stream.getTracks().forEach(track =>{
    //     const cap = track.getCapabilities();

    //     console.log(cap)
        
    // })


}

