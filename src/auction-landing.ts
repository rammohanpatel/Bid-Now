export interface AuctionItem {
    id: number;
    name: string;
    imageUrl: string;
    startingPrice: number;
    currentBid?: number; // Only applicable to live auctions
    startTime?: Date;    // Only applicable to upcoming auctions
    winningBid?: number; // Only applicable to closed auctions
  }

  