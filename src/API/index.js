const URL = "api.genshin.dev";

export const fetchAllCharacters = async () => {
    try {
        const response = await fetch(`${URL}/characters`, {
        method: "GET",});
        const allCharacters = await response.json();
        console.log(allCharacters);
        return allCharacters;
    } catch (err) {
        console.error('Uh oh, trouble fetching characters!', err);
    }
};