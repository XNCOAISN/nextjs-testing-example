import { User } from "@/lib/kysely";

import * as styles from "./UserProfile.css";

export type UserProfileProps = {
  user: Pick<User, "name" | "description">;
};

export const UserProfile = ({ user }: UserProfileProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.name}>{user.name}</div>
      <div className={styles.description}>{user.description}</div>
    </div>
  );
};
