const router = require("express").Router();
const db = require("../models/db");

router.get("/", async (req, res) => {
  try {
    const { type } = req.query;

    let query = "SELECT * FROM cars";
    let values = [];

    if (type) {
      query += " WHERE type = $1";
      values.push(type);
    }

    const cars = await db.query(query, values);
    res.json(cars.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const car = await db.query(
      "SELECT * FROM cars WHERE id=$1",
      [req.params.id]
    );

    const specs = await db.query(
      "SELECT * FROM car_specs WHERE car_id=$1",
      [req.params.id]
    );

    const colors = await db.query(
      "SELECT * FROM car_colors WHERE car_id=$1",
      [req.params.id]
    );

    res.json({
      car: car.rows[0],
      specs: specs.rows[0],
      colors: colors.rows
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;