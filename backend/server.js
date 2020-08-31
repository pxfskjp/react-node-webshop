import express from "express"

const app = express()

app.get("/api/products", (req, res) => {
  res.send(data.products)
})