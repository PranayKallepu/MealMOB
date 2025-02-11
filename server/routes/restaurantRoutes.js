const express = require("express");
const upload = require("../middleware/multer");
const { authVendor } = require("../middleware/authVendor");
const { filterRestaurants } = require("../middleware/filterRestaurants");
const { addRestaurant, getRestaurants, getRestaurantsByCuisine } = require("../controllers/restaurantController");
const authUser = require("../middleware/authUser");

const restaurantRoutes = express.Router();

restaurantRoutes.post("/add-restaurant", authVendor, upload.single("restaurantImage"), addRestaurant);
restaurantRoutes.get("/restaurants", authUser, filterRestaurants, getRestaurants);
restaurantRoutes.get('/collections',authUser, filterRestaurants, getRestaurantsByCuisine);

module.exports = restaurantRoutes;
