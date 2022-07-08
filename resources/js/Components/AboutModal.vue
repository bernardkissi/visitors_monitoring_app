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
                                Developer
                            </DialogTitle>
                            <DialogDescription class="text-sm mb-3 text-gray-500">
                                Contact Information
                            </DialogDescription>
                            <div class="flex flex-col items-center p-2 space-y-2">
                                <div class="flex-shrink-0">
                                    <img class="h-20 w-20 rounded-full" src="https://pbs.twimg.com/profile_images/1453852782683992100/X-WR7FOL_400x400.jpg" alt="" />
                                </div>
                                <div class="ml-3">
                                    <div class="text-base font-medium leading-6 text-gray-900">
                                        <a href="https://twitter.com/owiredubernard" class="">
                                            @bernardkissi
                                        </a>
                                    </div>
                                    <div class="text-sm font-medium leading-5 text-gray-500">
                                        Software Developer @GLEIF, Frankurt-Germany
                                    </div>
                                    <div class="text-sm font-medium leading-5 text-gray-500">
                                        <b class="text-gray-800"> Mobile: </b>+233522377591
                                    </div>
                                    <div class="text-sm font-medium leading-5 text-gray-500">
                                        <b class="text-gray-800">Email:</b> bernardkissi18@gmail.com
                                    </div>
                                    <div class="text-sm font-medium leading-5 text-gray-500">
                                        <b class="text-gray-800">Linkedln:</b> <a href="#" class="text-blue-600">@bernardkissi</a>
                                    </div>
                                </div>
                                <!-- <button type="button"
                                    class="inline-flex justify-center uppercase font-bold px-6 py-3 text-sm text-purple-900 bg-purple-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                    @click="emits('closeModal', false)">
                                    close
                                </button> -->
                            </div>
                        </div>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
import { computed } from 'vue'
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogDescription,
    DialogTitle,
} from '@headlessui/vue'


const emits = defineEmits(["closeModal", "closeSubmit"])
const props = defineProps({
    isOpen: {
        type: Boolean,
        default: 'false'
    }
})
const open = computed(() => props.isOpen)
</script>
