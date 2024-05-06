// const apiUrl = "https://randomfox.ca/floof/";

// fetch(apiUrl)
//   .then(response => response.json())
//   .then(data => {
//     const foxImage = document.createElement("img");
//     foxImage.src = data.image;
//     document.body.appendChild(foxImage);
//   })
//   .catch(error => console.error(error));



fetch('https://randomfox.ca/floof')
//response is the response from fetch(); response is a string 
//that you'll convert:
//json is a method to turn into JS object
    .then(response => response.json())
    //this then takes a fn:
    //that after the JS object is taken and run through this fn below
    .then(
        (convertedData) =>{
            //debugger //pause the code

            //this is what you see in DevTools:
            //convertedData    image: "https://randomfox.ca/images/9.jpg"     link: "https://randomfox.ca/?i=9"
            //go to index.html paste urls
            //this will happen: <img id="fox" class="animal" src="https://randomfox.ca/images/9.jpg" />
            //
        const foxImgElement=document.querySelector("#fox")
        foxImgElement.src = convertedData.image
        //every time you refresh page a random fox image is shown
        //DevTools>Network>Fetch/XHR>click 2nd floof 
        //Header---see where you sent request
        //Preview---see what the response was/ how it changes each time
    }
     
    )

    //Part2-step 2: async and await
    const getTheCat=async () => {
        const response = await fetch ('http://shibe.online/api/cats?count=1&urls=true&httpsUrls=false')
        //converted data stored in variable
        const convertedData = await response.json ()
        //reference catImgElement in DOM update src attribute with first item in array you've just defined
        const catImgElement=document.querySelector("#cat")
        catImgElement.src = convertedData[0]
    }


    //alt: skip async line also works:
    const response = await fetch ('http://shibe.online/api/cats?count=1&urls=true&httpsUrls=false')
    const convertedData = await response.json ()
    const catImgElement=document.querySelector("#cat")
    catImgElement.src = convertedData[0]


    
    //Part2-step 3:
    //invoke fn and comment out below block
    getTheCat()

    /*Part2-step1:
    same as above: copy paste*/

    // fetch('http://shibe.online/api/cats?count=1&urls=true&httpsUrls=false')

     /*This can be named anything : like just "res" instead of "response"
     response from fetch then passing it as arguments in our callback function:
    res.json() returns a promise which resolves with the result of parsing the body text as JSON 
    &return JavaScript object.*/

    // .then(response => response.json())

    /*convertedData can be named anything its storing js object*/

    // .then(convertedData =>{
    //         const catImgElement=document.querySelector("#cat")

   /*convertedData[0]is different from above fetch bcs above returns object this fetch returns 
   take DevTools>Network>Fetch>click 2nd cat>Preview copy url put in src*/

    //         catImgElement.src = convertedData[0]
    //     }
     
    // )



    /*summary on DevTools you see in preview : you got image back for fox and array for cat
    both blocks of code for fox and the cat do the same thing but syntactically different*/