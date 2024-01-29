import { ProgressBarComponent } from './../../../components/progress-bar/progress-bar.component';
import { Component, inject } from '@angular/core';
import { SliderComponent } from '../../../components/slider/slider.component';
import { IStep } from '../../../../types/IStep';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';
import { SecondaryButtonComponent } from '../../../components/secondary-button/secondary-button.component';
import { QuizService } from '../../../quiz.service';

@Component({
  selector: 'app-two',
  standalone: true,
  imports: [
    SliderComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    ProgressBarComponent,
  ],
  templateUrl: './two.component.html',
  styleUrl: './two.component.scss',
})
export class TwoComponent {
  quizService = inject(QuizService);
  selected = 0;

  steps: IStep[] = [
    {
      name: 'Normal Skin',
      image: '/assets/pg-3-normal',
    },
    {
      name: 'Dry Skin',
      image: '/assets/pg-3-dry',
    },
    {
      name: 'Microwrinkles',
      image: '/assets/pg-3-microwrinkles',
    },
    {
      name: 'Scaly, Rough Skin',
      image: '/assets/pg-3-scaly',
    },
    {
      name: 'Itchy, Irritated Skin',
      image: '/assets/pg-3-itchy',
    },
    {
      name: 'Crepey Skin',
      image: '/assets/pg-3-crepey',
    },
  ];

  handleOnContinue() {
    this.quizService.selectSkin(this.steps[this.selected]);
    this.quizService.next();
  }

  handleOnSkip() {
    this.quizService.selectSkin(this.steps[this.selected]);

    this.quizService.next();
  }
}
