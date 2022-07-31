const slugify = require("slugify");

module.exports = {
  prompt: ({ inquirer }) => {
    // defining questions in arrays ensures all questions are asked before next prompt is executed
    const questions = [
      {
        type: "input",
        name: "title",
        message: "Title of blog post? (ex: How to create a blog post)",
        required: true,
      },
      {
        type: "input",
        name: "excerpt",
        message: "Excerpt of blog post? (Short description of the blog post)",
        required: true,
      },
      {
        type: "input",
        name: "category",
        message: "Category of blog post? (ex: React)",
        required: true,
      },
      {
        type: "input",
        name: "tags",
        message:
          "Tags of blog post (Comma Separated)? (ex: react, javascript, api)",
        required: true,
      },
      {
        type: "input",
        name: "image",
        message:
          "Route for the image of the blog post? (ex: /images/react-example-code.jpeg",
        required: true,
      },
      {
        type: "input",
        name: "author",
        message: "Name of the author?",
      },
      {
        type: "input",
        name: "date",
        message: "Date of blog post? (ex: 2022-12-01)",
        initial: new Date().toISOString().split("T")[0],
      },
    ];

    return inquirer.prompt(questions).then((answers) => {
      const { title, author, tags } = answers;

      return {
        ...answers,
        slug: slugify(title, { lower: true }),
        authorImage: `${slugify(author, { lower: true })}.jpeg`,
        tags: tags.split(",").map((tag) => tag.trim()),
      };
    });
  },
};
