const skills = [
    {id: 193289, skill: 'Express.js', desc: 'builds web applications'},
    {id: 2532223, skill: 'Debugging', desc: 'process of finding and fixing bugs in code'},
    {id: 247105, skill: 'Npm Install', desc: 'used to install devDependencies from a package.json file'}
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    let skill = skills.find(skill => skill.id === id);
    return skill;
}