# YC Directory

YC Directory is a platform where users can pitch their startup ideas, connect with entrepreneurs, and participate in virtual competitions. Built with [Next.js](https://nextjs.org), it leverages Sanity CMS for content management and TailwindCSS for styling.

## Features

- **Startup Pitching**: Users can submit their startup ideas with detailed descriptions, categories, and markdown-based pitches.
- **User Authentication**: GitHub-based authentication using `next-auth`.
- **Dynamic Content**: Real-time updates using Sanity's live preview and GROQ queries.
- **Sanity Studio**: Integrated authoring environment for managing content.
- **Responsive Design**: Fully responsive UI built with TailwindCSS.
- **Search Functionality**: Search startups by title, category, or author.
- **Editor Picks**: Highlighted startups curated by editors.
- **Views Tracking**: Tracks and displays the number of views for each startup.
- **Custom Toast Notifications**: Feedback for user actions like form submissions.

## Folder Structure

```
.
├── app/                     # Next.js app directory
│   ├── (root)/              # Main application routes
│   │   ├── page.tsx         # Home page
│   │   ├── startup/         # Startup-related pages
│   │   └── user/            # User profile pages
│   ├── studio/              # Sanity Studio integration
│   └── layout.tsx           # Root layout
├── components/              # Reusable UI components
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions and API clients
├── public/                  # Static assets
├── sanity/                  # Sanity CMS configuration
│   ├── schemaTypes/         # Sanity schemas
│   ├── lib/                 # Sanity client and queries
│   └── env.ts               # Sanity environment variables
├── styles/                  # Global styles
├── .env.local               # Environment variables
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation
```

## Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 10

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/yc-directory.git
   cd yc-directory
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env.local` file in the root directory and add the following:

   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-sanity-project-id
   NEXT_PUBLIC_SANITY_DATASET=your-dataset
   NEXT_PUBLIC_SANITY_API_VERSION=2024-11-02
   SANITY_WRITE_TOKEN=your-sanity-write-token
   ```

4. Generate Sanity types:

   ```bash
   npm run typegen
   ```

### Running the Development Server

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### Building the Project

To build the project for production:

```bash
npm run build
```

### Running Sanity Studio

To access the Sanity Studio:

```bash
npm run dev
```

Visit [http://localhost:3000/studio](http://localhost:3000/studio) to manage content.

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run start`: Start the production server.
- `npm run lint`: Run ESLint.
- `npm run typegen`: Generate TypeScript types for Sanity schemas.

## Technologies Used

- **Framework**: [Next.js](https://nextjs.org)
- **CMS**: [Sanity](https://www.sanity.io)
- **Styling**: [TailwindCSS](https://tailwindcss.com)
- **Authentication**: [NextAuth.js](https://next-auth.js.org)
- **Markdown Editor**: [@uiw/react-md-editor](https://github.com/uiwjs/react-md-editor)
- **Icons**: [Lucide React](https://lucide.dev)

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)

