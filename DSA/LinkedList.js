// linked list is a linear ds where its store the data in non contineous way 
//each element call it has Node(data+next address)

class Node{
    constructor(data){
        this.data=data;
        this.next=null
    }
}

class LinkedList{
    constructor(head=null){
        this.head=head
    }

    size(){
        let count=0;
        let node=head;
        while(node){
            count++;
            node=node.next
        }
        return count;
    }

    clear(){
        this.head=null
    }

    getLast(){
        let lastNode=this.head;
        if(lastNode){
            while(lastNode.next){
                lastNode=lastNode.next
            }
        }
        return lastNode;
    }

    getFirst(){
        return this.head
    }
    
    lengthOfLL(head){
        let current=head;
        let count=0;
        while (current !=null){
            count++;
            current=current.next
        }
        return count;
    }
}

// function lengthRecursive(node) {
//     if (node === null) {
//       return 0;
//     } else {
//       return 1 + lengthRecursive(node.next);
//     }
//   }


function findTheEleLL(data){
    let current =this.head;
    while(current){
        if(current.data==data){
            return true
        }
        current=current.next
    }

    return false;
}

// function countNumberOccurance(data){
//     let node=this.head;
//     let count=0;
//     while(node){
//         if(node.data==data){
//             count++;
//         }
//         current=current.next;
//     }

//     return count
// }

function deleteEleLL(data){
    let current=this.head;
   let prev=null;
   while(current){
    if(current.data=== data){
        if(prev){
            this.prev=current.next
        }else{
            this.head=current.next
        }

        break;
    }
    prev=current;
    current=current.next

   }
   return this.head
}











  const reverseLinkedList=() =>{
    let prev=null;
    let current=this.next;
    while(current){ // enter the loop till it become 0
        let temp=current.next;
        current.next=prev;
        prev=current;
        current=next;
    }
    
  }
  /**
 * Step	Description	
1	Initialize prev and current	
2	Set prev to None	
3	Set current to the head of the list	
4	Loop until current is None	
5	Store the next node in next	
6	Set current.next to prev	
7	Set prev to current	
8	Set current to next	
9	prev points to the new head of the list	
10	Update the head of the list to prev	
 */



// let node1=new Node(10);
// let node2=new Node(20);
// node1.next=node2

let LL=new LinkedList(node1);

console.log(LL.head.next.data)


