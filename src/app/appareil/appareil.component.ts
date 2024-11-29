import { Component, OnDestroy, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AppareilService } from './appareil.service';

@Component({
  selector: 'Chiiz-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})

export class AppareilComponent implements OnInit, OnDestroy {

  public appareils: any[] = [];

  constructor(private appareilService: AppareilService) { }

  @ViewChild('slider', { static: true }) slider!: ElementRef<HTMLDivElement>;
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

  intervalId!: any;

  ngOnInit() {
    this.appareils = this.appareilService.getAppareils();

    const slider = this.slider.nativeElement;

    this.intervalId = setInterval(() => {
      slider.scrollBy({
        left: 200, // Définit le défilement horizontal en pixels
        behavior: 'smooth' // Ajoute un effet de défilement fluide
      });

      // Reviens au début si la fin est atteinte
      if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      }
    }, 2000); // Défile toutes les 2 secondes
  }

  ngOnDestroy() {
    // Nettoie l'intervalle quand le composant est détruit
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}


