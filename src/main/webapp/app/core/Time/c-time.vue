<template>
    <div class="c-time">
        <span class="alert alert-primary">The Time on the Server is: {{ getTime }}</span>


        <button v-on:click="getCurrentTime" class="btn">Get Time!</button>
    </div>
</template>

<script lang="ts" src="./c-time.component.ts">
</script>


