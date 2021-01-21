/* DOCUMENT_TYPE_NODE, DOCUMENT_NODE, DOCUMENT_FRAGMENT_NODE, ELEMENT_NODE에 대해서는 null을 기록 */
console.log(document.doctype.nodeVaue); //undefined
console.log(document.nodeValue); //null
console.log(document.createDocumentFragment().nodeVaule); //undefined
console.log(document.querySelector("a").nodeValue); //null

/* 텍스트 문자열을 기록 */
console.log(document.querySelector("a").firstChild.nodeValue); //HI

/* TEXT나 Commnet 노드 값은 nodeValue 속성에 새로운 문자열 값을 부여해서 설정할 수 있음 */
document.querySelector("a").firstChild.nodeValue = "hi";
console.log(document.querySelector("a").firstChild.nodeValue); //hi
