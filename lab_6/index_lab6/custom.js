
// class Gallery extends HTMLElement {
//     constructor() {
//       super();
//       // элемент создан
//     }
// }

// class MyPreloader extends HTMLElement
// {
//     connectedCallback()
//     {
//         let preloader = document.creationElement("my-preloader");
//     }
// }
//alert();
customElements.define("my-preloader", class MyPreloader extends HTMLElement
{
    connectedCallback()
    {
        let preloader = document.creationElement("my-preloader");
    }
});

// class MyPreloaderRow extends HTMLElement
// {
//   connectedCallback()
//   {
//       let preloaderRow = document.creationElement("my-preloader-row");
//   }
// }
customElements.define("my-preloader-row", class MyPreloaderRow extends HTMLElement
{
  connectedCallback()
  {
      let preloaderRow = document.creationElement("my-preloader-row");
      preloaderRow.className = "preloader__row";
  }
});

// document.registerElement("my-preloader-row", {
//   prototype: Object.create(HTMLElement.prototype)
// });

// const div = document.getElementsByClassName('row');
// const imgSmall = document.createElement('div');
// imgSmall.className = 'column';
// const imgDemo = document.createElement('img');
// imgDemo.className = 'demo cursor';

// imgDemo.setAttribute('src', 'index_lab6/pink_image/1.jpg')
// //imgDemo.src = "index_lab6/pink_image/1.jpg";
// imgDemo.alt = "Гілочка весни";

// imgDemo.style.width = '100%';
// imgDemo.onclick = currentSlide(10);

// imgSmall.append(imgDemo);
// document.body.prepend(imgSmall);
// alert();


let div = document.createElement('div');
div.className = "alert";
div.innerHTML = "Super";
document.body.append(div);