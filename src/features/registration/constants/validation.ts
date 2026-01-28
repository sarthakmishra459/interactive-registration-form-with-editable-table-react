export const STEP_CONFIG = [
  {
    fields: {
      orderNumber: {
        required: true,
        pattern: /^ORD-\d{6}$/,
        message: "Enter in valid ORD-XXXXXX format",
      },
      email: {
        required: true,
        pattern:  /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,
        message: "Enter a valid email address",
      },
      purchaseDate: {
        required: true,
      },
    },
    radios: ["shoppingMethod"],
    ratings: [
      'product-quality',
      'matches-description',
      'durability',
      'value-for-money'
    ]
  },
  {
    // Step 1
    ratings: [
      'websites-ease-of-use',
      'product-search',
      'checkout-process',
      'payment-options'
    ],
    
  },
  {
    // Step 2
     ratings: [
      'delivery-experience',
      'delivery-speed',
      'packaging-quality'
    ],
    radios: ['package-content-experience']
  },
  {
    // Step 3
    ratings: [
    ],
    radios: ['support-contacted', 'recommendation-experience'],
    conditionalRatings: {
        dependsOn: "support-contacted",
        value: "yes",
        ratings: ["support-responsiveness","support-helpfulness"],
    }
  }
];