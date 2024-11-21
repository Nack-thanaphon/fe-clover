// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory for the build
    sourcemap: true, // Generate source maps
  },
  server: {
    port: 3001, // Specify the port for the development server
    open: true, // Open the browser automatically
  },
  define: {
    'process.env': process.env, // Pass environment variables to the client
  },
});