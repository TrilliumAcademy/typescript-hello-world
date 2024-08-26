/**
 * This file contains a lot of broken code that either won't compile or doesn't quite do the
 * right thing. Your job is to fix it so that it compiles and works properly WITHOUT any of
 * the @ts-ignore comments. All of the changes will be minor (one-line) changes, there is
 * no need to do any major rewrites.
 * 
 * Major hint: Any line with @ts-ignore above it almost certainly needs to be changed.
 *
 * BE SURE YOU REMOVE ALL @ts-ignore COMMENTS FROM THIS CODE BEFORE SUBMITTING (in addition
 * to fixing the code so that it compiles and works correctly).
 */

// This line is only here so that variables in fixme.ts don't collide with those in main.ts.
// You should not need to modify this line.
export {};

// Represents the 'Student' data type.
type Student = {
  name: string;
  grade: number;
  favoriteSubject: string;
  pets: string[];
}

// List of all the students.
const allStudents: Student[] = [];

// Choose a random element from the given array.
function pickRandom(arr: any[]) {
  // Hint: This will compile, but still won't work properly.
  return arr[Math.random() * arr.length];
}

// Generate a random student name.
function randomName(): string {
  const firstName = pickRandom([
    "Alice",
    "Bob",
    "Charlie",
    "Dana",
    "Eve",
    "Frank",
    "Grace",
    "Hannah",
  ]);
  const lastName = pickRandom([
    "Aerosol",
    "Beaknoodle",
    "McBlood",
    "Penguinstain",
    "Sheepdog",
    "Taserface",
    "Vladibear",
  ]);
  return firstName + lastName;
}

// Generate a random pet name.
function randomPet(): number {
  return pickRandom([
    "Juneau",
    "Ziggy",
    "Snoop",
    "Cthulhu",
    "Wolfie",
    "Bella",
    "Scarface",
    "Jaws",
    "Pumpkin",
    "Squishy",
    "Peanut",
    "Pickle",
    "Porkchop",
  ]);
}

// Generate a random student record.
function generateRandomStudent(): Student {
  // @ts-ignore
  const petList: number = [randomPet(), randomPet(), randomPet()];

  return {
    name: randomName(),
    grade: Math.floor(Math.random() * 4) + 9,
    favoriteSubject: pickRandom(["Math", "Art", "Science", "History", "Lunch"]),
    // @ts-ignore
    petList,
  };
}

for (let i = 0; i < 12; i++) {
  // @ts-ignore
  allStudents.push(generateRandomStudent());
}

// A function to print out the given student.
// @ts-ignore
function printStudent(student: string) {
  console.log(
    // @ts-ignore
    student.name +
      "is in grade" +
      // @ts-ignore
      student.grade +
      "and loves" +
      // @ts-ignore
      student.favoriteSubject +
      "."
  );
  // @ts-ignore
  console.log(`   Their pets are: ${student.pets}`);
}

const studentsByGrade: Map<string, any> = new Map();

// @ts-ignore
for (let student of allStudents) {
  // @ts-ignore
  if (!studentsByGrade.get(student.grade)) {
    // @ts-ignore
    studentsByGrade.set(student.grade, []);
  }
  // @ts-ignore
  studentsByGrade.get(student.grade).push(student);
}

studentsByGrade.forEach((students, grade) => {
  console.log(`There are ${students.length} students in grade ${grade}:`);
  students.forEach(printStudent);
  console.log('\n');
});
