// Create A Graph class......
// class Graph{
//     // defining vertex array and 
//     // Adjacent List
//     constructor(noOfVertices){
//         this.noOfVertices = noOfVertices;
//         this.AdjList = new Map()
//     }
//     //add vertex to the graph
//     addVertex(v){
//         this.AdjList.set(v,[]);
//     }
//     //add edge to the graph
//     addEdge(v,w){
//         // get the list for vertex v and put the
//         // vertex w denoting edge between v and w
//         this.AdjList.get(v).push(w);
        
//         // Since graph is undirected.
//         // add an edge from w to v also
//         this.AdjList.get(w).push(v);
//     }
//     // Prints the vertex and adjacency list
//     printGraph(){
//         // get all the vertices
//         var get_keys = this.AdjList.keys();
        
//         for(let i of get_keys){
//             var get_values = this.AdjList.get(i);
//             var conc = "";
//             // iterate over the adjacency list concatente the values into a string
//             for(let j of get_values)
//                 conc+=j+" ";
//             // print the vertex and its adjacency list
//             console.log(i+" -> "+conc)
//         }
//     }
// }

// // Using the above implemented graph class
// var g = new Graph(6);
// var vertices = ['A','B','C','D','E','F'];

// // adding vertices
// for(var i = 0;i<vertices.length;i++)
//     g.addVertex(vertices[i]);

// //adding edges
// g.addEdge('A','B')
// g.addEdge('A','D')
// g.addEdge('A','E')
// g.addEdge('B','C')
// g.addEdge('D','E')
// g.addEdge('E','F')
// g.addEdge('E','C')
// g.addEdge('C','F')

// // Print all vertex and its adjacency list
// // A -> B D E 
// // B -> A C 
// // C -> B E F 
// // D -> A E 
// // E -> A D F C 
// // F -> E C
// g.printGraph();

//============================[ Method 2]====================================

// class Graph {
//     constructor() {
//        this.edges = {};
//        this.nodes = [];
//     }
//     addNode(node) {
//        this.nodes.push(node);
//        this.edges[node] = [];
//     }
//     addEdge(node1, node2) {
//        this.edges[node1].push(node2);
//        this.edges[node2].push(node1);
//     }
//     addDirectedEdge(node1, node2) {
//        this.edges[node1].push(node2);
//     }
//     display() {
//        let graph = ""; this.nodes.forEach(node => {
//           graph += node + "->" + this.edges[node].join(", ") + "
//  ";
//        });
//        console.log(graph);
//     }
//  }
//  let g = new Graph();
//  g.addNode("A");
//  g.addNode("B");
//  g.addNode("C");
//  g.addNode("D");
//  g.addNode("E");
  
//  g.addEdge("A", "C");
//  g.addEdge("A", "B");
//  g.addDirectedEdge("A", "D");
//  g.addEdge("D", "E");
 
//  g.display();


//=============[ Breadth First Seach (BFS)]==========================
//function to performs  BFS
// bfs(startingNode){

//     // create a Visited object
//     var visited = {};
    
//     //Create an Object for queue
//     var q = new Queue();
    
//     //add the starting node to the queue
//     visited[startingNode]=true
//     q.enqueue(startingNode);

//     //loop until queue is empty
//     while(!q.isEmpty()){
//         //get the element from the queue
//         var getQueueElement = q.dequeue();

//         // passing the current vertex to callback function
//         console.log(getQueueElement)

//         //get the adjacency list for current vertex
//         var get_List = this.AdjList.get(getQueueElement)

//         //loop through the list and add the element to the
//         // queue if is not processed yet
//         for(var i in get_List){
//             var neigh = get_List[i];
//             if(!visited[neigh]){
//                 visited[neigh] = true
//                 q.enqueue(neigh)
//             }
//         }
//     }
// }


//===========================[ complete Graph and BSF & DFS]=================

// class Queue{
//     constructor(){
//         this.items = [];
//         this.maxSize = 10
//     }
//     // add Element in the queue
//     enqueue(element){
//         return this.items.push(element)
//     }
//     // remove element from the queue
//     dequeue(){
//         if(this.items.length>0){
//             return this.items.shift()
//         }
//     }
//     peek(){
//         return this.items[0]
//     }
//     isEmpty(){
//         return this.items.length == 0;
//     }
//     isFull(){
//         return this.items.length == this.maxSize
//     }
//     size(){
//         return this.items.length
//     }
//     clear(){
//         this.items = []
//     }
// }

