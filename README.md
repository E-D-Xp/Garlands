## Viji Garlands – Luxury South Indian Garlands Website

This is a **frontend-only React + Vite + Tailwind CSS** single-page site for **Viji Garlands**, a traditional South Indian spice garland business.  
It is optimized for **mobile-first browsing, Instagram & WhatsApp traffic**, and is ready to deploy on platforms like **Vercel**.

---

## Tech Stack

- **React** (Vite)
- **Tailwind CSS**
- **No backend / no database / no authentication**

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Then open the printed URL in your browser (usually `http://localhost:5173`).

### 3. Build for production

```bash
npm run build
```

The production build will be in the `dist` folder.

---

## Deploying (Vercel)

1. Push this project to GitHub / GitLab / Bitbucket.  
2. Create a new project in **Vercel** and import the repo.  
3. Use the default Vite settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Deploy – Vercel will handle the rest.

---

## Customizing Content

All main content is in `src/App.jsx`.

- **Navigation links**: `navLinks` array.
- **Products section**: `products` array.
- **Gallery section**: `galleryImages` array.
- **WhatsApp & Instagram links**: `whatsappLink` and `instagramLink` constants.

Update the text and links directly in those arrays/variables.

---

## Images

You are currently using **local images** referenced like:

- Product images: `/type/car.jpeg`, `/type/clove.jpeg`, etc.
- Gallery images: `/gallery/1.jpeg`, `/gallery/2.jpeg`, etc.
- Hero/About images: `/public/head.jpeg`, `/public/god.jpg`

### Where to place images

- Put all custom images in the **`public` folder** (and subfolders like `public/type`, `public/gallery`).
- Access them in code using paths that start with `/`, for example:
  - `src="/type/car.jpeg"` → file at `public/type/car.jpeg`
  - `src="/gallery/1.jpeg"` → file at `public/gallery/1.jpeg`

To change any image, just **replace the file in `public`** or point the path to a new image.

---

## Styling & Tailwind

- Tailwind is configured in `tailwind.config.js` with a **cream / maroon / gold / brown** palette.
- Global styles and fonts (Inter + Playfair Display) are in `src/index.css`.
- Most layout and visual styling is done with **Tailwind utility classes directly in JSX** (`src/App.jsx`).

You can safely adjust spacing, colors, fonts, and responsiveness using Tailwind classes without touching any backend.

---

## Notes

- This project is **frontend-only** and safe to host on any static hosting provider.
- Primary call-to-action is via **WhatsApp**; ensure the `whatsappLink` is set to your live number/QR URL.
- For any new section, follow the same pattern used for `Products`, `Gallery`, `About`, and `Contact` sections. 
