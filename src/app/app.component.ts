import { Component } from '@angular/core';
import { Worker } from './services/mock-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lemisoft-interview-app';
  isDetailsVisible = false;
  chosenWorker: Worker;

  onWorkerClicked = (worker: Worker) => {
    this.chosenWorker = worker;
    this.isDetailsVisible = true;
  }

  onClose = (value: boolean) => this.isDetailsVisible = value;
}
