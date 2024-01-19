<script>
import { useContactsStore } from "..//stores/contacts";
import CarteContact from "@/components/CarteContact.vue";
import FormContact from "@/components/FormContact.vue";
export default {
  name: "ContactView",
  setup() {
    const contactsStore = useContactsStore();
    return {
      contactsStore,
    };
  },
  components: {
    CarteContact,
    FormContact,
  },
  computed: {
    contacts() {
      return this.contactsStore.contacts;
    },
  },
  data() {
    return {
      checker: true,
    };
  },
  methods: {
    toggle() {
      var a = !this.checker;
      this.checker = a;
    },
  },
};
</script>

<template>
  <div class="container">
    
    <div v-if="checker == true" class="contacts">
      <div v-for="contact in contacts">
        <CarteContact :contact="contact"></CarteContact>
      </div>

    </div>
    <button v-if="checker == true" @click="toggle()">
      <img src="../assets/imgs/icon-plus.png" alt="Ajouter Contact">
    </button>

    <div v-if="checker == false" class="AddForm">
      <FormContact></FormContact>

    </div>
    <button v-if="checker == false" @click="toggle()">
      <img src="../assets/imgs/icon-retour.png" alt="retour">
    </button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10vw;
  padding-right: 10vw;
  padding-top: 10vh;
}
.AddForm{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10%;
  gap: 5px;
}
button {
  align-self: flex-start;
}
.contacts {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10%;
  gap: 5px;
}
img{
  cursor: pointer;
}
</style>
