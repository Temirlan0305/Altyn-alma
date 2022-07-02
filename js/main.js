const header = document.querySelector(".header");

window.addEventListener("scroll", function(e) {
    let scrollPos = window.scrollY;
    if(header){
        if(scrollPos > 0) {
            header.classList.add("active");
        } else {
            header.classList.remove("active")
        }
    }
});

const menuBurger = document.querySelector('.menu__burger');
if (menuBurger) {
    const headerMenu = document.querySelector('.header__menu');
    menuBurger.addEventListener("click", function (e) {
        menuBurger.classList.toggle('_active');
        headerMenu.classList.toggle('_active');
    });
}

$(document).on("click", function(event){
    var target = event.target;
    if( !$(target).hasClass('lang_choice') ){
        $('.other_lang').slideUp();
        $('.lang_block').removeClass('active');
    }
});
$('.lang_choice').on("click", function(){
    $(this).siblings('.other_lang').slideToggle();
    $(this).parent('.lang_block').toggleClass('active');
});


$(document).ready(function () {
    $('.slider').slick({
        dots: false,
        adaptiveHeight: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 800,
        rows: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                }
            }
        ]
    });
});

$(document).ready(function () {
    $('.slider-two').slick({
        dots: false,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 800,
        rows: 1,
        mobileFirst: false,
        appendArrows: $(".block-item__arrows"),
    });
    var slider = $(".slider-two");
    $(".span-two").text('0' + slider.slick("getSlick").slideCount);
    slider.on("afterChange", function (event, slick, currentSlide) {
        currentSlide+=1;
        $(".span-one").text('0' + currentSlide);
    });
});

$(document).ready(function () {
    $('.slider-three').slick({
        dots: false,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 800,
        rows: 1,
        mobileFirst: false,
        appendArrows: $(".block-item__arrows_two"),
    });
    var slider = $(".slider-three");
    $(".span-three").text('0' + slider.slick("getSlick").slideCount);
    slider.on("afterChange", function (event, slick, currentSlide) {
        currentSlide+=1;
        $(".span-one").text('0' + currentSlide);
    });
});


const tabsBtn = document.querySelectorAll('.tabs-btn');
const tabItems = document.querySelectorAll('.tabs__item');
const tabMap = document.querySelectorAll('.tabs__map');
const tabMenu = document.querySelectorAll('.tabs__menu');
tabsBtn.forEach(function (item) {
    item.addEventListener('click', function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let tabCircle = currentBtn.getAttribute('data-circle');
        let currentMap = document.querySelector(tabCircle);
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('active')) {

            tabsBtn.forEach(function (item) {
                item.classList.remove('active');
            });
            tabItems.forEach(function (item) {
                item.classList.remove('active');
            });
            tabMenu.forEach(function (item) {
                item.classList.remove('active');
            });
            tabMap.forEach(function (item) {
                item.classList.remove('active');
            });

            currentBtn.classList.add('active');
            currentTab.classList.add('active');
            currentMap.classList.add('active');
        } else {
            tabsBtn.forEach(function (item) {
                item.classList.remove('active');
            });
            tabItems.forEach(function (item) {
                item.classList.remove('active');
            });
            tabMenu.forEach(function (item) {
                item.classList.remove('active');
            });
            tabMap.forEach(function (item) {
                item.classList.remove('active');
            });
        }
    });
});

const headerLink = document.querySelector(".header__button");
const headerButton = document.querySelector(".header__link_menu");
headerLink.addEventListener('click', function () {
    headerButton.classList.toggle('active');
});
const catalogLink = document.querySelectorAll('.catalog__link');
catalogLink.forEach((elem) => {
    elem.addEventListener('click', () => {
        if(!elem.classList.contains('active')) {
            elem.classList.add('active');
        } else {
            elem.classList.remove('active');
        }
    });
});


