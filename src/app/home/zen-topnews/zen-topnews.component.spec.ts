import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZenTopnewsComponent } from './zen-topnews.component';

describe('ZenTopnewsComponent', () => {
  let component: ZenTopnewsComponent;
  let fixture: ComponentFixture<ZenTopnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZenTopnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZenTopnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
