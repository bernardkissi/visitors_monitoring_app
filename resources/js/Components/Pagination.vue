<template>
    <div v-if="links.length >= 1">
        <div class="flex flex-wrap -mb-1">
            <template v-for="(link, k) in links" :key="k">
                <div v-if="link.url === null" class="mr-1 mb-1 px-3 py-2 text-sm leading-4 text-gray-400 border rounded"
                    v-html="link.label" />
                <Link v-else
                    class="mr-1 mb-1 px-3 py-2 text-sm leading-4 border rounded hover:bg-white focus:border-purple-500 focus:text-purple-500"
                    :class="{ 'bg-purple-500 text-white': link.active }" :href="link.url" v-html="link.label" preserve-scroll/>
            </template>
        </div>
    </div>
</template>
<script setup>

defineProps({
    links: {
        type: Array,
        required: true
    },
});
</script>
