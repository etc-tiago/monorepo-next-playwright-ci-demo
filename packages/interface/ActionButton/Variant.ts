export type Variant = 'base' | 'base-border' | 'primary' | 'danger' | 'success';

export const variantClass: { [key in Variant]: string } = {
  'base-border': 'border-gray-200 text-gray-500 hover:border-gray-300',
  base: 'border-gray-200 text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-300',
  primary:
    'border-indigo-600 text-white bg-indigo-500 hover:bg-indigo-600 hover:border-indigo-700',
  danger:
    'border-danger-700 text-white bg-danger-500 hover:bg-danger-700 hover:border-danger-800',
  success:
    'border-success-700 text-white bg-success-500 hover:bg-success-700 hover:border-success-800',
};
