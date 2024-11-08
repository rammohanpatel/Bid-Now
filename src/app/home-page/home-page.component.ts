import { Component } from '@angular/core';
import { IconsModule } from '../icons/icons.module';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [IconsModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
    isMenuOpen = false;
    
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
}
