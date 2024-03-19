import { groq } from "next-sanity";
import { sanityClient } from "../../../../sanity";
import { Skill } from "../../../../typing";
import { NextRequest, NextResponse } from "next/server";

const query = groq`
    *[_type == 'skill']
`;

type Data = {
  skills: Skill[];
};

export async function GET(request: NextRequest) {
  const skills: Skill[] = await sanityClient.fetch(query);

  return NextResponse.json<Data>({ skills });
}

export const dynamic = "force-dynamic";
