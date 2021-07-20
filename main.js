Webcam.set(
    {
        width:350,
        height:300,
        image_format: 'png',
        png_quality:90
    });
    
    camera = document.getElementById("camera");
    
    Webcam.attach(camera);
    
    function takesnapshot()
    {
        Webcam.snap(function(data_uri){
            document.getElementById("results").innerHTML = 
            '<img id="selfie" src="' + data_uri + '">';
        });
    }

    console.log("ml5 version", ml5.version);

classifer = ml5.imageClassifer('https://teachablemachine.withgoogle.com/models/fNeMQzw9e/model.json', modelLoaded);

function modelLoaded()
{
    console.log("Model Loaded");
}