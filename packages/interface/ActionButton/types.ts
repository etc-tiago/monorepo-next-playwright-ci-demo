import { Ring } from './Ring';
import { Size } from './Sizes';
import { Variant } from './Variant';
import { RingColor } from './RingColor';
import { Rounded } from './Rounded';

export type ActionButtonProps = {
  type?: 'button' | 'submit';
  testId?: string;
  size?: Size;
  variant?: Variant;
  ring?: Ring;
  ringColor?: RingColor;
  onClick?: () => void;
  disabled?: boolean;
  noBorder?: boolean;
  rounded?: Rounded;
};
