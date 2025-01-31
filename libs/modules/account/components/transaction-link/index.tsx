import { Link } from "expo-router";
import { Button } from "react-native";

export function TransactionLink() {
  return (
    <Link href="./account/transaction" asChild>
      <Button title="Go to Transaction" />
    </Link>
  );
}

export default TransactionLink;
