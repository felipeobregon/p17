import { NextResponse } from "next/server";
import { readFile } from 'node:fs/promises';


export async function GET() {

    const story = await readFile('data/hello.md', { encoding: 'utf8' });
    console.log(story);


    return NextResponse.json({ story })
}