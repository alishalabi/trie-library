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
  expect(tree.head.children).toContain("A")
})
