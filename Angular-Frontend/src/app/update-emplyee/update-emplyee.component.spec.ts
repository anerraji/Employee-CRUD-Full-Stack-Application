import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmplyeeComponent } from './update-emplyee.component';

describe('UpdateEmplyeeComponent', () => {
  let component: UpdateEmplyeeComponent;
  let fixture: ComponentFixture<UpdateEmplyeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateEmplyeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateEmplyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
