
const numberOfStudents = 5;
const participationPercentage = 0.3;
const summativeAssessmentPercentage = 0.3;
const finalExamPercentage = 0.4;
const gradeSystem = [
  { score: 100, grade: "A" },
  { score: 90, grade: "B" },
  { score: 80, grade: "C" },
  { score: 70, grade: "D" },
  { score: 0, grade: "F" },
];
const students = [];

for (let i = 1; i <= numberOfStudents; i++) {
  const student = {};


  student.name = prompt(`Enter the name of student ${i}:`);
  student.enablingAssessments = [
    parseInt(prompt(`Enter enabling assessment 1 for ${student.name}:`)),
    parseInt(prompt(`Enter enabling assessment 2 for ${student.name}:`)),
    parseInt(prompt(`Enter enabling assessment 3 for ${student.name}:`)),
    parseInt(prompt(`Enter enabling assessment 4 for ${student.name}:`)),
    parseInt(prompt(`Enter enabling assessment 5 for ${student.name}:`)),
  ];
  student.summativeAssessments = [
    parseInt(prompt(`Enter summative assessment 1 for ${student.name}:`)),
    parseInt(prompt(`Enter summative assessment 2 for ${student.name}:`)),
    parseInt(prompt(`Enter summative assessment 3 for ${student.name}:`)),
  ];
  student.finalExam = parseInt(
    prompt(`Enter major exam grade for ${student.name}:`)
  );


  const enablingAssessmentsSum = student.enablingAssessments.reduce(
    (acc, grade) => acc + grade,
    0
  );
  student.participation =
    enablingAssessmentsSum / student.enablingAssessments.length;


  const summativeAssessmentsSum = student.summativeAssessments.reduce(
    (acc, grade) => acc + grade,
    0
  );
  student.summativeAssessment =
    summativeAssessmentsSum / student.summativeAssessments.length;


  student.grade =
    student.participation * participationPercentage +
    student.summativeAssessment * summativeAssessmentPercentage +
    student.finalExam * finalExamPercentage;

  const letter = gradeSystem.find(
    (grade) => student.grade >= grade.score
  );
  student.letter = letter.grade;


  students.push(student);
}


console.table(students, [
  "name",
  "participation",
  "summativeAssessment",
  "finalExam",
  "grade",
  "letter",
]);
