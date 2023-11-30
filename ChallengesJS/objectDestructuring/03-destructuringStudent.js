const student = ["Miguel", ["HTML", "CSS", "JS", "React"], [98, 85, 90, 95]];
const [name, skills, scores] = student;

const studentObj = {
  name: name,
  skills: skills.map((skill, index) => ({
    skill: skill,
    score: scores[index],
  })),
};

console.log(studentObj);
