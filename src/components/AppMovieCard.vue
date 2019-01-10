<template>
    <div class="card horizontal">
        <div class="card-image">
            <img src="https://lorempixel.com/100/190/nature/6">
        </div>
        <div class="card-stacked">
            <div class="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.</p>
            </div>
            <div class="card-action">
                <a :href="imdbLink">IMDB</a>
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
        imgLInk: String
    }
}
</script>
