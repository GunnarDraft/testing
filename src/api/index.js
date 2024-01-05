 
export const getCharacters = async (name, page) => {
    const apiURL = "https://backend-fonyou.vercel.app/"
  
    try {
        const response = await fetch(`${apiURL}?page=${page}&name=${name}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching characters:', error);
        throw error;
    }
};
