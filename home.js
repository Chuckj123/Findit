function buttonclicky(){
    document.getElementsByClassName(`sheet`)[0].style.display = `block`;
    document.getElementById(`newReport`).style.display = `none`;
}

function postButtonClick(){
    document.getElementsByClassName(`sheet`)[0].style.display = `none`;
    document.getElementById(`newReport`).style.display = `block`;


    //inputboxythingy
    const itemName = document.getElementById('itemName').value;
    const category = document.getElementById('category').value;
    const location = document.getElementById('location').value;
    const description = document.getElementById('description').value;
    const data = {
        itemName,
        category,
        location,
        description
    };

    fetch('http://localhost:5000/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
}

// //loginpage
function loginbutton(){
    const nameS = document.getElementById('name').value;
    const emailS = document.getElementById('emailS').value;
    const passwordS = document.getElementById('passwordS').value;
    const pn = document.getElementById('pnS').value;
    const schoolS = document.getElementById('schoolS').value;
    const zipS = document.getElementById('zipS').value;
}


