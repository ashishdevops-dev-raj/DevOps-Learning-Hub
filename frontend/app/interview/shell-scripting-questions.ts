// Shell Scripting Interview Questions - 100 Questions
// Easy Level (1-35), Medium Level (36-70), Hard Level (71-100)

export const shellScriptingQuestions = [
  // Easy Level (Questions 1-35)
  {
    topic: 'Shell Scripting',
    question: 'What is a shell?',
    answer: 'A shell is a command-line interface that interprets user commands and executes them.',
    difficulty: 'Easy'
  },
  {
    topic: 'Shell Scripting',
    question: 'What are common Unix/Linux shells?',
    answer: 'Common shells:\n- Bash (Bourne Again Shell) - Most common\n- sh (Bourne Shell)\n- zsh (Z Shell)\n- fish (Friendly Interactive Shell)\n- csh/tcsh (C Shell)',
    difficulty: 'Easy'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is a shell script?',
    answer: 'A shell script is a file containing a series of shell commands executed sequentially.',
    difficulty: 'Easy'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is a shebang?',
    answer: 'A shebang (`#!/bin/bash`) is the first line of a script specifying the interpreter.',
    difficulty: 'Easy'
  },
  {
    topic: 'Shell Scripting',
    question: 'How do you make a script executable?',
    answer: 'Command:\n```bash\nchmod +x script.sh\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Shell Scripting',
    question: 'How do you run a shell script?',
    answer: 'Methods:\n```bash\n./script.sh\nbash script.sh\nsh script.sh\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is a variable?',
    answer: 'A variable stores a value that can be referenced later.',
    difficulty: 'Easy'
  },
  {
    topic: 'Shell Scripting',
    question: 'How do you set a variable?',
    answer: 'Syntax:\n```bash\nVAR="value"\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Shell Scripting',
    question: 'How do you use a variable?',
    answer: 'Examples:\n```bash\necho $VAR\necho ${VAR}\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Shell Scripting',
    question: 'What are special variables?',
    answer: 'Special variables:\n- `$0`: Script name\n- `$1, $2, ...`: Positional parameters\n- `$#`: Number of arguments\n- `$@`: All arguments\n- `$?`: Exit status\n- `$$`: Process ID',
    difficulty: 'Easy'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `$?`?',
    answer: '`$?` contains the exit status of the last command (0 = success, non-zero = error).',
    difficulty: 'Easy'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is the difference between `$@` and `$*`?',
    answer: '- `$@`: All arguments as separate strings\n- `$*`: All arguments as single string',
    difficulty: 'Easy'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is an if statement?',
    answer: 'An if statement conditionally executes commands based on a condition.',
    difficulty: 'Easy'
  },
  {
    topic: 'Shell Scripting',
    question: 'How do you write an if statement?',
    answer: 'Syntax:\n```bash\nif [ condition ]; then\n    commands\nfi\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is a for loop?',
    answer: 'A for loop repeats commands for each item in a list.',
    difficulty: 'Easy'
  },
  {
    topic: 'Shell Scripting',
    question: 'How do you write a for loop?',
    answer: 'Example:\n```bash\nfor i in 1 2 3; do\n    echo $i\ndone\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is a while loop?',
    answer: 'A while loop repeats commands while a condition is true.',
    difficulty: 'Easy'
  },
  {
    topic: 'Shell Scripting',
    question: 'How do you write a while loop?',
    answer: 'Example:\n```bash\nwhile [ condition ]; do\n    commands\ndone\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is a function?',
    answer: 'A function is a named block of code that can be called multiple times.',
    difficulty: 'Easy'
  },
  {
    topic: 'Shell Scripting',
    question: 'How do you define a function?',
    answer: 'Syntax:\n```bash\nfunction_name() {\n    commands\n}\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `read`?',
    answer: '`read` reads input from the user or a file.',
    difficulty: 'Easy'
  },
  {
    topic: 'Shell Scripting',
    question: 'How do you read input?',
    answer: 'Examples:\n```bash\nread variable\nread -p "Prompt: " variable\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `echo`?',
    answer: '`echo` prints text to standard output.',
    difficulty: 'Easy'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `printf`?',
    answer: '`printf` prints formatted text.',
    difficulty: 'Easy'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is redirection?',
    answer: 'Redirection changes where input/output goes.',
    difficulty: 'Easy'
  },
  {
    topic: 'Shell Scripting',
    question: 'What are redirection operators?',
    answer: 'Redirection operators:\n- `>`: Redirect stdout (overwrite)\n- `>>`: Redirect stdout (append)\n- `<`: Redirect stdin\n- `2>`: Redirect stderr\n- `&>`: Redirect both',
    difficulty: 'Easy'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is a pipe?',
    answer: 'A pipe (`|`) sends output of one command as input to another.',
    difficulty: 'Easy'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `grep`?',
    answer: '`grep` searches for patterns in text.',
    difficulty: 'Easy'
  },
  {
    topic: 'Shell Scripting',
    question: 'How do you use grep?',
    answer: 'Examples:\n```bash\ngrep "pattern" file.txt\ngrep -r "pattern" dir/\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `sed`?',
    answer: '`sed` is a stream editor for filtering and transforming text.',
    difficulty: 'Easy'
  },
  {
    topic: 'Shell Scripting',
    question: 'How do you use sed?',
    answer: 'Examples:\n```bash\nsed \'s/old/new/g\' file.txt\nsed -i \'s/old/new/g\' file.txt\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `awk`?',
    answer: '`awk` is a text processing tool and programming language.',
    difficulty: 'Easy'
  },
  {
    topic: 'Shell Scripting',
    question: 'How do you use awk?',
    answer: 'Examples:\n```bash\nawk \'{print $1}\' file.txt\nawk -F: \'{print $1}\' file.txt\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `find`?',
    answer: '`find` searches for files and directories.',
    difficulty: 'Easy'
  },
  {
    topic: 'Shell Scripting',
    question: 'How do you use find?',
    answer: 'Examples:\n```bash\nfind . -name "*.txt"\nfind . -type f -size +100M\n```',
    difficulty: 'Easy'
  },

  // Medium Level (Questions 36-70)
  {
    topic: 'Shell Scripting',
    question: 'What is `test` command?',
    answer: '`test` evaluates conditional expressions (also written as `[ ]`).',
    difficulty: 'Medium'
  },
  {
    topic: 'Shell Scripting',
    question: 'What are file test operators?',
    answer: 'File test operators:\n- `-f`: Regular file exists\n- `-d`: Directory exists\n- `-r`: File is readable\n- `-w`: File is writable\n- `-x`: File is executable\n- `-s`: File is not empty',
    difficulty: 'Medium'
  },
  {
    topic: 'Shell Scripting',
    question: 'What are string test operators?',
    answer: 'String test operators:\n- `-z`: String is empty\n- `-n`: String is not empty\n- `=`: Strings are equal\n- `!=`: Strings are not equal',
    difficulty: 'Medium'
  },
  {
    topic: 'Shell Scripting',
    question: 'What are numeric test operators?',
    answer: 'Numeric test operators:\n- `-eq`: Equal\n- `-ne`: Not equal\n- `-lt`: Less than\n- `-le`: Less than or equal\n- `-gt`: Greater than\n- `-ge`: Greater than or equal',
    difficulty: 'Medium'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `case` statement?',
    answer: '`case` matches a value against patterns.',
    difficulty: 'Medium'
  },
  {
    topic: 'Shell Scripting',
    question: 'How do you write a case statement?',
    answer: 'Example:\n```bash\ncase $var in\n    pattern1)\n        commands\n        ;;\n    pattern2)\n        commands\n        ;;\nesac\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `set`?',
    answer: '`set` controls shell options and positional parameters.',
    difficulty: 'Medium'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `set -e`?',
    answer: '`set -e` exits immediately if a command exits with non-zero status.',
    difficulty: 'Medium'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `set -u`?',
    answer: '`set -u` treats unset variables as an error.',
    difficulty: 'Medium'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `set -o pipefail`?',
    answer: '`set -o pipefail` returns exit status of last command in pipeline.',
    difficulty: 'Medium'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `trap`?',
    answer: '`trap` executes commands when signals are received.',
    difficulty: 'Medium'
  },
  {
    topic: 'Shell Scripting',
    question: 'How do you use trap?',
    answer: 'Examples:\n```bash\ntrap \'cleanup\' EXIT\ntrap \'echo "Interrupted"\' INT\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `local`?',
    answer: '`local` declares a variable local to a function.',
    difficulty: 'Medium'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `export`?',
    answer: '`export` makes a variable available to child processes.',
    difficulty: 'Medium'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `readonly`?',
    answer: '`readonly` makes a variable read-only.',
    difficulty: 'Medium'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is an array?',
    answer: 'An array stores multiple values.',
    difficulty: 'Medium'
  },
  {
    topic: 'Shell Scripting',
    question: 'How do you create an array?',
    answer: 'Syntax:\n```bash\narr=(item1 item2 item3)\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Shell Scripting',
    question: 'How do you access array elements?',
    answer: 'Examples:\n```bash\n${arr[0]}        # First element\n${arr[@]}        # All elements\n${#arr[@]}       # Array length\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is string substitution?',
    answer: 'String substitution manipulates strings using parameter expansion.',
    difficulty: 'Medium'
  },
  {
    topic: 'Shell Scripting',
    question: 'What are string substitution operators?',
    answer: 'String substitution operators:\n- `${var#pattern}`: Remove shortest prefix\n- `${var##pattern}`: Remove longest prefix\n- `${var%pattern}`: Remove shortest suffix\n- `${var%%pattern}`: Remove longest suffix\n- `${var/old/new}`: Replace first occurrence\n- `${var//old/new}`: Replace all occurrences',
    difficulty: 'Medium'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is arithmetic expansion?',
    answer: 'Arithmetic expansion evaluates arithmetic expressions: `$((expression))`',
    difficulty: 'Medium'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `let`?',
    answer: '`let` evaluates arithmetic expressions.',
    difficulty: 'Medium'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `expr`?',
    answer: '`expr` evaluates expressions.',
    difficulty: 'Medium'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `here document`?',
    answer: 'Here document redirects input from script: `<<EOF ... EOF`',
    difficulty: 'Medium'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `here string`?',
    answer: 'Here string passes string as input: `<<<"string"`',
    difficulty: 'Medium'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `exec`?',
    answer: '`exec` replaces the shell process with a command.',
    difficulty: 'Medium'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `eval`?',
    answer: '`eval` evaluates arguments as shell commands.',
    difficulty: 'Medium'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `source` or `.`?',
    answer: '`source` executes a script in current shell (not subprocess).',
    difficulty: 'Medium'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `shift`?',
    answer: '`shift` shifts positional parameters left.',
    difficulty: 'Medium'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `getopts`?',
    answer: '`getopts` parses command-line options.',
    difficulty: 'Medium'
  },
  {
    topic: 'Shell Scripting',
    question: 'How do you use getopts?',
    answer: 'Example:\n```bash\nwhile getopts "a:b:" opt; do\n    case $opt in\n        a) arg_a=$OPTARG ;;\n        b) arg_b=$OPTARG ;;\n    esac\ndone\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `basename`?',
    answer: '`basename` extracts filename from path.',
    difficulty: 'Medium'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `dirname`?',
    answer: '`dirname` extracts directory from path.',
    difficulty: 'Medium'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `mktemp`?',
    answer: '`mktemp` creates temporary files or directories.',
    difficulty: 'Medium'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `trap` for cleanup?',
    answer: '`trap` can execute cleanup functions on script exit.',
    difficulty: 'Medium'
  },

  // High/Advanced Level (Questions 71-100)
  {
    topic: 'Shell Scripting',
    question: 'What is process substitution?',
    answer: 'Process substitution: `<(command)` or `>(command)`',
    difficulty: 'Hard'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `coproc`?',
    answer: '`coproc` creates a coprocess (Bash 4.0+).',
    difficulty: 'Hard'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `select`?',
    answer: '`select` creates a menu from a list.',
    difficulty: 'Hard'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `until` loop?',
    answer: '`until` loop repeats until condition is true (opposite of while).',
    difficulty: 'Hard'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `continue`?',
    answer: '`continue` skips remaining commands in loop iteration.',
    difficulty: 'Hard'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `break`?',
    answer: '`break` exits from a loop.',
    difficulty: 'Hard'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `return`?',
    answer: '`return` exits from a function with a status code.',
    difficulty: 'Hard'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `exit`?',
    answer: '`exit` terminates the script with a status code.',
    difficulty: 'Hard'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `wait`?',
    answer: '`wait` waits for background processes to complete.',
    difficulty: 'Hard'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `jobs`?',
    answer: '`jobs` lists active jobs.',
    difficulty: 'Hard'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `fg`?',
    answer: '`fg` brings a job to foreground.',
    difficulty: 'Hard'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `bg`?',
    answer: '`bg` sends a job to background.',
    difficulty: 'Hard'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `nohup`?',
    answer: '`nohup` runs a command immune to hangups.',
    difficulty: 'Hard'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `disown`?',
    answer: '`disown` removes a job from shell\'s job control.',
    difficulty: 'Hard'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `ulimit`?',
    answer: '`ulimit` controls resource limits.',
    difficulty: 'Hard'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `time`?',
    answer: '`time` measures execution time of a command.',
    difficulty: 'Hard'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `xargs`?',
    answer: '`xargs` builds and executes commands from stdin.',
    difficulty: 'Hard'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `parallel`?',
    answer: '`parallel` runs commands in parallel (GNU parallel).',
    difficulty: 'Hard'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `tee`?',
    answer: '`tee` reads from stdin and writes to stdout and files.',
    difficulty: 'Hard'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `sort`?',
    answer: '`sort` sorts lines of text.',
    difficulty: 'Hard'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `uniq`?',
    answer: '`uniq` removes duplicate lines.',
    difficulty: 'Hard'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `cut`?',
    answer: '`cut` extracts columns from text.',
    difficulty: 'Hard'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `paste`?',
    answer: '`paste` merges lines from files.',
    difficulty: 'Hard'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `join`?',
    answer: '`join` joins lines from two files.',
    difficulty: 'Hard'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `comm`?',
    answer: '`comm` compares two sorted files.',
    difficulty: 'Hard'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `diff`?',
    answer: '`diff` compares files line by line.',
    difficulty: 'Hard'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `patch`?',
    answer: '`patch` applies diff files.',
    difficulty: 'Hard'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `tar`?',
    answer: '`tar` archives files.',
    difficulty: 'Hard'
  },
  {
    topic: 'Shell Scripting',
    question: 'What is `rsync`?',
    answer: '`rsync` synchronizes files and directories.',
    difficulty: 'Hard'
  },
  {
    topic: 'Shell Scripting',
    question: 'What are shell scripting best practices?',
    answer: 'Best practices:\n- Use `set -euo pipefail` for error handling\n- Quote variables to prevent word splitting\n- Use `[[ ]]` instead of `[ ]` in Bash\n- Use `readonly` for constants\n- Use `local` in functions\n- Check if files exist before operations\n- Use meaningful variable names\n- Add comments for complex logic\n- Use functions for reusable code\n- Handle errors gracefully\n- Use `trap` for cleanup\n- Validate input\n- Use `getopts` for options\n- Avoid hardcoded paths\n- Use `$()` instead of backticks\n- Prefer `printf` over `echo` for portability\n- Use arrays for multiple values\n- Test scripts thoroughly\n- Follow POSIX when possible\n- Document your scripts',
    difficulty: 'Hard'
  }
]

