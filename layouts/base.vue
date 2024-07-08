<template>
    <!-- navigation bar -->
    <PartialsNavigationBar />
    <slot />
</template>

<script setup lang="ts">

// base meta
useHead({
    titleTemplate(title) {
        return title ? `${title} — Oka Rajeb Abdillah` : 'Oka Rajeb Abdillah'
    }
})

</script>