<template>
    <div class="container">
        <h2>Error 404</h2>
        <p>{{ text }}</p>
    </div>
</template>

<script>
let contentraw = "ERROR 404 - No content exists here"


export default {
    name: 'Error',
    props: {
        text: {type: String, required: false, default: contentraw}
    }
}
</script>