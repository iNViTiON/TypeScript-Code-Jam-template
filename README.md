## Google Code Jam TypeScript single file template 

I tried to find the easiest way to participate [Google Code Jam competition](https://codingcompetitions.withgoogle.com/codejam)
using only TypeScript.

This template heavily depend and use code from [@bkolobara](https://github.com/bkolobara "bkolobara (Bernard Kolobara) • GitHub") [stdin-line](https://github.com/bkolobara/stdin-line "GitHub - bkolobara/stdin-line: A node.js library for reading lines from standard input (stdin) with support for async/await.")

## Test run

This project use Yarn [Zero-Installs](https://yarnpkg.com/features/zero-installs). Just clone this repository and it's ready to run.

```bash
yarn start
```

Then you can enter input to process.

## Logic change

There're two file. `code.ts` and `code-es2019.ts`. The first one written in ES2020 but it can't run in Code Jam 2020 and you should use `code-es2019.ts` for that. Hoping Code Jam 2021 can run ES2020 in `code.ts`.

The file already indicate logic area region with caseProcess as async function so you can use async/await or any logic you need. caseProcess return string to log to output as result.

## Submit

Just submit `code.ts` as `TypeScript (Node.js)` with no need to build or rollup.
