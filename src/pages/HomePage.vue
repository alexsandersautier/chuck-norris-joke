<template>
    <div class="flex flex-col items-center justify-center px-4 h-dvh">
        <div class="card bg-base-300 w-dvw md:w-96 shadow-sm">
            <figure>
                <img :src="joke?.icon_url" alt="Chuck Norris Icon" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">Piada do Chuck Norris</h2>
                <p>{{ json }}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary" @click="handleNewJoke">Nova Piada</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useJokeService, useTranslateService } from '@/service';
import { onMounted, ref } from 'vue';

const jokeService = useJokeService()
const translateService = useTranslateService()
const json = ref({})
const joke = ref({})

async function handleNewJoke() {
    joke.value = await jokeService.getJoke()
    const textToTranslate = joke.value.value
    json.value = await translateService.translate(textToTranslate)
}

onMounted(async () => {
    await handleNewJoke()
})
</script>