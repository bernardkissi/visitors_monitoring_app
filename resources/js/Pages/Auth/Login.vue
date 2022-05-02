<template>
    <div class="mt-24">
        <div class="container mx-auto max-w-5xl text-center">
            <div class="flex items-center justify-center gap-3">
                <img src="/images/gracefields.png" alt="logo" class="w-48">
            </div>
            <h3 class="text-xl text-gray-600 pt-2"> Visitors Montioring System</h3>
        </div>
        <div class="container mx-auto w-1/3 mt-8">
            <form @submit.prevent="submit">
                <div class="flex flex-col bg-white py-6 px-5 text-gray-600 gap-5 shadow-xl rounded-md">
                    <input type="email" name="username" placeholder="Enter your member ID" v-model="form.email"
                        class="px-6 py-4 rounded-md border border-gray-300 focus:outline-none focus:border focus:ring focus:ring-gray-400">
                    <div v-if="props.errors.email" class="text-sm text-red-400">{{ props.errors.email }}</div>
                    <input type="password" name="password" placeholder="Enter your password" v-model="form.password"
                        class="px-6 py-4 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-gray-400">
                    <div v-if="props.errors.password" class="text-sm text-red-400">{{ props.errors.password }}</div>
                    <button :disabled="form.processing" type="submit"
                        class="text-center py-4 px-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg font-medium hover:bg-blue-700">
                        <hollow-dots-spinner v-if="form.processing" :animation-duration="1000" :dot-size="15"
                            :dots-num="3" color="#ffff" />
                        <span v-else>Access Account</span>

                    </button>

                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { HollowDotsSpinner } from 'epic-spinners'
import { watch, computed } from 'vue'
import { useForm } from '@inertiajs/inertia-vue3'
import { createToast } from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'

const props = defineProps({
    errors: Object,
    flash: Object,
})

const state = computed(() => props.flash.failed)

watch(state, (state, prevState) => {
    if (state !== null) {
        createToast(state, { type: 'danger', showIcon: true })
    }
})

let form = useForm({
    email: '',
    password: ''
});

const submit = () => {
    form.post('login', {
        preserveScroll: true,
        onSuccess: () => {
            form.clearErrors()
            form.reset('password')
            if (props.flash.success !== null) {
                createToast(props.flash.success, { type: 'success', showIcon: true })
            }
        },
        onError: (errors) => {
            if (errors !== null) {
                createToast('Form has errors', { type: 'danger', showIcon: true })
            }
        }
    });
}

</script>

