import { groq } from "next-sanity";
import { sanityClient } from "../../../../sanity";
import { Project } from "../../../../typing";
import { NextRequest, NextResponse } from "next/server";

const query = groq`
    *[_type == 'project' && type == 'opengl'] {
      ...,
      technologies[]->
    }
`;

type Data = {
  projects: Project[];
};

export async function GET(request: NextRequest) {
  const projects: Project[] = await sanityClient.fetch(query);

  return NextResponse.json<Data>({ projects });
}

export const dynamic = "force-dynamic";
