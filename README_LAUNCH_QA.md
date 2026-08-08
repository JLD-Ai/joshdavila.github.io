# JoshDavila.Art — Launch QA patch

This patch is for the `structured-site` branch only. It does not deploy the site.

## What it fixes

- adds a safe GitHub Actions Jekyll build check with no deployment step;
- preserves the structured Jekyll architecture;
- adds redirects from the current `.html` URLs to the new clean URLs;
- adds a useful 404 page, robots file, and sitemap;
- improves keyboard focus, reduced-motion support, mobile layout, navigation state, and image loading;
- keeps records marked private or `needs verification` out of generated public pages;
- reconciles the ten-work mature AI corpus as a subset of twelve selected public writings;
- changes the archive description from “62 philosophical writings” to the more accurate “62 distinct intellectual works”;
- humanizes machine-readable project status labels.

## Domain safety

The existing `CNAME` file is already correct and contains:

`joshdavila.art`

Do not delete or replace it. GitHub notes that the custom domain must also remain configured in repository Settings → Pages; the CNAME file alone does not control that setting.

## Build check

After committing the patch:

1. Open the repository’s **Actions** tab.
2. Open **Test structured Jekyll site**.
3. Confirm the workflow ran on `structured-site`.
4. A green check means Jekyll built successfully.
5. The workflow uploads `_site` as an artifact but contains no deployment job.

## Claim gates resolved

- OpenAI participation is recorded as completed DALL-E 3 closed beta testing.
- 404 Arts is recorded as an NFT project and publication founded by Patrick Amadon, with Josh Davila included as a featured artist.
- THE ROUND is recorded as a Threads-native publication, with Josh Davila included as a featured artist.

## Visual QA completed

- Reviewed the generated site at representative desktop and 390 px mobile widths.
- Covered Home, Works, a flagship project, Writing, Research, Bio, Support, Timeline, Archive, and 404.
- Confirmed responsive navigation, no horizontal overflow, public-record filtering, metadata, and image loading.
- Corrected quoted Writing image alt text and verified the generated HTML from commit `d98250c`.
- Verified the exact Pages artifact digest: `sha256:ae24dbee17a92c6ad26fdb4446c2aa9460d4071ee64742952f3dedb4f4aea7ad`.
