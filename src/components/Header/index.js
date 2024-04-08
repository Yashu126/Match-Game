import './index.css'

const Header = props => {
  const {timer, score} = props
  return (
    <nav className="nav-bar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="img-logo"
      />
      <ul className="score-time-con">
        <li>
          <p>
            Score: <span className="span">{score}</span>
          </p>
        </li>
        <li className="timmer-img">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            width="20px"
          />
          <p className="span">{timer} sec</p>
        </li>
      </ul>
    </nav>
  )
}
export default Header
