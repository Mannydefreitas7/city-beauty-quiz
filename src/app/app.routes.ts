import { Routes } from '@angular/router';
import { IntroComponent } from './pages/intro/intro.component';
import { OneComponent } from './pages/quiz/one/one.component';
import { TwoComponent } from './pages/quiz/two/two.component';

export const routes: Routes = [
  {
    component: IntroComponent,
    path: '',
  },
  {
    path: 'quiz',
    children: [
      {
        path: 'one',
        component: OneComponent,
      },
      {
        path: 'two',
        component: TwoComponent,
      },
    ],
  },
];
