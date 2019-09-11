import { Component } from '@angular/core';
import { Worker } from './services/mock-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lemisoft-interview-app';
  listTitle = 'Pracownicy';
  workerDetailsTitle = 'Szczegóły pracownika';
  isDetailsVisible = false;
  chosenWorker: Worker;

  onWorkerClicked = (worker) => {
    this.chosenWorker = worker;
    this.isDetailsVisible = true;
  }

  onClose = (value: boolean) => {
    this.isDetailsVisible = value;
  }
}
