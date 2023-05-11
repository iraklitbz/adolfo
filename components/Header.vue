<template>
    <div class="bg-white fixed top-0 left-0 w-full z-50">
        <div class="custom-width m-auto border-b-4 border-solid border-primary-dark">
            <div class="flex max-w-7xl m-auto justify-between">
                <div 
                    class="block md:hidden px-3 absolute left-0 top-0 z-40 cursor-pointer"
                    @click="toggleMenu"
                >
                    <load-svg name="menu" class="text-primary-dark w-12 mt-5" />
                </div>
                <div class="w-52 md:w-64 mx-auto md:mx-0 md:mr-5 pt-6 pb-2 md:py-6">
                    <img src="~/assets/adolfo.png" alt="Logo" class="logo">
                </div>
                <Navbar 
                    :menuOpen="menuOpen"
                    @toggleMenu="toggleMenu"
                />
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Header',
  data () {
        return {
            menuOpen: false
        }
    },
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen
        }
    }
}
</script>
<style scoped>
.custom-width {
    max-width: 1600px;
    margin: 0 auto;
}
</style>
