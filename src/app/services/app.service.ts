import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  private isDarkMode = new  BehaviorSubject<boolean>(false)
  isDarkMode$ = this.isDarkMode.asObservable()

  setDarkMode(value: boolean) {
    this.isDarkMode.next(value)
  }

  private isMobileMode = new BehaviorSubject<boolean>(false)
  isMobileMode$ = this.isMobileMode.asObservable()

  setMobileMode(value: boolean) {
    this.isMobileMode.next(value)
  }
}
