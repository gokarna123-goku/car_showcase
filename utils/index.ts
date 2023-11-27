export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '1bc89a406emsh4cd989d4f6b6ebep13afcajsn7f08d497a8ca',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', {
        headers: headers,
    });

    const result = await response.json();

    return result;
}