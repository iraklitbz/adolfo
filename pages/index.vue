<template>
  <div class="mt-32 overflow-hidden">
    <Header/>
    <div class="max-w-7xl m-auto justify-between relative z-40">
      <div class="w-full py-10">
        <img class="w-full" :src="require(`~/assets/hero.jpg`)">
      </div>
    </div>
    <div class="max-width-personal relative">
      <div class="relative w-full justify-center flex items-center">
        <div class="absolute deco">
          <load-svg name="deco" class="decosvg text-primary-dark" />
        </div>
        <div class="absolute left-0 h-1 bg-primary-dark w-full z-10 top-1/2 transform -translate-y-1/2"></div>
        <div class="relative p-5 md:p-10 w-44 md:w-52 h-16 md:h-24 flex items-center justify-center z-20 bg-white">
          <div class="absolute w-32 md:w-40 h-14 md:h-20 bg-primary-dark z-10"></div>
          <h2 class="main-headline relative uppercase text-xs md:text-2xl text-primary text-center z-10 font-bold">La persona tras la cámara</h2>
        </div>
      </div>
       <div class="max-w-7xl m-auto">

        <div class="flex flex-col py-5 md:py-28 relative">
          <div class="flex px-5 md:px-0">
            <div class="w-2/6">
              <img class="w-full" :src="require(`~/assets/me.jpg`)">
            </div>
            <div class="w-4/6 px-5 md:px-20 relative z-10 mt-00">
              <h2 class="bg-decorativo"></h2>
              <p class="text-xs md:text-3xl text-primary font-thin text-center mb-1 md:mb-4">
                ¿Te gustaría disfrutar tu día sin estar pendiente de posar ante la cámara?
              </p>
              <p class="text-xs md:text-3xl text-primary font-thin text-center mb-1 md:mb-4">
              ¿Qué te parece si yo me encargo de captar todos esos momentos únicos y vosotros os dejáis llevar?
            </p>
            <p class="text-xs md:text-3xl font-thin text-primary text-center">
              Como fotógrafo no solo me encargo de hacer unas fotografías que puedas recordar siempre, además quiero aportarte mi experiencia y asesoramiento para que disfrutéis al máximo
            </p>
            </div>
          </div>
          <div class="link relative flex justify-end mt-7 md:mt-14">
              <div class="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 w-full bg-primary-dark"></div>
              <nuxt-link class="px-2 md:px-5 py-2 border-8 border-solid border-white bg-primary-dark text-white text-sm md:text-xl relative z-20" to="/tarifas">
                Click para saber más 
              </nuxt-link>
          </div>

      </div>
    </div>

      <div class="absolute decosecond">
          <load-svg name="deco" class="decosvg text-primary-dark" />
      </div>

    </div>
    <div
      class="max-w-7xl m-auto relative z-10"
    >
    <div class="gallery-3 grid grid-cols-3 gap-5 md:gap-10">
      <img :src="require(`~/assets/footer1.jpg`)" class="w-full" />
      <img :src="require(`~/assets/footer2.jpg`)" class="w-full" />
      <img :src="require(`~/assets/footer3.jpg`)" class="w-full" />
    </div>
  
  </div>
    <div class="opiniones bg-gray-200 py-16 px-5 md:px-0">
      <div class="carrousel relative">
        <div class="relative">
          <div class="carrousel-box max-w-3xl m-auto">
            <div class="galleryItems py-3 md:py-10">
              <div>
                <h6 class="text-primary uppercase text-center font-thin text-sm md:text-base"> 
                  A mi pareja y a mí no nos gusta posar, queríamos un reportaje en el que no estuviésemos pendiente de la cámara y el resultado fue espectacular, tenemos fotos de momentos que nos han hecho revivir la boda y nos hemos vuelto a emocionar. Muchas gracias </h6> 
                  <h5 class="text-primary uppercase text-center text-md md:text-xl mt-2">Por Irene Ruiz</h5>
                </div>
              </div>
              <div class="galleryItems py-3 md:py-10">
                <div>
                  <h6 class="text-primary uppercase text-center font-thin text-sm md:text-base"> Las palabras Muchas Gracias no detallan la forma de trabajar y el resultado de lo que para nosotros ha sido un día tan especial. Es fantástica la amabilidad y la tranquilad con la que trabaja. Es una persona muy cercana que te hace sentir realmente a gusto. Es alucinante como puede retratar el momento perfecto que quedará siempre en el recuerdo </h6> 
                  <h5 class="text-primary uppercase text-center text-md md:text-xl mt-2">Ana y Rubén</h5>
                </div>
              </div>
              <div class="galleryItems py-3 md:py-10">
                <div>
                  <h6 class="text-primary uppercase text-center font-thin text-sm md:text-base"> Buscábamos un reportaje bonito, natural, con pocos posados y sin agobiar ni a novios ni a invitados. Captó momentos únicos, divertidos, diferentes. El trato de Adolfo no puede ser mejor a la hora de entregar el trabajo fue muy rápido! </h6> 
                  <h5 class="text-primary uppercase text-center text-md md:text-xl mt-2">Por barthabascal</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-7xl m-auto pt-4 sm:pt-14 px-5 md:px-0">
        <h2 class="text-3xl md:text-6xl text-center md:text-left text-primary-dark mb-2 md:mb-14">Consigue recuerdos Inolvidables</h2> 
        <div class="flex flex-row special">
          <div class="left">
            <img :src="require(`~/assets/pelicula.png`)" class="w-full">
          </div> 
          <div class="mt-4 pb-4 md:pb-0 right font-thin">
            <p class="text-xs md:text-3xl text-primary text-center mb-1 md:mb-4">
          El día de la boda todo pasa muy rápido mi trabajo empieza meses antes planificando vuestro día, acompañándoos y aconsejándoos en todo momento para vuestra tranquilidad.
        </p> 
        <p class="text-xs md:text-3xl text-primary text-center mb-1 md:mb-4">
          Cuando pasen los años y veas las fotos de tu boda recordaras todos los momentos especiales, tus amigos, tu familia estarán siempre presente.
        </p> 
        <p class="text-xs md:text-3xl text-primary text-center mb-1 md:mb-4">
          Llevas meses organizando todo, con las preocupaciones de que todo salga bien.
        </p> 
        <p class="text-xs md:text-3xl text-primary text-center">
          Diez años fotografiando parejas en su día más importante, enamorado de mi trabajo, cuidando cada detalle al máximo para que tengáis el mejor reportaje que podáis imaginar.
        </p>
      </div>
    </div>
  </div>
  <div class="bg-brown px-5 md:px-0">
    <div class="max-w-7xl m-auto py-14">
      <div class="flex flex-col md:flex-row px-2">
        <div class="w-full md:w-1/3 flex flex-col items-center justify-center">
          <h4 class="text-white text-2xl text-center md:text-left">Puedes ver más fotos en Instagram </h4> 
            <a href="https://www.instagram.com/adolfo.bianco/" target="_blank" class="text-3xl text-primary text-center">
              <load-svg name="instagram" class="text-white mt-4 md:mt-14"></load-svg>  
            </a>
          </div> 
          <div class="w-full md:w-2/3 mt-4 md:mt-0">
            <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <img :src="require(`~/assets/insta/1.jpg`)" class="w-full"> 
              <img :src="require(`~/assets/insta/2.jpg`)" class="w-full"> 
              <img :src="require(`~/assets/insta/3.jpg`)" class="w-full"> 
              <img :src="require(`~/assets/insta/4.jpg`)" class="w-full"> 
              <img :src="require(`~/assets/insta/5.jpg`)" class="w-full"> 
              <img :src="require(`~/assets/insta/6.jpg`)" class="w-full">
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />

  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
<style scoped>
.main-headline {
  font-family: 'Montserrat', sans-serif;
}
.bg-brown {
  background-color: #674628;
}
.bg-decorativo {
    background-image: url('~/assets/hola.png');
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: contain;
    height: 80px;
    width: 100%;
}
.max-width-personal {
  max-width: 1800px;
  margin: auto;
}
.deco {
  top: -250px;
  right: -300px;
  transform: scale(1, 1) translate(0px, 0px) rotate(-55deg);
}
.decosecond {
  top: -80px;
  left: -300px;
  transform: scale(1, 1) translate(0px, 0px) rotate(-55deg);
}
.decosvg {
  width: 795px;
}
</style>
