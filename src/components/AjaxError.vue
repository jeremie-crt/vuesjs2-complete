<template>
    <div v-if="error.length">
        <div class="alert alert-danger" role="alert">
            <b style="color:red">{{ error }}</b>
        </div>
    </div>
</template>

<script>
export default {
    name: "AjaxError",
    props: {
        error: { type: String, default: ''}
    }
}
</script>
