<template>
  <div class="mt-32 overflow-hidden">
    <Header/>
          <div
              class="max-w-4xl m-auto justify-between relative z-40 px-5"
          >
          <Suscribir />
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
    padding-bottom: 0%;
    min-height: 50px;
    display: grid;
}
#mc_embed_signup div#mce-responses {
    float: left;
    top: -1.4em;
    padding: 0em;
    overflow: hidden;
    width: 100%;
    margin: 0%;
    clear: both;
}
#mc_embed_signup .foot {
    display: flex;
    justify-content: flex-start;
    width: 100%;
}
#mc_embed_signup .foot {
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    align-items: center;
}
</style>

