# 🎬 Movie Catalog System

## 🧩 Problem Statement

You are required to create a **Movie Catalog System** that displays a list of movies using React components.  
Your task is to build a `MovieCard` component and integrate it with the main `App` component to render multiple movies dynamically using the `map()` method.

The system should include **Top Rated badges**, **availability indicators**, and **genre tags** to practice **props**, **conditional rendering**, and **list rendering**.

---

## 🎯 Learning Objectives

- Create reusable React components with props  
- Render lists dynamically using `map()`  
- Pass props between components  
- Use conditional rendering for badges and availability  
- Use proper key props for lists

---

## ⚙️ Task Requirements

### Part 1: MovieCard Component

- Accept props: `title`, `genre`, `rating`, `isAvailable`, `isTopRated`
- Display movie information in a card format
- Show a `"TOP RATED"` badge if `isTopRated` is true
- Show availability status — `"Available"` or `"Not Available"`
- Use classNames:
  - `movie-card`
  - `top-rated-badge`
  - `availability-status` (with `available` / `not-available` modifiers)

---

### Part 2: App Component Integration

- Define an array of movie objects
- Render multiple `MovieCard` components using `map()`
- Pass unique `key` props
- Ensure all data displays correctly

---

## 🧪 Testing Setup

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Tests
```bash
npm run test
```

### ✅ Test Cases Covered
1. Should render movie title correctly  
2. Should display `"TOP RATED"` badge when `isTopRated` is true  
3. Should show `"Not Available"` when `isAvailable` is false  
4. Should render movie rating properly  
5. Should show genre text

---
Happy Coding! 🚀
