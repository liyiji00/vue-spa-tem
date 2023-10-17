<template>
  <nav class="flex justify-end items-start p4 text-base">
    <a
      href="/"
      icon-btn
      i-lucide-home
    />
    <div flex-1 />
    <div class="flex gap-6">
      <a
        class="link icon-btn i-lucide-github"
        href="https://github.com/llx-00/vue-spa-tem"
        target="_blank"
        title="GitHub"
      />

      <a
        class="link icon-btn i-lucide-sun dark:i-lucide-moon"
        @click="toggleDark()"
      />
    </div>
  </nav>
</template>
