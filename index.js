//--------------------выпадающее главное меню-------------
function dropdown () {
    const btn = document.getElementById('dropdownMenuButton');
    const menu = document.querySelector('.dropdown__menu');
    btn.addEventListener('click', () => {
        menu.classList.toggle('display--visible');
        if (btn.style.backgroundColor === '') {
            btn.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
        }
        else {
            btn.style.backgroundColor = '';
        }
    });
}

//--------замена класса-----
function toggleClassCard(index, array) {
    if (index % 3 !== 1) {
        array[index].classList.toggle('card--small');
        array[index].classList.toggle('card--big');
        if (index % 3 === 0) {
            array[index+1].classList.toggle('card--small');
            array[index+1].classList.toggle('card--big');
        }
        else if (index % 3 === 2) {
            array[index-1].classList.toggle('card--small');
            array[index-1].classList.toggle('card--big');
        }
    };
}

//-------------меняем размер карточки со стоимостью абонемента при наведении
function changeCardSize () {
    const cards = document.querySelectorAll('.subscriptionCard');
    for (let i=0; i<cards.length; i++) {
        cards[i].addEventListener('mouseenter', () => {
            toggleClassCard(i, cards);
        });
        cards[i].addEventListener('mouseleave', () => {
            toggleClassCard(i, cards);
        });
    };
}


//----------показываем разные абонементы для разного количества месяцев------------------
function changeMonth() {
    const months = document.querySelectorAll('.subscription__data__month p');
    const rows = document.querySelectorAll('.subscription__data__cards .row')
    for (let i=0; i<months.length; i++)
    {
        months[i].addEventListener('click', () => {
            for (let j=0; j<rows.length; j++) {
                if (j === i) {
                    rows[j].style.display = 'flex';
                }
                else {
                    rows[j].style.display = 'none';
                }
            }
        });
    }
}


//------------слайдер с отзывами внизу страницы-----------------
function changeReview () {
    const reviews = document.querySelectorAll('.review__slider__card');
    const prevBtn = document.querySelector('.review__slider__btn--prev');
    const nextBtn = document.querySelector('.review__slider__btn--next');
    
    prevBtn.addEventListener('click', () => {
        for (let i = 0; i < reviews.length; i++) {
            if (reviews[i].classList.contains('card--left')) {
                reviews[i].classList.toggle('card--left');
                reviews[i].classList.toggle('card--right');
                if (i === 0) {
                    reviews[(reviews.length-1)].classList.toggle('card--left');
                }
                else {
                    reviews[i-1].classList.toggle('card--left');
                }
                if (i === reviews.length-1) {
                     reviews[0].classList.toggle('card--right');
                 }
                else {
                     reviews[i+1].classList.toggle('card--right');
                }
                break;
            }            
        }
    });

    nextBtn.addEventListener('click', () => {
        for (let i=0; i<reviews.length; i++) {
            if (reviews[i].classList.contains('card--right')) {
                reviews[i].classList.toggle('card--left')
                reviews[i].classList.toggle('card--right');
                if (i === 0) {
                    reviews[(reviews.length-1)].classList.toggle('card--left');
                }
                else {
                    reviews[i-1].classList.toggle('card--left');
                }
                if (i === reviews.length-1) {
                    reviews[0].classList.toggle('card--right');
                }
                else {
                    reviews[i+1].classList.toggle('card--right');
                }
                break;
            }
        }
    });
}

dropdown();
changeCardSize();
changeMonth();
changeReview();