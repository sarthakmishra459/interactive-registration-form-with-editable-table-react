export type TableRow = {
  id: string;
  orderNumber: string;
  email: string;
  purchaseDate: string;
  shoppingMethod: string;
  ratings: Record<string, number>;
  supportContacted?: string;
  packageContentExperience?: string;
  recommendationExperience?: string;

  whatDidYouLike?: string;
  whatToImprove?: string;
  additionalComment?: string;
  review?: boolean;
};
