import Head from 'next/head';
import { FC } from 'react';

import SideCover from '&/components/SideCover';
import Wrapper from '&/components/Wrapper';
import Form from '&/components/Form';

const NewAccountPage: FC = () => (
  <div className="relative bg-white min-h-screen">
    <Head>
      <title>Abrir Conta</title>
    </Head>
    <SideCover />
    <Wrapper>
      <Form />
    </Wrapper>
  </div>
);

export default NewAccountPage;
