class Reservation {
    constructor(objet, debut, duree) {
        this.objet = objet;
        this.debut = new Date(debut);
        this.duree = duree;
        this.fin = new Date(this.debut);
        this.fin.setDate(this.fin.getDate() + duree);
    }

    chevauche(autre) {
        return !(this.fin <= autre.debut || this.debut >= autre.fin);
    }
}

export default Reservation;
