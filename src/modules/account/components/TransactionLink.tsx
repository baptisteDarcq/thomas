import { Link } from "expo-router";
import { Button } from "src/core/ui/components/Button";
import { Text } from "src/core/ui/components/Text";

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
