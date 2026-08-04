# JoshDavila.Art — Launch QA patch

This patch is for the `structured-site` branch only. It does not deploy the site.

## What it fixes

- adds a safe GitHub Actions Jekyll build check with no deployment step;
- preserves the structured Jekyll architecture;
- adds redirects from the current `.html` URLs to the new clean URLs;
- adds a useful 404 page, robots file, and sitemap;
- improves keyboard focus, reduced-motion support, mobile layout, navigation state, and image loading;
- prevents two records marked `needs verification` from appearing in the public CV and timeline;
- changes the archive description from “62 philosophical writings” to the more accurate “62 distinct intellectual works”;
- humanizes machine-readable project status labels.

## Domain safety

The existing `CNAME` file is already correct and contains:

`joshdavila.art`

Do not delete or replace it. GitHub notes that the custom domain must also remain configured in repository Settings → Pages; the CNAME file alone does not control that setting.

## Manual deletion required

After uploading this patch, delete the five root-level duplicates listed in:

`DELETE_FROM_STRUCTURED_SITE.txt`

## Build check

After committing the patch:

1. Open the repository’s **Actions** tab.
2. Open **Test structured Jekyll site**.
3. Confirm the workflow ran on `structured-site`.
4. A green check means Jekyll built successfully.
5. The workflow uploads `_site` as an artifact but contains no deployment job.

## Launch gates still open

Do not merge into `main` yet unless these are resolved:

1. The public writings data currently contains fewer records than the archive’s stated count of ten mature AI-era writings. Reconcile this during the writing audit.
2. Confirm the preferred public wording for participation in private DALL-E 3 testing.
3. Verify the relationship descriptions for 404 Arts Foundation and The Round before setting their `public` values to `true`.
4. Review the generated site visually after the build succeeds.
