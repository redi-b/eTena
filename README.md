# eTena: A Verified Digital Health & Queuing Platform

## Contributors

- Rediet Berhanu Teshale
- Bereket Dereje Berhanu
- Chris Tedla Kebede

## Project Synopsis

### Problem Statement

Many medical institutions in Ethiopia struggle with disorganized patient queues and paper-based records. Patients wait for hours without knowing their place in line, and some people cut the queue, which isn’t fair. Paper records are messy, get lost, or are hard to find, making it tough for medical staff to check a patient’s medical history or share results quickly. We need a simple digital system to manage queues, store patient records, and share results securely.

### Planned Solution

**eTena** is a web app that makes visits to medical institutions easier by combining a queue system, medical history access, and result delivery. It uses Fayda’s identity system to keep everything secure and fair.

**How it Works:**

- **Queue System:** Patients sign in with their Fayda ID on the web app or with the help of clinic staff at the medical institution to join the queue. Staff use a dashboard to see the queue, call the next patient, skip or reschedule if needed (with a reason logged), and confirm when patients arrive. Patients can check their spot in line and estimated wait time on the web app.
- **Medical History:** Medical staff can see a patient’s past medical records (like diagnoses or prescriptions) linked to their Fayda ID. Patients can also view their own records on the web app to keep track of their health.
- **Result Delivery:** Patients get lab results or reports through the web app, securely tied to their Fayda ID. Medical staff can upload results directly, so there’s no need for paper.

### Expected Outcome

- **Fair Queues:** No one can cut the line, and everyone knows their wait time, making visits fairer.
- **Faster Operations:** Queues and records are managed in one place, so medical institutions run smoother and patients wait less.
- **Better Care:** Medical staff can quickly see a patient’s history, helping them make better decisions.
- **Patient Access:** Patients can easily check their records and results, so they feel more in control of their health.
- **Growth Potential:** This app can be used by many medical institutions in Ethiopia to improve healthcare.

### Fayda’s Role

Fayda is a key part of eTena:

- **Secure Sign-In:** Fayda verifies patient identities, so only real people can join the queue or access records.

- **Trust:** Using Fayda keeps patient data safe and builds trust in the system.

- **Fairness:** Fayda ensures everyone gets equal and fair access to medical services.Tech Stack

## Tech Stack

- **Frontend:**

  - React.js (Next.js).
  - Tailwind CSS for styling.
  - TypeScript for type-safe and maintainable code.
  - Shadcn UI for prebuilt and accessible UI components styled with Tailwind CSS.

- **Backend:**

  - Node.js with Express.js for a simple server.
  - Supabase (or MongoDB with Mongoose) for storing queue data, patient records, and results.

- **Additional Tools:**

  - Vercel – for deploying the frontend with built-in CI/CD.
  - Postman – for testing APIs during development.
  - Git & GitHub – version control and collaboration.

## Future Integrations

While eTena is currently focused on a web-based MVP, we plan to expand its capabilities in the future to improve accessibility, usability, and reach.

- **Mobile App** - A native mobile app for both patients and staff to allow smoother, on-the-go access to queue updates, medical history, and lab results.

- **Offline Support** - Enable clinics in areas with limited or unreliable internet to operate key features (e.g., queue management and record lookup) offline, syncing when connectivity is restored.

- **Analytics Dashboard** - For clinics to view patient volume, wait time trends, and service to improve efficiency.

- **Inter-Clinic Data Sharing** - Secure data exchange between different clinics and hospitals to support referrals and continuity of care.

- **Multilingual Support** - Interfaces in Amharic, Afaan Oromoo, and other local languages for better accessibility.


## Installation and Deployment

This section provides instructions to set up and run the eTena Next.js frontend locally or with Docker. The application uses TypeScript, the Next.js App Router, and Tailwind CSS.

### Prerequisites
- **Node.js**: Install Node.js (version 20 or later) and npm (or Yarn) from [nodejs.org](https://nodejs.org).
- **Git**: Required to clone the repository.
- **Docker**: For Docker setup, install Docker Desktop from [docker.com](https://www.docker.com/products/docker-desktop). Docker Compose is included with Docker Desktop.

### Local Setup
1. **Navigate to the frontend directory**:
   Open a terminal and change to the `frontend` folder:

   ```bash
   cd frontend
   ```

2. **Install dependencies**:
   Install the packages listed in `frontend/package.json`:

   ```bash
   npm install
   # OR
   yarn install
   ```

   This creates a `node_modules` folder with all dependencies.

3. **Start the development server**:
   Run the Next.js development server with hot reloading:

   ```bash
   npm run dev
   # OR
   yarn dev
   ```

   Open `http://localhost:3000` in your browser to view the app.

### Docker Setup
You can run the frontend using Docker and Docker Compose for a consistent environment. The `Dockerfile` and `docker-compose.yml` are located in the project root.

1. **Ensure you’re in the project root**:
   Run commands from the directory containing `frontend/`, `Dockerfile`, and `docker-compose.yml`.

2. **Build and run with Docker Compose**:
   Run the following command to build and start the frontend container:

   ```bash
   docker-compose up --build
   ```

   The app will be available at `http://localhost:3000`.

3. **Access the application**:
   Open `http://localhost:3000` in your browser to view the app.

### Notes
- Run local commands from the `frontend/` directory. For Docker, use the project root.
- If you encounter issues, ensure Node.js and Docker are installed, and check the terminal for error messages.