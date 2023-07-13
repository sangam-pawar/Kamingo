const express = require('express')
const router = express.Router()

router.use(logger)

router.get("/", (req,res) => {
    res.send("User List")
})

router.get("/new", (req,res) => {
    res.send("User New form")
})

router.post("/",(req,res) => {
    res.send("Create User")
})

router
    .route("/:id")
    .get((req,res) => {
        res.send('Get user With ID ${req.params.id}')
    })

    .put((req,res) => {
        res.send('Update user With ID ${req.params.id}')
    })

    .delete((req,res) => {
        res.send('Delete user With ID ${req.params.id}')
    })

    