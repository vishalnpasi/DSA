
// class Node{
//     constructor(data){
//     this.data = data;
//     this.left = null;
//     this.right = null;
//     }
// }
// class BinarySearchTree{
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
// const BST = new BinarySearchTree();
// BST.root = BST.insert(BST.root,5);
// for(let i = 1;i<=10;i++){
//     BST.root = BST.insert(BST.root,i)
// }
//  console.log(BST)
// function preOrder(tree){
//     if(tree.left==null){
//         console.log(tree.data)
//     }
//     if(tree.left){
//         preOrder(tree.left)
//         console.log(tree.data)
//     }
//     if(tree.right)
//         preOrder(tree.right)
// }
// preOrder(BST.root)



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
//  for(let i = 2;i<=10;i++){
//     BST.insert(i)
// }
// function preOrder(tree){
//     if(tree.left==null){
//         console.log(tree.data)
//     }
//     if(tree.left){
//         preOrder(tree.left)
//         console.log(tree.data)
//     }
//     if(tree.right)
//         preOrder(tree.right)
// }
// preOrder(BST.root)

// Construct the Binary Tree.......

class TreeNode{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}
const buildBST = (arr,l,r) =>{
    if(l>=r) return null
    let mid = (l+r)/2<<0
    let node = new TreeNode(arr[mid])
    node.left = buildBST(arr,l,mid)
    node.right = buildBST(arr,mid+1,r)
    return node
}
let arr = [1,2,3,4,5,6,7,8,9,10]
let tree = buildBST(arr, 0,arr.length)

// sum of all nodes
let sum = 0
function print(root){
    if(root ==null) return null
    print(root.left)
    sum +=root.val
    console.log(root.val)
    print(root.right)
}
print(tree)
console.log(sum)
// print(tree)
