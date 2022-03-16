

const app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      immagine: 'https://as01.epimg.net/us/imagenes/2021/08/27/futbol/1630090262_737972_1630091087_noticia_normal_recorte1.jpg'
    },

    methods: {
        pulisciTesto: function () {
          this.message = "";
        },
        pulisciImmagine: function () {
            this.immagine = "";
          }
    }
  });