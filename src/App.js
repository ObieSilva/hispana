import { useQuery, gql } from "@apollo/client";
import Home from "./pages/Home";

export default function App() {
  const { loading, error, data } = useQuery(gql`
    query NewQuery {
      sermons(first: 10) {
        nodes {
          ...SermonFields
        }
      }
    }

    fragment SermonFields on Sermon {
      title
      speakerName
      date
    }
  `);

  if (loading) return <p>Loading Website...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="App h-full">
      <Home />
      <div>
        {data.sermons.nodes.map((sermon) => (
          <div key={sermon.title}>
            <h3>{sermon.title}</h3>
            <p>{sermon.speakerName}</p>
            <p>{sermon.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
