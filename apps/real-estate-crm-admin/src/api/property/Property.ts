import { Agent } from "../agent/Agent";

export type Property = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  price: number | null;
  size: number | null;
  description: string | null;
  address: string | null;
  agent?: Agent | null;
};
