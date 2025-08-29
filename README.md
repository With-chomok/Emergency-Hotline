#What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: 

```getElementById```
1) getElementById is type of selection and it select based unique id.  its return element object or null when scpecied id is empty or no element.

2) getElementById is only available on the document object .

```getElementsByClassName```
1)select all Element according to gevn class name.
2)its return to html collection.
3)if you see live htlml collection try it.

```querySelector```
1) Selects the first element of html elements

```querySelectorAll```

1) Returns a static NodeList.
2) select all Element that matches given css selector.



#How do you create and insert a new element into the DOM?

using document.createElement() method for new element create like: 

 ```const createDiv = document.createElement("div");```

 #insert this new element  in html or parentChild -using appendChild method like------
  
 ``` const parentDiv = document.getElementById("parentDiv")```
 
```parentDiv = appendChild("createDiv")```

#What is Event Bubbling and how does it work?

Event Bubbling is how DOM events work – they start at what I clicked and go up to the parent elements in the DOM tree.
This functionality allows parent elements to monitor events initiated by their child elements.


#What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is an javascript technic for add eventListener without looping.
Its doing light weight code and and avoid multiple event listener. 
Its using event.target.

## JavaScript preventDefault() Method:

It is a method present in the event interface.This method prevents browser executing  default behavior in selceted area.

## The stopPropagation() method:

The stopPropagation() method is used to stop the propagation of event calling.
