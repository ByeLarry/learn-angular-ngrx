import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'angular-ngrx';
  counter = 1;
  updatedAt? : number

  get cannotDecrement(): boolean {
    return this.counter <= 0;
  }

  get equalsOne(): boolean {
    return this.counter === 1;
  }

  increment(): void {
    this.updatedAt = Date.now()
    this.counter++;
  }

  decrement(): void {
    this.updatedAt = Date.now()
    this.counter--;
  }

  clear(): void {
    this.updatedAt = Date.now()
    this.counter = 1;
  }
}
