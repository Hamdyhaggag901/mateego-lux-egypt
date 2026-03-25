const API = 'https://cms.mateegoexplorers.com/wp-json/wp/v2';

export async function getTours() {
  const res = await fetch(`${API}/tours?_embed&per_page=100`);
  return res.json();
}

export async function getDestinations() {
  const res = await fetch(`${API}/destinations?_embed&per_page=100`);
  return res.json();
}

export async function getPosts() {
  const res = await fetch(`${API}/posts?_embed&per_page=100`);
  return res.json();
}
