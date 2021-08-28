const loadFriends = () => {

    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayFriends(data))
}


const displayFriends = (data) => {

const friends = data.results ; 
const showFriend = document.getElementById('friends') ; 
const div = document.createElement('div') ;
for (const friend of friends){

   div.innerHTML = `<h4>name:${friend.name.first}</h4> 
   <p>Email:${friend.email}</p>
   <img src='${friend.picture.thumbnail}'>`

showFriend.appendChild(div);

}



}