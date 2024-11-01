
import { postUser } from "./companents.js/post.js";
import { Story } from "./companents.js/Store.js";
import { reload } from "./libs.js/utils.js";




fetch("http://localhost:3001/stories")
.then((response) => response.json())
.then((data) => reload(data , document.querySelector('.users') , Story ))


fetch("http://localhost:3001/posts")
.then((response) => response.json() )
.then((data) => reload(data , document.querySelector('.users-post') , postUser ))


