<div align="center">

<img src="public/Favicon%20Face.png" alt="Sriram Saravanan" width="110" />

# Sriram Saravanan — Portfolio

**Software Developer · Full-Stack & Applied AI**

Software Developer at **AJSolutions** · Co-builder of **Snaptrace (Unit3A)** · B.Tech CSE (AI & Robotics), **VIT Chennai**

[![Live Site](https://img.shields.io/badge/Live-sriram27102003.github.io%2FPortfolio-476556?style=for-the-badge)](https://sriram27102003.github.io/Portfolio/)
[![Resume](https://img.shields.io/badge/Resume-PDF-31493d?style=for-the-badge)](https://sriram27102003.github.io/Portfolio/Sriram%20Resume%20Revised.pdf)

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-222?logo=github&logoColor=white)](https://pages.github.com/)

</div>

---

## About

This is the source for my personal portfolio: a single-page site covering my experience, projects, skills, and education, with a downloadable resume. It's built with React and Vite, uses hand-written CSS with no UI framework, and is deployed to GitHub Pages.

## Sections

Each section has its own shareable link:

| Section | Link | What's inside |
| --- | --- | --- |
| About | [`#About`](https://sriram27102003.github.io/Portfolio/#About) | Background, focus areas, and specialisations |
| Experience | [`#Experience`](https://sriram27102003.github.io/Portfolio/#Experience) | AJSolutions, Snaptrace (Unit3A), VIEntityData Technologies |
| Projects | [`#Projects`](https://sriram27102003.github.io/Portfolio/#Projects) | Snaptrace, HRMS for Annapoorna Mithai, Energy & Wastage Tracker, and more |
| Skills | [`#Skills`](https://sriram27102003.github.io/Portfolio/#Skills) | Languages, frontend, backend, cloud, AI/ML, robotics |
| Education | [`#Education`](https://sriram27102003.github.io/Portfolio/#Education) | B.Tech CSE (AI & Robotics) at VIT Chennai, CBSE schooling, languages |
| Contact | [`#Contact`](https://sriram27102003.github.io/Portfolio/#Contact) | Email, LinkedIn, GitHub, phone, resume |

## Featured Work

- **Snaptrace**: AI wedding photo discovery by Unit3A. Guests scan a QR code, take a selfie, and get their photos instantly. Built with AWS Rekognition, Cloudflare R2, Node.js, and Firebase.
- **HRMS for Annapoorna Mithai**: payroll, biometric attendance, and appraisals on Supabase (PostgreSQL), with an eSSL biometric relay on a VPS and face-api.js face-recognition attendance.
- **Energy & Wastage Tracking System**: a MySQL-backed capture-to-dashboard pipeline for an MSME client.
- **Lung Cancer Prediction**: CNN combined with dynamic hypergraph learning. [Repo](https://github.com/Sriram27102003/Lung-Cancer-Prediction)
- **Autonomous Drone Human Tracking**: YOLOv3 and Deep SORT on a Raspberry Pi via ROS. [Repo](https://github.com/Sriram27102003/Autonomous-Drone-Target-Tracking-System)

## Site Features

- **Responsive layout.** On phones, roles collapse behind "Show details", projects become a swipeable carousel, and spacing is tightened.
- **Shareable section links.** The URL hash follows your scroll, and back/forward moves between sections.
- **Resume download** from the header, hero, contact section, and footer.
- **SEO.** Open Graph tags, a canonical URL, and JSON-LD `Person` structured data.
- **Accessibility.** Skip link, visible keyboard focus, ARIA state on the mobile menu, and `prefers-reduced-motion` support.
- **Print stylesheet**, so the page prints as a clean CV.

## Tech Stack

| Layer | Tools |
| --- | --- |
| Framework | React 19 |
| Build | Vite 7 |
| Styling | Hand-written CSS with design tokens (no UI framework) |
| Fonts | Newsreader, Inter, JetBrains Mono (Google Fonts) |
| Hosting | GitHub Pages via [`gh-pages`](https://www.npmjs.com/package/gh-pages) |

## Project Structure

```
.
├── index.html          # Meta tags, Open Graph, JSON-LD, fonts
├── public/             # Resume PDF, profile photo, favicon, logos
├── src/
│   ├── App.jsx         # All sections, navigation, section-link logic
│   ├── App.css         # Component styles, responsive, print rules
│   ├── index.css       # Design tokens and global reset
│   └── main.jsx        # React entry point
└── vite.config.js      # base: '/Portfolio/' for GitHub Pages
```

## Run Locally

**Prerequisite:** Node.js 18 or later.

```bash
git clone https://github.com/Sriram27102003/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Then open http://localhost:5173/Portfolio/.

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the local dev server with hot reload |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Build and publish `dist/` to the `gh-pages` branch |

## Deployment

The site is served from the **`gh-pages`** branch. To publish changes:

```bash
git push origin main
npm run deploy
```

GitHub Pages picks up the new build within a minute or two.

## Updating Content

- **Resume:** replace `public/Sriram Resume Revised.pdf` and keep the same filename, or change `RESUME_URL` in `src/App.jsx`.
- **Profile photo or logos:** replace the files in `public/`, keeping the same names.
- **Text, experience, projects, skills:** edit `src/App.jsx`.

## Contact

- **Email:** [winsriram962@gmail.com](mailto:winsriram962@gmail.com)
- **LinkedIn:** [s-sriram-728945249](https://linkedin.com/in/s-sriram-728945249/)
- **GitHub:** [Sriram27102003](https://github.com/Sriram27102003)

---

<div align="center">

© Sriram Saravanan. All rights reserved.

</div>
