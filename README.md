# My portfolio

This is my portfolio where I am proving that I am achieving the learning outcomes for this semester, by displaying my work with explanation. 
I used React amd Tailwind technologies because I never used them before, I wanted to learn something new and challenge myself.


# Create React App

This command creates the React app :"npx create-react-app my-tailwind-app
cd my-tailwind-app".

# Make sure Node.js and npm are installed on my laptop

Run these commands in the terminal "node -v
nmp -v" to see if they are installed.


# Install Tailwind CSS

This command instals Tailwind: "npm install -D tailwindcss postcss autoprefixer".

# Generate Tailwind Configuration Files

This command generates Tailwind configuration: "npx tailwindcss init".

# Configure Tailwind CSS

Open the tailwind.config.js file and update the content property to include paths to all THE files that will use Tailwind classes: "/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
".

# Add Tailwind Directives to the CSS

In the src folder, open the index.css file and add the following: "@tailwind base;
@tailwind components;
@tailwind utilities;
".

# Start the Development Server

Run the command "npm start".



