/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';

const SideCover: FC = () => (
  <div className="lg:absolute lg:inset-0">
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        className="h-56 w-full object-cover object-left lg:absolute lg:h-full"
        src="https://images.unsplash.com/photo-1535953267280-5fd672f9bfa3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=100"
        alt=""
      />
    </div>
  </div>
);

export default SideCover;
