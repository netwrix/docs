// Stand-in for @theme/SearchBar in DOCS_PRIVATE_BUILD builds, where the
// Algolia search theme is not loaded. See docusaurus.config.js.
export default function NullSearchBar() {
  return null;
}
