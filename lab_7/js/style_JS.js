let slideIndex = 1;
showSlides(slideIndex); //вызов функции showSlides для 1 слайда

//Функция вызывает showSlides с параметром для повторного начала показа слайдов
function plusSlides(n) 
{
showSlides(slideIndex += n);
}

//Функция вызывает showSlides и присваивает slideIndex переданное значение
function currentSlide(n) 
{
showSlides(slideIndex = n);
}
            
function showSlides(n) 
{
    let i;
    let slides = document.getElementsByClassName("mySlides"); //получаем элементы, который имеет данный класс
    let dots = document.getElementsByClassName("demo"); //получаем элементы, который имеет данный класс
    let captionText = document.getElementById("caption"); //получаем элемент caption
    if (n > slides.length) //если переданное значение больше, чем количество slides
    {
        slideIndex = 1 //то переприсваеваем slideIndex = 1
    }
    if (n < 1)  //если переданное значение меньше, чем количество slides
    {
        slideIndex = slides.length //то присваеваем длину slides
    }
    for (i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none"; //скрываем свойство стиля
    }
    for (i = 0; i < dots.length; i++) 
    {
        dots[i].className = dots[i].className.replace(" active", ""); //заменяем имя класса элемента
    }
    slides[slideIndex-1].style.display = "block"; //устанавливаем свойство отображения (делаем слайд блоком)
    dots[slideIndex-1].className += " active"; //изменяем класс (говорим, что слайд активен)
    captionText.innerHTML = dots[slideIndex-1].alt; //заполняем  HTML-содержимое элемента captionText записываем значение атрибута alt изображения
 }