// class Graph{
//     constructor(noOfVertices){
//         this.noOfVertices = noOfVertices;
//         this.AdjList = new Map()
//     }
//     addVertex(v){
//         this.AdjList.set(v,[]);
//     }
//     addEdge(v,w){
//         this.AdjList.get(v).push(w);
//         // Since graph is undirected.
//         this.AdjList.get(w).push(v);
//     }
//     bfs(startingNode){
//         var visited = {};
//         var q = new Queue();
//         visited[startingNode]=true
//         q.enqueue(startingNode);
//         while(!q.isEmpty()){
        
//             var getQueueElement = q.dequeue();
//             console.log(getQueueElement)
//             var get_List = this.AdjList.get(getQueueElement)
//             for(var i in get_List){
//                 var neigh = get_List[i];
//                 if(!visited[neigh]){
//                     visited[neigh] = true
//                     q.enqueue(neigh)
//                 }
//             }
//         }
//     }
//     printGraph(){
//         var get_keys = this.AdjList.keys();
        
//         for(let i of get_keys){
//             var get_values = this.AdjList.get(i);
//             var conc = "";
//             for(let j of get_values)
//                 conc+=j+" ";
//             console.log(i+" -> "+conc)
//         }
//     }
// }
// var g = new Graph(6);
// var vertices = ['A','B','C','D','E','F'];
// // adding vertices
// for(var i = 0;i<vertices.length;i++)
//     g.addVertex(vertices[i]);
// //adding edges
// g.addEdge('A','B')
// g.addEdge('A','D')
// g.addEdge('A','E')
// g.addEdge('B','C')
// g.addEdge('D','E')
// g.addEdge('E','F')
// g.addEdge('E','C')
// g.addEdge('C','F')

// // g.printGraph();
// console.log(' BFS')
// g.bfs('A')


//==================================[ DFS ]===============================================

class Graph{
    constructor(noOfVertices){
        this.noOfVertices = noOfVertices
        this.AdjList = new Map();
    }
    addVertex(v){
        this.AdjList.set(v,[])
    }
    addEdge(v,w){
        this.AdjList.get(v).push(w)
        this.AdjList.get(w).push(v)
    }
    printGraph(){
        let keys = this.AdjList.keys()
        
        for(let i of keys){
            let conc = ""
            let values = this.AdjList.get(i)
            for(let j of values)
                conc+=j+" "
            console.log(i,' -> ',conc)
        }
    }
    dfs(startingNode){
        var visited = {};
        this.DFSUtil(startingNode,visited);
    }
    // Recursive Function which process and explore
    // all teh adjacnt vetex of the vertex with it is called
    DFSUtil(vert,visited){
        visited[vert] = true
        console.log(vert)

        var get_neighbours = this.AdjList.get(vert);

        for(var i in get_neighbours){
            var get_elem = get_neighbours[i];
            if(!visited[get_elem])
                this.DFSUtil(get_elem,visited)
        }
    }
}
var g = new Graph(6);
var vertices = ['A','B','C','D','E','F'];
// adding vertices
for(var i = 0;i<vertices.length;i++)
    g.addVertex(vertices[i]);
//adding edges
g.addEdge('A','B')
g.addEdge('A','D')
g.addEdge('A','E')
g.addEdge('B','C')
g.addEdge('D','E')
g.addEdge('E','F')
g.addEdge('E','C')
g.addEdge('C','F')

g.printGraph();

console.log("   DFS")
g.dfs("A")

//=================================[ codezinger 26/12/22]===========================================

//1 
// Breadth first search for binary tree
// Tags:	Data StructuresBinary TreeSearching
// Given a binary tree and a value, search the value in the given binary tree using Breadth First Search.

 

// Reference: https://en.wikipedia.org/wiki/Breadth-first_search 

 

// e.g. for the given tree

//             1
//            /  \ 
//         2      3
//        / \      / \
//      4   5  6    7

 

// Breadth-first traversal of given tree will be 1 2 3 4 5 6 7.

// All nodes are visited level by level starting from the root node.

 

// The binary tree is created using structure 'struct node'. 

 

// Write a function: 
//         int solution(struct node *R, int V)

 

// that accept root node of binary tree R of type 'struct node' and a value to search V. The function should search the given value in the binary tree using breadth first search. If value found then return a number of nodes visited to reach that node, return -1 if value not found.

 

// Input
//     7
//     4 5 2 6 7 3 1
//     4 2 5 1 6 3 7
//     6
 

//     Where, 

// First line of input represents the size of an array N. 
// Second line contains post-order array representation. 
// Third line contains in-order array representation.
// Forth line represents value to search V.
 

// Output
//     5

