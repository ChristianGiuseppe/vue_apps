export default {
  data() {
    return {
      alertIsVisibile: false,
    };
  },
  methods: {
    showAlert() {
      this.alertIsVisibile = true;
    },
    hideAlert() {
      this.alertIsVisibile = false;
    },
  },
};
