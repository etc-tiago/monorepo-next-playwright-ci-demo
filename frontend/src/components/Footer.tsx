import { ActionButton } from '@codebase/interface/ActionButton';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { FC } from 'react';

type Props = {
  isSaving?: boolean;
  previusAction?: () => void;
  nextAction?: () => void;
  nextBtnText?: string;
};

const Footer: FC<Props> = ({
  isSaving = false,
  nextBtnText = 'Avançar etapa',
  nextAction,
  previusAction,
}) => {
  return (
    <div className="mt-8 flex items-center">
      {previusAction && (
        <ActionButton onClick={previusAction} testId="start-back">
          <ChevronLeftIcon className="w-6 h-6 fill-current" />
        </ActionButton>
      )}
      <div className="ml-auto flex">
        {isSaving ? (
          <div className="font-semibold border-indigo-600 text-white bg-indigo-500 rounded">
            Salvando...
          </div>
        ) : (
          <ActionButton
            variant="primary"
            {...(nextAction
              ? { type: 'button', onClick: nextAction }
              : { type: 'submit' })}
            testId="next-step"
          >
            <div className="flex items-center justify-center">
              <span>{nextBtnText}</span>
              <ChevronRightIcon className="w-6 h-6 text-white -mr-2 ml-2" />
            </div>
          </ActionButton>
        )}
      </div>
    </div>
  );
};

export default Footer;
