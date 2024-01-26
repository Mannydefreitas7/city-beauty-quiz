import { Component, Input } from '@angular/core';

@Component({
  selector: 'secondary-button',
  standalone: true,
  imports: [],
  templateUrl: './secondary-button.component.html',
  styleUrl: './secondary-button.component.scss',
})
export class SecondaryButtonComponent {
  @Input('label') label: string = '';
}
