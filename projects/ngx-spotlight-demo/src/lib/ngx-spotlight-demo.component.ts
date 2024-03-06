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

  script = {
    auto: true,
    scenes: [
      {
        elementSelector: '.getstarted',
        text:'This is a get started button'
      },
      {
        elementSelector: '.btn-get-started',
        text:'This is another get started button'
      },
      {
        elementSelector: '.logo.me-auto',
        text:"This is our logo. Looks pretty, doesn't it ?"
      },
      {
        elementSelector: 'a[href="#team"]',
        text:'Get to know our team'
      }
    ]
  }

  _showText = false;
  _currentText = '';
  _demoTimeout = 6000;
  _transitionTime = 900;
  _showIsOver = false;
  _index = -1;

  _textHeight = 0;

  circleX: number = 0;
  circleY: number = 0;
  ngOnInit() {
    this.followScript();
  }

  followScript() {
    this._index = 0;
    this.renderScene(this.script.scenes[0]);
  }

  renderScene(scene: any) {
    this._showText = false;

    const el = document.querySelector(scene.elementSelector);
    this.spotIt(el, scene.text);

    if (this._index < this.script.scenes.length - 1 && this.script.auto) {
      this._index++;
      setTimeout(() => this.renderScene(this.script.scenes[this._index]), this._demoTimeout);
    }
  }

  spotIt(el: any, text: any) {
    
    this._showText = false;
    el.scrollIntoView(false);

    const rect = el!.getBoundingClientRect();

    this.circleX = rect.left + rect.width / 2;
    this.circleY = (rect.top + rect.height / 2) + (window.pageYOffset);

    this._textHeight = el.offsetHeight * 3;

    setTimeout(() => {
      this._showText = true
      this._currentText = text;

    }, this._transitionTime);

    if (this._index + 1 == this.script.scenes.length) {
      setTimeout(() => {
        this._showIsOver = true
      }, this._demoTimeout);
    }
  }

  clickEvent() {
  }
}
