import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaGoogleAds } from './meta-google-ads';

describe('MetaGoogleAds', () => {
  let component: MetaGoogleAds;
  let fixture: ComponentFixture<MetaGoogleAds>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetaGoogleAds]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetaGoogleAds);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
