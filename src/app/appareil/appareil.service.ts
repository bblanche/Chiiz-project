import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Fournit le service à l'ensemble de l'application
})
export class AppareilService {
  // Liste d'appareils
  private appareils = [
    {
      id: 1,
      nom: 'Photobooth 1',
      description: 'Appareil avec options personnalisées.',
      photo: '/assets/location2.png',
      longDescription: 'La La-Bel est une borne photo miroir à impression immédiate qui prend des photos en pied. Notre borne haut de gamme et innovante pour prendre des photos de plein pied, idéale pour les mariages et les marques. À la fois esthétique et élégante, cette borne étonnera tous vos convives !',
      caracteristiques: ['Format réduit', 'Idéal pour petits événements', 'Prise de vue en selfie avec APN professionnel', 'Impression immédiate sous plusieurs formats&nbsp;5×15,&nbsp;10×15 ou 15×20', 'Intégration de fond vert,&nbsp;décors/logos et accessoires virtuels', 'Partage sur les réseaux sociaux', 'WI-FI intégré', 'Galerie digitale connectée', 'Dessins et écriture manuels sur écran/photo', 'Haut-parleurs intégrés'],
    },
    {
      id: 2,
      nom: 'Photobooth 2',
      description: 'Photobooth avec fond vert.',
      photo: '/assets/location3.png',
      longDescription: 'La La-Bel est une borne photo miroir à impression immédiate qui prend des photos en pied. Notre borne haut de gamme et innovante pour prendre des photos de plein pied, idéale pour les mariages et les marques. À la fois esthétique et élégante, cette borne étonnera tous vos convives !',
      caracteristiques: ['Imprimante rapide', 'Qualité professionnelle', 'Facile à utiliser', 'Prise de vue en selfie avec APN professionnel', 'Impression immédiate sous plusieurs formats&nbsp;5×15,&nbsp;10×15 ou 15×20', 'Intégration de fond vert,&nbsp;décors/logos et accessoires virtuels', 'Partage sur les réseaux sociaux', 'WI-FI intégré', 'Galerie digitale connectée', 'Dessins et écriture manuels sur écran/photo', 'Haut-parleurs intégrés']
    },
    {
      id: 3,
      nom: 'Photobooth 3',
      description: 'Modèle compact et portable.',
      photo: '/assets/location4.png',
      longDescription: 'La La-Bel est une borne photo miroir à impression immédiate qui prend des photos en pied. Notre borne haut de gamme et innovante pour prendre des photos de plein pied, idéale pour les mariages et les marques. À la fois esthétique et élégante, cette borne étonnera tous vos convives !',
      caracteristiques: ['Design élégant', 'Impression instantanée']
    },
    {
      id: 4,
      nom: 'Photobooth 4',
      description: 'Design élégant avec impression instantanée.',
      photo: '/assets/location5.png',
      longDescription: 'La La-Bel est une borne photo miroir à impression immédiate qui prend des photos en pied. Notre borne haut de gamme et innovante pour prendre des photos de plein pied, idéale pour les mariages et les marques. À la fois esthétique et élégante, cette borne étonnera tous vos convives !',
      caracteristiques: ['Fond vert', 'Compact et portable', 'Prise de vue en selfie avec APN professionnel', 'Impression immédiate sous plusieurs formats&nbsp;5×15,&nbsp;10×15 ou 15×20', 'Intégration de fond vert,&nbsp;décors/logos et accessoires virtuels', 'Partage sur les réseaux sociaux', 'WI-FI intégré', 'Galerie digitale connectée', 'Dessins et écriture manuels sur écran/photo', 'Haut-parleurs intégrés']
    },
    {
      id: 5,
      nom: 'Photobooth 5',
      description: 'Photobooth avec fond vert.',
      photo: '/assets/location6.png',
      longDescription: 'La La-Bel est une borne photo miroir à impression immédiate qui prend des photos en pied. Notre borne haut de gamme et innovante pour prendre des photos de plein pied, idéale pour les mariages et les marques. À la fois esthétique et élégante, cette borne étonnera tous vos convives !',
      caracteristiques: ['Design élégant', 'Impression instantanée', 'Prise de vue en selfie avec APN professionnel', 'Impression immédiate sous plusieurs formats&nbsp;5×15,&nbsp;10×15 ou 15×20', 'Intégration de fond vert,&nbsp;décors/logos et accessoires virtuels', 'Partage sur les réseaux sociaux', 'WI-FI intégré', 'Galerie digitale connectée', 'Dessins et écriture manuels sur écran/photo', 'Haut-parleurs intégrés']
    },
    {
      id: 6,
      nom: 'Photobooth 6',
      description: 'Modèle compact et portable.',
      photo: '/assets/location22.png',
      longDescription: 'La La-Bel est une borne photo miroir à impression immédiate qui prend des photos en pied. Notre borne haut de gamme et innovante pour prendre des photos de plein pied, idéale pour les mariages et les marques. À la fois esthétique et élégante, cette borne étonnera tous vos convives !',
      caracteristiques: ['Fond vert', 'Compact et portable', 'Prise de vue en selfie avec APN professionnel', 'Impression immédiate sous plusieurs formats&nbsp;5×15,&nbsp;10×15 ou 15×20', 'Intégration de fond vert,&nbsp;décors/logos et accessoires virtuels', 'Partage sur les réseaux sociaux', 'WI-FI intégré', 'Galerie digitale connectée', 'Dessins et écriture manuels sur écran/photo', 'Haut-parleurs intégrés']
    },
    {
      id: 7,
      nom: 'Photobooth 7',
      description: 'Design élégant avec impression instantanée.',
      photo: '/assets/location32.png',
      longDescription: 'La La-Bel est une borne photo miroir à impression immédiate qui prend des photos en pied. Notre borne haut de gamme et innovante pour prendre des photos de plein pied, idéale pour les mariages et les marques. À la fois esthétique et élégante, cette borne étonnera tous vos convives !',
      caracteristiques: ['Format réduit', 'Idéal pour petits événements']
    },
    {
      id: 8,
      nom: 'Photobooth 8',
      description: 'Photobooth avec fond vert.',
      photo: '/assets/location42.png',
      longDescription: 'La La-Bel est une borne photo miroir à impression immédiate qui prend des photos en pied. Notre borne haut de gamme et innovante pour prendre des photos de plein pied, idéale pour les mariages et les marques. À la fois esthétique et élégante, cette borne étonnera tous vos convives !',
      caracteristiques: ['Imprimante rapide', 'Qualité professionnelle', 'Facile à utiliser']
    },
    {
      id: 9,
      nom: 'Photobooth 9',
      description: 'Modèle compact et portable.',
      photo: '/assets/location52.png',
      longDescription: 'La La-Bel est une borne photo miroir à impression immédiate qui prend des photos en pied. Notre borne haut de gamme et innovante pour prendre des photos de plein pied, idéale pour les mariages et les marques. À la fois esthétique et élégante, cette borne étonnera tous vos convives !',
      caracteristiques: ['Design élégant', 'Impression instantanée']  
    },
    {
      id: 10,
      nom: 'Photobooth 10',
      description: 'Design élégant avec impression instantanée.',
      photo: '/assets/location62.png',
      longDescription: 'La La-Bel est une borne photo miroir à impression immédiate qui prend des photos en pied. Notre borne haut de gamme et innovante pour prendre des photos de plein pied, idéale pour les mariages et les marques. À la fois esthétique et élégante, cette borne étonnera tous vos convives !',
      caracteristiques: ['Fond vert', 'Compact et portable']
    },
    {
      id: 11,
      nom: 'Photobooth 1',
      description: 'Appareil avec options personnalisées.',
      photo: '/assets/location2.png',
      LongDescription: 'La La-Bel est une borne photo miroir à impression immédiate qui prend des photos en pied. Notre borne haut de gamme et innovante pour prendre des photos de plein pied, idéale pour les mariages et les marques. À la fois esthétique et élégante, cette borne étonnera tous vos convives !',
      caracteristiques: ['Format réduit', 'Idéal pour petits événements']
    },
    {
      id: 12,
      nom: 'Photobooth 2',
      description: 'Photobooth avec fond vert.',
      photo: '/assets/location3.png',
      longDescription: 'La La-Bel est une borne photo miroir à impression immédiate qui prend des photos en pied. Notre borne haut de gamme et innovante pour prendre des photos de plein pied, idéale pour les mariages et les marques. À la fois esthétique et élégante, cette borne étonnera tous vos convives !',
      caracteristiques: ['Imprimante rapide', 'Qualité professionnelle', 'Facile à utiliser']
    },
    {
      id: 13,
      nom: 'Photobooth 3',
      description: 'Modèle compact et portable.',
      photo: '/assets/location4.png',
      longDescription: 'La La-Bel est une borne photo miroir à impression immédiate qui prend des photos en pied. Notre borne haut de gamme et innovante pour prendre des photos de plein pied, idéale pour les mariages et les marques. À la fois esthétique et élégante, cette borne étonnera tous vos convives !',
      caracteristiques: ['Design élégant', 'Impression instantanée']
    },
    {
      id: 14,
      nom: 'Photobooth 4',
      description: 'Design élégant avec impression instantanée.',
      photo: '/assets/location5.png',
      longDescription: 'La La-Bel est une borne photo miroir à impression immédiate qui prend des photos en pied. Notre borne haut de gamme et innovante pour prendre des photos de plein pied, idéale pour les mariages et les marques. À la fois esthétique et élégante, cette borne étonnera tous vos convives !',
      caracteristiques: ['Fond vert', 'Compact et portable']
    },
    {
      id: 15,
      nom: 'Photobooth 5',
      description: 'Photobooth avec fond vert.',
      photo: '/assets/location6.png',
      longDescription: 'La La-Bel est une borne photo miroir à impression immédiate qui prend des photos en pied. Notre borne haut de gamme et innovante pour prendre des photos de plein pied, idéale pour les mariages et les marques. À la fois esthétique et élégante, cette borne étonnera tous vos convives !',
      caracteristiques: ['Design élégant', 'Impression instantanée'],
    },
    {
      id: 16,
      nom: 'Photobooth 6',
      description: 'Modèle compact et portable.',
      photo: '/assets/location22.png',
      longDescription: 'La La-Bel est une borne photo miroir à impression immédiate qui prend des photos en pied. Notre borne haut de gamme et innovante pour prendre des photos de plein pied, idéale pour les mariages et les marques. À la fois esthétique et élégante, cette borne étonnera tous vos convives !',
      caracteristiques: ['Fond vert', 'Compact et portable']
    },
    {
      id: 17,
      nom: 'Photobooth 7',
      description: 'Design élégant avec impression instantanée.',
      photo: '/assets/location32.png', 
      longDescription: 'La La-Bel est une borne photo miroir à impression immédiate qui prend des photos en pied. Notre borne haut de gamme et innovante pour prendre des photos de plein pied, idéale pour les mariages et les marques. À la fois esthétique et élégante, cette borne étonnera tous vos convives !',
      caracteristiques: ['Format réduit', 'Idéal pour petits événements']
    },
    {
      id: 18,
      nom: 'Photobooth 8',
      description: 'Photobooth avec fond vert.',
      photo: '/assets/location42.png',
      longDescription: 'La La-Bel est une borne photo miroir à impression immédiate qui prend des photos en pied. Notre borne haut de gamme et innovante pour prendre des photos de plein pied, idéale pour les mariages et les marques. À la fois esthétique et élégante, cette borne étonnera tous vos convives !',
      caracteristiques: ['Imprimante rapide', 'Qualité professionnelle', 'Facile à utiliser']
    },
    {
      id: 19,
      nom: 'Photobooth 9',
      description: 'Modèle compact et portable.',
      photo: '/assets/location52.png',
      longDescription: 'La La-Bel est une borne photo miroir à impression immédiate qui prend des photos en pied. Notre borne haut de gamme et innovante pour prendre des photos de plein pied, idéale pour les mariages et les marques. À la fois esthétique et élégante, cette borne étonnera tous vos convives !',
      caracteristiques: ['Design élégant', 'Impression instantanée', 'Prise de vue en selfie avec APN professionnel', 'Impression immédiate sous plusieurs formats&nbsp;5×15,&nbsp;10×15 ou 15×20', 'Intégration de fond vert,&nbsp;décors/logos et accessoires virtuels', 'Partage sur les réseaux sociaux', 'WI-FI intégré', 'Galerie digitale connectée', 'Dessins et écriture manuels sur écran/photo', 'Haut-parleurs intégrés']
    },
    {
      id: 20,
      nom: 'Photobooth 10',
      description: 'Design élégant avec impression instantanée.',
      photo: '/assets/location62.png',
      longDescription: 'La La-Bel est une borne photo miroir à impression immédiate qui prend des photos en pied. Notre borne haut de gamme et innovante pour prendre des photos de plein pied, idéale pour les mariages et les marques. À la fois esthétique et élégante, cette borne étonnera tous vos convives !',
      caracteristiques: ['Fond vert', 'Compact et portable']
    }
  ];

  // Méthode pour récupérer la liste d'appareils
  getAppareils() {
    return this.appareils;
  }
  // Méthode pour récupérer un appareil par son identifiant
  getAppareilById(id: number) {
    return this.appareils.find(appareil => appareil.id === id);
  }
}
