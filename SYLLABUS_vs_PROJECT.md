# PriyamCodeHub Project vs Full Stack Syllabus Mapping

## 1. HTML5 Implementation ✅ USED (Minimal)

### What's Used:
- **Semantic Tags**: 
  - `<header>` in Navbar - [frontend/src/components/common/Navbar.jsx](frontend/src/components/common/Navbar.jsx)
  - `<footer>` in Footer component - [frontend/src/components/common/Footer.jsx](frontend/src/components/common/Footer.jsx)
  - `<section>` for content sections in [frontend/src/pages/Home.jsx](frontend/src/pages/Home.jsx), [frontend/src/pages/About.jsx](frontend/src/pages/About.jsx), [frontend/src/pages/Contact.jsx](frontend/src/pages/Contact.jsx)
  - `<nav>` in navigation components - [frontend/src/components/common/Navbar.jsx](frontend/src/components/common/Navbar.jsx)
  
- **Headings**: `<h1>`, `<h2>`, `<h3>` in all pages like [frontend/src/pages/Login.jsx](frontend/src/pages/Login.jsx), [frontend/src/pages/CourseDetails.jsx](frontend/src/pages/CourseDetails.jsx)
- **Paragraphs & Text**: `<p>` throughout all components
- **Lists**: `<ul>`, `<ol>` in [frontend/data/dashboard-links.js](frontend/data/dashboard-links.js), [frontend/data/navbar-links.js](frontend/data/navbar-links.js)
- **Links**: `<Link>` (React Router) in [frontend/src/App.jsx](frontend/src/App.jsx) and `<a>` for external links in Footer
- **Images**: `<img>` & custom `<Img>` component in [frontend/src/components/common/Img.jsx](frontend/src/components/common/Img.jsx) for course thumbnails [frontend/src/pages/CourseDetails.jsx](frontend/src/pages/CourseDetails.jsx), profiles [frontend/src/components/core/Dashboard/MyProfile.jsx](frontend/src/components/core/Dashboard/MyProfile.jsx)
- **Forms**: 
  - `<form>`, `<input>`, `<textarea>`, `<select>`, `<button>` in [frontend/src/components/core/Auth/LoginForm.jsx](frontend/src/components/core/Auth/LoginForm.jsx), [frontend/src/components/core/Auth/SignupForm.jsx](frontend/src/components/core/Auth/SignupForm.jsx)
  - ContactUsForm in [frontend/src/components/core/ContactPage/ContactUsForm.jsx](frontend/src/components/core/ContactPage/ContactUsForm.jsx)
  - Settings forms in [frontend/src/components/core/Dashboard/Settings/EditProfile.jsx](frontend/src/components/core/Dashboard/Settings/EditProfile.jsx), [frontend/src/components/core/Dashboard/Settings/ChangeProfilePicture.jsx](frontend/src/components/core/Dashboard/Settings/ChangeProfilePicture.jsx), [frontend/src/components/core/Dashboard/Settings/UpdatePassword.jsx](frontend/src/components/core/Dashboard/Settings/UpdatePassword.jsx)
  - CourseBuilder forms in [frontend/src/components/core/Dashboard/AddCourse/CourseInformation/CourseInformationForm.jsx](frontend/src/components/core/Dashboard/AddCourse/CourseInformation/CourseInformationForm.jsx), [frontend/src/components/core/Dashboard/AddCourse/CourseBuilder/SubSectionModal.jsx](frontend/src/components/core/Dashboard/AddCourse/CourseBuilder/SubSectionModal.jsx)

### NOT Used:
- Tables (`<table>`) - instead using custom responsive table components with div-based grids
- Doctype explicitly (Vite handles this in index.html)

---

## 2. CSS3 Styling ✅ USED (via Tailwind CSS)

### What's Used:
- **Styling Methods**: External CSS via Tailwind (NO inline/internal CSS in components)
  - Configured in [frontend/tailwind.config.cjs](frontend/tailwind.config.cjs)
  - Global styles in [frontend/src/index.css](frontend/src/index.css)
  - PostCSS setup in [frontend/postcss.config.cjs](frontend/postcss.config.cjs)

- **Selectors**: Tailwind class selectors used in ALL component files:
  - `.bg-richblack-900` in [frontend/src/App.jsx](frontend/src/App.jsx)
  - `.text-yellow-25` in [frontend/src/pages/Home.jsx](frontend/src/pages/Home.jsx), [frontend/src/pages/CourseDetails.jsx](frontend/src/pages/CourseDetails.jsx)
  
