import React, { useState } from "react";

import { translate } from "@docusaurus/Translate";
import FloatingButton from "@theme/ApiExplorer/FloatingButton";
import FormItem from "@theme/ApiExplorer/FormItem";
import FormSelect from "@theme/ApiExplorer/FormSelect";
import FormTextInput from "@theme/ApiExplorer/FormTextInput";
import { useTypedDispatch, useTypedSelector } from "@theme/ApiItem/hooks";
import { OPENAPI_SERVER } from "@theme/translationIds";

import {
  setServer,
  setServerVariable,
  setCustomServerUrl,
} from "@theme/ApiExplorer/Server/slice";

interface ServerProps {
  labelId?: string;
}

function toLabel(key: string) {
  return key.replace(/([A-Z])/g, " $1").replace(/^[a-z]/, (c) => c.toUpperCase());
}

function Server({ labelId }: ServerProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [draftUrl, setDraftUrl] = useState("");
  const value = useTypedSelector((state: any) => state.server.value);
  const options = useTypedSelector((state: any) => state.server.options);
  const dispatch = useTypedDispatch();

  if (options.length <= 0) {
    return null;
  }

  if (!value) {
    dispatch(setServer(JSON.stringify(options[0])));
  }

  // Only reset to default when there are multiple options and the selected URL
  // no longer exists in the list. Skip for single-option case where a custom
  // URL set by the user would otherwise be overwritten.
  if (value && options.length > 1) {
    const urlExists = options.find((s: any) => s.url === value.url);
    if (!urlExists) {
      dispatch(setServer(JSON.stringify(options[0])));
    }
  }

  const handleEditClick = () => {
    setDraftUrl(value?.url ?? options[0]?.url ?? "");
    setIsEditing(true);
  };

  const handleDoneClick = () => {
    if (options.length === 1) {
      try {
        dispatch(setCustomServerUrl(draftUrl));
      } catch {
        // setCustomServerUrl requires a dev server restart to load
      }
    }
    setIsEditing(false);
  };

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
        onClick={handleEditClick}
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
      <div style={{ padding: "0.5rem" }}>
        {options.length > 1 ? (
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
          </FormItem>
        ) : (
          <FormItem>
            <FormTextInput
              label="URL"
              value={draftUrl}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setDraftUrl(e.target.value);
              }}
            />
          </FormItem>
        )}
        {value?.variables &&
          Object.keys(value.variables).map((key) => {
            if (value.variables?.[key].enum !== undefined) {
              return (
                <FormItem key={key}>
                  <FormSelect
                    label={toLabel(key)}
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
                  label={toLabel(key)}
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.25rem 0.5rem 0.25rem",
          }}
        >
          <button
            type="button"
            style={{
              background: "none",
              border: "none",
              padding: 0,
              color: "var(--ifm-color-primary)",
              cursor: "pointer",
              fontSize: "var(--openapi-explorer-font-size-input)",
              textDecoration: "underline",
            }}
            onClick={() => {
              if (options.length === 1) {
                setDraftUrl(options[0].url);
              } else if (value?.variables) {
                const original = options.find(
                  (s: any) => s.url === value.url
                );
                if (original) {
                  dispatch(setServer(JSON.stringify(original)));
                }
              }
            }}
          >
            Reset to default
          </button>
          <button
            type="button"
            style={{
              background: "var(--ifm-color-emphasis-900)",
              border: "none",
              borderRadius: "var(--ifm-global-radius)",
              color: "var(--ifm-color-emphasis-100)",
              cursor: "pointer",
              padding: "0.2rem 0.5rem",
              fontSize: "var(--openapi-explorer-font-size-input)",
            }}
            onClick={handleDoneClick}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

export default Server;
