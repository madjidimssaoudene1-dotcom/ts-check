# 🚗 Vehicle App (Vite + React + TypeScript)

## 📌 Overview

This is a simple React application built with **Vite** and **TypeScript** that demonstrates the use of:

* TypeScript interfaces
* Class implementation
* Basic React integration

The app defines a `Vehicle` interface and implements it using a `Car` class, then interacts with it inside a React component.

---

## ⚙️ Tech Stack

* Vite
* React
* TypeScript

---

## 📁 Project Structure

```
src/
│
├── models/
│   ├── Vehicle.ts   # Interface definition
│   └── Car.ts       # Class implementation
│
├── App.tsx          # Main component
├── main.tsx         # Entry point
└── index.css
```

---

## 🧩 Features

* Define a `Vehicle` interface with:

  * `make` (string)
  * `model` (string)
  * `year` (number)
  * `start()` method

* Implement a `Car` class:

  * Uses a constructor to initialize properties
  * Implements the `start()` method

* Create and use a `Car` instance inside a React component

---

## 🚀 Getting Started

### 1. Create the project

```bash
npm create vite@latest vehicle-app -- --template react-ts
cd vehicle-app
npm install
```

---

### 2. Run the development server

```bash
npm run dev
```

---

## ▶️ Usage

* Open the app in your browser
* Click the **"Start Car"** button (if implemented)
* Check the browser console

### ✅ Expected Output

```
Car engine started
```

---

## 📦 Example Code

### Vehicle Interface

```ts
export interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}
```

---

### Car Class

```ts
import { Vehicle } from "./Vehicle";

export class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log("Car engine started");
  }
}
```

---

## 💡 Future Improvements

* Add more vehicle types (Bike, Truck, etc.)
* Use Tailwind CSS for styling
* Display vehicle data in the UI
* Add user input to create vehicles dynamically

---

## 📄 License

This project is for educational purposes.
