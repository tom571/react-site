import React from "react"
import { Link } from "gatsby"
import { Parallax, Background } from "react-parallax";
import Container from "../components/container"

const styles = {
  textAlign: "center"
};
const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};
const image1 =
  "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";

  const ListLink = props => (
    <li style={{ display: `inline`, justifyContent:`center`, alignItems:`center`, marginRight: `2rem`, margin:`40px`}}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )

export default ({children}) => (
  <div style={styles}>
    <Parallax bgImage={image1} strength={500} style={{minWidth:1200}}>
    <div style={{ margin: `auto`, width:`100%`, padding: `0 10rem`, background:`white`, position:`fixed`, boxShadow: `0px 1px 10px black`}}>
      <header style={{ marginBottom: `0.5rem`}}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline`}}>MyTestSite</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right`}}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
    </div>
      <div style={{ height: 500 }}>
      </div>
    </Parallax>
    {children}
    </div>
  )
