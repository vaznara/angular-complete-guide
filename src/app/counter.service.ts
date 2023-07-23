import { Injectable } from '@angular/core';

@Injectable()

export class CounterService {
  log: {action: string, count: number}[] = [
    {action: 'Active->Inactive', count: 0},
    {action: 'Inactive->Active', count: 0}
  ];

  constructor() { }

  logAction(action: number) {
    this.log[action].count++;
    console.log(this.log);
  }
}
