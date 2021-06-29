import React from 'react'

export default class Avatar extends React.Component<{
  name: any
  picture: any
}> {
  render() {
    let { name, picture } = this.props
    return (
      <div className="flex items-center">
        <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} />
        <div className="text-xl font-bold">{name}</div>
      </div>
    )
  }
}
