import { useApi } from "@/composables/useApi";

export function useJokeService() {
    const baseURL = import.meta.env.VITE_URL_API_CHUCK
    const api = useApi(baseURL)

    async function getJoke() {
        const response = await api.get()
        return response
    }

    return {
        getJoke
    }
}