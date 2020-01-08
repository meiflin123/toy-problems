// height = max depth
const height = node => {
  if(!node) {return 0};
  const left = height(node.left);
  const right = height(node.right);
  const longerPath = Math.max(left, right);
  return 1 + longerPath;
}


//longest path of a BT = diameter
//1. if pass root: d = lheight + rheight + 1
//2. if not pass the root, get math.max(d of left subtree, d of right subtree)  *treat subtree as new tree.
// compare 1 & 2 cases and get longer one.
// if longer path pass root, subtract 1 from longer path, return
  //if not pass root. return longer path.


const diameterOfBinaryTree = node => {
  if (!node) {return 0};
  const lHeight = height(node.left);
  const rHeight = height(node.right);
  const lDiameter = diameterOfBinaryTree(node.left);
  const RDiameter = diameterOfBinaryTree(node.right);

  const passRoot = lHeight + rHeight +1
  const notPassRoot = Math.max(lDiameter, rDiameter);
  
  return passRoot > notPassRoot? passRoot-1 : notPassRoot;
}
}