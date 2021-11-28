import { FC } from 'react';

import { ringClass } from './Ring';
import { ringColorClass } from './RingColor';
import { sizeClass } from './Sizes';
import { ActionButtonProps } from './types';
import { variantClass } from './Variant';
import { roundedClass } from './Rounded';

export const ActionButton: FC<ActionButtonProps> = ({
  testId,
  onClick,
  disabled = false,
  type = 'button',
  size = 'normal',
  variant = 'base',
  ring = 'normal',
  ringColor,
  children,
  noBorder = false,
  rounded = 'lr',
}) => {
  ringColor = ringColor
    ? ringColor
    : variant === 'danger'
    ? 'danger'
    : variant === 'success'
    ? 'success'
    : 'normal';

  const textSize = size === 'xs' ? 'text-xs' : 'text-sm';

  return (
    <button
      type={type}
      {...(testId ? { 'data-btn': testId } : {})}
      className={`font-medium cursor-pointer inline-flex ${
        roundedClass[rounded]
      } hover:shadow-sm ${textSize} items-center ${
        noBorder ? 'border-0' : 'border'
      } ${sizeClass[size]} ${variantClass[variant]} ${ringClass[ring]} ${
        ringColorClass[ringColor]
      } ${disabled ? 'opacity-30' : ''}`}
      {...{ disabled, onClick }}
    >
      {children}
    </button>
  );
};
