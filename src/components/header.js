import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
    <img
      alt="Gatsby logo"
      height={20}
      style={{ margin: 0 }}
      src= "https://img.pagecloud.com/f5V6u4xenb7PoNAxtjG-HBF2U_0=/161x0/filters:no_upscale()/block--tackle/images/image-ID-70e29287-8a27-4abc-b364-10ca99f56d70.png" 
    />
  </header>
)

export default Header
