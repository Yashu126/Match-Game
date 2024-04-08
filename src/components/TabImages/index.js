import './index.css'

const TabImages = props => {
  const {eachImg, onSelectedImg} = props
  const {thumbnailUrl, id} = eachImg
  const onMatchImg = () => {
    onSelectedImg(id)
  }
  return (
    <li>
      <button type="button" onClick={onMatchImg} className="img-btn">
        <img className="thumbnail-img" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default TabImages
