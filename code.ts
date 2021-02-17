import readline from 'readline';

//#region input class. no need to edit. Thanks to https://github.com/bkolobara/stdin-line
export class StdinLineStream {
  rl: readline.Interface;
  buffer: string[] = [];
  resolvers: ((value: string) => void)[] = [];

  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
    });
    this.rl.on(`line`, (input) =>
      (this.resolvers.length > 0 ? this.resolvers.shift() : this.buffer.push)?.(
        input
      )
    );
  }

  public close = () => this.rl.close();

  public getLine = async (): Promise<string> =>
    new Promise((resolve) => {
      if (this.buffer.length > 0) {
        this.rl.pause();
        resolve(this.buffer.shift() ?? ``);
      } else {
        this.rl.resume();
        this.resolvers.push(resolve);
      }
    });

  public getLineAsNumbers = async (): Promise<number[]> =>
    this.getLine().then(line => line.split(/\s+/).map((num) => parseFloat(num)));
}
//#endregion

//#region logic area. change this
const caseProcess = async (index: number, input: string): Promise<string> => {
  const m = Number.parseInt(input);
  let a = `${Math.floor(m + (Math.random() * m * 100))}`;
  let b = `${Math.floor(m + (Math.random() * m * 100))}`;
  let c = `${Math.floor(m + (Math.random() * m * 100))}`;
  return `Case #${index}: ${a} ${b} ${c}`;
}
//#endregion

//#region runner. no need to edit.
const main = async () => {
  const inputStream = new StdinLineStream();

  const [numberOfCases] = await inputStream.getLineAsNumbers();
  for (let i = 1; i < numberOfCases + 1; i++) {
    console.log(await caseProcess(i, await inputStream.getLine()));
  }

  inputStream.close();
}
main();
//#endregion
