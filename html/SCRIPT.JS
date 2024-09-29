document.getElementById('greetButton').addEventListener('click', function() {
    document.getElementById('moodPrompt').classList.remove('hidden');
});

document.getElementById('happy').addEventListener('click', function() {
    document.getElementById('response').innerText = "FUCK, YE KAISE HO GAYA";
});

document.getElementById('sad').addEventListener('click', function() {
    document.getElementById('response').innerText = "ERROR 404 OOPS THIS FUNCTION IS NOT AVAILABLE FOR YOU";
});

document.getElementById('depressed').addEventListener('click', function() {
    document.getElementById('response').innerText = "ERROR 404 OOPS THIS FUNCTION IS NOT AVAILABLE FOR YOU";
});

document.getElementById('random').addEventListener('click', function() {
    document.getElementById('response').innerText = "SAPNA DEKHNA ACHI BAAT H PAR SAPNA KE SATH SO JANA YE TO SAHI NHI H NA BHENKE......";
});