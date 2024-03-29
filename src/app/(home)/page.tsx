export const metadata = {
  title : "Home"
}

const URL = 'https://nomad-movies.nomadcoders.workers.dev/movies'

async function getMovies(){
  const response = await fetch(URL)
  const json = await response.json()
  return json;
}

// async function getMovies(){
// return fetch(URL).then(response => response.json())
// }

export default async function HomePage(){
const movies = await getMovies();
  return (
    <div>
      {JSON.stringify(movies)}
    </div>
  )
}