<template>
    <div class="mt-32 overflow-hidden">
        <Header/>
        <div
            class="max-w-4xl m-auto justify-between relative z-40 px-5"
        >
            <div
                class="w-full py-10"
            >
                <img
                    v-for="(boda, index) in bodas"
                    :key="index"
                    :src="boda" class="w-full mb-10" 
                />
            </div>
        </div>
        <Footer />
    </div>
  </template>
    <script>
    export default {
      name: 'Bodas',
      data () {
        return {
          bodas: []
        }
      },
      mounted() {
        const imageContext = require.context('@/assets/images/', false, /\.jpg$/);
        for (let i = 1; i <= 82; i++) {
            const imagePath = `${i}.jpg`;
            if (imageContext.keys().includes(`./${imagePath}`)) {
            const image = require(`@/assets/images/${imagePath}`);
            this.bodas.push(image);
            }
        }
        }
    }
    </script>
  