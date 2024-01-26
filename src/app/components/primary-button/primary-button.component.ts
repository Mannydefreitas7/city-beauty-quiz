import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'primary-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.scss',
})
export class PrimaryButtonComponent {
  @Input('label') label: string = '';
  @Input('disabled') disabled: boolean = false;
}
