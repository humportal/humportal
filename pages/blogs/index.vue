<template>
        <b-container>
            <h3 class="text-center">Some Random Heading Text</h3>
            <p class="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                Aldus PageMaker including versions of Lorem Ipsum.</p>
            <BlogList :data-list="blogs" head-text="Blogs Listing"/>
        </b-container>
</template>
<script>
import BlogList from '../../components/blogList.vue'
export default {
    name: 'Blogs',
    async asyncData({ $content}) {
        const blogs = await $content('blogs')
        .fetch()
        return { blogs }
    },
    
}
</script>