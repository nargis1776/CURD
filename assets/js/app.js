let cl = console.log;
alert("dhasdiuaj")

// GET 
// POST 
// DELETE 
// PATCH / PUT 
 
// read all data  >> 100
// read single data only 
// delete all data 
// delete single data only 
// update single data only 
// `$(baseUrl)/:id`
let baserUrl = "https://jsonplaceholder.typicode.com/posts"

// 1 create xhr Object
let xhr = new XMLHttpRequest();
// 2 configration 
// xhr.open("GET, baseUrl ,true")
xhr.open("GET",baserUrl)
// 3. on response load 
xhr.onload = function(){
    if(xhr.status === 200){
        // cl(xhr.response) >> api call success 
        cl(xhr.status);
        cl(xhr.readyState); // 4
    }else{
        alert(`Something went wrong`)
    }
}

// // 4 sends
xhr.send();


// xhr.status 
// 200 or 202 >> success 
// 404 >> not found 
// 403 >> forbidden 
// 503 >> services not available

// Bearer token or JWT 

// xhr.readyState 
// 0 >> Unsend >> xhr object created but open method is not called yet 
// 1 >> Open method is called 
// 2 >> send method is called
// 3 >> loading >> server is loading our request 
// 4 >> Done >> Request has been proccesed and responce (it may be success or fail )














