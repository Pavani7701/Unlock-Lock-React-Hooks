// Write your code here
import {useState} from 'react'

import {
  LockAndUnlockContainer,
  LockImage,
  LockText,
  LockButton,
} from './styledComponents'

const Unlock = () => {
  const [isLocked, setLock] = useState(true)

  const onClickLockButton = () => {
    setLock(prevState => !prevState)
  }

  const imageUrl = isLocked
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

  const altText = isLocked ? 'lock' : 'unlock'
  const buttonText = isLocked ? 'Unlock' : 'Lock'
  const displayedText = isLocked ? 'Locked' : 'Unlocked'

  return (
    <LockAndUnlockContainer>
      <LockImage src={imageUrl} alt={altText} />
      <LockText>Your Device is {displayedText}</LockText>
      <LockButton onClick={onClickLockButton}>{buttonText}</LockButton>
    </LockAndUnlockContainer>
  )
}

export default Unlock
