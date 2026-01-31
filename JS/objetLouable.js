import Reservation from './reservation.js';

class ObjetLouable {
    constructor(nom) {
        this.nom = nom;
        this.reservations = [];
    }

    estDisponible(debut, duree) {
        const nouvelleReservation = new Reservation(this, debut, duree);
        return this.reservations.every(r => !r.chevauche(nouvelleReservation));
    }

    reserver(debut, duree) {
        if (duree < 1) {
            console.error(`Erreur : la duree minimale est de 1 jour (tente avec ${duree}).`);
            return false;
        }

        if (!this.estDisponible(debut, duree)) {
            console.error(`Erreur : "${this.nom}" est deja reserve a cette periode.`);
            return false;
        }

        const reservation = new Reservation(this, debut, duree);
        this.reservations.push(reservation);
        console.log(`Reservation confirmee : "${this.nom}" du ${reservation.debut.toDateString()} au ${reservation.fin.toDateString()}`);
        return true;
    }

    afficherReservations() {
        console.log(`Réservations pour "${this.nom}" :`);
        if (this.reservations.length === 0) {
            console.log("Aucune reservation.");
        } else {
            this.reservations.forEach((r, i) => {
                console.log(`  ${i + 1}. Du ${r.debut.toDateString()} au ${r.fin.toDateString()}`);
            });
        }
    }
}

export default ObjetLouable;
