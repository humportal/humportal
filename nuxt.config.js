import linkFixes from './plugins/link-fixes.js'
const routerBase =
  process.env.DEPLOY_ENV != undefined
    ? {
        router: {
          base: process.env.DEPLOY_ENV,
        },
      }
    : {};
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  generate: {
    fallback: true,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "IATI Humanitarian Data Portal",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins

  plugins: [
    '~/plugins/errors'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/fontawesome", 'vue-plausible',],
  fontawesome: {
    icons: {
      solid: [
        "faCheckCircle",
        "faCircleXmark",
        "faCheck",
        "faXmark",
        "faInfoCircle",
        "faQuestionCircle",
        "faDownload",
        "faFlask",
        "faCommentDots",
        "faComments",
        'faUpRightFromSquare',
      ],
      brands: ['faTwitter', 'faMastodon', 'faBluesky']
    },
  },

  hooks: {
    'content:file:beforeInsert': linkFixes,
    // Fix anchors issue
    // https://github.com/nuxt/content/issues/376#issuecomment-702193217
    'vue-renderer:ssr:templateParams': function (params) {
      params.HEAD = params.HEAD.replace('<base href="/humportal-dev/">', "");
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["bootstrap-vue/nuxt", "@nuxtjs/axios", "@nuxt/content"],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Plausible
  plausible: {
    domain: 'humportal.org'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  ...routerBase,
};
