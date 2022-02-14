const users = require('./userData.json'); 
function getFriendsName(username){
    let friends = []
    users.forEach((user) => {
        if(user.name === username){
            const userFriends = user.friends;
            userFriends.forEach((friend) => {
                const {id,name} = friend;
                friends.push(name);
            })
        }
    });
    return friends;
}
console.log(getFriendsName('Tisha Ryan'));