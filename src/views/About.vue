<template>
    <div class="container">
        <h2>ABOUT US</h2>
        <p>{{ text }}</p>
    </div>
</template>

<script>
let contentraw = "Conveniently facilitate highly efficient relationships after accurate ROI. Dramatically restore virtual total linkage whereas future-proof e-business. Globally revolutionize synergistic content and flexible bandwidth. Objectively brand leveraged portals via dynamic strategic theme areas. Seamlessly disintermediate fully researched infrastructures after an expanded array of e-business."


export default {
    name: 'About',
    props: {
        text: {type: String, required: false, default: contentraw}
    }
}
</script>