- **Colors & Backgrounds**: Tailwind color palette throughout:
  - Rich black, yellow, blue, pink colors in [frontend/src/components/common/Navbar.jsx](frontend/src/components/common/Navbar.jsx), [frontend/src/components/common/Footer.jsx](frontend/src/components/common/Footer.jsx)
  
- **Box Model**: Tailwind utilities in all components:
  - `p-` (padding), `m-` (margin), `border-`, `rounded-` in [frontend/src/components/core/Dashboard/MyProfile.jsx](frontend/src/components/core/Dashboard/MyProfile.jsx), [frontend/src/pages/CourseDetails.jsx](frontend/src/pages/CourseDetails.jsx)
  
- **Typography**: Tailwind text utilities:
  - `text-` (size), `font-` (weight), `font-bold`, `font-semibold` in all pages and components
  
- **Flexbox**: Heavy use throughout:
  - `flex`, `flex-col`, `flex-row`, `gap-`, `items-center`, `justify-between` in:
    - [frontend/src/components/core/Dashboard/Cart/Cart.jsx](frontend/src/components/core/Dashboard/Cart/Cart.jsx)
    - [frontend/src/components/core/Dashboard/EnrolledCourses.jsx](frontend/src/components/core/Dashboard/EnrolledCourses.jsx)
    - [frontend/src/components/core/ViewCourse/VideoDetails.jsx](frontend/src/components/core/ViewCourse/VideoDetails.jsx)
  
- **Grid**: `grid`, `grid-cols-3`, `gap-` in:
  - [frontend/src/pages/Catalog.jsx](frontend/src/pages/Catalog.jsx)
  - [frontend/src/components/core/Dashboard/Instructor.jsx](frontend/src/components/core/Dashboard/Instructor.jsx)
  
- **Responsive Design**: Media queries via Tailwind - `sm:`, `md:`, `lg:`, `xl:`, `2xl:` in:
  - [frontend/src/pages/Home.jsx](frontend/src/pages/Home.jsx)
  - [frontend/src/pages/About.jsx](frontend/src/pages/About.jsx)
  - [frontend/src/pages/CourseDetails.jsx](frontend/src/pages/CourseDetails.jsx)
  
- **Hover Effects**: `hover:`, `group-hover:` in:
  - [frontend/src/components/core/Auth/LoginForm.jsx](frontend/src/components/core/Auth/LoginForm.jsx)
  - [frontend/src/components/core/Dashboard/Settings/EditProfile.jsx](frontend/src/components/core/Dashboard/Settings/EditProfile.jsx)
  
- **Transitions**: `duration-`, `ease-in-out`, `transition-all` in:
  - [frontend/src/App.jsx](frontend/src/App.jsx)
  - [frontend/src/components/core/Catalog/Course_Card.jsx](frontend/src/components/core/Catalog/Course_Card.jsx)

### NOT Used:
- Inline CSS (`style={}` attributes - avoided)
- CSS Grid (basic grid only, not advanced layouts)
- CSS animations/keyframes (using Framer Motion instead)

---

## 3. JavaScript (Core + DOM + BOM) ✅ USED (via React)

