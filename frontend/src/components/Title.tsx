import { FC } from 'react';

export const Title: FC = ({ children }) => (
  <h2
    data-at="title"
    className="text-3xl font-heavy tracking-tight sm:text-4xl"
  >
    {children}
  </h2>
);
