new Vue({
    el: '#app',
    components: {
     VueGallerySlideshow
    },   
    data: {
      images: [
        'pink_image/1.jpg',
        'pink_image/2.jpg',
        'pink_image/3.jpg',
        'pink_image/4.jpg',
        'pink_image/5.jpg',
        'pink_image/6.jpg',
        'pink_image/7.jpg',
        'pink_image/8.jpg',
        'pink_image/9.jpg',
      ],
      index: null
    },
    methods: {
      add: function (event,t) {     
           
        this.images.splice(0,0,t.value)                               
      },
 
      remove: function (event,t) {      
        this.images.splice(0,1)
      },
    }    
  })