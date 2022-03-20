<template>
    <div v-if="errors.length">
        <b>Please correct the following error(s)</b>
        <ul>
            <li v-for="(error, index) in errors" :key="index" style="list-style: none">
                <span style="color:red">{{ error }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "FormErrors",
    props: {
        errors: { type: Array, default: Array}
    }
}
</script>
