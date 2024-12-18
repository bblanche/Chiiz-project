import { Component, ViewChild } from '@angular/core';
import type { ElementRef, OnInit } from '@angular/core';
import { AppareilService } from 'src/app/appareil/appareil.service';
import { Appareil } from '../appareil/appareil.model';

/* @figmaId 95:295 */
@Component({
  selector: 'Chiiz-nos-offres',
  templateUrl: './nos-offres.component.html',
  styleUrls: ['./nos-offres.component.scss'],
})
export class NosOffresComponent implements OnInit {
  @ViewChild('slider') slider!: ElementRef;
  public appareils: Appareil[] = [];

  constructor(private appareilService: AppareilService) {}

  ngOnInit(): void {
    this.appareils = this.appareilService.getAppareils();
  }

  scrollToCard(index: number): void {
    const sliderElement = this.slider.nativeElement;

    // Largeur totale d'une carte incluant l'espacement (gap)
    const cardWidth = 276 + 20; // 276px de largeur + 20px de gap (ajuste si nécessaire)

    // Calculer la position de défilement
    const scrollPosition = index * cardWidth;

    // Déplacer le slider
    sliderElement.scrollTo({
      left: scrollPosition,
      behavior: 'smooth' // Animation douce
    });
  }
}
