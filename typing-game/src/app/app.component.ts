import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomText = lorem.sentence();
  enteredText = '';

  onChangeText(value: string) {
    this.enteredText = value;
  }
  compare(letterFromRandom: string, letterEntered: string) {
    if (!letterEntered) {
      return 'pending';
    }
    return letterFromRandom === letterEntered ? 'correct' : 'incorrect';
  }
}
