
import { postUser } from "./companents.js/post.js";
import { Story } from "./companents.js/Store.js";
import { reload } from "./libs.js/utils.js";





fetch("https://jsonplaceholder.typicode.com/users")

.then((response) => response.json())
.then((data) => reload(data , document.querySelector('.users') , Story))


fetch("https://jsonplaceholder.typicode.com/posts")

.then((response) => response.json())
.then((data) => reload(data , document.querySelector('.users-post') , postUser))


