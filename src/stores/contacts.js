import { defineStore} from "pinia";

export const useContactsStore = defineStore('contacts' , {
    state: () => ({
        contacts: [
            {
                prenom: 'Colère',
                nom: 'Cachée',
                num: '0612345678'
            },
            {
                prenom: 'Sx',
                nom: 'Sad',
                num: '0601020304'
            }
        ],
        appels: [

        ]
    }),
    actions:{
        ajoutContact(contact){
            this.contacts.push(contact)
        },

        date(){
            let date = new Date()
            let mois = date.getMonth() + 1
            let jour = date.getDate()
            let heure = date.getHours()
            let minutes = date.getMinutes()

            if ( mois < 10) {
                mois = "0" + parseInt(mois)
            }
            if ( jour < 10) {
                jour = "0" + parseInt(jour)
            }
            if ( minutes < 10) {
                minutes = "0" + parseInt(minutes)
            }
            return {mois: mois, jour: jour, heure: heure, minutes: minutes}
        },
        appel(num){
            let personne = num
            let date = this.date()
            this.contacts.forEach(contact => {
                if (num == contact.num) {
                    personne = contact.prenom + ' ' + contact.nom
                }
            });
            
            const Newappel = {
                personne: personne,
                num: num,
                date: {
                    mois: date.mois,
                    jour: date.jour,
                    heure: date.heure,
                    minute: date.minutes
                }
            }
            this.appels.unshift(Newappel)
        }
    }
})