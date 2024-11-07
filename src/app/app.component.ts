import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CatsComponent } from './cats/cats.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CatsComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'cats-app';
}
