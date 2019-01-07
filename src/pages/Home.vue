<template>
    <div class="home-page">
        <div class="container">
            <div class="row">
                <div class="col s12 m4">
                    <app-collection>
                        <app-collection-item>Rocky</app-collection-item>
                        <app-collection-item>Rocky</app-collection-item>
                        <app-collection-item>Rocky</app-collection-item>
                        <app-collection-item>Rocky</app-collection-item>
                        <app-collection-item>Rocky</app-collection-item>
                        <app-collection-item>Rocky</app-collection-item>
                    </app-collection>
                </div>
                <div class="col s12 m8">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AppCollection from '../components/AppCollection.vue'
import AppCollectionItem from '../components/AppCollectionItem.vue'
export default {
    components: {
        AppCollection,
        AppCollectionItem
    }
}
</script>

