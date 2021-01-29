<template>
  <div>
    <Header/>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'

export default { 
    components: {
        Header
    },
  data() {
    return {
        fullname : this.$store.state.membre.fullname
    };
  },
  mounted() {
  },
  methods: {
      seDesconnecter(){
          this.$store.commit('setMembre', ' ');
          this.$router.push('/se-connecter');
      }
  },
};
</script>
<style>
</style>