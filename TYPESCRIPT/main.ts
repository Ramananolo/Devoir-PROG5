const voiture = new ObjetLouable("Peugeot 208");

voiture.reserver("2025-05-13", 3);
voiture.reserver("2025-05-15", 2);
voiture.reserver("2025-05-17", 2);
voiture.reserver("2025-05-17", 0);

voiture.afficherReservations();
