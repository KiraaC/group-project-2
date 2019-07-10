try {
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
} catch (e) {
    console.error(e);
}

var command = '';

recognition.continuous = true;
 
recognition.onresult = function (event) {
    var current = event.resultIndex;
    var transcript = event.results[current][0].transcript;
    var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);

    if (!mobileRepeatBug) {
      command = transcript;
      console.log('command was: ', command)
      if(command === 'open'){
        console.log('opening')
      } else {
        console.log('closing')
      }
    }
};

$('#start').on('click', function (e) {
    recognition.start();
});

$('#stop').on('click', function (e) {
    recognition.stop();
});