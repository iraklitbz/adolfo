<template>
    <div class="mt-32 overflow-hidden">
      <Header/>
            <div
                class="max-w-4xl m-auto justify-between relative z-40 px-5"
            >
            <div
                v-for="(entryData, index) in videos"
                :key="index"
                :class="index === 0 ? 'w-full mb-10 mt-20' : 'w-full mb-10'"
            >
                <video-player
                    class="v-player"
                    :src="entryData"
                />
            </div>
        </div>
        <Footer />
    </div>
  </template>
  
  <script>
  import VideoPlayer from 'nuxt-video-player'
  require('nuxt-video-player/src/assets/css/main.css')
  export default {
    name: 'Video',
    components: {
        VideoPlayer
    },
    data () {
      return {
        videos: [
            "https://player.vimeo.com/video/607783697",
            "https://player.vimeo.com/video/624666305?h=3fe98ea5df",
            "https://player.vimeo.com/video/615109948?h=5eadc5261a",
            "https://player.vimeo.com/video/615087080?h=94af5a025c"
        ]
      }
    },
  }
  </script>
  <style scoped>
  </style>
  