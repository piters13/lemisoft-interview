import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Worker } from '../services/mock-api.service';

@Component({
  selector: 'app-worker-details-card',
  templateUrl: './worker-details-card.component.html',
  styleUrls: ['./worker-details-card.component.scss']
})
export class WorkerDetailsCardComponent implements OnInit {
  @Input() worker: Worker;
  @Output() closed = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  close(value: boolean) {
    this.closed.emit(value);
  }
}
