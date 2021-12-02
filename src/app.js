require("./db/connection.js");

const yargs = require("yargs");

const { addBand, listBands, searchBands, deleteBand, updateBand } = require("./bands/bandMethods.js");

const app = async (args) => {
    const command = process.argv[2];

    switch(command.toLowerCase()) {
        case "add":
            addBand({ artist: args.artist, members: args.members, genre: args.genre });
            break;
        case "list":
            listBands();
            break;
        case "search":
            searchBands(args.parameter);
            break;
        case "update":
            updateBand({artist: args.artist, key: args.field, newData: args.newData});
            break;
        case "delete":
            deleteBand(args.artist);
            break;
        default:
            console.log("Invalid command");
            break;
    };
}

app(yargs.argv);