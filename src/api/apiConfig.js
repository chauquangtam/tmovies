const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '130ad77be7bef3dd2327607abf2aed2c',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;