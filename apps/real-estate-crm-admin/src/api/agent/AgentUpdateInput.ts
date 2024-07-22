import { PropertyUpdateManyWithoutAgentsInput } from "./PropertyUpdateManyWithoutAgentsInput";
import { AppointmentUpdateManyWithoutAgentsInput } from "./AppointmentUpdateManyWithoutAgentsInput";

export type AgentUpdateInput = {
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  properties?: PropertyUpdateManyWithoutAgentsInput;
  appointments?: AppointmentUpdateManyWithoutAgentsInput;
};
