import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      category: "Fiction",
      description: "A classic novel about the American Dream.",
      rating: 4.5,
    },
    {
      id: 2,
      title: "A Brief History of Time",
      author: "Stephen Hawking",
      category: "Non-Fiction",
      description: "Explains complex scientific concepts.",
      rating: 4.8,
    },
    {
      id: 3,
      title: "Dune",
      author: "Frank Herbert",
      category: "Sci-Fi",
      description: "Epic science fiction set in the distant future.",
      rating: 4.7,
    },
    {
      id: 4,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      category: "Fiction",
      description: "A novel about racial injustice in the American South.",
      rating: 4.9,
    },
  ],
  categories: ["Fiction", "Non-Fiction", "Sci-Fi", "Mystery", "Biography", "Fantasy"],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        id: state.books.length + 1,
        ...action.payload,
      };
      state.books.unshift(newBook); // Add to beginning
    },
    searchBooks: (state, action) => {
      // This would be handled in component
    },
  },
});

export const { addBook, searchBooks } = bookSlice.actions;
export default bookSlice.reducer;