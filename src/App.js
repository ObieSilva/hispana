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
      sermonTitle
    }
  `);
    console.log(data);
  if (loading) return <p>Loading Website...</p>;
  if (error) return console.log('ERROR', error);

  return (
    <div className="App h-full">
      <Home />
      <div>
        {data.sermons.nodes.map((sermon) => (
          <div key={sermon.sermonTitle}>
            <h3>{sermon.sermonTitle}</h3>
            <p>{sermon.sermonDetail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
