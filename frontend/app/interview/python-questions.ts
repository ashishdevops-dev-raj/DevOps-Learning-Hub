// Python Interview Questions - 100 Questions
// Easy Level (1-35), Medium Level (36-70), Hard Level (71-100)

export const pythonQuestions = [
  // Easy Level (Questions 1-35)
  {
    topic: 'Python',
    question: 'What is Python?',
    answer: 'Python is a high-level, interpreted programming language known for its simplicity and readability. It\'s widely used in DevOps, automation, web development, and data science.',
    difficulty: 'Easy'
  },
  {
    topic: 'Python',
    question: 'What are the key features of Python?',
    answer: 'Key features:\n- Simple and readable syntax\n- Interpreted language\n- Dynamically typed\n- Object-oriented\n- Extensive standard library\n- Cross-platform',
    difficulty: 'Easy'
  },
  {
    topic: 'Python',
    question: 'What is the difference between Python 2 and Python 3?',
    answer: 'Python 3 is the current version with improved features, better Unicode support, and cleaner syntax. Python 2 is deprecated.',
    difficulty: 'Easy'
  },
  {
    topic: 'Python',
    question: 'How do you run a Python script?',
    answer: 'Commands:\n```bash\npython script.py\npython3 script.py\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Python',
    question: 'What is a variable in Python?',
    answer: 'A variable is a name that refers to a value stored in memory.',
    difficulty: 'Easy'
  },
  {
    topic: 'Python',
    question: 'What are Python data types?',
    answer: 'Python data types:\n- int: Integer\n- float: Floating point\n- str: String\n- bool: Boolean\n- list: List\n- dict: Dictionary\n- tuple: Tuple\n- set: Set',
    difficulty: 'Easy'
  },
  {
    topic: 'Python',
    question: 'What is the difference between a list and a tuple?',
    answer: '- List: Mutable, uses square brackets `[]`\n- Tuple: Immutable, uses parentheses `()`',
    difficulty: 'Easy'
  },
  {
    topic: 'Python',
    question: 'What is a dictionary?',
    answer: 'A dictionary is a collection of key-value pairs, unordered and mutable.',
    difficulty: 'Easy'
  },
  {
    topic: 'Python',
    question: 'How do you create a dictionary?',
    answer: 'Examples:\n```python\ndict = {\'key\': \'value\'}\ndict = dict(key=\'value\')\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Python',
    question: 'What is a string?',
    answer: 'A string is a sequence of characters enclosed in quotes.',
    difficulty: 'Easy'
  },
  {
    topic: 'Python',
    question: 'What is string slicing?',
    answer: 'String slicing extracts a portion of a string using indices: `string[start:end:step]`',
    difficulty: 'Easy'
  },
  {
    topic: 'Python',
    question: 'What is a function?',
    answer: 'A function is a block of reusable code that performs a specific task.',
    difficulty: 'Easy'
  },
  {
    topic: 'Python',
    question: 'How do you define a function?',
    answer: 'Example:\n```python\ndef function_name(parameters):\n    return value\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Python',
    question: 'What is the difference between `print()` and `return`?',
    answer: '- `print()`: Displays output to console\n- `return`: Returns a value from a function',
    difficulty: 'Easy'
  },
  {
    topic: 'Python',
    question: 'What is a module?',
    answer: 'A module is a file containing Python code (functions, classes, variables).',
    difficulty: 'Easy'
  },
  {
    topic: 'Python',
    question: 'How do you import a module?',
    answer: 'Examples:\n```python\nimport module\nfrom module import function\nimport module as alias\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Python',
    question: 'What is a package?',
    answer: 'A package is a collection of modules organized in directories.',
    difficulty: 'Easy'
  },
  {
    topic: 'Python',
    question: 'What is `if __name__ == "__main__"`?',
    answer: 'It checks if the script is being run directly (not imported), allowing code to run only when executed as main.',
    difficulty: 'Easy'
  },
  {
    topic: 'Python',
    question: 'What is a loop?',
    answer: 'A loop repeats a block of code multiple times.',
    difficulty: 'Easy'
  },
  {
    topic: 'Python',
    question: 'What are the types of loops in Python?',
    answer: 'Loop types:\n- `for` loop: Iterates over a sequence\n- `while` loop: Repeats while condition is true',
    difficulty: 'Easy'
  },
  {
    topic: 'Python',
    question: 'What is list comprehension?',
    answer: 'List comprehension is a concise way to create lists: `[expression for item in iterable]`',
    difficulty: 'Easy'
  },
  {
    topic: 'Python',
    question: 'What is a file operation?',
    answer: 'File operations involve reading from or writing to files.',
    difficulty: 'Easy'
  },
  {
    topic: 'Python',
    question: 'How do you read a file?',
    answer: 'Example:\n```python\nwith open(\'file.txt\', \'r\') as f:\n    content = f.read()\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Python',
    question: 'How do you write to a file?',
    answer: 'Example:\n```python\nwith open(\'file.txt\', \'w\') as f:\n    f.write(\'content\')\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Python',
    question: 'What is exception handling?',
    answer: 'Exception handling manages errors using `try`, `except`, `finally` blocks.',
    difficulty: 'Easy'
  },
  {
    topic: 'Python',
    question: 'How do you handle exceptions?',
    answer: 'Example:\n```python\ntry:\n    # code\nexcept Exception as e:\n    # handle error\nfinally:\n    # cleanup\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Python',
    question: 'What is `pip`?',
    answer: '`pip` is the package installer for Python.',
    difficulty: 'Easy'
  },
  {
    topic: 'Python',
    question: 'How do you install a package?',
    answer: 'Command:\n```bash\npip install package_name\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Python',
    question: 'What is a virtual environment?',
    answer: 'A virtual environment is an isolated Python environment for project dependencies.',
    difficulty: 'Easy'
  },
  {
    topic: 'Python',
    question: 'How do you create a virtual environment?',
    answer: 'Commands:\n```bash\npython -m venv venv\nsource venv/bin/activate  # Linux/Mac\nvenv\\Scripts\\activate     # Windows\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Python',
    question: 'What is `requirements.txt`?',
    answer: '`requirements.txt` lists project dependencies for easy installation.',
    difficulty: 'Easy'
  },
  {
    topic: 'Python',
    question: 'What is a class?',
    answer: 'A class is a blueprint for creating objects (instances).',
    difficulty: 'Easy'
  },
  {
    topic: 'Python',
    question: 'What is an object?',
    answer: 'An object is an instance of a class.',
    difficulty: 'Easy'
  },
  {
    topic: 'Python',
    question: 'What is `self`?',
    answer: '`self` refers to the instance of the class in method definitions.',
    difficulty: 'Easy'
  },
  {
    topic: 'Python',
    question: 'What is inheritance?',
    answer: 'Inheritance allows a class to inherit attributes and methods from another class.',
    difficulty: 'Easy'
  },

  // Medium Level (Questions 36-70)
  {
    topic: 'Python',
    question: 'What is the difference between `==` and `is`?',
    answer: '- `==`: Compares values\n- `is`: Compares object identity (memory location)',
    difficulty: 'Medium'
  },
  {
    topic: 'Python',
    question: 'What is a generator?',
    answer: 'A generator is a function that yields values one at a time, memory-efficient.',
    difficulty: 'Medium'
  },
  {
    topic: 'Python',
    question: 'How do you create a generator?',
    answer: 'Example:\n```python\ndef generator():\n    yield value\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Python',
    question: 'What is a decorator?',
    answer: 'A decorator is a function that modifies another function\'s behavior.',
    difficulty: 'Medium'
  },
  {
    topic: 'Python',
    question: 'What is `*args`?',
    answer: '`*args` allows a function to accept variable number of positional arguments.',
    difficulty: 'Medium'
  },
  {
    topic: 'Python',
    question: 'What is `**kwargs`?',
    answer: '`**kwargs` allows a function to accept variable number of keyword arguments.',
    difficulty: 'Medium'
  },
  {
    topic: 'Python',
    question: 'What is lambda?',
    answer: 'Lambda is an anonymous function: `lambda x: x * 2`',
    difficulty: 'Medium'
  },
  {
    topic: 'Python',
    question: 'What is a list vs set?',
    answer: '- List: Ordered, allows duplicates, mutable\n- Set: Unordered, no duplicates, mutable',
    difficulty: 'Medium'
  },
  {
    topic: 'Python',
    question: 'What is a tuple vs list?',
    answer: '- Tuple: Immutable, faster, uses `()`\n- List: Mutable, uses `[]`',
    difficulty: 'Medium'
  },
  {
    topic: 'Python',
    question: 'What is dictionary comprehension?',
    answer: 'Dictionary comprehension creates dictionaries: `{k: v for k, v in iterable}`',
    difficulty: 'Medium'
  },
  {
    topic: 'Python',
    question: 'What is `enumerate()`?',
    answer: '`enumerate()` adds counter to iterable: `enumerate(iterable, start=0)`',
    difficulty: 'Medium'
  },
  {
    topic: 'Python',
    question: 'What is `zip()`?',
    answer: '`zip()` combines multiple iterables into tuples.',
    difficulty: 'Medium'
  },
  {
    topic: 'Python',
    question: 'What is `map()`?',
    answer: '`map()` applies a function to all items in an iterable.',
    difficulty: 'Medium'
  },
  {
    topic: 'Python',
    question: 'What is `filter()`?',
    answer: '`filter()` filters items from iterable based on condition.',
    difficulty: 'Medium'
  },
  {
    topic: 'Python',
    question: 'What is `reduce()`?',
    answer: '`reduce()` applies a function cumulatively to items (from functools).',
    difficulty: 'Medium'
  },
  {
    topic: 'Python',
    question: 'What is `os` module?',
    answer: '`os` module provides functions for interacting with the operating system.',
    difficulty: 'Medium'
  },
  {
    topic: 'Python',
    question: 'What is `sys` module?',
    answer: '`sys` module provides access to Python interpreter variables and functions.',
    difficulty: 'Medium'
  },
  {
    topic: 'Python',
    question: 'What is `subprocess` module?',
    answer: '`subprocess` module allows running shell commands from Python.',
    difficulty: 'Medium'
  },
  {
    topic: 'Python',
    question: 'How do you run a shell command?',
    answer: 'Example:\n```python\nimport subprocess\nsubprocess.run([\'ls\', \'-l\'])\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Python',
    question: 'What is `json` module?',
    answer: '`json` module handles JSON data encoding and decoding.',
    difficulty: 'Medium'
  },
  {
    topic: 'Python',
    question: 'What is `yaml` module?',
    answer: '`yaml` module handles YAML file parsing (requires PyYAML).',
    difficulty: 'Medium'
  },
  {
    topic: 'Python',
    question: 'What is `requests` library?',
    answer: '`requests` library simplifies HTTP requests.',
    difficulty: 'Medium'
  },
  {
    topic: 'Python',
    question: 'What is `logging` module?',
    answer: '`logging` module provides flexible logging functionality.',
    difficulty: 'Medium'
  },
  {
    topic: 'Python',
    question: 'What is `argparse` module?',
    answer: '`argparse` module creates command-line interfaces.',
    difficulty: 'Medium'
  },
  {
    topic: 'Python',
    question: 'What is `pathlib`?',
    answer: '`pathlib` provides object-oriented filesystem paths (Python 3.4+).',
    difficulty: 'Medium'
  },
  {
    topic: 'Python',
    question: 'What is `collections` module?',
    answer: '`collections` module provides specialized container datatypes.',
    difficulty: 'Medium'
  },
  {
    topic: 'Python',
    question: 'What is `defaultdict`?',
    answer: '`defaultdict` is a dictionary with default values for missing keys.',
    difficulty: 'Medium'
  },
  {
    topic: 'Python',
    question: 'What is `Counter`?',
    answer: '`Counter` counts hashable objects (from collections).',
    difficulty: 'Medium'
  },
  {
    topic: 'Python',
    question: 'What is `itertools`?',
    answer: '`itertools` provides iterator functions for efficient looping.',
    difficulty: 'Medium'
  },
  {
    topic: 'Python',
    question: 'What is `functools`?',
    answer: '`functools` provides higher-order functions and operations on callable objects.',
    difficulty: 'Medium'
  },
  {
    topic: 'Python',
    question: 'What is `contextlib`?',
    answer: '`contextlib` provides utilities for context managers.',
    difficulty: 'Medium'
  },
  {
    topic: 'Python',
    question: 'What is a context manager?',
    answer: 'A context manager manages resources using `with` statement.',
    difficulty: 'Medium'
  },
  {
    topic: 'Python',
    question: 'What is `__init__`?',
    answer: '`__init__` is the constructor method that initializes an object.',
    difficulty: 'Medium'
  },
  {
    topic: 'Python',
    question: 'What is `__str__`?',
    answer: '`__str__` returns string representation of an object.',
    difficulty: 'Medium'
  },
  {
    topic: 'Python',
    question: 'What is `__repr__`?',
    answer: '`__repr__` returns official string representation of an object.',
    difficulty: 'Medium'
  },

  // High/Advanced Level (Questions 71-100)
  {
    topic: 'Python',
    question: 'What is a metaclass?',
    answer: 'A metaclass is a class of a class, controlling class creation.',
    difficulty: 'Hard'
  },
  {
    topic: 'Python',
    question: 'What is `__new__`?',
    answer: '`__new__` creates a new instance before `__init__` is called.',
    difficulty: 'Hard'
  },
  {
    topic: 'Python',
    question: 'What is `__call__`?',
    answer: '`__call__` makes an instance callable like a function.',
    difficulty: 'Hard'
  },
  {
    topic: 'Python',
    question: 'What is `__getattr__`?',
    answer: '`__getattr__` is called when attribute lookup fails.',
    difficulty: 'Hard'
  },
  {
    topic: 'Python',
    question: 'What is `__setattr__`?',
    answer: '`__setattr__` is called when setting an attribute.',
    difficulty: 'Hard'
  },
  {
    topic: 'Python',
    question: 'What is `__getitem__`?',
    answer: '`__getitem__` enables indexing: `obj[key]`',
    difficulty: 'Hard'
  },
  {
    topic: 'Python',
    question: 'What is `__iter__`?',
    answer: '`__iter__` makes an object iterable.',
    difficulty: 'Hard'
  },
  {
    topic: 'Python',
    question: 'What is `__enter__` and `__exit__`?',
    answer: 'These methods implement context manager protocol.',
    difficulty: 'Hard'
  },
  {
    topic: 'Python',
    question: 'What is `property`?',
    answer: '`property` creates managed attributes with getters/setters.',
    difficulty: 'Hard'
  },
  {
    topic: 'Python',
    question: 'What is `staticmethod`?',
    answer: '`staticmethod` defines a method that doesn\'t require instance or class.',
    difficulty: 'Hard'
  },
  {
    topic: 'Python',
    question: 'What is `classmethod`?',
    answer: '`classmethod` defines a method that receives class as first argument.',
    difficulty: 'Hard'
  },
  {
    topic: 'Python',
    question: 'What is `@property` decorator?',
    answer: '`@property` converts a method into a read-only attribute.',
    difficulty: 'Hard'
  },
  {
    topic: 'Python',
    question: 'What is `@staticmethod` decorator?',
    answer: '`@staticmethod` defines a static method.',
    difficulty: 'Hard'
  },
  {
    topic: 'Python',
    question: 'What is `@classmethod` decorator?',
    answer: '`@classmethod` defines a class method.',
    difficulty: 'Hard'
  },
  {
    topic: 'Python',
    question: 'What is multiple inheritance?',
    answer: 'Multiple inheritance allows a class to inherit from multiple parent classes.',
    difficulty: 'Hard'
  },
  {
    topic: 'Python',
    question: 'What is Method Resolution Order (MRO)?',
    answer: 'MRO determines the order in which base classes are searched for methods.',
    difficulty: 'Hard'
  },
  {
    topic: 'Python',
    question: 'What is `super()`?',
    answer: '`super()` calls methods from parent class.',
    difficulty: 'Hard'
  },
  {
    topic: 'Python',
    question: 'What is `__slots__`?',
    answer: '`__slots__` restricts instance attributes, saving memory.',
    difficulty: 'Hard'
  },
  {
    topic: 'Python',
    question: 'What is `__dict__`?',
    answer: '`__dict__` stores object\'s attributes as a dictionary.',
    difficulty: 'Hard'
  },
  {
    topic: 'Python',
    question: 'What is `asyncio`?',
    answer: '`asyncio` provides asynchronous I/O and concurrency.',
    difficulty: 'Hard'
  },
  {
    topic: 'Python',
    question: 'What is `async`/`await`?',
    answer: '`async`/`await` enables asynchronous programming.',
    difficulty: 'Hard'
  },
  {
    topic: 'Python',
    question: 'What is `multiprocessing`?',
    answer: '`multiprocessing` enables parallel processing using multiple processes.',
    difficulty: 'Hard'
  },
  {
    topic: 'Python',
    question: 'What is `threading`?',
    answer: '`threading` enables concurrent execution using threads.',
    difficulty: 'Hard'
  },
  {
    topic: 'Python',
    question: 'What is GIL (Global Interpreter Lock)?',
    answer: 'GIL is a mutex that allows only one thread to execute Python bytecode at a time.',
    difficulty: 'Hard'
  },
  {
    topic: 'Python',
    question: 'What is `pickle`?',
    answer: '`pickle` serializes Python objects to byte streams.',
    difficulty: 'Hard'
  },
  {
    topic: 'Python',
    question: 'What is `unittest`?',
    answer: '`unittest` is Python\'s built-in testing framework.',
    difficulty: 'Hard'
  },
  {
    topic: 'Python',
    question: 'What is `pytest`?',
    answer: '`pytest` is a popular third-party testing framework.',
    difficulty: 'Hard'
  },
  {
    topic: 'Python',
    question: 'What is `mock`?',
    answer: '`mock` (or `unittest.mock`) creates mock objects for testing.',
    difficulty: 'Hard'
  },
  {
    topic: 'Python',
    question: 'What is `type hints`?',
    answer: 'Type hints (Python 3.5+) specify expected types for variables and functions.',
    difficulty: 'Hard'
  },
  {
    topic: 'Python',
    question: 'What are Python best practices for DevOps?',
    answer: 'Best practices:\n- Use virtual environments\n- Follow PEP 8 style guide\n- Write docstrings\n- Use logging instead of print\n- Handle exceptions properly\n- Use `requirements.txt`\n- Write unit tests\n- Use type hints\n- Follow DRY (Don\'t Repeat Yourself)\n- Use context managers for resources\n- Prefer list/dict comprehensions\n- Use `pathlib` for file paths\n- Use `subprocess` for shell commands\n- Use `argparse` for CLI tools\n- Document your code\n- Use version control\n- Write idempotent scripts\n- Handle errors gracefully\n- Use configuration files\n- Follow security best practices',
    difficulty: 'Hard'
  }
]

