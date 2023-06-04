// Write your code here.

import './index.css'

const Carditem = props => {
  const {details} = props
  const {title, description, imgUrl, className} = details

  return (
    <li className={`container ${className}`}>
      <div className="card-container">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <div className="image-container">
          <img src={imgUrl} alt={title} className="image" />
        </div>
      </div>
    </li>
  )
}
export default Carditem
