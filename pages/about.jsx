import { Component } from "react";
import Link from "next/link";
import Header from "../components/header";

class AboutPage extends Component {
  static getInitialProps() {
    const isServer = typeof window === "undefined";
    return { isServer };
  }

  render() {
    return (
      <main>
        <Header />
        <section>
          <p>
          	Hello, world.
          </p>
          <p>
            Live reload is enabled
          </p>
          <Link href="/">
            <a>Go to Home</a>
          </Link>
        </section>
      </main>
    );
  }
}

export default AboutPage;