import { Button, Text } from "core-ui";
import { Link } from "expo-router";

export function TransactionLink() {
  return (
    <Link href="./account/transaction" asChild>
      <Button variant="default">
        <Text>Lien vers la liste des transactions</Text>
      </Button>
    </Link>
  );
}

export default TransactionLink;
