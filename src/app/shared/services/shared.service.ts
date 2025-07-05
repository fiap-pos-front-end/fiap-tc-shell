import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class SharedService {
  getHello() { return 'Olá do SharedService'; }
}