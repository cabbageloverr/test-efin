<template>
  <div class="h-screen">
    <nav class="bg-gray-400 p-4 text-white">
      <div class="flex items-center">
        <img src="./logo.png" class="w-12 h-12">
        <p class="px-3">Menu 1</p>
        <p class="px-3">Menu 2</p>
        <p class="px-3">Menu 3</p>
      </div>
    </nav>

    <div class="body h-100 p-2 grid grid-cols-4 grid-rows-4 gap-4 text-white text-center">
      <div class="bg-red-800 row-span-2 col-span-2">{{ data?.data_1 }} </div>
      <div class="bg-green-800 row-span-2 col-span-1">{{ data?.data_2 }}</div>
      <div class="bg-purple-800 row-span-4 col-span-1">{{ data?.data_5 }}</div>
      <div class="bg-indigo-800 col-span-2">{{ data?.data_3 }}</div>
      <div class="bg-teal-800 col-span-1">{{ data?.data_4 }}</div>
      <div class="bg-yellow-800 row-span-1 col-span-3 ">{{ data?.data_6 }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {  ref } from 'vue';
import getData, { type GetData } from './API/getData'
import './assets/main.css'

const data = ref<GetData>()

async function getList() {
  const res = await getData()
  data.value = res
}

getList()



</script>


<style scoped>
.body{
  height: 100%;
}
</style>
