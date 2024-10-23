import {Request,Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

const handleValidationErrors=(req:Request,res:Response,next:NextFunction)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({errors:errors.array()})
    }
    next();
}
export const validateMyUserRequest=[
    body('name').isString().notEmpty().withMessage('Name must be a String'),
    body('addressLine1').isString().notEmpty().withMessage('AddressLine1 must be a string'),
    body('city').isString().notEmpty().withMessage('city must be a string'),
    body('country').isString().notEmpty().withMessage('country must be a string'),

    handleValidationErrors
];

export const validateMyRestaurantRequest=[
    body("restaurantName").notEmpty().withMessage("Restaurant name is required"),
    body("city").notEmpty().withMessage("city  is required"),
    body("country").notEmpty().withMessage("country  is required"),
    body("deliveryPrice").isFloat({min:0}).withMessage("Delivery price must be a positive number"),
    body("estimatedDeliveryTime").isInt({min:0}).withMessage("Estimated Delivery time must be a positive Integer"),
    body("cuisines").isArray().withMessage("Cuisines must be an array").not().isEmpty().withMessage('Cuisines array cannot be empty'),
    body("menuItems").isArray().withMessage("MenuItems must be an array"),
    body("menuItems.*.name").notEmpty().withMessage("Menu Item name must be Required"),
    body("menuItems.*.price").isFloat({min:0}).withMessage("Menu Item price must be Required and must be a Positive Integer"),
    
    handleValidationErrors

]