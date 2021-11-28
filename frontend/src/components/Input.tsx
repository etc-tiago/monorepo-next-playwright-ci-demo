import { ExclamationCircleIcon } from '@heroicons/react/solid';
import { FC } from 'react';

export type LabelProps = {
  label?: JSX.IntrinsicElements['label'];
  labelText: string;
  id?: string;
};

export type InputProps = {
  labelText: string;
  label?: JSX.IntrinsicElements['label'];
  input?: JSX.IntrinsicElements['input'];
  id?: string;
  error?: string;
  inputRef?: React.MutableRefObject<HTMLInputElement>;
  paddingRight?: string;
};

const Input: FC<InputProps> = ({
  id,
  labelText,
  label = {},
  input = {},
  inputRef,
  error,
  paddingRight = 'pr-3',
}) => {
  return (
    <>
      <label
        {...(id ? { htmlFor: id } : {})}
        className="block text-sm font-medium text-gray-700"
        {...label}
      >
        {labelText}
      </label>
      <div className="relative block w-full">
        <input
          type="text"
          {...(id ? { id } : {})}
          className={`mt-1 block w-full rounded-md shadow-sm py-3 px-4 focus:outline-none text-base ${
            input.disabled
              ? 'bg-gray-100 border-gray-300'
              : error
              ? 'pr-10 border border-danger-500 focus:ring-danger-700 focus:border-danger-700'
              : 'border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
          }`}
          {...input}
          {...(inputRef ? { ref: inputRef } : {})}
        />
        {!!error && (
          <div
            className={`absolute inset-y-0 right-0 ${paddingRight} flex items-center pointer-events-none`}
          >
            <ExclamationCircleIcon
              className="h-5 w-5 text-danger-500"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
      {!!error && (
        <p className="mt-2 text-sm text-danger-600" data-ef="input-alert">
          {error}
        </p>
      )}
    </>
  );
};

export default Input;
