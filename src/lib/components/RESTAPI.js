import React, { useEffect } from 'react';
import * as axios from 'axios';

function ExampleComponent() {
  useEffect(() => {
    // Create an Axios instance
    const api = axios.create({
      baseURL: 'https://api.github.com',
      headers: {
        // You can add headers if needed
      }
    });

    // Make a request using the Axios instance
    api.get('/repos/octocat/hello-world')
      .then(response => {
        // Handle the response
        console.log(response.data);
      })
      .catch(error => {
        // Handle the error
        console.error(error);
      });
  }, []);

  return <div>Example Component</div>;
}

export default ExampleComponent;
