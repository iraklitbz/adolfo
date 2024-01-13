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
      </div>
       <div class="max-w-7xl m-auto">

        <div class="flex flex-col py-5 md:py-28 relative">
          <div class="flex px-5 md:px-0">
            <div class="w-2/6">
              <img class="w-full" :src="require(`~/assets/me.jpg`)">
            </div>
            <div class="w-4/6 px-5 md:px-20 relative z-10 mt-00">
              <h2 class="bg-decorativo"></h2>
              <p class="text-xs md:text-xl text-primary font-thin text-left mb-6 md:mt-10 md:mb-10">
                Déjame que te cuente un secreto, a mí no me gusta hacerme fotos, siempre me veo mal y no me siento cómodo delante de la cámara.
              </p>
              <p class="text-xs md:text-xl text-primary font-thin text-left mb-6 md:mb-10">
              ¿Tengo mis complejos y mis inseguridades.
            </p>
            <p class="text-xs md:text-xl font-thin text-primary text-left mb-6 md:mb-10">
              Sin embargo, sí tengo la habilidad de que la gente se sienta cómoda conmigo.
            </p>
            <p class="text-xs md:text-xl font-thin text-primary text-left">
              NO hace falta que seas modelo de para que saque tu mejor versión y tengas las mejores fotos que nunca te han hecho.
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
          <div class="max-w-3xl m-auto">
            <p class="text-primary text-center font-thin text-sm md:text-xl mb-6 md:mb-10">Sé que tu boda es especial, pero si el reportaje de tu boda no está a la altura te va a dar igual.</p>
            <p class="text-primary text-center font-thin text-sm md:text-xl mb-6 md:mb-10">Te cuento, tengo tres ases bajo la manga que van hacer que tu evento sea la bomba:</p>
            <ul>
              <li class="text-primary text-center font-thin text-sm md:text-xl mb-3 md:mb-6">*Tendrás unas imágenes que muestren a los demás que vuestra boda fue excepcional, incomparable y mejor que todas en las que has estado.</li>
              <li class="text-primary text-center font-thin text-sm md:text-xl mb-3 md:mb-6">*Saldréis guapos y naturales, no vais a tener que hacer posturitas ni cosas raras porque pasare desapercibido.</li>
              <li class="text-primary text-center font-thin text-sm md:text-xl">*Te daré un trato un trato exclusivo y te ayudare con mi experiencia para que de lo único que tengas que preocuparte sea de pasártelo bien.</li>
            </ul>
          </div>
          </div>
        </div>
      </div>
      <div class="max-w-7xl m-auto pt-4 sm:pt-14 px-5 md:px-0">
        <div class="flex flex-row special">
          <div class="left">
            <img :src="require(`~/assets/pelicula.png`)" class="w-full">
          </div> 
          <div class="mt-4 pb-4 md:pb-0 right font-thin">
                <p class="text-xs md:text-xl text-primary text-left mb-6 md:mb-10">
                  Tenía pensado ponerte las típicas opiniones de parejas que han contado conmigo como hace todo el mundo.
                </p> 
            <p class="text-xs md:text-xl text-primary text-left mb-6 md:mb-10">
              Prefiero que veas lo que hago, no contarte rollos ni promesas vacías.
            </p>
            <Suscribir /> 
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
