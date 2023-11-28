const student = ["Miguel", ["HTML", "CSS", "JS", "React"], [98, 85, 90, 95]];
const [name, skills, score] = student;

const studentObj = {
  name: name,
  skills: [
    {
      skill: skills.map((item) => item.skills),
      score: score.map((item) => item.skills),
    },
  ],
};
const studentMap = student.map((item) => {
  return `${item.name},${item.skills}, ${item.score}`;
});

console.log(`Name: ${name}, Skills: ${skills}, Score: ${score}`);
console.log(studentObj);
