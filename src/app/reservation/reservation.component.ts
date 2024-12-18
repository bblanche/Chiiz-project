import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilService } from 'src/app/appareil/appareil.service';
import { Appareil } from '../appareil/appareil.model';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  // reservationForm: FormGroup;
  photobooth!: Appareil;

  constructor(
    private route: ActivatedRoute,
    // private fb: FormBuilder,
    private appareil: AppareilService
  ) {
    // this.reservationForm = this.fb.group({
    //   modele: ['', Validators.required],
    //   package: ['standard', Validators.required],
    //   date: ['', Validators.required],
    //   lieu: ['', Validators.required],
    //   nom: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   whatsapp: ['', Validators.required],
    //   terms: [false, Validators.requiredTrue]
    // });
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.photobooth = this.appareil.getAppareilById(id);

    // if (this.photobooth) {
    //   this.reservationForm.patchValue({
    //     modele: this.photobooth.nom
    //   });
    // }
  }

  // onSubmit(): void {
  //   if (this.reservationForm.valid) {
  //     console.log('Détails de la réservation :', this.reservationForm.value);
  //     alert('Votre réservation a été envoyée avec succès !');
  //   }
  // }
}

