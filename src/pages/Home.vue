<template>
    <div class="home-page valign-wrapper">
        <div class="container">
            <div class="row">
                <div v-if="selectedMovie" class="col s12 m8">
                    <div class="video-container">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Bey4XXJAqS8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div class="col s12 m4">
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
    .home-page {
        border: solid black 5px;
        position: fixed;
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
    }
</style>
