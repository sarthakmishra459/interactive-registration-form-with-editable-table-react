import { useState } from 'react';
import { useFormContext } from '../context/FormContext';

type Props = {
  category: string;
  label: string;
};

const RatingGroup = ({ category, label }: Props) => {
  const { rating, setRating, errors, setErrors } = useFormContext();

  const savedValue = rating[category] || 0;
  const [hoverValue, setHoverValue] = useState(0);

  const displayValue = hoverValue || savedValue;
  const hasError = Boolean(errors[category]);

  const handleClick = (value: number) => {
    setRating((prev: typeof errors) => ({ ...prev, [category]: value }));

    if (hasError) {
      setErrors((prev: typeof errors) => {
        const copy = { ...prev };
        delete copy[category];
        return copy;
      });
    }
  };

  return (
    <div className={`rating-group ${hasError ? 'error-field' : ''}`}>
      <p>
        {label} <span className="required">*</span>
      </p>

      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={star <= displayValue ? 'star active' : 'star'}
            onMouseEnter={() => setHoverValue(star)}
            onMouseLeave={() => setHoverValue(0)}
            onClick={() => handleClick(star)}
          >
            ★
          </span>
        ))}
      </div>

      {hasError && <small className="error show">{errors[category]}</small>}
    </div>
  );
};

export default RatingGroup;
