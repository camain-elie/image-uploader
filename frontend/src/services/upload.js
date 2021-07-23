import axios from 'axios';

export const sendImage = async (file) => {

    const formData = new FormData();
    formData.append('image', file);
    const response = await axios.post('http://localhost:5000/api/image', formData)
        .then(res => res)
        .catch(error => console.log(error));

    return response;
    /*console.log(file)
    const formData = new FormData();
    formData.append("file", file);
    console.log(formData)
    const response = await fetch('/api/image', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: formData
    });
    //console.log(response);
    const json = await response.json();
    //console.log(json);
    return json;*/
}