# 📚 Book Library System

## 🧩 Problem Statement
You need to create a **Book Library System** that displays a list of books using **React components**.  
Your task is to build a `BookCard` component and integrate it with the main `App` component to render multiple books dynamically using the `map()` method.  

The system should include **bestseller badges** and **availability status** — allowing you to practice:
- Props  
- List rendering  
- Conditional rendering  

---

## 🎯 Learning Objectives
- Create **reusable React components** with props  
- Render lists dynamically using **map()**  
- Pass props between components  
- Use **conditional rendering** for badges and availability  
- Apply **unique key props** when rendering lists  

---

## 🧱 Task Requirements

### 🪪 Part 1: BookCard Component
**Component Name:** `BookCard.jsx`

#### Props:
- `title` (string)
- `author` (string)
- `price` (number)
- `originalPrice` (number)
- `genre` (string)
- `isAvailable` (boolean)
- `isBestseller` (boolean)

#### Functionalities:
✅ Display book information in a card format  
✅ Show a **"BESTSELLER"** badge if `isBestseller` is `true`  
✅ Show availability status:
   - `"Available"` when `isAvailable` is `true`
   - `"Not Available"` when `isAvailable` is `false`
✅ Show **crossed-out original price** when it’s greater than the current price  
✅ Use the following **class names**:
   - `book-card` for the main container  
   - `bestseller-badge` for the badge  
   - `availability-status` for the status text  
   - `available` / `not-available` for conditional styling  

---

### 🧮 Part 2: App Component Integration
**Component Name:** `App.jsx`

#### Steps:
1. Define an **array of book objects**, each containing:
   ```js
   {
     title: "Book Title",
     author: "Author Name",
     price: 12.99,
     originalPrice: 18.99,
     genre: "Fiction",
     isAvailable: true,
     isBestseller: false
   }
