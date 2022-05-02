<template>
    <Menu as="div" class="relative inline-block text-left z-10">
        <div>
            <MenuButton>
                <svg class="absolute mr-3 md:mr-1 h-12 w-6 fill-current text-gray-500"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path
                        d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                </svg>
            </MenuButton>
        </div>

        <transition enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0">
            <MenuItems class="absolute ">
                <div class="px-1 py-1">
                    <MenuItem v-slot="{ active }" :as="Link" :href="route('users')">
                    <Link :href="route('users')" :class="[
                        active ? 'text-blue-800' : 'text-gray-900',
                        'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                    ]">
                    View
                    </Link>
                    </MenuItem>
                    <MenuItem v-slot="{ active }" :as="Link" :href="route('settings')">
                    <Link :href="route('settings')" :class="[
                        active ? 'text-blue-800' : 'text-gray-900',
                        'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                    ]">
                    Edit
                    </Link>
                    </MenuItem>
                    <MenuItem v-slot="{ active }" :as="Link" :href="route('settings')">
                    <Link :href="route('settings')" :class="[
                        active ? 'text-blue-800' : 'text-gray-900',
                        'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                    ]">
                    Delete
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
</script>

