const greetings = ["Good Morning", "Good Afternoon", "Good Evening"];

const greeter = (personName) => {
  greetings.forEach((greeting) => {
    console.log(`${greeting}, ${personName}`);
  });
};

greeter("Victor");
