import React, { useState } from "react";

import { translate } from "@docusaurus/Translate";
import FloatingButton from "@theme/ApiExplorer/FloatingButton";
import FormItem from "@theme/ApiExplorer/FormItem";
import FormSelect from "@theme/ApiExplorer/FormSelect";
import FormTextInput from "@theme/ApiExplorer/FormTextInput";
import { useTypedDispatch, useTypedSelector } from "@theme/ApiItem/hooks";
import { OPENAPI_SERVER } from "@theme/translationIds";

import { setServer, setServerVariable } from "@theme/ApiExplorer/Server/slice";

interface ServerProps {
  labelId?: string;
}

function Server({ labelId }: ServerProps) {
  const [isEditing, setIsEditing] = useState(false);
  const value = useTypedSelector((state: any) => state.server.value);
  const options = useTypedSelector((state: any) => state.server.options);
  const dispatch = useTypedDispatch();

  if (options.length <= 0) {
    return null;
  }

  if (!value) {
    dispatch(setServer(JSON.stringify(options[0])));
  }

  if (value) {
    const urlExists = options.find((s: any) => s.url === value.url);
    if (!urlExists) {
      dispatch(setServer(JSON.stringify(options[0])));
    }
  }

  if (!isEditing) {
    let url = "";
    if (value) {
      url = value.url.replace(/\/$/, "");
      if (value.variables) {
        Object.keys(value.variables).forEach((variable) => {
          url = url.replace(
            `{${variable}}`,
            value.variables?.[variable].default ?? ""
          );
        });
      }
    }
    return (
      <FloatingButton
        onClick={() => setIsEditing(true)}
        label={translate({ id: OPENAPI_SERVER.EDIT_BUTTON, message: "Edit" })}
      >
        <FormItem>
          <span className="openapi-explorer__server-url" title={url}>
            {url}
          </span>
        </FormItem>
      </FloatingButton>
    );
  }

  return (
    <div className="openapi-explorer__server-container">
      <FloatingButton
        onClick={() => setIsEditing(false)}
        label={translate({ id: OPENAPI_SERVER.HIDE_BUTTON, message: "Hide" })}
      >
        {options.length > 1 && (
          <FormItem>
            <FormSelect
              ariaLabelledBy={labelId}
              options={options.map((s: any) => s.url)}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                dispatch(
                  setServer(
                    JSON.stringify(
                      options.filter((s: any) => s.url === e.target.value)[0]
                    )
                  )
                );
              }}
              value={value?.url}
            />
            <small className="openapi-explorer__server-description">
              {value?.description}
            </small>
          </FormItem>
        )}
        {value?.variables &&
          Object.keys(value.variables).map((key) => {
            if (value.variables?.[key].enum !== undefined) {
              return (
                <FormItem key={key}>
                  <FormSelect
                    label={key}
                    options={value.variables[key].enum}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                      dispatch(
                        setServerVariable(
                          JSON.stringify({ key, value: e.target.value })
                        )
                      );
                    }}
                    value={value?.variables[key].default}
                  />
                </FormItem>
              );
            }
            return (
              <FormItem key={key}>
                <FormTextInput
                  label={key}
                  placeholder={value.variables?.[key].default}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    dispatch(
                      setServerVariable(
                        JSON.stringify({ key, value: e.target.value })
                      )
                    );
                  }}
                  value={value?.variables?.[key].default}
                />
              </FormItem>
            );
          })}
        {value?.variables && (
          <FormItem>
            <button
              style={{
                background: "none",
                border: "none",
                padding: 0,
                color: "var(--ifm-color-primary)",
                cursor: "pointer",
                fontSize: "var(--ifm-font-size-base)",
                textDecoration: "underline",
              }}
              onClick={() => {
                const original = options.find((s: any) => s.url === value.url);
                if (original) {
                  dispatch(setServer(JSON.stringify(original)));
                }
              }}
            >
              Reset to default
            </button>
          </FormItem>
        )}
      </FloatingButton>
    </div>
  );
}

export default Server;
