import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaySongComponent } from './play-song.component';

describe('PlaySongComponent', () => {
  let component: PlaySongComponent;
  let fixture: ComponentFixture<PlaySongComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaySongComponent]
    });
    fixture = TestBed.createComponent(PlaySongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
