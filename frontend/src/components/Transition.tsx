import { FC } from 'react';

const FormTransition: FC<{ showing: boolean }> = ({ showing, children }) => (
  <div
    className={`bg-white transition-all transform ${
      showing ? 'block' : 'hidden'
    }`}
  >
    {children}
  </div>
);

export default FormTransition;
