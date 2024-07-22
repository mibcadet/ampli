import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";

export type AppointmentWhereInput = {
  id?: StringFilter;
  date?: DateTimeNullableFilter;
  time?: DateTimeNullableFilter;
  location?: StringNullableFilter;
  client?: ClientWhereUniqueInput;
  agent?: AgentWhereUniqueInput;
};
