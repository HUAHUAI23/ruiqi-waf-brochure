export default function PageNumber({ pageNumber }: { pageNumber: number }) {
  return <div className="page-number print:block hidden">{pageNumber}</div>
}
