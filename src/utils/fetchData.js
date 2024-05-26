export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '63cc7af300mshbbd30a2c16c4b01p1c567djsnbab3514c64a3',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};


export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '63cc7af300mshbbd30a2c16c4b01p1c567djsnbab3514c64a3',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};


export const fetchData = async (url, options) => {
    const response = await fetch(url, options)
    const data = await response.json()

    return(
        data
    )
}