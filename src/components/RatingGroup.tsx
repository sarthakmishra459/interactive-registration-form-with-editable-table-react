import { useFormContext } from "../context/FormContext";

type Props = {
  category: string;
  label: string;
};

const RatingGroup = ({ category, label }: Props) => {
  const { rating, setRating, errors, setErrors } = useFormContext();
  const value = rating[category] || 0;
  const hasError = Boolean(errors[category]);

  return (
    <div className={`rating-group ${hasError ? "error-field" : ""}`}>
      <p>
        {label} <span className="required">*</span>
      </p>
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={star <= value ? "star active" : "star"}
            onClick={() => {
              setRating((prev) => ({ ...prev, [category]: star }));

              if (hasError) {
                setErrors((prev) => {
                  const copy = { ...prev };
                  delete copy[category];
                  return copy;
                });
              }
            }}
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
