import React from 'react'

class PackagePage extends React.Component{


render(){
  console.log("PACKAGE PAGE")


const filteredUserPackages = this.props.packages.filter(pack => pack.id === this.props.currentUser.id)

  return (
    <div>
      <ul>
      {filteredUserPackages.map(pck => {
        return <div><li>{pck.name}</li><button> Add To Package </button></div>
        })}
      </ul>
    </div>
    )
  }
}

export default PackagePage;
