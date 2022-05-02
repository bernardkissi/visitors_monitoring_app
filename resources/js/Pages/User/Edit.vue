<template>
    <main>
        <!-- <Navbar /> -->
        <div class="container mx-auto max-w-5xl">
            <div class="mt-8">
                <Link :href="route('users')" as="button" type="button"
                    class="flex items-center space-x-2 hover:text-gray-500">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                <span>Back</span>
                </Link>
            </div>
            <div class="flex items-center justify-between -mt-2">
                <div class="flex items-center space-x-3">
                    <h1 class="text-2xl mt-10 font-medium">{{ user.name }}</h1>
                    <span class="mt-10 px-3 bg-purple-100 text-purple-600 text-sm font-semibold rounded">{{
                            user.roles[0]['name']
                    }}</span>
                </div>
                <button v-if="!type" type="submit" form="user"
                    class="hover:bg-purple-100 hover:text-purple-700 bg-purple-600 text-white shadow-md font-bold py-3 px-5 text-sm mt-6 inline-flex items-center group rounded-md">
                    <hollow-dots-spinner v-if="form.processing" :animation-duration="1000" :dot-size="5" :dots-num="5"
                        color="#ffff" />
                    <span class="text-sm">UPDATE USER</span>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 ml-1 group-hover:translate-x-2 delay-100 duration-200 ease-in-out" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
            <div class="flex space-x-12 mt-6">
                <div class="flex flex-col bg-white rounded-lg w-1/4 h-[123px]">
                    <div @click="type = !type"
                        :class="[
                        !type ? 'bg-purple-50 border-l-4 border-purple-600 text-purple-600' : '', 'flex flex-col p-3  cursor-pointer hover:bg-gray-50']">
                        <span class="font-semibold text-sm">User Information</span>
                        <span class="text-xs text-gray-500">Update users information</span>
                    </div>
                    <div @click="type = !type"
                        :class="[
                        type ? 'bg-purple-50 border-l-4 border-purple-600 text-purple-600' : '', 'flex flex-col p-3  cursor-pointer hover:bg-gray-50']">
                        <span class="font-semibold text-sm">Assign Visitors to a User </span>
                        <span class="text-xs text-gray-500">Assign a member to a visitor</span>
                    </div>
                </div>
                <div class="w-3/4">
                    <div v-if="!type" class="flex flex-col bg-white shadow rounded-lg mb-6 mt-2">
                        <form @submit.prevent="submit(user.id)" id="user">
                            <div class="flex flex-col p-6 border-b">
                                <h3 class="text-xl text-gray-700 font-semibold">Personal Information</h3>
                                <span class="text-sm text-purple-500">User Information</span>

                                <div class="mt-4 flex items-center justify-between space-x-3">
                                    <div class="flex flex-grow flex-col">
                                        <input type="text" v-model="form.name" placeholder="Enter Fullname"
                                            class="px-6 py-3 rounded-md border border-gray-300 focus:outline-none focus:border focus:ring focus:ring-gray-400">
                                        <span v-if="form.errors.name" class="text-xs text-red-500">{{
                                                form.errors.name
                                        }}</span>
                                    </div>
                                    <div class="flex flex-grow flex-col">
                                        <input type="text" v-model="form.phone" placeholder="Enter Phone Number"
                                            class="px-6 py-3 rounded-md border border-gray-300 focus:outline-none focus:border focus:ring focus:ring-gray-400">
                                        <span v-if="form.errors.phone" class="text-xs text-red-500">{{ form.errors.phone
                                        }}</span>
                                    </div>
                                </div>
                                <div class="mt-4 flex items-center justify-between space-x-3">
                                    <div class="flex flex-grow  flex-col">
                                        <input type="text" v-model="form.email" placeholder="Enter Email Address"
                                            class="px-6 py-3 rounded-md border border-gray-300 focus:outline-none focus:border focus:ring focus:ring-gray-400">
                                        <span v-if="form.errors.email" class="text-xs text-red-500">{{
                                                form.errors.email
                                        }}</span>
                                    </div>

                                    <input type="text" v-model="form.password"
                                        placeholder="Enter new password (optional)"
                                        class="w-2/4 px-6 py-3 rounded-md border border-gray-300 focus:outline-none focus:border focus:ring focus:ring-gray-400">
                                </div>
                            </div>
                        </form>
                    </div>
                    <div v-if="!type" class="flex flex-col bg-white shadow rounded-lg mb-6 mt-2">
                        <form @submit.prevent="submitRole(user.id)">
                            <div class="flex flex-col p-6 border-b">

                                <div class="flex items-center justify-between">
                                    <div>
                                        <h3 class="text-xl text-gray-700 font-semibold">Update Role</h3>
                                        <span class="text-sm text-gray-500">Assign user a new role</span>
                                    </div>
                                </div>
                                <h3 class="text-gray-500 mt-4">Select Role</h3>
                                <select v-model="updateRole.role" name="role"
                                    class="mt-3 px-6 py-3 rounded-md border text-gray-600 border-gray-300 focus:outline-none focus:border focus:ring focus:ring-gray-400">
                                    <option value="" selected>Select a role</option>
                                    <option v-for="role in props.roles" :key="role.id" :value="role.name">{{ role.name
                                    }}
                                    </option>
                                </select>
                                <span v-if="updateRole.errors.role" class="text-xs text-red-500">{{
                                        updateRole.errors.role
                                }}</span>
                                <button type="submit"
                                    class="w-48 justify-center bg-purple-100 text-purple-700 hover:bg-purple-600 hover:text-white font-bold py-3 px-3 text-sm mt-6 inline-flex items-center group rounded-md">
                                    <span v-if="updateRole.processing">Submitting...</span>
                                    <span v-else>Update Role</span>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="h-4 w-4 ml-1 group-hover:translate-x-2 delay-100 duration-200 ease-in-out"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>

                    <div v-if="type" class="flex flex-col bg-white shadow rounded-lg mb-6 mt-2">
                        <form @submit.prevent="assignVisitors(assign.visitors)">
                            <div class="flex flex-col p-6 border-b">
                                <div class="flex items-center justify-between">
                                    <div>
                                        <h3 class="text-xl text-gray-700 font-semibold">Assign Visitors</h3>
                                        <span class="text-sm text-gray-500">Assign vistors to this user</span>
                                    </div>
                                </div>
                                <h3 class="text-gray-500 mt-4">Select Visitors</h3>
                                <select v-model="assign.visitors" name="visitors"
                                    class="mt-3 px-6 py-3 rounded-md border text-gray-600 border-gray-300 focus:outline-none focus:border focus:ring focus:ring-gray-400"
                                    required>
                                    <option value="" selected>Select a visitors</option>
                                    <option v-for="visitor in props.visitors" :key="visitor.id" :value="visitor.id">
                                        {{ visitor.fullname }}
                                    </option>
                                </select>
                                <span v-if="assign.errors" class="text-xs text-red-500">{{
                                        assign.errors.user_id
                                }}</span>
                                <button type="submit"
                                    class="w-48 justify-center bg-purple-100 text-purple-700 hover:bg-purple-600 hover:text-white font-bold py-3 px-3 text-sm mt-6 inline-flex items-center group rounded-md">
                                    <span v-if="assign.processing">Submitting...</span>
                                    <span v-else>Assign Visitor</span>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="h-4 w-4 ml-1 group-hover:translate-x-2 delay-100 duration-200 ease-in-out"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div v-if="!type" class="mt-12 mb-12" style="overflow-x:auto;">
                        <table class="w-full mt-2 rounded-lg shadow-lg">
                            <thead class="rounded-t-lg">
                                <tr class="text-left rounded-t-lg bg-gray-50 border-b border-grey uppercase">
                                    <th class="px-2 py-4">
                                        <span
                                            class="bg-white border-2 ml-2 rounded border-gray-400 w-5 h-5 flex flex-shrink-0 focus-within:border-blue-500">
                                            <input type="checkbox" class="opacity-0 absolute">
                                            <svg class="fill-current hidden w-4 h-4 text-blue-500 pointer-events-none"
                                                viewBox="0 0 20 20">
                                                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                                            </svg>
                                        </span>
                                    </th>
                                    <th class="text-sm text-gray-700">Recent Visitors</th>
                                    <th class="hidden md:table-cell  text-sm text-gray-700">Mobile</th>
                                    <th class="text-sm text-gray-700">Status</th>
                                    <th class="text-sm text-gray-700">Action</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white">
                                <tr v-for="visitor in props.user.visitors" :key="visitor.id"
                                    class="accordion border-b border-gray-100 hover:bg-gray-50">
                                    <td class="px-3 py-5">
                                        <span
                                            class="bg-white border-2 ml-1 rounded border-gray-400 w-5 h-5 flex flex-shrink-0 focus-within:border-blue-500">
                                            <input type="checkbox" class="opacity-0 absolute">
                                            <svg class="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
                                                viewBox="0 0 20 20">
                                                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                                            </svg>
                                        </span>
                                    </td>
                                    <td class="flex items-center">
                                        <span>
                                            <img class="hidden mr-1 md:mr-2 md:inline-block h-8 w-8 rounded-full object-cover"
                                                :src="image + visitor.fullname" alt="" />
                                        </span>
                                        <span class="py-3 w-40">
                                            <p class="text-gray-800 text-sm">{{ visitor.fullname }}</p>
                                            <p class="md:hidden text-xs text-gray-600 font-medium">{{ visitor.phone }}
                                            </p>
                                            <p class="hidden md:table-cell text-xs text-gray-400 font-medium">{{
                                                    visitor.address
                                            }}</p>
                                        </span>
                                    </td>
                                    <td class="hidden md:table-cell">
                                        <p class="text-sm text-gray-800 font-medium">{{ visitor.phone }}</p>
                                        <p class="text-xs text-gray-500 font-medium">{{ visitor.email }}</p>
                                    </td>

                                    <td>
                                        <span v-if="visitor.state === 'pending'"
                                            class="bg-rose-50 text-rose-600 text-xs font-bold rounded px-4 py-1">{{
                                                    visitor.state
                                            }}
                                        </span>
                                        <span v-if="visitor.state === 'called'"
                                            class="bg-yellow-100 text-yellow-600 text-xs font-bold rounded px-4 py-1">{{
                                                    visitor.state
                                            }}
                                        </span>
                                        <span v-if="visitor.state === 'visited'"
                                            class="bg-green-100 text-green-600 text-xs font-bold rounded px-4 py-1">{{
                                                    visitor.state
                                            }}
                                        </span>
                                    </td>
                                    <td class="flex space-x-3">
                                        <Link :href="route('actions.visitor', visitor.id)" as="button" type="button"
                                            class="text-xs text-blue-600 py-1 px-3 bg-blue-50 rounded-md hover:bg-gray-100">
                                        Follow up
                                        </Link>
                                        <Link :href="route('logout')" as="button" type="button"
                                            class="flex items-center space-x-2 text-xs text-blue-600 py-1 px-3 bg-blue-50 rounded-md hover:bg-gray-100">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                                            </path>
                                        </svg>
                                        <!-- <span>Remove</span> -->
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import Navbar from '@/Components/Navbar.vue'
import Select from '@/components/Select.vue'
import { ref, computed } from 'vue'
import { HollowDotsSpinner } from 'epic-spinners'
import { useForm } from '@inertiajs/inertia-vue3';
import { createToast } from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'

let type = ref(false)
const image = ref('https://ui-avatars.com/api/?background=f3e8ff&color=7e22ce&bold=true&name=')

const props = defineProps({
    flash: Object,
    user: Object,
    roles: Array,
    visitors: Array
})

let form = useForm({
    name: props.user.name,
    email: props.user.email,
    phone: props.user.phone,
    password: ''
})

let updateRole = useForm({
    role: ''
})

let assign = useForm({
    visitors: '',
    user_id: props.user.id,
})

const submit = (id) => {
    form.put(route('user.update', id), {
        preserveScroll: true,
        onSuccess: () => {
            form.clearErrors()
            form.reset()
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

const submitRole = (id) => {
    updateRole.post(route('user.sync.role', id), {
        preserveScroll: true,
        onSuccess: () => {
            updateRole.clearErrors()
            updateRole.reset()
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

const assignVisitors = (id) => {
    assign.put(route('visitor.assign.user', id), {
        preserveScroll: true,
        onSuccess: () => {
            assign.clearErrors()
            assign.reset()
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


