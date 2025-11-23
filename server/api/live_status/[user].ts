export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  const url = `https://api.twitch.tv/helix/streams?user_login=${event.context.params?.user}`

  const token = (await $fetch("/api/twitch/token")) as { access_token?: string }

  const response = (await $fetch(url, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token.access_token}`,
      "Client-Id": config.twitchClientId,
    },
  })) as any
  return response.data
})
