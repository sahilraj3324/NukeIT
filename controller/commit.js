const fs = require("fs").promises
const path = require("path")
const {v4 : uuidv4} = require("uuid")

async function commitrepo() {
    const repoPath = path.resolve(process.cwd() , "NukeIT")
    const stagedpath = path.join(repoPath , "staging")
    const commitPath = path.join(repoPath , "commits")

    try{
      const commitid = uuidv4()
      const commitdir = path.join(commitPath , commitid)
      await fs.mkdir(commitdir , {recursive : true})
    }
    catch(err){
        console.error("error in commiting the file", err)
    }
   
}

module.exports = {commitrepo}