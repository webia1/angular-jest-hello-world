import { Component } from '@angular/core';

@Component({
  selector: 'test-one-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string;

  constructor() {
    this.title = this.capitalize('test-one');
  }

  capitalize(str: string) {
    return [...str].map((s, i) => (i ? s : s.toUpperCase())).join('');
  }

  capitalizeIfNotHelloElseReturnFalse(str: string) {
    const result = [...str].map((s, i) => (i ? s : s.toUpperCase())).join('');

    if (str === 'Hallo') {
      return false;
    } else {
      return result;
    }
  }
}

// hallo -> Hallo
