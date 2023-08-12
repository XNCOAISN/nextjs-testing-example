import { nanoid } from "nanoid";

export type CreateIdProps = {
  length?: number;
};

export const createId = ({ length = 16 }: CreateIdProps = {}) => {
  return nanoid(length);
};
