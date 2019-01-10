<template>
    <div class="home-page">
        <div class="container my-container">
            <div v-if="selectedMovie" class="row">
                <div class="col s12">
                    <div class="video-container">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Bey4XXJAqS8" frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col s6">
                    <h3>Movie List</h3>
                    <app-collection>
                        <app-collection-item>Rocky</app-collection-item>
                        <app-collection-item>Rocky</app-collection-item>
                        <app-collection-item>Rocky</app-collection-item>
                        <app-collection-item>Rocky</app-collection-item>
                        <app-collection-item>Rocky</app-collection-item>
                        <app-collection-item>Rocky</app-collection-item>
                        <app-collection-item>Rocky</app-collection-item>
                        <app-collection-item>Rocky</app-collection-item>
                        <app-collection-item>Rocky</app-collection-item>
                        <app-collection-item>Rocky</app-collection-item>
                        <app-collection-item>Rocky</app-collection-item>
                        <app-collection-item>Rocky</app-collection-item>
                    </app-collection>
                </div>
                <div class="col s6">
                    <h3>Movie Details</h3>
                    <app-movie-card title="Rocky" :description="movieDescription" :stars="movieStars" :imgLink="movieImg" :imdbLink="imdbLink"></app-movie-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AppCollection from '../components/AppCollection.vue'
import AppCollectionItem from '../components/AppCollectionItem.vue'
import AppMovieCard from '../components/AppMovieCard.vue'
export default {
    data: () => (
        {
            selectedMovie: true,
            movieTitle: "Rocky",
            movieDescription: "A small-time boxer gets a supremely rare chance to fight a heavy-weight champion in a bout in which he strives to go the distance for his self-respect.",
            movieStars: "Sylvester Stallone, Talia Shire, Burt Young",
            imdbLink: "https://www.imdb.com/title/tt0075148/?ref_=ttpl_pl_tt",
            movieImg: "https://m.media-amazon.com/images/M/MV5BMTY5MDMzODUyOF5BMl5BanBnXkFtZTcwMTQ3NTMyNA@@._V1_UX182_CR0,0,182,268_AL_.jpg"
        }
    ),
    components: {
        AppCollection,
        AppCollectionItem,
        AppMovieCard
    }
}
</script>

<style scoped>
    .my-container {
        padding-top: 50px;
    }
</style>
