<template>
    <div class="home-page">
        <div class="container">
            <div class="row">
                <div v-if="selectedMovie" class="col s12 m8">

                </div>
                <div class="col s12 m4">
                    <app-collection header="Movies">
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
            selectedMovie: null
        }
    ),
    components: {
        AppCollection,
        AppCollectionItem
    }
}
</script>

