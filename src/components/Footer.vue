<template>
    <div class="container" id="footer">
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