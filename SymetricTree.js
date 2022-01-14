/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isSymmetric = function(root) {
    return isSameTree(root, root);
};

function isSameTree(tree1, tree2) {
    if (tree1 === null && tree2 === null) return true;
    if (tree1 === null || tree2 === null) return false;
    return tree1.val === tree2.val && isSameTree(tree1.left, tree2.right) && isSameTree(tree1.right, tree2.left);
};


/*

- If both trees are empty, then they are symmetric.
- If one tree is empty and the other is not, then they are not symmetric.

*/