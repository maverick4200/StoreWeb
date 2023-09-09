//API for ccreating a store. Please rename this file!!
import prismadb from "@/hooks/prismadb";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";



export async function POST (
    req: Request,
) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const { name } = body;
    //checks for name.
    if (!name) {
        return new NextResponse("Name is required", {  status: 400  })
    }
    
    //Checks if theres a user account. if there isn't return an error
    if  (!userId) {
        return new NextResponse("Unauthorized", {  status: 401 });
    }

    const store = await prismadb.store.create({
        data: {
            name,
            userId
        }
    });

    return NextResponse.json(store);

  } catch (error) {
    console.log('[STORES_POST]', error);
    return new NextResponse("Internal error", {  status: 500 });
  }
}