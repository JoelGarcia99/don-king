<template>
  <div class="flex lg:flex-row flex-col justify-center lg:justify-between">
    <!-- LEFT SECTION -->
    <div
      class="w-full h-screen bg-spartan flex items-center justify-center text-gold font-bold text-4xl"
    >
      <div class="w-full px-6 py-12 lg:p-12 xl:p-16 text-center lg:text-left">
        <h1 class="text-4xl uppercase font-bold mb-6">
          Don King | Billar Club<br />
          <span class="text-white">Hogar de Reyes</span>
        </h1>

        <p class="text-lg mb-8 text-justify">
          En Don King, el billar no es un juego: es una batalla de reyes. Mejora
          tu nivel con sesiones personalizadas, domina la estrategia con
          tecnología de última generación y conquista la mesa como un verdadero
          guerrero.
        </p>

        <!-- DOWNLOAD APP SECTION -->
        <div class="flex flex-col lg:flex-row items-center gap-4 mt-4">
          <!-- <img -->
          <!--   src="/assets/playstore.png" -->
          <!--   alt="Disponible en Google Play" -->
          <!--   class="w-32 h-auto" -->
          <!-- /> -->
          <!-- source https://tailblocks.cc/ -->
          <div class="text-base font-normal text-white">
            Descarga nuestra app y lleva el control de tus partidas, reservas y
            progreso desde tu móvil.
          </div>
          <section>
            <div
              class="flex flex-col lg:flex-row md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 gap-2 justify-center items-center"
            >
              <button
                class="bg-gray-100 w-[12rem] inline-flex py-3 px-5 cursor-pointer rounded-lg items-center hover:bg-gray-200 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="w-6 h-6"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"
                  ></path>
                </svg>
                <span class="ml-4 flex items-start flex-col leading-none">
                  <span class="text-sm text-gray-600 mb-1">Disponible</span>
                  <span class="text-sm">Google Play</span>
                </span>
              </button>
              <button
                class="bg-gray-100 w-[12rem] inline-flex py-3 px-5 rounded-lg items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="w-6 h-6"
                  viewBox="0 0 305 305"
                >
                  <path
                    d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"
                  ></path>
                  <path
                    d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"
                  ></path>
                </svg>
                <span class="ml-4 flex items-start flex-col leading-none">
                  <span class="text-sm text-gray-600 mb-1">Próximamente</span>
                  <span class="text-sm">App Store</span>
                </span>
              </button>
            </div>
          </section>
        </div>

        <!-- SCHEDULE INFO -->
        <div class="mt-8 text-sm font-medium text-white">
          <span class="block">Horario:</span>
          <span>Lunes a Domingo | 9:00 AM - 11:00 PM</span>
        </div>
      </div>
    </div>

    <!-- RIGHT SECTION -->
    <div class="w-full lg:w-[60%] max-h-screen overflow-hidden">
      <img
        src="/assets/king.png"
        alt="Imagen del Rey"
        class="object-cover w-full h-full"
      />
    </div>
  </div>
</template>

<script setup type="ts"></script>

<style>
@layer utilities {
  .bg-spartan {
    background: linear-gradient(145deg, #3b1f1f, #2e1a13, #5a2c19);
    background-blend-mode: overlay;
    background-size: 400% 400%;
    animation: rustPulse 15s ease infinite;
    filter: brightness(0.9) contrast(1.1) saturate(1.2);
    position: relative;
  }

  .text-gold {
    color: #d4af37;
    text-shadow: 1px 1px 2px #000;
  }

  @keyframes rustPulse {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
}

.bg-spartan::after {
  content: "";
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.1) 0px,
    rgba(0, 0, 0, 0.1) 1px,
    transparent 1px,
    transparent 4px
  );
  opacity: 0.1;
  pointer-events: none;
}
</style>
