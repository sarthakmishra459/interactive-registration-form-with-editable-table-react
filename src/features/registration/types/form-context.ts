import type { FormValues } from './form';
import type { Rating } from './rating';

export type FormContextType = {
  formData: FormValues;
  rating: Rating;
  currentStep: number;
  errors: Record<string, string>;
  setFormData: React.Dispatch<React.SetStateAction<FormValues>>;
  setRating: React.Dispatch<React.SetStateAction<Rating>>;
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  nextStep: () => void;
  prevStep: () => void;
  resetStep: () => void;
  resetForm: () => void;
};
