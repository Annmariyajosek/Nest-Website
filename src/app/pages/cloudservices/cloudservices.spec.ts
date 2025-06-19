import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cloudservices } from './cloudservices';

describe('Cloudservices', () => {
  let component: Cloudservices;
  let fixture: ComponentFixture<Cloudservices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cloudservices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cloudservices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
