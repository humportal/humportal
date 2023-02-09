<template>
  <div class="d-flex flex-column h-100">
    <b-navbar toggleable="lg" type="light" variant="light" class="navbar-primary" sticky>
      <b-navbar-brand :to="{name: 'index'}" title="Home">
        <img src="~/assets/images/logo.png" class="logo" />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{name: 'index'}">Home</b-nav-item>
          <b-nav-item :to="{name: 'signatory-progress'}">Signatory Progress</b-nav-item>
          <b-nav-item :to="{name: 'signatory-data'}">Signatory Data</b-nav-item>
          <b-nav-item :to="{name: 'guidance'}">Guidance</b-nav-item>
          <b-nav-item :to="{name: 'updates'}">Updates</b-nav-item>
          <b-nav-item :to="{name: 'about'}">About</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <nuxt />
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  computed: {
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'Inter';
  src: url('~/assets/fonts/subset-Inter-LightBETA.eot');
  src: url('~/assets/fonts/subset-Inter-LightBETA.eot?#iefix')
      format('embedded-opentype'),
    url('~/assets/fonts/subset-Inter-LightBETA.woff2') format('woff2'),
    url('~/assets/fonts/subset-Inter-LightBETA.woff') format('woff'),
    url('~/assets/fonts/subset-Inter-LightBETA.ttf') format('truetype'),
    url('~/assets/fonts/subset-Inter-LightBETA.svg#Inter-LightBETA')
      format('svg');
  font-weight: 200;
  font-style: normal;
}

@font-face {
  font-family: 'Inter';
  src: url('~/assets/fonts/subset-Inter-Regular.eot');
  src: url('~/assets/fonts/subset-Inter-Regular.eot?#iefix')
      format('embedded-opentype'),
    url('~/assets/fonts/subset-Inter-Regular.woff2') format('woff2'),
    url('~/assets/fonts/subset-Inter-Regular.woff') format('woff'),
    url('~/assets/fonts/subset-Inter-Regular.ttf') format('truetype'),
    url('~/assets/fonts/subset-Inter-Regular.svg#Inter-Regular') format('svg');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Inter';
  src: url('~/assets/fonts/subset-Inter-Medium.eot');
  src: url('~/assets/fonts/subset-Inter-Medium.eot?#iefix')
      format('embedded-opentype'),
    url('~/assets/fonts/subset-Inter-Medium.woff2') format('woff2'),
    url('~/assets/fonts/subset-Inter-Medium.woff') format('woff'),
    url('~/assets/fonts/subset-Inter-Medium.ttf') format('truetype'),
    url('~/assets/fonts/subset-Inter-Medium.svg#Inter-Medium') format('svg');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Inter';
  src: url('~/assets/fonts/subset-Inter-SemiBold.eot');
  src: url('~/assets/fonts/subset-Inter-SemiBold.eot?#iefix')
      format('embedded-opentype'),
    url('~/assets/fonts/subset-Inter-SemiBold.woff2') format('woff2'),
    url('~/assets/fonts/subset-Inter-SemiBold.woff') format('woff'),
    url('~/assets/fonts/subset-Inter-SemiBold.ttf') format('truetype'),
    url('~/assets/fonts/subset-Inter-SemiBold.svg#Inter-SemiBold')
      format('svg');
  font-weight: 600;
  font-style: normal;
}
body {
    font-family: sans-serif;
    margin-bottom: 40px;
    word-wrap: break-word;
}
img.logo {
    padding: 10px 10px 10px 20px;
    height: 80px;
}
.navbar-primary {
  margin-bottom: 20px;
}
.navbar-primary .navbar-nav .nav-item {
    margin-left: 40px;
    font-size: 16px;
    letter-spacing:  1.43px;
    text-transform: capitalize;
    padding:  20px 8px;
}
.navbar-primary .navbar-nav .nav-item a:hover {
    color: #25a898;
}

.navbar-primary .navbar-nav .nav-item a.nuxt-link-exact-active {
    color: #25a898;
}

blockquote {
  margin-left: 10px;
  border-left: 5px solid lightgrey;
  padding-left: 15px;
  font-style: italic;
}



.nuxt-content {
  padding-left: 20px;
  padding-right: 20px;
  ul, ol {
    padding-left: 20px;
  }
  li {
    padding-left: 5px;
  }
  span.icon.icon-link {
    opacity: 0;
    font-size: .85em;
    float: left;
    margin-left: -0.87em;
    padding-right: 0.23em;
    margin-top: 0.125em;
  }
  span.icon.icon-link::before {
    content: "#";
  }
  h2 {
    margin-top: -5.1rem;
    padding-top: 6.6rem;
  }
  h3 {
    margin-top: -5.6rem;
    padding-top: 6.6rem;
  }
  h4 {
    margin-top: -5.6rem;
    padding-top: 6.6rem;
  }
  h2:hover .icon.icon-link, h3:hover .icon.icon-link, h4:hover .icon.icon-link, h5:hover .icon.icon-link {
    opacity: 100;
  }
}


</style>
