# LoopWork Mobile Application Structure (React Native)

| Field | Value |
| :--- | :--- |
| **App Version** | 1.0.0 |
| **Expo SDK** | 54.0.33 |
| **Last Updated** | 2026-03-27 |
| **Alignment Status** | Aligned with Web (Next.js) Architecture |

## Overview


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
│   ├── landing/          # Application entry point
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

## Version Control & Architectural Evolution

| Date | Version | Action | Description |
| :--- | :--- | :--- | :--- |
| 2026-03-26 | 0.1.0 | Initialization | Initial folder structure created based on Expo SDK 54. |
| 2026-03-27 | 1.0.0 | Alignment | Flattened screen architecture to match Web project. |

---
*Note: This document serves as the ground truth for architectural alignment between the mobile and web platforms. Any major structural changes must be logged here.*
