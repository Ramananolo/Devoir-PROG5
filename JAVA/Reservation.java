package JAVA;
import java.time.LocalDate;

public class Reservation {
    private ObjetLouable objet;
    private LocalDate debut;
    private int duree;
    private LocalDate fin;

    public Reservation(ObjetLouable objet, LocalDate debut, int duree) {
        this.objet = objet;
        this.debut = debut;
        this.duree = duree;
        this.fin = debut.plusDays(duree);
    }

    public LocalDate getDebut() {
        return debut;
    }

    public LocalDate getFin() {
        return fin;
    }

    public boolean chevauche(Reservation autre) {
        return !(this.fin.isBefore(autre.getDebut()) || this.debut.isAfter(autre.getFin().minusDays(1)));
    }
}
