import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { ServerObject } from "docusaurus-plugin-openapi-docs/src/openapi/types";

export interface State {
  value?: ServerObject;
  options: ServerObject[];
}

const initialState: State = {} as any;

export const slice = createSlice({
  name: "server",
  initialState,
  reducers: {
    setServer: (state, action: PayloadAction<string>) => {
      state.value = state.options.find(
        (s) => s.url === JSON.parse(action.payload).url
      );
    },
    setServerVariable: (state, action: PayloadAction<string>) => {
      if (state.value?.variables) {
        const parsedPayload = JSON.parse(action.payload);
        state.value.variables[parsedPayload.key].default = parsedPayload.value;
      }
    },
    setCustomServerUrl: (state, action: PayloadAction<string>) => {
      if (state.value) {
        state.value = { ...state.value, url: action.payload };
      } else if (state.options.length > 0) {
        state.value = { ...state.options[0], url: action.payload };
      }
    },
  },
});

export const { setServer, setServerVariable, setCustomServerUrl } =
  slice.actions;

export default slice.reducer;
