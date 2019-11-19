export default () => {
  return {
    props: {
      tag: {
        type: String,
        default: 'div'
      }
    },
    render(el) {
      if (this.show === false) {
        return el(this.tag)
      }
      else {
        return el(this.tag, null, this.$slots.default)
      }
    },
    data() {
      return {
        element: null,
        state: {
          loaded: false
        },
        show: false
      }
    }
  }
}
