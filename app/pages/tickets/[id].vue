<script setup lang="ts">
const route = useRoute()
const ticketId = computed(() => route.params.id)
</script>

<template>
  <div>
    Ticket ID: {{ ticketId }}
  </div>
</template>
