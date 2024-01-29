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

@Component({
  selector: 'slider-number',
  standalone: true,
  imports: [FormsModule, NgbPopoverModule, TippyDirective],
  templateUrl: './slider-number.component.html',
  styleUrl: './slider-number.component.scss',
})
export class SliderNumberComponent implements AfterViewInit {
  @Input() selected = 0;
  @Input() steps: IStep[] = [];
  @ViewChild('content') content: ElementRef<HTMLDivElement> | undefined;
  @ViewChild('tpl') tpl: TemplateRef<HTMLElement> | undefined;
  @Output() selectedChange = new EventEmitter<number>();

  tippy: TippyInstance | undefined;
  private tippyService = inject(TippyService);

  congig: Partial<CreateOptions> | undefined = {
    arrow: true,
    className: 'cb-popover',
    inlinePositioning: true,
    offset: [0, 15],
  };

  ngAfterViewInit() {
    this.steps.pop();
    this.showPopover();
  }

  onChange(event: Event) {
    this.showPopover();
    this.selectedChange.emit(this.selected);
  }

  showPopover() {
    if (
      document &&
      this.content &&
      this.tpl &&
      this.content.nativeElement.children.length > 0
    ) {
      const selectedElement = this.content.nativeElement.children.item(
        this.selected - 1
      ) as HTMLElement;

      this.tippy = this.tippyService.create(
        selectedElement,
        this.tpl,
        this.congig
      );
      this.tippy.show();
    }
  }

  ngOnDestroy() {
    this.tippy?.destroy();
  }
}
