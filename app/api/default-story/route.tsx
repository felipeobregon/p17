import { NextResponse } from "next/server";
import { readFile } from 'node:fs/promises';


export async function GET() {

    const contents = await readFile('data/hello.md', { encoding: 'utf8' });
    console.log(contents);


    return NextResponse.json({ contents })
}