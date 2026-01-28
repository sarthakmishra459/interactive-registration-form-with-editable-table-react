import type { JSX } from 'react';

export type Step = {
  id: number;
  label: string;
  icon: JSX.Element;
};

export type RatingStepperProps = {
  currentStep: number;
};
