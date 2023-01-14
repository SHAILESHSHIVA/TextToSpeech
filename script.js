let text = document.getElementById('txt');

let btn = document.getElementById("submit");
let pause = document.getElementById("pause");
let resume = document.getElementById("resume");

let audiomsg;

btn.addEventListener("click",()=>{

    audiomsg.text = text.value;

    window.speechSynthesis.speak(audiomsg);
});

resume.addEventListener("click",()=>{

    resume.style.display = "none";
    pause.style.display= "block";

   if(speechSynthesis.pause){
    speechSynthesis.resume();
   }

    
});

pause.addEventListener("click",()=>{

    pause.style.display = "none";
    resume.style.display= "block";

    //pause if speak

    speechSynthesis.speaking ? speechSynthesis.pause():"";
});



window.onload = ()=>{
    resume.style.display = "none";
    if("speechSynthesis" in window){
        audiomsg = new SpeechSynthesisUtterance();
    }
    else{
        alert("Speech Systhesis not supported...");
    }
};
