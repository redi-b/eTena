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

- **Mobile App** - A native mobile app for both patients and staff to allow smoother, on-the-go access to queue updates, medical history, and lab results.

- **Offline Support** - Enable clinics in areas with limited or unreliable internet to operate key features (e.g., queue management and record lookup) offline, syncing when connectivity is restored.

- **Analytics Dashboard** - For clinics to view patient volume, wait time trends, and service to improve efficiency.

- **Inter-Clinic Data Sharing** - Secure data exchange between different clinics and hospitals to support referrals and continuity of care.

- **Multilingual Support** - Interfaces in Amharic, Afaan Oromoo, and other local languages for better accessibility.