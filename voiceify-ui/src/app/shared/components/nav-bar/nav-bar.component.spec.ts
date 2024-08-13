import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarComponent } from './nav-bar.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { ActivatedRoute } from '@angular/router';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarComponent],
      imports:[TabMenuModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
          },
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
