<template>
    <div>
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
    * {
        margin: 0px;
        padding: 0px;
    }
</style>
