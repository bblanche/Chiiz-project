export class Appareil {
    public id: number;
    public nom: string;
    public description: string;
    public photo: string;
    public longDescription: string;
    public caracteristiques: string[];

    constructor(
        id: number,
        nom: string,
        description: string,
        photo: string,
        longDescription: string,
        caracteristiques: string[] = [],
    ) {
        this.id = id;
        this.nom = nom;
        this.description = description;
        this.photo = photo;
        this.longDescription = longDescription;
        this.caracteristiques = caracteristiques;
    }
  
  }