# Portfolio Project

A full-stack personal portfolio application featuring a Django REST API backend and a React (Vite) frontend.

## Project Structure

- `backend/`: Django project containing the API and data models.
- `frontend/`: React application using Vite and Tailwind CSS.

## Backend (Django)

The backend is built with Django 6.x and Django REST Framework.

### Key Components
- **Framework:** Django 6.0.5, DRF 3.17.1
- **Database:** SQLite (`db.sqlite3`)
- **Main App:** `apps.details` - manages portfolio data (projects, skills, experience, etc.)
- **API Routing:** API endpoints are served at the root URL (`/`).
- **Media:** Configured to store images in `media/` (e.g., project screenshots, certificates).

### Data Models (`backend/apps/details/models.py`)
- `PersonalInfo`: Name, DOB, About, Image.
- `Tech`: Technology name and icon.
- `Projects`: Name, Description, Link, Image, Technologies (M2M).
- `Certification`: Name, Image, Date.
- `Experience`: Name, Description, Date.
- `Testimonial`: Name, Tag (Web/Mobile), Description, Date.

### Build & Run
1. Navigate to `backend/`.
2. Activate virtual environment: `.\venv\Scripts\activate` (Windows).
3. Install dependencies (if `requirements.txt` is provided, otherwise `pip install django djangorestframework django-cors-headers Pillow`).
4. Run migrations: `python manage.py migrate`.
5. Start server: `python manage.py runserver`.

## Frontend (React + Vite)

The frontend is a modern React 19 application built with Vite and Tailwind CSS 4.

### Key Technologies
- **Framework:** React 19
- **Build Tool:** Vite 8
- **Styling:** Tailwind CSS 4
- **Linting:** ESLint

### Available Scripts
- `npm run dev`: Starts the development server at `http://localhost:5173`.
- `npm run build`: Builds the application for production.
- `npm run lint`: Runs ESLint for code quality checks.
- `npm run preview`: Previews the production build locally.

### Development Workflow
1. Navigate to `frontend/`.
2. Install dependencies: `npm install`.
3. Start development server: `npm run dev`.

## Development Conventions

- **API First:** The frontend should consume data from the Django API endpoints.
- **Media Handling:** New images for projects or certifications should be uploaded through the Django admin or API.
- **Styling:** Use Tailwind CSS utility classes for styling.
- **Type Safety:** While currently using JSX, consider migrating to TypeScript for better type safety.

## Configuration Notes
- **CORS:** The backend is configured to allow requests from `http://localhost:5173`.
- **Media Files:** Ensure `MEDIA_ROOT` is correctly configured in `settings.py` to handle file uploads.
