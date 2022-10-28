<template>
        <b-container>
            <h3>Some Random Heading Text</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                Aldus PageMaker including versions of Lorem Ipsum.</p>
            <b-row style="margin-top: 50px">
                <b-card-group v-for="blog of blogs" :key="blog.slug" column>
                    <b-card style="max-width: 20rem;" class="mb-2 blog-card">
                        <b-card-img-lazy :src="blog.image" class="card-img" top/>
                        <b-card-title>{{blog.title}}</b-card-title>
                        <b-card-sub-title>{{blog.category}}</b-card-sub-title>
                        <b-card-text class="card-text">
                            {{blog.description}}
                        </b-card-text>
                
                        <b-button :href="blog.url" variant="primary">Explore Data</b-button>
                    </b-card>
                </b-card-group>
            </b-row>
        </b-container>
</template>
<style>
.blog-card{
    margin: 0 5px;
    width: 20rem;
    display: flex;
}
.card-img{
    width: 10rem;
}
.card-text{
    height: 100px;
    overflow: hidden;
    /* white-space: nowrap; */
    text-overflow: ellipsis;
}
</style>
<script>
export default {
    async asyncData({ $content}) {
        const blogs = await $content('blogs')
        .sortBy('createAt', 'des')
        .fetch()
        return { blogs }
    },
}

</script>