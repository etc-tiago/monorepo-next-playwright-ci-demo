export type Ring = 'normal' | 'none';

export const ringClass: { [key in Ring]: string } = {
  normal: 'focus:outline-none focus:ring-2 focus:ring-offset-2',
  none: 'focus:outline-none focus:ring-0 focus:ring-offset-0',
};
