<template>
  <div id="app">
    <main-navigation></main-navigation>
    <main id="mainContent">
      <div class="main-content">
        
      </div>
      <main-footer></main-footer>
    </main>
  </div>
</template>

<script>
  import MainNavigation from './MainNavigation.vue';
  import MainFooter from './MainFooter.vue';
  import * as quark from 'quark-gui';

  export default {
    name: 'app',
    components: {
      mainNavigation: MainNavigation,
      mainFooter: MainFooter,
      modals: Modals
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
