const Band = require("./bandModels.js");

exports.addBand = async (bandObj) => {
    try {
        const band = await new Band(bandObj);
        await band.save();
        console.log(`${band.artist} has been added to the database`);
    } catch (error) {
        console.log(error);
    }
};

exports.listBands = async () => {
    try {
        const list = await Band.find({});
        console.log(list);
    } catch (error) {
        console.log(error);
    }
};

exports.searchBands = async (bandObj) => {
    try {
        // WTF am I doing
        // Where database?!
        const results = await Band.find({$text: {$search: bandObj}});
        if (results.length > 0) {
            for(let i = 0; i < results.length; i++) {
                console.log(results[i]);
            }
        } else {
            console.log(`No results found `);
        }
    } catch (error) {
        console.log(error);
    }
};

exports.updateBand = async (bandObj) => {
    try {
        await Band.updateOne({ artist: bandObj.artist }, { [bandObj.key]: bandObj.newData });
        console.log(`Updated the ${bandObj.key} of ${bandObj.artist} to ${bandObj.newData}`);
    } catch (error) {
        console.log(error);
    }
};

exports.deleteBand = async (bandObj) => {
    try {
        const result = await Band.deleteMany({ artist: bandObj });
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};