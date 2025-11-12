import { useApi } from "@/composables/useApi";

export function useTranslateService() {
    const baseURL = import.meta.env.VITE_URL_API_TRANSLATE
    const api = useApi(baseURL)

    async function translate(text) {
        const response = await api.get({sl: 'en', dl: 'pt_BR', text:text})
        return response?.destination-text
    }

    return {
        translate
    }
}