const skills = [
    {id: 193289, skill: 'Express.js', desc: 'builds web applications'},
    {id: 2532223, skill: 'Debugging', desc: 'process of finding and fixing bugs in code'},
    {id: 247105, skill: 'Npm Install', desc: 'used to install devDependencies from a package.json file'}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

function update(id, updateSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updateSkill);
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(todo => skill.id === id);
    skills.splice(idx, 1);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.dont = false;
    skills.push(skill);
}

function getOne(id) {
    id = parseInt(id);
    let skill = skills.find(skill => skill.id === id);
    return skill;
}

function getAll() {
    return skills;
}
