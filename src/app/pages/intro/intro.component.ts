import { QuizService } from './../../quiz.service';
import { Component, Input, inject } from '@angular/core';
import { AnswerOptionComponent } from '../../components/answer-option/answer-option.component';
import { IAnswer } from '../../../types/IAnswer';
import { NgFor, NgForOf } from '@angular/common';
import { NgbCarousel, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  imports: [AnswerOptionComponent, NgbCarousel, NgForOf],
  standalone: true,
  providers: [NgbCarousel],
  styleUrl: './intro.component.scss',
})
export class IntroComponent {
  quizService = inject(QuizService);

  answers: IAnswer[] = [
    {
      selected: true,
      label: 'Remove Crepey Skin',
      image: '/assets/intro-crepey-skin.png',
    },
    {
      selected: false,
      label: 'Relieve Dry, Flaky Skin',
      image: '/assets/intro-dry-flaky.png',
    },
    {
      selected: false,
      label: 'Get Firmer, Tighter, Younger Looking Skin',
      image: '/assets/intro-firmer.png',
    },
  ];

  selected: IAnswer | undefined;

  handleOnSelect(answer: IAnswer) {
    this.selected = answer;
    this.quizService.next();
  }
}
