import { Component } from '@angular/core';
import { ProgressBarComponent } from '../../../components/progress-bar/progress-bar.component';
import { Router } from '@angular/router';
import { IAnswer } from '../../../../types/IAnswer';
import { AnswerOptionComponent } from '../../../components/answer-option/answer-option.component';
import { NgFor } from '@angular/common';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';
import { SecondaryButtonComponent } from '../../../components/secondary-button/secondary-button.component';

@Component({
  selector: 'app-one',
  standalone: true,
  imports: [
    ProgressBarComponent,
    AnswerOptionComponent,
    SecondaryButtonComponent,
    PrimaryButtonComponent,
    NgFor,
  ],
  templateUrl: './one.component.html',
  styleUrl: './one.component.scss',
})
export class OneComponent {
  selected: IAnswer | undefined;
  constructor(private router: Router) {}
  answers: IAnswer[] = [
    {
      label: 'Loose skin on thighs and legs',
      image: '/assets/pg-1-thighs.png',
      selected: false,
    },
    {
      label: 'Thinning skin on arms',
      image: '/assets/pg-1-thin-arms.png',
      selected: false,
    },
    {
      label: 'Loose neck/jaw',
      image: '/assets/pg-1-loose-neck.png',
      selected: false,
    },
    {
      label: 'Saggy belly',
      image: '/assets/pg-1-saggy-belly.png',
      selected: false,
    },
  ];

  handleOnContinue() {
    this.router.navigate(['quiz/two']);
  }

  handleOnSkip() {
    this.router.navigate(['quiz/two']);
  }
}
