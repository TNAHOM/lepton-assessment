# Task Manager - Lepton Assessment

A modern task management application built with Next.js and TypeScript, featuring a clean and intuitive user interface. This project was created as part of the Lepton assessment to demonstrate proficiency in modern web development practices.

## Features

- ✨ Create, update, and delete tasks
- 🕒 Set start and end times for tasks
- 🏷️ Task status management (Started, Pending, Completed)
- 🔍 Filter tasks by status
- 💾 Persistent storage using Zustand
- 🎯 Responsive and modern UI
- ✨ Smooth animations using Framer Motion

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org) with TypeScript
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **UI Components**: 
  - [Radix UI](https://www.radix-ui.com/) for accessible components
  - [Shadcn UI](https://ui.shadcn.com/) for beautiful, reusable components
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Date Formatting**: [date-fns](https://date-fns.org/)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

- `/src/components` - Reusable UI components
- `/src/store` - Zustand store configuration
- `/src/types` - TypeScript type definitions
- `/src/app` - Next.js app router pages
- `/src/lib` - Utility functions and shared logic

## Key Features Implementation

- **Task Management**: Uses Zustand for state management with persistent storage
- **Component Architecture**: Modular and reusable components following React best practices
- **Type Safety**: Full TypeScript implementation for better development experience
- **Modern UI**: Responsive design with Tailwind CSS and Shadcn UI components
- **Animations**: Smooth transitions and animations using Framer Motion

## Development

The project uses the following development tools:

- TypeScript for type safety
- ESLint for code linting
- Next.js App Router for routing
- Tailwind CSS for styling
- Turbopack for faster development builds

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Zustand Documentation](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Shadcn UI Documentation](https://ui.shadcn.com/docs)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
