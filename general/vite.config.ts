import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

/*
PROVIDE CONFIGURATION FOR VITE (define how vite behaves during development and production build
*/

// import defineConig (get the helper function to list the configuration for vite "import { defineConfig} from 'vite'")
// (features of helper functions: type safety and intellisense"autocomplete")
// when specific export default defineConfig({ plugins: [react()]}) it means to use react jsx transpile 
// vitejs probably can be use with other framwork