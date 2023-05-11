<template>
    <div class="mt-32 overflow-hidden">
        <Header/>
        <div class="max-w-7xl m-auto justify-between relative z-40">
            <div class="w-full py-10">
                <img :src="require(`~/assets/hero.jpg`)" class="w-full">
            </div>
        </div>
        <div class="max-w-4xl m-auto justify-between relative z-40 px-5">
            <h2 class="text-4xl text-center">Me puedes encontrar en:</h2> 
            <ul class="mt-10 text-left w-80 m-auto">
                    <li class="mb-4 font-thin">
                        <a href="mailto:info@adolfobianco.com" class="flex items-center text-lg">
                            <load-svg name="gmail" class="text-black w-9 mr-2"></load-svg>
                            info@adolfobianco.com
                        </a>
                    </li> 
                    <li class="mb-4 md:hidden font-thin">
                        <a target="_blank" href="whatsapp://send?text=Tu mensaje&amp;phone=+34658595141&amp;abid=+34658595141" class="flex items-center text-lg">
                        <load-svg name="whatsapp" class="text-black w-9 mr-2"></load-svg>
                        658 595 141
                        </a>
                    </li> 
                    <li class="items-center text-lg hidden md:flex mb-4 font-thin">
                        <load-svg name="whatsapp" class="text-black w-9 mr-2"></load-svg>
                        658 595 141
                    </li> 
                    <li class="font-thin">
                        <a href="https://www.instagram.com/adolfo.bianco/" target="_blank" class="flex items-center text-lg">
                            <load-svg name="instagram" class="text-black w-9 mr-2"></load-svg>
                            adolfo.bianco
                        </a>
                    </li>
                </ul>
            </div>
        <Footer />
    </div>
  </template>
  
  