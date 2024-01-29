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
import { SliderNumberComponent } from './components/slider-number/slider-number.component';
import { AnswerOptionComponent } from './components/answer-option/answer-option.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgComponentOutlet,
    AnswerOptionComponent,
    SliderComponent,
    SliderNumberComponent,
    IntroComponent,
  ],
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
}
