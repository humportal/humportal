<template>
    <b-container>
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