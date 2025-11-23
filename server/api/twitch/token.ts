// Cache pour stocker le token
let tokenCache: {
  access_token: string
  expires_at: number // timestamp d'expiration
} | null = null

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  // Vérifier si le token en cache est encore valide
  if (tokenCache && Date.now() < tokenCache.expires_at) {
    return { access_token: tokenCache.access_token }
  }

  try {
    const response = (await $fetch("https://id.twitch.tv/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: config.twitchClientId,
        client_secret: config.twitchClientSecret,
        grant_type: "client_credentials",
      }).toString(),
    })) as {
      access_token: string
      expires_in: number // durée de vie en secondes
    }

    // Mettre à jour le cache avec le nouveau token
    // On soustrait 5 minutes (300 secondes) pour éviter les erreurs de timing
    tokenCache = {
      access_token: response.access_token,
      expires_at: Date.now() + (response.expires_in - 300) * 1000,
    }

    return { access_token: response.access_token }
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to get Twitch token",
    })
  }
})
