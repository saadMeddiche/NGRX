import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-normal-counter',
  templateUrl: './normal-counter.component.html',
  styleUrl: './normal-counter.component.css'
})
export class NormalCounterComponent {
  public count : number = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }
}
