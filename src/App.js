import { client } from "./client";
import { gql } from "@apollo/client";

export default function App() {
  return (
    <div className="App">
      <div>App</div>
    </div>
  );
}

client
  .query({
    query: gql`
      query NewQuery {
        users {
          nodes {
            firstName
            lastName
          }
        }
      }
    `,
  })
  .then((result) => console.log(result));
