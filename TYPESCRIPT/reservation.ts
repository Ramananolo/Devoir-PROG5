class Reservation {
    objet: ObjetLouable;
    debut: Date;
    duree: number;
    fin: Date;

    constructor(objet: ObjetLouable, debut: string | Date, duree: number) {
        this.objet = objet;
        this.debut = new Date(debut);
        this.duree = duree;
        this.fin = new Date(this.debut);
        this.fin.setDate(this.fin.getDate() + duree);
    }

    chevauche(autre: Reservation): boolean {
        return !(this.fin <= autre.debut || this.debut >= autre.fin);
    }
}