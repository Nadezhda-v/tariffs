'use client';

import type { FC, PropsWithChildren } from 'react';
import { PlanSelectButtonProps } from '../TariffsSection.types';

const BASE_CLASSNAME =
  'text-left rounded-3xl border text-xs sm:text-[14px] transition bg-[#313637]';

const DEFAULT_ACTIVE_CLASSNAME = 'border-[#F6B25F]';
const DEFAULT_INACTIVE_CLASSNAME = 'border-white/10 hover:border-white/40';

export const PlanSelectButton: FC<PropsWithChildren<PlanSelectButtonProps>> = ({
  planId,
  active,
  onSelect,
  className = '',
  activeClassName = DEFAULT_ACTIVE_CLASSNAME,
  inactiveClassName = DEFAULT_INACTIVE_CLASSNAME,
  children,
}) => (
  <button
    type="button"
    onClick={() => onSelect(planId)}
    className={`cursor-pointer ${BASE_CLASSNAME} ${className} ${
      active ? activeClassName : inactiveClassName
    }`}
  >
    {children}
  </button>
);

