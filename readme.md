# 🎙️ Podcast Manager

A Node.js REST API to manage and display video-format podcast episodes. This application organizes podcasts into category-based sections and supports filtering by podcast name.

This projected was made following a DIO bootcamp 'mobile-developer'

---

## Technologies
- Node.js
- TypeScript
- Native HTTP module

## Development Stack
This project uses the following tools and libraries:

- TypeScript – Type-safe JavaScript
- TSX – Zero-config TypeScript runner with .env support
- Tsup – Lightweight bundler for building the production output
- @types/node – Type definitions for Node.js

## Features

- Group episodes by categories
- Filter episodes by podcast name
- Lightweight and extensible codebase
- Simple HTTP server using Node.js (no frameworks)

---

## Domain

Video podcasts hosted on platforms like YouTube.

---

## How It Works
#### GET /api/list
 List All Episodes 
- Returns a JSON array with all podcast episodes

#### GET /api/episode
Filter podcasts by their names
- Returns a JSON array with all podcast episodes with the specified name. 

---
## Available Scripts

### Run the project in development mode
- npm run start:dev

### Watch for file changes and restart automatically
- npm run start:watch

### Build the project for production using tsup
- npm run dist

### Build and run the production version
- npm run start:dist

---

## How to use
### 1. Clone the repository
- git clone https://github.com/victoriaresende/podcast-manager.git
cd podcast-manager

### 2. Install dependencies
- npm install

### 3. Start the development server
- npm run start:dev

### 4. Make requests
- List exemple: http://localhost:3333/api/
- Filter exemple: http://localhost:3333/api/episode?p=flow

---

## License
This project is available under the MIT License.

