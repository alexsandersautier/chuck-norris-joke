<template>
    <div class="flex flex-col items-center justify-center px-4 h-dvh">
        <div class="card bg-base-300 w-dvw md:w-96 shadow-sm">
            <figure>
                <img :src="json.icon_url" alt="Chuck Norris Icon" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">Piada do Chuck Norris</h2>
                <p>{{ json.value }}</p>
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

async function handleNewJoke() {
    const joke = await jokeService.getJoke()
    json.value = await translateService.translate(joke.value)
}

onMounted(async () => {
    await handleNewJoke()
})
</script>