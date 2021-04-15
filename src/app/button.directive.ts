import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[eventTracker]'
})
export class ButtonDirective {

  @Input('eventTracker') option:any;

  @HostListener('click', ['$event']) onClick($event){

    //this.gaService.trackEvent(this.option.action, this.option.category, this.option.label);

    // (<any>window).gtag('event', this.option.action, {
    //   'event_category' : this.option.category,
    //   'event_label' : this.option.label,
    //   'value': this.option.value,
    //   'event_callback': function() {
    //     console.log('Tracking is successful');
    //   }
    // });
  }

  constructor() { }

}
