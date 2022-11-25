<template>
        <b-container>
            <h3 class="text-center">Updates</h3>
            <p class="lead text-center">Updates from the Grand Bargain Transparency Workstream.</p>
            <BlogList :data-list="blogs" head-text="Blogs Listing"/>
        </b-container>
</template>
<script>
import BlogList from '../../components/blogList.vue'
export default {
    name: 'Blogs',
    async asyncData({ $content}) {
        const blogs = await $content('blogs')
        .sortBy('date', 'desc')
        .fetch()
        return { blogs }
    },
    
}
</script>