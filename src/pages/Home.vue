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
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AppCollection from '../components/AppCollection.vue'
import AppCollectionItem from '../components/AppCollectionItem.vue'
export default {
    data: () => (
        {
            selectedMovie: true
        }
    ),
    components: {
        AppCollection,
        AppCollectionItem
    }
}
</script>

<style scoped>
    .my-container {
        padding-top: 50px;
    }
</style>
