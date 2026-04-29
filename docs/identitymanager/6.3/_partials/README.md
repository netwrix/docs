# Reusable Content Partials

This directory contains reusable MDX content that can be imported into multiple documentation pages to avoid duplication.

## How to Use

### 1. Import the partial at the top of your MDX file

```mdx
import ContextruleCertification from '@site/docs/identitymanager/current/_partials/contextrule-certification.mdx';
```

### 2. Use the component in your content

```mdx
<ContextruleCertification />
```

## Available Partials

| Partial File | Component Name | Description |
|--------------|----------------|-------------|
| `contextrule-certification.mdx` | `ContextruleCertification` | Information about context rule certification properties |
| `parameterized-role.mdx` | `ParameterizedRole` | Information about parameterized roles |
| `resourcetypemapping-identifier.mdx` | `ResourcetypemappingIdentifier` | Resource type mapping identifier conventions |
| `argumentsexpression.mdx` | `Argumentsexpression` | Arguments expression usage |
| `ignoreHistorization-intro.mdx` | `IgnoreHistorizationIntro` | Ignore historization warning |

## Creating New Partials

1. Create a new `.mdx` file in this directory
2. Use PascalCase for the component name (e.g., `MyNewPartial`)
3. Import it using the `@site` alias:
   ```mdx
   import MyNewPartial from '@site/docs/identitymanager/current/_partials/my-new-partial.mdx';
   ```

## Notes

- Files in `_partials` directory (prefixed with underscore) are not generated as standalone pages
- Always use `.mdx` extension for partials to enable MDX features
- The `@site` alias resolves to the Docusaurus root directory
- Partials can include any valid MDX content: markdown, React components, admonitions, etc.
