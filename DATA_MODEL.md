# Master Career Data Model

The website is generated from structured YAML records stored under `_data`.

## Record types

### Profile
One canonical identity record:
- names and aliases
- contact
- short and long biographies
- education
- military wording
- archive counts
- central research question

### Project
One record per body of work:
- stable ID and slug
- canonical and alternate titles
- status
- priority
- dates
- themes
- media
- summary
- central question
- hero image
- external links
- verification flags
- missing information

### Writing
One record per article, essay, review, or manifesto:
- title
- date and year
- publication platform
- type
- themes
- summary
- URL
- image
- featured status

### Exhibition
One record per exhibition or feature:
- title
- dates
- location
- venue
- institution
- relationship to institution
- event type
- role
- related project
- verification status

### Experience
Programs, testing, partnerships, and professional roles.

### Recognition
Awards, interviews, press, and grants.

## Evidence status

Use explicit status fields instead of silently treating uncertain claims as settled:

- `verified`
- `needs verification`
- `approximate`
- `approved wording needed`
- `needs assets`
- `private`
- `public`

## Update rule

Change the YAML record first. Do not manually edit generated lists on Works,
Writing, Timeline, Archive, or Bio pages.
