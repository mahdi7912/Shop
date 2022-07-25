import { ListItemIcon } from '@material-ui/core'

const RightbarIcons = (iconName) => {
  const icon = `</ ${iconName} >`
  return (
    <>
      <ListItemIcon>{icon}</ListItemIcon>
    </>
  )
}
export default RightbarIcons
