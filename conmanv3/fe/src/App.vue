<template>
  <Atas />
  <router-view />
</template>

 <script>
    /* eslint-disable */ 
    import './app.css'; 
    import Atas from './components/theme/ThemeHeader.vue';
    
    
    export default {
     name: 'App',
     components:{
       Atas
     }
    }
  </script>