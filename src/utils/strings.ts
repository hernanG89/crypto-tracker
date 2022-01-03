import { round } from 'lodash';

export const formatTwoDecimal = (num: number): string => round(num, 2).toFixed(2);
