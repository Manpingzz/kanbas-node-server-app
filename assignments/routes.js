import db from "../Database/index.js";

function AssignmentRoutes(app) {
    // Get all assignments for a course
    app.get("/api/courses/:cid/assignments", (req, res) => {
        const { cid } = req.params;
        const assignments = db.assignments.filter((a) => a.course === cid);
        res.send(assignments);
    });

    // Create an assignment for a course
    app.post("/api/courses/:cid/assignments", (req, res) => {
        const { cid } = req.params;
        const newAssignment = {
            ...req.body,
            course: cid,
            _id: new Date().getTime().toString(),
        };
        db.assignments.push(newAssignment);
        res.send(newAssignment);
    });

    // Get a single assignment by ID
    // app.get("/api/assignments/:aid", (req, res) => {
    //     const { aid } = req.params;
    //     const assignment = db.assignments.find((a) => a._id === aid);
    //     if (assignment) {
    //         res.send(assignment);
    //     } else {
    //         res.status(404).send({ message: "Assignment not found" });
    //     }
    // });

    // Update an assignment
    app.put("/api/assignments/:aid", (req, res) => {
        const { aid } = req.params;
        const assignmentIndex = db.assignments.findIndex((a) => a._id === aid);

        db.assignments[assignmentIndex] = {
            ...db.assignments[assignmentIndex],
            ...req.body,
        };
        res.sendStatus(204);

    });

    // Delete an assignment
    app.delete("/api/assignments/:aid", (req, res) => {
        const { aid } = req.params;
        db.assignments = db.assignments.filter((a) => a._id !== aid);
        res.sendStatus(200);
    });
}

export default AssignmentRoutes;
