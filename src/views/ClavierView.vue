<script>
import { useContactsStore } from "@/stores/contacts";
export default {
  name: "ClavierView",
  setup() {
    const store = useContactsStore();
    return {
      store,
    };
  },
  data() {
    return {
      Numero: "",
      Contact: "",
    };
  },
  methods: {
    addToInput(x) {
      if (this.Numero.length < 10) {
        this.Numero += parseInt(x);
        this.InContact();
      }
    },
    suppToInput() {
      if (this.Numero.length > 0) {
        this.Numero = this.Numero.substring(0, this.Numero.length - 1);
      }
      this.Contact = "";
    },
    appeler(num) {
      if (num.length == 10) {
        this.store.appel(num);
      }
    },
    InContact() {
      this.store.contacts.forEach((contact) => {
        if (contact.num == this.Numero) {
          this.Contact = contact.prenom + " " + contact.nom;
        }
      });
    },
  },
};
</script>
<template>
  <div class="container">
    <h2>{{ Numero }}</h2>
    <h3>{{ Contact }}</h3>
    <div class="zone-boutons">
      <button @click="addToInput(1)">1</button>
      <button @click="addToInput(2)">
        2
        <div class="alphabet">abc</div>
      </button>
      <button @click="addToInput(3)">
        3
        <div class="alphabet">def</div>
      </button>
      <button @click="addToInput(4)">
        4
        <div class="alphabet">ghi</div>
      </button>
      <button @click="addToInput(5)">
        5
        <div class="alphabet">jkl</div>
      </button>
      <button @click="addToInput(6)">
        6
        <div class="alphabet">mno</div>
      </button>
      <button @click="addToInput(7)">
        7
        <div class="alphabet">pqrs</div>
      </button>
      <button @click="addToInput(8)">
        8
        <div class="alphabet">tuv</div>
      </button>
      <button @click="addToInput(9)">
        9
        <div class="alphabet">wxyz</div>
      </button>
      <button>*</button>
      <button @click="addToInput(0)">0</button>
      <button>#</button>
    </div>
    <button @click="suppToInput()" id="bouton-effacer">
      <img src="../assets/imgs/icon-retour.png" alt="effacer" />
    </button>
    <img
      src="../assets/imgs/icon-call.png"
      alt="appeler"
      @click="appeler(Numero)"
    />
  </div>
</template>
<style scoped>
h2 {
  border: 4px darkorange solid;
  width: 40vw;
  margin-bottom: 15px;
  height: 50px;
  text-align: center;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10vw;
  padding-right: 10vw;
  padding-top: 10vh;
  flex-direction: column;
}
.zone-boutons {
  width: 30vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 25px;
}
button {
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  aspect-ratio: 1/1;
  font-size: 20px;
}
</style>
