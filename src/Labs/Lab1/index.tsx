export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h1>Labs</h1>
      <h2>Lab 1</h2>
      <h3>HTML Examples</h3>
      <div id="wd-h-tag">
        <h4>Heading Tags</h4>
        Text documents are often broken up into several sections and
        subsections. Each section is usually prefaced with a short title or
        heading that attempts to summarize the topic of the section it precedes.
        For instance this paragraph is preceded by the heading Heading Tags. The
        font of the section headings are usually larger and bolder than the
        plain text and their subsection headings. This document uses headings to
        introduce topics such as HTML Documents, HTML Tags, Heading Tags, etc.
        HTML heading tags can be used to format plain text so that it renders in
        a browser as large headings. There are 6 heading tags for different
        sizes: h1, h2, h3, h4, h5, and h6. Tag h1 is the largest heading and h6
        is the smallest heading.
      </div>

      {/* Next Excercise Under Here */}
      <div id="wd-p-tag">
        <h4>Paragraph Tag</h4>
        <p id="wd-p-1">
          This is the first paragraph. The paragraph tag is used to format
          vertical gaps between long pieces of text like this one. This is the
          second paragraph. Even though we added a deliberate gap between the
          paragraph above and this paragraph, by default browsers render them as
          one contiguous piece of text as shown here on the right. This is the
          third paragraph. Wrap each paragraph with the paragraph tag to tell
          browsers to render the gaps.
        </p>

        <p id="wd-p-2">
          This is the first paragraph. The paragraph tag is used to format
          vertical gaps between long pieces of text like this one.
        </p>

        <p id="wd-p-3">
          This is the second paragraph. Even though we added a deliberate gap
          between the paragraph above and this paragraph, by default browsers
          render them as one contiguous piece of text as shown here on the
          right.
        </p>

        <p id="wd-p-4">
          This is the third paragraph. Wrap each paragraph with the paragraph
          tag to tell browsers to render the gaps.
        </p>
      </div>

      <div id="wd-lists">
        <h4>List Tags</h4>
        <h5>Ordered List Tag</h5>
        How to make pancakes:
        <ol id="wd-pancakes">
          <li>Mix dry ingredients.</li>
          <li>Add wet ignredients.</li>
          <li>Stir to combine.</li>
          <li>Heat a skillet or griddle.</li>
          <li>Pour batter onto the skillet.</li>
          <li>Cook until bubbly on top.</li>
          <li>Flip and cook the other side.</li>
          <li>Serve and enjoy!</li>
        </ol>
        My favorite recipe:
        <ol wd-my-favorite-recipe>
          <li>Boil pasta for 5-7 minutes until soft.</li>
          <li>
            Simulatenously season shrimp and air fry or place on pan for 15
            minutes. (Make sure to flip it over occasionally){" "}
          </li>
          <li>Add Ragu sauce.</li>
          <li>Mix well</li>
          <li>Add cooked shrimp on top and mix once more</li>
          <li>Enjoy!</li>
        </ol>
        <h5>Unordered List Tag</h5>
        My favorite books (in no particular order)
        <ul id="wd-my-books">
          <li>Dune</li>
          <li>Lord of the Rings</li>
          <li>Ender's Game</li>
          <li>Red Mars</li>
          <li>The Forever War</li>
        </ul>
        Your favorite books (in no particular order)
        <ul id="wd-your-books">
          <li>Their Eyes Were Watching God</li>
          <li>The Scarlet Letter</li>
          <li>Circe</li>
          <li>The Alchemist</li>
        </ul>
      </div>

      <div id="wd-tables">
        <h4>Table Tag</h4>
        <table border={1} width="100%">
          <thead>
            <tr>
              <th>Quiz</th>
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Q1</td>
              <td>HTML</td>
              <td>2/3/21</td>
              <td>85</td>
            </tr>
            <tr>
              <td>Q2</td>
              <td>CSS</td>
              <td>2/10/21</td>
              <td>90</td>
            </tr>
            <tr>
              <td>Q3</td>
              <td>JavaScript</td>
              <td>2/17/21</td>
              <td>95</td>
            </tr>
            <tr>
              <td>Q4</td>
              <td>React</td>
              <td>2/24/21</td>
              <td>92</td>
            </tr>
            <tr>
              <td>Q5</td>
              <td>Express.js</td>
              <td>3/5/21</td>
              <td>89</td>
            </tr>
            <tr>
              <td>Q6</td>
              <td>MongoDB</td>
              <td>3/18/21</td>
              <td>94</td>
            </tr>
            <tr>
              <td>Q7</td>
              <td>Typescript</td>
              <td>3/25/21</td>
              <td>54</td>
            </tr>
            <tr>
              <td>Q8</td>
              <td>Lua</td>
              <td>4/1/21</td>
              <td>90</td>
            </tr>
            <tr>
              <td>Q9</td>
              <td>Kotlin</td>
              <td>4/15/21</td>
              <td>99</td>
            </tr>
            <tr>
              <td>Q10</td>
              <td>SwiftUI</td>
              <td>4/29/21</td>
              <td>98</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Average</td>
              <td>90</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div id="wd-images">
        <h4>Image tag</h4>
        Loading an image from the internet: <br />
        <img
          id="wd-starship"
          width="400px"
          src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
          alt="starship"
        />
        <br />
        Loading a local image: <br />
        <img
          src="src/assets/teslabot.jpeg"
          alt="teslabot"
          id="wd-teslabot"
          height="200px"
        />
      </div>

      <div id="wd-forms">
        <h4>Form Elements</h4>
        <form id="wd-text-fields">
          <h5>Text Fields</h5>
          <label htmlFor="wd-text-fields-username">Username:</label>
          <input placeholder="jdoe" id="wd-text-fields-username" /> <br />
          <label htmlFor="wd-text-fields-password">Password:</label>
          <input
            type="password"
            value="123@#$asd"
            id="wd-text-fields-password"
          />
          <br />
          <label htmlFor="wd-text-fields-first-name">First name:</label>
          <input type="text" title="John" id="wd-text-fields-first-name" />{" "}
          <br />
          <label htmlFor="wd-text-fields-last-name">Last name:</label>
          <input
            type="text"
            placeholder="Doe"
            value="Wonderland"
            title="The last name"
            id="wd-text-fields-last-name"
          />
          <h5>Text Boxes</h5>
          <label htmlFor="">Biography:</label> <br />
          <textarea
            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            title="Enter your biography"
            id="wd-text-area"
            cols={30}
            rows={10}
          ></textarea>
          <h5 id="wd-buttons">Buttons</h5>
          <button
            type="button"
            onClick={() => alert("Life is Good!")}
            id="wd-all-good"
          >
            Hello World!
          </button>
          <h5 id="wd-radio-buttons">Radio buttons</h5>
          <label>Favorite movie genre:</label> <br />
          <input
            type="radio"
            name="radio-genre"
            id="wd-radio-comedy"
            title="Movie Genre"
          />
          <label htmlFor="">Comedy</label> <br />
          <input
            type="radio"
            name="radio-genre"
            id="wd-radio-drama"
            title="Movie Genre"
          />
          <label htmlFor="">Drama</label> <br />
          <input
            type="radio"
            name="radio-genre"
            id="wd-radio-scifi"
            title="Movie Genre"
          />
          <label htmlFor="">Sci-Fi</label> <br />
          <input
            type="radio"
            name="radio-genre"
            id="wd-radio-fantasy"
            title="Movie Genre"
          />
          <label htmlFor="">Fantasy</label> <br />
          <br />
          <h5 id="wd-checkboxes">Checkboxes</h5>
          <label>Favorite movie genre:</label>
          <br />
          <input type="checkbox" name="check-genre" id="wd-chkbox-comedy" />
          <label htmlFor="wd-chkbox-comedy">Comedy</label>
          <br />
          <input type="checkbox" name="check-genre" id="wd-chkbox-drama" />
          <label htmlFor="wd-chkbox-drama">Drama</label>
          <br />
          <input type="checkbox" name="check-genre" id="wd-chkbox-scifi" />
          <label htmlFor="wd-chkbox-scifi">Science Fiction</label>
          <br />
          <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy" />
          <label htmlFor="wd-chkbox-fantasy">Fantasy</label> <br />
          <br />
          <h4 id="wd-dropdowns">Dropdowns</h4>
          <h5>Select one</h5>
          <label htmlFor="">Favorite movie genre:</label>
          <select title="Pick a movie genre">
            <option value="VAL1" selected>
              Value 1
            </option>
            <option value="VAL2">Value 2</option>
            <option value="VAL3" selected>
              Value 3
            </option>
          </select>
          <br />
          <h4 id="wd-fileUploads">Uploading Files</h4>
          <label htmlFor="wd-text-fields-email">File Upload: </label>
          <input
            title="Upload a file here"
            type="file"
            name="resume"
            id="wd-file-upload"
          />
          <h4>Other HTML Forms:</h4>
          <label htmlFor="wd-text-fields-email">Email: </label>{" "}
          <input
            type="email"
            placeholder="jdoe@somewhere.com"
            id="wd-text-fields-email"
            title="Enter your email here"
          />{" "}
          <br />
          <label htmlFor="wd-text-fields-salary-start">Starting Salary: </label>
          <input
            type="number"
            id="wd-text-fields-salary-start"
            placeholder="1000"
            value={10000}
          />{" "}
          <br />
          <label htmlFor="">Rating: </label>
          <input
            type="range"
            value="4"
            max="5"
            id="wd-text-fields-rating"
            placeholder="Doe"
          />{" "}
          <br />
          <label htmlFor="">Date of Birth: </label>
          <input
            type="date"
            placeholder="2000-01-01"
            id="wd-text-fields-dob"
            value="2007-07-20"
          />{" "}
          <br />
        </form>
      </div>

      <div id="wd-anchor">
        <h4>Anchor Tag</h4>
        <a href="https://www.aa.com/homePage.do">American Airlines</a>
        <p>
          Please{" "}
          <a
            href="https://www.lipsum.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            click here
          </a>{" "}
          to get dummy text.
        </p>
        <p>
          Here is Ibrahima's{" "}
          <a
            href="http://github.com/IbrahimaST"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </p>
      </div>
    </div>
  );
}
