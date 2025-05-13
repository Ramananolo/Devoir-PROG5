from datetime import datetime, timedelta

class Reservation:
    def __init__(self, objet, debut_str, duree):
        self.objet = objet
        self.debut = datetime.strptime(debut_str, "%Y-%m-%d").date()
        self.duree = duree
        self.fin = self.debut + timedelta(days=duree)

    def chevauche(self, autre):
        return not (self.fin <= autre.debut or self.debut >= autre.fin)

class ObjetLouable:
    def __init__(self, nom):
        self.nom = nom
        self.reservations = []

    def est_disponible(self, debut_str, duree):
        tentative = Reservation(self, debut_str, duree)
        return all(not r.chevauche(tentative) for r in self.reservations)

    def reserver(self, debut_str, duree):
        if duree < 1:
            print(f"la durée minimale est de 1 jour")
            return False

        if not self.est_disponible(debut_str, duree):
            print(f"Erreur : \"{self.nom}\" est déjà réservé à cette période.")
            return False

        nouvelle = Reservation(self, debut_str, duree)
        self.reservations.append(nouvelle)
        print(f"Réservation confirmée : \"{self.nom}\" du {nouvelle.debut} au {nouvelle.fin}")
        return True

    def afficher_reservations(self):
        print(f"Réservations pour \"{self.nom}\" :")
        if not self.reservations:
            print("  Aucune réservation.")
        else:
            for i, r in enumerate(self.reservations, 1):
                print(f"  {i}. Du {r.debut} au {r.fin}")

# === TEST DU PROGRAMME ===
if __name__ == "__main__":
    voiture = ObjetLouable("Peugeot 208")

    voiture.reserver("2025-05-13", 3)
    voiture.reserver("2025-05-15", 2)
    voiture.reserver("2025-05-17", 2)
    voiture.reserver("2025-05-17", 0)

    voiture.afficher_reservations()