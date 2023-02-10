
export default function ({ $axios, app, redirect }) {
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if ([404].includes(code)) {
      app.router.app.$bvToast.toast(`This page could not be found.`, {
          title: 'Error',
          autoHideDelay: 10000,
          solid: true,
          variant: 'danger'
        })
      throw error
    } else if ([500].includes(code)) {
      app.router.app.$bvToast.toast(`Sorry, there was an unexpected server error. The error was: ${error}. Please try again, or contact support if this problem persists.`, {
          title: 'Error',
          autoHideDelay: 10000,
          solid: true,
          variant: 'danger'
        })
      throw error
    } else if (error.response == undefined) {
      app.router.app.$bvToast.toast(`Sorry, there was an error. It appears that you are not connected to the Internet.`, {
          title: 'Error',
          autoHideDelay: 10000,
          solid: true,
          variant: 'danger'
        })
      throw error
    } else {
      app.router.app.$bvToast.toast(`Sorry, there was an unexpected error. The error was: ${error}.`, {
          title: 'Error',
          autoHideDelay: 10000,
          solid: true,
          variant: 'danger'
        })
      throw error

    }
  })
}