### Core JavaScript:
✅ **Variables**: `const`, `let`, `var` in all files like [frontend/src/services/operations/authAPI.js](frontend/src/services/operations/authAPI.js), [frontend/src/services/operations/courseDetailsAPI.js](frontend/src/services/operations/courseDetailsAPI.js)
✅ **Operators**: Arithmetic, logical, ternary, optional chaining (`?.`), nullish coalescing (`??`) in [frontend/src/components/core/Auth/SignupForm.jsx](frontend/src/components/core/Auth/SignupForm.jsx), [frontend/src/pages/CourseDetails.jsx](frontend/src/pages/CourseDetails.jsx)
✅ **Data Types**: strings, numbers, booleans, objects, arrays, null, undefined in all operations files
✅ **Functions**: Arrow functions in [frontend/src/services/operations/authAPI.js](frontend/src/services/operations/authAPI.js), async/await in [frontend/src/services/operations/courseDetailsAPI.js](frontend/src/services/operations/courseDetailsAPI.js)
✅ **Objects**: User objects in [frontend/src/slices/profileSlice.js](frontend/src/slices/profileSlice.js), course objects in [frontend/src/slices/courseSlice.js](frontend/src/slices/courseSlice.js)
✅ **Arrays**: course lists in [frontend/src/components/core/Dashboard/MyCourses.jsx](frontend/src/components/core/Dashboard/MyCourses.jsx), sections in [frontend/src/pages/CourseDetails.jsx](frontend/src/pages/CourseDetails.jsx)
✅ **Loops**: `forEach` in [frontend/src/services/operations/courseDetailsAPI.js](frontend/src/services/operations/courseDetailsAPI.js#L289), `map` in [frontend/src/pages/Catalog.jsx](frontend/src/pages/Catalog.jsx), `filter` in [frontend/src/components/core/ViewCourse/VideoDetails.jsx](frontend/src/components/core/ViewCourse/VideoDetails.jsx)
✅ **Conditionals**: `if/else` in [frontend/src/components/core/Auth/LoginForm.jsx](frontend/src/components/core/Auth/LoginForm.jsx), ternary operators in [frontend/src/pages/CourseDetails.jsx](frontend/src/pages/CourseDetails.jsx)

### DOM Manipulation (via React):
✅ **Access Elements**: `useState` in [frontend/src/pages/VerifyEmail.jsx](frontend/src/pages/VerifyEmail.jsx), `useRef` for video player in [frontend/src/components/core/ViewCourse/VideoDetails.jsx](frontend/src/components/core/ViewCourse/VideoDetails.jsx)
✅ **Modify Elements**: Update state to re-render in [frontend/src/components/core/Dashboard/AddCourse/CourseBuilder/CourseBuilderForm.jsx](frontend/src/components/core/Dashboard/AddCourse/CourseBuilder/CourseBuilderForm.jsx)
✅ **Form Validation**: `react-hook-form` in [frontend/src/components/core/Auth/SignupForm.jsx](frontend/src/components/core/Auth/SignupForm.jsx), [frontend/src/components/core/ContactPage/ContactUsForm.jsx](frontend/src/components/core/ContactPage/ContactUsForm.jsx), [frontend/src/components/core/Dashboard/Settings/EditProfile.jsx](frontend/src/components/core/Dashboard/Settings/EditProfile.jsx)
✅ **Event Handling**: `onClick` in [frontend/src/pages/CourseDetails.jsx](frontend/src/pages/CourseDetails.jsx), `onChange` in forms, `onSubmit` in [frontend/src/components/core/Auth/LoginForm.jsx](frontend/src/components/core/Auth/LoginForm.jsx), `onEnded` in [frontend/src/components/core/ViewCourse/VideoDetails.jsx](frontend/src/components/core/ViewCourse/VideoDetails.jsx)

### BOM (Browser Object Model):
✅ **Window object**: `window.scrollTo()` in [frontend/src/App.jsx](frontend/src/App.jsx), [frontend/src/pages/CourseDetails.jsx](frontend/src/pages/CourseDetails.jsx); `window.addEventListener('scroll')` in [frontend/src/App.jsx](frontend/src/App.jsx)
✅ **Location**: `useNavigate()` in [frontend/src/components/core/Auth/LoginForm.jsx](frontend/src/components/core/Auth/LoginForm.jsx), [frontend/src/pages/CourseDetails.jsx](frontend/src/pages/CourseDetails.jsx)
✅ **Alert/Toast**: `react-hot-toast` in [frontend/src/services/operations/authAPI.js](frontend/src/services/operations/authAPI.js), [frontend/src/services/operations/courseDetailsAPI.js](frontend/src/services/operations/courseDetailsAPI.js)

### Advanced:
✅ **Error Handling**: try-catch in [frontend/src/services/operations/authAPI.js](frontend/src/services/operations/authAPI.js), [frontend/src/services/operations/courseDetailsAPI.js](frontend/src/services/operations/courseDetailsAPI.js)
✅ **Async Operations**: `async/await` in [frontend/src/services/operations/studentFeaturesAPI.js](frontend/src/services/operations/studentFeaturesAPI.js), [frontend/src/services/operations/profileAPI.js](frontend/src/services/operations/profileAPI.js)
✅ **Date & Time**: `formatDate` utility in [frontend/src/services/formatDate.js](frontend/src/services/formatDate.js), `createdAt` timestamps in [frontend/src/utils/dateFormatter.js](frontend/src/utils/dateFormatter.js)
✅ **Regular Expressions**: Email/password validation in [frontend/src/components/core/Auth/SignupForm.jsx](frontend/src/components/core/Auth/SignupForm.jsx)
✅ **Hoisting**: Handled by Babel transpilation in all components

### Locations:
- [frontend/src/services/operations/](frontend/src/services/operations/) - async operations
- [frontend/src/components/core/Auth/](frontend/src/components/core/Auth/) - form validation
- [frontend/src/utils/](frontend/src/utils/) - utility functions

### NOT Used:
- Direct DOM manipulation (`document.getElementById`)
- jQuery (`$()` selectors)
- setTimeout/setInterval (use React hooks instead)

---

## 4. jQuery Integration ❌ NOT USED

### Why Not Used:
- **React replaces jQuery's role** in DOM manipulation and event handling
- Modern React provides all jQuery functionality natively
- Using jQuery + React together creates conflicts

### Alternative in Project:
- React hooks and state management instead of `$(selector).on()`
- `react-hook-form` instead of jQuery form plugins
- Fetch/Axios instead of `$.ajax()`

---

## 5. Bootstrap Framework ❌ NOT USED

### Why Not Used:
- **Tailwind CSS chosen instead** (more flexible, smaller bundle)
- Bootstrap components not needed when using custom React components

### Alternative in Project:
- Custom components built with Tailwind:
  - [frontend/src/components/common/](frontend/src/components/common/) - reusable components
  - [frontend/src/components/core/](frontend/src/components/core/) - feature components
- Modal from Framer Motion + custom styling
- Navbar custom-built (not Bootstrap)

---

## 6. ReactJS ✅ USED (CORE of Project)

### What's Used:
✅ **Functional Components**: All components in [frontend/src/pages/](frontend/src/pages/), [frontend/src/components/](frontend/src/components/)

✅ **Hooks**:
  - `useState` in [frontend/src/pages/Home.jsx](frontend/src/pages/Home.jsx), [frontend/src/components/core/Auth/LoginForm.jsx](frontend/src/components/core/Auth/LoginForm.jsx), [frontend/src/pages/Catalog.jsx](frontend/src/pages/Catalog.jsx)
  - `useEffect` in [frontend/src/pages/CourseDetails.jsx](frontend/src/pages/CourseDetails.jsx), [frontend/src/components/core/ViewCourse/VideoDetails.jsx](frontend/src/components/core/ViewCourse/VideoDetails.jsx), [frontend/src/pages/Dashboard.jsx](frontend/src/pages/Dashboard.jsx)
  - `useDispatch` in [frontend/src/components/core/Auth/SignupForm.jsx](frontend/src/components/core/Auth/SignupForm.jsx), [frontend/src/components/core/ViewCourse/CourseReviewModal.jsx](frontend/src/components/core/ViewCourse/CourseReviewModal.jsx)
  - `useSelector` in [frontend/src/App.jsx](frontend/src/App.jsx), [frontend/src/components/core/Dashboard/Cart/Cart.jsx](frontend/src/components/core/Dashboard/Cart/Cart.jsx)
  - `useParams` in [frontend/src/pages/CourseDetails.jsx](frontend/src/pages/CourseDetails.jsx), [frontend/src/components/core/Dashboard/EditCourse/EditCourse.jsx](frontend/src/components/core/Dashboard/EditCourse/EditCourse.jsx), [frontend/src/components/core/ViewCourse/VideoDetails.jsx](frontend/src/components/core/ViewCourse/VideoDetails.jsx)
  - `useNavigate` in [frontend/src/pages/Login.jsx](frontend/src/pages/Login.jsx), [frontend/src/pages/CourseDetails.jsx](frontend/src/pages/CourseDetails.jsx)
  - `useLocation` in [frontend/src/App.jsx](frontend/src/App.jsx), [frontend/src/pages/UpdatePassword.jsx](frontend/src/pages/UpdatePassword.jsx)
  - `useRef` in [frontend/src/components/core/ViewCourse/VideoDetails.jsx](frontend/src/components/core/ViewCourse/VideoDetails.jsx)
  - `useForm` from react-hook-form in [frontend/src/components/core/Auth/SignupForm.jsx](frontend/src/components/core/Auth/SignupForm.jsx), [frontend/src/components/core/ContactPage/ContactUsForm.jsx](frontend/src/components/core/ContactPage/ContactUsForm.jsx)

✅ **Props**: Passed to reusable components like [frontend/src/components/common/IconBtn.jsx](frontend/src/components/common/IconBtn.jsx), [frontend/src/components/core/Dashboard/Settings/](frontend/src/components/core/Dashboard/Settings/)

✅ **Conditional Rendering**: 
  - `{condition && <Component />}` in [frontend/src/App.jsx](frontend/src/App.jsx), [frontend/src/pages/CourseDetails.jsx](frontend/src/pages/CourseDetails.jsx)
  - Ternary operators in [frontend/src/components/core/Dashboard/Cart/Cart.jsx](frontend/src/components/core/Dashboard/Cart/Cart.jsx), [frontend/src/components/core/ViewCourse/VideoDetails.jsx](frontend/src/components/core/ViewCourse/VideoDetails.jsx)

✅ **Lists Rendering**: 
  - `.map()` in [frontend/src/pages/Catalog.jsx](frontend/src/pages/Catalog.jsx), [frontend/src/pages/CourseDetails.jsx](frontend/src/pages/CourseDetails.jsx), [frontend/src/components/core/Dashboard/EnrolledCourses.jsx](frontend/src/components/core/Dashboard/EnrolledCourses.jsx)

✅ **Router**: React Router v6 in:
  - Route definitions in [frontend/src/App.jsx](frontend/src/App.jsx)
  - Nested routing in Dashboard via `<Outlet>`
  - OpenRoute wrapper in [frontend/src/components/core/Auth/OpenRoute.jsx](frontend/src/components/core/Auth/OpenRoute.jsx)
  - ProtectedRoute wrapper in [frontend/src/components/core/Auth/ProtectedRoute.jsx](frontend/src/components/core/Auth/ProtectedRoute.jsx)

✅ **Advanced**:
  - **Redux State Management** - [frontend/src/reducer/index.js](frontend/src/reducer/index.js), slices in [frontend/src/slices/](frontend/src/slices/):
    - [frontend/src/slices/authSlice.js](frontend/src/slices/authSlice.js)
    - [frontend/src/slices/profileSlice.js](frontend/src/slices/profileSlice.js)
    - [frontend/src/slices/cartSlice.js](frontend/src/slices/cartSlice.js)
    - [frontend/src/slices/courseSlice.js](frontend/src/slices/courseSlice.js)
    - [frontend/src/slices/viewCourseSlice.js](frontend/src/slices/viewCourseSlice.js)
    - [frontend/src/slices/sidebarSlice.js](frontend/src/slices/sidebarSlice.js)
  
  - **API Integration** - Axios apiConnector in [frontend/src/services/apiConnector.js](frontend/src/services/apiConnector.js), async thunks in:
    - [frontend/src/services/operations/authAPI.js](frontend/src/services/operations/authAPI.js)
    - [frontend/src/services/operations/courseDetailsAPI.js](frontend/src/services/operations/courseDetailsAPI.js)
    - [frontend/src/services/operations/profileAPI.js](frontend/src/services/operations/profileAPI.js)
    - [frontend/src/services/operations/studentFeaturesAPI.js](frontend/src/services/operations/studentFeaturesAPI.js)
  
  - **Form Handling** - react-hook-form in [frontend/src/components/core/Auth/SignupForm.jsx](frontend/src/components/core/Auth/SignupForm.jsx), [frontend/src/components/core/Dashboard/Settings/EditProfile.jsx](frontend/src/components/core/Dashboard/Settings/EditProfile.jsx), [frontend/src/components/core/ViewCourse/CourseReviewModal.jsx](frontend/src/components/core/ViewCourse/CourseReviewModal.jsx)
  
  - **Code Splitting**: Lazy loading via Vite + React lazy in [frontend/vite.config.js](frontend/vite.config.js)

### Project Structure:
- [frontend/src/pages/](frontend/src/pages/) - page components
- [frontend/src/components/](frontend/src/components/) - reusable + feature components
- [frontend/src/slices/](frontend/src/slices/) - Redux slices
- [frontend/src/services/operations/](frontend/src/services/operations/) - async API operations
- [frontend/src/reducer/](frontend/src/reducer/) - Redux store config

### NOT Used:
- Class components (all functional)
- Old lifecycle methods (`componentDidMount` - using hooks instead)
- Redux class middleware (using modern Redux Toolkit)

---

## 7. Backend with Node.js ✅ USED

### What's Used:
✅ **Server Setup**: Express.js server in [backend/server.js](backend/server.js)
✅ **Port Configuration**: `PORT` from `.env` - [backend/.env](backend/.env)
✅ **Routing** - Split into 4 route files:
  - `/api/v1/auth` in [backend/routes/user.js](backend/routes/user.js) - signup, login, sendOTP, changePassword, reset-password-token, reset-password
  - `/api/v1/course` in [backend/routes/course.js](backend/routes/course.js) - createCourse, getCourseDetails, getAllCourses, addSection, updateSection, deleteSection, addSubSection, updateSubSection, deleteSubSection, editCourse, deleteCourse, showAllCategories, getCategoryPageDetails, getInstructorCourses, getFullCourseDetails, updateCourseProgress, createRating, getAverageRating, getReviews
  - `/api/v1/profile` in [backend/routes/profile.js](backend/routes/profile.js) - getUserDetails, getEnrolledCourses, updateProfile, updateUserProfileImage, deleteProfile, instructorDashboard
  - `/api/v1/payment` in [backend/routes/payments.js](backend/routes/payments.js) - capturePayment, verifyPayment

✅ **HTTP Methods**:
  - **GET**: getEnrolledCourses in [backend/controllers/profile.js](backend/controllers/profile.js), getAllCourses in [backend/controllers/course.js](backend/controllers/course.js), showAllCategories, getInstructorCourses
  - **POST**: signup, login in [backend/controllers/auth.js](backend/controllers/auth.js), createCourse in [backend/controllers/course.js](backend/controllers/course.js), capturePayment in [backend/controllers/payments.js](backend/controllers/payments.js), updateCourseProgress in [backend/controllers/courseProgress.js](backend/controllers/courseProgress.js)
  - **PUT**: updateProfile in [backend/controllers/profile.js](backend/controllers/profile.js), updateUserProfileImage, editCourse in [backend/controllers/course.js](backend/controllers/course.js)
  - **DELETE**: deleteProfile in [backend/controllers/profile.js](backend/controllers/profile.js), deleteCourse in [backend/controllers/course.js](backend/controllers/course.js), deleteSection, deleteSubSection

✅ **REST API**: Stateless endpoints following REST conventions in all route files

✅ **Middleware**:
  - `express.json()` in [backend/server.js](backend/server.js)
  - `cookieParser()` in [backend/server.js](backend/server.js)
  - `cors()` in [backend/server.js](backend/server.js)
  - `fileUpload()` in [backend/server.js](backend/server.js)
  - Custom `auth` middleware in [backend/middleware/auth.js](backend/middleware/auth.js) - JWT verification
  - Role middleware in [backend/middleware/auth.js](backend/middleware/auth.js) - `isStudent`, `isInstructor`, `isAdmin`
  - Middleware usage in [backend/routes/course.js](backend/routes/course.js), [backend/routes/profile.js](backend/routes/profile.js)

✅ **Error Handling**: Try-catch in:
  - [backend/controllers/auth.js](backend/controllers/auth.js)
  - [backend/controllers/course.js](backend/controllers/course.js)
  - [backend/controllers/payments.js](backend/controllers/payments.js)
  - [backend/controllers/profile.js](backend/controllers/profile.js)

✅ **Static Content**: Default route `/` in [backend/server.js](backend/server.js) serves HTML response

### Files:
- [backend/server.js](backend/server.js) - main server
- [backend/routes/](backend/routes/) - route definitions
- [backend/controllers/](backend/controllers/) - business logic
- [backend/middleware/](backend/middleware/) - auth middleware

### NOT Used:
- GraphQL (using REST instead)
- WebSockets (no real-time features)
- Clustering/load balancing

---

## 8. MongoDB Database ✅ USED

### What's Used:
✅ **NoSQL Database**: MongoDB for flexible schema storage
✅ **Mongoose ODM**: Schema definition + validation
✅ **Schema Design** - Models in [backend/models/](backend/models/):
  - [backend/models/user.js](backend/models/user.js) - User schema (firstName, lastName, email, password, accountType, tokens, image)
  - [backend/models/profile.js](backend/models/profile.js) - Profile additional details (dateOfBirth, about, gender, contactNumber)
  - [backend/models/course.js](backend/models/course.js) - Course schema (courseName, courseDescription, instructor, whatYouWillLearn, courseContent, price, thumbnail, tag, category, ratingAndReviews, studentsEnrolled, createdAt)
  - [backend/models/section.js](backend/models/section.js) - Course sections (sectionName, subSection)
  - [backend/models/subSection.js](backend/models/subSection.js) - Course lectures (title, timeDuration, description, videoUrl)
  - [backend/models/category.js](backend/models/category.js) - Course categories (name, description)
  - [backend/models/ratingAndReview.js](backend/models/ratingAndReview.js) - Reviews (user, course, rating, review)
  - [backend/models/courseProgress.js](backend/models/courseProgress.js) - Student progress (user, course, completedVideos)
  - [backend/models/OTP.js](backend/models/OTP.js) - OTP storage (email, otp, createdAt)

✅ **CRUD Operations**:
  - **Create**: 
    - `User.create()` in [backend/controllers/auth.js](backend/controllers/auth.js)
    - `Course.create()` in [backend/controllers/course.js](backend/controllers/course.js)
    - `Section.create()` in [backend/controllers/section.js](backend/controllers/section.js)
    - `SubSection.create()` in [backend/controllers/subSection.js](backend/controllers/subSection.js)
  
  - **Read**: 
    - `User.findById()` in [backend/controllers/profile.js](backend/controllers/profile.js)
    - `Course.find()` in [backend/controllers/course.js](backend/controllers/course.js)
    - `Course.findById()` in [backend/controllers/course.js](backend/controllers/course.js)
    - `Category.find()` in [backend/controllers/category.js](backend/controllers/category.js)
  
  - **Update**: 
    - `User.findByIdAndUpdate()` in [backend/controllers/profile.js](backend/controllers/profile.js)
    - `Course.findByIdAndUpdate()` in [backend/controllers/course.js](backend/controllers/course.js)
    - `CourseProgress.findByIdAndUpdate()` in [backend/controllers/courseProgress.js](backend/controllers/courseProgress.js)
    - `Section.findByIdAndUpdate()` in [backend/controllers/section.js](backend/controllers/section.js)
  
  - **Delete**: 
    - `User.findByIdAndDelete()` in [backend/controllers/profile.js](backend/controllers/profile.js)
    - `Course.findByIdAndDelete()` in [backend/controllers/course.js](backend/controllers/course.js)
    - `Section.findByIdAndDelete()` in [backend/controllers/section.js](backend/controllers/section.js)
    - `SubSection.findByIdAndDelete()` in [backend/controllers/subSection.js](backend/controllers/subSection.js)

✅ **Data Validation**: Schema validators in model files - required fields, type checking, trim, lowercase

✅ **Data Types Used**:
  - String: name, email, password, title, description in all models
  - Number: price (Course), duration (SubSection), rating (RatingAndReview)
  - Boolean: published flag in Course
  - ObjectId: references (instructor in Course, course in RatingAndReview, user in CourseProgress)
  - Array: tags (Course), subSection (Section), studentsEnrolled (Course), completedVideos (CourseProgress)
  - Date: createdAt, updatedAt (auto-generated by Mongoose)

✅ **Database Connection**: [backend/config/database.js](backend/config/database.js) - MongoDB URI from .env

✅ **Relationships**:
  - User ↔ Profile (one-to-one) in auth flow
  - User (instructor) ↔ Course (one-to-many) in [backend/controllers/course.js](backend/controllers/course.js)
  - Course ↔ Section (one-to-many) in Course model
  - Section ↔ SubSection (one-to-many) in Section model
  - User ↔ Course (enrolled students array) in Course model
  - Course ↔ RatingAndReview (one-to-many) in Course model
  - User ↔ CourseProgress (one-to-many) in progress tracking

### NOT Used:
- SQL databases (MongoDB is NoSQL choice)
- Complex transactions (not explicitly needed here)
- Advanced aggregation pipelines (basic queries used)

---

## 9. Additional Technologies (NOT in Syllabus but Used)

✅ **Cloudinary** - Cloud storage for media files
  - Configuration in [backend/config/cloudinary.js](backend/config/cloudinary.js)
  - Used in [backend/utils/imageUploader.js](backend/utils/imageUploader.js) for thumbnail/video upload
  - Called in controllers: [backend/controllers/profile.js](backend/controllers/profile.js) (profile image), [backend/controllers/course.js](backend/controllers/course.js) (course thumbnail)

✅ **Razorpay** - Payment gateway integration
  - Configuration in [backend/config/rajorpay.js](backend/config/rajorpay.js)
  - Payment controller in [backend/controllers/payments.js](backend/controllers/payments.js) - capturePayment, verifyPayment
  - Frontend integration in [frontend/src/services/operations/studentFeaturesAPI.js](frontend/src/services/operations/studentFeaturesAPI.js) - buyCourse function
  - Razorpay SDK loaded in [frontend/src/services/operations/studentFeaturesAPI.js](frontend/src/services/operations/studentFeaturesAPI.js)

✅ **JWT (JSON Web Tokens)** - Authentication tokens
  - Token generation in [backend/controllers/auth.js](backend/controllers/auth.js) - login success
  - Token verification in [backend/middleware/auth.js](backend/middleware/auth.js)
  - Token storage in Redux: [frontend/src/slices/authSlice.js](frontend/src/slices/authSlice.js)
  - Token usage in API calls in [frontend/src/services/apiConnector.js](frontend/src/services/apiConnector.js)

✅ **Redux Toolkit** - Modern Redux state management
  - Store configuration in [frontend/src/reducer/index.js](frontend/src/reducer/index.js)
  - Auth slice: [frontend/src/slices/authSlice.js](frontend/src/slices/authSlice.js) - token, loading, user
  - Profile slice: [frontend/src/slices/profileSlice.js](frontend/src/slices/profileSlice.js) - user, loading
  - Cart slice: [frontend/src/slices/cartSlice.js](frontend/src/slices/cartSlice.js) - items, total
  - Course slice: [frontend/src/slices/courseSlice.js](frontend/src/slices/courseSlice.js) - course, editCourse
  - ViewCourse slice: [frontend/src/slices/viewCourseSlice.js](frontend/src/slices/viewCourseSlice.js) - sections, lectures, progress
  - Sidebar slice: [frontend/src/slices/sidebarSlice.js](frontend/src/slices/sidebarSlice.js) - sidebar visibility

✅ **Framer Motion** - Animation library
  - Import in components like [frontend/src/pages/Home.jsx](frontend/src/pages/Home.jsx)
  - Motion components for fade/slide animations
  - Variants defined in [frontend/src/components/common/motionFrameVarients.js](frontend/src/components/common/motionFrameVarients.js)
  - Used in AboutPage, HomePage sections

✅ **React Hook Form** - Form handling and validation
  - Used in [frontend/src/components/core/Auth/LoginForm.jsx](frontend/src/components/core/Auth/LoginForm.jsx) - login form
  - Used in [frontend/src/components/core/Auth/SignupForm.jsx](frontend/src/components/core/Auth/SignupForm.jsx) - signup form
  - Used in [frontend/src/components/core/ContactPage/ContactUsForm.jsx](frontend/src/components/core/ContactPage/ContactUsForm.jsx) - contact form
  - Used in [frontend/src/components/core/Dashboard/Settings/EditProfile.jsx](frontend/src/components/core/Dashboard/Settings/EditProfile.jsx) - profile update
  - Used in [frontend/src/components/core/ViewCourse/CourseReviewModal.jsx](frontend/src/components/core/ViewCourse/CourseReviewModal.jsx) - review submission

✅ **React Hot Toast** - Toast notifications
  - Toast calls in [frontend/src/services/operations/authAPI.js](frontend/src/services/operations/authAPI.js) - success/error messages
  - Toast calls in [frontend/src/services/operations/courseDetailsAPI.js](frontend/src/services/operations/courseDetailsAPI.js)
  - Toast calls in [frontend/src/components/core/Auth/SignupForm.jsx](frontend/src/components/core/Auth/SignupForm.jsx) - password mismatch alert

✅ **Axios** - HTTP client for API calls
  - API connector setup in [frontend/src/services/apiConnector.js](frontend/src/services/apiConnector.js)
  - Used in all operations files: authAPI, courseDetailsAPI, profileAPI, studentFeaturesAPI, SettingsAPI

✅ **Vite** - Fast build tool
  - Config in [frontend/vite.config.js](frontend/vite.config.js) - React plugin, build optimization
  - Entry file: [frontend/index.html](frontend/index.html)
  - Much faster than Webpack for development

✅ **Tailwind CSS** - Utility-first CSS framework
  - Configuration in [frontend/tailwind.config.cjs](frontend/tailwind.config.cjs)
  - PostCSS config in [frontend/postcss.config.cjs](frontend/postcss.config.cjs)
  - Global styles in [frontend/src/index.css](frontend/src/index.css)
  - Used in ALL component files for styling

---

## Summary Table

| Syllabus Topic | Used? | Implementation |
|---|---|---|
| HTML5 | ✅ | Semantic tags in React JSX |
| CSS3 | ✅ | Tailwind CSS + Framer Motion |
| JavaScript Core | ✅ | React components + utilities |
| DOM/BOM | ✅ | React hooks + window APIs |
| jQuery | ❌ | Replaced by React |
| Bootstrap | ❌ | Replaced by Tailwind CSS |
| ReactJS | ✅ | Core frontend framework |
| Node.js | ✅ | Express.js backend |
| MongoDB | ✅ | Database storage |

---

## Viva Answer (One Paragraph)

"Our PriyamCodeHub project covers all major syllabus components: **HTML5 & CSS3** (using React + Tailwind instead of plain HTML), **JavaScript** (through React hooks and async operations), **ReactJS** (functional components with Redux), **Node.js + Express** (REST API backend), and **MongoDB** (NoSQL database with Mongoose). We skip **jQuery and Bootstrap** because React and Tailwind provide better alternatives. Additionally, we integrate **Cloudinary** for media storage, **Razorpay** for payments, and **JWT** for security."

