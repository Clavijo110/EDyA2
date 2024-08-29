class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

let height = calculateTreeHeight(root);

console.log("La altura del árbol es:", height);

function calculateTreeHeight(root) {
    if (root === null) {
        return 0;
    }
  
    let leftHeight = calculateTreeHeight(root.left);
    let rightHeight = calculateTreeHeight(root.right);
  
    return Math.max(leftHeight, rightHeight) + 1;
}