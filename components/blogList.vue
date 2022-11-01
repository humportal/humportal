<template>

    <b-row style="margin-top: 50px" align-h="center">
        <b-card-group v-for="blog of dataList" :key="blog.slug" column>
            <NuxtLink :to="`blogs/${blog.slug}`">
                <b-card style="max-width: 20rem;" class="mb-2 blog-card mx-1" >
                    <b-card-img-lazy :src="blog.image" class="card-img" top />
                    <b-card-title>{{ blog.title }}</b-card-title>
                    <b-card-text class="card-text lead">
                        {{ blog.summary }}
                    </b-card-text>
                    <b-button :href="blog.url" variant="primary">Explore Data</b-button>
                </b-card>
            </NuxtLink>
        </b-card-group>
    </b-row>
</template>
<script>
export default {
    name: 'BlogList',
    props: ['dataList', 'headText']

}
</script>
<style>
.blog-card {
    width: 20rem;
    display: flex;
    color: #141414;
}

.card-group a:hover {
    text-decoration: none;
}

.card-img {
    width: 10rem;
}

.card-text {
    margin: 10px 0;
}
</style>