import './index.css'

const TabItems = props => {
  const {activeTab, eachTab, selectedTab} = props
  const {displayText, tabId} = eachTab
  const onTab = () => {
    selectedTab(tabId)
  }
  const ubtn = activeTab === tabId ? 'tab-btn' : 'nrl-btn'
  return (
    <li className="selceted-tab">
      <button onClick={onTab} type="button" className={ubtn}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItems
