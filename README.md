Hipster Multi-Theme React App
A modern, fully responsive React + TypeScript demo with theme switching (3 variants), persistent theme, adaptive sidebar, card product grid (via API), and mobile-first layouts.

✨ Features
3 scalable visual themes (light, dark/sidebar, colorful grid)

Layout adapts per theme (minimalist, sidebar, playful grid)

Sidebar fits desktop and mobile automatically

Cards/data loaded from FakeStoreAPI

Theme, fonts, and structure responsive for all screens

Background/font transitions on theme change

No big UI library – just React, React Router, TypeScript, Vite

🏁 Quick Start
1️⃣ Clone & Install
text
git clone <YOUR_REPO_URL>
cd <project-directory>
pnpm install
(If you need to create this from scratch, use pnpm create vite@latest . -- --template react-ts, then copy in the code.)

2️⃣ Run Development
text
pnpm dev
This uses Vite and will show a local dev server (usually at http://localhost:5173).

3️⃣ Try It Out!
Use the theme dropdown in the top-right to switch between the three themes.

All layouts instantly update. Try on phones/tablets for the responsive sidebar and card grid!

📂 Project Structure
text
src/
components/
Header.tsx
CardList.tsx
ThemeDropdown.tsx
hooks/
useFetchProducts.ts
pages/
Home.tsx
About.tsx
Contact.tsx
themes/
themes.ts
ThemeProvider.tsx
App.tsx
main.tsx
index.css
themes.css
public/
index.html
🛠️ Setup Notes
Fonts: For Theme 3 (Colorful), this app uses the Pacifico font from Google Fonts.
Make sure this line is included in public/index.html <head>:

xml

<link href="https://fonts.googleapis.com/css?family=Pacifico&display=swap" rel="stylesheet" />
API: Products are fetched from https://fakestoreapi.com/products.

Persistent Theme: User’s last selected theme is saved in localStorage.

🖌️ Customization
You can easily:

Add new themes by editing /src/themes/themes.ts and CSS variables.

Change layouts per theme in <Home />, <Header />, or <CardList />.

Swap for another products API or add more pages to /pages.

🔎 Testing & Production
All layouts are responsive – test at various screen sizes.

For production build:

text
pnpm build
pnpm preview
For deployment, host the dist/ folder to Vercel, Netlify, or any static site host with SPA support.

🤝 Credits
Built with React, React Router, Vite, TypeScript

FakeStoreAPI for demo products
