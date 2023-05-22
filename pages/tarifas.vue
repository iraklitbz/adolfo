<template>
  <div class="mt-32 overflow-hidden">
    <Header/>
          <div
              class="max-w-4xl m-auto justify-between relative z-40 px-5"
          >
          <h3 class="main-headline text-lg px-4 md:px-0 md:text-2xl text-primary text-center my-10 block font-bold">
              YA SE QUE BUSCAS FOTOGRAFO PARA TU BODA Y TODO TE PARECE IGUAL.
          </h3>
          <p class="text-lg px-4 md:px-0 md:text-xl text-primary text-center my-10 block font-thin">
            Si es así, es normal porque en el sector de las bodas hay muchos clones. Déjame decirte que no soy un fotógrafo normal y espero que tú tampoco seas una novia que busca algo normal para su boda.
          </p>
          <p class="text-lg px-4 md:px-0 md:text-xl text-primary text-center my-10 block font-thin">
            Te voy a enviar mis tarifas y te voy a invitar a suscribirte a mi newsletter, en ella vas a encontrar consejos que no vas a ver en internet, te vas a beneficiar de mi experiencia habiendo disparado más de 100 bodas. Te voy a contar que puedes hacer en caso de que llueva, que hacer si sientes inseguridad por salir bien en las fotos, como tratar con invitados complicados, como gestionar todo para que el reportaje de boda sea natural, como hacer si tu suegra se mete mucho en los preparativos y muchas cosas más que no te dicen en los foros ni en webs de boda.
          </p>
          <p class="text-lg px-4 md:px-0 md:text-xl text-primary text-center my-10 block font-thin">
            Siempre podrás darte de baja y dejar de recibir mis consejos, siempre al final te invitare a una llamada conmigo de contratación, no es para todo el mundo. Solo para novias que buscan algo especial.
          </p>
          <p class="text-lg px-4 md:px-0 md:text-xl text-primary text-center my-10 block font-thin">
            Dicho esto, aquí puedes dejar tu mail para recibir mis tarifas y mi newsletter .
          </p>
          <div class="flex flex-col bg-primary/20 rounded-md px-4 py-4 mt-5 max-w-xl m-auto">
              <!-- <input v-model="email" type="text" class="border border-primary rounded-md px-4 py-2 w-full" placeholder="Escribe aquí tu correo">
              <button class="bg-primary text-white rounded-md px-4 py-4 mt-5 md:w-1/2 m-auto" @click="sendEmail"> SUSCRIBIRME </button> -->
              <!-- Begin Mailchimp Signup Form -->
                  <div 
                    id="mc_embed_signup"
                  >
                      <form action="https://adolfobianco.us14.list-manage.com/subscribe/post?u=fa1ee2315a0aea68b75bc84b5&amp;id=87bd65bcfa&amp;f_id=003998e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                          <div id="mc_embed_signup_scroll">
                          <h2
                            class="main-headline text-xl px-4 md:px-0 md:text-2xl text-primary my-10 block font-bold"
                          >Suscríbete</h2>
                          <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
                          <div class="mc-field-group">
                            <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
                          </label>
                          <input type="email" value="" name="EMAIL" class="required email border border-primary rounded-md px-4 py-2 w-full h-10" id="mce-EMAIL" required>
                          <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
                  </div>
                <div id="mce-responses" class="clear foot">
                  <div class="response" id="mce-error-response" style="display:none"></div>
                  <div class="response" id="mce-success-response" style="display:none"></div>
                </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                  <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_fa1ee2315a0aea68b75bc84b5_87bd65bcfa" tabindex="-1" value=""></div>
                      <div class="optionalParent">
                          <div class="clear foot">
                              <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="bg-primary text-white rounded-md py-4 mt-5 md:w-1/2 m-auto">
                          </div>
                      </div>
                  </div>
              </form>
              </div>
<!--End mc_embed_signup-->
          </div>
      </div>
      <Footer />
  </div>
</template>
<script>
export default {
  name: 'Tarifas',
  head: {
    link: [
      { rel: 'stylesheet', href: '//cdn-images.mailchimp.com/embedcode/classic-071822.css' },
    ],
    script: [
      { src: '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js', body: true },
      {
        innerHTML: `(function($) {
          window.fnames = new Array();
          window.ftypes = new Array();
          fnames[0] = 'EMAIL';
          ftypes[0] = 'email';
          fnames[1] = 'FNAME';
          ftypes[1] = 'text';
          fnames[2] = 'LNAME';
          ftypes[2] = 'text';
          fnames[3] = 'ADDRESS';
          ftypes[3] = 'address';
          fnames[4] = 'PHONE';
          ftypes[4] = 'phone';
          fnames[5] = 'BIRTHDAY';
          ftypes[5] = 'birthday';
        }(jQuery));
        var $mcj = jQuery.noConflict(true);`,
        type: 'text/javascript',
        charset: 'utf-8',
      }
    ],
  },
  data() {
    return {
      email: '',
    }
  },
  methods: {
    async sendEmail() {
      try {
        await mailchimp.lists.addListMember('87bd65bcfa', {
          email_address: this.email,
          status: 'subscribed',
        });

        // Aquí puedes mostrar un mensaje de suscripción exitosa o redirigir a una página de confirmación
        console.log('¡Suscripción exitosa!');
      } catch (error) {
        // Aquí puedes mostrar un mensaje de error o manejar el error de otra manera
        console.error('Error al suscribirse', error);
      }
    }
  }
}
</script>
<style>
.main-headline {
  font-family: 'Montserrat', sans-serif;
}
#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif;  width:100%;}
#mc-embedded-subscribe {
    margin: 0px;
    width: inherit;
}
#mc_embed_signup .foot {
    display: flex;
    justify-content: center;
    width: 100%;
}
#mc_embed_signup .mc-field-group {
    clear: left;
    position: relative;
    width: 100%;
    padding-bottom: 3%;
    min-height: 50px;
    display: grid;
}
</style>

