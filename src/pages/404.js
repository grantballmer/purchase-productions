import React from "react";
import "./scss/404.scss";
import Layout from "../components/Layout";

class NotFoundPage extends React.Component {
  handleClick = () => {
    window.history.back();
  };

  render() {
    return (
      <Layout>
        <div className="page-not-found">
          <div className="page-not-found__hero" />
          <div className="page-not-found__text">
            <h1>404</h1>
            <h2>Page not found...</h2>
            {/* <p>You just hit a route that doesn&#39;t exist...</p> */}
            <button className="btn btn-link" onClick={this.handleClick}>
              Previous Page
            </button>
          </div>
        </div>
      </Layout>
    );
  }
}

export default NotFoundPage;
