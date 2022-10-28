<template>
        <b-container>
            <h3>Some Random Heading Text</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                Aldus PageMaker including versions of Lorem Ipsum.</p>
            <b-row gutter>
                <div v-for="blog of blogs" :title="blog.title" :key="blog.slug">
                    <NuxtLink :to="`blogs/${blog.slug}`">
                        <b-card class="blog-card">
                            <b-card-text>
                                {{ blog.title }}
                            </b-card-text>
                        </b-card>
                    </NuxtLink>
                </div>
            </b-row>
        </b-container>
</template>
<style>
.blog-card{
    margin: 0 10px;
}
</style>
<script>
export default {
    async asyncData({ $content}) {
        const blogs = await $content('blogs')
        .only(['title', 'description', 'slug'])
        .sortBy('createAt', 'des')
        .fetch()
        return { blogs }
    },
}

</script>