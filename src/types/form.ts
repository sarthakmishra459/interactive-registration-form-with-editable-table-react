export type FormValues = {
  orderNumber: string;
  email: string;
  purchaseDate: string;
  shoppingMethod: string;

  packageContentExperience?: string;
  supportContacted?: "yes" | "no";
  recommendationExperience?: string;

  whatDidYouLike?: string;
  whatToImprove?: string;
  additionalComment?: string;
  review?: boolean;
};