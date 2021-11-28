import { FC } from 'react';

import Footer from '../Footer';
import { Title } from '../Title';
import { FormProps } from './types';

const FormHome: FC<FormProps> = ({ nextAction }) => (
  <div data-at="home">
    <Title>Vamos trabalhar juntos</Title>
    <p className="mt-4 text-md text-gray-500 sm:mt-3">
      Nosso objetivo é desenvolver um sistema sob medida para você e sua equipe,
      que atenda realmente suas necessidades do dia a dia, desde a agenda até o
      atendimento ao paciente.
    </p>
    <p className="mt-4 text-md text-gray-500 sm:mt-3">
      As perguntas são rápidas, objetivas e entendemos que você é o responsável
      pela clínica.
    </p>
    <Footer nextBtnText="Iniciar cadastro" nextAction={nextAction} />
  </div>
);

export default FormHome;
