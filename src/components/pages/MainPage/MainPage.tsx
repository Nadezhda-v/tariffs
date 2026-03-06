'use client';

import { FC } from 'react';
import Image from 'next/image';
import { GuaranteeSection, Timer } from '../../../components/';
import { formatTime } from '../../../utils/formatTime';
import { TariffsSection } from '@/components/TariffsSection';
import { useMainData } from './hooks/useMainData';

export const MainPage: FC = () => {
  const { offerSecondsLeft, selectedPlan, tariffs, status } =
    useMainData();

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Timer
          label="Успейте открыть пробную неделю"
          time={formatTime(offerSecondsLeft)}
          secondsLeft={offerSecondsLeft}
        />

        <main className="mx-auto max-w-[1250px] p-[0_16px]">
          <div className="w-full flex flex-col items-center justify-center bg-[#232829] py-6 sm:py-10 lg:py-12">
          <div>
            <h1 className="text-xl text-xl min-[375px]:text-2xl min-[1250px]:text-4xl font-bold mb-6 sm:mb-10">
              Выбери подходящий для себя{' '}
              <span className="text-[#FFB347]">тариф</span>
            </h1>

            <div className="flex flex-col lg:flex-row gap-1 items-stretch mb-[22px] min-[1024px]:gap-8 min-[1024px]:mb-[60px]">
              <div className="relative flex-1 flex items-end justify-center lg:justify-start min-[1024px]:mb-[70px]">
                <div className="relative h-[200px] w-[100px] min-[375px]:h-[250px] min-[375px]:w-[124px] lg:h-[760px] lg:w-[380px]">
                  <Image
                    src="/athlete.png"
                    alt="Спортсмен"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[80px] w-full"
                    style={{
                      background:
                        'linear-gradient(to top, #232829, transparent)',
                    }}
                    aria-hidden
                  />
                </div>
              </div>

              <TariffsSection
                selectedPlan={selectedPlan}
                tariffs={tariffs}
                status={status}
                offerSecondsLeft={offerSecondsLeft}
              />
            </div>
            <GuaranteeSection className="mt-8" />
          </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default MainPage;
