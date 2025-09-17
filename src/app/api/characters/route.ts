import { NextResponse } from "next/server";
import { getAuthParams } from "@/lib/marvel";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name");

  const url = `https://gateway.marvel.com/v1/public/characters?${getAuthParams()}${
    name ? `&nameStartsWith=${name}` : ""
  }`;

  const res = await fetch(url);
  const data = await res.json();

  return NextResponse.json(data);
}
