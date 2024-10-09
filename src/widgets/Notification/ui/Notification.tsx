// react
import { FC, ReactNode } from "react";
//shared
import { Button } from "@/shared/ui/Button";
//assets
import CloseIcon from "@/widgets/Notification/libs/assets/svg/CloseIcon.svg?react";
import UpdateIcon from "@/widgets/Notification/libs/assets/svg/UpdateIcon.svg?react";
import DangerIcon from "@/widgets/Notification/libs/assets/svg/DangerIcon.svg?react";
import WarningIcon from "@/widgets/Notification/libs/assets/svg/WarningIcon.svg?react";
import InfoIcon from "@/widgets/Notification/libs/assets/svg/InfoIcon.svg?react";
import SuccessIcon from "@/widgets/Notification/libs/assets/svg/SuccessIcon.svg?react";
import UploadIcon from "@/widgets/Notification/libs/assets/svg/UploadIcon.svg?react";
// styles
import styles from "./Notification.module.scss";
import clsx from "clsx";

interface NotificationProps {
  notificationTypeVariant:
    | "default"
    | "danger"
    | "warning"
    | "success"
    | "info"
    | "uploading"
    | "message"
    | "updates";
  notificationSizeVariant?: "smaller" | "bigger";
}

export const Notification: FC<NotificationProps> = ({
  notificationSizeVariant = "smaller",
  notificationTypeVariant = "default",
}) => {
  const getNotificationType = () => {
    switch (notificationTypeVariant) {
      case "default": {
        return;
      }
      case "danger": {
        return (
          <div className={styles.icon}>
            <DangerIcon />
          </div>
        );
      }
      case "info": {
        return (
          <div className={styles.icon}>
            <InfoIcon />
          </div>
        );
      }
      case "success": {
        return (
          <div className={styles.icon}>
            <SuccessIcon />
          </div>
        );
      }
      case "updates": {
        return (
          <div className={styles.uploadAndUpdateWrapper}>
            <div className={styles.icon}>
              <UpdateIcon />
            </div>
          </div>
        );
      }
      case "uploading": {
        return (
          <div className={styles.uploadAndUpdateWrapper}>
            <div className={styles.icon}>
              <UpdateIcon />
            </div>
          </div>
        );
      }
      case "warning": {
        return (
          <div className={styles.icon}>
            <WarningIcon />
          </div>
        );
      }
    }
  };

  return (
    <div
      className={clsx(styles.Notification, {
        [styles.notificationSmaller]: notificationSizeVariant === "smaller",
        [styles.notificationBigger]: notificationSizeVariant === "bigger",
      })}
    >
      <div className={styles.topIcons}>
        <div className={styles.wrapperNotificationIcon}>
          <div className={styles.notificationIcon}>{getNotificationType()}</div>
        </div>
        <div className={styles.cancelIcon}>
          <CloseIcon />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.mainText}>
          <div className={styles.title}>We’ve just released a new update!</div>
          <div className={styles.text}>
            Includes the all new dashboard view. Pages and exports will now load
            faster.{" "}
          </div>
        </div>
        <div className={styles.btns}>
          <Button
            onClick={() => {}}
            buttonStyleVariant="Primary"
            buttonVariant="Text"
            buttonSizeVariant="extrasmall"
          >
            Later
          </Button>
          <Button
            onClick={() => {}}
            buttonStyleVariant="Accent"
            buttonVariant="Text"
            buttonSizeVariant="extrasmall"
          >
            Install now
          </Button>
        </div>
      </div>
    </div>
  );
};
