import prisma from "./prisma"

export const fetchAllPost = async () => {
    try {
        const PostData = await prisma?.post.findMany({
            include: {
                claps: {
                    include: {
                        user: true
                    }
                },
                response: {
                    include: {
                        user: true
                    }
                },
                savePost: {
                    include: {
                        user: true
                    }
                },
                user: {
                    select:{
                        name:true,
                        image:true,
                        email:true
                    }
                }
            }
        }
        )
        return PostData
    } catch (error) {
        console.log(error)
        return {
            message: "failed to post"
        }
    }
}