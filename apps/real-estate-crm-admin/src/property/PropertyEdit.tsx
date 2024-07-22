import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AgentTitle } from "../agent/AgentTitle";

export const PropertyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="price" source="price" />
        <NumberInput step={1} label="size" source="size" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="address" source="address" />
        <ReferenceInput source="agent.id" reference="Agent" label="Agent">
          <SelectInput optionText={AgentTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
