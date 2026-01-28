export const validators = {
  orderNumber: (value: string) => {
    if (!value) return 'Order number is required';
    if (!/^ORD-\d{6}$/.test(value)) return 'Enter in valid ORD-XXXXXX format';
    return '';
  },

  email: (value: string) => {
    if (!value) return 'Email is required';
    if (!/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(value))
      return 'Enter a valid email address';
    return '';
  },

  date: (value: string) => {
    if (!value) return 'Purchase date is required';
    return '';
  },
};
