import { useState } from "react"

export default function PlayerName({ initialName }) {
  const [playerName, setPlayerName] = useState(initialName)
  const [playerEdit, setPlayerEdit] = useState(false)
  function handleEditClick() {
    setPlayerEdit(playerEdit => !playerEdit)
  }
  function handleInputChange(event) {
    setPlayerName(event.target.value)
  }

  return (
    <div>
      {playerEdit ? <input value={playerName} onChange={handleInputChange} /> : playerName}
      <button onClick={handleEditClick}>{playerEdit ? 'Save' : 'Edit'}</button>
    </div>
  )
}
