<script>
import { useContactsStore } from "../stores/contacts";
import CarteAppel from "@/components/CarteAppel.vue";
export default {
  name: "JournalView",
  setup() {
    const contactsStore = useContactsStore();
    return {
      contactsStore,
    };
  },
  components: {
    CarteAppel,
  },
  computed: {
    store() {
      return this.contactsStore;
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="appels">
      <div v-for="appel in store.appels">
        <CarteAppel :appel="appel"></CarteAppel>
      </div>
    </div>
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
.appels {
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
