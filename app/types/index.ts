import { Argument } from "classnames";

declare global {
  type CX = (...args: Argument[]) => string;
}

export type ILink = {
  name: string;
  href: string;
}

