import { Component, inject } from '@angular/core';
import { IAnswer } from '../../../../types/IAnswer';
import { QuizService } from '../../../quiz.service';
import { SliderNumberComponent } from '../../../components/slider-number/slider-number.component';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';
import { AnswerOptionComponent } from '../../../components/answer-option/answer-option.component';
import { SecondaryButtonComponent } from '../../../components/secondary-button/secondary-button.component';
import { ProgressBarComponent } from '../../../components/progress-bar/progress-bar.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-six',
  standalone: true,
  imports: [
    SliderNumberComponent,
    PrimaryButtonComponent,
    AnswerOptionComponent,
    SecondaryButtonComponent,
    ProgressBarComponent,
    NgIf,
  ],
  templateUrl: './six.component.html',
  styleUrl: './six.component.scss',
})
export class SixComponent {
  quizService = inject(QuizService);
  selected: IAnswer[] = [];
  showThankYouBox: boolean = false;
  noSymptoms: boolean = false;
  handleOnContinue() {
    this.quizService.next();
  }

  handleOnSelect(answer: IAnswer) {
    if (this.selected.includes(answer)) {
      this.selected = this.selected.filter((a) => a != answer);
      return;
    }

    this.selected.push(answer);
  }

  handleOnSkip() {
    this.quizService.next();
  }

  handleNoneOfAboveClick() {
    this.noSymptoms = true;
  }

  answers: IAnswer[] = [
    {
      label: 'Overwhelmed, too many products to keep track of',
      selected: false,
    },
    {
      label: 'Overcomplicated, hard to understand ingredients',
      selected: false,
    },
    {
      label: 'Hopelessness',
      selected: false,
    },
    {
      label: 'No Results',
      selected: false,
    },
    {
      label: 'Anxiety',
      selected: false,
    },
  ];
}
