import { Component, ViewChild } from '@angular/core';
import type { ElementRef, OnInit } from '@angular/core';
import { IconProperty1ChevronLeftPComponent } from 'src/app/nos-offres/icon-property-1-chevron-left-p/icon-property-1-chevron-left-p.component';
import {IconProperty1ChevronRightComponent} from 'src/app/nos-offres/icon-property-1-chevron-right/icon-property-1-chevron-right.component';
import { AppareilComponent } from 'src/app/appareil/appareil.component';
import { AppareilService } from 'src/app/appareil/appareil.service';

/* @figmaId 95:295 */
@Component({
  selector: 'Chiiz-nos-offres',
  templateUrl: './nos-offres.component.html',
  styleUrls: ['./nos-offres.component.scss'],
})
export class NosOffresComponent implements OnInit {
  @ViewChild('slider') slider!: ElementRef;
  public appareils: any[] = [];

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
