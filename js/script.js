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
        "Романо",
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Чип и Дэйл",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const ads = document.querySelectorAll(".promo__adv img"),
      changeObj = document.querySelector(".promo__genre"),
      bg = document.querySelector(".promo__bg"),
      blockFilm = document.querySelector(".promo__interactive-list"),
      liFilms = document.querySelectorAll(".promo__interactive-list li");

const removeAds = function (){
    ads.forEach(item => {
    item.remove();
});

};

removeAds();

const changeGenre = () => {
    changeObj.textContent = "ДРАМА";
};

changeGenre();


const changeBg = (scr) => {
    // bg.style.cssText = `background-image: url(${scr})`;
    bg.style.backgroundImage = `url(${scr})`;

};

changeBg("img/bg.jpg");



// const filmList = (sourceFilm) => {
//     let arr = [];
//     let newLi = `<li class="promo__interactive-item"> <div class="delete"></div> </li>`;
    
//     for(let key in sourceFilm){
//         arr.push(sourceFilm[key]);
//     }
    
//     arr.sort();


//     if(arr.length > liFilms.length){
//         for(let i = 0; i < arr.length - liFilms.length; i++){
//             blockFilm.insertAdjacentHTML("beforeend", newLi);
//         }
//     }

//     const lis = document.querySelectorAll(".promo__interactive-list li");

//     let count = 1;
    
//     lis.forEach(item => {
//         item.textContent = count + " " + arr[count - 1];
//         count++;
//     });
// };

// filmList(movieDB.movies);

blockFilm.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    blockFilm.innerHTML += `
       <li class="promo__interactive-item"> ${i+1}  ${film}
       <div class="delete"></div>
       </li>
    `;

});