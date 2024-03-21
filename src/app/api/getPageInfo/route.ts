import { groq } from "next-sanity";
import { sanityClient } from "../../../../sanity";
import { PageInfo } from "../../../../typing";
import { NextRequest, NextResponse } from "next/server";

const query = groq`
    *[_type == 'pageInfo']
`;

type Data = {
  pageInfo: PageInfo;
};

export async function GET(request: NextRequest) {
  const pageInfoObj: PageInfo[] = await sanityClient.fetch(query);
  const pageInfo = pageInfoObj[0];

  return NextResponse.json<Data>({ pageInfo });
}

export const dynamic = "force-dynamic";
