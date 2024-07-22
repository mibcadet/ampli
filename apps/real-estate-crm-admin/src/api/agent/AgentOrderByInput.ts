import { SortOrder } from "../../util/SortOrder";

export type AgentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  email?: SortOrder;
  phone?: SortOrder;
};
