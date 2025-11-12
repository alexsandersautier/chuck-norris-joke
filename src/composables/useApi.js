import axios from "axios"

export function useApi(baseURL) {
    const BASEURL = baseURL

    const get = async (params = {}) => {
        console.log(params)
        const response = await axios.get(BASEURL, { params:params, headers: {'Access-Control-Allow-Origin': '*' } })
        return response.data
    }

    return {
        get
    }
}