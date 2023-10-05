const Skill = require('../models/skill');

module.exports = { 
    index: index, 
    show: show,
    new: newSkill,
    create: create,
    delete: deleteSkill,
    edit: edit,
    update: update 
};

function update(req, res) {
    req.body.done = !!req.body.done;
    Skill.update(req.params.id, req.body);
    res.redirect(`/skills/${req.params.id}`);
}

function edit(req, res) {
    const skill = Skill.getOne(req.params.id);
    res.render('skills/edit', {
        title: 'Check Yourself',
        skill
    });
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

function create(req, res) {
    console.log(req.body);
    Skill.create(req.body);
    res.redirect('/skills');
}

function newSkill(req, res) {
    res.render('skills/new', {
        title: 'New Skill'
    });
}

function show(req, res) {
    res.render('skills/show', { 
        skill: Skill.getOne(req.params.id),
        title: 'Inspect the Desc.'
    });
}

function index(req, res, next) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: 'Skills that Pay the Bills'
    });
}
