export type Size = 'xs' | 'mini' | 'normal' | 'big';

export const sizeClass: { [key in Size]: string } = {
  xs: 'px-1 py-0',
  mini: 'px-2 py-1',
  normal: 'px-4 py-2',
  big: 'px-5 py-3',
};
