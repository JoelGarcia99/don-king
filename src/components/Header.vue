<template>
  <nav class="w-full bg-spartan-dark text-white shadow-md">
    <div
      class="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4"
    >
      <!-- Logo -->
      <div class="flex items-center space-x-2">
        <LogoV0Svg class="w-12 h-12 fill-gold" />
      </div>
      <!-- Navigation Links -->
      <ul class="hidden md:flex items-center space-x-8">
        <li><a href="#home" class="hover:text-white/80 transition">Home</a></li>
        <li>
          <a href="#about" class="hover:text-white/80 transition"
            >Sobre Nosotros</a
          >
        </li>
        <li><a href="#blog" class="hover:text-white/80 transition">Blog</a></li>
      </ul>
      <!-- Mobile Menu Button -->
      <Button
        icon="pi pi-bars"
        class="md:hidden p-button-text p-button-plain text-white hover:text-gold"
        @click="toggleMobileMenu"
      />
    </div>
    <!-- Mobile Menu -->
    <transition name="slide-fade">
      <ul
        v-if="mobileMenuOpen"
        class="md:hidden bg-spartan-dark text-white px-6 pb-4 space-y-4"
      >
        <li>
          <a href="#home" class="block hover:text-white/80 transition">Home</a>
        </li>
        <li>
          <a href="#about" class="block hover:text-white/80 transition"
            >Sobre Nosotros</a
          >
        </li>
        <li>
          <a href="#blog" class="block hover:text-white/80 transition">Blog</a>
        </li>
      </ul>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Button from "primevue/button";
import LogoV0Svg from "@/assets/logov0.vue";

const mobileMenuOpen = ref(false);
function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}
</script>

<style scoped>
@layer utilities {
  .bg-spartan-dark {
    background: linear-gradient(145deg, #2a1717, #1f130e, #4e2416);
    background-blend-mode: overlay;
    filter: brightness(0.8) contrast(1.2) saturate(1.1);
  }
  .fill-gold {
    fill: #d4af37;
  }
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
