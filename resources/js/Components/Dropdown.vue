<template>
    <Menu as="div" class="relative inline-block text-left">
        <div>
            <MenuButton
                class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-50 focus:ring-white">
                <span class="sr-only">Open user menu</span>
                <img class="h-8 w-8 rounded-full" :src="image + $page.props.auth.user.name" alt="profile_pic" />
            </MenuButton>
        </div>

        <transition enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0">
            <MenuItems
                class="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div class="px-1 py-1">
                    <MenuItem v-slot="{ active }" :as="Link" :href="route('user.edit', $page.props.auth.user.id)">
                    <Link :href="route('user.edit', $page.props.auth.user.id)" :class="[
                        active ? 'bg-purple-50 text-purple-800' : 'text-gray-900',
                        'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                    ]">
                    Account
                    </Link>
                    </MenuItem>
                    <MenuItem v-if="props.role === 'admin'" v-slot="{ active }" :as="Link" :href="route('settings')">
                    <Link :href="route('settings')" :class="[
                        active ? 'bg-purple-50 text-purple-800' : 'text-gray-900',
                        'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                    ]">
                    Settings
                    </Link>
                    </MenuItem>
                </div>
                <div class="px-1 py-1">
                    <MenuItem v-slot="{ active }">
                    <Link :href="route('logout')" method="post" as="button" type="button" :class="[
                        active ? 'bg-purple-50 text-purple-800' : 'text-gray-900',
                        'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                    ]">
                    Logout
                    </Link>
                    </MenuItem>
                </div>
            </MenuItems>
        </transition>
    </Menu>

</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/solid'
import { ref } from 'vue'

const props = defineProps({
    role:String
})

const image = ref('https://ui-avatars.com/api/?background=dbeafe&color=1e3a8a&bold=true&name=')
</script>

