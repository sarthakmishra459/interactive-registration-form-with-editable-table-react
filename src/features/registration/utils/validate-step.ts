import { STEP_CONFIG } from '../constants/validation';
import type { FormValues } from '../types/form';
import { nameToFieldName } from './name-to-field';

export function validateStep(step: number, formData: FormValues, ratings: Record<string, number>) {
  const errors: Record<string, string> = {};
  const config = STEP_CONFIG[step];

  // Validate fields
  if (config?.fields) {
    Object.entries(config.fields).forEach(([field, rules]) => {
      const value = formData[field as keyof FormValues];
      if (rules.required && !value) {
        errors[field] = 'This is a required field';
      }
      if ('pattern' in rules && rules.pattern && value && !rules.pattern.test(String(value))) {
        errors[field] = 'This is not a valid format';
      }
    });
  }

  // Validate radios
  config?.radios?.forEach((radio) => {
    const key = nameToFieldName(radio);
    if (!formData[key as keyof FormValues]) {
      errors[key] = 'This is a required field';
    }
  });

  // Validate ratings
  config?.ratings?.forEach((rating) => {
    if (!ratings[rating] || ratings[rating] === 0) {
      errors[rating] = 'This is a required field';
    }
  });

  // Conditional ratings
  if (config?.conditionalRatings) {
    const { dependsOn, value, ratings: conditional } = config.conditionalRatings;
    const dependsOnKey = nameToFieldName(dependsOn);
    console.log('DependsOn value:', formData[dependsOnKey]);
    console.log('expected value', value);
    console.log('conditional errors', errors);
    if (formData[dependsOnKey as keyof FormValues] === value) {
      conditional.forEach((rating) => {
        if (!ratings[rating] || ratings[rating] === 0) {
          errors[rating] = 'This is a required field';
        }
      });
    }
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
