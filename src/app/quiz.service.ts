import { Injectable } from '@angular/core';
import { IntroComponent } from './pages/intro/intro.component';
import { OneComponent } from './pages/quiz/one/one.component';
import { TwoComponent } from './pages/quiz/two/two.component';
import { ThreeComponent } from './pages/quiz/three/three.component';
import { FourComponent } from './pages/quiz/four/four.component';
import { FiveComponent } from './pages/quiz/five/five.component';
import { SixComponent } from './pages/quiz/six/six.component';
import { SevenComponent } from './pages/quiz/seven/seven.component';
import { EightComponent } from './pages/quiz/eight/eight.component';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { IStep } from '../types/IStep';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  currentIndex = 0;
  selectedSkin: IStep | undefined;

  selectSkin(step: IStep) {
    this.selectedSkin = step;
  }

  getQuestions() {
    return [
      {
        component: IntroComponent,
        name: 'intro',
      },
      {
        component: OneComponent,
        name: 'one',
      },
      {
        component: TwoComponent,
        name: 'two',
      },
      {
        component: ThreeComponent,
        name: 'three',
      },
      {
        component: FourComponent,
        name: 'four',
      },
      {
        component: FiveComponent,
        name: 'five',
      },
      {
        component: SixComponent,
        name: 'six',
      },
      {
        component: SevenComponent,
        name: 'seven',
      },
      {
        component: EightComponent,
        name: 'eight',
      },
    ];
  }

  next() {
    if (this.currentIndex <= this.getQuestions().length) {
      this.currentIndex++;
    }
  }

  back() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
