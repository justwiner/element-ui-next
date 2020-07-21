import {defineComponent} from "vue"

const Button = defineComponent({
  name: "ElButton",
  setup () {
    return () => (
      <button>123</button>
    )
  }
})

export default Button