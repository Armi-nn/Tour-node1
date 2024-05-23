import express from "express";
import { addTour, deleteTour, getAllTour, getOneTour, updateTour } from "../controllers/tourCn.js";

const tourRouter= express.Router();

tourRouter.route("/").get(getAllTour).post(addTour);
tourRouter.route("/:id").get(getOneTour).patch(updateTour).delete(deleteTour);

export default tourRouter
