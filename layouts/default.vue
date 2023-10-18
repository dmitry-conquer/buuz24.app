<template>
  <div>
    <NuxtLoadingIndicator
      :height="6"
      :color="'repeating-linear-gradient(to right,#ac3013 0%,#e95c3c 50%,#f19581 100%)'"
      :throttle="50" />
    <div class="flex min-h-screen flex-col">
      <Header />
      <main class="grow text-base">
        <slot></slot>
      </main>
      <Footer />
    </div>
  </div>
</template>
