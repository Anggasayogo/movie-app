const { default: Axios } = require("axios")

const callingApi = async (endpoint) =>{
    const data = await Axios.get(endpoint)
    try {
        return data.data
    } catch (error) {
        console.log(error)
    }
}


export default callingApi;