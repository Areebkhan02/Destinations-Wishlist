var detailsform= document.querySelector("#destination_details_form");
var detailsform1=document.querySelector("#destination_details_form1");

detailsform.addEventListener("submit",handleformsubmit);
detailsform1.addEventListener("submit",handleformsubmit1);


function handleformsubmit(event1){
    event1.preventDefault();
    var destname=event1.target.elements["name"].value;
    var destlocation=event1.target.elements["location"].value;
    var destphoto=event1.target.elements["photo"].value;
    var destdescription=event1.target.elements["description"].value;
    for (var i=0;i<detailsform.length;i++){
        detailsform.elements[i].value=""}
    var cardorg=createcard(destname,destlocation,destphoto, destdescription);

    var wishlist=document.getElementById("destinations_container");
    if (wishlist.children.length===0){
        document.getElementById("title").innerHTML="My Wish List";
    }
    document.getElementById("destinations_container").appendChild(cardorg)
};

function handleformsubmit1(event1){
    event1.preventDefault();
    var destname=event1.target.elements["name1"].value;
    var destlocation=event1.target.elements["location1"].value;
    var destphoto=event1.target.elements["photo1"].value;
    var destdescription=event1.target.elements["description1"].value;
    for (var i=0;i<detailsform1.length;i++){
        detailsform1.elements[i].value=""}
    var cardorg=createcard(destname,destlocation,destphoto, destdescription);

    var wishlist=document.getElementById("destinations_container1");
    if (wishlist.children.length===0){
        document.getElementById("title1").innerHTML="My Wish List";
    }
    document.getElementById("destinations_container1").appendChild(cardorg)
};





function createcard(name,location,photo,description){
    var cardnew=document.createElement("div");
    cardnew.className="card card-extra";
    var img1=document.createElement("img");
    img1.className="card-img-top";
    img1.setAttribute("alt",name);
    var const1="images/signpost.jpg";
    if (photo.length===0){
        img1.setAttribute("src",const1);
    }
    else {
        img1.setAttribute("src",photo);
    }
    cardnew.appendChild(img1)
    var cardbody=document.createElement("div");
    cardbody.className="card-body";
    var cardheading=document.createElement("h3");
    cardheading.className="card-title";
    cardheading.innerHTML=name;
    cardbody.appendChild(cardheading);
    var cardheading1=document.createElement("h5");
    cardheading1.innerHTML=location;
    cardbody.appendChild(cardheading1);
    if (description!==0){
        var textbox1=document.createElement("p");
        textbox1.className="card-text";
        textbox1.innerHTML=description;
        cardbody.appendChild(textbox1);
    }
    var button1=document.createElement("button");
    button1.innerHTML="Remove";

    button1.addEventListener("click",removedestination);
    cardbody.appendChild(button1);
    cardnew.appendChild(cardbody);
    return cardnew

}
function removedestination(event){
    var card=event.target.parentElement.parentElement;
    card.remove();
}

