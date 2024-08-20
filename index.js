const yargs = require("yargs");

const {hideBin} = require("yargs/helpers")

const {initrepo} = require("./controller/init")
const {addrepo} = require("./controller/add")
const {commitrepo} = require("./controller/commit")
const {pushrepo } = require("./controller/push")

yargs(hideBin(process.argv))
.command(
    "init" , 
    "Initializing a new reposetory" ,
     {} ,
    initrepo
    )
    .command(
        "add <file>" , 
        "Adding the file to the reposetory" ,
         (yargs)=>{
            yargs.positional("file" , {
                description : "file add to the staging area" ,
                type : "string"
            })
         } ,
        addrepo
        )
        .command(
            "commit <message>" , 
            "Commeting the file to the reposetory" ,
             (yargs)=>{
                yargs.positional("message" , {
                    description : "file commited to the staging area" ,
                    type : "string"
                })
             } ,
            commitrepo
            )
            .command("push" , 
                "Pushing file to staging area" ,
            {},
            pushrepo
        )
    
    .demandCommand(1, "you need atleast one command").help().argv;