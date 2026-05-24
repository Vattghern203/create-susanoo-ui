#!/usr/bin/env node

import inquirer from "inquirer";
import fs from "fs-extra";
import path from "path";
import chalk from "chalk";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const answers = await inquirer.prompt([
  {
    type: "input",
    name: "projectName",
    message: "Project name?"
  },
  {
    type: "list",
    name: "template",
    message: "Choose template",
    choices: [
      {
        name: "Vanilla HTML/CSS/JS",
        value: "vanilla"
      },
      {
        name: "SASS 7-1",
        value: "sass-7-1"
      }
    ]
  }
]);

const templateFolder = answers.template;

const targetPath = path.join(
  process.cwd(),
  answers.projectName
);

const templatePath = path.join(
  __dirname,
  "../templates",
  templateFolder
);

await fs.copy(templatePath, targetPath);

console.log(
  chalk.green("Project created successfully!")
);