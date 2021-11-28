export type Rounded = 'none' | 'lr' | 'l' | 'r';

export const roundedClass: { [key in Rounded]: string } = {
  none: '',
  lr: 'rounded',
  l: 'rounded-l',
  r: 'rounded-r',
};
