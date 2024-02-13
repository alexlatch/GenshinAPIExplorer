const URL = "genshin.jmp.blue";

// export const fetchAllCharacters = async () => {
//     try {
//         const response = await fetch(`${URL}/characters`, {
//         method: "GET",});
//         const allCharacters = await response.json();
//         console.log(allCharacters);
//         return allCharacters;
//     } catch (err) {
//         console.error('Uh oh, trouble fetching characters!', err);
//     }
// };

export const fetchAllCharacters = async () => {
    try {
        const response = await fetch(URL);
        const characters = await response.json();
        return characters;
    } catch (err) {
        console.error("Trouble fetching characters", err);
    }
}