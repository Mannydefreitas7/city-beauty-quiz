import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewChildren,
  inject,
} from '@angular/core';
import { IStep } from '../../../types/IStep';
import { FormsModule, NgModel } from '@angular/forms';
import {
  NgbPopover,
  NgbPopoverConfig,
  NgbPopoverModule,
} from '@ng-bootstrap/ng-bootstrap';
import {
  TippyDirective,
  TippyInstance,
  TippyService,
} from '@ngneat/helipopper';
import { CreateOptions } from '@ngneat/helipopper/lib/tippy.types';
import { NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'slider-number',
  standalone: true,
  imports: [FormsModule, NgStyle, NgIf, NgbPopoverModule, TippyDirective],
  templateUrl: './slider-number.component.html',
  styleUrl: './slider-number.component.scss',
})
export class SliderNumberComponent implements AfterViewInit {
  @Input() selected = 5;
  @Input() steps: IStep[] = [];
  cloneSteps: IStep[] = [];
  @ViewChild('content') content: ElementRef<HTMLDivElement> | undefined;
  @ViewChild('input') input: ElementRef<HTMLInputElement> | undefined;
  @ViewChild('background') background: ElementRef<HTMLDivElement> | undefined;
  @ViewChild('tpl') tpl: TemplateRef<HTMLElement> | undefined;
  @Output() selectedChange = new EventEmitter<number>();

  tippy: TippyInstance | undefined;
  private tippyService = inject(TippyService);

  congig: Partial<CreateOptions> | undefined = {
    arrow: false,
    className: 'cb-popover',
    offset: [0, 15],
  };

  ngAfterViewInit() {
    this.showPopover();
  }

  getOpacity(index: number) {
    if (index + 1 >= 10) {
      return {
        opacity: '1',
      };
    }
    return {
      opacity: `0.${index + 1}`,
    };
  }

  onChange(event: Event) {
    this.selectedChange.emit(this.selected);
    this.showPopover();
  }

  showPopover() {
    if (
      this.background &&
      this.tpl &&
      this.background.nativeElement.children.length > 0
    ) {
      console.log(this.selected);
      if (
        this.selected > 0 &&
        this.selected < this.background.nativeElement.children.length
      ) {
        // User is increasing
        const selectedElement = this.background.nativeElement.children.item(
          this.selected
        ) as HTMLElement;

        this.tippy = this.tippyService.create(selectedElement, this.tpl, {
          ...this.congig,
          offset: ({ reference }) => {
            return [-(reference.width / 2), 15];
          },
        });
      } else if (this.selected == 0) {
        const selectedElement = this.background.nativeElement.children.item(
          this.selected
        ) as HTMLElement;

        this.tippy = this.tippyService.create(selectedElement, this.tpl, {
          ...this.congig,
          offset: ({ reference }) => {
            return [-(reference.width / 2), 15];
          },
        });
      } else {
        console.warn('error');
      }
      this.tippy?.show();
    }
  }

  ngOnDestroy() {
    if (this.tippy) {
      this.tippy?.destroy();
    }
  }
}
