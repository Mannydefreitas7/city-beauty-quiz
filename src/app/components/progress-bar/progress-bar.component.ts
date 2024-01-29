import { Location } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { QuizService } from '../../quiz.service';

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

  quizService = inject(QuizService);

  handleOnPrev() {
    this.quizService.back();
  }
}
