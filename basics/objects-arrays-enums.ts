// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Alex",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"]
// };

enum Role {
  ADMIN = 100,
  READ_ONLY = 101,
  AUTHOR = 102
}

const person = {
  name: "Alex",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log("is admin");
}
