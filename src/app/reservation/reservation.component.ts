import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PackService } from '../pack.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  pack: any;

  constructor(
    private route: ActivatedRoute,
    private pack_selected: PackService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.pack = this.pack_selected.getPackById(id);
    if (!this.pack) {
      console.error(`Aucun pack trouvé avec l'ID ${id}`);
      // Ajoutez une logique ici pour rediriger ou afficher un message d'erreur si nécessaire
    }
  }
}

