<template>
    <div class="mt-32 overflow-hidden">
      <Header/>
        <div
            class="max-w-7xl m-auto justify-between relative z-40 px-5 md:px-0"
        >
            <div class="w-full py-10">
                <img :src="require(`~/assets/faqs.jpg`)" class="w-full">
            </div>
        </div>
        <div
            class="max-w-4xl m-auto justify-between relative z-40 px-5 md:px-0"
        >
            <div
                v-for="(faq, index) in faqs"
                :key="index"
                class="mb-5 bg-primary bg-opacity-10 p-5"
            >
                <div 
                    class="flex items-center cursor-pointer"
                    @click="handleActiveFaqs(faq.id)"
                >
                    <load-svg name="plus" 
                        class="text-primary w-9 mr-5 transition-all duration-500 ease-in-out"
                        :class="activeFaqsOpen.includes(faq.id) ? 'rotate-45' : 'rotate-0'"
                    />
                    <p class="text-xl text-primary">
                        {{ faq.q }}
                    </p>
                </div>
                <div
                    class="transition-all duration-500 ease-in-out"
                    :class="activeFaqsOpen.includes(faq.id) ? 'h-auto' : 'h-0'"
                >
                <p 
                    class="text-lg mt-7 pl-14 transition-all duration-200 ease-in-out font-thin"
                    :class="activeFaqsOpen.includes(faq.id) ? 'block' : 'hidden'"
                >
                    {{ faq.a }}
                </p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  </template>
  
  <script>
  export default {
    name: 'faqs',
    data () {
      return {
        activeFaqsOpen: [],
        faqs: [
            {
                id: 1,
                q: '¿QUÉ OFRECE ADOLFO BIANCO?',
                a: 'Cuento con mis fotografías el día de tu boda sin posados , imágenes que te harán revivir ese día para siempre, te acompañare, te asesorare y te ayudare para que tu boda sea una experiencia irrepetible y no tengas que preocuparte nada más que de disfrutar.'
            },
            {
                id: 2,
                q: '¿CUÁNTO TARDAS EN ENTREGARME LAS FOTOS?',
                a: 'Tendrás todas las fotos en un plazo de 15 días. Todas las imágenes en color y las mismas en blanco y negro. Además te entregare una presentación de las fotos en un video con la canción que elijas.'
            },
            {
                id: 3,
                q: '¿REALIZAS ÁLBUM?',
                a: 'Soy un gran defensor de las fotografías en papel fotográfico, podéis seleccionar las imágenes que más os gusten y yo me encargare de maquetar vuestro álbum para que tengáis un recuerdo inolvidable. Además tenéis la opción de pedir más copias para vuestros padres.'
            },
            {
                id: 4,
                q: '¿REALIZAS PREBODA?',
                a: 'La preboda es una experiencia que recomiendo mucho para que el día de la boda os sintáis más cómodos delante de la cámara y tengáis unas fotos románticas. Tanto el álbum como la preboda o postboda son opcionales podéis contratarlas u optar solo por el reportaje en digital.'
            },
            {
                id: 5,
                q: '¿HACES BODAS POR TODA ESPAÑA?',
                a: 'Mi residencia está en la Comunidad de Madrid pero viajo constantemente, si estas en otra parte de España , en el extranjero o tu boda es diferente ponte en contacto conmigo y estaré encantado de ayudarte.'
            },
            {
                id: 6,
                q: '¿CUÁNTO TIEMPO ESTAS CON NOSOTROS?',
                a: 'Estoy con vosotros durante toda la boda, desde que os preparáis hasta una hora después de que empiece el baile.'
            },
            {
                id: 7,
                q: '¿TRABAJAS SOLO?',
                a: 'Siempre realizo la dirección, la toma y la edición de las bodas, cuando la logística de la boda requiere otro fotógrafo extra cuento con colaboradores afines a mi estilo.'
            },
            {
                id: 8,
                q: '¿REALIZAS CONTRATO?',
                a: 'Siempre firmo un contrato con mis parejas donde detallamos todo lo que vais a obtener al contratar mis servicios.'
            },
            {
                id: 9,
                q: '¿REALIZAS VÍDEO?',
                a: 'En mi equipo cuento con los mejores filmmakers , con los que trabajo en sintonía para conseguir un estilo muy cinematográfico.'
            }
        ]
      }
    },
    methods: {
        handleActiveFaqs(id) {
            if (this.activeFaqsOpen.includes(id)) {
                this.activeFaqsOpen = this.activeFaqsOpen.filter(item => item !== id)
            } else {
                this.activeFaqsOpen.push(id)
            }
        }
    }
  }
  </script>

  