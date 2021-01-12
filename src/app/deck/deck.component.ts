import { Component, Input, OnInit } from '@angular/core';
import { BackendService } from '../backend/backend.service'
import { DomSanitizer } from '@angular/platform-browser'
@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {
  @Input() player: string;
  image: any;
  constructor(private backend: BackendService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.image = '/assets/cardBack.jpg'
  }

  getCard() {
    this.backend.getCard()
      .subscribe(res => {
        const blobUrl = URL.createObjectURL(res)
        this.image = this.sanitizer.bypassSecurityTrustUrl(blobUrl);
      })
  }

}
