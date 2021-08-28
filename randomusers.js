const loadFriends = () => {

    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayFriends(data))
}


const displayFriends = (data) => {

const friends = data.results ; 
const showFriend = document.getElementById('friends') ; 

for (const friend of friends){
const div = document.createElement('div') ;
div.style.border = '2px solid tomato' ;
div.style.borderRadius = '10px' ;
div.style.margin = '10px' ;
div.style.padding = '10px' ;

   div.innerHTML = `<h4>name:${friend.name.first}</h4> 
   <p>Email:${friend.email}</p>
   <img src='${friend.picture.thumbnail}'>`

showFriend.appendChild(div);

}



}