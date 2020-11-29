import React from 'react';

const Feed = ({ app, index }) => (
  <div>
        <tr>
<th scope="row">{index}</th>
          <td>
            <center>
              <a id="up_22925087"
                        href={app.name_link}>
                <div class="votearrow" title="upvote"></div>
              </a></center>
          </td>
          <td>
<a href={app.name_link} class="storylink">{app.name}</a><span class="sitebit comhead"> (<a
                        href={app.sub_link}>
              <span
                          class="sitestr">{app.sub_desc}</span></a>)</span>
          </td>
          <td>
            <a href={app.author_link} class="storylink">{app.author}</a>
          </td>
          <td>
            <a href="#" class="storylink">{app.time}</a>
          </td>
          <td>
            <a href="#" class="storylink">[hide]</a>
          </td>
        </tr>
  </div>
)

export default Feed;
