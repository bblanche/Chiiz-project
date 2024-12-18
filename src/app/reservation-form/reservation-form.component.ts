import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Appareil } from '../appareil/appareil.model';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss']
})
export class ReservationFormComponent implements OnInit {
  @Input() photobooth!: Appareil; // Recevoir le photobooth sélectionné
  reservationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reservationForm = this.fb.group({
      modele: ['', Validators.required],
      package: ['standard', Validators.required],
      date: ['', Validators.required],
      lieu: ['', Validators.required],
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      whatsapp: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    });
  }

  ngOnInit(): void {
    if (this.photobooth) {
      this.reservationForm.value({
        modele: this.photobooth.nom
      });
    }
  }

  onSubmit(): void {
    if (this.reservationForm.valid) {
      console.log('Détails de la réservation :', this.reservationForm.value);
      alert('Votre réservation a été envoyée avec succès !');
    }
  }
}
