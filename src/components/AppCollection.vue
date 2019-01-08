<template>
    <div class="collection">
        <slot></slot>
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
</style>
