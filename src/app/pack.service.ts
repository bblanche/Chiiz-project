import { Injectable } from '@angular/core';
import { AppareilService } from 'src/app/appareil/appareil.service';

@Injectable({
  providedIn: 'root',
})
export class PackService {
  public appareils: any[] = [];
  private packs: any[] = [];

  constructor(private appareilService: AppareilService) {
    this.appareils = this.appareilService.getAppareils();
    this.initializePacks();
  }

  private initializePacks() {
    if (this.appareils.length > 0) {
      this.packs = [
        {
          id: 1,
          nom: 'Pack Selfie Classique',
          photobooth: this.appareils[0],
          caracteristiques: {
            personnalisation: 'Simple',
            installation: '✅',
            espacePhoto: '❌',
            photosIllimitees: '✅',
            animation: '✅',
            partageInstantane: '✅',
            impressions: '50',
            optionsMultimedia: '❌',
            livreOr: '❌',
            duree: '2h',
          },
          prix: 200,
          ideal_pour: "Mariage, Anniversaire, Soirée d'entreprise",

        },
      {
        id: 2,
        nom: 'Pack Selfie Medium',
        photobooth: this.appareils[0],
        caracteristiques: {
          personnalisation: 'Simple',
          installation: '✅',
          espacePhoto: '✅',
          photosIllimitees: '✅',
          animation: '✅',
          partageInstantane: '✅',
          impressions: '100',
          optionsMultimedia: '❌',
          livreOr: '❌',
          duree: '3h',
        },
        prix: 200,
        ideal_pour: "Baby shower, Baptême, Soirée d'entreprise",
      },
      {
        id: 3,
        nom: 'Pack Selfie Premium',
        photobooth: this.appareils[0],
        caracteristiques: {
          personnalisation: 'Avancé',
          installation: '✅',
          espacePhoto: '✅',
          photosIllimitees: '✅',
          animation: '✅',
          partageInstantane: '✅',
          impressions: '150',
          optionsMultimedia: '✅',
          livreOr: '✅',
          duree: '5h',
        },
        prix: 200,
        ideal_pour: "Mariage, Anniversaire, Soirée d'entreprise",
      },
      {
        id: 4,
        nom: 'Pack Selfie Numérique Classique',
        photobooth: this.appareils[0],
        caracteristiques: {
          personnalisation: 'Simple',
          installation: '✅',
          espacePhoto: '❌',
          photosIllimitees: '✅',
          animation: '✅',
          partageInstantane: '✅',
          impressions: '❌',
          optionsMultimedia: '❌',
          livreOr: '❌',
          duree: '2h',
        },
        prix: 200,
        ideal_pour: "Mariage, Anniversaire, Soirée d'entreprise",
      },
      {
        id: 5,
        nom: 'Pack Selfie Numérique Premium',
        photobooth: this.appareils[0],
        caracteristiques: {
          personnalisation: 'Avancé',
          installation: '✅',
          espacePhoto: '✅',
          photosIllimitees: '✅',
          animation: '✅',
          partageInstantane: '✅',
          impressions: '❌',
          optionsMultimedia: '✅',
          livreOr: '✅',
          duree: '4h',
        },
        prix: 200,
        ideal_pour: "Les  mariages et les événements organisés par les marques haut de gamme ou qui souhaitent innover. Grace à ses nombreuses animations digitales et sa réalité augmentée intégrés, ce n’est pas juste une borne photo mais une animation toute entière !",
      },
      {
        id: 6,
        nom: 'Pack Vidéo 360 classique',
        photobooth: this.appareils[1],
        caracteristiques: {
          'Caméra': '10 MP',
          'Batterie': 'Autonomie 8 heures',
          'Connectivité': 'Wi-Fi inclus',
        },
        prix: 150,
        idéal_pour: "Les évènements étudiants, les soirées d’entreprise, les mariages, les anniversaires, les baptêmes, les baby showers, les soirées de lancement de produits, les salons professionnels, les festivals, les concerts, les soirées de fin d’année, les soirées de gala, les soirées de remise de prix, les soirées de remise de diplômes, les soirées de remise de trophées, les soirées de remise de médailles, les soirées de remise de récompenses, les soirées de remise de distinctions, les soirées de remise de distinctions honorifiques, les soirées de remise de distinctions honorifiques et les soirées de remise de distinctions honorifiques.",
      },
      {
        id: 7,
        nom: 'Pack Vidéo 360 Premium',
        photobooth: this.appareils[1],
        caracteristiques: {
          'Caméra': '10 MP',
          'Batterie': 'Autonomie 8 heures',
          'Connectivité': 'Wi-Fi inclus',
        },
        prix: 150,
        idéal_pour: "Les évènements étudiants, les soirées d’entreprise, les mariages, les anniversaires, les baptêmes, les baby showers, les soirées de lancement de produits, les salons professionnels, les festivals, les concerts, les soirées de fin d’année, les soirées de gala, les soirées de remise de prix, les soirées de remise de diplômes, les soirées de remise de trophées, les soirées de remise de médailles, les soirées de remise de récompenses, les soirées de remise de distinctions, les soirées de remise de distinctions honorifiques, les soirées de remise de distinctions honorifiques et les soirées de remise de distinctions honorifiques.",
      },
      // Ajoutez d'autres packs si nécessaire
    ];
  }
}

  getPacks() {
    return this.packs;
  }

  getPackById(id: number) {
    return this.packs.find((pack) => pack.id === id);
  }
}

