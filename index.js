
// 3.push our project to github
// 4.update our project
process.chdir(__dirname);
require("dotenv").config();
const octikit = require("@octokit/rest");

const clientWithAuth = new octikit({
    auth: process.env.TOKEN
});
let cmd = process.argv[2];
let folderName = process.argv[3];
//create repo

if (cmd === "create") {
    clientWithAuth.repos.createForAuthenticatedUser({
        name: folderName
    });
}
//delete repo
if (cmd === "delete") {
    clientWithAuth.repos.delete({
        owner: "Chensokheng",
        repo: folderName

    }).then(data => {
        console.log("success fully delete " + folderName + "repo");
    }).catch(e => {
        console.log(e);
    });
}





