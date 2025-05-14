import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { AppService } from '../../services/app.service';
import { of } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let appService: AppService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        MatIconModule,
        MatButtonModule,
        MatSlideToggleModule,
        RouterTestingModule,
        MatToolbarModule
      ],
      providers: [
        {
          provide: AppService,
          useValue: {
            isMobileMode$: of(false),
            setDarkMode: jasmine.createSpy('setDarkMode')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    appService = TestBed.inject(AppService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set isMobileMode correctly from appService', () => {
    component.ngOnInit();
    expect(component.isMobileMode).toBeFalse();
  });

  it('should toggle dark mode when the slide toggle is clicked', () => {
    // Set initial mode to light
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');

    // Call the switch method when the toggle is checked
    const toggle = fixture.debugElement.query(By.css('mat-slide-toggle'));
    toggle.triggerEventHandler('change', { checked: true });
    fixture.detectChanges();

    // Assert dark mode is applied
    expect(document.body.classList.contains('dark-mode')).toBeTrue();
    expect(document.body.classList.contains('light-mode')).toBeFalse();
    expect(appService.setDarkMode).toHaveBeenCalledWith(true);

    // Call the switch method when the toggle is unchecked
    toggle.triggerEventHandler('change', { checked: false });
    fixture.detectChanges();

    // Assert light mode is applied
    expect(document.body.classList.contains('dark-mode')).toBeFalse();
    expect(document.body.classList.contains('light-mode')).toBeTrue();
    expect(appService.setDarkMode).toHaveBeenCalledWith(false);
  });

  it('should show the correct toolbar buttons based on mobile mode', () => {
    // Test case when mobile mode is true
    appService.isMobileMode$ = of(true);
    component.ngOnInit();
    fixture.detectChanges();

    const menuButton = fixture.debugElement.query(By.css('button[mat-icon-button]'));
    expect(menuButton).toBeTruthy();
    
    // Test case when mobile mode is false
    appService.isMobileMode$ = of(false);
    component.ngOnInit();
    fixture.detectChanges();
    
    const dashboardButton = fixture.debugElement.query(By.css('button[routerLink="dashboard"]'));
    expect(dashboardButton).toBeTruthy();
  });

});
