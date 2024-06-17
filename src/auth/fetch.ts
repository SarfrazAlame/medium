import { unstable_noStore as noStore, revalidatePath } from "next/cache";
import { getUserId } from "./getUserId"
import prisma from "./prisma"
import { tree } from "next/dist/build/templates/app-page";

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
            },
            orderBy: {
                createdAt: "desc"
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
                createdAt: 'desc'
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

export const fetchFollower = async (IdOfUserWhoPost: string) => {
    noStore()
    const userId = await getUserId()
    try {
        const response = await prisma.follows.findUnique({
            where: {
                followerId_followingId: {
                    followerId: userId,
                    followingId: IdOfUserWhoPost
                }
            }
        })
        revalidatePath('/dashboard')
        return response
    } catch (error) {
        console.log(error)
        return error
    }
}

export const fetchSaved = async (postId: string) => {
    const userId = await getUserId()
    try {
        const response = await prisma.savedPost.findUnique({
            where: {
                postId_userId: {
                    postId,
                    userId
                }
            }
        })

        revalidatePath('/dashboard')
        return response

    } catch (error) {
        console.log(error)
        return error
    }
}

export const fetchAllUser = async () => {
    try {
        const user = await prisma.user.findMany({})
        revalidatePath('/dashboard')
        return user
    } catch (error) {
        console.log(error)
        return
    }
}

export const fetchUserByUserId = async (id: string) => {
    try {
        const ProfileUser = await prisma.user.findUnique({
            where: {
                id
            },
            include: {
                response: {
                    include: {
                        user: true
                    }
                },
                saved: {
                    include: {
                        user: true
                    }
                },
                posts: {
                    select: {
                        title: true,
                        story: true
                    }
                }
            }
        })
        return ProfileUser
    } catch (error) {
        console.log(error)
        return error
    }
}

export const fetchFollowingById = async (id: string) => {
    try {
        const followings = await prisma.follows.findMany({
            where: {
                followerId: id
            },
            include: {
                following: {
                    select: {
                        name: true,
                        email: true,
                        image: true
                    }
                }
            }
        })
        return followings
    } catch (error) {
        console.log(error)
        return error
    }
}

export const fetchFollowingGetLength = async (id: string) => {
    try {
        const followings = await prisma.follows.findMany({
            where: {
                followerId: id
            },
            include: {
                following: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        image: true
                    }
                }
            }
        })
        return followings.length
    } catch (error) {
        console.log(error)
        return error
    }
}

export const fetchFollowerById = async (id: string) => {
    try {
        const followings = await prisma.follows.findMany({
            where: {
                followingId: id
            },
            include: {
                follower: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        image: true
                    }
                }
            }
        })
        return followings.length
    } catch (error) {
        console.log(error)
        return error
    }
}


export const fetchFollowingUser = async(id:string)=>{
    try {
        const users = await prisma.follows.findMany({
            where:{
                followerId:id
            },
            include:{
                following:{
                    include:{
                        claps:{
                            include:{
                                user:true
                            }
                        },
                        response:{
                            include:{
                                user:true
                            }
                        },
                        posts:{
                            include:{
                                claps:{
                                    include:{
                                        user:true
                                    },
                                },
                                response:{
                                    include:{
                                        user:true
                                    }
                                },
                                savePost:{
                                    include:{
                                        user:true
                                    }
                                },
                                user:true
                            }
                        },
                        saved:true
                    },
                }
            }
        })
        return users
    } catch (error) {
        console.log(error)
        return 
    }
}