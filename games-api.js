const url = 'https://api.rawg.io/api/games?page_size=40&key=2235035a6f7b46e285b933544a4e2859'

export async function getGames() {

    const data = await fetch(url).then((res) => res.json())

    // console.log(data)
    return data
}

// export async function getSteamGames() {
//     const encodedParams = new URLSearchParams();
//     encodedParams.append("requestUrl", "<REQUIRED>");
//     encodedParams.append("userKey", "<REQUIRED>");
//     encodedParams.append("pageIds", "<REQUIRED>");

//     const steam = {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/x-www-form-urlencoded',
//             'X-RapidAPI-Key': '47547ca566msh8e900e7d4b92a4cp12b030jsn674b3f116759',
//             'X-RapidAPI-Host': 'GameDatabasestefan-skliarovV1.p.rapidapi.com'
//         },
//         body: encodedParams
//     };

//     const data = await axios.get('https://gamedatabasestefan-skliarovv1.p.rapidapi.com/getPages', steam)
//         .then((response) => response.data)

//     return data
// }