// class TreeNode{
//     constructor(val){
//         this.val = val
//         this.left = null
//         this.right = null
//     }
// }
// function buildTree(inorder,postorder,inStart,inEnd,postStart,postEnd){
//     if(inStart>inEnd) return null
    
//     let rootVal = postorder[postEnd]
//     let root = new TreeNode(rootVal);
    
//     let rootIndex = inStart;
//     for(;rootIndex<=inEnd;rootIndex++){
//         if(inorder[rootIndex]==rootVal)
//             break
//     }
//     let leftTreeSize = rootIndex-inStart
//     let rightTreeSize = inEnd-rootIndex;
    
//     root.left = buildTree(inorder,postorder,inStart,rootIndex-1,postStart,postStart+leftTreeSize-1)
//     root.right = buildTree(inorder,postorder,rootIndex+1,inEnd,postEnd-rightTreeSize,postEnd-1)
//     return root
// }
// function solution(postorder,inorder,v,n) {
//   //Write your solution here
//     let len = inorder.length
//     let tree = buildTree(inorder,postorder,0,len-1,0,len-1)
//     let queue = []
//     queue.push(tree)
//     let count = 0
//     while(queue.length){
//         let front = queue.shift()
//         if(front.val==v){ return count}
//         if(front.left) queue.push(front.left)
//         if(front.right) queue.push(front.right)
//         count++
//     }
//     return -1
// }
// function main() {
//     const n = parseInt(readLine());
//     const postorder = readLine().split(" ").map(Number)
//     const inorder = readLine().split(" ").map(Number)
//     const v = parseInt(readLine());
//     var res = solution(postorder,inorder,v,n);
//     console.log(res);
// }


//2
// Depth first search for binary tree

// Tags:	Data StructuresBinary TreeSearching
// Given a binary tree and a value, search the value in the given binary tree using Depth First Search (use in-order of the tree for depth-first search).

 

// Reference: https://en.wikipedia.org/wiki/Depth-first_search 

 

// e.g. for the given tree

//                1
//              /    \ 
//           2        3
//          /  \      /  \
//        4   5   6    7

 

// Depth-first traversal of given tree using in-order of tree is 
//     4 2 5 1 6 3 7

 

// The binary tree is created using structure 'struct node'. 

 

// Write a function: 
//     int solution(struct node *R, int V)

 

// that accept root node of binary tree R of type 'struct node' and a value to search V. A function search the given value in the binary tree using depth first search. If value found then return a number of nodes visited to reach that node, return -1 if value not found.

 

// Input
//     7
//     4 5 2 6 7 3 1
//     4 2 5 1 6 3 7
//     6

 

//     Where, 

// First line of input represents the size of an array N. 
// Second line contains post-order array representation. 
// Third line contains in-order array representation.
// Forth line represents value to search V.
 

// Output
//     4
// class TreeNode{
//     constructor(val){
//         this.val = val
//         this.left = null
//         this.right = null
//     }
// }
// function buildTree(inorder,postorder,inStart,inEnd , postStart,postEnd){
//     if(inStart>inEnd) return null
//     let rootVal = postorder[postEnd]
//     let root = new TreeNode(rootVal)
    
//     let rootIndex = inStart;
//     for(;rootIndex<=inEnd;rootIndex++){
//         if(inorder[rootIndex]==rootVal)
//             break
//     }
//     let leftTreeSize = rootIndex-inStart;
//     let rightTreeSize = inEnd-rootIndex;
    
//     root.left = buildTree(inorder,postorder,inStart,rootIndex-1,postStart,postStart+leftTreeSize-1)
//     root.right = buildTree(inorder,postorder,rootIndex+1,inEnd,postEnd-rightTreeSize,postEnd-1)
//     return root;
// }
// function solution(postorder,inorder,v,n) {
//   //Write your solution here
//     let len = inorder.length-1
//     let tree = buildTree(inorder,postorder,0,len,0,len)
//     let queue = []
//     if(tree.val==v)return 0
//     let count =-1
//     let flag = true
//     let loop = (tree)=>{
//         if(tree.val ==v){
//             flag =false
//             return 
//         }
//         if(tree.left && flag) loop(tree.left)
//         if(tree.right && flag )loop(tree.right)
//         count++
//     }
//     loop(tree)
//     if(!flag) return count
//     return -1
// }
// function main() {
//     const n = parseInt(readLine());
//     const postorder = readLine().split(" ").map(Number)
//     const inorder = readLine().split(" ").map(Number)
//     const v = parseInt(readLine())
//     var res = solution(postorder,inorder,v,n);
//     console.log(res);
// }
