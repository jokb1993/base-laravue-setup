<template>
    <Base>
    <RouterView />
    </Base>
</template>

<script>
import Base from "./components/Base.vue";

export default {
    components: { Base },
}
</script>

<style lang="scss">
@import "../assets/variables.scss";
</style>
