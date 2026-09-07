const clock="00:00:00";
let format=clock.split(":");

function getSecond(second){
    let srt=second;
    setInterval(()=>{
        srt++;
        console.log(srt);
        if(srt==60){
            
        }
    }, 1000);
}
getSecond(format[2]);
