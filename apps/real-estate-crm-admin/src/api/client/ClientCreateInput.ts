import { AppointmentCreateNestedManyWithoutClientsInput } from "./AppointmentCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutClientsInput;
};
