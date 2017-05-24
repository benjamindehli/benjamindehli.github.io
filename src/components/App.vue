<template>
  <div id="app">
    <main-navigation></main-navigation>
    <main id="mainContent">
      <div class="main-content">
        <project-cards></project-cards>
      </div>
      <main-footer></main-footer>
    </main>
  </div>
</template>

<script>
  import ProjectCards from './ProjectCards.vue';
  import MainNavigation from './MainNavigation.vue';
  import MainFooter from './MainFooter.vue';
  import * as quark from 'quark-gui';

  export default {
    name: 'app',
    components: {
      mainNavigation: MainNavigation,
      projectCards: ProjectCards,
      mainFooter: MainFooter
    },
    data () {
      return {

      }
    },
    created (){

    }
  }
</script>

<style lang="css">

</style>
