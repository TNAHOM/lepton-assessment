# [Task Manager - Lepton Assessment]( https://lepton-assessment-gd5x.vercel.app/ )

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

- **Framework**: Next.js with TypeScript
- **State Management**: Zustand
- **Styling**: Tailwind CSS
- **UI Components**: 
  - Radix UI for accessible components
  - Shadcn UI for beautiful, reusable components
- **Animations**: Framer Motion
- **Icons**: Lucide Icons
- **Date Formatting**: date-fns

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000).

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