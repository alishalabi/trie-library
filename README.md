# Trie Library

The purpose of this project is to create a JS library for prefix trees (aka tries).

## Installation

## Usage
Include an import statement at top of file:

- `addNode(currentNode, letter, terminal=false)`: Adds child node to current node with letter as data
Ex:
```
tree = new PrefixTree
tree.addNode(tree.head, "A")
console.log(tree.head.children)

```
- `addString(string)`: Adds a chained child node for each letter in input string
- `contains(string)`: Checks if string is in prefix tree. Returns: boolean
