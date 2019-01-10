<template>
    <div>
        <div class="collection scroll-collection z-depth-1">
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
    * {
        margin: 0px;
        padding: 0px;
    }

    .scroll-collection {
        height: 300px;
        overflow-y: scroll
    }
</style>
