import { defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import A from "../../../dist/element-ui-next"

export default defineComponent({
  name: "App",
  setup() {
    // onMounted (() => {
    //   debugger
    //   console.log(ElementUINext)
    // })
    const store = useStore()
    return () => (
      <>
        <h1>Home</h1>
        <h1>{store.state.title}</h1>
        {/* <ElButton></ElButton> */}
      </>
    );
  }
});