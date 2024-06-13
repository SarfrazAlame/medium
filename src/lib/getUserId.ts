import { getAuthOptions } from "@/auth/auth"

export const getUserId = async () => {
    const session = await getAuthOptions()
    const userId = session?.user.id

    if (!userId) {
        throw new Error("You must be signed in to use this feature")
    }

    return userId
}