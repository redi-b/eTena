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


**🚀Installation**
This project consists of two main parts: a Backend built with Node.js and a Frontend built with Next.js. Follow the instructions below to set up and run both parts of the application.

Backend (Node.js)
The backend handles all server-side logic, API endpoints, and database interactions.

Navigate to the backend directory:
Open your terminal or command prompt and change your current directory to the backend folder of this project:

cd backend

Install dependencies:
Once inside the backend directory, install all the necessary Node.js packages using npm or Yarn:

npm install
# OR
yarn install

This command will download and install all the packages listed in the package.json file into a node_modules folder within the backend directory.

Start the backend server:
After the dependencies are installed, you can start the backend server:

npm start
# OR
yarn start

The backend server should now be running, typically on http://localhost:5000 (or another port specified in the backend configuration).

Frontend (Next.js)
The frontend is a Next.js application responsible for the user interface and interacting with the backend API.

Navigate to the frontend directory:
Open a new terminal or command prompt window (or switch back to the project root and then navigate) and change your current directory to the frontend folder:

cd frontend

Install dependencies:
Once inside the frontend directory, install all the necessary Next.js packages using npm or Yarn:

npm install
# OR
yarn install

This command will download and install all the packages listed in the package.json file into a node_modules folder within the frontend directory.

Start the frontend development server:
After the dependencies are installed, you can start the Next.js development server:

npm run dev
# OR
yarn dev

The frontend application should now be running, typically on http://localhost:3000. You can open this URL in your web browser to view the application.

Important Notes:

Ensure you have Node.js (and npm or Yarn) installed on your system before proceeding.

It's recommended to run both the backend and frontend simultaneously in separate terminal windows for full application functionality.

If you encounter any issues, double-check your directory paths and ensure all commands are run from the correct location.



**▶️ How to Run the App Locally**
To run the complete application on your local machine, you need to start both the backend and frontend servers concurrently.

Start the Backend Server:

Open your first terminal window.

Navigate to the backend directory:

cd backend


Start the server:

npm start
# OR
yarn start


Wait for the backend server to indicate it's running (e.g., "Server listening on port 5000").

Build the Frontend Application:

Open a second, separate terminal window.

Navigate to the frontend directory:

cd frontend


Build the Next.js application for production:
Note: Next.js applications must be built before they can be run in production mode.

npm run build
# OR
yarn build


This command will create an optimized production build in the .next directory. Wait for the build process to complete.

Start the Frontend Production Server:

In the same second terminal window (after the build is complete), start the Next.js production server:

npm start
# OR
yarn start


Wait for the frontend server to indicate it's ready (e.g., "ready - started server on 0.0.0.0:3000, url: http://localhost:3000").

Access the Application:

Once both servers are running, open your web browser and navigate to:

http://localhost:3000


You should now see the frontend application, which will communicate with the backend running on http://localhost:5000.

Important Notes:

Ensure you have completed the "Installation" steps for both the backend and frontend before attempting to run the app.

Keep both terminal windows open as long as you want the application to be running. Closing either will stop that part of the application.