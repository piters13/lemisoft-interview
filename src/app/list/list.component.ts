import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { MockApiService, Worker } from '../services/mock-api.service';
import { Observable, timer, Subscription } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  workers: Worker[];
  subscription: Subscription;
  @Output() workerClicked = new EventEmitter<Worker>();

  constructor(private apiService: MockApiService) {}

  ngOnInit() {
    this.subscription = timer(0, 1000).pipe(
      tap(x => console.log(x + '. Api call!')),
      mergeMap(() => this.apiService.get())
    ).
    subscribe(result => this.workers = result);
  }

  showWorkerDetails(worker: Worker) {
    this.workerClicked.emit(worker);
  }

  trackByFn(index, item) {
    return item.id;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
