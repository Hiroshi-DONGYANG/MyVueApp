/*html*/
import { ref } from 'vue';
import { defineComponent } from "vue";

  var likeComponent = defineComponent({
    props: {
      message: {
        type: String,
        default: 'Like'
      }
    },
    data(){
      return {
        count: 0
      }
    },
    template: '<button @click="countUp">{{ message }} {{ count }}</button>',
    methods: {
      countUp: function(){
        this.count++;
        this.$emit("increment");
      }
    }
  });

  export default {
    components: {
      'like-component': likeComponent
    },
    data() {
      return {
        total: 0
      }
    },
    methods: {
      incrementTotal: function(){
        this.total++;
      }
    }
  };
