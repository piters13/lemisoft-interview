import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { WorkerDetailsCardComponent } from './worker-details-card/worker-details-card.component';
import { ListItemComponent } from './list/list-item/list-item.component';
import { MockApiService } from './services/mock-api.service';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    ListComponent,
    WorkerDetailsCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MockApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
