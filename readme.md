# 🎙️ Podcast Manager

A simple and efficient Node.js REST API to manage and display video-format podcast episodes. This application organizes podcasts into category-based sections and supports filtering by podcast name.

This projected was made following a DIO bootcamp 'mobile-developer'
---

## Technologies Used
- Node.js

- TypeScript

- Native HTTP module

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


## Project Structure (Simplified)
- podcast-manager
├── controllers/
│   └── podcasts_controller.ts
├── routes/
│   └── routes.ts
├── utils/
│   └── http_methods.ts
├── data/
│   └── podcasts.json
└── app.ts


