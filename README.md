# 🧠 Suvrodeb Portfolio (Next.js 15)

A **modern, fully responsive developer portfolio** built with **Next.js 15**, **React 19**, **Tailwind CSS 4**, and **TypeScript**.  
This project showcases my **skills**, **projects**, and **blogs** with interactive animations, a CMS-style blog editor, and an elegant UI powered by **MUI**, **Framer Motion**, and more.

---

## 🚀 Tech Stack

| Category               | Technologies                                            |
| ---------------------- | ------------------------------------------------------- |
| **Frontend Framework** | Next.js 15, React 19                                    |
| **Styling**            | Tailwind CSS 4, Emotion, clsx, class-variance-authority |
| **Animations**         | Framer Motion, AOS, Lottie                              |
| **State Management**   | Redux Toolkit, React Redux                              |
| **Form Handling**      | React Hook Form                                         |
| **Rich Text Editing**  | Jodit React                                             |
| **Notifications**      | Notistack, Sonner                                       |
| **Icons & UI**         | Lucide React, MUI Icons                                 |
| **Utilities**          | jwt-decode, tailwind-merge, react-simple-typewriter     |
| **Type Checking**      | TypeScript                                              |
| **Linting**            | ESLint, eslint-config-next                              |

---

## 💡 Why These Packages

### 🧩 Core Framework

- **Next.js 15** → For optimized SSR, static generation, and routing.
- **React 19** → Latest React features and concurrent rendering.

### 🎨 Styling & UI

- **Tailwind CSS 4** → Modern utility-first CSS framework.
- **Emotion + Styled** → Component-level dynamic styling.
- **MUI** → Ready-to-use Material Design components.
- **Lucide React** → Lightweight, clean SVG icon set.

### ⚙️ State & Forms

- **Redux Toolkit** → Efficient global state management.
- **React Hook Form** → Lightweight form validation and handling.

### 📝 Blog Editing & Content

- **Jodit React** → Feature-rich WYSIWYG blog editor.
- **jwt-decode** → Decode tokens for user authentication.

### ✨ Animations

- **Framer Motion** → Powerful and fluid UI animations.
- **AOS** → Animate on scroll.
- **Lottie React** → JSON-based vector animations.

### 🔔 Notifications

- **Sonner** → Elegant toast notifications.
- **Notistack** → Snackbars with queueing system.

### 🧠 Utilities

- **class-variance-authority (cva)** → Variant-based reusable styles.
- **clsx** → Conditional class joining.
- **tailwind-merge** → Merge conflicting Tailwind classes.
- **react-simple-typewriter** → Typewriter-style text effects.

---

## 🧱 Folder Structure

```bash
suvrodeb-portfolio-next/
│
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Global layout configuration
│   │   ├── page.tsx               # Homepage
│   │   ├── blog/                  # Blog pages & details
│   │   ├── dashboard/             # Admin dashboard for blog management
│   │   └── api/                   # API routes (Next.js route handlers)
│   │
│   ├── components/
│   │   ├── modules/               # Feature-based components
│   │   │   ├── Blog/              # Blog form, editor, and views
│   │   │   ├── Shared/            # Drawer, header, footer, buttons
│   │   │   └── UI/                # UI elements (cards, badges, inputs)
│   │   └── utils/                 # Utility functions (e.g., image compression)
│   │
│   ├── redux/
│   │   ├── apis/                  # RTK Query baseApi and endpoints
│   │   └── slices/                # Redux slices (blogs, users, etc.)
│   │
│   ├── styles/                    # Global and module-level CSS
│   └── types/                     # TypeScript types & interfaces
│
├── public/                        # Static assets (images, icons)
├── .eslintrc.json                 # ESLint configuration
├── tailwind.config.js             # Tailwind setup
├── tsconfig.json                  # TypeScript configuration
├── package.json
└── README.md
```
