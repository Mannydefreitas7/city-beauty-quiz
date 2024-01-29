import { Component, inject } from '@angular/core';
import { QuizService } from '../../../quiz.service';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';
import { SecondaryButtonComponent } from '../../../components/secondary-button/secondary-button.component';
import { ProgressBarComponent } from '../../../components/progress-bar/progress-bar.component';
import { SliderNumberComponent } from '../../../components/slider-number/slider-number.component';
import { IStep } from '../../../../types/IStep';
@Component({
  selector: 'app-four',
  standalone: true,
  imports: [
    SliderNumberComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    ProgressBarComponent,
  ],
  templateUrl: './four.component.html',
  styleUrl: './four.component.scss',
})
export class FourComponent {
  quizService = inject(QuizService);
  handleOnContinue() {
    this.quizService.next();
  }

  handleOnSkip() {
    this.quizService.next();
  }

  selected: number = 5;

  steps: IStep[] = [
    {
      name: 'Newcomer',
      image: 'Whenever I touch my skin it feels flaky, but I leave it alone',
    },
    {
      name: 'Newcomer',
      image: 'I have applied lotion before to my dry, crepey skin (Rarely)',
    },
    {
      name: 'Newcomer',
      image: 'I do apply lotion/cream sometimes on dry skin',
    },
    {
      name: 'Amateur',
      image: 'I do apply lotion/cream to my skin to feel moisturized',
    },
    {
      name: 'Amateur',
      image: 'I try to apply lotion/cream, but still not regularly',
    },
    {
      name: 'Amateur',
      image: 'I apply lotion/cream fairly regularly, at least once a week',
    },
    {
      name: 'Amateur',
      image:
        'I apply lotion/cream after every shower consistently for the last 1-3 months',
    },
    {
      name: 'Pro',
      image: 'I’m committed to moisturize my skin whenever I can',
    },
    {
      name: 'Pro',
      image:
        'Oh, trust me. I deeply hydrate my skin, but I want to take it to the next level',
    },
    {
      name: 'Pro',
      image:
        'I’m on fire. Deeply hydrating my skin every day is a must to stimulate collagen/elastin',
    },
  ];
}
