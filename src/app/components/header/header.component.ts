import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMobileMode: boolean = false
  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.appService.isMobileMode$.subscribe((value: boolean) => {
      this.isMobileMode = value
    })
  }

  switch(e: any) {
    if (e.checked) {
      document.body.classList.add('dark-mode')
      document.body.classList.remove('light-mode')
      this.appService.setDarkMode(true)
    } else {
      document.body.classList.add('light-mode')
      document.body.classList.remove('dark-mode')
      this.appService.setDarkMode(false)
    }
  }

}
