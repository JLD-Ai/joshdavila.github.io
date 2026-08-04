# Migration Plan

## Why Jekyll

GitHub Pages builds Jekyll natively. This avoids:
- paid hosting
- external CMS dependencies
- custom deployment infrastructure
- manually editing the same fact on multiple pages

## Safe migration sequence

1. Create a new branch named `structured-site`.
2. Upload this package to that branch.
3. Copy the existing image and video assets into the same relative paths.
4. Preview with GitHub Pages or a local Jekyll environment.
5. Verify every project and external link.
6. Update uncertain records in `_data`.
7. Merge only after the structured build matches or exceeds the live site.

## Files that become obsolete

The old hand-built pages can be archived after migration:
- `index.html`
- `works.html`
- `writing.html`
- `bio.html`
- `support.html`
- individual hand-built project HTML files

Do not delete them before the Jekyll preview works.

## Editing workflow

To add a writing:
1. Add one record to `_data/writings.yml`.
2. Commit.
3. GitHub Pages rebuilds Writing, Timeline, Archive, and relevant CV material.

To add a project:
1. Add a record to `_data/projects.yml`.
2. Add a Markdown file to `_projects`.
3. Add image assets.
4. Commit.

To correct a date or institutional credit:
1. Edit the relevant YAML record.
2. Commit.
3. Every page using that record updates automatically.
