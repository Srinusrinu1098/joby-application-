import {
  ProfileCon,
  ProfileImg,
  ProfileH1,
  ProfileBio,
  ProfileHr,
} from './StyledComponents'

const Profile = props => {
  const {value} = props
  const {name, image, bio} = value

  return (
    <>
      <ProfileCon>
        <ProfileImg src={image} alt={name} />
        <ProfileH1>{name}</ProfileH1>
        <ProfileBio>{bio}</ProfileBio>
      </ProfileCon>
      <ProfileHr />
    </>
  )
}
export default Profile