// window.onload = () => {
// 	let firstApple = document.querySelector('#main-1');
// 	firstApple.classList.add('active')
// 	let arraySlider = Array.from(document.querySelectorAll('.main__row'));
// 	console.log(arraySlider)
// 	arraySlider.reduce((previousValue, currentValue, i) => {
// 		// setTimeout(() => {
// 		//    previousValue.classList.add('hidden')
// 		//    currentValue.classList.add('active')
// 		//  }, 1500 * (i + 1));
// 		previousValue.addEventListener('animationend', () => {
// 			previousValue.classList.add('hidden')
// 			currentValue.classList.add('active');
// 		})
// 		return previousValue, currentValue;
// 	})
// }


window.onload = () => {
    let firstApple = document.querySelector('#main-1');
    let twoApple = document.querySelector('#main-2');
    let thirdApple = document.querySelector('#main-3');
    let mainSlider = document.querySelector('.main__block');
    let items = mainSlider.querySelectorAll('.main__row');
    mainSlider.classList.add('right-go');

    firstApple.classList.add('active');

    let arraySlider = Array.from(document.querySelectorAll('.main__row'));


    // function changeSlide(){
    // 	console.log('12');
    // 	// if(items[slide].classList.contains('active')){
    //     //    		items[slide].classList.add('hidden');
    //     //    	}
    // }

    let element = 0;
    let lastElement = items.length;
    console.log(lastElement);
    let TimeoutSlider = setInterval(function(){
        if(mainSlider.classList.contains('right-go')){
            if(items[element].classList.contains('active')){
                if(element + 1 < lastElement){
                    items[element].classList.add('hidden');
                }
            }
            else{
                items[element].classList.remove('hidden');
            }
            if(element + 1 < lastElement){
                element = element + 1;
                items[element].classList.add('active');

            }
            else{
                mainSlider.classList.remove('right-go');
                mainSlider.classList.add('left-go');
                items[element].classList.add('active');
                element = element - 1;
            }
        }
        else{
            if(element > -1){
                if(items[element].classList.contains('active')){
                    items[element].classList.remove('hidden');
                    items[element].classList.add('reverse');
                    items[element].classList.remove('active');
                }
                element = element - 1;
            }
        }
    },1200);
    // let timerId = setInterval(function changeSlide(){
    //     	setInterval(function changeSlide(){}, 800);
    //    }, 800);


    // firstApple.addEventListener("animationend", () => {
    // 	if(firstApple.classList.contains('active')){
    // 		firstApple.classList.add('hidden');
    // 	}
    // 	if(!twoApple.classList.contains('active')) {
    // 		twoApple.classList.add('active')
    // 	}
    // });
    // twoApple.addEventListener("animationend", () => {
    // 	if(twoApple.classList.contains('active')){
    // 		twoApple.classList.add('hidden');
    // 	}
    // 	if(!thirdApple.classList.contains('active')) {
    // 		thirdApple.classList.add('active')
    // 	}
    // });
    // thirdApple.addEventListener("animationend", () => {
    // 	if(twoApple.classList.contains('hidden')){
    // 		twoApple.classList.remove('hidden');
    // 		twoApple.classList.remove('active');
    // 	}
    // 	if(!twoApple.classList.contains('hidden')){
    // 		twoApple.classList.add('reverse');
    // 	}
    // });


}

const  headerMenuList = document.querySelectorAll('.menu__li');
headerMenuList.forEach((elem) => {
    elem.addEventListener('click', function () {
        elem.classList.add('active');
    });
});


$(document).ready(function() {
	$("#phone").mask("+7 (999) 999-99-99");
});

function submitForm() {
    $('#form_loader').show();
}
//Alert form
let alertt = document.querySelector(".alert--fixed");
let alertClose = document.querySelectorAll(".alert--close")
for (let item of alertClose) {
    item.addEventListener('click', function(event) {
        alertt.classList.remove("alert--active")
        alertt.classList.remove("alert--warning")
        alertt.classList.remove("alert--error")
    });
}



