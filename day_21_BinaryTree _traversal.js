
// // 1) PreOrder Traversal....Root Data -> Left Subtree -> Right SubTree

// function preOrder(root) {
// 	if(root==null) return
//     process.stdout.write(`${root.data} `)
//     preOrder(root.left)
//     preOrder(root.right)
// }

// Post Order..

// function postOrder(root) {
// 	if(root==null)return
//     postOrder(root.left)
//     postOrder(root.right)
//     process.stdout.write(`${root.data} `)
// }

// InOrder Traversal...

// function inOrder(root) {
// 	if(root==null)return
//     inOrder(root.left)
//     process.stdout.write(`${root.data} `)
//     inOrder(root.right)
// }

//104. Maximum Depth of Binary Tree

// var maxDepth = function(root) {
//     if(root==null) return 0;
//     if(root.left==null && root.right==null)
//         return 1;
//     let hleft = maxDepth(root.left)
//     let hright = maxDepth(root.right)

//     let ans = Math.max(hleft,hright)+1
//     return ans
// };

// class Node{
//     constructor(data){
//     this.data = data;
//     this.left = null;
//     this.right = null;
//     }
// }
// class Tree{
//     constructor(){
//         this.root = null
//     }
//     insert(node, data) {
//         if (node == null){
//             node = new Node(data);
//         }
//          else if (data < node.data){
//             node.left  = this.insert(node.left, data);
//         }
//         else{
//             node.right = this.insert(node.right, data);   
//         }

//         return node;
//     }
// }

// var tree = new Tree();
// var n = 3
// var m = [3,1,2]
// for (var i=0; i<n; i++) {
//     tree.root = tree.insert(tree.root, m[i]);
// }
// console.log(tree,this)

//tutorialPoint
// class Node{
//     constructor(data) {
//        this.data = data;
//        this.left = null;
//        this.right = null;
//     };
//  };
//  class BinarySearchTree{
//     constructor(){
//        this.root = null;
//     }
//     insert(data){
//        var newNode = new Node(data);
//        if(this.root === null){
//           this.root = newNode;
//        }else{
//           this.insertNode(this.root, newNode);
//        };
//     };
//     insertNode(node, newNode){
//        if(newNode.data < node.data){
//           if(node.left === null){
//              node.left = newNode;
//           }else{
//              this.insertNode(node.left, newNode);
//           };
//        } else {
//           if(node.right === null){
//              node.right = newNode;
//           }else{
//              this.insertNode(node.right,newNode);
//           };
//        };
//     };
//  };
//  const BST = new BinarySearchTree();
//  BST.insert(1);
//  BST.insert(3);
//  BST.insert(2);


// 22nd 
// Find height of tree
// Given a binary tree, find the height of given tree.

 

// The height of a binary tree is the length of the path from the root to the deepest node in the tree. The binary tree with only one node has a depth value zero.

 

// e.g. for this binary tree
//                  2
//                 /  \ 
//               4    5 
//              /  \ 
//            1    3
//                 /
//               9

 

// Here height of the tree is 3.

 

// The binary tree is created using structure 'struct node'. 

 

// Write a function: 
//        int solution(struct node * R) 

 

// that accept root node of binary tree R of type 'struct node'. The function should return the height of a tree.

 

// Input
//     6
//     1 9 3 4 5 2
//     1 4 9 3 2 5

 

//     Where, 

// First line of input represents the size of an array N. 
// Second line contains post-order array representation. 
// Third line contains in-order array representation.
 

// Output
//     3


// 2

// Level order tree traversal
// Given a binary tree, traverses a tree in a level order manner.

// In level order traversal, visit the nodes level by level from left to right.

// e.g. for the given tree

//               5
//             /   \ 
//           2     3
//         /   \      \
//       1     0     9

 

// Then level-order representation will be {5, 2, 3, 1, 0, 9}

 

// The binary tree is created using structure 'struct node'.

 

// Write a function: 

//        void solution(struct node * R) 

 

// that accept root node of binary tree R of type 'struct node'. The function should return a level-order array representation of a binary tree.

 

// Input
//     6
//     1 0 2 9 3 5
//     1 2 0 5 3 9

 

//     Where, 

// First line represents the size of an array N. 
// Second line contains post-order array representation.
// Third line contains in-order array representation.
 

// Output
//     5 2 3 1 0 9

 

// Here the output is the level-order representation of the constructed tree.

 

