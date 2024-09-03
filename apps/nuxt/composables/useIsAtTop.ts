import { ref, onMounted, onBeforeUnmount } from "vue";

export function useIsAtTop() {
  const isAtTop = ref(true);

  const handleScroll = () => {
    isAtTop.value = window.scrollY === 0;
  };

  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
    // Initialize the value in case the page is not at the top on load
    handleScroll();
  });

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  return isAtTop;
}
