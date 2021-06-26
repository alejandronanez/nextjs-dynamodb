import useSWR from "swr";

const fetcher = (url) => fetch(url).then(res => res.json())

export default function Index() {
  const {data, error} = useSWR('/api/item?id=22f61264-5a07-4dae-ade5-b7a06e590a08', fetcher);

  if (error) {
    return <div>Failed to load</div>
  }

  if (!data) {
    return <div>Loading...</div>
  }

  return <code>{JSON.stringify(data, null, 2)}</code>
}
