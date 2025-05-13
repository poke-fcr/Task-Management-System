import { Component, HostListener, OnInit } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'task-management-system';
  isDarkMode: boolean = false
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.isDarkMode$.subscribe((v: boolean) => {
      this.isDarkMode = v
    })
    this.checkScreenSize()
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const width = (event.target as Window).innerWidth;
    this.appService.setMobileMode(width < 720)
  }


  checkScreenSize() {
    this.appService.setMobileMode(window.innerWidth < 720)
  }


}
