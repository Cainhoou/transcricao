const blackAndWhiteBtn = document.getElementById('blackAndWhite');
      const highContrastBtn = document.getElementById('highContrast');
      const blueContrastBtn = document.getElementById('blueContrast');
      const greenContrastBtn = document.getElementById('greenContrast');
      const yellowContrastBtn = document.getElementById('yellowContrast');
    
      blackAndWhiteBtn.addEventListener('click', function() {
        document.body.classList.remove('high-contrast', 'blue-contrast', 'green-contrast', 'yellow-contrast');
        document.body.classList.add('black-and-white');
      });
    
      highContrastBtn.addEventListener('click', function() {
        document.body.classList.remove('black-and-white', 'blue-contrast', 'green-contrast', 'yellow-contrast');
        document.body.classList.add('high-contrast');
      });
    
      blueContrastBtn.addEventListener('click', function() {
        document.body.classList.remove('high-contrast', 'black-and-white', 'green-contrast', 'yellow-contrast');
        document.body.classList.add('blue-contrast');
      });
    
      greenContrastBtn.addEventListener('click', function() {
        document.body.classList.remove('high-contrast', 'black-and-white', 'blue-contrast', 'yellow-contrast');
        document.body.classList.add('green-contrast');
      });
    
      yellowContrastBtn.addEventListener('click', function() {
        document.body.classList.remove('high-contrast', 'black-and-white', 'blue-contrast', 'green-contrast');
        document.body.classList.add('yellow-contrast');
      });

  const transcription = document.getElementById('transcription');
  const startButton = document.getElementById('startButton');

  let recognizing = false; 
  let finalTranscript = ''; 

  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (window.SpeechRecognition) {
    var recognition = new SpeechRecognition();

    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'pt-BR'; 

    recognition.onstart = function() {
      recognizing = true;
      startButton.textContent = 'Parar Transcrição';
    };

    recognition.onerror = function(event) {
      console.log('Erro de reconhecimento: ' + event.error);
    };

    recognition.onend = function() {
      recognizing = false; 
      startButton.textContent = 'Iniciar Transcrição'; 
    };

    recognition.onresult = function(event) {   
      let interimTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }
      transcription.textContent = finalTranscript + interimTranscript;
    };

    startButton.addEventListener('click', function() {
      if (recognizing) {
        recognition.stop();
        return;
      }
      finalTranscript = '';
      transcription.textContent = '';
      recognition.start();
    }, false);

  } else {
    startButton.style.visibility = 'hidden';
    transcription.textContent = 'Seu navegador não suporta a API de reconhecimento de fala.';
  }

  window.addEventListener('load', function() {
    var section1 = document.getElementById('section1');
    section1.style.display = 'none';
    section1.classList.remove('open'); 
  });
 
  window.addEventListener('load', function() {
    var section2 = document.getElementById('section2');
    section2.style.display = 'none'; 
    section2.classList.remove('open'); 
  });
 
  window.addEventListener('load', function() {
    var section3 = document.getElementById('section3');
    section3.style.display = 'none'; 
    section3.classList.remove('open'); 
  });

  function toggleVisibility(sectionId) {
    var section = document.getElementById(sectionId);
    if (section.style.display === 'none' || section.style.display === '') {
      section.style.display = 'block';
      section.classList.add('open');
    } else {
      section.style.display = 'none';
      section.classList.remove('open'); 
    }
  }