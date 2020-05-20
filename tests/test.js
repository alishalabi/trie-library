const PT = require("../index")

test ( "Canary Test", () => {
  expect(2+2).toBe(4)
})

test ( "Create Empty Node", () => {
  const node = new PT.TreeNode()
  expect(node.data).toBe(null)
})

test ( "Create Node With Data", () => {
  const node = new PT.TreeNode("A")
  expect(node.data).toBe("A")
})

test ( "Create Empty PrefixTree", () => {
  const tree = new PT.PrefixTree()
  expect(tree.head).toBeDefined()
})

test ( "Add Single Node To Prefix Tree", () => {
  const tree = new PT.PrefixTree()
  tree.addNode(tree.head, "A")
  expect(tree.head.children).toHaveProperty("A")
})

test ( "Add Two Chained Nodes To Prefix Tree", () => {
  const tree = new PT.PrefixTree()
  tree.addNode(tree.head, "A")
  const aNode = tree.head.children["A"]
  tree.addNode(aNode, "B")
  expect(aNode.children).toHaveProperty("B")
})

// test ( "Add String Method", () => {
//
// })

test ( "Contains Method With One String", () => {
  const tree = new PT.PrefixTree()
  tree.addString("ABC")
  expect(tree.contains("ABC")).toBe(true)
  expect(tree.contains("Happy Days")).toBe(false)
})

test ( "Contains Method With Many Strings", () => {
  const tree = new PT.PrefixTree()
  tree.addString("ABC")
  tree.addString("DEF")
  tree.addString("GHI")
  expect(tree.contains("ABC")).toBe(true)
  expect(tree.contains("DEF")).toBe(true)
  expect(tree.contains("GHI")).toBe(true)
  expect(tree.contains("Happy Days")).toBe(false)
  expect(tree.contains("Yours And Mine")).toBe(false)
})
