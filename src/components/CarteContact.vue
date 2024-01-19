<script>
import { useContactsStore} from "../stores/contacts";
export default {
  name: "CarteContact",
  setup(){
    const contactsStore = useContactsStore();
    return {
        contactsStore
    }
  },
  props: ["contact"],
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
      <h2>{{ contact.prenom }} {{ contact.nom }}</h2>
      <p>{{ contact.num }}</p>
    </div>
    <img src="../assets/imgs/icon-call.png" alt="appeler" @click="appeler(contact.num)">
  </div>
</template>
<style scoped>
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
