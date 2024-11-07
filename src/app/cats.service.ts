import { Injectable } from '@angular/core';
import { CatSpec } from './cat-spec';

@Injectable({
  providedIn: 'root',
})
export class CatsService {
  constructor() {}

  catsSpecs: CatSpec[] = [
    {
      id: 0,
      name: 'Whiskers',
      breed: 'Siamese',
      age: '4 months',
      color: 'Cream',
      photoUrl: 'assets/alvan-nee-ZCHj_2lJP00-unsplash.jpg',
      isAvailable: true,
      hasMicrochip: true,
      isVaccinated: true,
      location: 'New York',
    },
    {
      id: 1,
      name: 'Shadow',
      breed: 'Maine Coon',
      age: '2 years',
      color: 'Grey and white',
      photoUrl: 'assets/jae-park-7GX5aICb5i4-unsplash.jpg',
      isAvailable: false,
      hasMicrochip: true,
      isVaccinated: true,
      location: 'Los Angeles',
    },
    {
      id: 2,
      name: 'Mittens',
      breed: 'Mixed',
      age: '1 month',
      color: 'Various',
      photoUrl: 'assets/jari-hytonen-YCPkW_r_6uA-unsplash.jpg',
      isAvailable: true,
      hasMicrochip: false,
      isVaccinated: true,
      location: 'Chicago',
    },
    {
      id: 3,
      name: 'Tiger',
      breed: 'Bengal',
      age: '4',
      color: 'Orange',
      photoUrl: 'assets/lloyd-dirks-R1oSj2m-7Ks-unsplash.jpg',
      isAvailable: true,
      hasMicrochip: true,
      isVaccinated: false,
      location: 'Houston',
    },
    {
      id: 4,
      name: 'Luna',
      breed: 'Russian Blue',
      age: '9 months',
      color: 'White',
      photoUrl: 'assets/rana-sawalha-X7UR0BDz-UY-unsplash.jpg',
      isAvailable: false,
      hasMicrochip: true,
      isVaccinated: true,
      location: 'Phoenix',
    },
    {
      id: 5,
      name: 'Simba',
      breed: 'Abyssinian',
      age: '1.5 years',
      color: 'Brown',
      photoUrl: 'assets/raquel-pedrotti-AHgpNYkX9dc-unsplash.jpg',
      isAvailable: true,
      hasMicrochip: false,
      isVaccinated: true,
      location: 'Philadelphia',
    },
    {
      id: 6,
      name: 'Bella',
      breed: 'Mixed',
      age: '1',
      color: 'Mixed colors',
      photoUrl: 'assets/tatyana-eremina-cQDu1G6lmRM-unsplash.jpg',
      isAvailable: true,
      hasMicrochip: true,
      isVaccinated: false,
      location: 'San Antonio',
    },
    {
      id: 7,
      name: 'Oliver',
      breed: 'Ragdoll',
      age: '2',
      color: 'Orange',
      photoUrl: 'assets/zoe-gayah-jonker-13ky5Ycf0ts-unsplash.jpg',
      isAvailable: false,
      hasMicrochip: true,
      isVaccinated: true,
      location: 'San Diego',
    },
    {
      id: 8,
      name: 'Chloe',
      breed: 'British Shorthair',
      age: '3',
      color: 'White nad orange',
      photoUrl: 'assets/zoe-gayah-jonker-G7kUPmzi80E-unsplash.jpg',
      isAvailable: true,
      hasMicrochip: false,
      isVaccinated: true,
      location: 'Dallas',
    },
  ];

  getAllCats(): CatSpec[] {
    return this.catsSpecs;
  }

  getCatById(id: number): CatSpec {
    return this.catsSpecs.find((cat) => cat.id === id) as CatSpec;
  }

  submitApplication(firstName: string, lastName: string, email: string): void {
    console.log(
      `Application submitted for ${firstName} ${lastName} with email ${email}`
    );
  }
}
