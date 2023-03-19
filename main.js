var SpeechRecognition=window.webkitSpeechRecognition;

var recognition=new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event);

    var Content=event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML=Content;
   if(Content=="take my selfie" || Content=="Take my selfie."){
    speak();
   }
}

 function speak(){
var synth=window.speechSynthesis;
var speakdata= "Taking selfie in 5 seconds. 5, 4, 3, 2, 1. smile!"
var utterthis=new SpeechSynthesisUtterance(speakdata);
synth.speak(utterthis);
Webcam.attach(camera);

setTimeout(function(){
    take_snapeshot();
    save();
},8000);

}
Webcam.set({
    width:350,
    height: 240,
    image_format:"png",
    png_quality:90,
});

camera=document.getElementById("camera");

function take_snapeshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">';
    });
}

function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click();
}