# 📘 Project Journey – Student Management System (Commit by Commit)

This project documents my journey of building a Full-Stack Student Management Application step by step, commit by commit.  
The app enables teachers to manage attendance and students to view their records securely.

---

## ✅ Commit 1 – Initial Setup
- Bootstrapped the project using **Vite** for fast frontend development.

---

## ✅ Commit 2 – Git Configuration
- Added **.gitignore** to exclude unnecessary project files.

---

## ✅ Commit 3 – TailwindCSS Setup
- Installed `@tailwindcss/vite`.
- Imported Tailwind into `index.css`.
- Configured `vite.config.js` with the Tailwind plugin.

---

## ✅ Commit 4 – Core Components (Login & Teacher Dashboard)
- Created **Login** component with role toggle (student/teacher), input fields, and submit button.
- Built **Teacher** component to display students’ attendance in a table format.
- Faced a challenge: dates were stored in a separate array, while attendance was an object `{date: status}`.
- Solved it by mapping over dates and matching them with attendance keys for rendering.
- Designed a scrollable table layout with fixed student details and horizontally scrollable attendance records.

---

## ✅ Commit 5 – Editable Attendance
- Made attendance statuses editable using `<input>` fields inside table cells.
- Implemented `onChange` handling to update student data immutably by mapping over the array.

---

## ✅ Commit 6 – Add Students & Student Dashboard
- Added **AddStudent** page to let teachers add new students.
- Created **Student** page where students can view attendance percentage and personal info.

---

## ✅ Commit 7 – Routing & Attendance Percentage
- Installed **React Router DOM**.
- Set up routes for navigation.
- Implemented attendance percentage calculation: counted total presents vs total days.
- Added logout functionality for session handling.

---

## ✅ Commit 8 – Backend Setup
- Initialized **Node.js server** using Express.
- Configured server to listen on port 5000.

---

## ✅ Commit 9 – CORS & Login API
- Installed **CORS** to enable client-server communication.
- Created login route with credential validation.
- Used `FormData` and Fetch API for sending login requests from the frontend.

---

## ✅ Commit 10 – Fetch Student Data
- Implemented **GET API** to send student data as JSON to the frontend.

---

## ✅ Commit 11 – Attendance Update
- Displayed attendance in teacher dashboard using `useEffect` and GET request.
- Enabled updates via **PUT request**, sending only student ID and updated attendance object.
- Updated DB immutably on the backend.

---

## ✅ Commit 12 – Add Student API
- Handled student creation via **POST request** using FormData.
- Converted form data into objects using `Object.entries()`.

---

## ✅ Commit 13 – MongoDB Integration
- Connected Express server to MongoDB using **Mongoose**.
- Secured DB connection string using `.env`.

---

## ✅ Commit 14 – Schema & Models
- Defined **Mongoose schema** with validation for student details.
- Created **Student model** for database operations.

---

## ✅ Commit 15 – Add & Fetch Students
- Inserted students into DB using `.save()`.
- Retrieved students using `.find()`.

---

## ✅ Commit 16 – Authentication
- Implemented authentication for both teachers and students.
- On login: fetched record by ID from DB, compared entered password with stored one, and returned boolean status.

---

## ✅ Commit 17 – Auto Student ID Generation
- Implemented unique student IDs (`std_001, std_002, …`).
- Used a separate counter collection and `$inc` operator in MongoDB to auto-increment IDs.

---

## ✅ Commit 18 – Enhanced UI
- Added a **popup** after student creation: option to add another student or return to dashboard.

---

## ✅ Commit 19 – Sync Teacher Dashboard with DB
- Teacher dashboard now fetches real-time student details.
- Added **update button** to sync edited attendance with DB using `findOneAndUpdate()`.

---

## ✅ Commit 20 – Error Handling
- Displayed total student count.
- Alerted incorrect password attempts with conditional rendering.

---

## ✅ Commit 21 – Student Deletion
- Enabled student deletion via checkboxes.
- Collected selected student IDs using `useRef`.
- Sent **DELETE request** to server.
- Used `Promise.all()` to handle multiple deletions in DB.

---

## ✅ Commit 22 – Student Authentication
- Verified student login from DB by matching ID and password.
- Returned boolean response for authentication.

---

## ✅ Commit 23 – Dynamic Student Dashboard
- Passed student ID from login page to student dashboard using `useNavigate()` state.
- Used `useLocation()` on the dashboard to fetch and display the correct student’s data.

---

## ✅ Commit 24 – Password Hashing
- Integrated **bcrypt** to hash passwords before storing.
- Used Mongoose middleware `pre('save')` to hash passwords automatically.
- Verified login by comparing hashed passwords.

---

## ✅ Commit 25 – JWT Authentication
- Implemented **JWT tokens** for secure route access.
- Stored tokens in client-side `localStorage`.
- Built custom middleware to validate tokens before allowing access.

---

## ✅ Commit 26 – Role-Based Access
- Restricted access to teacher dashboard for teacher accounts only.
- Added middleware to verify role and block unauthorized access.

---

## ✅ Commit 27 – NoSQL Injection Protection
- Used **express-validator** (`escape(), trim()`) for sanitizing inputs.
- Created helper function to sanitize iterated attendance values before saving to DB.

---

## ✅ Commit 28 – Final UI Enhancements
- Added **dark mode** for better UX.
- Dynamic styling for attendance:  
  - **Present → Green**  
  - **Absent → Red**

---

# 🚀 Final Thoughts
This project started as a simple React CRUD app but evolved into a **secure, scalable, and user-friendly MERN application**. It demonstrates:

- Handling complex UI rendering with React.  
- Building and securing APIs with Express & MongoDB.  
- Implementing real-world security (bcrypt, JWT, input sanitization).  
- Enhancing user experience with responsive UI and alerts.  
