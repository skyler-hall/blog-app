import prisma from "@/utils/connect"
import { NextResponse } from "nxt/server"

export cconst Get = async () => {
    try{
        const posts = await prisma.posts.findMany();
        return new NextResponse(JSON.stringify(posts, {status: 200}))
    } catch (err) {
        console.log
        return new NextResponse(JSON.stringify({message: "Something Went Wrong"}, {status: 500}))
    }
}