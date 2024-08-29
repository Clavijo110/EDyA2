class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

let list1 = new ListNode(9, new ListNode(7, new ListNode(5)));
let list2 = new ListNode(8, new ListNode(6, new ListNode(4)));

let mergedList = mergeSortedLists(list1, list2);

function printList(head) {
    let current = head;
    while (current !== null) {
        console.log(current.value);
        current = current.next;
    }
}

printList(mergedList);

function mergeSortedLists(list1, list2) {
    let dummy = new ListNode(0);
    let current = dummy;
  
    list1 = reverseList(list1);
    list2 = reverseList(list2);
  
    while (list1 !== null && list2 !== null) {
        if (list1.value < list2.value) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
  
    current.next = list1 !== null ? list1 : list2;
  
    return dummy.next;
}

function reverseList(head) {
    let prev = null;
    let current = head;
  
    while (current !== null) {
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }
  
    return prev;
}