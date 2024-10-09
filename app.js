let output = document.querySelector("#output");

let allInput = document.querySelectorAll(".leftPart textarea");

let htmlCode,cssCode,jsCode = '';

allInput.forEach((el, index) => {
    el.addEventListener("keyup", ()=> {
        if(index==0) {
            htmlCode = el.value;
            console.log(el.value);

        }

        if(index==1) {
            cssCode = el.value;
            console.log(el.value);
        }

        if(index==2) {
            jsCode = el.value;
            console.log(el.value);

        }

// used to bind the HTMl code.
   output.contentDocument.body.innerHTML = htmlCode;

// used to bind the CSS code
output.contentDocument.head.innerHTML = `<style> ${cssCode} </style>`; 

// used to bind the JS code
output.contentWindow.eval(jsCode);
    
    });
});


// output.contentDocument.body.innerHTML = "<h1>Welcome To </h1>";

// output.contentDocument.head.innerHTML = "<style> h1 {color : red} </style>" 

// // used to bind the JS code
// output.contentWindow.eval('let a = 10; let b = 20; alert(a + b);');
