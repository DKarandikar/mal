import * as readline from "readline";
import { stdin as input, stdout as output } from 'process';

const READ = (s: string) => {
    return s
}

const EVAL = (s: string) => {
    return s
}

const PRINT = (s: string) => {
    return s
}

const rep = (s: string) => {
    return PRINT(EVAL(READ(s)))
}

const main = () => {
    const rl = readline.createInterface({ input, output });

    rl.setPrompt("user> ");
    rl.prompt();

    rl.on('line', (input) => {
        console.log(rep(input));
        rl.prompt();
    });
}

main()