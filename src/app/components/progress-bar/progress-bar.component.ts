import { Location } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'progress-bar',
  standalone: true,
  imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss',
})
export class ProgressBarComponent {
  @Input() current: number = 1;
  @Input() total: number = 6;

  constructor(private location: Location) {}

  handleOnPrev() {
    this.location.back();
  }
}
