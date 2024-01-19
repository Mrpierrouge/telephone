import { defineStore} from "pinia";

export const useContactsStore = defineStore('contacts' , {
    state: () => ({
        contacts: [
            {
                prenom: 'Colère',
                nom: 'Cachée',
                num: '06 12 34 56 78'
            },
            {
                prenom: 'Sx',
                nom: 'Sad',
                num: '06 01 02 03 04'
            }
        ],
        appels: [
            {
                personne: 'Colère Cachée',
                heure: Date.now()
            },
        ]
    }),
    actions:{
        ajoutContact(contact){
            this.contacts.push(contact)
        },

        appel(num){
            let personne = num
            this.contacts.forEach(contact => {
                if (num == contact.num) {
                    personne = contact.prenom + ' ' + contact.nom;
                }
            });
            const Newappel = {
                personne: personne,
                heure: Date.now()
            }
            this.appels.push(Newappel)
        }
    }
})