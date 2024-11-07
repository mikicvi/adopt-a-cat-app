import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatSpec } from '../cat-spec';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cats-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cats-location.component.html',
  styleUrl: './cats-location.component.css',
})
export class CatsLocationComponent {
  @Input() catSpec!: CatSpec;
}
