import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdCampaign } from './ad-campaign';

describe('AdCampaign', () => {
  let component: AdCampaign;
  let fixture: ComponentFixture<AdCampaign>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdCampaign]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdCampaign);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
