export interface post {
    id: number,
    title: string,
    body: string,
    tags: string[],
    reactions: { likes: number, dislikes: number },
    views: number,
    userId: number
}

export interface postResponse {
    posts: post[],
    total: number
}