# compute.py
import sys


def add(a, b):
    return a + b


if __name__ == "__main__":
    # Read command-line arguments
    a = int(sys.argv[1])
    b = int(sys.argv[2])

    # Perform the addition
    result = add(a, b)

    # Print the result to standard output
    print(result)
