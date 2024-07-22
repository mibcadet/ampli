import { PropertyCreateNestedManyWithoutAgentsInput } from "./PropertyCreateNestedManyWithoutAgentsInput";
import { AppointmentCreateNestedManyWithoutAgentsInput } from "./AppointmentCreateNestedManyWithoutAgentsInput";

export type AgentCreateInput = {
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  properties?: PropertyCreateNestedManyWithoutAgentsInput;
  appointments?: AppointmentCreateNestedManyWithoutAgentsInput;
};
