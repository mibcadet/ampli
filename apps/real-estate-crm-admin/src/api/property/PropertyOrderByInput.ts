import { SortOrder } from "../../util/SortOrder";

export type PropertyOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  price?: SortOrder;
  size?: SortOrder;
  description?: SortOrder;
  address?: SortOrder;
  agentId?: SortOrder;
};
