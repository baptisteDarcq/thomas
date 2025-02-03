import { Button, Text } from "core-ui";
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
