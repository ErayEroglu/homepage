import { ILink } from "@/types";
import { Metadata } from "next";
import Container from "@/components/container";
import MetricCard from "@/components/metric-card";
import BookmarkCard from "@/components/bookmark-card";
import { ReportView } from "@/components/view";
import { fetchBookmark } from "@/app/bookmarks/action";
import BookmarkFooter from "@/components/bookmark-footer";

export const metadata: Metadata = {
  title: "Bookmarks",
  description:
    "İnternette gezinirken beğendiğim ve beni takip edenlerin de beğeneceğini düşündüğüm, belli bir kategorisi olmayan karışık şeyler.",
};

export const revalidate = 3600; // 60*60*2

export default async function Bookmark() {
  const { count, data, year } = await fetchBookmark(new Date());

  return (
    <>
      <Container>
        <h1 className="font-display text-2xl">{metadata.description}</h1>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-10 sm:gap-6">
          <MetricCard data={count}>Link</MetricCard>
          <MetricCard data={<ReportView incr slug={`/bookmarks/${year}`} />}>
            Görüntülenme
          </MetricCard>
        </div>
      </Container>

      <Container className="mt-8 sm:mt-10">
        <div className="grid gap-6">
          {data.slice(0, 8).map((item: ILink) => {
            return <BookmarkCard key={item._id} bookmark={item} />;
          })}
        </div>
      </Container>

      <Container className="mt-8 sm:mt-10">
        <BookmarkFooter />
      </Container>
    </>
  );
}
