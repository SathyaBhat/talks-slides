<!-- an example footer for pages -->
<template>
  <footer
    v-if="$slidev.nav.currentLayout !== 'cover'"
    class="absolute bottom-0 right-0 p-1"
  >
    <logos-linkedin /> sathyabhat <logos-github-octocat /> sathyabhat
    <logos-twitter /> sathyabhat
  </footer>
</template>
