import axios from 'axios';

const useFetch = () => {
    axios.get('http://localhost:4000/questions')
      .then(function (response: any) {
        // handle success
        console.log(response.data);
      })
      .catch(function (error: any) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
}

const usePost = (data: any) => {
  axios.post('http://localhost:4000/users', data)
    .then(function (response: any) {
      // handle success
      console.log(response.data);
    })
    .catch(function (error: any) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}

export {useFetch, usePost}