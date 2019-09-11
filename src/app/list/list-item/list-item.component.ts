import { Component, Input } from '@angular/core';
import { Worker } from 'src/app/services/mock-api.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() worker: Worker;
}
