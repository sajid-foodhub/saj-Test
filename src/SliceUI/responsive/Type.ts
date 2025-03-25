import { Breakpoints } from './helper';

export type VariantBreakPoints = {
  [Key in keyof typeof Breakpoints]: string;
} & {
  default: string; // Adding a default property
};
