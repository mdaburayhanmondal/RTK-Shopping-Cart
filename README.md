Minimalist E-Commerce Practice
This project is a comprehensive practice lab focused on mastering state management in React. It demonstrates a complete flow from adding inventory to managing a shopping cart and calculating real-time billing.

🚀 Key Features
Inventory Management: Add new products with custom metadata (name, price, category, image).

Global State Management: Centralized store handling products and cart logic via Redux Toolkit.

Advanced Cart Logic: Quantity increment/decrement, item removal, and duplicate prevention.

Dynamic Billing: Automatic subtotal and shipping calculations based on cart contents.

Modern UI/UX: Fully responsive design featuring sticky sidebars, glassmorphism, and smooth hover effects.

🧠 What I Learned

1. Advanced State Management with Redux Toolkit
   Slices & Reducers: Learned how to organize code into logic-based "slices" for cleaner architecture.

Immutability with Immer: Mastered the ability to write "mutating" logic (like state.push) that Redux Toolkit safely handles as immutable updates.

Complex Actions: Implemented logic to handle payload objects, such as checking for existing items in an array before updating state.

2. Functional Programming in React
   Array Methods: Extensively used .map(), .filter(), and .reduce() to derive UI data and calculate totals directly from the Redux state.

Derived State: Learned that not everything needs to be in "state"—some values (like total price) are better calculated on the fly during rendering to ensure data integrity.

3. Component Architecture & Routing
   Declarative Routing: Implemented react-router for seamless navigation between Home, Products, and Cart views.

Layout Patterns: Utilized the <Outlet /> pattern to maintain a persistent Navbar and Footer across all pages.

Reusable UI: Created modular components like ProductCard and CartItem that can be reused across different sections of the app.

4. Professional Styling with Tailwind CSS
   Visual Hierarchy: Learned to use typography weights and spacing to create a high-end, professional look without heavy CSS files.

Interactive Design: Implemented state-aware styles (e.g., active navigation links) and responsive grid layouts.
s
