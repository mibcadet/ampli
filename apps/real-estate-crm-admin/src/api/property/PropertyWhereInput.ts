import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";

export type PropertyWhereInput = {
  id?: StringFilter;
  price?: FloatNullableFilter;
  size?: IntNullableFilter;
  description?: StringNullableFilter;
  address?: StringNullableFilter;
  agent?: AgentWhereUniqueInput;
};
