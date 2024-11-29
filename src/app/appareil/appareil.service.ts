import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Fournit le service à l'ensemble de l'application
})
export class AppareilService {
  // Liste d'appareils
  private appareils = [
    {
      nom: 'Photobooth 1',
      description: 'Appareil avec options personnalisées.',
      photo: '/assets/location2.png'
    },
    {
      nom: 'Photobooth 2',
      description: 'Photobooth avec fond vert.',
      photo: '/assets/location3.png'
    },
    {
      nom: 'Photobooth 3',
      description: 'Modèle compact et portable.',
      photo: '/assets/location4.png'
    },
    {
      nom: 'Photobooth 4',
      description: 'Design élégant avec impression instantanée.',
      photo: '/assets/location5.png'
    },
    {
      nom: 'Photobooth 5',
      description: 'Photobooth avec fond vert.',
      photo: '/assets/location6.png'
    },
    {
      nom: 'Photobooth 6',
      description: 'Modèle compact et portable.',
      photo: '/assets/location22.png'
    },
    {
      nom: 'Photobooth 7',
      description: 'Design élégant avec impression instantanée.',
      photo: '/assets/location32.png'
    },
    {
      nom: 'Photobooth 8',
      description: 'Photobooth avec fond vert.',
      photo: '/assets/location42.png'
    },
    {
      nom: 'Photobooth 9',
      description: 'Modèle compact et portable.',
      photo: '/assets/location52.png'
    },
    {
      nom: 'Photobooth 10',
      description: 'Design élégant avec impression instantanée.',
      photo: '/assets/location62.png'
    },
    {
      nom: 'Photobooth 1',
      description: 'Appareil avec options personnalisées.',
      photo: '/assets/location2.png'
    },
    {
      nom: 'Photobooth 2',
      description: 'Photobooth avec fond vert.',
      photo: '/assets/location3.png'
    },
    {
      nom: 'Photobooth 3',
      description: 'Modèle compact et portable.',
      photo: '/assets/location4.png'
    },
    {
      nom: 'Photobooth 4',
      description: 'Design élégant avec impression instantanée.',
      photo: '/assets/location5.png'
    },
    {
      nom: 'Photobooth 5',
      description: 'Photobooth avec fond vert.',
      photo: '/assets/location6.png'
    },
    {
      nom: 'Photobooth 6',
      description: 'Modèle compact et portable.',
      photo: '/assets/location22.png'
    },
    {
      nom: 'Photobooth 7',
      description: 'Design élégant avec impression instantanée.',
      photo: '/assets/location32.png'
    },
    {
      nom: 'Photobooth 8',
      description: 'Photobooth avec fond vert.',
      photo: '/assets/location42.png'
    },
    {
      nom: 'Photobooth 9',
      description: 'Modèle compact et portable.',
      photo: '/assets/location52.png'
    },
    {
      nom: 'Photobooth 10',
      description: 'Design élégant avec impression instantanée.',
      photo: '/assets/location62.png'
    }
  ];

  // Méthode pour récupérer la liste d'appareils
  getAppareils() {
    return this.appareils;
  }
}
