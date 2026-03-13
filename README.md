# Rooh ki Shayari 🌹

A beautiful, romantically themed web application for curating, saving, and reading a collection of Shayari (poetry). A sanctuary for words that touch the soul.

## 🌟 Features

- **View Collection:** Browse through a beautiful masonry-style grid of poetic verses.
- **Add Shayari:** Write and save new shayaris with the author's name.
- **Edit Shayari:** Fix typos or update existing entries seamlessly.
- **Delete Shayari:** Remove verses you no longer want in your collection.
- **Local Storage Persistence:** All your added, edited, and remaining shayaris are saved securely in your browser's local storage. They will still be there even if you refresh or close the page!
- **Toast Notifications:** Gentle pop-ups appear to confirm when you successfully add, edit, or delete an entry.

## 🛠️ Tech Stack

- **Framework:** React 19 with Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui & Radix UI primitives
- **Icons:** Lucide React

---

## 🗺️ Developer Guide: How to Modify the App

If you want to customize, add features, or change how the app looks, here is a directory of which files control what:

### 1. Changing the Initial/Default Shayaris
When a user opens the app for the very first time, it loads a default set of poetry. 
👉 **File to edit:** `src/data/initialShayaris.ts`
*How to change:* Add or remove objects in the `initialShayaris` array. Make sure to follow the structure (id, text, shayar, dateAdded).

### 2. Changing the Main Page (Title, Description, Background)
The main layout, the "Rooh ki Shayari" header, and the background blur effects are all handled here. This file also contains the core logic for saving to `localStorage`.
👉 **File to edit:** `src/pages/Index.tsx`
*How to change:* Modify the HTML/Tailwind classes in the `return` statement to change the UI. To change how saving works, look at the `handleAddShayari`, `handleUpdateShayari`, and `handleDeleteShayari` functions.

### 3. Changing How a Single "Shayari Card" Looks
Want to change the border color, the quote icon, the font size of the poetry, or how the edit/delete buttons appear on hover?
👉 **File to edit:** `src/components/ShayariCard.tsx`
*How to change:* Update the Tailwind CSS classes inside the component. The edit/delete buttons are positioned absolutely and shown on `group-hover`.

### 4. Modifying the "Add" or "Edit" Pop-ups (Dialogs)
If you want to add new fields (like "Category" or "Language") or change the popup's title and button colors.
👉 **Files to edit:** 
- `src/components/AddShayariDialog.tsx`
- `src/components/EditShayariDialog.tsx`
*How to change:* Add new state variables using `useState`, add new `<Input>` fields to the JSX, and ensure you pass the new data to the `onAdd` or `onEdit` prop. *(Note: If you add new fields, you must also update the interface in `src/types.ts`!)*

### 5. Changing Global Colors & Themes
The beautiful rose and pink themes are defined globally.
👉 **Files to edit:** 
- `src/globals.css` (Contains root CSS variables for background, foreground, borders, etc.)
- `tailwind.config.ts` (Contains Tailwind theme extensions)

### 6. Adding New Pages (Routing)
If you want to add an "About" page or a "Favorites" page.
👉 **File to edit:** `src/App.tsx`
*How to change:* Import your new page component and add a new `<Route path="/about" element={<About />} />` inside the `<Routes>` wrapper.

### 7. Updating TypeScript Types
If you add a new property to a Shayari (like `likes: number` or `isFavorite: boolean`), you must define it here so TypeScript knows about it.
👉 **File to edit:** `src/types.ts`

---

## 🚀 Running the Project Locally

If you clone this project to your local machine, run the following commands in your terminal:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build