<template>
  <Header />
  <div class="body max-w-800px box-border mx-auto p-4 text-5">
    <Demo />
  </div>
</template>

<style scoped lang="scss">
  .body {
    @media (min-width: 420px) {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }

    @media (max-width: 419.9px) {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
</style>
