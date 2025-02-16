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
                a: 'Te daré un reportaje que resalte quien eres, hago que todo sea más bonito. Ojo, esto puede causar envidia en los demás cuando vean como son las fotos de tu boda. Pasare desapercibido, pero estaré a tu lado para ayudarte cuando lo necesites, eso junto con mi experiencia en más de 100 bodas será un bálsamo para tus nervios. Y lo mejor es que no tienes que hacer cosas raras ni extravagantes, nada de poses horteras.'
            },
            {
                id: 2,
                q: '¿CUÁNTO TARDAS EN ENTREGARME LAS FOTOS?',
                a: 'Tendrás las fotos en menos de un mes, si también contratas video estará en listo en 40 días, cuando aún estés con el subidón de la boda.'
            },
            {
                id: 3,
                q: '¿REALIZAS ÁLBUM?',
                a: 'Claro, un libro de fotos para verlo juntitos con sofá y manta en las tardes de invierno. También para regalar a los padres.'
            },
            {
                id: 4,
                q: '¿REALIZAS PREBODA?',
                a: 'La preboda se puso muy de moda hace años, es una sesión de fotos que puede completar el reportaje si os mola lo hacemos. Os puedo proponer muchas ideas.'
            },
            {
                id: 5,
                q: '¿HACES BODAS POR TODA ESPAÑA?',
                a: 'Venga vale.'
            },
            {
                id: 6,
                q: '¿CUÁNTO TIEMPO ESTAS CON NOSOTROS?',
                a: 'Estoy todo el tiempo que haga falta para que el reportaje quede perfecto, no trabajo por horas.'
            },
            {
                id: 7,
                q: '¿TRABAJAS SOLO?',
                a: 'Siempre voy yo a hacer las sesiones no delego en nadie más, cuento con compañero de apoyo cuando se necesita.'
            },
            {
                id: 8,
                q: '¿REALIZAS CONTRATO?',
                a: 'Siempre, para que sepas al detalle que vas a tener.'
            },
            {
                id: 9,
                q: '¿REALIZAS VÍDEO?',
                a: 'Si yo soy buen fotógrafo ( bueno eso dicen) los filmmakers con los que trabajo son aún mejores.'
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

