# Online Library System

    A React-based online library management system built with Vite, Redux, and React Router. This application allows users to browse books by categories, search for books, view book details, and add new books to the library.

## ✨ Features

    - **Home Page**: Welcome message with book categories and popular books
    - **Browse Books**: View all books with category filtering and search functionality
    - **Book Details**: Detailed view of selected books with ratings and descriptions
    - **Add Books**: Form to add new books with validation using Redux state management
    - **Responsive Design**: Mobile-friendly interface with Bootstrap
    - **404 Page**: Custom "Page Not Found" handler
    - **Dynamic Routing**: Clean URLs for categories and book details


## 🛠️ Technologies Used

    - **React 18** - Frontend library
    - **Vite** - Build tool and development server
    - **React Router DOM** - Routing
    - **Redux Toolkit** - State management
    - **Bootstrap 5** - Styling and responsive design
    - **FontAwesome** - Icons


## 🚀 Installation & Setup

    ### Prerequisites
        - Node.js (version 14 or higher)
        - npm (Node Package Manager)

    ### Steps to Run Locally

        1. **Clone or download the project**
        ```bash
        # If cloning from Git
        git clone https://github.com/souravbanerjee147/online-library-system-
        cd online-library-system
        
        # If using downloaded zip
        # Extract the zip file and navigate to the folder
        ```

        2. **Install dependencies**
        ```bash
        npm install
        ```

        3. **Start the development server**
        ```bash
        npm run dev
        ```

        4. **Open in browser**
        - The app will open automatically at `http://localhost:5173`
        - Or manually navigate to the URL shown in the terminal

## 📝 Project Details

    ### 1. Home Page
    - Landing page with welcome message
    - List of book categories (Fiction, Non-Fiction, Sci-Fi, etc.)
    - Popular books displayed as cards with "View Details" links
    - Navigation bar with Home, Browse Books, and Add Book links

    ### 2. Browse Books Page
    - List of books filtered by category
    - Dynamic routing for categories (`/books/:category`)
    - "View Details" link for each book
    - Search functionality by title or author

    ### 3. Book Details Page 
    - Dynamic route for selected books
    - Display book title, author, description, and rating
    - "Back to Browse" button

    ### 4. Add Book Page 
    - Form for adding new books
    - Redux for state management
    - Redirect to Browse Books page after submission
    - Form validation for all fields

    ### 5. 404 Page 
    - Custom "Page Not Found" route
    - Displays invalid route URL
    - Link back to Home page
    - Header component excluded from this page

    ### 6. Styling and User Experience 
    - Bootstrap for responsive design
    - User-friendly interface
    - Visually appealing layout


## 🔧 Available Scripts

    - `npm run dev` - Start development server
    - `npm run build` - Build for production
    - `npm run preview` - Preview production build locally

## 📊 Features in Detail

    ### Book Management
    - **Initial Books**: 4 pre-loaded books across 3 categories
    - **Categories**: Fiction, Non-Fiction, Sci-Fi, Mystery, Biography, Fantasy
    - **Book Attributes**: Title, Author, Category, Description, Rating (0-5)

    ### Search & Filter
    - **Search**: Real-time search by title or author
    - **Category Filter**: Click category buttons to filter books
    - **Dynamic Routing**: Clean URLs for filtered views

    ### State Management
    - **Redux Store**: Centralized state for books
    - **Actions**: Add new books with automatic ID generation
    - **Reducers**: Handle state updates immutably

    ### UI/UX Features
    - **Responsive Design**: Works on mobile, tablet, and desktop
    - **Interactive Cards**: Hover effects and transitions
    - **Form Validation**: Client-side validation with error messages
    - **Loading States**: Empty state messages when no books found
    - **Breadcrumb Navigation**: Easy navigation path

## 🧪 Testing the Application

    ### Adding a New Book
    1. Click "Add Book" in navigation
    2. Fill in all required fields (marked with *)
    3. Click "Add to Library"
    4. Verify the book appears at top of Browse Books page

    ### Searching Books
    1. Go to Browse Books page
    2. Type in search bar
    3. Verify results filter in real-time
    4. Use "Clear Search" to reset

    ### Viewing Categories
    1. Click any category button on Home page
    2. Verify only books from that category show
    3. Use "Back to All Books" to reset filter


## 🗒️ Assignment Notes

### Commit History
The GitHub repository includes at least 10 meaningful commits showing the development process:
1. Initial Vite React setup
2. Project structure and routing
3. Redux store implementation
4. Home page components
5. Browse books functionality
6. Book details page
7. Add book form with validation
8. 404 page implementation
9. Styling and Bootstrap integration
10. Final cleanup and documentation

### Code Comments
The codebase includes comments explaining:
- Component purposes
- Complex logic
- Redux actions and reducers
- Form validation rules
- Routing configurations


## 📧 Contact

Your Name - Sourav Banerjee 

Project Link: https://github.com/souravbanerjee147/online-library-system-

## ⭐ Show your support

Give me a ⭐️ if this project helped you!

---

*Built with ❤️ using React + Vite*