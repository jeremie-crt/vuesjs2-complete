<template>
    <div class="col-md-12">
        <img src="../assets/succes.png" alt="succes">
        <h3 class="mt-4">{{ catchPhrase }}</h3>
    </div>
</template>

<script>

export default {
    name: "ActionSuccess",
    components: {
    },
    props: {
        catchPhrase: { type: String, default: 'success'},
    }
}
</script>

<style scoped>

</style>