class TreeNode {
  constructor(data=null, terminal=false) {
    this.data = data
    // Child: {data: node}
    this.children = {}
    this.terminal = terminal
  }
}

class PrefixTree {
  constructor() {
    this.head = new TreeNode
  }

  addNode(currentNode, letter, terminal=false) {
    if (terminal === true) {
      const node = new TreeNode(letter, true)
      currentNode.children[letter] = node
    } else {
      const node = new TreeNode(letter)
      currentNode.children[letter] = node
    }
  }

  contains(string) {

  }

  addString(string) {
    // TODO: See if string exists
    // Set current node
    let currentNode = this.head
    // Iterate through each letter
    let index = 0
    while (index < string.length) {
      // Add child to head
      const letter = string.charAt(index)
      // const newNode = new TreeNode(string.charAt(index))
      this.addNode(currentNode, letter)
      // Change current node
      currentNode = currentNode.children[letter]
      index += 1
    }
    // const lastNode = new TreeNode(string.charAt(string.length))
    // When last node, terminal = true
    // lastNode.terminal = true
    const letter = string.charAt(string.length)
    this.addNode(currentNode, letter, true)
    currentNode.children[letter].terminal = true
  }

}

// nodeA = new TreeNode("A")
// console.log(nodeA.data)
// console.log(nodeA.next)

tree = new PrefixTree
tree.addNode(tree.head, "A")
// console.log(tree.head.children)
// Add tests
// const aNode = tree.head.children["A"]
// console.log(aNode.data)
// tree.addNode(aNode, "B")
// console.log(aNode.children)
// const bNode = aNode.children["B"]
// console.log(bNode.data)


// Add string tests
tree.addString("ABC")
console.log(tree.head.children)
const aNode = tree.head.children["A"]
console.log(aNode)
console.log(aNode.children)
const bNode = aNode.children["B"]
console.log(bNode.data)
const cNode = bNode.children["C"]
console.log(cNode.data)
console.log(cNode)
