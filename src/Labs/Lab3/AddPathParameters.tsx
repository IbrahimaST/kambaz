import { useParams } from "react-router";
export default function AddPathParameters() {
  const { a, b } = useParams();
  return (
    <div className="wd-add">
      <h4>Add Path Parameters</h4>
      {a} + {b} = {parseInt(a as string) + parseInt(b as string)}
    </div>
  );
}
