document.body.appendChild(function(){[1,2,3].forEach((e=>{console.log("Hello "+e)}));const e=document.createElement("div");return e.innerHTML=_.join(["Hello","webpack"]," "),e}());