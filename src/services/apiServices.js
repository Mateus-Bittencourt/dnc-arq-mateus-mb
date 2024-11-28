export const getApiData = async (endpoint, _params) => {
  try {
    const url = new URL(`https://dnc-react-api.vercel.app/files/${endpoint}`);
    const response = await fetch(url, {
      method: "GET"
    })

    if (!response.ok) console.error(`HTTP error! status: ${response.status}`);

    return await response.json();

  } catch (error) {
    console.error('Catch error!', error);
  }
};
