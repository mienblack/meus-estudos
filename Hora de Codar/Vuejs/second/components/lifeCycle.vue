<template>
  <div>
      <h1>My name is: {{ nome }}</h1>
      <pessoa />
  </div>
</template>

<script>
import pessoa from './pessoa.vue'
export default {
  name: "lifeCycle",
  components: {
    pessoa
    },
  data() {
    return {
      nome: "não sei",
    };
  },
  created() {
    setTimeout(() => {this.nome = "Flavio"}, 100)
  },
  mounted() {
    setTimeout(() => {this.nome = "Damien"}, 200)
  }
};
</script>