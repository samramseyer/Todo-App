// To use the Giphy API, get your API key from https://developers.giphy.com/ and paste it below:
const API_KEY = 'RtPVRyvsmxTup4xKMVErQsG6DCksgKKo';
const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const gallery = document.getElementById('gallery');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const query = input.value.trim();
    if (!query) return;
    gallery.innerHTML = '<p>Loading...</p>';
    try {
        const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodeURIComponent(query)}&limit=24&rating=pg`);
        const data = await res.json();
        displayGifs(data.data);
    } catch (err) {
        gallery.innerHTML = '<p>Failed to fetch GIFs. Please try again.</p>';
    }
});

function displayGifs(gifs) {
    if (!gifs.length) {
        gallery.innerHTML = '<p>No results found.</p>';
        return;
    }
    gallery.innerHTML = gifs.map(gif => `
        <img src="${gif.images.fixed_height.url}" alt="${gif.title}">
    `).join('');
}
