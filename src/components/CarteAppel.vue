<script>
import { useContactsStore} from "../stores/contacts";
export default {
  name: "CarteAppel",
  setup(){
    const contactsStore = useContactsStore();
    return {
        contactsStore
    }
  },
  props: ["appel"],

};
</script>
<template>

<div class="carte">
    <div class="infos">
      <h2>{{ appel.personne }}</h2>
      <p>{{ appel.heure }}</p>
    </div>
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
</style>