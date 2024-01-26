import { Component } from '@angular/core';
import { AnswerOptionComponent } from '../../components/answer-option/answer-option.component';
import { IAnswer } from '../../../types/IAnswer';
import { NgFor, NgForOf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  imports: [AnswerOptionComponent, NgForOf],
  standalone: true,
  styleUrl: './intro.component.scss',
})
export class IntroComponent {
  constructor(private router: Router) {}

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
    this.router.navigate(['quiz/one']);
  }
}
