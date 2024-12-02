import { Component } from '@angular/core';
import type { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilService } from '../appareil/appareil.service';
import { Location } from '@angular/common';

/* @figmaId 37:3267 */
@Component({
  selector: 'Chiiz-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  appareil: any;

  constructor(
    private route: ActivatedRoute,
    private appareilService: AppareilService,
    private location: Location // Injection du service Location
  ) {}
  
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.appareil = this.appareilService.getAppareilById(id);
  }

  goBack(): void {
    this.location.back();
  }
}
