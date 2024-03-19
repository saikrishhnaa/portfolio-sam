import { groq } from "next-sanity";
import { sanityClient } from "../../../../sanity";
import { Experience } from "../../../../typing";
import { NextRequest, NextResponse } from "next/server";

const query = groq`
    *[_type == 'experience'] | order(dateStarted desc)  {
      ...,
      technologies[]->
    }
`;

type Data = {
  experiences: Experience[];
};

export async function GET(request: NextRequest) {
  const experiences: Experience[] = await sanityClient.fetch(query);

  return NextResponse.json<Data>({ experiences });
}

export const dynamic = "force-dynamic";
