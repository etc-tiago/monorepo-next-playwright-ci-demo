import { FC, useState } from 'react';

import FormHome from './Home';
import ProfessionalManager from './ProfessionalManager';

type FormStage = 'home' | 'pr' | '';

const NewAccountForm: FC = () => {
  const [formStage, setFormStage] = useState<FormStage>('home');

  return (
    <>
      {formStage === 'home' && (
        <FormHome nextAction={() => setFormStage('pr')} />
      )}
      {formStage === 'pr' && (
        <ProfessionalManager
          previusAction={() => setFormStage('home')}
          nextAction={() => setFormStage('')}
        />
      )}
    </>
  );
};

export default NewAccountForm;
