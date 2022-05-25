import StudentModel from "../models/Student.js"

class StudentController {
    // create document
    static createDoc = async(req, res) => {
        console.log("Create Doc Post Method");
        console.log(req.body);
        try {
            const { name, age, fees } = req.body
            const doc = new StudentModel({
                    name: name,
                    age: age,
                    fees: fees
                })
                // saving document
            const result = await doc.save()
            console.log(result)
            res.redirect("/student")
        } catch (error) {

            // console.log(error)
        }
    }

    static getAllDoc = async(req, res) => {
        try {
            const result = await StudentModel.find()
                // console.log(result);
            res.render("index", { data: result })
        } catch (error) {

        }
    }
    static editDoc = async(req, res) => {
        // console.log(req.params.id)
        try {
            const result = await StudentModel.findById(req.params.id)
                // console.log(result)
            res.render("edit", { data: result })
            res.render("edit")

        } catch (error) {

        }
    }
    static UpdateDocById = async(req, res) => {
        // console.log('update')
        // console.log(req.params.id)
        // console.log(req.body)
        try {
            const result = await StudentModel.findByIdAndUpdate(req.params.id, req.body)
            console.log(result)
            res.redirect("/student")
        } catch (error) {
            console.log(error)
        }
    }
    static DeleteDocById = async(req, res) => {
        try {
            const result = await StudentModel.findByIdAndDelete(req.params.id)
            console.log(result)
            res.redirect("/student")
        } catch (error) {
            console.log(error)
        }

    }
}

export default StudentController