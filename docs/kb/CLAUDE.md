# KB Articles

KB articles live in `docs/kb/`. When writing or editing KB articles, follow `kb_style_guide.md` at the repo root for all style decisions.

## Folder Organization

KB articles live in `docs/kb/<product>/`. Some product folders use category subfolders (e.g., `docs/kb/privilegesecure/troubleshooting-and-errors/`); others drop articles directly in the product folder (e.g., `docs/kb/pingcastle/`). Each folder that contains articles has a `0-images/` subfolder for that article's images.

Never manually copy KB articles into versioned product folders — the KB copy script handles that at build time.

### Adding a New Article

Check whether the target product folder has category subfolders. If it does, place the article in the most appropriate subfolder. If the product folder contains no subfolders, place the article directly in it. Store the article's images in `0-images/` alongside the article, creating the folder if it doesn't exist.

### Moving an Article

After moving any article, search the repo for links pointing to the old file path and update them. The build is configured to throw on broken links, so stale references will cause build errors.

#### Within the same product folder

When moving an article between folders in the same product (e.g., from `docs/kb/privilegesecure/` to `docs/kb/privilegesecure/troubleshooting-and-errors/`):

1. Move the `.md` file to the target folder.
2. Move the article's images to the `0-images/` folder alongside its new location.
3. Update all image path references inside the article to match the new path.
4. Update any links to the article in other files to use the new path.

The `products` frontmatter field does not need to change.

#### To a different product folder

When moving an article to a different product (e.g., from `docs/kb/1secure/` to `docs/kb/privilegesecure/troubleshooting-and-errors/`):

1. Move the `.md` file to the target folder.
2. Move the article's images to the new product's `0-images/` folder (at the same level as the article).
3. Update all image path references inside the article.
4. Update any links to the article in other files to use the new path.
5. Update the `products` frontmatter field — the article now belongs to a different product.

### Creating a New Category Folder

If no suitable category subfolder exists for a product:

1. Create the folder under `docs/kb/<product>/` using a lowercase, hyphenated name (e.g., `troubleshooting-and-errors`).
2. Add a `_category_.json` file. Use `position: 999` to place the category last in the sidebar, or set a lower number to control its position relative to other category folders:

```json
{
  "label": "Troubleshooting and Errors",
  "position": 999,
  "collapsed": true,
  "collapsible": true
}
```

3. Place the article in the new folder and create a `0-images/` subfolder for its images.

## Conflicts with docs/CLAUDE.md

Two rules in `docs/CLAUDE.md` do NOT apply to KB articles:

- **Contractions** — write out in full (do not, cannot, you will)
- **Heading case** — title case (not sentence case)
