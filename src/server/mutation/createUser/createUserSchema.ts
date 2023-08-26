import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(2),
  description: z.string(),
});

export type CreateUserSchema = z.infer<typeof createUserSchema>;
