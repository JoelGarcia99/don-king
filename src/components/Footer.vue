<template>
  <!-- FOOTER -->
  <footer class="w-full bg-spartan text-white border-t border-white/20">
    <div
      class="max-w-screen-xl mx-auto px-6 lg:px-12 py-12 flex flex-col lg:flex-row justify-between items-center gap-10"
    >
      <!-- Logo & Branding -->
      <div class="flex flex-col items-center text-center">
        <LogoV0Svg style="fill: #d4af37; width: 10rem; height: 10rem" />
        <small class="text-white/70 mt-4">
          &copy; Don King {{ new Date().getFullYear() }} — Honor y Gloria en
          Cada Partida
        </small>
        <p class="mt-2 text-white/70">
          🕒 Horario: Lunes a Domingo | 9:00 AM - 11:00 PM
        </p>
      </div>
      <!-- Location -->
      <div class="text-white max-w-md text-center lg:text-left">
        <h3 class="font-bold text-xl text-gold mb-2">
          <i class="fas fa-map-marker-alt mr-2"></i>Ven y demuestra tu poder
        </h3>
        <p>
          Nos encuentras en Portoviejo, entre las calles España y Argentina,
          diagonal al puente El Salto, junto al restaurante "La Parada".
        </p>
      </div>
      <!-- Social -->
      <div class="text-white max-w-md text-center lg:text-left">
        <h2 class="font-bold text-xl text-gold mb-2">
          Síguenos y forma parte de la legión
        </h2>
        <div class="flex gap-6 justify-center lg:justify-start text-2xl">
          <a
            href="#"
            class="transition-transform duration-200 hover:scale-125 hover:text-gold"
            aria-label="Facebook"
            title="Facebook"
            ><i class="fab fa-facebook-f"></i
          ></a>
          <a
            href="#"
            class="transition-transform duration-200 hover:scale-125 hover:text-gold"
            aria-label="Instagram"
            title="Instagram"
            ><i class="fab fa-instagram"></i
          ></a>
          <a
            href="#"
            class="transition-transform duration-200 hover:scale-125 hover:text-gold"
            aria-label="TikTok"
            title="TikTok"
            ><i class="fab fa-tiktok"></i
          ></a>
          <a
            href="#"
            class="transition-transform duration-200 hover:scale-125 hover:text-gold"
            aria-label="YouTube"
            title="YouTube"
            ><i class="fab fa-youtube"></i
          ></a>
        </div>
      </div>
    </div>
    <div class="w-full mt-10 border-t border-white/10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.139379861453!2d-80.46669252522292!3d-1.0570196989328113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902bf3005c43a1b3%3A0x3747b1ac9b44cf74!2sBillar%20Club%20Don%20King!5e0!3m2!1sen!2sec!4v1748158239818!5m2!1sen!2sec"
        width="100%"
        height="400"
        style="border: 0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </footer>
</template>

<script setup lang="ts">
import Button from "primevue/button";
import LogoV0Svg from "@/assets/logov0.vue";
</script>
