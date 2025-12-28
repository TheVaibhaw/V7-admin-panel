# v7 Admin Panel

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.x-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC?style=for-the-badge&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A production-ready admin panel built with modern web technologies**

[Live Demo](#) • [Documentation](#) • [Report Bug](../../issues) • [Request Feature](../../issues)

</div>


---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Available Scripts](#-available-scripts)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 📖 About

**v7 Admin Panel** is a professional, production-ready admin dashboard template built with the latest web technologies. It features a modern, responsive design with smooth animations, comprehensive SEO optimization, and a clean, maintainable codebase.

**Built by:** [Vaibhaw Kumar Parashar](https://vaibhawkumarparashar.in)  
**Prefix:** v7_  
**License:** MIT

---

## ✨ Features

### Core Features
- ✅ **Modern Stack** - Next.js 15 with App Router, TypeScript, Tailwind CSS
- ✅ **Beautiful UI** - Professional design with custom color palette
- ✅ **Smooth Animations** - Framer Motion for delightful user experience
- ✅ **State Management** - Zustand for lightweight, efficient state management
- ✅ **Icon Library** - Lucide React for consistent, beautiful icons

### Design & UX
- 🎨 **Custom Color Palette** - Primary (#0F2854), Secondary (#1C4D8D)
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ✨ **Smooth Transitions** - Page transitions and micro-animations
- 🌙 **Modern Design** - Clean, professional admin panel interface

### Technical Excellence
- 🔒 **Type-Safe** - Full TypeScript implementation
- ♿ **Accessible** - ARIA labels, keyboard navigation, screen reader support
- 🚀 **SEO Optimized** - Meta tags, Open Graph, Twitter cards
- 📊 **Performance** - Optimized builds, code splitting, lazy loading
- 🧪 **Clean Code** - No unused code, no console warnings, professional structure

### Components
- 📦 **Reusable UI Components** - Button, Card, Input, Modal, Table
- 🎯 **Layout System** - Responsive Sidebar, Navbar, MainLayout
- 📈 **Dashboard Widgets** - Stats cards, activity feed, data tables
- 🔐 **Auth Pages** - Login and registration with form validation

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 15.x | React framework with App Router |
| **React** | 19.x | UI library |
| **TypeScript** | 5.x | Type safety |
| **Tailwind CSS** | 3.x | Utility-first CSS framework |
| **Framer Motion** | 11.x | Animation library |
| **Zustand** | 4.x | State management |
| **Lucide React** | Latest | Icon library |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** or **yarn** or **pnpm**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/v7-admin-panel.git
   cd v7-admin-panel
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📂 Project Structure

```
v7-admin-panel/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Authentication pages
│   │   ├── login/               # Login page
│   │   └── register/            # Registration page
│   ├── (dashboard)/             # Dashboard pages
│   │   ├── layout.tsx           # Dashboard layout
│   │   └── page.tsx             # Dashboard home page
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles
│   └── page.tsx                 # Root page (redirects)
│
├── components/                   # React components
│   ├── layouts/                 # Layout components
│   │   ├── Sidebar.tsx          # Collapsible sidebar navigation
│   │   ├── Navbar.tsx           # Top navigation bar
│   │   └── MainLayout.tsx       # Main layout wrapper
│   ├── ui/                      # Reusable UI components
│   │   ├── Button.tsx           # Button with variants
│   │   ├── Card.tsx             # Card component system
│   │   ├── Input.tsx            # Form input component
│   │   ├── Modal.tsx            # Accessible modal
│   │   └── Table.tsx            # Responsive table
│   └── dashboard/               # Dashboard-specific components
│       ├── StatsCard.tsx        # Statistics display card
│       ├── RecentActivity.tsx   # Activity feed
│       └── DataTable.tsx        # Data table display
│
├── hooks/                        # Custom React hooks
│   ├── useMediaQuery.ts         # Responsive design hook
│   └── useSidebar.ts            # Sidebar state hook
│
├── lib/                          # Utilities and helpers
│   ├── store.ts                 # Zustand store
│   └── utils.ts                 # Utility functions
│
├── types/                        # TypeScript type definitions
│   └── index.ts                 # Shared types and interfaces
│
├── public/                       # Static assets
│
├── .gitignore                    # Git ignore file
├── tailwind.config.ts           # Tailwind configuration
├── next.config.ts               # Next.js configuration
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Dependencies and scripts
├── README.md                    # This file
├── LICENSE                      # MIT License
└── CONTRIBUTING.md              # Contributing guidelines
```

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (http://localhost:3000) |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality |

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy your Next.js app:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy with Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and deploy
   - Your app will be live in minutes!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Deploy to Netlify

1. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

### Deploy to Other Platforms

This Next.js app can be deployed to:
- **AWS Amplify**
- **Railway**
- **Render**
- **DigitalOcean App Platform**
- **Cloudflare Pages**

---

## 🎯 Key Features Breakdown

### Responsive Sidebar
- Collapsible navigation with smooth animations
- Auto-collapse on mobile devices
- Active route highlighting
- User profile section

### Dashboard Overview
- **Stats Cards** - Display key metrics with trend indicators
- **Recent Activity** - Timeline of user actions
- **Data Table** - Sortable, responsive product/data display
- **Smooth Animations** - Staggered entrance animations

### Authentication Pages
- **Login** - Form with email/password validation
- **Register** - Multi-field form with terms acceptance
- **Gradient Backgrounds** - Beautiful auth page designs

### UI Components
All components include:
- TypeScript type definitions
- Accessibility features (ARIA)
- Responsive design
- Hover and focus states
- Loading states where applicable

---

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting a PR.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📧 Contact

**Vaibhaw Kumar Parashar**

- Website: [https://vaibhawkumarparashar.in](https://vaibhawkumarparashar.in)
- GitHub: [@vaibhawkp](https://github.com/vaibhawkp)
- Email: contact@vaibhawkumarparashar.in

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide](https://lucide.dev/) - Beautiful icon library
- [Zustand](https://zustand-demo.pmnd.rs/) - State management

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

Built with ❤️ by [Vaibhaw Kumar Parashar](https://vaibhawkumarparashar.in)

</div>
