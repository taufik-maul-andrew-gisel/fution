import getRealTimeInflation from "@/utils/inflationData"

export function GET() {
    getRealTimeInflation();
    return Response.json({ status: 200 });
}