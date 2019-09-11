import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface Worker {
  id: number;
  name: string;
  beats: number;
  sex: string;
  unit: string;
  projects: string[];
}

@Injectable({
  providedIn: 'root'
})
export class MockApiService {
  workers: Worker[] = [
    {
      id: 1,
      name: 'Jan Kowalski',
      beats: 80,
      sex: 'MAN',
      unit: 'MINUTES',
      projects: ['PUEUP', 'SalesConnector', 'PARP']
    },
    {
      id: 2,
      name: 'Alicja Hrymoniuk',
      beats: 90,
      sex: 'WOMAN',
      unit: 'MINUTES',
      projects: ['PUEUP']
    },
    {
      id: 3,
      name: 'Dorota Walaszek',
      beats: 94,
      sex: 'WOMAN',
      unit: 'MINUTES',
      projects: ['PUEUP', 'SalesConnector', 'PARP']
    },

    {
      id: 4,
      name: 'Justyn Pęciński',
      beats: 94,
      sex: 'MAN',
      unit: 'MINUTES',
      projects: ['SalesConnector', 'PARP']
    },
    {
      id: 5,
      name: 'Anstazy Tylewski',
      beats: 70,
      sex: 'MAN',
      unit: 'MINUTES',
      projects: ['SalesConnector', 'PARP']
    },
    {
      id: 6,
      name: 'Małgorzata Matuszewska',
      beats: 153,
      sex: 'MAN',
      unit: 'MINUTES',
      projects: ['PUEUP', 'SalesConnector', 'PARP']
    }
  ];

  constructor() {}

  get() {
    return of(this.workers);
  }
}
