
var works = document.querySelectorAll('.works__item');
var menu = document.getElementById('nav_id');
var tab = document.querySelector('.portfolio__buttons');
var phone1 = document.querySelector('.verphone');
var phone2 = document.querySelector('.horphone');

menu.addEventListener('click', (event) => {
    menu.querySelectorAll('a').forEach(el => el.classList.remove('nav_active'));
    event.target.classList.add('nav_active');
});

tab.addEventListener('click', (event) => {
    tab.querySelectorAll('.portfolio_btn').forEach(el => el.classList.remove('portfolio_btn_active'));
    event.target.classList.add('portfolio_btn_active');
});




phone1.addEventListener('click', () => {
    if(document.querySelector('.screen1').classList.contains('screen_off'))
    {
        document.querySelector('.screen1').classList.remove('screen_off');
    }
    else {
        document.querySelector('.screen1').classList.add('screen_off');
    }
});

phone2.addEventListener('click', () => {
    if(document.querySelector('.screen2').classList.contains('screen_off'))
    {
        document.querySelector('.screen2').classList.remove('screen_off');
    }
    else {
        document.querySelector('.screen2').classList.add('screen_off');
    }
});


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var slides = document.getElementsByClassName('slides')
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (var i = 0; i < slides.length; i++) {
      slides[i].style.visibility = "hidden";
  }
  slides[slideIndex-1].style.visibility = "visible";
  if (document.querySelector('.phones2').style.visibility == "visible") 
  { 
      document.querySelector('.slider').style.backgroundColor = "#648BF0"
      document.querySelector('.slider').style.borderBottomColor = "#648BF0"
  }
  else 
  {
    document.querySelector('.slider').style.backgroundColor = "#f06c64"
    document.querySelector('.slider').style.borderBottomColor = "#ea676b"
  }
}

var nextBtn = document.getElementById('next').onclick = function() { plusSlides(1) };
var prevBtn = document.getElementById('prev').onclick = function() { plusSlides(1) };

var submitBtn = document.getElementById('submit_btn');
var closeBtn = document.getElementById('close_btn');
var messageSubject = document.getElementById('message_subject');
var messageDesc = document.getElementById('message_description');


submitBtn.addEventListener('submit', () => { 
    let subject = document.getElementById('subject').value.toString();
    let description = document.getElementById('description').value.toString();
    if (subject) 
    {
        messageSubject.innerText = 'Тема: ' + subject;
    }
    else
    {
        message.innerText = 'Без темы';
    }
    if (description)
    {
        messageDesc.innerText = 'Описание: ' + description;
    }
    else
    {
        message.innerText = 'Без описания'
    } 
    document.querySelector('.message_block').classList.remove('message_hidden');
    
});

closeBtn.addEventListener('click', () => { 
    document.querySelector('.message_block').classList.add('message_hidden');
    
});