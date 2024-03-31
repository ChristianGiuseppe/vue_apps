import { ref } from 'vue';

export default function useAlert(startingVisibility = false) {
  const alertIsVisibile = ref(startingVisibility);

  function showAlert() {
    alertIsVisibile.value = true;
  }

  function hideAlert() {
    alertIsVisibile.value = false;
  }

  return {
    alertIsVisibile,
    showAlert,
    hideAlert,
  };
}
