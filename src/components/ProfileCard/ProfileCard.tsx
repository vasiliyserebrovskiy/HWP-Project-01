interface Props {
  avatar: string;
  name: string;
  description: string;
}
import style from "./ProfileCard.module.css";

export default function ProfileCard({ avatar, name, description }: Props) {
  return (
    <section className={style.profileCardWrapper}>
      <div className={style.profileCard}>
        <h2>{name}</h2>
        <img src={avatar} alt="User avatar" />
        <p>{description}</p>
      </div>
    </section>
  );
}
