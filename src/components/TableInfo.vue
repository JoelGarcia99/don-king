<template>
  <!-- MESAS DE BILLAR -->
  <div class="bg-surface-50 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20">
    <div class="flex flex-col gap-4 items-center justify-center mb-12">
      <div
        class="text-surface-900 dark:text-surface-0 font-bold text-4xl lg:text-5xl text-center leading-tight"
      >
        NUESTRAS MESAS DE BILLAR
      </div>
      <div
        class="text-surface-500 dark:text-surface-400 text-lg text-center leading-normal"
      >
        Elige tu campo de batalla:
      </div>
    </div>
    <div class="flex lg:flex-row flex-col gap-8 max-w-7xl mx-auto">
      <!-- 7FT TABLE -->
      <div
        class="w-full flex-1 p-8 flex rounded-2xl flex-col bg-surface-0 dark:bg-surface-800 shadow-sm gap-6"
      >
        <h4
          class="text-surface-900 dark:text-surface-0 font-medium text-xl leading-tight"
        >
          Mesa de 7 pies (Principiantes)
        </h4>
        <p class="text-surface-500 dark:text-surface-400 leading-normal">
          Ideal para quienes se inician: pockets anchos y superficie cómoda.
        </p>
        <div class="flex items-center gap-2">
          <span
            class="font-bold text-3xl text-surface-900 dark:text-surface-0 leading-tight"
            >$2</span
          >
          <span
            class="font-medium text-surface-500 dark:text-surface-400 leading-tight"
            >por hora</span
          >
        </div>
        <Button label="Reservar" rounded class="w-full" />
      </div>
      <!-- 8FT TABLE (No Diamonds) -->
      <div
        class="w-full flex-1 p-8 flex rounded-2xl flex-col bg-surface-0 dark:bg-surface-800 shadow-sm gap-6"
      >
        <h4
          class="text-surface-900 dark:text-surface-0 font-medium text-xl leading-tight"
        >
          Mesa de 8 pies (Intermedios)
        </h4>
        <p class="text-surface-500 dark:text-surface-400 leading-normal">
          Pockets de tamaño profesional, sin marcadores de diamante.
        </p>
        <div class="flex items-center gap-2">
          <span
            class="font-bold text-3xl text-surface-900 dark:text-surface-0 leading-tight"
            >$2</span
          >
          <span
            class="font-medium text-surface-500 dark:text-surface-400 leading-tight"
            >por hora</span
          >
        </div>
        <Button label="Reservar" rounded class="w-full" />
      </div>
      <!-- 8FT TABLE (With Diamonds) -->
      <div
        class="w-full flex-1 p-8 flex rounded-2xl flex-col bg-surface-0 dark:bg-surface-800 shadow-sm gap-6"
      >
        <h4
          class="text-surface-900 dark:text-surface-0 font-medium text-xl leading-tight"
        >
          Mesa de 8 pies con diamantes (Intermedios)
        </h4>
        <p class="text-surface-500 dark:text-surface-400 leading-normal">
          Con marcadores de diamante para un control extra de precisión.
        </p>
        <div class="flex items-center gap-2">
          <span
            class="font-bold text-3xl text-surface-900 dark:text-surface-0 leading-tight"
            >$2</span
          >
          <span
            class="font-medium text-surface-500 dark:text-surface-400 leading-tight"
            >por hora</span
          >
        </div>
        <Button label="Reservar" rounded class="w-full" />
      </div>
    </div>
    <p class="text-center text-surface-500 dark:text-surface-400 mt-8">
      Próximamente: mesas de carambola y profesionales de 9 pies.
    </p>
  </div>
</template>

<script setup lang="ts">
import Button from "primevue/button";
import LogoV0Svg from "@/assets/logov0.vue";
import Input from "primevue/inputtext";
</script>

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
