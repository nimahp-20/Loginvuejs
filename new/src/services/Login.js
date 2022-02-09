const members = [
    { user: "nima", pass: "123", email: "nima@asda.com", realname: "Nima Hadipour" },
    { user: "aima", pass: "aima321", email: "aima@asda.com", realname: "Aima ads" },
    { user: "mina", pass: "mina312", email: "mina@asda.com", realname: "Mina adsfg" },
    { user: "reza", pass: "434345", email: "reza@asda.com", realname: "Reza azxv" },
    { user: "iman", pass: "12213453", email: "iman@asda.com", realname: "Iman asqwe" }
]
function isValidUser(user, pass) {
    for (var i = 0; i < members.length; i++) {
        if (members[i].user === user && members[i].pass === pass) {
            return true;
        }
        return false;
    }
}


function GetUserEmail(user) {
    for (var i = 0; i < members.length; i++) {
        if (members[i].user === user) {
            return members[i].email;
        }
        return "";
    }
}


function GetUserRealName(user) {
    for (var i = 0; i < members.length; i++) {
        if (members[i].user === user) {
            return members[i].realname;
        }
        return "";
    }
}
export { GetUserRealName, isValidUser, GetUserEmail }