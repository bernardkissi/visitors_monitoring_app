<template>
    <div class="h-screen">
        <embed :src="url" type="application/pdf" width="100%" class="h-screen" />
    </div>
</template>

<script setup>
const props = defineProps({
    url: {
        type: String,
        required: true
    }
})
</script>