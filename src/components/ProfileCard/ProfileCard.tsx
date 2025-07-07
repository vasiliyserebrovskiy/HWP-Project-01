interface Props {
  avatar: string;
  name: string;
  description: string;
}
import "./ProfileCard.css";

export default function ProfileCard({ avatar, name, description }: Props) {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <img src={avatar} alt="User avatar" />
      <p>{description}</p>
    </div>
  );
}
