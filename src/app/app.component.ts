import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  NgbCarouselConfig,
  NgbCarouselModule,
  NgbCarousel,
} from '@ng-bootstrap/ng-bootstrap';
import { IntroComponent } from './pages/intro/intro.component';
import { QuizService } from './quiz.service';
import { NgComponentOutlet } from '@angular/common';
import { SliderComponent } from './components/slider/slider.component';
import { IStep } from '../types/IStep';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgComponentOutlet, SliderComponent, IntroComponent],
  templateUrl: './app.component.html',
  providers: [QuizService],
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'city-beauty-quiz';
  quizList = inject(QuizService).getQuestions();
  quizService = inject(QuizService);

  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
  }

  steps: IStep[] = [
    {
      name: 'ONE',
    },
    {
      name: 'Two',
    },
    {
      name: 'three',
    },
    {
      name: 'three',
    },
    {
      name: 'three',
    },
    {
      name: 'three',
    },
  ];
}
