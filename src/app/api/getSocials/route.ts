import { groq } from "next-sanity";
import { sanityClient } from "../../../../sanity";
import { Social } from "../../../../typing";
import { NextRequest, NextResponse } from "next/server";

const query = groq`
    *[_type == 'social'] | order(_createdAt asc)
`;

type Data = {
  socials: Social[];
};

export async function GET(request: NextRequest) {
  const socials: Social[] = await sanityClient.fetch(query);

  return NextResponse.json<Data>({ socials });
}

export const dynamic = "force-dynamic";
