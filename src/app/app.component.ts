import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { clear, countSelector, decrease, increase } from './reducers/counter';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'angular-ngrx';
  updatedAt?: number;
  count$ = this.store.select(countSelector);
  cannotDecrease$ = this.count$.pipe(map((count) => count <= 0));
  equalOne$ = this.count$.pipe(map((count) => count === 1));

  constructor(private store: Store) {}

  increment(): void {
    this.updatedAt = Date.now();
    this.store.dispatch(increase());
  }

  decrement(): void {
    this.updatedAt = Date.now();
    this.store.dispatch(decrease());
  }

  clear(): void {
    this.updatedAt = Date.now();
    this.store.dispatch(clear());
  }
}
