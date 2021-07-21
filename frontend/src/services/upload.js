export const sendImage = async (file) => {
    const response = await fetch('/api/image');
    console.log(response);
    const json = await response.json();
    console.log(json);
    return json;
}