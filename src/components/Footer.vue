<template>
    <div class="container mt-5" id="footer">
        <p>Copyright @ {{ currentDate }}</p>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    computed: {
        currentDate: () => {
            return (new Date()).getFullYear()
        }
    }
}
</script>

<style>

</style>