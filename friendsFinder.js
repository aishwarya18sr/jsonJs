const users = require('./userData.json'); 
function getFriendsName(username){
    if (!(typeof username === 'string')){
        throw new Error('Not a valid input type for username.');
    }
    let friends = []
    let flag = false;
    users.forEach((user) => {
        if(user.name === username){
            flag = true;
            const userFriends = user.friends;
            userFriends.forEach((friend) => {
                const {id,name} = friend;
                friends.push(name);
            })
        }
    });
    if(! flag){
        throw new Error('User not exists.');
    }
    console.log(friends);
}

getFriendsName('Tisha Ryan');

module.exports = getFriendsName;