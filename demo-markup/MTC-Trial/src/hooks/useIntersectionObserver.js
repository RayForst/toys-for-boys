import { ref, onMounted, onUnmounted } from 'vue'

export function useIntersectionObserver() {
  const isIntersecting = ref(false)
  const element = ref(null)

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isIntersecting.value = true
          observer.disconnect()
        }
      })
    },
    {
      threshold: 0.1
    }
  )

  onMounted(() => {
    if (element.value) {
      observer.observe(element.value)
    }
  })

  onUnmounted(() => {
    observer.disconnect()
  })

  return { element, isIntersecting }
}
