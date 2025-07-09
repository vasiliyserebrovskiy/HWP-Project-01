import { InterfaceComponents, Gender } from "./constants";
import type { ResObj } from "./constants";

interface Props {
  data: ResObj | null;
}

export default function ResponseSection({ data }: Props) {
  let gender: string;
  if (data && data.gender && data.gender in Gender) {
    gender = Gender[data?.gender as keyof typeof Gender];
  } else {
    gender = "неизвестный пол";
  }

  return (
    <>
      <p>
        {InterfaceComponents.name} {data?.name}
      </p>
      <p>
        {InterfaceComponents.gender} {gender}
      </p>
      <p>
        {InterfaceComponents.country} {data?.country}
      </p>
      <p>
        {InterfaceComponents.probability} {data?.probability}
      </p>
      <p>
        {InterfaceComponents.remaining_credits} {data?.remaining_credits}
      </p>
    </>
  );
}
