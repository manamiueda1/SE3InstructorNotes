# DOM Notes

What is the DOM!?

DOM stands for Document Object Model
DOM is the data representation of the objects that comprise the structure and content of a document on the web.
It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects.

The DOM is an object-oriented representation of the web page, which can be modified with a scripting language such as JavaScript.

# DOM Properties/Methods

DOM properties and methods can be used on all HTML elements

querySelector() -> selecting 1 type of element

querySelectorAll() -> select all elements in the parameter

getElementById(id) -> select the element with the specific id

getElementsByClassName(names) -> select the elements with only that class name

createElement() -> creating a HTML element

innerHTML -> text in between the tag

setAttribute() -> adding an attribute to an element

appendChild() -> add child element to an existing element

addEventListener(type, listener) -> type: event type listener: funciton what do you want it to do on the event type?

firstChildElement() -> target the first child

ParentNode.children -> list of children nodes of the parent node

classList -> add a class name to the element

deletingChild.parentNode.removeChild(deletingChild) -> to remove a child node/element
