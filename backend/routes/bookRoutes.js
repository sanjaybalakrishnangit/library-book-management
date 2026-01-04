const express = require("express")
const Book = require("../models/Book")

const router = express.Router()

router.post("/seed", async (req, res) => {
  await Book.insertMany([
    { title: "Atomic Habits", author: "James Clear", category: "Self Help", publishedYear: 2018, availableCopies: 5 },
    { title: "Clean Code", author: "Robert Martin", category: "Programming", publishedYear: 2008, availableCopies: 3 },
    { title: "Deep Work", author: "Cal Newport", category: "Self Help", publishedYear: 2016, availableCopies: 4 },
    { title: "You Don't Know JS", author: "Kyle Simpson", category: "Programming", publishedYear: 2019, availableCopies: 6 },
    { title: "Ikigai", author: "Hector Garcia", category: "Lifestyle", publishedYear: 2016, availableCopies: 2 },
    { title: "The Alchemist", author: "Paulo Coelho", category: "Fiction", publishedYear: 2014, availableCopies: 1 },
    { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", category: "Finance", publishedYear: 2017, availableCopies: 7 }
  ])
  res.json({ message: "Books Inserted" })
})

router.get("/", async (req, res) => {
  const books = await Book.find()
  res.json(books)
})

module.exports = router
