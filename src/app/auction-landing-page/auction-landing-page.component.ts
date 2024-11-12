import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuctionItem } from '../../auction-landing';
import { IconsModule } from '../icons/icons.module';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-auction-landing-page',
  standalone: true,
  imports: [CommonModule, IconsModule,RouterLink],
  templateUrl: './auction-landing-page.component.html',
  styleUrl: './auction-landing-page.component.css',
})

export class AuctionLandingComponent {
  liveAuctions: AuctionItem[] = [
    { id: 1, name: 'Product A', imageUrl: 'macbook.png', startingPrice: 100, currentBid: 150 },
    { id: 2, name: 'Product B', imageUrl: 'samsung.webp', startingPrice: 200, currentBid: 250 },
    { id: 3, name: 'Product C', imageUrl: 'macbook.png', startingPrice: 100, currentBid: 150 },
    { id: 4, name: 'Product D', imageUrl: 'samsung.webp', startingPrice: 200, currentBid: 250 },
  ];

  upcomingAuctions: AuctionItem[] = [
    { id: 3, name: 'Product E', imageUrl: 'macbook.png', startingPrice: 300, startTime: new Date(Date.now() + 3600000) }, // Starts in 1 hour
    { id: 3, name: 'Product F', imageUrl: 'macbook.png', startingPrice: 300, startTime: new Date(Date.now() + 3600000) },
    { id: 3, name: 'Product G', imageUrl: 'macbook.png', startingPrice: 300, startTime: new Date(Date.now() + 3600000) },
    { id: 3, name: 'Product H', imageUrl: 'macbook.png', startingPrice: 300, startTime: new Date(Date.now() + 3600000) },
  ];

  closedAuctions: AuctionItem[] = [
    { id: 4, name: 'Product I', imageUrl: 'macbook.png', startingPrice: 400, winningBid: 450 },
    { id: 4, name: 'Product J', imageUrl: 'macbook.png', startingPrice: 400, winningBid: 450 },
    { id: 4, name: 'Product K', imageUrl: 'macbook.png', startingPrice: 400, winningBid: 450 },
    { id: 4, name: 'Product L', imageUrl: 'macbook.png', startingPrice: 400, winningBid: 450 },
  ];

  placeBid(item: AuctionItem) {
    // Logic to place bid
    console.log('Placing bid on', item.name);
  }
}