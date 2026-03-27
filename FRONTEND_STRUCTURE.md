# LoopWork Mobile Application Structure (React Native)

Aligned with the Web (Next.js) structure.

## Directory Structure

```text
src/
├── components/
├── navigation/
├── screens/
│   ├── admin/            # Grouped admin modules
│   │   ├── manager-controls/
│   │   └── super-admin/
│   ├── address-book/
│   ├── appeasy/
│   ├── chatzoom/
│   ├── dashboard/
│   ├── docmanagement/
│   ├── formflow/
│   ├── information/
│   ├── inventorymanagement/
│   ├── login/
│   ├── messaging/
│   ├── minutes-of-meeting/
│   ├── project-manager/
│   ├── questionnaire/
│   ├── schedule/
│   ├── settings/
│   ├── timecard/
│   ├── todo-list/
│   └── user-directory/
└── utils/
```

## Screen Folder Pattern

```text
ScreenFolderName/
├── index.tsx      # Main Component
├── styles.ts     # External Styles
├── components/    # Screen-specific sub-components
└── hooks/         # Screen-specific hooks
```
