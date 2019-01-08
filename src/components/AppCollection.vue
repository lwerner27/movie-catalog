<template>
    <div>
        <h3 class="teal-text text-lighten-2">Movies</h3>
        <div class="collection scroll-collection">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        header: String
    }
}
</script>

<style scoped>
    li {
        text-decoration: none;
    }

    .scroll-collection {
        max-height: 500px;
        overflow-y:auto
    }
</style>
