import { FC } from 'react';

const Wrapper: FC = ({ children }) => (
  <div className="relative px-4 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
    <div className="min-h-screen lg:pr-8 flex flex-col justify-center">
      <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">{children}</div>
    </div>
  </div>
);

export default Wrapper;
