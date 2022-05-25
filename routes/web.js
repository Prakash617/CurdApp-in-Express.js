import express from "express";
import StudentController from "../controller/studentController.js";
const router = express.Router();

router.get("/", StudentController.getAllDoc)
router.post("/", StudentController.createDoc)
router.get("/edit/:id", StudentController.editDoc)
router.post("/update/:id", StudentController.UpdateDocById)
router.post("/delete/:id", StudentController.DeleteDocById)

export default router;