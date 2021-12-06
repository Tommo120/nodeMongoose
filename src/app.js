require("./db/connection.js");

const yargs = require("yargs");

const { addBand, listBands, searchBands, deleteBand, updateBand } = require("./bands/bandMethods.js");

class BandObject {
    constructor(artist, members, genre) {
        this.artist = artist;
        this.members = members;
        this.genre = genre;
    }
}

const app = async (args) => {
    const command = process.argv[2];

    switch(command.toLowerCase()) {
        case "add":
            let artists = [];
            if(Array.isArray(args.artist)) {
                args.artist.forEach((a, i) => {
                    artists.push(new BandObject(args.artist[i], args.members[i], args.genre[i]));
                })
                addBand(artists);
            } else {
                artists.push(new BandObject(args.artist, args.members, args.genre))
                addBand(artists);
            }
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