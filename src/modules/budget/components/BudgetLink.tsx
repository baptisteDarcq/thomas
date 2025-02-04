import { Button } from "src/core/ui/components/Button";
import { Text } from "src/core/ui/components/Text";
import { Link } from "expo-router";
import { ViewProps } from "react-native";

export function BudgetLink({ className }: Pick<ViewProps, "className">) {
  return (
    <Link href="./budget" asChild>
      <Button variant="outline" className={className}>
        <Text>Lien vers la tab budget</Text>
      </Button>
    </Link>
  );
}

export default BudgetLink;
