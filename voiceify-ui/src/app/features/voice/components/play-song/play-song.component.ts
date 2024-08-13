import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'voiceify-play-song',
  templateUrl: './play-song.component.html',
  styleUrls: ['./play-song.component.scss']
})
export class PlaySongComponent implements OnInit {
  @Input()
  link: string | undefined;
  ngOnInit(): void {
  }

}
