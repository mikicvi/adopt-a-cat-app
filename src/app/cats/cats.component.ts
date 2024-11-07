import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatSpec } from '../cat-spec';
import { CatsService } from '../cats.service';
import { CatsLocationComponent } from '../cats-location/cats-location.component';

@Component({
  selector: 'app-cats',
  standalone: true,
  imports: [CommonModule, CatsLocationComponent],
  templateUrl: './cats.component.html',
  styleUrl: './cats.component.css',
})
export class CatsComponent {
  catsSpecs: CatSpec[] = [];
  catsService: CatsService = inject(CatsService);
  filteredCatsList: CatSpec[] = [];

  constructor() {
    this.catsSpecs = this.catsService.getAllCats();
    this.filteredCatsList = this.catsSpecs;
  }

  filterCatsList(filter: string) {
    this.filteredCatsList = this.catsSpecs.filter(
      (cat) =>
        cat.location.toLowerCase().includes(filter.toLowerCase()) ||
        cat.color.toLowerCase().includes(filter.toLowerCase())
    );
  }
}
