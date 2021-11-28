export type RingColor = 'none' | 'normal' | 'success' | 'danger';

export const ringColorClass: { [key in RingColor]: string } = {
  none: '',
  normal: 'focus:ring-indigo-500',
  success: 'focus:ring-success-500',
  danger: 'focus:ring-danger-500',
};
