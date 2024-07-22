import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";

export type PropertyCreateInput = {
  price?: number | null;
  size?: number | null;
  description?: string | null;
  address?: string | null;
  agent?: AgentWhereUniqueInput | null;
};
