## Project Overview

This project is the **Mandolin Chord Progression Visualizer** (`mando-shapes`), a web application designed for beginner to intermediate mandolin players. Its primary purpose is to provide a simple, clean, and quick visual reference for common mandolin chord progression patterns and their corresponding shapes.

### Technologies Used

*   **Frontend Framework:** React
*   **Language:** TypeScript
*   **Build Tool:** Vite
*   **Styling:** CSS (leveraging Flexbox, CSS Grid, and CSS Scroll Snap)

### Architecture

The application is a single-page application (SPA) that dynamically loads chord pattern data and associated images from local JSON files located in `src/data/patterns/`. It features a two-page vertical snap-scrolling layout:

1.  **Title Page:** Displays the application title and icon, taking up the full viewport height.
2.  **Patterns Page:** Contains a tabbed interface for navigating between different chord progression patterns. Each pattern displays a horizontally scrollable list of chord diagrams. The horizontal scroller includes a snap-to-center effect, visually emphasizing the currently centered chord diagram.

## Building and Running

To set up and run the project locally, ensure you have Node.js and npm (or yarn/pnpm) installed.

### Installation

Navigate to the project root directory in your terminal and install the dependencies:

```bash
npm install
```

### Development Server

To start the development server and view the application in your browser:

```bash
npm run dev
```

This command will typically make the application accessible at `http://localhost:5173/`. If you need to access it from other devices on your local network (e.g., your phone), the terminal output will provide a "Network" URL (e.g., `http://192.168.x.x:5173/`).

### Building for Production

To create an optimized production build of the application:

```bash
npm run build
```

This will compile and bundle the application, placing the static files in the `dist/` directory.

### Previewing Production Build

You can serve the production build locally for testing purposes:

```bash
npm run preview
```

### Type Checking (Linting)

To run the TypeScript compiler and check for type errors:

```bash
npm run lint
```

## Development Conventions

*   **Language:** TypeScript is used throughout the codebase for type safety and improved code quality.
*   **Framework:** React is utilized for building the user interface with a component-based architecture.
*   **Styling:** Styling is managed with plain CSS, leveraging modern features like Flexbox, CSS Grid, and CSS Scroll Snap for responsive layouts and interactive elements. Shared component styles are in `src/components/components.css`, and global styles are in `src/main.css`.
*   **Data Management:** Chord pattern data is loaded dynamically from local JSON files (`src/data/patterns/**/*.json`). This allows for easy content updates without requiring changes to the core application logic.
*   **Project Structure:** The codebase follows a clear structure with components in `src/components/`, type definitions in `src/types.ts`, and all dynamic data in `src/data/`.
*   **Version Control:** The project uses Git for version control, with `main` as the default branch. Common development artifacts like `node_modules/` and build outputs (`dist/`) are excluded via `.gitignore`.
