// react
// import { Input } from "@/shared/ui/Input";
import { ChangeEvent, FC, useState } from "react";

//style
import styles from "../HomePage/HomePage.module.scss";
// import { Button } from "@/shared/ui/Button";
import clsx from "clsx";
// import { Avatar } from "@/shared/ui/Avatar";
// import { TagInput } from "@/widgets/TagInput/ui/TagInput/TagInput";
// import { ITag } from "@/widgets/TagInput/model/types/types";
// import { Badge } from "@/shared/ui/Badge/Badge";
// import { SocialButton } from "@/shared/ui/SocialButton/SocialButton";
import { Badge } from "@/shared/ui/Badge/Badge";
import { Notification } from "@/widgets/Notification/ui/Notification";
// import { Input } from "@/shared/ui/Input";
interface HomePageProps {}

export const HomePage: FC<HomePageProps> = ({}) => {
  // const [text, setText] = useState("qwudhqdqduqhdu");

  // const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setText(e.target.value);
  // };

  // const [tags, setTags] = useState<ITag[]>([]);

  return (
    <div className={clsx(styles.HomePage, styles.dark)}>
      <Notification
        notificationTypeVariant={"info"}
        notificationSizeVariant="smaller"
      />
      <Notification
        notificationTypeVariant={"warning"}
        notificationSizeVariant="bigger"
      />
      {/* <SocialButton
        companyIcon="apple"
        styleVariant="white"
        isIconMode={false}
        onClick={() => {}}
      /> */}

      {/* {/* <Badge
        heightBadgeVariants="large"
        mainTypeBadgeVariant="Soft"
        label="Label"
        contextualBadgeVariants="danger"
        additionalTypeBadgeVariant="loading"
      /> */}
      {/* <Badge
        heightBadgeVariants="large"
        mainTypeBadgeVariant="Soft"
        label="Label"
        contextualBadgeVariants="warning"
        countryCode="ua"
      />
      <Badge
        heightBadgeVariants="large"
        mainTypeBadgeVariant="Soft"
        label="Label"
        contextualBadgeVariants="warning"
        countryCode="ua"
      /> */}
    </div>
  );
};
