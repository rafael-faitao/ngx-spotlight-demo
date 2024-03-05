import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-spotlight-demo',
  templateUrl: 'ngx-spotlight-demo.component.html',
  styleUrls: [
    './ngx-spotlight-demo.component.scss'
  ]
})
export class NgxSpotlightDemoComponent {

  @Input()
  z: number = 999;

  circleX: number = 0;
  circleY: number = 0;
  ngOnInit() {
    setTimeout(() => {
      const el = document.querySelector('.getstarted');
      this.spotIt(el);
    }, 1000);
    
  }

  spotIt(el: any) {
    

    const rect = el!.getBoundingClientRect();

    this.circleX = rect.left + rect.width / 2;
    this.circleY = rect.top + rect.height / 2;
  }
}
