import React from "react";
import "./Subsection.css";

function Subsection() {
  return (
    <div className="subsection">
      <div className="section">
        <div className="section__1">
          <a
            href="https://canvas.saatchiart.com/art/art-news/2022-art-trends"
            target="_blank"
            rel="noreferrer"
          >
            <button>π₯ 24h Trending</button>
          </a>
        </div>

        <div className="section__2">
          <a
            href="https://www.artsy.net/shows"
            target="_blank"
            rel="noreferrer"
          >
            <button>Latest Shows</button>
          </a>
        </div>

        <div className="section__3">
          <a href="" target="_blank" rel="noreferrer">
            <button>Most Popular</button>
          </a>
        </div>

        <div className="section__4">
          <a
            href="https://www.madisonartshop.com/20-most-famous-paintings-of-all-time.html"
            target="_blank"
            rel="noreferrer"
          >
            <button>π In Genesis</button>
          </a>
        </div>

        <div className="section__5">
          <a
            href="https://rajasthanstudio.com/10-of-the-most-intriguing-temple-art-forms-of-india/"
            target="_blank"
            rel="noreferrer"
          >
            <button>πIn Temple</button>
          </a>
        </div>

        <div className="section__6">
          <a
            href="https://fineartamerica.com/art/paintings/void"
            target="_blank"
            rel="noreferrer"
          >
            <button>πͺIn Void</button>
          </a>
        </div>

        <div className="section__7">
          <a
            href="https://fineartamerica.com/art/cyclone"
            target="_blank"
            rel="noreferrer"
          >
            <button>π¦ #BAYC</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Subsection;
