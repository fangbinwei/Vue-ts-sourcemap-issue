<template>
    <div>{{c_count}}</div>
</template>

<script>
    export default {
        name: "Foo",
        props:{
            // eslint-disable-next-line vue/require-prop-type-constructor
            count: Number
        },
        data() {
            return {
                // eslint-disable-next-line @typescript-eslint/camelcase
                b_count: 5,
                // eslint-disable-next-line @typescript-eslint/camelcase
                c_count: 7

            }
        }
    }
</script>

<style scoped>

</style>