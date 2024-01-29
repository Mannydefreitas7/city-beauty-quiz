import { Component, inject } from '@angular/core';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';
import { SecondaryButtonComponent } from '../../../components/secondary-button/secondary-button.component';
import { ProgressBarComponent } from '../../../components/progress-bar/progress-bar.component';
import { SliderNumberComponent } from '../../../components/slider-number/slider-number.component';
import { QuizService } from '../../../quiz.service';
import { IAnswer } from '../../../../types/IAnswer';
import { AnswerOptionComponent } from '../../../components/answer-option/answer-option.component';
@Component({
  selector: 'app-five',
  standalone: true,
  imports: [
    SliderNumberComponent,
    PrimaryButtonComponent,
    AnswerOptionComponent,
    SecondaryButtonComponent,
    ProgressBarComponent,
  ],
  templateUrl: './five.component.html',
  styleUrl: './five.component.scss',
})
export class FiveComponent {
  quizService = inject(QuizService);

  handleOnContinue() {
    this.quizService.next();
  }

  handleOnSkip() {
    this.quizService.next();
  }

  answers: IAnswer[] = [
    {
      label: '10 Minutes',
      selected: false,
    },
    {
      label: '30 Minutes',
      selected: false,
    },
    {
      label: '1 Hour',
      selected: false,
    },
    {
      label: '5 Hours',
      selected: false,
    },
  ];

  selected: IAnswer = this.answers[0];
}
