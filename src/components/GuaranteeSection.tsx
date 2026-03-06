import { FC } from 'react';
import cn from 'classnames';

interface GuaranteeSectionProps {
  className?: string;
}

export const GuaranteeSection: FC<GuaranteeSectionProps> = ({ className }) => (
  <section
    className={cn(
      'flex flex-col gap-3 min-[1024px]:gap-8',
      'rounded-2xl border px-5 py-3 text-xs sm:text-sm text-white',
      'border-[#484D4E]',
      className,
    )}
  >
    <p className="font-medium text-[18px] border border-[#81FE95] text-[#81FE95] rounded-4xl w-[max-content] py-[14px] px-[30px] min-[1024px]:text-[28px]">
      гарантия возврата 30 дней
    </p>
    <p className="text-white/80 text-sm min-[1024px]:text-2xl">
      Мы уверены, что наш план сработает для тебя и ты увидишь видимые результаты уже через 4 недели!
      Мы даже готовы полностью вернуть твои деньги в течение 30 дней с момента покупки, если ты не
      получишь видимых результатов.
    </p>
  </section>
);
