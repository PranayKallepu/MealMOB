const express = require('express')
const upload = require('../middleware/multer')
const {authVendor} = require('../middleware/authVendor')
const authUser = require('../middleware/authUser')
const {addFoodItem, getFoodItemsByRestaurant, deleteFoodItem} = require('../controllers/foodController')

const foodRoutes = express.Router()

foodRoutes.post('/add-foodItem', authVendor, upload.single('foodImage'), addFoodItem)
foodRoutes.get('/foodItems/:restaurantId', authVendor, getFoodItemsByRestaurant)
foodRoutes.get('/restaurantItems/:restaurantId', authUser, getFoodItemsByRestaurant)
foodRoutes.delete('/delete-foodItem/:foodItemId', authVendor, deleteFoodItem) 

module.exports = foodRoutes