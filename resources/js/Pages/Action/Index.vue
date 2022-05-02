<template>
    <div>
        <Navbar />
        <div class="container mx-auto max-w-5xl">
            <div class="flex items-center justify-between mb-6">
                <h3 class="text-4xl mt-6 font-medium">Follow ups</h3>
                <div class="flex items-center justify-end mt-8 space-x-3 text-md">
                    <Link :href="route('dashboard')" class="text-gray-500">Dashboard</Link>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 5l7 7-7 7M5 5l7 7-7 7">
                        </path>
                    </svg>
                    <Link :href="route('visitors')" class="text-gray-500">Visitors</Link>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 5l7 7-7 7M5 5l7 7-7 7">
                        </path>
                    </svg>
                    <a class="text-gray-900 font-semibold">{{ visitor.fullname }}</a>
                </div>
            </div>
            <div class=" bg-white mt-8 shadow-lg">
                <div class="flex flex-col">
                    <div class="flex items-center justify-between text-gray-500 border-b border-gray-200 py-2">
                        <div class="flex items-center gap-4">
                            <a class="border-b border-purple-400 py-3 px-4 text-gray-700 font-medium">Follow Up</a>
                        </div>
                        <button @click="openModal"
                            class="appearance-none flex items-center mr-4 py-2 px-2 bg-purple-100 text-purple-600 hover:bg-purple-600 hover:text-white text-sm rounded">
                            <svg class="h-5 w-5 stroke-current mr-2" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            <span class="">Add Actions</span>
                        </button>
                    </div>
                    <div v-if="actions.length <= 0"
                        class="flex items-center justify-center p-4 h-48 bg-white rounded-b-md">
                        <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2">
                            </path>
                        </svg>
                        <h1 class="text-2xl text-gray-400 font-semibold">No activites for this user</h1>
                    </div>
                    <div v-else class="flex flex-col">
                        <div v-for="action in actions" :key="action.id"
                            class="flex items-center py-4 px-6 text-gray-600 border-b border-gray-200">
                            <div class=" flex items-center w-4/5 text-sm text-gray-600">
                                <div class="flex flex-col">
                                    <h3 class="font-semibold capitalize mb-1">Activity: I {{ action.action_performed
                                    }} the Visitor
                                    </h3>
                                    <p class="text-gray-700">{{ action.action_performed_detail }}</p>
                                </div>
                            </div>
                            <div class="w-1/4 text-sm ml-20">{{ action.user.name }}</div>
                            <div class="w-1/4 text-sm ml-20">{{ dayjs(action.created_at).fromNow() }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ActionModal @close-submit="closeModal" @close-action="closeModal" :is-open="isOpen" :visitor="visitor"
            :auth="auth" />
    </div>
</template>

<script setup>
import Navbar from '@/Components/Navbar.vue'
import ActionModal from '@/Components/ActionsModal'
import { ref, onMounted, onUpdated, watch, computed } from 'vue'
import { createToast } from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'
const dayjs = require('dayjs')
const relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

const props = defineProps({
    flash: Object,
    visitor: {
        type: Object,
        default: null
    },
    auth: {
        type: Object,
        default: null
    },
    actions: {
        type: Array,
        default: null
    }
})

const isOpen = ref(false)
const closeModal = () => isOpen.value = false
const openModal = () => isOpen.value = true
const state = computed(() => props.flash.success)

watch(state, (state, prevState) => {
    if (state !== null) {
        createToast(props.flash.success, { type: 'success', showIcon: true })
    }
})

</script>

