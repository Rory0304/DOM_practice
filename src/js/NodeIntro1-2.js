//html, 10
console.log(document.doctype.nodeName, document.doctype.nodeType);

//#document, 9
console.log(document.nodeName, document.nodeType);

//document-fragment, 11
console.log(
  document.createDocumentFragment().nodeName,
  document.createDocumentFragment().nodeType
);

//A, 1 (ELEMENT+NODE)
console.log(
  document.querySelector("a").nodeName,
  document.querySelector("a").nodeType
);

//#text 3
console.log(
  document.querySelector("a").firstChild.nodeName,
  document.querySelector("a").firstChild.nodeType
);
