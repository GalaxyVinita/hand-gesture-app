prediction_1 = "";
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

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/fNeMQzw9e/model.json', modelLoaded);

function modelLoaded()
{
    console.log("Model Loaded");
}

function speak()
{
    var synth = window.speechSynthesis;

    speak_data_1 = "The first prediction is " + prediction_1;
    var utterThis =  new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
}

function identify()
{
    img = document.getElementById("selfie");
    classifier.classify(img, gotResult);
}

function gotResult(error, results)
{
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("p1name").innerHTML = results[0].label;


        if(results[0].label == "okay")
        {
            document.getElementById("p1gesture").innerHTML = "&#65039;";
        }

        if(results[0].label == "thumbsup")
        {
            document.getElementById("p1gesture").innerHTML = "&#128077;";
        }

        if(results[0].label == "victory")
        {
            document.getElementById("p1gesture").innerHTML = "&#65039;";
        }
        prediction_1 = results[0].label;
        speak()
    }
}

