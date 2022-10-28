<template>
    <b-container>
    <h3>Some Random Heading Text</h3>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <b-row gutter>
                <b-card v-for="blog in blogs" :title="blog.title" :sub-title="blog.slug" :key="blog.slug" class="blog-card">
                        <b-card-text>
                            {{ blog.title }}
                        </b-card-text>
                        <a href="#" class="card-link">Card link</a>
                        <b-link href="#" class="card-link">Another link</b-link>
                </b-card>
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
    async asyncData({ $content }) {
        const blogs = await $content('blogs').fetch()
        return {
            blogs
        }
    }
}

</script>