<template>
  <b-container class="blog-container">
    <b-row no-gutters align-v="center">
      <b-col>
        <b-row align-v="center" margin="20">
          <b-img v-if="blog.image" :src="blog.image" rounded fluid alt="" class="blog-img"></b-img>
          <b-col>
            <h1 class="text-monospace">{{ blog.title }}</h1>
          <b-badge :variant="blog.category === 'blog' ? 'info' : 'warning'">{{ blog.category }}</b-badge>
          <b-badge variant="dark">{{new Date(blog.date).toDateString() }}</b-badge>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <article class="my-5">
      <nuxt-content :document="blog"/>
      <b-button :href="blog.url" variant="primary" class="mt-4">
       <font-awesome-icon :icon="['fas', 'external-link-alt']" class="mr-2"/>
        {{blog.category === 'blog' ? 'Read More' : 'Visit Site'}}
      </b-button>
    </article>
  </b-container>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const blog = await $content(`blogs/${params.slug}`).fetch()
    return {
      blog
    }
  },
 

}
</script>
<style scoped>
.blog-container{
  max-width: 800px;
}
.blog-img {
  width: 300px;
  margin-right: 20px;
  box-shadow: 0px 0px 6px #aaaaaa;
}
</style>
  
  