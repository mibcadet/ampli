import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";

export type AppointmentUpdateInput = {
  date?: Date | null;
  time?: Date | null;
  location?: string | null;
  client?: ClientWhereUniqueInput | null;
  agent?: AgentWhereUniqueInput | null;
};
