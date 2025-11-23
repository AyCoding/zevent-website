export default defineEventHandler(async () => {
  const response = await $fetch('https://clips.zevent.fr/api/clips')
  const data = await response
  return data
})
