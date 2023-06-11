let starttime,endtime;
let imageSize="";
let image=new Image();
let bitoutput=document.getElementById("bits");
let kboutput=document.getElementById("kbs");
let mboutput=document.getElementById("mbs");

let imagelink="https://source.unsplash.com/random?topics=nature";


image.onload=async function(){
    endtime=new Date().getTime();

    await fetch(imagelink).then((response) => {
        imageSize=response.headers.get("content-length");
        calculateSpeed();
    })
}

function calculateSpeed() {
    let timeduration=(endtime-starttime)/1000;
    let loadedbits=imageSize*8;
    let speedInBps=(loadedbits/timeduration).toFixed(2);
    let speedInKBps=(speedInBps/1024).toFixed(2);
    let speedInMBps=(speedInKBps/1024).toFixed(2);

    bitoutput.innerHTML+=`${speedInBps}`;
    kboutput.innerHTML+=`${speedInKBps}`;
    mboutput.innerHTML+=`${speedInMBps}`;
    
}

const init =async ()=>{
    starttime=new Date().getTime();
    image.src=imagelink;
};
window.onload = () =>init();