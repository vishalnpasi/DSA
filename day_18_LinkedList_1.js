// Creating Full LinkedList...
//================================[ type 1 ]=========================
// class Node{
//     constructor(val){
//         this.val = val
//         this.next = null
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head = null
//         this.tail = null
//     }
//     add(val){
//         let node = new Node(val)
//         if(this.head ==null){
//             this.head = node
//             this.tail = node
//         }
//         else{
//             this.tail.next = node
//             this.tail = node
//         }
//     }
// }
// let list = new LinkedList()
// list.add(10)
// list.add(20)
// list.add(30)
// console.log(list)

//====================================[ type 2 ] ===================================================
// class LinkedList{
//     constructor(data){
//         this.head ={
//             data : data,
//             next : null
//         }
//         this.tail = this.head
//     }
//     add(val){
//         let node = {
//             data:val,
//             next:null
//         }
//         this.tail.next = node
//         this.tail = node
//     }
// }
// let list = new LinkedList(10)
// list.add(20)
// list.add(30)
// console.log(list)

//==================================[ type 3 ]====================================================
// class Node{
    //     constructor(data){
    //         this.data = data
    //         this.next = null
    //     }
    // }
    // class LinkedList{
    //     constructor(){
    //         this.head = null
    //         this.size = 0
    //     }
    //     add(data){
    //         let node = new Node(data)
    //         if(this.head ==null)
    //             this.head = node
    //         else{
    //             let cur = this.head
    //             while(cur.next!=null)
    //                 cur = cur.next
    //             cur.next = node
    //         }
    //         this.size++
    //     }
    // }

// ====================================[ Inserting ]=========================================

// inserting front of head

// function push(new_data){

//     var new_node = new Node(new_data)

//     new_node.next = head

//     head = new_node
// }

// inserting Node After a Given Node

// function insertAfter(prev_node,new_data)
// {
//     if(prev_node==null){
//         return 
//     }
//     var new_node = new Node(new_data)

//     new_node.next = prev_node.next;

//     prev_node.next = new_node
// }

// Add a Node End of the Head.....

// function append(new_data){
//     var new_node = new Node(new_data)

//     if(head == null)
//     {
//         head = new Node(new_data)
//         return 
//     }
//     new_node.next = null;

//     var last = head;
//     while(last.next != null)
//         last = last.next

//     last.next = new_node
//     return
// }

//==================================[ Deleting ]===============================================

// Delete Node from Front 
// function deleteNode(head){
//     head = head.next
//     return;
// }

// Delete Node form Middle..

// function deleteNode(prev_node){
//     prev_node.next = prev_node.next.next
//     return
// }

// Delete Node From End

// function deleteNode(head){
//     var last = head
//     while(last.next.next !=null)
//         last = last.next
//     last.next = null
//     return 
// }

//===============================[ Reverse List ]========================
// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null;
//     }
// }

// let head = new Node(10)
// let cur = head
// for(let i = 20;i<=30;i+=10){
//     cur.next = new Node(i)
//     cur = cur.next
// }
// // console.log(head)
// const reverse = (headNode) =>{

//     if(headNode.next ==null) return headNode
//     let head = reverse(headNode.next)
//     headNode.next.next = headNode
//     headNode.next = null
//     return head
// }
// console.log(reverse(head))

//======================================[ make Loop in LinkdList]==============================


//Make loop In LinkedList and also find out the loop are exist on that or not

// class Node{
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }
//     add(data){
//         let node = new Node(data)
//         if(this.head ==null)
//             this.head = node
//         else{
//             let cur = this.head
//             while(cur.next!=null)
//                 cur = cur.next
//             cur.next = node
//         }
//         this.size++
//     }
// }
// function make_loop(head,k){
//     let temp = head
//     let count = 1 
//     while(count<k){
//         temp = temp.next
//         count++
//     }
//     var loop_point = temp
//     while(temp.next !=null)
//         temp = temp.next
//     temp.next = loop_point
//     return head
// }
// function checkLoop(head){
//     while(head){
//         if(head.next==1) return 1
//         if(head.next==null)break
//         let t = head.next
//         head.next = 1
//         head = t
//     }
//     return 0
// }
// function solution(arr,k,n) {
//   //Write your solution here
//     if(k<0 || k>n) return 0
//     var head = new LinkedList()
//     for(let i = 0;i<n;i++) head.add(arr[i])
//     head = head.head
//     head = make_loop(head,k)
//     return checkLoop(head)
// }
// console.log(solution([1,2,3,4,5],1,5))