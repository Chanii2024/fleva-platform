# FLEVA Platform - AI Coding Agent Instructions

## Project Overview
FLEVA is a React-based student collaboration platform with 6 major feature modules. It uses React Router for navigation, MUI for components, and maintains a centralized theme system. The architecture is page-based with a shared `MainLayout` wrapper.

## Architecture & Key Patterns

### Routing & Layout Structure
- **Layout Wrapper:** [src/layout/MainLayout.jsx](src/layout/MainLayout.jsx) wraps all routes (dark floating navbar + footer)
- **Route Definition:** [src/App.js](src/App.js) centralizes all routing under `<MainLayout>` element
- **All pages nested** within `<MainLayout>` automatically include navbar and footer
- **Add new pages:** Create `.jsx` file in [src/pages/](src/pages/), import in `App.js`, add `<Route>` inside MainLayout

### Theme & Styling
- **Global Theme:** Defined in `App.js` with primary color `#00c4cc` (teal) and background `#f0f2f5`
- **MUI Theme Provider:** Wraps entire app with consistent Material UI styling
- **CSS:** Tailwind (`postcss.config.js`) + Material UI + inline `sx` props (MUI styled system)
- **Naming Convention:** All styling uses MUI `sx` prop consistently across components

### Component Patterns (Page Examples)
Pages follow a consistent structure demonstrated in [src/pages/Home.jsx](src/pages/Home.jsx), [src/pages/AnonymousPosts.jsx](src/pages/AnonymousPosts.jsx), [src/pages/ProblemHub.jsx](src/pages/ProblemHub.jsx):

1. **Data Structure:** Pages define mock data arrays (posts, problems, skills) as local state
2. **Status/Priority Styling:** Use `getStatusStyles()` helper to conditionally style status badges based on value
3. **Grid Layouts:** Heavy use of MUI `Grid`, `Container`, `Stack` for responsive layouts
4. **Import Pattern:** Import needed MUI components + RouterLink at page top

### Feature Modules
- **Anonymous Posts** — User submissions with tags, replies, status tracking (New/Discussed/Forwarded)
- **Problem Hub** — Issue tracking with priority levels, status lifecycle (New→In Review→Resolved)
- **Discussion Rooms** — Organized conversations by category (Batches, Clubs, Projects)
- **Skill Exchange** — Peer learning network (offer/request skills)
- **Notes & Resources** — File sharing (searchable by course/type)
- **Ideas** — Voting-based innovation proposals

Each module is a single page route; no sub-routing or nested states currently.

## Developer Workflows

### Setup & Execution
```bash
npm install          # Install dependencies
npm start            # Dev server (port 3000)
npm test             # Run test suite
npm build            # Production build
```

### Testing Files
- [src/App.test.js](src/App.test.js), [src/setupTests.js](src/setupTests.js) — Use React Testing Library + Jest
- No existing component-level tests; focus on RTL conventions if adding tests

## Code Conventions & Patterns

### File Organization
- `.jsx` for React components (pages), `.js` for App/utilities
- Pages are stateless functional components with mock data
- No API integration yet — all data is hardcoded mock arrays
- No context/Redux — each page manages its own state

### Status & Priority Styling Pattern
Pages define a helper function that returns conditional styles:
```javascript
const getStatusStyles = (status) => {
  switch (status) {
    case "In Review":
      return { color: '#f59e0b', bgcolor: 'rgba(245, 158, 11, 0.1)', borderColor: '...' };
    // ...
  }
};
```
Then use `<Chip sx={getStatusStyles(item.status)} />` for consistent visual states.

### Navigation
- Use `<Link as={RouterLink} to="/">` from MUI + React Router
- Active route detection in `MainLayout` via `useLocation().pathname`

## Integration Points & Dependencies

### External Libraries
- **React Router DOM (v7.9)** — Client-side routing
- **Material UI (v7.3)** — UI components, icons, theme system
- **Emotion** — CSS-in-JS (MUI dependency)
- **Tailwind CSS** — PostCSS processing for utility classes

### No Current Backend
- **Mock Data Only** — All pages have hardcoded arrays
- **Next Step:** Replace mock data with API calls (consider adding `fetch` or `axios`)
- **State Management:** No Context/Redux; add when API integration begins

## Critical Files by Function
- **[src/App.js](src/App.js)** — Theme config + routing entry point
- **[src/layout/MainLayout.jsx](src/layout/MainLayout.jsx)** — Navbar/footer wrapper (224 lines, carefully styled)
- **[src/pages/Home.jsx](src/pages/Home.jsx)** — Hero/landing page pattern example
- **[src/index.js](src/index.js)** — React DOM render point
- **[package.json](package.json)** — Dependencies and scripts

## When Adding Features
1. **New page?** → Create `src/pages/FeatureName.jsx`, add route in `App.js`, add navbar link in `MainLayout.jsx`
2. **New status state?** → Define in page data, add case to `getStatusStyles()` helper
3. **Styling changes?** → Modify theme in `App.js` or use MUI `sx` prop; avoid inline CSS
4. **API integration?** → Replace mock data with `fetch()` or `axios`; consider adding loading/error states

## Testing & Debugging
- Run tests with `npm test` (watch mode by default)
- Dev server: `npm start` (localhost:3000)
- ESLint config extends `react-app` standard; check console for warnings
