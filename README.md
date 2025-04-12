Jonathan Ramirez
Cycle 53



# iCAA Central Hub Website

**Table of Contents**

- [Getting Started](#️-getting-started)
- [Contributing](#️-contributing)
- [Development Guidelines](#️-development-guidelines)
- [Quick Tips](#️-quick-tips)
- [Additional Info for iCAA WebTeam Participants](#️-iCAA-collaborators-2025)

## ⭐️ Getting Started

### Prerequisites

1. Install **Node.js** and **npm**: [Download here](https://nodejs.org/en/download).
2. Set up SSH with GitHub: [Generate](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) and [add](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) an SSH key.
3. Install **VSCode**: [Download here](https://code.visualstudio.com/).

### Learning Material

1. Next.js App Router: (https://www.youtube.com/watch?v=ZVnjOPwW4ZA) 
2. React, TailwindCSS, and DaisyUI: (https://www.youtube.com/watch?v=ymGB1lqP1CM)
3. Flexbox fun: https://flexboxfroggy.com/ 
4. Grid skills & more: https://codepip.com/


### Local setup

1. Clone the repository:
   ```bash
   git clone <SSH_URL>
   cd iCAAhub
   ```
2. Download the `.env` file from [Google Drive](https://drive.google.com/drive/folders/15_GC93egcXhEHhzOtKsrMaWhnnrmCjPO?usp=sharing) and place it in the `iCAAhub` folder.
   - If access is restricted, provide your email for access.
   - **Important**: Do not share these credentials or commit them to GitHub.
3. Open the project in VSCode:
   - Open the `iCAAhub` folder in Visual Studio Code.
   - Ensure the terminal in VSCode is set to the root `iCAAhub` folder.
4. Install dependencies and start the development server:
   ```bash
   npm install
   npm run dev
   ```
5. Visit `http://localhost:3000` in your browser to view the app.

---

## ⭐️ Contributing

### Workflow

1. **Switch to the appropriate main branch**:
   ```bash
   git checkout main-icaa
   git pull origin main-icaa
   ```
2. **Create a feature branch**:
   ```bash
   git checkout -b main-icaa/<your-branch-name>
   ```
   > _Replace `<project_name>` with your project name and `<your-branch-name>` with a descriptive name for your work, e.g., `main-icaa-Announcments/update-admin-dashboard`._
3. **Commit changes**:
   ```bash
   git add .
   git commit -m "Description of changes"
   ```
4. **Push your branch**:
   ```bash
   git push origin main-icaa/<your-branch-name>
   ```
   > ‼️ _Always specify the remote and branch to avoid pushing to the wrong branch!_
5. **Open a Pull Request (PR)**:
   - Go to the [Pull Request page](https://github.com/JValentineC/iCAAhub/compare) and create a new PR to merge changes from your feature branch (`main-<project_name>/<feature_name>`) into the main branch for your project (`main-<project_name>`).
   - Provide a detailed description and request a review from a team member.
   - Once they approve your PR, you can merge it into the main branch for your project (`main-<project_name>`).

### Best Practices

- **Code Quality:**

  - Run `npm run prettify` and `npm run lint` before committing changes to format and lint your code.
  - Write meaningful commit messages and commit often.

- **Pull Requests:**
  - Add a detailed description to your PR.
  - Use the "Files Changed" tab on GitHub to add comments explaining your updates.

---

## ⭐️ Development Guidelines

> Learn more about file and folder conventions here: [https://nextjs.org/docs/app/getting-started/project-structure](https://nextjs.org/docs/app/getting-started/project-structure).

### Frontend

1. **File and Folder Conventions**

   - **Pages:** Create front-end pages in `app/<path|slug>/page.tsx`. The file name must be `page.tsx`, and the file path corresponds to the URL slug (the path after the domain name in the browser's URL).
     - Do not modify `app/page.tsx` or `app/layout.tsx` as these are core files.
     - Use the `rafce` VSCode extension to quickly generate consistent React components. This ensures everyone follows the same syntax.
   - **Props:** If a page takes `props` as input, define an `interface` type for props above the function within the same file.

   - **Navigation:** Use `<Link>` instead of the `<a>` tag for client-side navigation. Example:
     ```jsx
     <Link href="/users">Users</Link>
     ```

2. **Components**

   - **Shared Components:** General React components used across the entire site should be placed under the `components/` folder. Do not modify these components unless necessary.
   - **Page-Specific Components:** Components exclusive to a specific page or project (e.g., admin portal, peer learning hub) should be stored within the corresponding project folder, e.g., `admin/components/*.tsx`.
   - **Naming Convention:** The component file name must match the function name inside the file. Use PascalCase (e.g., `CreateAssignmentForm.tsx`).
   - **Client-Side Rendering:** Use `'use client'` only when absolutely necessary. If only part of a component requires client-side rendering, isolate that part into its own component.

3. **Styling**
   - Use [DaisyUI components](https://daisyui.com/components/) to ensure consistent styling. For example, apply `btn` class for buttons or `alert` class for alert modals.
   - For additional customizations, apply Tailwind CSS class names as needed.

### Backend

1. **Routes**

   - **Route Files:** Create API routes in `app/api/<route_name>/route.tsx`. The `route_name` corresponds to the entity or object you're performing CRUD operations on (e.g., `users`).
   - **HTTP Requests:** The `route.tsx` files should contain the HTTP request logic (e.g., `GET`, `POST`, `PUT`, `DELETE`). They should not include data storage or retrieval logic.
   - **Server-Side Data Fetching:** Use `fetch()` for server-side data fetching within these route files.

2. **Database Functions**

   - **Query Files:** Write all database queries related to an entity or object in `lib/query/<object_name>.ts`. For example, `lib/query/users.ts` will contain functions for CRUD operations on the `users` table.
   - **Calling Queries:** These query functions should be called within the corresponding API routes, e.g., `app/api/users/route.tsx`.

3. **Types**
   - **Type Definitions:** Define TypeScript types that correspond to the entities in your database tables in the `types/` folder. The file name should match the route name or object name, e.g., `types/users.ts` for user-related types.

---

## ⭐️ Quick Tips

- Use `npm run` to view available commands.
- Run `npm run prettify` and `npm run lint` before committing to format and lint your code.
- Always pull the latest main branch before starting a new feature branch.
- Ensure you're on a feature branch before making any changes.
- Never commit directly to the main branch.
- Keep PRs small and focused on one feature. Multiple smaller PRs are better than a single overly complicated, unnecessarily large one.
- Commit frequently to avoid bundling unrelated changes or cluttering commit messages.
- Look up solutions and ask for help when needed.

---

## ⭐️ iCAA Collaborators 2025

Use Notion for collaboration and documentation:

- [iCAA Workspace](https://www.notion.so/invite/3922e9f78eb8a1256d8ec7597d2d5df1a0bd5f82): Includes participants, team wikis, Branding Guidelines, etc.
- [Onboarding Checklist](): Start here for setup and orientation.
- _Note: You need to click the "Edit" button at the top-right corner of the Notion page to edit docs. See [How to Edit Notion](./readme-notion-edit.png)._

### Team Branches

Each team has a dedicated branch for collaboration, following this naming convention: `main-iCAA-*`, where `*` represents your team name or your individual name.

**Current Branches**

- [`main-icaa`](https://github.com/JValentineC/iCAAhub/tree/main-icaa) – For alumni or residents.

- [`main-icaa-skills-profile`](https://github.com/JValentineC/iCAAhub/tree/main-icaa-skills-profile) – For skills profile funcionality.

To explore all branches or check their current status, visit the [repository branches page](https://github.com/JValentineC/iCAAhub/branches).