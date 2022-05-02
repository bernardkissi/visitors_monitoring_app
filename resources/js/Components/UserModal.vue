<template>
    <TransitionRoot appear :show="open" as="template">
        <Dialog as="div" @close="emits('closeModal', false)" class="fixed inset-0 z-10 overflow-y-auto">
            <DialogOverlay class="fixed inset-0 bg-black opacity-30" />
            <div class="fixed inset-0 z-10 overflow-y-auto">
                <div class="min-h-screen px-4 text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0"
                        enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100"
                        leave-to="opacity-0">
                        <DialogOverlay class="fixed inset-0" />
                    </TransitionChild>

                    <span class="inline-block h-screen align-middle" aria-hidden="true">
                        &#8203;
                    </span>

                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <div
                            class="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <DialogTitle as="h3" class="text-2xl font-medium leading-6 text-gray-900">
                                Create User
                            </DialogTitle>
                            <DialogDescription class="text-sm mb-3 text-gray-500">
                                Add new user to the system
                            </DialogDescription>
                            <form @submit.prevent="submit">
                                <div class="flex flex-col mt-2 p-2">
                                    <div class="mb-4">
                                        <label class="text-gray-600 font-semibold text-sm">Name</label>
                                        <input type="text" v-model="form.name" name="username"
                                            placeholder="Enter fullname"
                                            class="w-full mt-2 px-6 py-3 rounded-md border border-gray-300 focus:outline-none  focus:ring focus:ring-gray-400">
                                        <span v-if="form.errors.name" class="text-xs text-red-500">{{
                                                form.errors.name
                                        }}</span>
                                    </div>
                                    <div class="mb-4">
                                        <label class="text-gray-600 font-semibold text-sm">Email Address</label>
                                        <input type="text" v-model="form.email" name="email"
                                            placeholder="Enter email address"
                                            class="w-full mt-2 px-6 py-3 rounded-md border border-gray-300 focus:outline-none  focus:ring focus:ring-gray-400">
                                        <span v-if="form.errors.email" class="text-xs text-red-500">{{ form.errors.email
                                        }}</span>
                                    </div>
                                    <div class="mb-4">
                                        <label class="text-gray-600 font-semibold text-sm">Mobile Number</label>
                                        <input type="text" v-model="form.phone" name="phone"
                                            placeholder="Enter mobile number"
                                            class="w-full mt-2 px-6 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-gray-400">
                                        <span v-if="form.errors.phone" class="text-xs text-red-500">{{ form.errors.phone
                                        }}</span>
                                    </div>
                                    <div class="mb-4">
                                        <label class="text-gray-600 font-semibold text-sm">Password</label>

                                        <input type="password" v-model="form.password" name="memberId"
                                            placeholder="Enter password"
                                            class="w-full mt-2 px-6 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-gray-400">
                                        <span v-if="form.errors.password" class="text-xs text-red-500">{{
                                                form.errors.password
                                        }}</span>
                                    </div>
                                    <div class="mb-4">
                                        <label class="text-gray-600 font-semibold text-sm">Assign Role</label>
                                        <select name="action_type" v-model="form.role"
                                            class="w-full mt-3 px-3 py-3 rounded-md border border-gray-300 focus:outline-none focus:border focus:ring focus:ring-gray-400">
                                            >
                                            <option value="" selected>Select User Role</option>
                                            <option value="admin">Administrator</option>
                                            <option value="user">User</option>
                                        </select>
                                        <span v-if="form.errors.role" class="text-xs text-red-500">{{ form.errors.role
                                        }}</span>
                                    </div>
                                </div>

                                <div class="flex items-start space-x-3 p-3">
                                    <button type="submit"
                                        class="inline-flex justify-center uppercase font-bold px-4 py-3 text-sm text-purple-900 bg-purple-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-offset-1 focus-visible:ring-blue-500">
                                        <span v-if="form.processing">Submitting...</span>
                                        <span v-else>Add User</span>
                                    </button>
                                    <button type="button"
                                        class="inline-flex justify-center uppercase font-bold px-6 py-3 text-sm text-purple-900 bg-purple-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        @click="emits('closeModal', false)">
                                        Close
                                    </button>
                                </div>
                            </form>
                        </div>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogDescription,
    DialogTitle,
} from '@headlessui/vue'
import { useForm } from '@inertiajs/inertia-vue3';

const emits = defineEmits(["closeModal", "closeSubmit"])
const props = defineProps({
    isOpen: {
        type: Boolean,
        default: 'false'
    }
})
const open = computed(() => props.isOpen)

let form = useForm({
    name: '',
    email: '',
    phone: '',
    password: '',
    role: ''
})

const submit = () => {
    form.post('/user/store', {
        preserveScroll: true,
        onSuccess: () => {
            form.clearErrors()
            form.reset()
            emits('closeSubmit', false)
        },
        onError: (errors) => {
            if (errors !== null) {
                createToast('Form has errors', { type: 'danger', showIcon: true })
            }
        }
    });

}
</script>
