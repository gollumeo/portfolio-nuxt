# Portfolio—Nuxt

*A structured and test-driven portoflio built with Nuxt.js & TypeScript*

## 📌 Overview

This project is my personal portfolio, developed with **Nuxt.js**, structured following **Domain-Driven Design (DDD)** and **Clean Architecture** principles.
Although it is not intended to be installed and run by others, this repository showcases my **ability to design scalable, maintainable, and testable frontend applications**. 

## 🛠️ Why Nuxt.js?

I chose **Nuxt.js** for its versatility, performance optimizations, and clean separation of concerns (and also because I've always enjoyed Vue.js, prior to this discovery).<br/>
✅ **Static & SSR capabilities** -> ensures SEO optimization while keeping flexibility for dynamic content.<br>
✅ **File-based routing** -> simplifies navigation management.<br>
✅ **Built-in TypeScript & Composition API support** -> helps maintain code quality & scalability.<br>
✅ **First-class `i18n` support** -> easy and smooth multilingual experience. 

## 🏗️ Architecture & design decisions

This portfolio follows a **modular and layered architecture** to ensure **scalability, testability, and maintainability**. 

### 🧩 Domain-Driven Design (DDD) & Clean Architecture

The project is structured into clearly defined **layers**: 
- `domain/` -> **business** logic and **Type** definitions,
  - Houses **Value Objects**, **Types**, and **Core Entities** related the project domain,
  - Example: `Project.ts` encapsulates the core logic and properties of a **project**.
- `application/` -> **application** logic & **orchestrators**,
  - Contains **data sources** (e.g., JSON files simulating APIs) and localization files for `i18n`.
- `presentation/` -> UI Layer (Nuxt **components**, **pages**, and **UI elements**)
  - follows an **Atomic Design** pattern: 
    - **Atoms**: smallest UI components (`BaseButton.vue`),
    - **Molecules**: groups of atoms with minor logic,
    - **Organisms**: complex components containing multiple molecules. 
  - uses **Composition API** for modular and reusable component logic.

### 🛡️ Test-Driven Development (TDD)

The entire project is developed using **TDD principles**, ensuring:<br>
✅ **Reliable** & **bug-resistant** components with thorough unit testing.<br>
✅ **Maintainability** by catching regressions early.<br>
✅ **Code quality improvements** via **test-first** development.

### ⚡ Custom test utilities & Builders

To streamline testing, I implemented *(for now)* a builder pattern to **generate** test data **efficiently**. 
Example: 
- `BaseButtonWrapper.builder.ts` -> creates wrapper instances for UI tests (using `@vue/test-utils`),
- `testData.ts` -> provides reusable **mocked** test cases for consistency. 

## 🧙‍♂️ Future enhancements

Although the core architecture is in place, I plan to:
- [ ] implement **SSG/SSR** hybrid rendering for optimized performance,
- [ ] add **project showcase** management via an **admin panel**,
- [ ] introduce **advanced animations & transitions** to improve user engagement.

## 📜 License

This project is **not** intended for external use, but serves as a demonstration of my **frontend architecture skills**. 

## Want to connect?

Feel free to:
- reach out via [LinkedIn](https://linkedin.com/in/pierre-mauriello),
- book a meeting on my [calendly](https://calendly.com/hire-me-pierre-mauriello)
- check my other projects on [GitHub](https://github.com/gollumeo?tab=repositories)
