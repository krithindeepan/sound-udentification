function startclassify() {
    console.log("Hello")
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/4fFrUxmXE/model.json",modeloaded)
}
function modeloaded() {
    classifier.classify(gotresult);
}
function gotresult(error,result) {
    console.log(result);
}