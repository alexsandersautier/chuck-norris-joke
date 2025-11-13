import axios from "axios"

export function useApi(baseURL) {
    const BASEURL = baseURL

    const get = async (params = {}) => {
        const response = await axios.get(BASEURL, { params:params, headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        } })
        return response.data
    }

    return {
        get
    }
}