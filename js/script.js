/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Одержимость",
        "Ла-ла лэнд",
        "Лига справедливости",
        "Скотт Пилигрим против...",
        "Петушок золотой гребешок",
        "Карты. деньги. два ствола",
        "Антошка"
    ]
};

const adBlock = document.getElementsByClassName('promo__adv'),
      adImages = adBlock[0].getElementsByTagName('img'),
      genre = document.getElementsByClassName('promo__genre')[0],
      promoBg = document.querySelectorAll('.promo__bg')[0],
      listMovies = document.querySelectorAll('.promo__interactive-list')[0],
      moviesItem = document.querySelectorAll('.promo__interactive-item');

const numElement = adImages.length;
for (let i = 0; i < numElement; i++) {
    adImages[0].remove();
}

genre.textContent = 'драма';
promoBg.style.background = 'url("../img/bg.jpg") center center/cover no-repeat';

moviesItem.forEach(item => {
    item.remove();
});

const movies = movieDB.movies.sort();

for (let i = 0; i < movies.length; i++) {
    listMovies.insertAdjacentHTML("beforeend", 
    `<li class="promo__interactive-item">${i + 1} ${movies[i]}<div class="delete"></div></li>`);
}