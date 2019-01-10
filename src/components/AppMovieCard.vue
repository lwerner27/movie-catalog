<template>
    <div class="card horizontal card-height">
        <div class="card-image valign-wrapper">
            <img :src="imgLink">
        </div>
        <div class="card-stacked">
            <div class="card-content">
                <h5>{{ title }}</h5>
                <hr>
                <p> {{ description }}</p>
                <hr>
                <p><Strong>Stars:</Strong> {{ stars }}</p>
            </div>
            <div class="card-action">
                <a :href="imdbLink" target="_blank">IMDb</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        description: String,
        stars: String,
        imdbLink: String,
        imgLink: String
    }
}
</script>

<style scoped>
    .card-height {
        min-height: 300px;
    }
</style>

