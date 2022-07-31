module.exports = {
  prompt: ({ prompter, args }) =>
    prompter.prompt({
      type: "input",
      name: "name",
      message: "What is the component name?",
      required: true,
    }),
};
