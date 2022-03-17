import React from 'react'

const SidebarCategory = (props) => {
  return (
    <div className="category">
        <h3>{props.category}</h3>
        <span className="line"></span>
    </div>
  )
}

SidebarCategory.defaultProps = {
    category: "Category Title",
}

export default SidebarCategory