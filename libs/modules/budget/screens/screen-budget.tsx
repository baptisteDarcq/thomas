import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  ActivityIndicator,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
  AspectRatio,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Bell,
  Button,
  Checkbox,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  IconClassContext,
  Input,
  Label,
  Progress,
  RadioGroup,
  RadioGroupItem,
  Refresh,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Slider,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Text,
} from "core-ui";
import * as React from "react";
import { View } from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function ScreenBudget() {
  const [tab, setTab] = React.useState("account");
  const [checked, setChecked] = React.useState(false);
  const [value, setValue] = React.useState("Comfortable");
  const [progress, setProgress] = React.useState(13);

  function onPress() {
    setProgress(Math.floor(Math.random() * 100));
  }
  const insets = useSafeAreaInsets();
  const contentInsets = {
    top: insets.top,
    bottom: insets.bottom + 20,
    left: 12,
    right: 12,
  };
  return (
    <GestureHandlerRootView className="flex-1">
      <ScrollView>
        <View className="px-8 py-4 justify-center align-middle flex-1 gap-y-5">
          <Text variant="title">Buttons</Text>
          <View className="flex flex-row flex-wrap gap-x-3 gap-y-3">
            <Button variant="default" className="grow">
              <Text>Default</Text>
              <Bell />
            </Button>
            <Button variant="outline" className="grow">
              <Text>Outline</Text>
            </Button>
            <Button variant="default" size="icon">
              <Bell />
            </Button>

            <Button variant="outline" size="icon">
              <Bell />
            </Button>
          </View>
          <Separator orientation="horizontal" />
          <Text variant="title">Form</Text>
          <View className="flex flex-row items-center gap-x-3 gap-y-3">
            <Switch onCheckedChange={setChecked} checked={checked} />
            <Checkbox
              size="lg"
              checked={checked}
              onCheckedChange={setChecked}
            />
            <Slider className="w-40" value={80} />
          </View>
          <RadioGroup
            value={value}
            onValueChange={setValue}
            className="flex-row gap-5"
          >
            <View className="flex-row gap-2 items-center">
              <RadioGroupItem
                aria-labelledby="label-for-Default"
                value="Default"
              />
              <Label
                nativeID="label-for-Default"
                onPress={() => setValue("Default")}
              >
                Default
              </Label>
            </View>
            <View className="flex-row gap-2 items-center">
              <RadioGroupItem
                aria-labelledby="label-for-Comfortable"
                value="Comfortable"
              />
              <Label
                nativeID="label-for-Comfortable"
                onPress={() => setValue("Comfortable")}
              >
                Comfortable
              </Label>
            </View>
          </RadioGroup>
          <Input placeholder="test" textContentType="URL" />
          <Select defaultValue={{ value: "apple", label: "Apple" }}>
            <SelectTrigger>
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent
              insets={contentInsets}
              margin="px-8"
              className="w-full"
              portalHost="select"
            >
              <SelectGroup>
                <SelectItem label="Apple" value="apple">
                  Apple
                </SelectItem>
                <SelectItem label="Banana" value="banana">
                  Banana
                </SelectItem>
                <SelectItem label="Blueberry" value="blueberry">
                  Blueberry
                </SelectItem>
                <SelectItem label="Grapes" value="grapes">
                  Grapes
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Separator orientation="horizontal" className="mt-6" />
          <Text variant="title">Progress</Text>
          <View className="flex-row gap-8 items-center">
            <Progress value={progress} className="w-60" />
            <Button size="icon" onPress={onPress}>
              <Refresh />
            </Button>
          </View>
          <Separator orientation="horizontal" className="mt-6" />
          <Text variant="title">Dialog</Text>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="default">
                <Text>Show Alert</Text>
              </Button>
            </AlertDialogTrigger>

            <AlertDialogContent portalHost="select">
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>

              <AlertDialogCancel>
                <Text>Cancel</Text>
              </AlertDialogCancel>
              <AlertDialogAction>
                <Text>Continue</Text>
              </AlertDialogAction>
            </AlertDialogContent>
          </AlertDialog>
          <Separator orientation="horizontal" className="mt-6" />
          <Text variant="title">Icon</Text>
          <View className="flex-row gap-8 items-center justify-center">
            <ActivityIndicator />
            <IconClassContext.Provider value="text-foreground dark:text-foreground-dark">
              <Refresh />
              <Bell />
              <ChevronDown />
              <ChevronUp />
              <ChevronRight />
            </IconClassContext.Provider>
          </View>
          <Separator orientation="horizontal" className="mt-6" />
          <Text variant="title">Common</Text>
          <View className="flex-1 justify-center">
            <Tabs value={tab} onValueChange={setTab} className="gap-3">
              <TabsList className="flex-row w-full">
                <TabsTrigger value="account" className="flex-1">
                  <Text>Tab 1</Text>
                </TabsTrigger>
                <Separator orientation="vertical" />
                <TabsTrigger value="password" className="flex-1">
                  <Text>Tab 2</Text>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                <Text className="text-xs">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Text>
              </TabsContent>
              <TabsContent value="password">
                <Text className="text-xs">
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </Text>
              </TabsContent>
            </Tabs>
          </View>
          <AspectRatio ratio={16 / 9}>
            <View className="bg-primary dark:bg-primary-dark h-full w-full rounded-lg justify-center items-center">
              <Text
                variant="title"
                className="text-foreground dark:text-foreground-dark"
              >
                16:9
              </Text>
            </View>
          </AspectRatio>
          <Accordion
            type="multiple"
            collapsible
            defaultValue={[]}
            className="w-full max-w-md"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <Text>Is it accessible?</Text>
              </AccordionTrigger>
              <AccordionContent>
                <Text>Yes. It adheres to the WAI-ARIA design pattern.</Text>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <Text>What are universal components?</Text>
              </AccordionTrigger>
              <AccordionContent>
                <Text>
                  In the world of React Native, universal components are
                  components that work on both web and native platforms.
                </Text>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Avatar alt="Zach Nugent's Avatar">
            <AvatarImage
              source={{
                uri: "https://cd.prod.website-files.com/6391aa732af2fc19838c4891/63ac1c941a53498e513a5260_Baptiste%20Darcq-p-500.jpg",
              }}
            />
            <AvatarFallback>
              <Text className="text-xl">ZN</Text>
            </AvatarFallback>
          </Avatar>
          <View className="h-20" />
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}

export default ScreenBudget;
