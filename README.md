This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# Trenton Butler's Portfolio

## Overview
This is the official portfolio website for Trenton Butler. The site showcases projects, professional experience, and contact information in an interactive and visually appealing way. It is built using **Next.js, TypeScript, TailwindCSS, and React**.

## Features
- **Landing Page with Water Wave Effect**: Uses `react-water-wave` for an interactive water effect.
- **Project Showcase**: Displays featured projects with links to GitHub repositories.
- **About Section**: Provides background information on education and work experience.
- **Contact Section**: Includes LinkedIn, GitHub, phone number, and email.
- **Custom UI Components**:
  - **Fancy Button**: Styled gradient button with hover animations.
  - **Magnetic Wrapper**: Uses `framer-motion` for smooth, interactive hover effects.
  - **Live Clock**: Displays real-time clock information.
  - **Grain Effect**: Provides a subtle background noise effect for a polished UI.
  - **Smooth Scrolling Navigation**

## Technologies Used
- **Frontend**:
  - Next.js
  - React
  - TypeScript
  - TailwindCSS
  - Framer Motion
  - Next/Image (Optimized image loading)
- **Fonts**:
  - Bricolage Grotesque
  - Oswald
  - Custom Pixel Font
- **Deployment**: GitHub Pages / Vercel

## Installation & Setup
To run this portfolio locally:

### 1. Clone the Repository
```sh
 git clone https://github.com/TDBgit/Portfolio_Site.git
 cd Portfolio_Site
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Run the Development Server
```sh
npm run dev
```
Then, open `http://localhost:3000` in your browser.

## Sections
### **Landing Page**
- Animated introduction with a **Water Wave effect**
- Floating magnetic buttons for **GitHub** and **LinkedIn**
- Large, gradient text links for navigation

### **Projects Section**
Displays featured projects with images, GitHub links, and brief descriptions.
- **Analyzing Retail Orders** *(Python, SQL)*
- **Comprehensive Sales Dashboard** *(SQL, Tableau, Excel)*
- **Car Price Prediction (ML)** *(Python, Linear Regression)*
- **Hiring Portal** *(Java, SpringBoot, MongoDB, React)*
- **Asteroids Game** *(C++)*
- **Cargo Tracking** *(VueJS, Google Maps API)*
- **Portfolio Site** *(React, Next.js, TailwindCSS)*

### **About Section**
Includes:
- **Education**: Appalachian State University
- **Internship & Work Experience**: Florida Blue, Rumple Memorial
- **Personal Bio**

### **Contact Section**
Displays contact information with interactive cards.
- **Email**: [trentondavisbutler@gmail.com](mailto:trentondavisbutler@gmail.com)
- **Phone**: (904) 831-6353
- **GitHub**: [TDBgit](https://github.com/TDBgit)
- **LinkedIn**: [Trenton Butler](http://www.linkedin.com/in/trent-butler-0b1b49345)

## Deployment
The portfolio is deployed on **GitHub Pages** or **Vercel**.
To deploy manually:
```sh
npm run build
npm run start
```
For Vercel:
```sh
vercel
```

## Future Improvements
- Dark mode toggle
- More project filtering options
- Improved animations

## License
This project is open-source under the **MIT License**.

---
**Created by Trenton Butler**
