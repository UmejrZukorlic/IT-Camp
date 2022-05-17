const fetch = require("node-fetch");
const fn = async(author) => {
    try {
        const checkautor = await authorCheck(author);

        // if (!checkautor) {
        //     console.log("That author don`t exist");
        // } else {
        const response = await fetch(
            "https://api.quotable.io/quotes"
        );
        const result = await response.json();

        console.log(result);

        // }

    } catch (error) {
        //     console.log(error);
    }
};

const authorCheck = async(author) => {
    try {
        const response = await fetch(
            `https://api.quotable.io/search/authors?query=${author}`
        );
        const result = await response.json();
        if (!result.count) {
            return false;
        }

        return result.results[0].name;
    } catch (error) {
        console.log(error);
    }
};
const getQuote = async() => {
    try {
        const response = await fetch(
            "https://api.quotable.io/quotes"
        );
        const result = await response.json();
        return result.results;
    } catch (error) {
        console.log(error);
    }
}
getQuote().then((result) => {
    for (i = 0; i < result.length; i++) {
        console.log(result[i].content + ' by: ' + result[i].author);
    }
});