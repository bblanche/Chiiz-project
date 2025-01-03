import { Component, OnDestroy, OnInit, ElementRef, ViewChild } from '@angular/core';
import { PackService } from '../pack.service';

@Component({
  selector: 'Chiiz-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})

export class AppareilComponent implements OnInit {

  @ViewChild('slider') slider!: ElementRef;
    public packs: any[] = [];
  
    constructor(private packService: PackService) {}
  
    ngOnInit(): void {
      this.packs = this.packService.getPacks();
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
  // ngOnInit(): void {
  // }

  // appareils = [
  //   {
  //     nom: 'Photobooth 1',
  //     description: 'Appareil avec options personnalisées.',
  //     photo: '/assets/location2.png'
  //   },
  //   {
  //     nom: 'Photobooth 2',
  //     description: 'Photobooth avec fond vert.',
  //     photo: '/assets/location3.png'
  //   },
  //   {
  //     nom: 'Photobooth 3',
  //     description: 'Modèle compact et portable.',
  //     photo: '/assets/location4.png'
  //   },
  //   {
  //     nom: 'Photobooth 4',
  //     description: 'Design élégant avec impression instantanée.',
  //     photo: '/assets/location5.png'
  //   },
  //   {
  //     nom: 'Photobooth 5',
  //     description: 'Photobooth avec fond vert.',
  //     photo: '/assets/location6.png'
  //   },
  //   {
  //     nom: 'Photobooth 6',
  //     description: 'Modèle compact et portable.',
  //     photo: '/assets/location22.png'
  //   },
  //   {
  //     nom: 'Photobooth 7',
  //     description: 'Design élégant avec impression instantanée.',
  //     photo: '/assets/location32.png'
  //   },
  //   {
  //     nom: 'Photobooth 8',
  //     description: 'Photobooth avec fond vert.',
  //     photo: '/assets/location42.png'
  //   },
  //   {
  //     nom: 'Photobooth 9',
  //     description: 'Modèle compact et portable.',
  //     photo: '/assets/location52.png'
  //   },
  //   {
  //     nom: 'Photobooth 10',
  //     description: 'Design élégant avec impression instantanée.',
  //     photo: '/assets/location62.png'
  //   },
  //   {
  //     nom: 'Photobooth 1',
  //     description: 'Appareil avec options personnalisées.',
  //     photo: '/assets/location2.png'
  //   },
  //   {
  //     nom: 'Photobooth 2',
  //     description: 'Photobooth avec fond vert.',
  //     photo: '/assets/location3.png'
  //   },
  //   {
  //     nom: 'Photobooth 3',
  //     description: 'Modèle compact et portable.',
  //     photo: '/assets/location4.png'
  //   },
  //   {
  //     nom: 'Photobooth 4',
  //     description: 'Design élégant avec impression instantanée.',
  //     photo: '/assets/location5.png'
  //   },
  //   {
  //     nom: 'Photobooth 5',
  //     description: 'Photobooth avec fond vert.',
  //     photo: '/assets/location6.png'
  //   },
  //   {
  //     nom: 'Photobooth 6',
  //     description: 'Modèle compact et portable.',
  //     photo: '/assets/location22.png'
  //   },
  //   {
  //     nom: 'Photobooth 7',
  //     description: 'Design élégant avec impression instantanée.',
  //     photo: '/assets/location32.png'
  //   },
  //   {
  //     nom: 'Photobooth 8',
  //     description: 'Photobooth avec fond vert.',
  //     photo: '/assets/location42.png'
  //   },
  //   {
  //     nom: 'Photobooth 9',
  //     description: 'Modèle compact et portable.',
  //     photo: '/assets/location52.png'
  //   },
  //   {
  //     nom: 'Photobooth 10',
  //     description: 'Design élégant avec impression instantanée.',
  //     photo: '/assets/location62.png'
  //   }
  // ];

}


