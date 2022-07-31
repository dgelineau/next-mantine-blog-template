module.exports = {
  prompt: ({ prompter }) =>
    prompter.prompt({
      type: "input",
      name: "name",
      message: "What is the component name?",
      required: true,
    }),
};
