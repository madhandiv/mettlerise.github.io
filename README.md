# MettleRise Consulting

Official website for MettleRise Consulting - a leading software development and training company based in Vaniyampadi, Tamilnadu, India.

**Live Site:** [https://mettlerise.github.io](https://mettlerise.github.io)

## About MettleRise

MettleRise Consulting delivers professional software development services and comprehensive training programs for aspiring tech professionals. We bridge the gap between academic learning and industry requirements.

### Our Services

- **Software Development & Consulting**: Custom web and mobile applications, enterprise solutions, cloud migration, and technical consulting
- **Training & Internships**: Industry-aligned courses in Full Stack Development, Python, Java Spring Boot, React Native, and DevOps

## Technology Stack

- **Framework**: [Astro](https://astro.build) - Modern static site generator
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) + [daisyUI](https://daisyui.com)
- **Font**: [Inter](https://fonts.google.com/specimen/Inter)
- **Content**: Markdown-based with Astro Content Collections
- **Deployment**: GitHub Pages with automated deployment

## Project Structure

```text
/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/                      # Static assets
├── src/
│   ├── components/
│   │   ├── Header.astro        # Site navigation
│   │   └── Footer.astro        # Site footer
│   ├── content/
│   │   ├── config.ts           # Content collections schema
│   │   └── courses/            # Course markdown files
│   ├── layouts/
│   │   └── BaseLayout.astro    # Base page template
│   ├── pages/
│   │   ├── index.astro         # Homepage
│   │   ├── training.astro      # Training catalog
│   │   ├── training/
│   │   │   └── [slug].astro    # Dynamic course pages
│   │   └── about.astro         # About us page
│   ├── styles/
│   │   └── global.css          # Global styles
│   └── config.ts               # Site configuration
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/mettlerise/mettlerise.github.io.git
cd mettlerise.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

## Development Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at localhost:4321 |
| `npm run build` | Build production site to ./dist/ |
| `npm run preview` | Preview production build locally |

## Configuration

### Site Settings

Edit `/src/config.ts` to update:
- Company name and tagline
- Contact information
- Founder details
- Service descriptions

### Adding New Courses

1. Create a new markdown file in `/src/content/courses/`
2. Add frontmatter with course details:
   ```yaml
   ---
   title: "Course Name"
   description: "Course description"
   duration: "10 weeks"
   level: "Beginner"
   fees: "₹25,000"
   schedule: "Weekends"
   technologies: ["Tech1", "Tech2"]
   featured: true
   order: 1
   ---
   ```
3. Add course content in markdown below the frontmatter

### Changing Colors/Theme

**Gradient Colors**: Edit `bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800` in page files

**Button Colors**: Change `bg-teal-500` to any Tailwind color (blue, purple, green, etc.)

**Font**: Replace "Inter" in `/src/layouts/BaseLayout.astro` with any Google Font

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

**Deployment Status**: Check the [Actions tab](https://github.com/mettlerise/mettlerise.github.io/actions)

## Contact

- **Website**: [https://mettlerise.github.io](https://mettlerise.github.io)
- **LinkedIn**: [Manoj Kumar](https://www.linkedin.com/in/manoj-kumar-54045725/)
- **Email**: contact@mettlerise.com
- **Location**: Vaniyampadi, Tamilnadu, India

## License

© 2026 MettleRise Consulting. All rights reserved.
