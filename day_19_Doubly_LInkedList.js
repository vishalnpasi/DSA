// Class for Doubly Linked List 

class Node {
    constructor(d) {
        this.data = d;
        this.next = null;
        this.prev = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
}


//=================================[ Inserting ]================================
function pushFront(new_data) {

    var new_Node = new Node(new_data);
    new_Node.next = head;
    new_Node.prev = null;
    if (head != null)
        head.prev = new_Node;
    head = new_Node;
}

 function InsertBefore(next_node , data) {
    if (next_node == null) {
        return "The given next node can not be NULL"
    }
    var node = new Node(data);
    node.prev = next_node.prev;

    next_node.prev = node;

    node.next = node;

    // Check if new node is added as head
    if (node.prev != null)
        node.prev.next = node;
    else
        head = node;
}

//* Given a node as prev_node, insert a new node after the given node
function InsertAfter(prev_Node , new_data) {
    if (prev_Node == null) 
        return;

    var new_node = new Node(new_data);

    new_node.next = prev_Node.next;

    prev_Node.next = new_node;

    new_node.prev = prev_Node;

    if (new_node.next != null)
        new_node.next.prev = new_node;
}
// Add a node at the end of the list
function append(new_data) {
     
    var new_node = new Node(new_data);
    var last = head;
    new_node.next = null;

    if (head == null) {
        new_node.prev = null;
        head = new_node;
        return;
    }
    while (last.next != null)
        last = last.next;
    last.next = new_node;

    new_node.prev = last;
}

// linked list starting from the given node
 function printlist(node) {
    var last = null;
    while (node != null) {
        
        last = node;
        node = node.next;
    }
    while (last != null) {
        last = last.prev;
    }
}

//Insert node in doubly linked list at Front and End

// class Node{
//     constructor(val){
//         this.val = val
//         this.next = null
//         this.prev = null
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
//     push(val){
//         let node = new Node(val)
//         if(this.length ==0){
//             this.head = node
//             this.tail = node
//         }
//         else{
//             this.tail.next = node
//             node.prev = this.tail
//             this.tail = node
//         }
//         this.length++
//     }
//     unshift(val){
//         let newNode = new Node(val);
//         if(this.length ==0){
//             this.head = newNode
//             this.tail = newNode
//         }
//         else{
//             this.head.prev = newNode
//             newNode.next = this.head
//             this.head = newNode
//         }
//         this.length++
//     }
// }

// // Delete first and Last node of doubly linked list
     
// class Node{
//     constructor(val){
//         this.val = val
//         this.next = null
//         this.prev = null
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head = null
//         this.tail = null
//         this.length = 0
//     }
//     push(val){
//         let newNode = new Node(val)
//         if(this.length==0){
//             this.head = newNode
//             this.tail = newNode
//         }
//         else{
//             this.tail.next = newNode
//             newNode.prev = this.tail
//             this.tail = newNode
//         }
//         this.length++
//     }
//     shift(){
//         if(!this.head)return undefined
//         else if(this.length==0){
//             this.head = null
//             this.tail = null
//         }
//         else{
//             this.head = this.head.next;
//             this.head.prev = null
//         }
//         this.length--
//     }
//      remove(){
    //                if(this.size==0) return undefined
    //                 let val = this.tail
    //                 if(this.size==1){
    //                     this.head = null
    //                     this.tail = null
    //                 }
    //                 else{
    //                     this.tail = this.tail.prev
    //                     this.tail.next = null
    //                 }
    //                 this.size--
    //                 return val
    //             }
// }

// // 
