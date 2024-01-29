import { Component, inject } from '@angular/core';
import { SliderComponent } from '../../../components/slider/slider.component';
import { IStep } from '../../../../types/IStep';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';
import { SecondaryButtonComponent } from '../../../components/secondary-button/secondary-button.component';
import { ProgressBarComponent } from '../../../components/progress-bar/progress-bar.component';
import { QuizService } from '../../../quiz.service';

@Component({
  selector: 'app-three',
  standalone: true,
  imports: [
    SliderComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    ProgressBarComponent,
  ],
  templateUrl: './three.component.html',
  styleUrl: './three.component.scss',
})
export class ThreeComponent {
  quizService = inject(QuizService);
  handleOnContinue() {
    this.quizService.next();
  }

  handleOnSkip() {
    this.quizService.next();
  }
}
