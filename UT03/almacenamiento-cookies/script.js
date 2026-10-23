//expires permite indicar cuándo deja de ser válida una cookie.

// document.cookie = "usuario=Steve"; 
// console.log(document.cookie); 
// document.cookie = "usuario=Steve; path=/";
// document.cookie = "usuario=Steve; expires=Fri, 31 Dec 2027 23:59:59 GMT";



document.cookie = "personaje=Alex; path=/";
console.log(document.cookie); 
document.cookie = "personaje=Steve; path=/; expires=Fri, 31 Dec 2027 23:59:59 GMT";
document.cookie = "usuario=Steve; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
