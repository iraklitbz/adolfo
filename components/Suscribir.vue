<template>
      <div class="flex flex-col rounded-md px-4 py-4 mt-5 max-w-xl m-auto">
              <!-- <input v-model="email" type="text" class="border border-primary rounded-md px-4 py-2 w-full" placeholder="Escribe aquí tu correo">
              <button class="bg-primary text-white rounded-md px-4 py-4 mt-5 md:w-1/2 m-auto" @click="sendEmail"> SUSCRIBIRME </button> -->
              <!-- Begin Mailchimp Signup Form -->
                  <div 
                    id="mc_embed_signup"
                  >
                      <form action="https://adolfobianco.us14.list-manage.com/subscribe/post?u=fa1ee2315a0aea68b75bc84b5&amp;id=87bd65bcfa&amp;f_id=003998e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                          <div id="mc_embed_signup_scroll">
                          <h2
                            class="main-headline text-xl px-4 md:px-0 md:text-2xl text-primary mt-10 mb-5 block font-bold"
                          >Si quieres recibir mis tarifas y llevarte consejos que nadie más te da sobre bodas</h2>
                          <div class="mc-field-group">
                            <label for="mce-EMAIL">Tu mail aquí: <span class="asterisk">*</span>
                          </label>
                          <input type="email" value="" name="EMAIL" class="required email border border-primary rounded-md px-4 py-2 w-full h-10" id="mce-EMAIL" required>
                          <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
                  </div>
                  <div
                    class="text-lg px-4 md:px-0 text-primary font-thin items-center mb-5"
                  >
                      <input type="checkbox" value="1" name="policy" :checked="activeButton" class="mr-2" @input="handlePolicy">
                      <span
                      
                      >
                        Aceptar <nuxt-link to="/politica-de-privacidad" class="font-bold">políticas de privacidad</nuxt-link>
                      </span>
                  </div>
                <div id="mce-responses" class="clear foot">
                  <div class="response" id="mce-error-response" style="display:none"></div>
                  <div class="response" id="mce-success-response" style="display:none"></div>
                </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div 
                  style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_fa1ee2315a0aea68b75bc84b5_87bd65bcfa" tabindex="-1" value=""></div>
                    <div class="optionalParent">
                        <div class="clear foot">
                            <input type="submit" value="Subscribe" name="subscribe" :disabled="!activeButton" id="mc-embedded-subscribe" class="text-xl text-white rounded-md py-4 mt-5 md:w-1/2 m-auto"
                            :class="activeButton ? 'cursor-pointer bg-primary' : 'cursor-not-allowed bg-primary/50'"
                            >
                        </div>
                    </div>
                </div>
              </form>
              </div>
<!--End mc_embed_signup-->
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
      activeButton: false,
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
    },
    handlePolicy() {
      this.activeButton = !this.activeButton
    }
  }
}
</script>