// export function selectBook(book) {
//   return {
//     type: 'BOOK_SELECTED',
//     payload: book,
//   }
// }

// import axios from 'axios'
//
// const API_KEY = '79c58e2829abec164fd6104491b6bf38'
// const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
//
// export function fetchWeather(city) {
//   const url = `${ROOT_URL}&q=${city},us`
//   const request = axios.get(url)
//
//   return {
//     type: 'fetchWeather',
//     payload: request,
//   }
// }

export function addNote(note) {
  return {
    type: 'NOTE_ADDED',
    payload: note,
  }
}

export function deleteNote(note_id) {
  return {
    type: 'NOTE_DELETED',
    payload: note_id,
  }
}
