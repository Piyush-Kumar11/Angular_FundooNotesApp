import { Component } from '@angular/core';

@Component({
  selector: 'app-icons',
  standalone: false,
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.scss'
})
export class IconsComponent {
  colorArray = [
    { code: '#FF5733' }, 
    { code: '#33FF57' }, 
    { code: '#3357FF' },
    { code: '#F4C542' },
    { code: '#A52A2A' },
    { code: '#00FFFF' }
  ];
}
