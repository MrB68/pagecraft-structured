# TODO: Template-Unique Sections

## Task
Make the section palette and template preview show only sections that are unique/available to each template.

## Plan

### 1. ✅ Update Types
- **File:** `src/types/index.ts`
- Add `allowedSections: SectionType[]` to `Template` interface
- Add `allowedSections?: SectionType[]` to `Website` interface (so it persists even if template is deleted)

### 2. ✅ Define Allowed Sections per Template
- **File:** `src/templates/index.ts`
- Add `allowedSections` array to each built-in template:
  - `tpl-clo`: `["navbar", "clo-hero", "philosophy", "clo-product-grid", "collections", "value-grid", "newsletter", "clo-footer"]`
  - `tpl-clothing`: `["hero", "product-grid", "cta", "about", "contact", "footer"]`
  - `tpl-business`: `["hero", "features", "cta", "about", "contact", "footer"]`

### 3. ✅ Update Builder Store
- **File:** `src/store/builderStore.ts`
- `createWebsiteFromTemplate`: copy `tpl.allowedSections` into the new `Website`
- `duplicateWebsite`: copy `src.allowedSections` into the duplicated site
- `saveSiteAsTemplate`: derive `allowedSections` from all unique section types used in the site's pages

### 4. ✅ Update Section Palette
- **File:** `src/components/editor/SectionPalette.tsx`
- Add optional `allowedTypes?: SectionType[]` prop
- Filter `SECTION_TYPES` by `allowedTypes` when provided; otherwise show all

### 5. ✅ Update Editor Page
- **File:** `src/pages/Editor.tsx`
- Compute `allowedSectionTypes` for the current site
- Pass `allowedTypes` prop to `SectionPalette` component
- If no `allowedSections` found (legacy site), fall back to all section types

### 6. ✅ Update Templates Page
- **File:** `src/pages/Templates.tsx`
- For each template card, display the available/unique section types as small badge tags under the description

## Status: COMPLETE ✅

