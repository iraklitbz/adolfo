<template>
    <ul 
        class="flex-col md:flex-row items-center text-2xl px-4 md:px-0 pb-3 md:pb-0 pt-5 md:pt-0 fixed md:flex md:static top-0 left-0 w-full md:opacity-100 md:w-auto bg-white transition-opacity duration-200 ease-in-out"
        :class="menuOpen ? 'flex z-50 opacity-100' : 'hidden opacity-0'"
    >
        <li class="md:mr-10 mb-5 md:mb-0"><nuxt-link class="text-primary hover:text-primary-light font-thin transition-colors nuxt-link-exact-active nuxt-link-active" to="/">Inicio</nuxt-link></li>
        <li class="md:mr-10 mb-5 md:mb-0"><nuxt-link class="text-primary hover:text-primary-light font-thin transition-colors nuxt-link-exact-active nuxt-link-active" to="/fotos">Fotos</nuxt-link></li>
        <li class="md:mr-10 mb-5 md:mb-0"><nuxt-link class="text-primary hover:text-primary-light font-thin transition-colors nuxt-link-exact-active nuxt-link-active" to="/videos">Videos</nuxt-link></li>
        <li class="md:mr-10 mb-5 md:mb-0"><nuxt-link class="text-primary hover:text-primary-light font-thin transition-colors nuxt-link-exact-active nuxt-link-active" to="/faqs">Preguntas frequentes</nuxt-link></li>
        <li class="md:mr-10 mb-5 md:mb-0"><nuxt-link class="text-primary hover:text-primary-light font-thin transition-colors nuxt-link-exact-active nuxt-link-active" to="/tarifas">Tarifas</nuxt-link></li>
        <li><nuxt-link class="text-primary hover:text-primary-light transition-colors font-thin nuxt-link-exact-active nuxt-link-active " to="/contacto">Contacto</nuxt-link></li>
        <li 
            class="md:hidden cursor-pointer"
            @click="$emit('toggleMenu')"
        >
            <load-svg name="cross" class="text-primary-dark w-14 mt-5" />
        </li>
        <h2 class="-rotate-90 block md:hidden bg-primary-dark text-primary px-2 py-2 absolute -left-3 top-10 text-3xl">Menu</h2>
    </ul>
</template>
<script>
export default {
  name: 'Navbar',
  props: {
        menuOpen: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen
        }
    }
}
</script>