<script>
import { useContactsStore } from "@/stores/contacts";

export default {
  name: "FormContact",
  setup() {
    const contactStore = useContactsStore();
    return {
      contactStore,
    };
  },
  components: {},
  data() {
    return {
      formContact: {
        prenom: "",
        nom: "",
        num: "",
      },
    };
  },
  methods: {
    ajoutContact() {
      this.contactStore.ajoutContact(this.formContact);
      this.formContact = {
        prenom: "",
        nom: "",
        num: "",
      };
    },
  },
};
</script>
<template>
  <form @submit.prevent="ajoutContact()">
    <input type="text" placeholder="Prenom" v-model="formContact.prenom" />
    <input type="text" placeholder="nom" v-model="formContact.nom" />
    <input type="text" placeholder="numéro" v-model="formContact.num" />
    <button type="submit">Ajouter</button>
  </form>
</template>
<style scoped>
form{
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 50vw;
    align-items: center;
    justify-content: center;
}
input{
    width: 50%;
}
button{
    align-self: center;
}
</style>
