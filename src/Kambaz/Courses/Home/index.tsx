import Modules from "../Modules";
import CourseStatus from "./Status";

export default function Home() {
  return (
    <div id="wd-home">
      <table>
        <tr>
          <td valign="top">
            <Modules />
          </td>
          <td>
            <CourseStatus />
          </td>
        </tr>
      </table>
    </div>
  );
}
