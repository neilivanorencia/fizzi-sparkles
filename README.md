<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD041 -->
<div align="center">
  <img src="src/app/icon.svg" alt="Fizzi Sparkles" height="100" />
  <h1 align="center">Fizzi Sparkles</h1>
  <p align="center">A Brighter Burst of Flavor</p>
</div>

<div align="center">
  <br />
  <img src="https://i.imgur.com/hpxt2ZL.png" alt="Fizzi Sparkles" />
  <br /><br />
  <div>
    <img
      alt="GSAP"
      src="https://img.shields.io/badge/GSAP-%230AE448?style=flat&logo=GSAP&logoColor=white"
    />
    <img
      alt="Next.js"
      src="https://img.shields.io/badge/Next.js-%23000000?logo=nextdotjs&logoColor=white"
    />
    <img
      alt="Prismic"
      src="https://img.shields.io/badge/Prismic-%235163BA?style=flat&logo=Prismic&logoColor=white"
    />
    <img
      alt="React"
      src="https://img.shields.io/badge/React-%230088CC?logo=react&logoColor=white"
    />
    <img
      alt="Tailwind CSS"
      src="https://img.shields.io/badge/Tailwind%20CSS-%2306B6D4?logo=tailwindcss&logoColor=white"
    />
    <img
      alt="Three.js"
      src="https://img.shields.io/badge/Three.js-%23000000?style=flat&logo=Three.js&logoColor=white"
    />
    <img
      alt="Typescript"
      src="https://img.shields.io/badge/Typescript-%233178C6?logo=typescript&logoColor=white"
    />
  </div>
</div>
<br />

Fizzi Sparkles is a conceptual, single-page website for a fictional soda brand, designed to explore the combination of 3D graphics and advanced web animations in a modern product showcase. The site builds an interactive experience by means of a sequence of scroll-based scenes that blends interface components with interactive 3D models. Built with Next.js and managed through Prismic, it demonstrates the potential of a headless CMS to drive complex, animated, and visual web experiences.

## ✨ Features

- **3D Hero Section**: Greets users with a dynamic intro animation featuring multiple floating 3D soda cans. As the user scrolls, the scene transitions into a new arrangement.
- **Interactive 3D Product Carousel**: Features an interactive carousel where users can cycle through different product flavors. Each selection triggers a GSAP timeline that spins the central 3D can model and smoothly transitions the interface colors and text.
- **Dynamic Text Animation** - Uses a component that animate headlines on a word-by-word or character-by-character basis, adding a polished and professional feel to content reveals.
- **Slice-Based Architecture with Prismic**: The entire page is composed of modular, reusable "Slices" managed in Prismic. This allows for content management and easy reordering of complex, animated sections without touching the code.
- **Responsive Design**: Optimized for various devices to ensure usability and aesthetic appeal on all screen sizes.

## 💻 Technology Stack

- **GSAP** - A JavaScript animation library used for creating complex, high-performance animation timelines.
- **Next.js** - A powerful React framework used for building fast and optimized web applications.
- **Prismic** - A headless CMS that enables content creators to manage website content through modular, reusable slices.
- **React** - A JavaScript library made by Facebook primarily used for building user interfaces for web applications.
- **Tailwind CSS** - A utility-first CSS framework that allows for quick and flexible styling using predefined classes.
- **Three.js** - A JavaScript library used to create and display 3D graphics and animations directly in a web browser.
- **Typescript** - A strongly typed programming language that builds on JavaScript by adding static types.

## 📂 Project Structure

<details>
  <summary>See project structure here</summary>

```plaintext
└── 📁.husky
    ├── pre-commit
└── 📁.vscode
    ├── settings.json
└── 📁customtypes
    └── 📁page
        ├── index.json
        ├── mocks.json
└── 📁public
    └── 📁hdr
        ├── field.hdr
        ├── lobby.hdr
    └── 📁labels
        ├── cherry.png
        ├── grape.png
        ├── lemon-lime.png
        ├── strawberry.png
        ├── watermelon.png
    └── 📁models
        ├── soda-can.bin
        ├── soda-can.gltf
└── 📁src
    └── 📁app
        └── 📁[uid]
            ├── page.tsx
        └── 📁api
            └── 📁exit-preview
                ├── route.ts
            └── 📁preview
                ├── route.ts
            └── 📁revalidate
                ├── route.ts
        └── 📁slice-simulator
            ├── page.tsx
        ├── globals.css
        ├── icon.svg
        ├── layout.tsx
        ├── page.tsx
    └── 📁components
        ├── arrow-icon.tsx
        ├── bounded.tsx
        ├── bubbles.tsx
        ├── button.tsx
        ├── fizzi-logo.tsx
        ├── floating-can.tsx
        ├── footer.tsx
        ├── header.tsx
        ├── soda-can.tsx
        ├── text-splitter.tsx
        ├── view-canvas.tsx
        ├── wavy-circles.tsx
    └── 📁hooks
        ├── use-media-query.ts
        ├── use-store.ts
    └── 📁slices
        └── 📁Carousel
            ├── index.tsx
            ├── mocks.json
            ├── model.json
            ├── screenshot-default.png
        └── 📁Grid
            ├── index.tsx
            ├── mocks.json
            ├── model.json
            ├── scene.tsx
            ├── screenshot-default.png
        └── 📁Hero
            ├── index.tsx
            ├── mocks.json
            ├── model.json
            ├── scene.tsx
            ├── screenshot-default.png
        └── 📁HugeText
            ├── index.tsx
            ├── mocks.json
            ├── model.json
            ├── screenshot-default.png
        └── 📁SkyDive
            ├── index.tsx
            ├── mocks.json
            ├── model.json
            ├── scene.tsx
            ├── screenshot-default.png
        ├── index.ts
    ├── prismicio.ts
├── .gitignore
├── .prettierignore
├── .prettierrc
├── eslint.config.mjs
├── LICENSE
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── prismicio-types.d.ts
├── README.md
├── slicemachine.config.json
└── tsconfig.json
```

</details>
