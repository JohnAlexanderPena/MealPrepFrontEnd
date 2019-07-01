import React from 'react'

class PackagePage extends React.Component{


render(){

const filteredUserPackages = this.props.packages.filter(pack => pack.id === this.props.currentUser.id)

  return (
    <div>
      {filteredUserPackages.map(pck => {
        return <li> {pck.name}</li>
        })}
    </div>
    )
  }
}

export default PackagePage;
