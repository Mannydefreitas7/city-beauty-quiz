import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {
  popperVariation,
  provideTippyConfig,
  tooltipVariation,
} from '@ngneat/helipopper';

const tippyConfig = provideTippyConfig({
  defaultVariation: 'tooltip',
  variations: {
    tooltip: tooltipVariation,
    popper: popperVariation,
  },
});

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), tippyConfig],
};
