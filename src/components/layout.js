import React from "react"
import { Link } from "gatsby"
import { Parallax, Background } from "react-parallax";
import Container from "../components/container"
import Navigation from "../components/navigation"

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
  <Navigation />
    <Parallax bgImage={image1} strength={500} style={{minWidth:1200}}>
      <div style={{ height: 500 }}>
      </div>
    </Parallax>
    {children}

    </div>
  )
