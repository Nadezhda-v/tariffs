'use client';

import Link from 'next/link';
import { FC, useState } from 'react';

const CHECKBOX_BOX_BASE_STYLES = [
  'absolute inset-0 rounded border bg-transparent',
  "after:content-[''] after:absolute after:opacity-0 peer-checked:after:opacity-100",
  'after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-[70%]',
  'after:w-[8px] after:h-[16px]',
  'after:border-r-2 after:border-b-2 after:border-[#FDB056]',
  'after:rotate-45',
].join(' ');

const CHECKBOX_BOX_BORDER_STYLES = {
  error: 'border-2 border-red-500',
  default: 'border border-white/30',
} as const;

export const ChecklistCard: FC = () => {
  const [checked, setChecked] = useState(true);
  const [showError, setShowError] = useState(false);

  const handleBuyClick = () => {
    if (!checked) {
      setShowError(true);
      return;
    };

    setShowError(false);
  };

  return (
    <div className="flex flex-col text-xs gap-4">
      <label className="inline-flex items-start gap-3 cursor-pointer select-none">
      <span className="relative mt-[2px] h-8 w-8">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => {
            setChecked(e.target.checked);
            if (showError) setShowError(false);
          }}
          className="peer absolute inset-0 h-8 w-8 opacity-0 cursor-pointer"
        />

        <span className={`
          ${CHECKBOX_BOX_BASE_STYLES}
          ${showError ? CHECKBOX_BOX_BORDER_STYLES.error : CHECKBOX_BOX_BORDER_STYLES.default}
        `}/>
      </span>

      <span className="max-w-[500px] leading-[16px] text-white/70 text-sm min-[1024px]:text-base">
        Я согласен с{' '}
        <Link
          href="/offer"
          className="underline decoration-white underline-offset-2"
        >
          офертой рекуррентных платежей
        </Link>{' '}
        и{' '}
        <Link
          href="/privacy"
          className="underline decoration-white underline-offset-2"
        >
          Политикой конфиденциальности
        </Link>
      </span>
    </label>

    <button
      type="button"
      onClick={handleBuyClick}
      className="rounded-2xl w-full min-[1025px]:w-[350px] bg-[#FDB056] py-5 px-35 text-xl text-black hover:bg-[#ffc870] transition font-bold cursor-pointer"
    >
      Купить
    </button>

    <p className="text-[#9B9B9B] text-base">
      Нажимая кнопку «Купить», Пользователь соглашается на разовое списание денежных средств для получения пожизненного доступа к
      приложению. Пользователь соглашается, что данные кредитной/дебетовой карты будут сохранены для осуществления покупок
      дополнительных услуг сервиса в случае желания пользователя.
    </p>
  </div>
  );
};
