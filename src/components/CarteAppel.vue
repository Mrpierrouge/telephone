<script>
import { useContactsStore } from "../stores/contacts";
export default {
  name: "CarteAppel",
  setup() {
    const contactsStore = useContactsStore();
    return {
      contactsStore,
    };
  },
  props: ["appel"],
  methods: {
    appeler(num){
        this.contactsStore.appel(num)
    }
  }
};
</script>
<template>
  <div class="carte">
    <div class="infos">
      <h2>{{ appel.personne }}</h2>
      <p>
        le {{ appel.date.jour }}/{{ appel.date.mois }} à
        {{ appel.date.heure }}:{{ appel.date.minute }}
      </p>
    </div>
    <img src="../assets/imgs/icon-call.png" alt="appeler" @click="appeler(appel.num)">
  </div>
</template>
<style>
.carte {
  width: 50vw;
  border: 1px solid orange;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
.infos {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
}
</style>
