import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss']
})
export class ReservationFormComponent implements OnInit {
  @Input() pack_selected: any; // Recevoir le pack sélectionné
  reservationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reservationForm = this.fb.group({
      montant: ['', Validators.required],
      package: ['', Validators.required],
      date: ['', Validators.required],
      lieu: ['', Validators.required],
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      whatsapp: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    });
  }

  ngOnInit(): void {
    // Calculer la date de demain
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1); // Ajouter 1 jour à la date actuelle
    const tomorrowISO = tomorrow.toISOString().split('T')[0]; // Format ISO (YYYY-MM-DD)

    if (this.pack_selected) {
      this.reservationForm.patchValue({
        package: this.pack_selected.nom,
        montant: this.pack_selected.prix,
        date: tomorrowISO, // Définir la date par défaut
      });
    }
  }

  onSubmit(): void {
    if (this.reservationForm.valid) {
      console.log('Détails de la réservation :', this.reservationForm.value);
      alert('Votre réservation a été envoyée avec succès !');
      // Vous pouvez ajouter un service HTTP ici pour envoyer les données au backend
    } else {
      alert('Veuillez remplir correctement le formulaire avant de soumettre.');
    }
  }
}
