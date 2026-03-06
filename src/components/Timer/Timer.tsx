'use client';

import { FC } from 'react';
import StarIcon from '../icons/StarIcon';
import { TimerProps } from './Timer.types';
import { useTimer } from './hooks/useTimer';
import cn from 'classnames';

export const Timer: FC<TimerProps> = ({ label, time, secondsLeft }) => {
  const { isDanger, shouldBlink, blinkOn }  = useTimer(secondsLeft);

  return (
    <div className="w-full bg-[#1D5B43] text-center text-sm py-2 sm:text-base h-[74px] min-[375px]:h-[84px] min-[1920px]:h-[102px]">
      <div className="flex flex-col items-center justify-center font-medium gap-2">
        <span className="font-semibold text-sm min-[375px]:text-lg min-[1920px]:text-2xl">
          {label}
        </span>
        <div className="flex items-center justify-center gap-2">
          <StarIcon />
          <span
            className={cn(
              'tabular-nums text-[28px] min-[375px]:text-[32px] min-[1920px]:text-[40px] font-bold leading-none transition-opacity',
              isDanger ? 'text-red-500' : 'text-[#FFBB00]',
              shouldBlink && !blinkOn ? 'opacity-20' : 'opacity-100',
            )}
          >
            {time}
          </span>
          <StarIcon />
        </div>
      </div>
    </div>
  );
};
