var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;
    if(Content=="take my selfie"){
        speak();
    }
}
function take_Snapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("output").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
});
}
function speak() {
    var synth=window.speechSynthesis;
    speak_data="taking my selfie";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        take_Snapshot();
        save();
    }, 5000);
}
function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}
camera=document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:'jpeg',
    jpeg_quality:90
});

