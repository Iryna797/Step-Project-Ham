"use strict"

// Service tabs

const tabsUl = document.querySelector('.service')
const tabs = document.querySelector('.service-item');
const contentItems = document.querySelector('.service-content-item'); 
const serviceContent = document.querySelector('.service-content');
tabsUl.addEventListener('click', (e) => {
  tabsUl.querySelector('.active-tab')?.classList.toggle('active-tab')
  let target = e.target;
  
    target.classList.toggle('active-tab')
   const currentId = target.dataset.tab;
   serviceContent.querySelector('.service-content-item-active')?.classList.toggle('service-content-item-active');
   serviceContent.querySelector(`.service-content-item[data-li="${currentId}"]`)?.classList.toggle("service-content-item-active");
});
 

//portfolio//

const filterCards = document.querySelectorAll(".portfolio-gallery-item");
const portfolioList = document.querySelector(".portfolio-list");
const loadMoreBtn = document.querySelector(".load-btn");
const loader = document.querySelector(".loader");
let currFilter = "all";
let cardsNum = 12;

function showLoader() {
    loadMoreBtn.classList.add("hide");
    loader.classList.remove("hide");
}
function hideLoader() {
    loadMoreBtn.classList.remove("hide");
    loader.classList.add("hide");
}

showCards();

loadMoreBtn.addEventListener("click", (event) => {
    event.preventDefault();

    showLoader();
    setTimeout(() => {
        cardsNum += 12;
        hideLoader();
        showCards(currFilter);
    }, 3000);
});

portfolioList.addEventListener("click", function (event) {
    let currentBtn = document.querySelectorAll(".portfolio-item-name");
    currentBtn.forEach((item) => item.classList.remove('active'))

    event.target.classList.add("active");


    let filterBtns = event.target.dataset.filter;
    cardsNum = 12;
    currFilter = filterBtns;
    showCards(filterBtns);
});

function showCards(filter = "all") {
    let j = 0;

    for (let i = 0; i < filterCards.length; i++) {
        if (
            (filterCards[i].classList.contains(filter) || filter == "all") &&
            j < cardsNum
        ) {
            j++;
            filterCards[i].classList.remove("hide");
        } else {
            filterCards[i].classList.add("hide");
        }
    }

    if (j < cardsNum) {
        loadMoreBtn.classList.add("hide");
    } else {
        loadMoreBtn.classList.remove("hide");
    }
}


//About us

$(function () {
    $('.text-description').hide().first().show();
    $('.team-member').hide().first().show();
    $('.member-photo').hide().first().show();
    
    
    $('.slider-photo').click(function () {
        $(this).addClass('slider-photo-active').siblings().removeClass('slider-photo-active');
        switchContent();
    })
    
    $('.slider-arrow.right').click(function () {
        let activeIndex = $('.slider-photo.slider-photo-active').index() - 1;
        let newIndex = (activeIndex == 3) ? 0 : activeIndex + 1;
        $(`.slider-photo:eq(${newIndex})`).addClass('slider-photo-active').siblings().removeClass('slider-photo-active');
        switchContent();
    })
    
    $('.slider-arrow.left').click(function () {
        let activeIndex = $('.slider-photo.slider-photo-active').index() - 1;
        let newIndex = (activeIndex == 0) ? 3 : activeIndex - 1;
        $(`.slider-photo:eq(${newIndex})`).addClass('slider-photo-active').siblings().removeClass('slider-photo-active');
        switchContent();
    })
    
    function switchContent() {
        let activeIndex = $('.slider-photo.slider-photo-active').index() - 1;
        $(`.text-description:eq(${activeIndex})`).show().siblings('.text-description').hide();
        $(`.team-member:eq(${activeIndex})`).show().siblings('.team-member').hide();
        $(`.member-photo:eq(${activeIndex})`).show().siblings('.member-photo').hide();
    }
});

