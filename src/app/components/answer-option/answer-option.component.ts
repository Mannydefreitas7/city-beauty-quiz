import { Component, Input } from '@angular/core';
import { IAnswer } from '../../../types/IAnswer';
import { NgClass, NgFor, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'answer-option',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './answer-option.component.html',
  styleUrl: './answer-option.component.scss',
})
export class AnswerOptionComponent {
  @Input('answer') answer?: IAnswer;
  @Input('selected') selected: boolean = false;
  @Input('checkbox') checkbox: boolean = false;
  @Input('type') type: 'checkbox' | 'radio' | 'none' = 'checkbox';
}
