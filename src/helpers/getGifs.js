export const getGifs = async (category) => {
    // Aquí iría una petición a una API, por ejemplo, Giphy o Tenor
    return [
        { id: '1', title: `${category} Gif 1`, url: 'https://via.placeholder.com/150' },
        { id: '2', title: `${category} Gif 2`, url: 'https://via.placeholder.com/150' },
        { id: '3', title: `${category} Gif 3`, url: 'https://via.placeholder.com/150' },
    ];
};