<template>
  <div class="mt-32 overflow-hidden">
    <Header/>
    <div class="max-w-7xl m-auto justify-between relative z-40">
      <div class="w-full py-10">
        <img class="w-full" :src="require(`~/assets/images/29.jpg`)">
      </div>
    </div>
    <div class="max-width-personal relative">
      <div class="relative w-full justify-center flex items-center">
        <div class="absolute deco">
          <load-svg name="deco" class="decosvg text-primary-dark" />
        </div>
        <div class="absolute left-0 h-1 bg-primary-dark w-full z-10 top-1/2 transform -translate-y-1/2"></div>
        <div class="relative p-10 w-52 h-24 flex items-center justify-center z-20 bg-white">
          <div class="absolute w-40 h-20 bg-primary-dark z-10"></div>
          <h2 class="relative uppercase text-2xl text-primary text-center z-10">ABOUT ME</h2>
        </div>
      </div>
       <div class="max-w-7xl m-auto">

        <div class="flex flex-col py-28 relative">
          <div class="flex">
            <div class="w-2/6">
              <img class="w-full" :src="require(`~/assets/me.jpg`)">
            </div>
            <div class="w-4/6 px-20">
              <h2 class="text-5xl text-primary text-center mb-2">Adolfo</h2>
              <p class="text-3xl text-primary text-center">I am a lover of neutrals, warm tones, and golden hour! I am truly so happy and honored that you're here. I am here to create genuine experience while capturing your memories for you to relive for a lifetime. I will be here for you throughout the entire planning process.  </p>
            </div>
          </div>
          <div class="link relative flex justify-end">
              <div class="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 w-full bg-primary"></div>
              <nuxt-link class="px-5 py-2 border-8 border-solid border-white bg-primary-dark text-white text-xl relative z-20" to="/quien-soy">
                MÁS INFO SOBRE MI
              </nuxt-link>
          </div>

      </div>
    </div>

      <div class="absolute decosecond">
          <load-svg name="deco" class="decosvg text-primary-dark" />
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
<style scoped>
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
