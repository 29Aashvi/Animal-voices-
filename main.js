function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ulCWazwJ0/model.json', modelReady);
}

function modelReady(){
classifier.classify(gotResults);
}

function gotResults(error, results){
if(error){
    console.log(error);
}
else{
    console.log("results");
    random_r=Math.floor(Math.random()*255)+1;
    random_g=Math.floor(Math.random()*255)+1;
    random_b=Math.floor(Math.random()*255)+1;

    document.getElementById("result_label").innerHTML='I can hear- '+ results[0].label;
    document.getElementById("result_confidence").innerHTML='Acuracy- '+(results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_label").style.color="rgb("+random_r+", "+random_g+", "+random_b+")";
    document.getElementById("result_confidence").style.color="rgb("+random_r+", "+random_g+", "+random_b+")";

    img=document.getElementById('lion.jpg');
    img1=document.getElementById('cat.jpg');
    img2=document.getElementById('cow.jpg');
    img3=document.getElementById('dog.jpg');

    if(results[0].label=="Barking"){
      document.getElementById("animal_image").src='dog.jpg';
    }

    else if(results[0].label=="Meowing"){
        document.getElementById("animal_image").src='cat.jpg';
    }
    else if(results[0].label=="Mooing"){
        document.getElementById("animal_image").src='cow.jpg';
    }

else{
    document.getElementById("animal_image").src='lion.jpg';
}
}
}