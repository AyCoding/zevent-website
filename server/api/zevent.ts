export default defineEventHandler(async () => {
  const response = await $fetch('https://zevent.fr/api/')
  const data = await response
  return data
})
