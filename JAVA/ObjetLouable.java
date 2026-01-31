package JAVA;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class ObjetLouable {
    private String nom;
    private List<Reservation> reservations;

    public ObjetLouable(String nom) {
        this.nom = nom;
        this.reservations = new ArrayList<>();
    }

    public boolean estDisponible(LocalDate debut, int duree) {
        Reservation tentative = new Reservation(this, debut, duree);
        for (Reservation r : reservations) {
            if (r.chevauche(tentative)) {
                return false;
            }
        }
        return true;
    }

    public boolean reserver(LocalDate debut, int duree) {
        if (duree < 1) {
            System.out.println("Erreur : la durée minimale est de 1 jour.");
            return false;
        }

        if (!estDisponible(debut, duree)) {
            System.out.println("Erreur : \"" + nom + "\" est déjà réservé à cette période.");
            return false;
        }

        Reservation nouvelle = new Reservation(this, debut, duree);
        reservations.add(nouvelle);
        System.out.println("Réservation confirmée : \"" + nom + "\" du " + debut + " au " + nouvelle.getFin());
        return true;
    }

    public void afficherReservations() {
        System.out.println("Réservations pour \"" + nom + "\" :");
        if (reservations.isEmpty()) {
            System.out.println("  Aucune réservation.");
        } else {
            int i = 1;
            for (Reservation r : reservations) {
                System.out.println("  " + i + ". Du " + r.getDebut() + " au " + r.getFin());
                i++;
            }
        }
    }
}
