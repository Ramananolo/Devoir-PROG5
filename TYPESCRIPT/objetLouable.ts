class ObjetLouable {
    nom: string;
    reservations: Reservation[];

    constructor(nom: string) {
        this.nom = nom;
        this.reservations = [];
    }

    estDisponible(debut: string | Date, duree: number): boolean {
        const tentative = new Reservation(this, debut, duree);
        return this.reservations.every(res => !res.chevauche(tentative));
    }

    reserver(debut: string | Date, duree: number): boolean {
        if (duree < 1) {
            console.error(`Erreur : la durée minimale est de 1 jour (tenté avec ${duree}).`);
            return false;
        }

        if (!this.estDisponible(debut, duree)) {
            console.error(`Erreur : "${this.nom}" est déjà réservé à cette période.`);
            return false;
        }

        const nouvelleReservation = new Reservation(this, debut, duree);
        this.reservations.push(nouvelleReservation);
        console.log(`Réservation confirmée : "${this.nom}" du ${nouvelleReservation.debut.toDateString()} au ${nouvelleReservation.fin.toDateString()}`);
        return true;
    }

    afficherReservations(): void {
        console.log(`Réservations pour "${this.nom}" :`);
        if (this.reservations.length === 0) {
            console.log("  Aucune réservation.");
        } else {
            this.reservations.forEach((r, i) => {
                console.log(`  ${i + 1}. Du ${r.debut.toDateString()} au ${r.fin.toDateString()}`);
            });
        }
    }
}