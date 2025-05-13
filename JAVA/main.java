package JAVA;

import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {
        ObjetLouable voiture = new ObjetLouable("Peugeot 208");

        voiture.reserver(LocalDate.of(2025, 5, 13), 3);
        voiture.reserver(LocalDate.of(2025, 5, 15), 2);
        voiture.reserver(LocalDate.of(2025, 5, 17), 2);
        voiture.reserver(LocalDate.of(2025, 5, 17), 0);

        voiture.afficherReservations();
    }
}

