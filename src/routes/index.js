const express = require('express');
const router = express.Router();

// colocar las rutas aquí
router.get('/', (req, res) => {
    res.render("home");
});

router.get('/services', (req, res) => {
    res.render('services');
});

router.get('/team', (req, res) => {
    res.render('workers');
});

router.get('/team/:name', (req, res) => {
    const { name } = req.params;
    res.render("team-member", { name });
});

router.get('/about-me', (req, res) => {
    res.render("about-me");
});

router.get('/projects', (req, res) => {
    res.render('projects');
});

router.get('/projects/:id', (req, res) => {
    const { id } = req.params;
    res.render('project-detail', { id });
});

module.exports = router;
