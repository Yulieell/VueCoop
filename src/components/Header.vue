<template>
  <div>
    <sui-menu id="header" attached="top">
      <sui-dropdown item icon="home" simple>
        <sui-dropdown-menu>
            <sui-dropdown-item>Membres</sui-dropdown-item>
            <sui-dropdown-divider />
            <sui-dropdown-item>Conversation</sui-dropdown-item>
        </sui-dropdown-menu>
      </sui-dropdown>

      <sui-menu-menu position="right">
        <sui-menu-item right >
          <p id="message" @click="seDesconnecter">Se desconnecter</p>
        </sui-menu-item>
      </sui-menu-menu>
    </sui-menu>

    <sui-segment id="headerBottom" attached="bottom">
      <sui-icon name="users" circular /> Bienvenue {{fullname}}
    </sui-segment>
  </div>
</template>
<script>
export default {
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
#header{
    background-color: rgb(227, 251, 255);
}

#headerBottom{
    text-align: center;
    background-color: #303030;
    color: white;
}

#message{
    cursor: pointer;
    color: teal;
}
</style>