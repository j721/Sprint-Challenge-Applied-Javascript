// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>




//start of code

const topicsContainer = document.querySelector('.topics');

axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then(response=>{
    response.data.topics.forEach(item=>{
        topicsContainer.append(createTab(item));
        console.log('tab data was returned', response);
    })
   
})
.catch(error=>{
    console.log('tab data failed to show', error);
});


function createTab(){
    //create elements
    const tab = document.createElement('div');
    //add class
    tab.classList.add('tab');
    //add textContent
    tab.textContent ="topic here";

    return tab; 
}


