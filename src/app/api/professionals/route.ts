import { NextResponse } from "next/server";

import { getProfessionals } from "@/services/professionals";

export async function GET() {
  const professionals = await getProfessionals();

  return NextResponse.json({
    data: professionals,
  });
}
