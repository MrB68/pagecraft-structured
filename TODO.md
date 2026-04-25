# Implementation TODO — Nested Pages, Routing & SEO

- [x] Analyze codebase and create plan
- [x] Step 1: Update `src/types/index.ts` — add `parentId` and `seo` to `Page`
- [x] Step 2: Add `getPagePath()` and `normalizePath()` to `src/core/utils.ts`
- [x] Step 3: Update `src/App.tsx` — wildcard route `/site/:siteId/*`
- [x] Step 4: Update `src/pages/PublicSite.tsx` — path matching, SEO, NotFound
- [x] Step 5: Update `src/store/builderStore.ts` — `addPage` with parentId, unique slug, migration
- [x] Step 6: Update `src/pages/site/SitePages.tsx` — use `getPagePath` for links
- [x] Step 7: Update `src/pages/Editor.tsx` — use `getPagePath` for preview links
- [x] Step 8: Update `src/pages/Websites.tsx` — public link to root
- [x] Step 9: Update `src/pages/site/SiteDomain.tsx` — public URL display
- [x] Step 10: Run dev and verify zero errors

All done. Build passes, tests pass.

---

## SitePages.tsx — Hierarchical Page Tree

- [x] Build tree from flat pages using parentId
- [x] Render recursively with indentation (padding-left based on depth)
- [x] Add expand/collapse toggle for parent pages (ChevronRight / ChevronDown)
- [x] Highlight active page derived from `/editor/:siteId/:pageId` route
- [x] Add "Add Child Page" button per page
- [x] Clicking page navigates to editor
- [x] Clean minimal flex-based design
- [x] Maintain expanded state with Set<string>
- [x] Recursive PageTreeNode component
- [x] Add Child Page via NameInputDialog calling addPage(name, parentId)
- [x] Stop propagation on inner buttons
- [x] Reset childDialogParentId on dialog close
- [x] Trim + validate name before submit
- [x] Block delete if page has children
- [x] Memoize tree building with useMemo
- [x] Handle empty pages and missing parents safely

