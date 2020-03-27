var works = document.querySelector('.works');
var menu = document.getElementById('nav_id');
var tab = document.querySelector('.portfolio__buttons');
var phone1 = document.querySelector('.verphone');
var phone2 = document.querySelector('.horphone');
var portfolioButtons = document.querySelectorAll('.portfolio_btn');

// HEADER

menu.addEventListener('click', (event) => {
    if (event.target!=menu) 
    {
        menu.querySelectorAll('a').forEach(el => el.classList.remove('nav_active'));
        event.target.classList.add('nav_active');
    }
});

//SLIDER 

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

var items = document.querySelectorAll('.carousel_item');
var currentItem = 0;
var isEnabled = true;
var sliderBlock = document.querySelector('.slider');


function changeCurrentItem(n) {
	currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
	isEnabled = false;
    items[currentItem].classList.add(direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('active', direction);
	});
}

function showItem(direction) {
    if (currentItem) {
        sliderBlock.classList.add('slider_blue');
      } else {
        sliderBlock.classList.remove('slider_blue');
      }

    items[currentItem].classList.add('next', direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('next', direction);
		this.classList.add('active');
		isEnabled = true;
	});
}

function nextItem(n) {
	hideItem('to-left');
	changeCurrentItem(n + 1);
    showItem('from-right');
}

function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left');
}


document.querySelector('.arrow_left').addEventListener('click', function() {
	if (isEnabled) {
        previousItem(currentItem);
	}
});

document.querySelector('.arrow_right').addEventListener('click', function() {
	if (isEnabled) {
        nextItem(currentItem);
	}
});

//PORTFOLIO

tab.addEventListener('click', (event) => {
    if (event.target != tab)
    {
        tab.querySelectorAll('.portfolio_btn').forEach(el => el.classList.remove('portfolio_btn_active'));
        event.target.classList.add('portfolio_btn_active');
    }
   
});

works.addEventListener('click', (event) => {
    if (event.target != works)
    {
        works.querySelectorAll('img').forEach(el => el.classList.remove('works__item_active'));
        event.target.classList.add('works__item_active');
    }
   
});


function switchImg(){
    var imgs = document.querySelectorAll(".works__item");
	var rand, temp;
	for(var i = imgs.length - 1; i > 0; i--){
		rand = Math.floor(Math.random()*(i + 1));
		temp = imgs[rand].innerHTML;
		imgs[rand].innerHTML = imgs[i].innerHTML;
		imgs[i].innerHTML = temp;
	}
}

for (var i = 0; i < portfolioButtons.length; i++) {
    portfolioButtons[i].onclick = function(){
    switchImg()
    };
}

//GET A QUOTE

var submitBtn = document.getElementById('submit_btn');
var closeBtn = document.getElementById('close_btn');
var messageSubject = document.getElementById('message_subject');
var messageDesc = document.getElementById('message_description');
var form = document.querySelector('form');


form.addEventListener('submit', (e) => { 
    e.preventDefault()
    var subject = document.getElementById('subject').value.toString();
    var description = document.getElementById('description').value.toString();
    if (subject) 
    {
        messageSubject.innerText = 'Subject: ' + subject;
    }
    else
    {
        messageSubject.innerText = 'No subject';
    }
    if (description)
    {
        messageDesc.innerText = 'Description: ' + description;
    }
    else
    {
        messageDesc.innerText = 'No description'
    } 
    document.querySelector('.message_block').classList.remove('message_hidden');
    
});

closeBtn.addEventListener('click', () => { 
    document.querySelector('.message_block').classList.add('message_hidden');
    form.reset(); 
});

//SCROLL 

var services = document.getElementById('services').offsetTop-95;
var portfolio = document.getElementById('portfolio').offsetTop-95;
var about = document.getElementById('about').offsetTop-95;
var contact = document.getElementById('contact').offsetTop-95;
var navLink = document.querySelectorAll('.nav_link');

window.addEventListener('scroll', function() {
    var page_offset=window.pageYOffset;

    if(page_offset>=0) {
        menu.querySelectorAll('a').forEach(el => el.classList.remove('nav_active'));
        navLink[0].classList.add('nav_active');
    }
    if(page_offset>=services && page_offset<portfolio) {
        menu.querySelectorAll('a').forEach(el => el.classList.remove('nav_active'));
        navLink[1].classList.add('nav_active');
    }
    if(page_offset>=portfolio && page_offset<about) {
        menu.querySelectorAll('a').forEach(el => el.classList.remove('nav_active'));
        navLink[2].classList.add('nav_active');
    }
    if(page_offset>=about && page_offset<contact) {
        menu.querySelectorAll('a').forEach(el => el.classList.remove('nav_active'));
        navLink[3].classList.add('nav_active');
    }
    if(page_offset>=contact) {
        menu.querySelectorAll('a').forEach(el => el.classList.remove('nav_active'));
        navLink[4].classList.add('nav_active');
    }

});