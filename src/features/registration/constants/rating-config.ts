export const RATING_CONFIG = [
    {
      ratings: [
        { category: 'product-quality', label: 'How was the Product Quality?' },
        { category: 'matches-description', label: 'To what extent did the product align with specified description?' },
        { category: 'durability', label: 'How was the product durability?' },
        { category: 'value-for-money', label: "How would you describe the products value for money?" },
      ],
    },
    {
      ratings: [
        { category: 'websites-ease-of-use', label: 'How would you describe the products website experience?' },
        { category: 'product-search', label: 'What was your experience while searching products?' },
        { category: 'checkout-process', label: 'How was the websites checkout process?' },
        { category: 'payment-options', label: 'What was your experience with the Payment Gateway?' },
      ],
    },
    {
      ratings: [
        { category: 'delivery-experience', label: 'How was your delivery experience?' },
        { category: 'delivery-speed', label: 'How was your delivery speed?' },
        { category: 'packaging-quality', label: 'How was the Packaging Quality?' },
      ],
      radio: {
        name: 'package-content-experience',
        label: 'Did the product delivered match with its image in the website?',
        options: [
          { id: 'yes-correct', value: 'yes, everything correct', label: 'Yes, Everything Correct' },
          { id: 'missing-items', value: 'Missing Items', label: 'Missing Items' },
          { id: 'wrong-items', value: 'Wrong Items', label: 'Wrong Items' },
          { id: 'damaged-items', value: 'Damaged Items', label: 'Damaged Items' },
        ],
      },
      
    },
    {
      radio: {
        name: 'support-contacted',
        label: 'Did you Contact Support?',
        options: [
          { id: 'support-yes', value: 'yes', label: 'Yes' },
          { id: 'support-no', value: 'no', label: 'No' },
        ],
      },
      conditionalRatings: [
        { category: 'support-responsiveness', label: 'If yes how was the Support Responsiveness?' },
        { category: 'support-helpfulness', label: 'If yes how was the Support Helpfulness?' },
      ],
      radios: 
        {
          name: 'recommendation-experience',
          label: 'Would you recommend product to friends?',
          options: [
            { id: 'definitely-yes', value: 'Definitely Yes', label: 'Definitely Yes' },
            { id: 'probably-yes', value: 'Probably Yes', label: 'Probably Yes' },
            { id: 'unsure', value: 'Unsure', label: 'Unsure' },
            { id: 'probably-no', value: 'Probably No', label: 'Probably No' },
            { id: 'definitely-no', value: 'Definitely No', label: 'Definitely No' },
          ],
        },
      
      textareas: [
        { name: 'what-did-you-like', label: 'What Did You Like' },
        { name: 'what-to-improve', label: 'What To Improve?' },
        { name: 'additional-comment', label: 'Additional Comments', maxlength: 200 },
      ],
      checkbox: {
        name: 'review',
        label: 'Participate In Monthly Review',
      },
    },
  ];