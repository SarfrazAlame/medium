import prisma from "./prisma"

export const fetchAllPost = async () => {
    try {
        const PostData = await prisma?.post.findMany({
            include: {
                claps: {
                    include: {
                        user: {
                            select: {
                                name: true,
                            }
                        }
                    }
                },
                response: {
                    include: {
                        user: true
                    },
                    orderBy: {
                        createdAt: 'desc'
                    }
                },
                savePost: {
                    include: {
                        user: true
                    }
                },
                user: {
                    select: {
                        id: true,
                        name: true,
                        image: true,
                        email: true
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

export const FetchClapsByPostId = async (postId: string) => {
    try {
        const claps = await prisma.claps.findMany({
            where: {
                postId
            }
        })
        return claps
    } catch (error) {
        console.log(error)
        return {
            message: "failed fetch likes"
        }
    }
}

export const fetchPostByPostId = async (postId: string) => {
    try {
        const post = await prisma.post.findUnique({
            where: {
                id: postId
            },
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
                user: true
            }
        })

        return { post }
    } catch (error) {
        console.log(error)
        return {
            message: "failed to fetch post"
        }
    }
}

export const fetchResponseByPostId = async (postId: string) => {
    try {
        const response = await prisma.response.findMany({
            where: {
                postId
            },
            orderBy: {
                createdAt: 'asc'
            },
            include: {
                user: true
            }
        })
        return response
    } catch (error) {
        console.log(error)
        console.log(error)
    }
}