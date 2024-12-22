const user = {
    mood: "happy",
    hobby: "backetball",
    premium: "true"
};
user.hobby = "skydiving" 
user.premium = "false"
for(const key in user){
    console.log(`${key}: ${user[key]}`)
};

function countProps(obj){
    return Object.keys(obj).length
};
console.log(countProps(user))